import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";

import portrait from './../images/linnea-grayscale.jpg';

class About extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<div className="about-body vertical-center">
				<Container className="about-grid">
					<div className="about-head">
						<Row className="about-top-content">
							<Col md="12" lg="6" className="about-img">
								{/*style={{ backgroundImage: 'url(' + portrait + ')' }}>*/}
								<img className="portrait-img"
										 src={ portrait }
										 alt="Portrait Image"
								/>
							</Col>
							<Col md="12" lg="6">
								<div className="about-info">
									<h2 className="about-title">About Me</h2>
									<p className="text-left">My name is Linnea Bergman, and
										I am currently working as a Gameplay Programmer after finishing studying
										MSc in Media Technology and Engineering at Linköping University in Sweden.
									</p>
									<p className="text-left">
										I first came in contact with computer graphics, programming, game development and simulations
										at the University and got hooked! The mixture of logic and creativity appealed to me, and it
										is something which I have become passionate about. My free time is usually spent on various projects,
										such as personal developments or handicrafts, where I can be logical and creative.
									</p>
									<p className="text-left">
										Discovering new places, skills, and technologies are some of the things that inspire me daily.
										I can often be found running around in the city or nearby forests.
									</p>
								</div>
							</Col>
						</Row>
					</div>
					<div className="about-bottom-content">
						<div className="about-work">
							<Row>
								<Col col={12}>
									<h4 className="project-subtitle">Work Experience</h4>
								</Col>
							</Row>
							<Row>
								<Col col={6} className="about-item text-left">
									<p>Junior Gameplay Programmer, Ubisoft Annecy</p>
									<p>Head of Education, Student Council LinTek, Linköping University</p>
									<p>M.S thesis position / Intern, Goodbye Kansas Studios</p>
									<p>Teaching Assistant, Linköping University</p>
									<p>Software Engineering Intern, SAAB</p>
									<p>Form Teacher, Linköping University</p>
									<p>Software Engineering Intern, Westermo</p>
								</Col>
								<Col col={6} className="about-year text-right">
									<p>2022-</p>
									<p>2020</p>
									<p>Autumn 2019</p>
									<p>Autumn 2018</p>
									<p>Summer 2017</p>
									<p>Autumn 2016</p>
									<p>Summer 2015</p>
								</Col>
							</Row>
						</div>
						<div className="about-work">
							<Row>
								<Col col={12}>
									<h4 className="project-subtitle">Education</h4>
								</Col>
							</Row>
							<Row>
								<Col col={6} className="about-item text-left">
									<p>MSc Media Technology and Engineering, Linköping University</p>
									<p>Exchange Semester, Waseda University, Tokyo</p>
									<p>MSc Computer Science and Engineering, Linköping University</p>
									<p>Kudan Institute of Japanese Language and Culture, Tokyo</p>
								</Col>
								<Col col={6} className="about-year text-right">
									<p>2015-2020</p>
									<p>Spring 2019</p>
									<p>2014-2015</p>
									<p>2013-2014</p>
								</Col>
							</Row>
						</div>
						<div className="about-work">
							<Row>
								<Col col={12}>
									<h4 className="project-subtitle">Non-Profit Work</h4>
								</Col>
							</Row>
							<Row>
								<Col col={6} className="about-item text-left">
									<p>Welcoming Committée for 200 new students, Linköping University</p>
									<p>Head of Marketing, Career Fair LARM, Linköping University</p>
									<p>Studentfiket, On-campus café, Linköping University</p>
								</Col>
								<Col col={6} className="about-year text-right">
									<p>2018</p>
									<p>2017-2018</p>
									<p>2015-2016</p>
								</Col>
							</Row>
						</div>
					</div>
				</Container>
			</div>
		)
	}
}

export default About;