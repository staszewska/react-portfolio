import React from "react";

function ProjectCard({ title, description, demoLink, image, githubLink }) {
  return (
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
  );
}

export default ProjectCard;
