import React, {useState, useRef} from 'react';
// import CardComponent from './CardComponent.js'
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { isMobile } from "react-device-detect";

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
        title: "Expertise in React development for hire",
        img: servicesReactImg,
        text: "Our team of expert React developers has extensive experience building modern, high-performance web and mobile applications. React's reusable components and virtual DOM make it easy to build and maintain large scale applications, while its strong developer community ensures it stays up-to-date. Hiring our React developers ensures your project is in capable hands and allows you to focus on other important aspects of your business."
    },
    {
        name: <><span>Python</span> Developers</>,
        class: 'python',
        img: servicesPythonImg,
        title: "Experienced Python developers for your project"        ,
        text: "Our team of expert Python developers has the skills and experience to build reliable, scalable applications. Python is a powerful programming language that is popular for a wide range of tasks, including data analysis, machine learning, and web development. Its large standard library and active developer community make it easy to find solutions and keep your project current. Hiring our Python developers ensures your project is in capable hands and allows you to focus on other important aspects of your business."
    },
];

const designersData = [
    {
        name: <><span>UX</span> Designers</>,
        class: 'ux',
        img: servicesUxImg,
        title: "Expert UX developers for your business",
        text: "Our team of UX developers has the skills and experience to create user-centered designs that meet the needs of your business and your users. From user research to prototyping and testing, we have a deep understanding of the design process and are able to deliver high-quality solutions that drive business growth."


    },
    {
        name: <><span>UI</span> Designers</>,
        class: 'ui',
        title: "Talented UI designers for your project",
        text: "Our team of UI designers has the talent and experience to create visually appealing and user-friendly designs that meet the needs of your business and your users. From concept development to implementation, we have a thorough understanding of the design process and are able to deliver exceptional results that drive business growth."
    },

]

const qaData = [
    {
        name: <><span>Automated</span> QA</>,
        class: 'automated-qa',
        img: servicesQaImg,
        title: "High-quality automated QA testing services",
        text: "Quality assurance professionals provide high-quality automated testing services using specialized tools and techniques. We efficiently and accurately test software, ensuring that it meets the required specifications and functions as intended. Our automated testing services help to save time, reduce costs, and improve the overall quality of your software."


    },
    {
        name: <><span>Manual</span> QA</>,
        class: 'manual-qa',
        title: 'Hire attentive manual testers',
        text: "Quality assurance professionals provide high-quality manual testing services at competitive prices. With many individual eyes on your product, our manual testing services help to ensure the overall quality of your software."
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
    const landingRefMobile = useRef(null);
    return(
    <div className="services">
        <div className="landing-page page" ref={landingRef}>
            {!isMobile && <NetworkCluster landingRef={landingRef} page="Services"/>}

            <div className="primary-content">
                <h1>Customized <span>Services</span> for Your Unique Needs</h1>
            </div>
            <div className="secondary-content" >
                <p>Our team of experts provides a range of customizable services to help your business succeed, including web and mobile app development, IT staff augmentation, and software outsourcing.</p>
                <Button className="action-btn">Let's work together</Button>
                {/* <Button className="action-btn outline tablet">Get a quote</Button> */}
            </div>
            {isMobile && <div className="mobile-cluster-container">
                <div className="mobile-cluster cover"></div> 
                <div className="mobile-cluster" id="cluster-container" ref={landingRefMobile}>
                    <NetworkCluster landingRef={landingRefMobile} page="Services"/>
                </div>
            </div>}
        </div>
        
        <div className="intro-page page main-template second-page">
                        <hr className="divider tablet thick"/>

            <div className="primary-content">
                <h2 className="tablet">Tailored <span>Software</span> solutions to meet your business needs</h2>
                <h1 className="mobile">Tailored <span>Software</span> solutions to meet your business needs</h1>

            </div>
            <div className="secondary-content">
            <p><span>Find people that are specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truly utilize the tools at hand.<br/><br/> 
                        A broad range front end developer will get the job done, but a React specialist will get it done faster, and more robust.</p>

                {/* <hr className='divider tablet thick'/> */}
                
            </div>
        </div>
        <div className="webdev-page page offered-services-page third-page">
            <div className="services-flex-container">
                <div className='primary-content'>
                    <img src={webDevSquare} className="web-dev-square mobile"/>

                    <div className='primary-content-cont'>
                        <h4>Web Development</h4>
                        <p>Our web development team has the <span>skills and experience</span> to create visually appealing, user-friendly websites that drive business growth. From custom responsive design to e-commerce functionality, we have the expertise to bring your vision to life.</p>
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
                    <p>Our team of expert recruiters has already found top-quality professionals for your business, whether you need a full team or just a few key players. Our extensive network and rigorous vetting process ensure that we are able to deliver the best candidates for your specific needs.</p>
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
                    <p>Our team of quality assurance professionals has the skills and experience to thoroughly test and validate software, ensuring that it meets the required specifications and functions as intended. From manual testing to automated testing, we have a deep understanding of the quality assurance process and are able to deliver high-quality results that meet the needs of your business.</p>
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
                <p className="mobile">Brainstorming, Market Research, User Interviews, and prototyping to generate innovative ideas for new products and services</p> 
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