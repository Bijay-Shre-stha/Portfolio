import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Hero.css';

import smile from '../Images/smile.png';
import wave from '../Images/wave.png';
import student from '../Images/student.png';
import developer from '../Images/technologist.png';
import profile from '../Images/profile-modified.png';
import learner from '../Images/learner.png';

const Hero = () => {
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        // Use setTimeout to hide the cursor after Typewriter animation completes
        const timeout = setTimeout(() => {
            setShowCursor(false);
        }, 5000); // Adjust the delay as needed

        return () => {
            // Cleanup the timeout to avoid memory leaks
            clearTimeout(timeout);
        };
    }, []);

    return (
        <section className="home" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-2 order-md-1">
                        <div className="image__container">
                            <img className="profile__image" src={profile} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="content">
                            <div className="intro__text">
                                <h1>
                                    <span className="fw-bold">Hi,</span> {"I'm "}
                                    <img className="img__smaller img__wave" src={wave} alt="" />
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .typeString(
                                                    "<span style='color: #ff1717;'>Bijay Shrestha</span>"
                                                )
                                                .typeString(
                                                    `<img src='${smile}' alt='smile' class='img__smaller' />`
                                                )
                                                .start()
                                                .callFunction(() => {
                                                    // Use showCursor state to hide the cursor
                                                    if (showCursor) {
                                                        const cursor = document.querySelector(
                                                            '.Typewriter__cursor'
                                                        );
                                                        if (cursor) {
                                                            cursor.style.display = 'none';
                                                        }
                                                    }
                                                });
                                        }}
                                    />
                                </h1>
                            </div>

                            <br />

                            <h2>
                                {"And I'm a "}
                                <span className="typewriter__text">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                `Computer Science Student <img src='${student}' alt='student' class='img__smaller' />`,
                                                `Full-Stack Developer <img src='${developer}' alt='developer' class='img__smaller' />`,
                                                `Self-Driven Learner <img src='${learner}' alt='learner' class='img__smaller' />`,
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                                <br />
                                Native Developer from
                                <Typewriter
                                    options={{
                                        strings: [
                                            "<span style='color: #ff1717;'>Kathmandu, Nepal</span>",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h2>

                            <div className="footer__social">
                                <a
                                    aria-label="github"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/Bijay-Shre-stha"
                                >
                                    <GitHubIcon className="footer__icon" style={{ fontSize: '40px' }} />
                                </a>
                                <a
                                    aria-label="linkedin"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/bijay-shrestha-771b66225/"
                                >
                                    <LinkedInIcon className="footer__icon" style={{ fontSize: '40px', }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
