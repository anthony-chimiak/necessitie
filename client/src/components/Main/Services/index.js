import React, {useState, useRef} from 'react';
// import CardComponent from './CardComponent.js'
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactUs from '../ContactUs/ContactUs';
import NetworkCluster from '../Map/Cluster/clusterTest.jsx';
import './services.scss'

import mobileProductImg from "./../../../assets/images/mobile-cubes.png" 
import webDevSquare from "./../../../assets/images/web-dev-square.png"
import personCutout from "./../../../assets/images/person-cutout.png"
import flatBug from "./../../../assets/images/flat-bug.png"
import servicesReactImg from "./../../../assets/images/Crypto/dent.svg"
import servicesPythonImg from "./../../../assets/images/Crypto/python.svg"
import servicesUxImg from "./../../../assets/images/element-equal.svg"
import servicesQaImg from "./../../../assets/images/Search/search-normal.svg"
import productIdea from "./../../../assets/images/product-ideation.png"
// import  from "./../../../assets/images/.png"
// import  from "./../../../assets/images/.png"
// import  from "./../../../assets/images/.png"
// import  from "./../../../assets/images/.png"


const developersData = [
    {
        name: <><span>React</span> Developers</>,
        class: 'react',
        title: 'Hire specialised React Developers',
        img: servicesReactImg,
        text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    },
    {
        name: <><span>Python</span> Developers</>,
        class: 'python',
        img: servicesPythonImg,
        title: 'Hire specialised React Developers',
        text: 'Hire specialised React Developers If you have a necessitie for React Developers Our front-end team specializes in modern react development, hooks and context. As the web has been taken over primarily by javascript, the javascript ecosystem has been increasingly dominated by React, and our developers have been on the React ship since the beginning.'
    },
];

const designersData = [
    {
        name: <><span>UI</span> Designers</>,
        class: 'ui',
        title: 'Hire specialised React Developers',
        text: 'Our Developers are intimately familiar with both ReactJS, React Native for app service, and a host of the available third party components.'
    },
    {
        name: <><span>UX</span> Designers</>,
        class: 'ux',
        img: servicesUxImg,
        title: 'Hire specialised React Developers',
        text: 'Our Developers are intimately familiar with both ReactJS, React Native for app service, and a host of the available third party components.'
    },
]

const qaData = [
    {
        name: <><span>Automated</span> QA</>,
        class: 'automated-qa',
        img: servicesQaImg,
        title: 'Hire specialised React Developers',
        text: 'Our Developers are intimately familiar with both ReactJS, React Native for app service, and a host of the available third party components.'
    },
    {
        name: <><span>Manual</span> QA</>,
        class: 'manual-qa',
        title: 'Hire specialised React Developers',
        text: 'Our Developers are intimately familiar with both ReactJS, React Native for app service, and a host of the available third party components.'
    },
]

const combinedServiceJSX = developersData.concat(designersData).concat(qaData).map((x,i) => {})

const developersJSX = developersData.map((x,i) => (
    <div className={`${x.class} single-service`}  key={x.class}>
        {i===1 && <hr className='divider tablet thick'/>}
        <h3 className='mobile'>{x.name}</h3>
        <h5 className='tablet'>{x.name}</h5>
        {x.img &&<img src={x.img} className="tablet"/>}
        <p className='tablet title'>{x.title}</p>
        <p>{x.text}</p>
    </div>
))

const designersJSX = designersData.map((x,i) => (
    <div className={`${x.class} single-service`}  key={x.class}>
        {i===1 && <hr className='divider tablet thick'/>}
        <h3 className='mobile'>{x.name}</h3>
        <h5 className='tablet'>{x.name}</h5>
        {x.img &&<img src={x.img} className="tablet designer-img"/>} 
        <p className='tablet title'>{x.title}</p>  
        <p>{x.text}</p>
    </div>
))

const qaJSX = qaData.map((x,i) => (
    <div className={`${x.class} single-service`}  key={x.class}>
        {i===1 && <hr className='divider tablet thick'/>}
        <h3 className='mobile'>{x.name}</h3>
        <h5 className='tablet'>{x.name}</h5>
        {x.img &&<img src={x.img} className="tablet"/>}
        <p className='tablet title'>{x.title}</p>
        <p>{x.text}</p>
    </div>
))


function Services(props) {
    const landingRef = useRef(null);
    return(
    <div className="services">
        <div className="landing-page page" ref={landingRef}>
        <NetworkCluster landingRef={landingRef}/>

        <div className="primary-content">
            <h1>Our Speciality <span>Services</span></h1>
        </div>
            <div className="secondary-content" >
                <p>Necessitie can provide you with top developers that have skills focused on your needs so you know they will be able to excel at the tasks you throw at them.</p>
                <Button className="action-btn">Let's work together</Button>
                {/* <Button className="action-btn outline tablet">Get a quote</Button> */}
            </div>
        </div>
        <div className="intro-page page main-template second-page">
            <div className="primary-content">
                <h2 className="tablet">Our custom <span>Software</span> Development Services</h2>
                <h1 className="mobile">Our custom <span>Software</span> Development Services</h1>

            </div>
            <div className="secondary-content">
            <p><span>Find people that are specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.<br/><br/> 
                        A broad range front end developer will get the job done, but a React specialist will get it done faster, and more robust.</p>

                <hr className='divider tablet thick'/>
                
            </div>
        </div>
        <div className="webdev-page page offered-services-page third-page">
            <div className="services-flex-container">
                <div className='primary-content'>
                    <img src={webDevSquare} className="web-dev-square mobile"/>

                    <div className='primary-content-cont'>
                        <h4>Web Development</h4>
                        <p>Find people that are <span>specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truly utilize the tools at hand.</p>
                        <div className='button-cont'>

                            <Button className="action-btn hire">Hire Top-Level Developers</Button>
                            {/* <Button className="action-btn outline tablet">Get a quote</Button> */}
                        </div>

                        {/* <div className="angled-triangle tablet"></div> */}
                        
                    </div>
                    <img src={webDevSquare} className="web-dev-square tablet"/>

                </div>
                <div className='secondary-content'>
                    <div className="service-container">
                        {developersJSX}
                    </div>
                </div>

            </div>
        </div>
        <div className="design-page page offered-services-page alt">
            <div className="services-flex-container">

            <div className='primary-content'>
                <div className="text-container primary-content-cont">
                    <h4>Product Design</h4>
                    <p>Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p>
                    <div className='button-cont'>
                        <Button className="action-btn hire">Hire Top-Level Developers</Button>
                        {/* <Button className="action-btn outline tablet">Get a quote</Button> */}
                    </div>
                </div>
                <img src={personCutout} className="flat-person "/>
            </div>
            <div className='secondary-content'>
                <div className="service-container">
                    {designersJSX}
                </div>
            </div>
            </div>
        </div>
        <div className="white-spacer tablet"></div>
        <div className="qa-page page offered-services-page">
            <div className="services-flex-container">

            <div className='primary-content'>

                <div className="text-container primary-content-cont">
                    <h2>Quality Assurance</h2>
                    <p>Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p>
                    <div className='button-cont'>
                        <Button className="action-btn hire">Hire Top-Level Developers</Button>
                        {/* <Button className="action-btn outline tablet">Get a quote</Button> */}
                    </div>
                    {/* <div className="angled-triangle tablet"></div>   */}
                </div>
                <img src={flatBug} className="flat-bug "/>
            </div>
            <div className='secondary-content'>
                <div className="service-container">
                    {qaJSX}
                </div>
            </div>
            </div>
        </div>
        <div className="process-page page">
            <div className='primary-content'>
                <h3 className="tablet">Our Product Ideation & Strategy process</h3>
                <h2 className="mobile">Our Product Ideation & Strategy process</h2>
                <p className="mobile secondary-header"><b>Competitive analysis and market insights</b></p>
                <p className="mobile">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p> 
                <img src={mobileProductImg} className="mobile-product-img mobile"/>
                <img src={productIdea} className="tablet"/>


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