import React, {useState, useRef, useLayoutEffect} from "react";

import CardComponent from './CardComponent.js'
 import { useNavigate } from "react-router-dom";
import { Button} from 'semantic-ui-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { isMobile } from "react-device-detect";

// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';

import MobileCarousel from './MobileCarousel';
import SlantedImager from './SlantedImager';
import ContactUs from '../ContactUs/ContactUs.js';
import { ForceGraph2D } from "react-force-graph";


import NetworkCluster from '../Map/Cluster/clusterTest.jsx';


//IMAGES
// import landingPic from "./../../../assets/images/landing-guy.png"
import lodgiqEx from "./../../../assets/images/Lodgiq-example.png"
import medidataEx from "./../../../assets/images/Medidata-example.png"
import twineEx from "./../../../assets/images/twine-example.png"
import landingImg from "./../../../assets/images/home-landing.png" 
import rocketImg from "./../../../assets/images/rocket.png" 
// import mobileTwineExample from "./../../../assets/images/mobile-twine-example.png"
import laptopImg from "./../../../assets/images/laptop.png" 
import houseImg from "./../../../assets/images/industry-house.png" 
import crossImg from "./../../../assets/images/industry-cross.png" 
import pyramidImg from "./../../../assets/images/industry-pyramid.png" 
import slabImg from "./../../../assets/images/industry-slab.png" 
import sittingDudeImg from "./../../../assets/images/sitting-dude.png"
import atomImg from "./../../../assets/images/atom.png"
import servicesMainImg from "./../../../assets/images/services.png"
import servicesReactImg from "./../../../assets/images/Crypto/dent.svg"
import servicesPythonImg from "./../../../assets/images/Crypto/python.svg"
import servicesUxImg from "./../../../assets/images/element-equal.svg"
import servicesQaImg from "./../../../assets/images/Search/search-normal.svg"
import androidImg from "./../../../assets/images/Platform/android.svg"
import iosImg from "./../../../assets/images/Platform/apple.svg"
import frontendImg from "./../../../assets/images/Platform/frontend.svg"
import backendImg from "./../../../assets/images/Platform/message-programming.svg"
import crossPlatformImg from "./../../../assets/images/Platform/cross-platform.svg"
import aiImg from "./../../../assets/images/Platform/ai.svg"
import industriesFullImg from "./../../../assets/images/allcubes.png"
import twineUpRight from "./SlantImages/1-UpRight.png"
import twineBackDown from "./SlantImages/1-BackDown.png"
import twineBackUp from "./SlantImages/1-BackUp.png"
import twineCenter from "./SlantImages/1-LaptopCentre.png"
import twineLeft from "./SlantImages/1-left.png"
import lodgiqBackDown from "./SlantImages/2-BackDown.png"
import lodgiqBackUp from "./SlantImages/2-BackUp.png"
import lodgiqCenter from "./SlantImages/5-LaptopCentre.png"
import lodgiqLeft from "./SlantImages/2-DownLeft.png"

import medidataCenter from "./SlantImages/2-LaptopCentre.png"

import solenneCenter from "./SlantImages/7-LaptopCentre.png"

import alchemaiCenter from "./SlantImages/6-LaptopCentre.png"

import mobileTablet from "./MobileCarouselImages/tabletBorder.png"
import mobileTwine from "./MobileCarouselImages/tab1.png"
import mobileSolenne from "./MobileCarouselImages/tab2.png"
import mobileMedidata from "./MobileCarouselImages/tab3.png"
import mobileAchemai from "./MobileCarouselImages/tab4.png"
import mobileLodgiq from "./MobileCarouselImages/tab5.png"


import testImg from "./SlantImages/test-image.png"


//
import './home.scss'

export const Home = (props) => {
    const landingRef = useRef(null);
    const landingRefMobile = useRef(null)
    const industriesList = ['FinTech', 'EdTech', 'Hospitality', 'Medical'];
    const [activeStep, setActiveStep] = React.useState(0);
    const { isMobile } = props;
    const navigate = useNavigate();
    const toContact = () => {
        navigate(`/Contact`);
    };
    const technologyJSX = [
        {
            name: 'Android',
            img: androidImg,
            text: "Our team of experienced developers specializes in Android app development, delivering high-quality, user-friendly applications for a range of devices.",
            id: 1
        },
        {
            name: 'IOS',
            img: iosImg,
            text: "Our iOS app development team has a proven track record of creating intuitive, visually appealing applications for iPhone and iPad users.",
            id: 2
        },
        {
            name: 'Frontend',
            img: frontendImg,
            text: "Our frontend developers have a strong understanding of user experience and design principles, creating visually appealing and intuitive websites and applications.",
            id: 3
        },
        {
            name: 'Backend',
            img: backendImg,
            text: "Our backend developers are experts in building scalable, reliable, and secure systems to power your website or application. From server-side logic to data storage and management, we have the skills and experience to handle it all.",
            id: 4
        },
        {
            name: 'Cross-platform',
            img: crossPlatformImg,
            text: "Our cross-platform development team has the skills and experience  to deliver solutions that can reach a wider audience and provide a seamless user experience across devices.",
            id: 5
        },
        {
            name: 'Artificial-Intelligence',
            img: aiImg,
            text: "Our artificial intelligence team has expertise in machine learning, natural language processing, and data analysis, allowing us to build innovative solutions that can process, analyze, and understand large amounts of data.",
            id: 6
        },
    ];

    const servicesData = [
        {
            name: 'React Developers',
            class: 'react-developers',
            img: servicesReactImg,
            text: "Developers with years of experience deploying cutting-edge, large-scale React Hooks/Context applications."
        },
        {
            name: 'Python Developers',
            class: 'python-developers',
            img: servicesPythonImg,
            text: "Python Experts with a wider range of uses.  Data Analytics to backend work, Python is a powerfuly ally."
        },
        {
            name: 'UI/UX',
            class: 'ui-ux',
            img: servicesUxImg,
            text: "Designers who help you create a compelling product that is customer focused.  Simple to use, beautiful, and easy."
        },
        {
            name: 'QA / Sdet Engineers',
            class: 'sdet-engineers',
            img: servicesQaImg,
            text: "Engineers who help you create products that are effective, adaptable, and straightforward to maintain through manual and automated testing."
        },
    ];

    const servicesJSX = servicesData.map(x => {
        return (
            <div className={`single-service ${x.class}`} key={x.name}>
                <img loading="lazy" src={x.img} className={x.class + '-img'}/>
                <div className="border-cont">
                    <h6 className="feature-service tablet">{x.name}</h6>
                    <h2 className="feature-service mobile">{x.name}</h2>

                    <p>{x.text}</p>
                </div>
            </div>
        )
    });    

    const industriesData = [
        {
            name: "FinTech",
            img: houseImg,
            text: "Custom financial technology solutions to streamline operations, reduce costs, and improve the customer experience.",
            longText: "Our web development team has a proven track record of delivering custom financial technology solutions that help businesses streamline operations, reduce costs, and improve the customer experience. From payment processing systems to data analytics tools, we have the expertise to deliver the solutions your business needs to succeed.",

        },
        {
            name: 'EdTech',
            img: pyramidImg,
            text: "Create tools for improving student engagement, streamlining administrative tasks, and facilitating remote learning.",
            longText: "Our team has a wealth of experience developing custom solutions for the education technology industry, including tools for improving student engagement, streamlining administrative tasks, and facilitating remote learning.",

        },
        {
            name: 'Hospitality',
            img: slabImg,
            text: "From advanced data analytics to real-time recommendations, we can help your business reach its full potential.",
            longText: "We have a strong track record of helping hospitality businesses optimize their revenue streams through custom solutions that streamline pricing and inventory management. From advanced data analytics to real-time recommendations, we have the tools and expertise to help your business increase profitability and reach its full potential.",

        },
        {
            name: 'Medical',
            img: crossImg,
            text: "Create intuitive, user-friendly websites that effectively communicate important information to patients and administrators",
            longText: "Our web development team has a proven track record of delivering custom solutions for hospitality businesses that optimize revenue through sophisticated pricing and inventory management strategies.",

        }
    ];

    const industriesJSX = industriesData.map(x => 
        <span key={x.name} className="mobile">
            <img loading="lazy" src={x.img} className={"industry-img mobile " + x.name}></img>
            <div className={"industry-card " + x.name}>
                <h2>{x.name}</h2>
                <p>{x.text}</p>
                <img loading="lazy" src={x.img} className={"industry-img tablet " + x.name}></img>
            </div>
        </span>
    );


    const industriesJSXTablet = industriesData.map(x => 
        <div className={x.name + ' industry-text tablet'} key={x.name}>
                <h3>{x.name}</h3>
                <p>{x.text}</p>
        </div>
    );


    let technologiesTable = technologyJSX.map((tech) => (
        <CardComponent
            key={tech.id}
            name={tech.name}
            image={tech.img}
        />
    ))

    const learnMoreJSX = (
        <div className="learn-more mobile">
            <span className='learn-more'>Learn More</span>
            <ArrowForwardIcon/>
        </div>
    )

    const images = [
        {
            label: 'Lodgiq',
            imgPath: lodgiqCenter,
            mobileImg: mobileLodgiq,
            title:'Powerful tool for large hotel owners',
            text: "We helped a hotel revenue management service integrate machine learning data with a custom data flow fast responsive UI by priority based preloading data based on predicting user actions."
        },
        {
            label: 'Twine',
            imgPath: twineCenter,
            mobileImg: mobileTwine,
            title:'Social Medium App for CPO\'s',
            text:'Necessitie was brought in to architect a new app that included a range of features and tools to help CPOs stay connected with their peers, share best practices and industry insights, and find new sourcing opportunities.',
        },
        {
            label: 'Medidata',
            imgPath: medidataCenter,
            mobileImg: mobileMedidata,
            title:'Drug and procedure recording application',
            text:'We developed a custom web-based tool that allows patients to easily schedule and complete medical tests from the comfort of their own homes. The application includes a range of features to ensure a smooth and efficient testing experience, including online appointment scheduling, real-time test results, and secure data storage.',
        },
        {
            label: 'Alchemai Edge',
            imgPath: alchemaiCenter,
            mobileImg: mobileAchemai,
            title:'Future focused Risk Management software',
            text:'Our web development agency recently had the pleasure of working on a custom web-based tool for a leading risk management company. The tool is designed to help organizations assess and mitigate risk in a variety of areas, including financial, operational, and compliance risk.',
        },
        //Our development team built a user-friendly platform that allows users to easily identify and prioritize risks, create and track risk mitigation plans, and measure the effectiveness of those plans
        {
            label: 'And your project next',
            imgPath: solenneCenter,
            mobileImg: mobileSolenne,
            title:"A forwards thinking solution to today's problems",
            text:"Where will your ideas take you? Single page apps, complex development, beautiful customer facing website?  We can't wait to show off the work we do together",
        },

      ];

      function genRandomTree(N = 300) {
        return {
          nodes: [...Array(N).keys()].map((i) => ({ id: i })),
          links: [...Array(N).keys()]
            .filter((id) => id)
            .map((id) => ({
              source: id,
              target: Math.round(Math.random() * (id - 1))
            }))
        };
      }

    




    return (
        <div className="home main-content">
            <div className="landing-page secondary-color page" ref={landingRef} >
                    {!isMobile && <NetworkCluster isMobile={isMobile} landingRef={landingRef} page="Home" className="tablet" />}
                
                <div className="primary-content">
                
                    <h1>Let <span>Necessitie</span> be your tech solution</h1>

                </div>
                <div className="secondary-content" >
                    <p>Whether you need a Minimum Viable Product, UX/UI services, or assistance scaling your business, Necessitie can help you make your product ideas a reality.</p>
                    <Button className="action-btn" onClick={toContact}>Let's work together</Button>
                </div>
                {isMobile && <div className="mobile-cluster-container">
                    <div className="mobile-cluster cover"></div> 
                    <div className="mobile-cluster" id="cluster-container" ref={landingRefMobile}>
                        <NetworkCluster isMobile={isMobile} landingRef={landingRefMobile} page="Home"/>
                    </div>
                </div>}
            </div>
            
            

            <div className="share-page page main-template second-page">
                <div className='primary-content'>
                    <h1 className="share-header mobile">Focused precision for <span>your products</span></h1>
                    <h2 className="share-header tablet">Focused precision for <span>your products</span></h2>
                    <div className="service-img-container">
                        <img loading="lazy" src={servicesMainImg} className="service-main-img tablet"/>
                    </div>
                </div>
                
                <div className="secondary-content">
                    <p className="tablet">Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truly utilize the tools at hand. <br className="mobile"/><br/></p>
                    <p className="mobile"><span>Find people that are specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truly utilize the tools at hand. <br className="mobile"/><br/>
                        A broad range front end developer might get the job done, but a React specialist will get it done faster, and more robust. </p>
                </div>
            </div>

            {/* <hr className="divider tablet"/> */}
            {/* <div className="background-triangle tablet"></div> */}
            <div className="services-page page third-page">

                
                <div className="primary-content">
                    {/* <div className="rocket-container tablet"> */}
                        
                    {/* <img loading="lazy" src={rocketImg} className="rocket-img"/> */}
                    {/* </div> */}
                    <div className='services-primary-container'>
                        <h4 className="services-header tablet">Our areas of expertise</h4>
                        <h2 className="services-header mobile">Our areas of expertise</h2>

                        <p className="mobile">We have the most <span>modern and ubiquiteous technologies</span> under our belt, as well as a number of more esoteric choices when the need arises.</p>
                        <Button className="action-btn mobile" onClick={toContact}>See All Services</Button>
                    </div>
                    



                </div>
                <div className="secondary-content">
                    <div className="services-container">
                        {servicesJSX}
                    </div>
                </div>

            </div>
            {/* <div className="cluster-page page">
                
                <NetworkCluster/>

            </div> */}
           

            <div className="examples-page page">
                <div className="examples-container mobile">
                    <h2>Here's are some of the projects out team has worked on</h2>
                    <h5>{images[activeStep].title}</h5>
                    <p className="examples-text">{images[activeStep].text}</p>
                    <MobileCarousel showImage={true} images={images} activeStep={activeStep} setActiveStep={setActiveStep} backgroundImg={mobileTablet}/>
                    
                </div>
                <div className="examples-container tablet">
                    <div className="examples-img-cont">
                        <SlantedImager images={images} activeStep={activeStep}/>
                    </div>
                    <div className="examples-text-cont">
                        <h5>Here's are some of the projects out team has worked on</h5>
                        <p className="examples-main-text"><b>{images[activeStep].title}</b><br/>{images[activeStep].text}</p>
                        {/* <p>{images[activeStep].text}</p> */}
                        <MobileCarousel  showImage={false} images={images} activeStep={activeStep} setActiveStep={setActiveStep}/>

                    </div>
                </div>
            </div>
            <div className="industries-page page">
                <div className="primary-content">
                    <h2 className="industries-header">We specialize in serving clients from a wide range of industries</h2>
                    <p>Seek out experts in the specific technology you are looking to implement, rather than generalists who may not have the necessary experience to fully utilize the tools available.</p>
                    <Button className="action-btn outline mobile"  onClick={toContact}>Get a quote</Button>


                    
                </div>

                <div className="secondary-content">
                    <img loading="lazy" src={industriesFullImg} className="industries-chart tablet"/>
                    {industriesJSX}
                    {industriesJSXTablet}

                    {/* <div className="industries-div">
                    </div> */}
                </div>
                
            </div>
            <div className="products-page page">
                <div className="product-insert">
                    <div className="product-container">
                        <div className="primary-content">
                            <h2>How Necessitie can help you <span className="action-color-tablet">reach your goals!</span></h2>
                            <h5 className="tablet ">Full team software outsourcing</h5>
                            <p className="mobile title-primary-orange"><b>Full team software outsourcing</b></p>

                            <p>At our web development agency, we offer full team software outsourcing services to help businesses outsource their software development needs. Our team of experienced developers can handle projects of any size and complexity, providing a cost-effective and efficient solution for companies looking to expand their in-house capabilities or reduce development costs.</p>
                        </div>

                        <div className="secondary-content">
                            <h5 className="tablet">IT staff augmentation</h5>
                            <p className="mobile"><b>IT staff augmentation</b></p>
                            <p>Our IT staff augmentation services allow businesses to supplement their in-house IT team with skilled professionals on a temporary or ongoing basis. Whether you need extra resources for a specific project or ongoing support, our team of experienced IT professionals can provide the expertise and support you need to meet your business goals. With our staff augmentation services, you can quickly and easily scale your IT team to meet the needs of your business without the long-term commitment of hiring additional employees.</p>
                            {/* {learnMoreJSX} */}
                            <img loading="lazy" src={sittingDudeImg} className="sitting-dude mobile"/>

                        </div>
                    </div>
                    <div className="sitting-dude-container">
                        <img loading="lazy" src={sittingDudeImg} className="sitting-dude tablet"/>
                    </div>
                </div>

                
            </div>
            {/* <div className="background-triangle tablet products"></div> */}
            <div className="technologies-page page">
                <div className="primary-content">
                    <h3 className="technologies-header">Expertise in Our Core Technologies: Delivering Quality Software Solutions</h3>
                    <p className="mobile">Innovative Solutions Tailored to Your Business Needs</p>

                </div>
                <div className="secondary-content">
                    <img loading="lazy" src={atomImg} className="atom mobile"/>                     

                    <div className="technologies-list mobile">
                        {technologyJSX.map((x, i) => {
                            return (
                                <div className="single-tech" key={x.name}>
                                    <img loading="lazy" src={x.img}/>
                                    <h3 className="single-tech-name tablet">{x.name}</h3>
                                    <h2 className="single-tech-name mobile">{x.name}</h2>

                                    <p>{x.text}</p>
                                    {i!==technologyJSX.length-1&&<hr className="solid"></hr>}
                                </div>
                            )
                        })}
                    </div>
                        
                    <div className="tech-flex-cont tablet">
                        {technologyJSX.slice(0,3).map(x => {
                            return (
                                <div className="single-tech" key={x.name}>
                                    <img loading="lazy" src={x.img}/>
                                    <h5 className="single-tech-name">{x.name}</h5>
                                    <p>{x.text}</p>
                                </div>
                                )
                            })}   
                            <img loading="lazy" src={atomImg} className="atom"/>                     
                        </div>
                        
                    <div className="tech-flex-cont second tablet">
                        {technologyJSX.slice(3,6).map(x => {
                            return (
                                <div className="single-tech" key={x.name}>
                                    <img loading="lazy" src={x.img}/>
                                    <h5 className="single-tech-name">{x.name}</h5>
                                    <p>{x.text}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
                {/* <img loading="lazy" src={atomImg} className="atom mobile"/> */}
            </div>
            <div className="contact-page page">
                <ContactUs/>
            </div>
            {/* <div className="contact-page page">
                <h2 className="contact-header">Want to talk about your project?</h2>
                <p>We’re here to connect you with great developers perfect for your roles</p>
                    
                    <div className="secondary-content">
                        <Form className="contact-form">
                                <Form.Field
                                    id='form-input-control-error-email'
                                    className="form-email"
                                    control={Input}
                                    label='Email*'
                                    placeholder='YourEmail@Email.com'
                                    />
                                <Form.Field
                                    id='form-input-control-phone'
                                    className="form-phone"
                                    control={Input}
                                    label='Phone'
                                    placeholder='Enter your number and country code'
                                />
                                <Form.Field
                                    id='form-textarea-control-opinion'
                                    className="form-opinion"
                                    control={TextArea}
                                    label='How can we help you?'
                                    placeholder="Give us some details about your project"
                                    />
                                <Form.Field
                                    id='form-button-control-public'
                                    className="submit-button"
                                    control={Button}
                                    content='Submit'
                                />
                        </Form>
                    </div>
                    <div className="primary-content">
                        <div className="location-row address">
                            <LocationOnIcon/>
                            <span>88 Starr Street, Brooklyn NY</span>
                        </div>
                        <div className="phone-row address">
                            <PhoneIcon/>
                            <span onClick={() => {navigator.clipboard.writeText('14437649308')}}>1-443-764-9308</span>
                        </div>
                        <div className="email-row address">
                            <EmailIcon/>
                            <a href="mailto:anthony@necessitie.com">anthony@necessitie.com</a>
                        </div>
                    </div>
            </div> */}
        </div>
    )
}

export default Home;

