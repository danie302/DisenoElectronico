// Dependencies
import React, { Component } from "react";

// Import utils
import isEmpty from "../../utils/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get firstname
    const firstName = profile.user.name.trim().split(" ")[0];

    // Skill List
    const skills = profile.skills.map((skill, id) => (
      <div key={id} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">
              {!isEmpty(profile.bio) ? firstName + "'s Bio" : null}
            </h3>
            <p className="lead text-center">
              {!isEmpty(profile.bio) ? <span>{profile.bio}</span> : null}
            </p>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
