import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MeetApp from "../assets/meet.png";
import Pokedox from "../assets/pokedox.png";
import Ecommerce from "../assets/ecommerce.png";
import MyFlix from "../assets/myflix-react.png";
import MyFlixAngular from "../assets/myFlixAngular.png";
import ChatApp from "../assets/chat-app.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Meet App",
    description:
      "Meet is a serverless, progressive web application (PWA) built with React, leveraging a test-driven development (TDD) approach. The app uses the Google Calendar API to fetch upcoming events and offers a seamless user experience with offline support and data visualizations.",
    image: MeetApp,
    demoLink: "https://staszewska.github.io/meet/",
    githubLink: "https://github.com/staszewska/meet",
  },
  {
    title: "Pokedox App",
    description:
      "A compact web application utilizing HTML, CSS, Bootstrap, and JavaScript to fetch and display data from an external API, facilitating detailed viewing of individual data points.",
    image: Pokedox,
    demoLink: "https://staszewska.github.io/simple-js-app-pokedex/",
    githubLink: "https://github.com/staszewska/simple-js-app-pokedex",
  },
  {
    title: "Ecommerce React App",
    description:
      "The React E-commerce App is a fully functional online store built with React, Easy Peasy for state management, and React-Bootstrap for UI, allowing users to browse products, manage their cart, and complete purchases using a combination of FakeStore API and a custom RESTful API.",
    image: Ecommerce,
    demoLink: "https://strong-basbousa-e33b1f.netlify.app/",
    githubLink: "https://github.com/staszewska/react-ecommerce",
  },
  {
    title: "MyFlix App",
    description:
      "myFlix-client is a React-based application that interfaces with a REST API to provide users with comprehensive movie data, user registration, and personalized favorite lists, featuring a sleek UI built with Bootstrap and efficiently bundled using Parcel.",
    image: MyFlix,
    demoLink: "https://myflixms.netlify.app/login",
    githubLink: "https://github.com/staszewska/myFlix-client",
  },
  {
    title: "MyFlixApp - Angular",
    description:
      "MyFlixApp is an Angular-based application that interfaces with a REST API to provide users with comprehensive movie data, user registration, and personalized favorite lists.",
    image: MyFlixAngular,
    demoLink: "https://staszewska.github.io/myFlix-Angular-App/welcome",
    githubLink: "https://github.com/staszewska/myFlix-Angular-App",
  },
  {
    title: "ChatApp",
    description:
      "A mobile chat application built with React Native. The app provides users with a chat interface and options to share images and their location.",
    image: ChatApp,
    demoLink: "#", // Update with the actual link if available
    githubLink: "https://github.com/staszewska/chat-app",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h1 className="work-title">Work</h1>
      <Container>
        <Row>
          {projectsData.map((project, index) => (
            <Col key={index} xs={12} md={6} className="grid-item">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
