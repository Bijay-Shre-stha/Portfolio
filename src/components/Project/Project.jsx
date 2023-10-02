import './Project.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link'; 

import textCheck from '../Images/TextCheck.png'
import doko from '../Images/doko.png'

const Project = () => {
    return (
        <div className="projects" id="projects">
            <section className="project divider" id="project">
                <div className="container">
                    <h1 className="heading">Projects</h1>
                    <hr className="horizontal__line" />
                </div>
                <span className='text'><br />
                    Each project is a unique piece of development 🧩
                </span>

                <div className="project__details">
                    <h1 className='project__heading'>TextCheck</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="project__image__container">
                                    <img className='img-fluid project__image' src={textCheck} alt="TextCheck" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="project__text__container">
                                    <p className='project__text'>
                                        <span className='highlight'>TextCheck</span> is a web app for text enhancement, offering spelling checks, style improvements, word count tracking, translation, and more.`{` It's`} user-friendly, integrates with popular tools, and ensures data privacy. Perfect for writers, students, and professionals seeking to enhance their text effortlessly.
                                    </p>
                                    <img className='icons' src="https://skillicons.dev/icons?i=react" alt="react logo" />
                                    <img className='icons' src="https://skillicons.dev/icons?i=bootstrap" alt="bootstrap logo" />
                                    <br />
                                    <u className='fw-bold'>View Project</u>
                                    <div className="link">
                                        <a
                                            aria-label="github"
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://github.com/Bijay-Shre-stha/TextCheck"
                                            className="me-4"
                                        >
                                            <GitHubIcon className="link__icon" style={{ fontSize: '50px' }} />
                                        </a>

                                        <a
                                            aria-label="link"
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://bijay-shre-stha.github.io/TextCheck/"
                                        >
                                            <LinkIcon className="link__icon" style={{ fontSize: '50px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3 mb-3">
                    <div className="row">
                        <div className="col">
                            <hr className="border-bottom horizontal__line" />
                        </div>
                    </div>
                </div>
                <div className="project__details__reverse mt-3">
                    <h1 className='project__heading'>Refactored Doko</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="project__text__container">
                                    <p className='project__text'>
                                        <span className='highlight'>DOKO</span>  The portal would contain all the necessary information that a student
                                        would require during their four years of {`bachelor's`} program. The portal would also contain the profiles of all the students who have
                                        studied or are studying at DWIT. The profiles would contain the information about the students, their academic performance, and their
                                        achievements.
                                    </p>
                                    <img className='icons' src="https://skillicons.dev/icons?i=react" alt="react logo" />
                                    <img className='icons' src="https://skillicons.dev/icons?i=bootstrap" alt="bootstrap logo" />
                                    <br />
                                    <u className='fw-bold'>View Project</u>
                                    <div className="link">
                                        <a
                                            aria-label="github"
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://github.com/Bijay-Shre-stha/Frontend"
                                            className="me-4"
                                        >
                                            <GitHubIcon className="link__icon" style={{ fontSize: '50px' }} />
                                        </a>

                                        <a
                                            aria-label="link"
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://frontend-seven-umber-22.vercel.app/"
                                        >
                                            <LinkIcon className="link__icon" style={{ fontSize: '50px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="project__image__container">
                                    <img className='img-fluid project__image' src={doko} alt="doko" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project;