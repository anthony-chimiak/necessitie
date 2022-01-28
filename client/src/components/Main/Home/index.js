import React from 'react';

import './home.scss'

export const Home = (props) => {
    const technologyJSX = [
        {
            name: 'Android',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'IOS',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'Frontend',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'Backend',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'Cross-platform',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'Articial-Intelligence',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
    ];

    const servicesJSX = [
        {
            name: 'ideation & strategy',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'product design',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'web & mobile',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'cloud services',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
    ]

    return (
        <div className="home">
            <div className="landing-page">
                <div className="primary-content">
                    <h1>Necessitie<br/>Full Service Software Development</h1>
                    <span>More stuff about our services and goals, a catchy little thing to hear, made for you by us</span>
                    <button>LET'S WORK TOGETHER</button>
                </div>
                <div className="secondary-text" >
                </div>
            </div>
            <div className="share-page">
                <div className='primary-content'></div>
                <h2>You share your idea. We get it done.</h2>
                <div className="secondary-content">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </span>
                </div>
            </div>
            <div className="features-page">
                <div className="primary-content">
                    <h2>See what we can do for you</h2>
                </div>
                <div className="secondary-content">
                    {servicesJSX.map(x => {
                        return (
                            <div className="single-service">
                                <img src={x.img}/>
                                <h3>{x.name}</h3>
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
                    <h2>We work across many industries</h2>
                    <div className="industries-div">
                        <a>Healthcare</a>
                        <a>E-commerce</a>
                        <a>Entertainment</a>
                        <a>Fintech</a>
                        <a>Other</a>
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
                    <h2>Where business meets cutting-edge technology</h2>
                    <h3>Choose the tech stack for your next application, or let us pick the best  solution for you</h3>
                    <button>Get a Quote</button>
                </div>
                <div className="secondary-content">
                    {technologyJSX.map(x => {
                        return (
                            <div className="single-tech">
                                <img src={x.img}/>
                                <h3>{x.name}</h3>
                                <span>{x.test}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="contact-page">
                    <h2>Want to talk about your project?</h2>
                    <div className="primary-content">
                        <h3>We'd love to hear from you</h3>
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
                        <input></input>
                        <input></input>
                        <input></input>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

