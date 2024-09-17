import React from "react";
import linkedinIcon from "../assets/linkedin_icon.svg";
import githubIcon from "../assets/github_icon.svg";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="page-footer">
        <Row className="footer-row" style={{ "padding-top": "50px" }}>
          <Col lg={{ span: 4, offset: 4 }} xs={12} className="text-center">
            <h2>Find me on:</h2>
            <div className="social-media">
              <a
                href="https://github.com/staszewska"
                target="_blank"
                rel="noopener noreferrer"
                style={{ "padding-right": "10px" }}
              >
                <img src={githubIcon} alt="github-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/małgorzata-staszewska-bui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="linkedin-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
