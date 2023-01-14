import React from "react";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import './contactus.scss'



function ContactUs() {
    return (
        <div className="contact-container">
            <p className="contact-header">Want to talk about your project?</p>
            <p className="mobile">At our agency, we specialize in matching businesses with top-quality developers who are the perfect fit for their specific roles. Whether you need a full team or just a few key players, we can help you find the talent you need to take your project to the next level.</p>
            <div className="contact-flex-cont">
                <div className="secondary-content">
                    <Form className="contact-form">
                            <Form.Field
                                id='form-input-control-error-email'
                                className="form-email"
                                control={Input}
                                label='Email*'
                                placeholder='YourEmail@Email.com'
                                />
                            <Form.Field
                                id='form-input-control-phone'
                                className="form-phone"
                                control={Input}
                                label='Phone'
                                placeholder='Enter your number and country code'
                            />
                            <Form.Field
                                id='form-textarea-control-opinion'
                                className="form-opinion"
                                control={TextArea}
                                label='How can we help you?'
                                placeholder="Give us some details about your project"
                                />
                            <Form.Field
                                id='form-button-control-public'
                                className="submit-button"
                                control={Button}
                                content='SUBMIT'
                            />
                    </Form>
                </div>
                <div className="primary-content">
                    <p className="tablet">We’re here to connect you with great developers perfect for your roles</p>
                    <div className="location-row address">
                        <LocationOnIcon/>
                        <span>88 Starr Street, Brooklyn NY</span>
                    </div>
                    <div className="phone-row address">
                        <PhoneIcon/>
                        <span onClick={() => {navigator.clipboard.writeText('16464348865')}}>1-646-434-8865</span>
                    </div>
                    <div className="email-row address">
                        <EmailIcon/>
                        <a href="mailto:anthony@necessitie.com">anthony@necessitie.com</a>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default ContactUs;