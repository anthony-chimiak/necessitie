import React, {useState, useRef, useLayoutEffect} from "react";
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import { isMobile } from "react-device-detect";

import {toContact} from './../../helperFunctions'
import ContactUs from '../ContactUs/ContactUs';
import NetworkCluster from '../Map/Cluster/clusterTest.jsx';


import './technologies.scss'

import flatAndriod from "./../../../assets/images/flat-andriod.png"
import flatCorners from "./../../../assets/images/flat-corners.png"
import refreshCircle from "./../../../assets/images/refresh-circle.svg"
import addUser from "./../../../assets/images/user-add.svg"
import talkingHeads from "./../../../assets/images/talking-heads.svg"
import connectedCircles from "./../../../assets/images/data.svg"





function Technologies(props) {
    const landingRef = useRef(null);
    const landingRefMobile = useRef(null)

    
    const technologiesList = [
        {
            name: 'IOS',
            img: '',
            text: "Experienced iOS developers proficient in using Swift and other tools to create intuitive and visually appealing mobile apps for iPhone and iPad.",
        },
        {
            name: 'Android',
            img: flatAndriod,
            text: "Skilled Android developers who leverage the power of Java and the Android SDK to build robust and high-performing apps for a variety of devices.",
        },
        {
            name: 'Backend',
            img: '',
            text: "Our backend developers specialize in building scalable and secure server-side infrastructure to support the needs of our clients.",
        },
        {
            name: 'Frontend',
            img: '',
            text: "Talented frontend developers who are experts in using HTML, CSS, and JavaScript creating dynamic and responsive user interfaces for web and mobile applications.",
        },
        {
            name: 'AI',
            img: flatCorners,
            text: "AI is the future, and our AI experts use the newest machine learning techniques to build intelligent systems that can analyze and interpret data, solve complex problems, and learn and adapt over time.",
        },
        {
            name: 'Crossplatform',
            img: '',
            text: "Finally our cross-platform development team utilizes tools such as React Native and Flutter to create apps that can run smoothly on both iOS and Android devices, saving time and resources for our clients.",
        },
    ];

    const ItList = [
        {
            name: 'Full-service software development',
            img: refreshCircle,
            class: 'full-cycle',
            text: 'Necessitie provides organizations all around the world with cutting-edge, full-service software development services.',
        },
        {
            name: 'IT staff augmentation',
            img: addUser,
            class: 'it-staff',
            text: "To support internal IT departments and satisfy the demands of software development projects of any scale, our firm offers senior and mid-level development teams as a service.",
        },
        {
            name: 'IT audit & consulting',
            img: talkingHeads,
            class: 'it-audit',
            text: "We support technical solutions, build extremely effective workflows, and identify problematic areas of the organization in order to help optimize business operations.",
        },
        {
            name: 'Digital transformation',
            img: connectedCircles,
            class: 'digital-trans tablet',
            text: "Our team of IT experts develops powerful software systems to equip businesses with technological advancements and intelligent automation",
        }
    ];

    const ItListJSX = ItList.map(x => 
        <div className={'single-IT ' + x.class} key={x.name}>
            <img src={x.img} />
            <h5 className="tablet">{x.name}</h5>
            <h4 className="mobile">{x.name}</h4>

            <p>{x.text}</p>
        </div>  
    );
        
    let iterator = 0;
    let tabAlt = false;
    const technologiesListJSX = technologiesList.map((x,i) => {
        iterator++;
        if (iterator===2) {
            tabAlt = !tabAlt;
            iterator = 0;
        }
        return (
            <div className={'single-tech' + (i%2?' alt':'') + (tabAlt?" tabAlt":'')} key={x.name}>
                {x.img && <img src={x.img}/> }
                <h2 className='mobile'>{x.name}</h2>
                <h5 className='tablet'>{x.name}</h5>
                <p>{x.text}</p>
            </div>
        )
    }
    );

    return (
        <div className='technologies main-content'>
            <div className="landing-page primary-color page" ref={landingRef}>
            {!isMobile && <NetworkCluster landingRef={landingRef} page="Technologies"/>}
                <div className="primary-content">
                    <h1>Expertise in modern web <span>technologies</span></h1>
                </div>
                <div className="secondary-content" >
                    <p>Our team has expertise in a variety of modern web technologies, including React, Python, Selenium, and Tensorflow enabling us to build custom web solutions that meet the specific needs of our clients.</p>
                    <Button className="action-btn"  onClick={toContact}>Let's work together</Button>

                </div>
                {isMobile && <div className="mobile-cluster-container">
                    <div className="mobile-cluster cover"></div> 
                    <div className="mobile-cluster" id="cluster-container" ref={landingRefMobile}>
                        <NetworkCluster landingRef={landingRefMobile} page="Technologies"/>
                    </div>
                </div>}
            </div>
            <div className="intro-page page main-template second-page">
                <hr className='divider thick tablet'></hr>
                <div className="primary-content">
                    <h2 className="tablet">Future's edge <span>technologies</span> for every problem</h2>
                    <h1 className="mobile">Future's edge <span>technologies</span> for every problem</h1>

                </div>
                <div className="secondary-content">
                    <p><span>In addition to our technical skills</span>, we also place a strong emphasis on user experience design and testing. We use tools like A/B testing and user interviews to ensure that our solutions are intuitive and easy to use, delivering the best possible experience for our clients' customers.</p>
                </div>

            </div>
            
            {/* <div className="background-triangle into tablet"></div> */}

            <div className="list-page page third-page">
                <div className="primary-content">
                    <h4 className="tablet">Technologies we are working with</h4>
                    <h2 className="mobile">Technologies we are working with</h2>
                    <p className="mobile">Below are a few of the technologies we have a lot of experience working with.  It's not an exhaustive list, but should give an idea of some of our better areas of expertise </p>

                </div>
                <div className="secondary-content">
                    <div className="industries-list-container">
                        {technologiesListJSX}
                        {/* {industriesList.map((x, i) => {
                            return (
                                <div className={"industries-card " + x.name +(i%2 && ' alt')} key={x.name}>
                                    <h3>{x.name}</h3> 
                                    <p className="mobile">{x.text}</p>
                                    <p className="tablet">{x.tabletText}</p>
                                </div>
                            )
                        })} */}
                    </div>

                </div>
            </div>
            <div className='final-page page'>
                <div className='primary-content'>
                    {ItListJSX}
                </div>
            </div>
            <div className="contact-page page">
                <ContactUs />
            </div>
        </div>
    )
}

export default Technologies;