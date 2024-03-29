import React, { Component } from 'react';
import {
	Container, Row, Col,
} from 'reactstrap';

import '../css/card.css';
import Card from "../components/card";
import projects from '../data/data.json';

const categories = [
	{
		category: "all",
		buttonText: "Show All",
		activeId: 0
	},
	{
		category: "cgi",
		buttonText: "Computer Graphics",
		activeId: 1
	},
	{
		category: "webb",
		buttonText: "Webb",
		activeId: 2
	},
	{
		category: "games",
		buttonText: "Games",
		activeId: 3
	},
	{
		category: "other",
		buttonText: "Other",
		activeId: 4
	}
]

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cat: "games",
			shownProjects: projects,
			isActive: 0
		}
	}
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	handleClick = (category) => {
		const value = category.category;
		this.setState({cat: value});
		if (value === "all") {
			this.setState({shownProjects: projects});
		}
		else {
			this.setState({shownProjects: projects.filter(project => project.category === value)});
		}
		this.setState({isActive: category.activeId});
	};

	render() {
		console.log(projects);
		console.log(this.state.shownProjects);
		return (
			<div className="projects-body">
				<Container className="projects-grid">
					<Row>
						<Col col={12}>
							<h2 className="projects-title light-title">Projects</h2>
						</Col>
					</Row>
					<Row className="projects-tabs">
						<Col col={12}>
							{categories.map((category, index) =>
								<button className={'btn-category ' + (this.state.isActive === category.activeId ? 'active-btn' : 'button type1')}
												key={index}
												onClick={() => this.handleClick(category)}>{category.buttonText}</button>
							)}
						</Col>
					</Row>
					
					<Row className="projects-cards">
						<Col col={12} className="cards-col">
							<div className="row">
									{this.state.shownProjects.map((project, index) =>
										<Card hoverable key={index} item={project}/>
									)}
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Projects;