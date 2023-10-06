import './contact.css';
import contactImage from '../Images/contact-page.png';

const Contact = () => {
    return (
        <div>
            <section className="contact" id="contact">
                <div className="container contact__me">
                    <h1 className="heading">Contact Me</h1>
                    <hr className="horizontal__line" />

                    <div className="row image__form">
                        <div className="col-md-6">
                            <div className="image__container">
                                <img src={contactImage} alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form__container">
                                <form action="" method="">
                                    <div className="input__container">
                                        <label className="label" htmlFor="username">Username</label>
                                        <input className="input__info" type="text" id="username" placeholder="Username" />
                                    </div>
                                    <div className="input__container">
                                        <label className="label" htmlFor="email">  Email </label>
                                        <input  type="email" id="email" placeholder="Email" />
                                    </div>
                                    <div className="input__container">
                                        <label className="label" htmlFor="phone"> Phone </label>
                                        <input  type="text"  id="phone"  placeholder="Phone" />
                                    </div>
                                    <div className="input__container">
                                        <label className="label" htmlFor="message"> Message </label>
                                        <textarea  name="message" id="message" placeholder="Enter your message" ></textarea>
                                    </div>
                                    <button className="submit__button">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
