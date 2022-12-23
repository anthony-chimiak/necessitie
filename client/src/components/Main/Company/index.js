import React, {useState, useRef, useLayoutEffect} from "react";
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import ContactUs from '../ContactUs/ContactUs';
import NetworkCluster from '../Map/Cluster/clusterTest.jsx';


import threePeople from "./../../../assets/images/three-people.svg"
import threeCircles from "./../../../assets/images/three-circles.svg"
import cheerfulFace from "./../../../assets/images/cheerful-face.png"
import flatScreen from "./../../../assets/images/flat-screen.png"


import './company.scss'



function Technologies(props) {
    const landingRef = useRef(null);

    const whoListJSX = [
      {
        name: 'Young & Passionate',
        img: threePeople,
        text: 'Our dedicated team focus completely on you',
      },
      {
        name: ' Enthusiast & creative',
        img: threeCircles,
        text: 'Our dedicated team focus completely on you',
      },
      {
        name: 'Cheerful & comfortable',
        img: cheerfulFace,
        text: 'Our dedicated team focus completely on you',
      },
    ].map(x => (
      <div className={"single-who " + x.name} key={x.name}>
        <img src={x.img}/>
        <h5>{x.name}</h5>
        <p>{x.text}</p>
      </div>
    ));


    return (
        <div className='company main-content'>
            <div className="landing-page secondary-color page" ref={landingRef}>
                <NetworkCluster landingRef={landingRef}/>
                <div className="primary-content">
                    <h1>Our Amazing <span>Company</span></h1>
                </div>
                <div className="secondary-content" >
                    <p>Necessitie can provide you with top developers that have skills focused on your needs so you know they will be able to excel at the tasks you throw at them.</p>
                    <Button className="action-btn tablet">Let's work together</Button>
                    {/* <Button className="action-btn outline tablet">Get a quote</Button> */}

                </div>
            </div>
            <div className="intro-page page main-template second-page">
                <div className="primary-content">
                    <h2>Our Company is the best around!</h2>
                    
                </div>
                <div className="secondary-content">
                <div>
                    <p><span>Successful product</span> development requires a balanced approach. We blend personalized, in-depth technical guidance with our global scale.</p>
                    <p>By leveraging Agile development methodologies, human-centered design tools, and best practices around security and risk management<br/><br/> We help organizations meet their needs reliably and efficiently.</p>
                </div>
                </div>
                <hr className="divider thick tablet"/>

            </div>

            <div className="list-page page main-template mobile">
                <div className="primary-content">
                    <h4>Scale your Development design and build <span>great apps!</span></h4>
                    <p>Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p>
                </div>
            </div>
            <div className="who-page page">
                <div className='primary-content'>
                <h4>Who are we?</h4>
                    <div className="who-container">
                        {whoListJSX}
                    </div>
                                    </div>
                <div className='secondary-content'>
                    <h4>We believe in what we do and that <span>drives us to excel</span></h4>  
                    <div>

                     
                      <h5>Team as a service</h5>
                      <p className="mobile">Our dedicated team focus completely on you, we help define your goals and provide honest advice about wheter going remote is the right option for your organization </p>
                      <p className='tablet'>Our dedicated team focus completely on you, We help Define your goals and provide honest advice about wheter going remote is the right option for your organization We assemble engineering team tailored to your desired skill set designed to blend flawlessly with your in house engineers</p>

                      <h5>Team as a service</h5>
                      <p className="mobile">Our dedicated team focus completely on you, we help define your goals and provide honest advice about wheter going remote is the right option for your organization </p>
                      <p className='tablet'>Our dedicated team focus completely on you, We help Define your goals and provide honest advice about wheter going remote is the right option for your organization We assemble engineering team tailored to your desired skill set designed to blend flawlessly with your in house engineers</p>

                    </div>
                    <img src={flatScreen} className=''/>
                </div>
            </div>
            <div className='final-page page'>
                <div className='primary-content'>
                    <h5>Focusing on reals people needs</h5>
                    <h5>Human-Centered Design</h5>
                    <p className='mobile'>For every screen we design and build, the person interacting with that screen is top of mind. What are their needs? </p>
                    <p className='mobile'>More importantly, what are the behaviors motivating those needs? By taking a human-centered design approach, we’re able to better meet and anticipate people’s expectations as they interact with your business and products.</p>
                    <p className='tablet'>For every screen we design and build, the person interacting with that screen is top of mind. What are their needs? More importantly, what are the behaviors motivating those needs? By taking a human-centered design approach, we’re able to better meet and anticipate people’s expectations as they interact with your business and products.</p>
                    <p className='tablet'>To achieve this, we conduct thorough foundational research before we even begin to think about the product’s design. This allows us to really understand the people you’re trying to reach and how to successfully engage them with your product or service. From there, we use our findings to guide how we design in a way that solves the problem and meets people’s needs in the simplest way possible.</p>
                </div>
                <div className='second-content'>
                    <h5>A global approche to agile</h5>
                    <h5>Agile Software Development</h5>
                    <p className='mobile'>Agile software development allows teams to deliver quickly, collaborate often, and continually improve their product. </p>
                    <p className='mobile'>We take a slightly modified approach to the Agile methodology that maximizes those benefits while utilizing a global development model.</p>
                    <p className='tablet'>Agile software development allows teams to deliver quickly, collaborate often, and continually improve their product. We take a slightly modified approach to the Agile methodology that maximizes those benefits while utilizing a global development model.</p>
                    <p className='tablet'>Our global technical teams are 100% fluent in English and have adapted their workday to overlap with the working hours of our clients in the U.S. This makes communication a breeze and allows for four hours of collaborative time with our U.S.-based account managers, solutions architects, project managers, and designers. We conduct daily standups via Google Hangouts that keep everyone working together and on the same page — even if they’re not in the same office, city, or even country.</p>
                </div>
                <div className='third-content'>
                    <h5>Where secure delivery meet efficiancy</h5>
                    <h5>Secure Delivery</h5>
                    <p className='mobile'>Effective security and privacy protocols are critical to every step of the development process — from single, standalone applications to complex cloud infrastructure. </p>
                    <p className='mobile'>They should strike a balance between protecting data and information while creating a seamless process for users that imposes as little friction as possible. </p>
                    <p className='mobile'>With our SOC 2 Type II certification, we leverage our heightened internal security controls to further support our clients’ more sensitive needs.</p>
                    <p className='tablet'>Effective security and privacy protocols are critical to every step of the development process — from single, standalone applications to complex cloud infrastructure. They should strike a balance between protecting data and information while creating a seamless process for users that imposes as little friction as possible. With our SOC 2 Type II certification, we leverage our heightened internal security controls to further support our clients’ more sensitive needs.</p>
                    <p className='tablet'>By utilizing tools like role-based access control with single sign-on, we ensure that people have access to what they need in an efficient manner. We control access to source code in a very similar way. Additionally, our support teams can monitor your system post-launch, keeping an eye on any suspicious patterns. Should we detect any odd activity, we offer guidance on the next steps to minimize any potential damage.</p>
                </div>
            </div>
            <div className="contact-page page">
                <ContactUs />
            </div>
        </div>
    )
}

export default Technologies;