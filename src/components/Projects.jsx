import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MeetApp from "../img/meet.png";
import Pokedox from "../img/pokedox.png";
import Ecommerce from "../img/ecommerce.png";
import MyFlix from "../img/myflix-react.png";
import MyFlixAngular from "../img/myFlixAngular.png";
import ChatApp from "../img/chat-app.png";

function Projects() {
  return (
    <section className="projects-section">
      <h1 className="work-title">Work</h1>
      <Container>
        <Row className="project-grid">
          {/* Meet App */}
          <Col xs={12} md={6} className="grid-item">
            <div className="project-card">
              <h2 className="grid-item__title">
                <a
                  href="https://staszewska.github.io/meet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meet App
                </a>
              </h2>
              <p className="grid-item__details">
                Meet is a serverless, progressive web application (PWA) built
                with React, leveraging a test-driven development (TDD) approach.
                The app uses the Google Calendar API to fetch upcoming events
                and offers a seamless user experience with offline support and
                data visualizations.
              </p>
              <img className="work-images" src={MeetApp} alt="Meet App" />
              <div className="grid-item__link">
                <a
                  href="https://github.com/staszewska/meet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See project on GitHub
                </a>
              </div>
            </div>
          </Col>

          {/* Pokedox App */}
          <Col md={6} xs={12} className="grid-item">
            <div className="project-card">
              <h2 className="grid-item__title">
                <a
                  href="https://staszewska.github.io/simple-js-app-pokedex/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokedox App
                </a>
              </h2>
              <p className="grid-item__details">
                A compact web application utilizing HTML, CSS, Bootstrap, and
                JavaScript to fetch and display data from an external API,
                facilitating detailed viewing of individual data points.
              </p>
              <img className="work-images" src={Pokedox} alt="Pokedox App" />
              <div className="grid-item__link">
                <a
                  href="https://github.com/staszewska/simple-js-app-pokedex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See project on GitHub
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="project-grid">
          {/* Ecommerce React App */}
          <Col md={6} xs={12} className="grid-item">
            <div className="project-card">
              <h2 className="grid-item__title">
                <a
                  href="https://strong-basbousa-e33b1f.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ecommerce React App
                </a>
              </h2>
              <p className="grid-item__details">
                The React E-commerce App is a fully functional online store
                built with React, Easy Peasy for state management, and
                React-Bootstrap for UI, allowing users to browse products,
                manage their cart, and complete purchases using a combination of
                FakeStore API and a custom RESTful API.
              </p>
              <img
                className="work-images"
                src={Ecommerce}
                alt="Ecommerce React App"
              />
              <div className="grid-item__link">
                <a
                  href="https://github.com/staszewska/react-ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See project on GitHub
                </a>
              </div>
            </div>
          </Col>

          {/* MyFlix App */}
          <Col md={6} xs={12} className="grid-item">
            <div className="project-card">
              <h2 className="grid-item__title">
                <a
                  href="https://myflixms.netlify.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyFlix App
                </a>
              </h2>

              <p className="grid-item__details">
                myFlix-client is a React-based application that interfaces with
                a REST API to provide users with comprehensive movie data, user
                registration, and personalized favorite lists, featuring a sleek
                UI built with Bootstrap and efficiently bundled using Parcel.
              </p>

              <img className="work-images" src={MyFlix} alt="MyFlix App" />

              <div className="grid-item__link">
                <a
                  href="https://github.com/staszewska/myFlix-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See project on GitHub
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="project-grid">
          {/* MyFlixApp - Angular */}
          <Col md={6} xs={12} className="grid-item">
            <div className="project-card">
              <h2 className="grid-item__title">
                {" "}
                <a
                  href="https://staszewska.github.io/myFlix-Angular-App/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyFlixApp - Angular
                </a>
              </h2>

              <p className="grid-item__details">
                MyFlixApp is an Angular-based application that interfaces with a
                REST API to provide users with comprehensive movie data, user
                registration, and personalized favorite lists.
              </p>

              <img
                className="work-images"
                src={MyFlixAngular}
                alt="MyFlix Angular"
              />

              <div className="grid-item__link">
                <a
                  href="https://github.com/staszewska/myFlix-Angular-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See project on GitHub
                </a>
              </div>
            </div>
          </Col>

          {/* ChatApp */}
          <Col md={6} xs={12} className="grid-item">
            <div className="project-card">
              <h2 className="grid-item__title">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  ChatApp
                </a>
              </h2>

              <p className="grid-item__details">
                A mobile chat application built with React Native. The app
                provides users with a chat interface and options to share images
                and their location.
              </p>

              <img className="work-images" src={ChatApp} alt="ChatApp" />

              <div className="grid-item__link">
                <a
                  href="https://github.com/staszewska/chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See project on GitHub
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
