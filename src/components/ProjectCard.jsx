import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, demoLink, image, githubLink }) {
  return (
    <Col xs={12} md={6} className="grid-item">
      <div className="project-card">
        <h2 className="grid-item__title">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p className="grid-item__details">{description}</p>
        <img className="work-images" src={image} alt={title} />
        <div className="grid-item__link">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            See project on GitHub
          </a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
