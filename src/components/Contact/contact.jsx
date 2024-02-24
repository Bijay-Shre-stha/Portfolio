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
