import React from 'react'
import video from '../images/video.mp4'
import { Link } from 'react-router-dom';

const home = () => (
    <div className="container">
        <video className="video" poster="/src/images/20190527_120223.jpg" autoPlay loop muted >
            <source src={video} type="video/mp4" />
            <source src={video} type="video/webm" />
        </video>
        <div className="jumbotron mt-5">
            <h1 className="display-3">Clayborn Guess</h1>
            <p className="lead">I am a Developer</p>
            <hr className="my-4" />
            <p>Click the button below to check out our awesome blog.</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/blog" role="button">Check out our blog</Link>
            </p>
        </div>
    </div>
);


export default home;
