import React from "react";
import Modal from "./Modal";
import Navigation from "./Navigation";
import Landing from "./Landing";

const MainPage = props => {
    return (
        <>
            <Modal />
            <Navigation />
            <Landing />
        </>
    );
}

export default MainPage;
