import './Project.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link'; // Import LinkIcon
import textCheck from '../Images/TextCheck.png'

const Project = () => {
    return (
        <div>
            <section className="project divider" id="project">
                <div className="container">
                    <h1 className="heading">Projects</h1>
                    <hr className="horizontal__line" />
                </div>
                <span className='text'>
                    Each project is a unique piece of development 🧩
                </span>

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
            </section>
        </div>
    )
}

export default Project;
