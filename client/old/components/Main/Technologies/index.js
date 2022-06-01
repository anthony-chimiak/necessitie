import React from 'react';
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import ContactUs from '../ContactUs/ContactUs';

import './technologies.scss'

function Technologies(props) {
    return (
    <div className='technologies-page'>
        <div className="landing-page primary-color page">

        <div className="primary-content">
            <h1>Technologies</h1>
        </div>
        <div className="secondary-content" >
            <p>Necessitie can provide you with top developers that have skills focused on your needs so you know they will be able to excel at the tasks you throw at them.</p>
            <Button className="work-together-btn">Let's work together</Button>
        </div>
        </div>
        <div className="intro-page page">
            <div className="primary-content">
                <h3>Services Intro</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div className="secondary-content">
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <ContactUs />
    </div>
    )
}

export default Technologies;