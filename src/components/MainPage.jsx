import React from "react";
import portfolioPicture from "../assets/portfolio-picture.jpeg";
import { Container, Row, Col } from "react-bootstrap";

function MainPage() {
  return (
    <>
      <Container>
        <Row className="main-page">
          <Col
            md={{ span: 6, offset: 0 }}
            lg={{ span: 5, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
            className="text-center"
          >
            {/* <div className="profile"> */}
            <img
              src={portfolioPicture}
              className="profile__portrait"
              alt="Lisa Gringl Portrait"
            />
            {/* </div> */}
          </Col>

          <Col md={6} lg={5} xl={4}>
            <div className="profile-text text-center">
              <h1>Hello World!</h1>
              <p>
                Hi, I'm Gosia, based in Germany. I'm actively seeking a junior
                developer role to apply my skills and contribute to exciting
                projects in IT.
              </p>
              <a
                href="https://github.com/staszewska"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out some of my code
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainPage;
