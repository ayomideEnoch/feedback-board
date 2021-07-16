import React from "react";
import Navbar from "./Navbar"
import Main from "./Main"
import '../css/Feedback.css'

function Home() {
    return(
        <div className="Feedback container">
            <div className="row mt-5">
            <div className="col-md-3">
                <div className="sideText px-4">
                    <h5 className="challengeSchool pt-5 ">Frontend Mentor</h5>
                    <p className="challengeQuest pb-3">Feedback Board</p>
                </div>
                <div className="categories my-3 px-4">
                    <div className="top d-flex justify-content-between">
                    <div className="all">All</div>
                    <div className="ui">UI</div>
                    <div className="ux">UX</div>
                    <div className="nil"></div>
                    </div>
                    <div className="mid d-flex justify-content-between my-2">
                    <div className="ui">Enhancement</div>
                    <div className="ui">Bug</div>
                    </div>
                    <div className="bottom d-flex justify-content-between">
                    <div className="ui">Feature</div>
                    </div>
                </div>
                <div className="categories">
                    <div  className=" d-flex justify-content-between  my-3 px-4">
                    <h5 className="roadmap">Roadmap</h5>
                    <h6 className="view">View</h6>
                    </div>
                    <div className="d-flex justify-content-between px-4">

                    <div className="planned"><ul>
                        <li>Planned</li>
                        <li>In-Progress</li>
                        <li>Live</li>
                    </ul></div>
                    <div>
                        <div>2</div>
                        <div>3</div>
                        <div>1</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <Navbar />
                <Main />
            </div>
            </div>
        </div>
    )
}

export default Home