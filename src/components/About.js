import React from "react";
import Modal from "./Modal";
import Navigation from "./Navigation";


const About = () => {
    return (
        <>
            <Modal />
            <Navigation />
            <div className="about__page">
                <div className="aboutpage__header">About</div>
                <div className="aboutpage__story">
                    <div className="aboutpage__col1">
                        <div className="aboutpage__col1--first">I am a full stack software engineer who is a computer hardware enthusiast, avid problem solver, passionate about serving others, and dedicated to learning new things.</div>
                        <div className="aboutpage__col1--second">I have experience working with a variety of languages and technologies such as JavaScript, Python, React, Redux, HTML, CSS, Node.js, PostgreSQL, Express, Flask, AWS, D3.js, and Docker.</div>
                    </div>
                    <div className="aboutpage__col2">
                        <div className="aboutpage__col2--body">I enjoy creating web applications that look and feel great while being useful for many others. I also enjoy playing the saxophone and guitar, cycling, and photography.</div>
                    </div>
                </div>
                <a href={require("../assets/documents/Ryu_Douglas_resume.pdf")} target="blank" className="aboutpage__resume">RESUME</a>
            </div >
        </>
    );
}

export default About;