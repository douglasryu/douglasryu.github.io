import React from "react";
import MinimizeIcon from '@material-ui/icons/Minimize';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import CancelIcon from '@material-ui/icons/Cancel';

const Landing = () => {
    return (
        <div className="landing__page">
            <div className="landing__container">
                <img className="landing__image" src={require("../assets/images/snowmountain.jpg")} alt="main_image" />
            </div>
            <div className="landing__animation">
                <div className="landing__top">
                    <MinimizeIcon className="landing__top--menu" style={{ fill: "#ffffff" }} />
                    <WebAssetIcon className="landing__top--menu" style={{ fill: "#ffffff" }} />
                    <CancelIcon className="landing__top--menu" style={{ fill: "#ffffff" }} />
                </div>
                <div className="landing__text--container">
                    <div className="landing__text--header">Hello</div>
                    <div className="landing__text--body"></div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
