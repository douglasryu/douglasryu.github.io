import React from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";

const Navigation = props => {
    const onClickHandler = event => {
        props.openModal();
    }

    return (
        <div className="nav__container">
            <Link to="/" className="nav__logo">DOUGLAS RYU</Link>
            <button className="nav__menu" onClick={onClickHandler}><MenuIcon /></button>
        </div >
    );
}


const mapDispatchToProps = dispatch => {
    return {
        openModal: () => dispatch(openModal()),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    Navigation
);
