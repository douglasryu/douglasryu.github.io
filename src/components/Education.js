import React from "react";

import Modal from "./Modal";
import Navigation from "./Navigation";

const Education = () => {
    return (
        <>
            <Modal />
            <Navigation />
            <div className="education">
                <div className="education__header">
                    <div>Education /</div>
                    <div>Experience</div>
                </div>
                <div className="education__conatiner">
                    <div className="education__education">
                        <div className="education__year">2020</div>
                        <div className="education__type">Full Stack Development</div>
                        <div className="education__name">App Academy</div>
                        <div className="education__description">Rigorous 1000-hour software development course with a {"<"} 3% acceptance rate</div>
                    </div>
                    <div className="education__education">
                        <div className="education__year">2013-2015</div>
                        <div className="education__type">Interpreter Officer</div>
                        <div className="education__name">United States Forces Korea</div>
                        <div className="education__description">U.S. Army Commendation Medal</div>
                        <div className="education__description">R.O.K. Army Commendation for Excellence</div>
                    </div>
                    <div className="education__education">
                        <div className="education__year">2010-2016</div>
                        <div className="education__type">Biochemistry</div>
                        <div className="education__name">Colgate University</div>
                        <div className="education__description">B.A. Biochemistry</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;