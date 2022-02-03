import React from 'react';
import CardComponent from './CardComponent.js'
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';

import './home.scss'

export const Home = (props) => {
    const technologyJSX = [
        {
            name: 'Android',
            img: 'https://freeiconshop.com/wp-content/uploads/edd/android-flat.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 1
        },
        {
            name: 'IOS',
            img: 'https://icon-library.com/images/ios-icon/ios-icon-25.jpg',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 2
        },
        {
            name: 'Frontend',
            img: 'https://cdn-icons-png.flaticon.com/512/2166/2166895.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 3
        },
        {
            name: 'Backend',
            img: 'https://cdn-icons-png.flaticon.com/512/2166/2166823.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 4
        },
        {
            name: 'Cross-platform',
            img: 'https://cdn-icons-png.flaticon.com/512/2037/2037075.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 5
        },
        {
            name: 'Articial-Intelligence',
            img: 'https://cdn-icons-png.flaticon.com/512/1985/1985582.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 6
        },
    ];

    const servicesJSX = [
        {
            name: 'Ideation & Strategy',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'Product Design',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'Web & Mobile',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'Cloud Services',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
    ]

    let technologiesTable = technologyJSX.map((tech) => (
        <CardComponent
            key={tech.id}
            name={tech.name}
            image={tech.img}
        />
    ))

    return (
        <div className="home">
            <div className="landing-page">
                <div className="primary-content">
                    <h1>Necessitie<br/>Software Development</h1>
                    <span>More stuff about our services and goals, a catchy little thing to hear, made for you by us</span>
                    <button>LET'S WORK TOGETHER</button>
                </div>
                <div className="secondary-content" >
                </div>
            </div>
            <div className="share-page">
                <div className='primary-content'></div>
                <h2 className="share-header">You share your idea. We get it done.</h2>
                <div className="secondary-content">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </span>
                </div>
            </div>
            <div className="features-page">
                <div className="primary-content">
                    <h2 className="features-header">See what we can do for you</h2>
                </div>
                <div className="secondary-content">
                    {servicesJSX.map(x => {
                        return (
                            <div className="single-service" key={x.name}>
                                <img src={x.img}/>
                                <h3 className="feature-service">{x.name}</h3>
                                <span>{x.text}</span>
                            </div>
                        )
                    })}
                </div>
                (INFO ICONS HERE WITHS DESCRIPTIONS)
            </div>
            <div className="examples-page">
                <h2>App Name Example</h2>
                <h3>The secret sauce of Form</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            </div>
            <div className="industries-page">
                <div className="primary-content"><img/></div>
                <div className="secondary-content">
                    <h2 className="industries-header">We work across many industries</h2>
                    <div className="industries-div">
                        <span>Healthcare</span>
                        <span>E-Commerce</span>
                        <span>Entertainment</span>
                        <span>Fintech</span>
                        <span>Other</span>
                        {/* <a>Healthcare</a>
                        <a>E-commerce</a>
                        <a>Entertainment</a>
                        <a>Fintech</a>
                        <a>Other</a> */}
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </span>
                </div>
                <a>Learn More</a>
            </div>
            <div className="technologies-page">
                <div className="primary-content">
                    <h2 className="technologies-header">Where business meets cutting-edge technology</h2>
                    <h3 className="technologies-subheader">Choose the tech stack for your next application, or let us pick the best  solution for you</h3>
                    <button>Get a Quote</button>
                </div>
                <div className="secondary-content">
                    <Card.Group itemsPerRow={3}>
                        {technologiesTable}
                    </Card.Group>
                    {/* REPLACED OLD MAPPING WITH COMPONENT MAPPING/ REUSABLE WITH OTHER TABLES} */}
                    {/* {technologyJSX.map(x => {
                        return (
                            <div className="single-tech" key={x.name}>
                                <img src={x.img}/>
                                <h3 className="single-tech-name">{x.name}</h3>
                                <span>{x.test}</span>
                            </div>
                        )
                    })} */}
                </div>
                <div className="contact-page">
                    <h2 className="contact-header">Want to talk about your project?</h2>
                    <div className="contact-us-wrapper">
                        <div className="primary-content">
                            <h3 className="contact-subheader">We'd love to hear from you</h3>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>   
                            <div className="location-row">
                                <img src="location"/>
                                <span>385 Noah Place Suite 878</span>
                            </div>
                            <div className="phone-row">
                                <img src="phone"/>
                                <span>877-255-7945</span>
                            </div>
                            <div className="email-row">
                                <img src="location"/>
                                <span>info@form.com</span>
                            </div>
                        </div>
                        <div className="secondary-content">
                            <Form className="contact-form">
                                {/* <Form.Group> */}
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='First name'
                                        placeholder='First name'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='Last name'
                                        placeholder='Last name'
                                    />
                                    <Form.Field
                                        id='form-input-control-error-email'
                                        control={Input}
                                        label='Email'
                                        placeholder='YourEmail@Email.com'
                                        />
                                    <Form.Field
                                        id='form-textarea-control-opinion'
                                        control={TextArea}
                                        label='Additional Details'
                                        placeholder='Additional Details'
                                        />
                                    {/* </Form.Group> */}
                                    <Form.Field
                                        id='form-button-control-public'
                                        control={Button}
                                        content='Confirm'
                                    />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

