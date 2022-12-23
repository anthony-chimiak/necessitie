import React, {useState, useRef, useLayoutEffect} from "react";
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
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

    
    const technologiesList = [
        {
            name: 'IOS',
            img: '',
            text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et   ',
        },
        {
            name: 'Android',
            img: flatAndriod,
            text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et   ',
        },
        {
            name: 'Backend',
            img: '',
            text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et   ',
        },
        {
            name: 'Frontend',
            img: '',
            text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et   ',
        },
        {
            name: 'AI',
            img: flatCorners,
            text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et   ',
        },
        {
            name: 'Crossplatform',
            img: '',
            text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et   ',
        },
    ];

    const ItList = [
        {
            name: 'Full-cycle software development',
            img: refreshCircle,
            class: 'full-cycle',
            text: 'Necessitie delivers cutting-edge end-to-end software development services for businesses worldwide',
        },
        {
            name: 'IT staff augmentation',
            img: addUser,
            class: 'it-staff',
            text: 'Our company provides senior and mid-level development team as a service to enhance in-house IT departments and meet the needs of software development projects of any size',
        },
        {
            name: 'IT audit & consulting',
            img: talkingHeads,
            class: 'it-audit',
            text: 'We help optimize business processes, supporting technological solutions, implementing highly efficient workflows, and identifying problematic aspects of the business.',
        },
        {
            name: 'Digital transformation',
            img: connectedCircles,
            class: 'digital-trans tablet',
            text: "Our team of IT professionals creates effective software systems to empower businesses with digital innovations and intelligent automation",
        }
    ];

    const ItListJSX = ItList.map(x => 
        <div className={'single-IT ' + x.class} key={x.name}>
            <img src={x.img} />
            <h5>{x.name}</h5>
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
            <NetworkCluster landingRef={landingRef}/>
                <div className="primary-content">
                    <h1>New <span>Technologies</span> we work with</h1>
                </div>
                <div className="secondary-content" >
                    <p>Necessitie can provide you with top developers that have skills focused on your needs so you know they will be able to excel at the tasks you throw at them.</p>
                    <Button className="action-btn">Let's work together</Button>
                    {/* <Button className="action-btn outline tablet">Get a quote</Button> */}

                </div>
            </div>
            <div className="intro-page page main-template second-page">
                <div className="primary-content">
                    <h2 >Focused precision <span>for your</span> products</h2>
                </div>
                <div className="secondary-content">
                    <p><span>Find people that are specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand. <br/><br/>  A broad range front end developer will get the job done, but a React specialist will get it done faster, and more robust.</p>
                </div>

            </div>
            <hr className='divider thick tablet'></hr>
            {/* <div className="background-triangle into tablet"></div> */}

            <div className="list-page page">
                <div className="primary-content">
                    <h4>Technologies we are working with</h4>
                    {/* <p>Find people that are <span>specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p> */}

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