import React from "react";
import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const { id } = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div> Posted by the net ninja</div>
          <div>3rd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
