import './contact.css';
import contactImage from '../Images/contact-page.png';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/postContact', data);
            alert('Form submitted successfully!');
            // You can clear the form data here if needed
            setData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error submitting the form:', error);
            if (!data.name | !data.email | !data.phone | !data.message) {
                alert('Please fill the form')
            } else {
                alert('Something went wrong. Please try again later.');
            }
        }
    }
    return (
        <div>
            <section className="contact" id="contact">
                <div className="container contact__me">
                    <h1 className="heading">Contact Me</h1>
                    <hr className="horizontal__line" />
                    <iframe className='container map__container' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.676760282321!2d85.35418827519503!3d27.72726482461318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bdfa7513eb5%3A0xd4e8effaddd47036!2sSaraswatinagar%20Rd%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1696961972540!5m2!1sen!2snp"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <div className="row image__form">
                        <div className="col-md-6">
                            <div className="image__container">
                                <img src={contactImage} alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form__container">
                                <form action="/postContact" method="post" onSubmit={handleSubmit}>
                                    <div className="input__container">
                                        <label className="label" htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" placeholder="Name" onChange={handleInputChange} value={data.name} />
                                    </div>
                                    <div className="input__container">
                                        <label className="label" htmlFor="email">  Email </label>
                                        <input type="email" id="email" name='email' placeholder="Email" onChange={handleInputChange} value={data.email} />
                                    </div>
                                    <div className="input__container">
                                        <label className="label" htmlFor="phone"> Phone </label>
                                        <input type="text" id="phone" name='phone' placeholder="Phone" onChange={handleInputChange} value={data.phone} />
                                    </div>
                                    <div className="input__container">
                                        <label className="label" htmlFor="message"> Message </label>
                                        <textarea name="message" id="message" placeholder="Enter your message" onChange={handleInputChange} value={data.message}></textarea>
                                    </div>
                                    <button className="submit__button" type='submit' onClick={handleSubmit}>Send</button>
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
