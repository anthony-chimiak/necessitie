import React, {useState, useRef, useLayoutEffect} from "react";
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import { isMobile } from "react-device-detect";

import {toContact} from './../../helperFunctions'
import ContactUs from '../ContactUs/ContactUs';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Num1 from "./../../../assets/images/num1.png"
import Num2 from "./../../../assets/images/num2.png"
import Num3 from "./../../../assets/images/num3.png"
import Num4 from "./../../../assets/images/num4.png"
import blueHouse from "./../../../assets/images/blue-house.png"
import blueCross from "./../../../assets/images/industry-med-blue-cross.png"
import orangeStack from "./../../../assets/images/industry-orange-stack-square.png"
import orangeCone from "./../../../assets/images/fin-cone-orange.png"
import blueLock from "./../../../assets/images/blue-lock.png"

import NetworkCluster from '../Map/Cluster/clusterTest.jsx';




import './industries.scss'

function Industries(props) {
    const landingRef = useRef(null);
    const landingRefMobile = useRef(null)

    const [landingWidth, setLandingWidth] = useState(0);
    const [landingHeight, setLandingHeight] = useState(0);
    const industriesList = [
        {
            name: 'FinTech',
            text: 'A focus on security, but also efficiency helps products work at the speeds necessary to quickly process large amounts of data to make decisions',
            tabletText: <><p>Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. </p>
            <p>We offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.</p></>,
            img: blueHouse,
        },
        {
            name: 'EdTech',
            text: 'Prioritizing User Experience and engaging designs help to keep users motivated to continue improving themselves',
            tabletText: <><p>Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. </p>
            <p>We offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.</p></>,            img: orangeCone,
        },
        {
            name: 'Medical',
            text: 'Imbedded QA/Developer hybrid teams for increased cooperation to meet government standards on reliability',
            tabletText: <><p>Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. </p>
            <p>We offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.</p></>,            img: blueCross,
        },
        {
            name: 'Hospitality',
            text: 'Compacting huge industry wide datasets to digestable well crafted data visualiation models',
            tabletText: <><p>Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. </p>
            <p>We offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.</p></>,            img: orangeStack,
        }
    ]

    const deliveryList = [
        {
            name: "Assess",
            img: Num1,
            text: "Every project begins with a discussion of the objectives and difficulties facing your business. From there, we choose the developers who would best meet your technical and strategic requirements.",
        },
        {
            name: "Screen",
            img: Num2,
            text: "We choose the top engineers from our pool of A-listers based on which ones best meet your requirements. Within a day, their resumes will be in your email.",
        },
        {
            name: "Select",
            img: Num3,
            text: "You conduct interviews with our engineers to find the best fit. For your custom build, choose the candidates you desire.",
        },
        {
            name: "Start",
            img: Num4,
            text: "And its finally underway! We'll arrange for both your team and ours to kick off.",

        },
    ];

    const deliveryJSX = deliveryList.map((x, i) => {
        return (
        <div className={x.name + (i%2?" alt":" ") + " single-delivery"} key={x.name}>
            {/* <div className=''> */}
                <img loading="lazy" src={x.img} className={x.name + ' mobile'}/>
                <h2>{x.name}</h2>
                <img loading="lazy" src={x.img} className={x.name + ' tablet'}/>

            {/* </div> */}
            <p>{x.text}</p>
        </div>)
    });

    // useLayoutEffect(() => {
    //     setLandingWidth(landingRef?.current?.offsetWidth);
    //     setLandingHeight(landingRef?.current?.offsetHeight);
    //   }, []);

    //   window.addEventListener('resize', () => {
    //     setLandingWidth(landingRef?.current?.offsetWidth);
    //     setLandingHeight(landingRef?.current?.offsetHeight);
    //   });

    
    return (
        <div className='industries main-content'>
            <div className="landing-page primary-color page" ref={landingRef}>
            {!isMobile &&<NetworkCluster landingRef={landingRef} page="Industries"/>}
                <div className="primary-content">
                    {/* <h1><span>Industries</span> we work in</h1> */}
                    <h1>Targeted <span>industries</span> with web solutions</h1>
                </div>
                <div className="secondary-content" >
                    <p>Our web development company specializes in serving a diverse range of industries, including e-commerce, healthcare, finance, and hospitality.</p>
                    <Button className="action-btn"  onClick={toContact}>Let's work together</Button>

                </div>
                {isMobile && <div className="mobile-cluster-container">
                    <div className="mobile-cluster cover"></div> 
                    <div className="mobile-cluster" id="cluster-container" ref={landingRefMobile}>
                        <NetworkCluster landingRef={landingRefMobile} page="Industries"/>
                    </div>
                </div>}
            </div>
            <div className="intro-page second-page page main-template">
            <hr className='divider tablet thick'/>
                <div className="primary-content">
                    <h2 className="tablet">Expertise in <span>a diverse selection</span> of industries</h2>
                    <h1 className="mobile">Expertise in <span>a diverse selection</span> of industries</h1>
                </div>
                <div className="secondary-content">
                    <p><span>We have the expertise</span> and flexibility to meet the unique needs of each industry, offering custom web solutions that drive business growth and success.<br/><br/>  </p>

                </div>
            </div>
            {/* <hr class="divider tablet thick"></hr> */}

            <div className="list-page page third-page">
                <div className="primary-content">
                    <h4 className="tablet">Necessitie’s industries specialities</h4>
                    <h2 className="mobile">Necessitie’s industries specialities</h2>

                    <p>Knowledge in these fields help us understand not just the  <span>technical, but also the business needs</span> of various asks, so we can help you properly prioritize to balance speed of task with importance to the project</p>

                </div>
                <div className="secondary-content">
                    <div className="industries-list-container">
                        {industriesList.map((x, i) => {
                            return (
                                <React.Fragment key={x.name}>
                                    <img loading="lazy" src={x.img} className="mobile" />
                                    <div className={"industries-card " + x.name +(i%2?' alt':'')} key={x.name}>
                                        <img loading="lazy" src={x.img} className="tablet" />
                                        <h3 className="mobile">{x.name}</h3> 
                                        <h5 className="tablet">{x.name}</h5> 
                                        <p className="mobile">{x.text}</p>
                                        <div className="tablet">{x.tabletText}</div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="delivery-page page">
                <div className='primary-content mobile'>
                    <h3 className="tablet">Secure Delivery</h3>
                    <h2 className="mobile">Secure Delivery</h2>
                    <p>Effective security and privacy protocols are critical to every step of the development process — from single, standalone applications to complex cloud infrastructure. </p>
                    <p className='read-more'>Read More  <ArrowDownwardIcon/></p>
                    <p className="hidden"></p>
                    <img loading="lazy" src={blueLock}/>
                </div>
                <div className='primary-content tablet'>
                    <h3>Security</h3>
                    <div className='flex-cont'>
                        <div className='left-side flex-child'>
                            <p><span>Effective security and privacy protocols</span> are critical to every step of the development process — from single, standalone applications to complex cloud infrastructure.</p>
                            <p>They should strike a balance between protecting data and information while creating a seamless process for users that imposes as little friction as possible. With our SOC 2 Type II certification, we leverage our heightened internal security controls to further support our clients’ more sensitive needs.</p>
                            <div className='button-cont'>
                                <Button className="action-btn hire"  onClick={toContact}>Hire Top-Level Developers</Button>
                                {/* <Button className="action-btn outline tablet">Get a quote</Button> */}
                            </div>
                        </div>
                        <div className='right-side flex-child'>
                            <p>By utilizing tools like role-based access control with single sign-on, we ensure that people have access to what they need in an <span>efficient manner.</span></p>
                            <p>We control access to source code in a very similar way. Additionally, our support teams can monitor your system post-launch, keeping an eye on any suspicious patterns. <br/>Should we detect any odd activity, we offer guidance on the next steps to minimize any potential damage.</p>
                        </div>
                    </div>
                    <img loading="lazy" src={blueLock}/>

                </div>
                <div className='secondary-content'>
                    <h4 className="tablet">A process that works</h4>
                    <h2 className="mobile">A process that works</h2>
                    <div className='flex-cont'>
                        {deliveryJSX}
                    </div>
                </div>
            </div>
            <div className="contact-page page">
                <ContactUs />
            </div>
        </div>
    )
}

export default Industries;