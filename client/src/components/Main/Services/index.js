import React, {useState} from 'react';
// import CardComponent from './CardComponent.js'
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactUs from '../ContactUs/ContactUs';
import './services.scss'

import mobileProductImg from "./../../../assets/images/mobile-cubes.png" 


const developersData = [
    {
        name: <><span>React</span> Developers</>,
        class: 'react',
        text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    },
    {
        name: <><span>Python</span> Developers</>,
        class: 'python',
        text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    },
    // {
    //     name: "UI/UX Designers",
    //     class: 'ux',
    //     text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    // },
    // {
    //     name: "QA Engineers",
    //     class: 'qa',
    //     text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    // },
];

const designersData = [
    {
        name: <><span>UI</span> Designers</>,
        class: 'ux',
        text: 'Our Developers are intimately familiar with both ReactJS, React Native for app service, and a host of the available third party components.'
    },
    {
        name: <><span>UX</span> Designers</>,
        class: 'ux',
        text: 'Our Developers are intimately familiar with both ReactJS, React Native for app service, and a host of the available third party components.'
    },
]

const qaData = [
    {
        name: <><span>Automated</span> QA</>,
        class: 'ux',
        text: 'Our Developers are intimately familiar with both ReactJS, React Native for app service, and a host of the available third party components.'
    },
    {
        name: <><span>Manual</span> QA</>,
        class: 'ux',
        text: 'Our Developers are intimately familiar with both ReactJS, React Native for app service, and a host of the available third party components.'
    },
]

const developersJSX = developersData.map(x => (
    <div className={`${x.class} single-service`}>
        <h3>{x.name}</h3>
        <p>{x.text}</p>
    </div>
))

const designersJSX = designersData.map(x => (
    <div className={`${x.class} single-service`}>
        <h3>{x.name}</h3>
        <p>{x.text}</p>
    </div>
))

const qaJSX = qaData.map(x => (
    <div className={`${x.class} single-service`}>
        <h3>{x.name}</h3>
        <p>{x.text}</p>
    </div>
))


function Services(props) {
    return(
    <div className="services">
        <div className="landing-page page">

        <div className="primary-content">
            <h1>Our Speciality Services</h1>
        </div>
            <div className="secondary-content" >
                <p>Necessitie can provide you with top developers that have skills focused on your needs so you know they will be able to excel at the tasks you throw at them.</p>
                <Button className="action-btn">Let's work together</Button>
                <Button className="action-btn outline tablet">Get a quote</Button>
            </div>
        </div>
        <div className="intro-page page">
            <div className="primary-content">
                <h2>Our Custom Software Development Services</h2>
                <p><span>Find people that are specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.<br/><br/> 

                    A broad range front end developer will get the job done, but a React specialist will get it done faster, and more robust.</p>
            </div>
            <div className="secondary-content">
            </div>
        </div>
        {/* <div className="background-triangle intro"></div> */}
        <div className="webdev-page page">
            <div className='primary-content'>
                <h2>Web Development</h2>
                <p>Find people that are <span>specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truly utilize the tools at hand.</p>
                <Button className="action-btn hire">Hire Top-Level Developers</Button>
            </div>
            <div className='secondary-content'>
                <div className="service-container">
                    {developersJSX}
                </div>
            </div>
        </div>
        <div className="white-spacer tablet"></div>
        <div className="background-triangle webdev tablet"></div>
        <div className="design-page page">
            <div className='primary-content'>
                <div className="tablet">test</div>
                <div className="text-container">
                    <h2>Product Design</h2>
                    <p>Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p>
                    <Button className="action-btn hire">Hire Top-Level Designers</Button>
                </div>
                
            </div>
            <div className='secondary-content'>
                <div className="service-container">
                    {designersJSX}
                </div>
            </div>
        </div>
        <div className="white-spacer tablet"></div>
        <div className="background-triangle webdev tablet"></div>
        <div className="qa-page page">
            <div className='primary-content'>
                <div className="text-container">
                    <h2>Quality Assurance</h2>
                    <p>Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p>
                    <Button className="action-btn hire">Hire Top-Level Engineers</Button>
                </div>
                <div className="tablet">test</div>
            </div>
            <div className='secondary-content'>
                <div className="service-container">
                    {qaJSX}
                </div>
            </div>
        </div>
        <div className="process-page page">
            <div className='primary-content'>
                <h2>Our Product Ideation & Strategy process</h2>
                <h4>Competitive analysis and market insights</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                <img src={mobileProductImg} className="mobile-product-img mobile"/>

                {/* <Button className="action-btn">Hire Top-Level Engineers</Button> */}

            </div>
            <div className='secondary-content'>

            </div>

        </div>
        <div className="contact-page page">
            <ContactUs/>
        </div>
    </div>
    )
}

export default Services;