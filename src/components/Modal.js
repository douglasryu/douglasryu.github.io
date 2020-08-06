import React from "react";
import { NavLink } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";

const Modal = props => {
    const { modal } = props;

    if (!modal) return null;

    const handleBackgroundClick = event => {
        props.closeModal();
    }

    const handleChildClick = event => {
        event.stopPropagation();
        props.closeModal();
    }

    return (
        <div onClick={handleBackgroundClick} className="modal__background">
            <div className="about" onClick={handleChildClick}>
                <div className="about__pic--container">
                    <img className="about__pic" src={require("../assets/images/profilepic2.jpg")} alt="profile-pic" />
                </div>
                <div className="about__story">
                    <div className="about__story--body">I am a full stack software engineer who is a computer hardware enthusiast, avid problem solver, passionate about serving others, and dedicated to learning new things. I enjoy creating web applications that look and feel great while being useful for many others.</div>
                </div>
                <div className="about__contact">
                    <a href="mailto:douglasryu@hotmail.com" className="about__email"><EmailIcon style={{ fontSize: 35 }} /></a>
                    <a href="https://github.com/douglasryu" className="about__git"><GitHubIcon style={{ fontSize: 30 }} /></a>
                    <a href="www.linkedin.com/in/douglasryu" className="about__linkedin"><LinkedInIcon style={{ fontSize: 35 }} /></a>
                    <a href="https://angel.co/u/douglasryu" className="about__angellist"><svg enableBackground="0 0 150 150" height="35px" viewBox="0 0 150 150" width="35px"><circle cx="74.983" cy="75.042" fill="#000000" r="65.487" /><path clipRule="evenodd" d="M68.229,40.789c-0.875-2.257-1.967-6.003-4.02-7.008    c-1.618-0.791-3.189-0.057-3.792,1.034c-1.579,2.86,0.042,7.607,0.92,10.452c2.149,6.977,4.999,14.344,7.237,20.561    c1.584-1.272,5.474-0.827,8.269-0.574C74.227,57.444,71.302,48.698,68.229,40.789z M99.702,46.302    c0.811-2.575,2.124-4.738,1.836-7.695c-0.174-1.829-1.267-3.327-3.099-3.217c-2.798,0.168-4.365,4.429-5.283,6.662    c-3.226,7.842-5.968,16.267-8.385,24.122c2.746,0.278,5.148,0.899,7.811,1.263C94.961,61.207,97.483,53.354,99.702,46.302z     M60.074,102.814c1.978,0.661,4.611,0.146,4.939-1.724c0.325-1.857-1.296-3.612-1.839-4.479c-2.051-3.286-3.201-4.755-5.742-7.352    c-1.008-1.03-2.419-2.626-3.905-2.757c-2.428-0.214-4.373,2.362-5.17,3.791c-2.289,4.113-0.15,9.749,1.837,12.979    c4.702,7.637,12.25,13.855,24.237,13.783c10.155-0.063,17.09-5.176,21.48-10.567c4.863-5.973,7.767-14.551,7.12-24.926    c-0.121-1.955-0.402-4.107-1.494-5.858c-1.842-2.96-7.239-4.242-11.943-5.283c-2.236-0.494-4.773-0.866-7.466-1.148    c-3.565-0.371-9.64-1.379-11.258,0.689c-1.404,1.795-0.238,4.648,0.46,5.742c2.57,4.031,10.161,4.595,16.654,4.595    c3.362,0,8.008-0.76,7.468,2.528c-0.247,1.497-3.99,2.354-5.858,3.1c-2.117,0.847-4.144,2.225-5.514,3.446    c-2.631,2.348-6.197,6.491-6.547,11.371c-0.33,4.594,2.069,5.869,1.606,10.566c-4.91-0.905-5.552-6.083-5.856-11.599    c-1.127,0.506-2.751,0.559-4.135,0.229c1.896,6.915-5.104,9.46-10.225,7.008c-2.007-0.962-4.085-2.885-5.627-4.939    c-1.632-2.173-3.268-5.158-1.609-7.695C54.307,96.573,56.082,101.479,60.074,102.814z M55.71,76.626    c-0.177,2.21,1.589,4.777,2.412,6.203c2.197,3.807,4.54,6.836,7.466,9.763c1.313,1.313,3.413,3.469,5.515,3.217    c1.027-0.124,2.333-1.396,2.525-2.527c0.348-2.03-1.112-4.573-1.838-6.318c-1.573-3.782-3.645-7.666-5.742-10.567    c-1.419-1.961-3.156-4.373-5.857-4.135C58.47,72.412,55.88,74.489,55.71,76.626z M77.419,90.41    c1.921-2.215,4.127-4.144,6.432-5.973c-3.514-0.086-6.786-1.023-9.419-1.608C75.608,85.175,76.581,87.726,77.419,90.41z" fill="#FFFFFF" fillRule="evenodd" /></svg></a>
                </div>
                <a href={require("../assets/documents/Ryu_Douglas_resume.pdf")} target="blank" className="about__resume">RESUME</a>
            </div >
            <div className="modal__child" onClick={handleChildClick}>
                <NavLink to="/about" className="nav__item">About me</NavLink>
                <NavLink to="/projects" className="nav__item">Projects</NavLink>
                <NavLink to="/skills" className="nav__item">Skills</NavLink>
                <NavLink to="/education" className="nav__item">Education</NavLink>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    Modal
);
