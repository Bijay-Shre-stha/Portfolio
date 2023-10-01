import './About.css';
import developer from '../Images/developer-image.jpg';

const About = () => {
    return (
        <div>
            <section className='about' id='about'>
                <div className="container">
                    <h1 className="heading">About Me</h1>
                    <hr className="horizontal__line" />
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12">
                            <h3 className='heading fw-bold mt-5'>A dedicated <span className='full__stack' >Full-Stack</span> Developer</h3>
                            <p className='about__text'>
                                As a dedicated BSc CSIT scholar with expertise in the <span className='full__stack'>MERN stack</span>, {`I've`} excelled in MongoDB, Express.js, React, and Node.js. {`I've`} created dynamic web apps with HTML, CSS, JavaScript, React, and Tailwind. My problem-solving skills and passion for tech drive me to tackle complex challenges effectively.                            </p>
                        </div>
                        <div className="col-md-6 col-sm-12 image__container">
                            <img className='img-fluid developer__image' src={developer} alt="Developer" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
