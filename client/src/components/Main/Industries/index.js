import React, {useState, useRef, useLayoutEffect} from "react";
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
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
    const [landingWidth, setLandingWidth] = useState(0);
    const [landingHeight, setLandingHeight] = useState(0);
    const industriesList = [
        {
            name: 'FinTech',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
            tabletText: <><p>Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. </p>
            <p>We offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.</p></>,
            img: blueHouse,
        },
        {
            name: 'EdTech',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
            tabletText: <><p>Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. </p>
            <p>We offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.</p></>,            img: orangeCone,
        },
        {
            name: 'Medical',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
            tabletText: <><p>Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. </p>
            <p>We offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.</p></>,            img: blueCross,
        },
        {
            name: 'Hospitality',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
            tabletText: <><p>Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. </p>
            <p>We offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.</p></>,            img: orangeStack,
        }
    ]

    const deliveryList = [
        {
            name: "Assess",
            img: Num1,
            text: "Every project starts with a conversation about your company’s goals and challenges. From there we identify the developers best suited to your technical and strategic needs.",
        },
        {
            name: "Screen",
            img: Num2,
            text: "We go through our roster of ace engineers and identify the ones who best fit your needs. You’ll have their CVs in your inbox within 24 hours.",
        },
        {
            name: "Select",
            img: Num3,
            text: "You interview our engineers to zero in on the perfect match. Select the candidates you want for your custom build.",
        },
        {
            name: "Start",
            img: Num4,
            text: "We’re officially off to the races! We’ll schedule a kickoff for both your team and ours.",

        },
    ];

    const deliveryJSX = deliveryList.map((x, i) => {
        return (
        <div className={x.name + (i%2?" alt":" ") + " single-delivery"} key={x.name}>
            {/* <div className=''> */}
                <img src={x.img} className={x.name + ' mobile'}/>
                <h2>{x.name}</h2>
                <img src={x.img} className={x.name + ' tablet'}/>

            {/* </div> */}
            <p>{x.text}</p>
        </div>)
    });

    useLayoutEffect(() => {
        setLandingWidth(landingRef?.current?.offsetWidth);
        setLandingHeight(landingRef?.current?.offsetHeight);
      }, []);

      window.addEventListener('resize', () => {
        setLandingWidth(landingRef?.current?.offsetWidth);
        setLandingHeight(landingRef?.current?.offsetHeight);
      });

    
    return (
        <div className='industries main-content'>
            <div className="landing-page primary-color page" ref={landingRef}>
            <NetworkCluster width={landingWidth} height={landingHeight} />
                <div className="primary-content">
                    <h1><span>Industries</span> we work in</h1>
                </div>
                <div className="secondary-content" >
                    <p>Necessitie can provide you with top developers that have skills focused on your needs so you know they will be able to excel at the tasks you throw at them.</p>
                    <Button className="action-btn">Let's work together</Button>
                    {/* <Button className="action-btn outline tablet">Get a quote</Button> */}

                </div>
            </div>
            <div className="intro-page second-page page main-template">
                <div className="primary-content">
                    <h2 className="tablet">Industries Title</h2>
                    <h1 className="mobile">Industries Title</h1>
                </div>
                <div className="secondary-content">
                    <p><span>Find people that are specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand. <br/><br/>  A broad range front end developer will get the job done, but a React specialist will get it done faster, and more robust.</p>

                </div>
                <hr className='divider tablet thick'/>
            </div>
            {/* <hr class="divider tablet thick"></hr> */}

            <div className="list-page page third-page">
                <div className="primary-content">
                    <h4 className="tablet">Necessitie’s industries specialities</h4>
                    <h2 className="mobile">Necessitie’s industries specialities</h2>

                    <p>Find people that are <span>specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p>
                    {/* <Button className="action-btn outline mobile">Get a quote</Button> */}

                </div>
                <div className="secondary-content">
                    <div className="industries-list-container">
                        {industriesList.map((x, i) => {
                            return (
                                <React.Fragment key={x.name}>
                                    <img src={x.img} className="mobile" />
                                    <div className={"industries-card " + x.name +(i%2?' alt':'')} key={x.name}>
                                        <img src={x.img} className="tablet" />
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
                    <img src={blueLock}/>
                </div>
                <div className='primary-content tablet'>
                    <h3>Security</h3>
                    <div className='flex-cont'>
                        <div className='left-side flex-child'>
                            <p><span>Effective security and privacy protocols</span> are critical to every step of the development process — from single, standalone applications to complex cloud infrastructure.</p>
                            <p>They should strike a balance between protecting data and information while creating a seamless process for users that imposes as little friction as possible. With our SOC 2 Type II certification, we leverage our heightened internal security controls to further support our clients’ more sensitive needs.</p>
                            <div className='button-cont'>
                                <Button className="action-btn hire">Hire Top-Level Developers</Button>
                                <Button className="action-btn outline tablet">Get a quote</Button>
                            </div>
                        </div>
                        <div className='right-side flex-child'>
                            <p>By utilizing tools like role-based access control with single sign-on, we ensure that people have access to what they need in an <span>efficient manner.</span></p>
                            <p>We control access to source code in a very similar way. Additionally, our support teams can monitor your system post-launch, keeping an eye on any suspicious patterns. <br/>Should we detect any odd activity, we offer guidance on the next steps to minimize any potential damage.</p>
                        </div>
                    </div>
                    <img src={blueLock}/>

                </div>
                <div className='secondary-content'>
                    <h4 className="tablet">A process that delivers</h4>
                    <h2 className="mobile">A process that delivers</h2>
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