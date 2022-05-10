import React, {useState} from 'react';
// import CardComponent from './CardComponent.js'
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import ContactUs from '../ContactUs/ContactUs';
import './services.scss'

const singleServicesData = [
    {
        name: "React Developers",
        class: 'react',
        text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    },
    {
        name: "Python Developers",
        class: 'python',
        text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    },
    {
        name: "UI/UX Designers",
        class: 'ux',
        text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    },
    {
        name: "QA Engineers",
        class: 'qa',
        text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    },
];

const singleServiceJSX = singleServicesData.map(x => (
    <div className={`${x.class}-page single-service page`}>
        <h3>{x.name}</h3>
        <p>{x.text}</p>
    </div>
))


function Services(props) {
    return(
    <div className="services">
        <div className="landing-page primary-color page">

        <div className="primary-content">
                    <h1>Outsource to developers specialized to your needs</h1>
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
        {singleServiceJSX}
        <div className="process-page page">
            <h3>Our Product Process</h3>
        </div>
        <ContactUs />
    </div>
    )
}

export default Services;