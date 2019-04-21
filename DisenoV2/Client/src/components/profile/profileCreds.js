// Dependecies
import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { education } = this.props;
    const { experience } = this.props;

    // Experience Items
    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong>
          {exp.title}
        </p>
        {exp.location === "" ? null : (
          <p>
            <strong>Location:</strong>
            {exp.location}
          </p>
        )}
        {exp.description === "" ? null : (
          <p>
            <strong>Description:</strong>
            {exp.description}
          </p>
        )}
      </li>
    ));

    // Education Items
    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree:</strong>
          {edu.degree}
        </p>
        {edu.fieldofstudy === "" ? null : (
          <p>
            <strong>Field of Study:</strong>
            {edu.fieldofstudy}
          </p>
        )}
        {edu.description === "" ? null : (
          <p>
            <strong>Description:</strong>
            {edu.description}
          </p>
        )}
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Experience listed</p>
          )}
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No Education listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
