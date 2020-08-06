import React from "react";

import Modal from "./Modal";
import Navigation from "./Navigation";

const Project = () => {
    return (
        <>
            <Modal />
            <Navigation />
            <div className="project">
                <div className="project__header">Projects</div>
                <div className="project__projects">
                    <div className="project__container1">
                        <div className="project__title">Elbows</div>
                        <div className="project__description">Social Network</div>
                        <img className="project__elbows--img" src={require("../assets/images/elbows_logo.png")} alt="project-img" />
                    </div>
                    <div className="project__container2">
                        <div className="project__title">Justcamp</div>
                        <div className="project__description">Outdoor & Camping</div>
                        <img className="project__justcamp--img" src={require("../assets/images/justcamp_logo.svg")} alt="project-img" />
                    </div>
                    <div className="project__container2">
                        <div className="project__title">Rockinhood</div>
                        <div className="project__description">Stock trade</div>
                        <img className="project__rockinhood--img" src={require("../assets/images/rockinhood_logo.png")} alt="project-img" />
                    </div>
                    <div className="project__container1">
                        <div className="project__title">Flash</div>
                        <div className="project__description">E-Commerce</div>
                        <img className="project__flash--img" src={require("../assets/images/flash_logo.png")} alt="project-img" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;