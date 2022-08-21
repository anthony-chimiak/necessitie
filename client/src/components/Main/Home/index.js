import React from 'react';
import CardComponent from './CardComponent.js'
import { Button} from 'semantic-ui-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';

import MobileCarousel from './MobileCarousel';
import ContactUs from '../ContactUs/ContactUs.js';
import { ForceGraph2D } from "react-force-graph";


import NetworkCluster from './Cluster/clusterTest.jsx';


//IMAGES
// import landingPic from "./../../../assets/images/landing-guy.png"
import lodgiqEx from "./../../../assets/images/Lodgiq-example.png"
import medidataEx from "./../../../assets/images/Medidata-example.png"
import twineEx from "./../../../assets/images/twine-example.png"
import landingImg from "./../../../assets/images/home-landing.png" 
import rocketImg from "./../../../assets/images/rocket.png" 
import houseImg from "./../../../assets/images/industry-house.png" 
import crossImg from "./../../../assets/images/industry-cross.png" 
import pyramidImg from "./../../../assets/images/industry-pyramid.png" 
import slabImg from "./../../../assets/images/industry-slab.png" 
import sittingDudeImg from "./../../../assets/images/sitting-dude.png"
import atomImg from "./../../../assets/images/atom.png"
import servicesMainImg from "./../../../assets/images/services.png"
import servicesReactImg from "./../../../assets/images/Crypto/dent.png"
import servicesPythonImg from "./../../../assets/images/Crypto/python.png"
import servicesUxImg from "./../../../assets/images/element-equal.png"
import servicesQaImg from "./../../../assets/images/Search/search-normal.png"
import androidImg from "./../../../assets/images/Platform/android.png"
import iosImg from "./../../../assets/images/Platform/apple.png"
import frontendImg from "./../../../assets/images/Platform/frontend.png"
import backendImg from "./../../../assets/images/Platform/message-programming.png"
import crossPlatformImg from "./../../../assets/images/Platform/cross-platform.png"
import aiImg from "./../../../assets/images/Platform/ai.png"
import industriesFullImg from "./../../../assets/images/allcubes.png"



//
import './home.scss'

export const Home = (props) => {
    const industriesList = ['FinTech', 'EdTech', 'Hospitality', 'Medical'];
    const [activeStep, setActiveStep] = React.useState(0);
    const technologyJSX = [
        {
            name: 'Android',
            img: androidImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            id: 1
        },
        {
            name: 'IOS',
            img: iosImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            id: 2
        },
        {
            name: 'Frontend',
            img: frontendImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            id: 3
        },
        {
            name: 'Backend',
            img: backendImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            id: 4
        },
        {
            name: 'Cross-platform',
            img: crossPlatformImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            id: 5
        },
        {
            name: 'Artificial-Intelligence',
            img: aiImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            id: 6
        },
    ];

    const servicesData = [
        {
            name: 'React Developers',
            class: 'react-developers-img',
            img: servicesReactImg,
            text: "Developers with experience in all versions of React, but a focus on the Hooks/Context paradigm."
        },
        {
            name: 'Python Developers',
            class: 'python-developers-img',
            img: servicesPythonImg,
            text: "Python Experts with a wider range of uses.  Data Analytics to backend work, Python is a powerfuly ally."
        },
        {
            name: 'UI/UX',
            class: 'ui-ux-img',
            img: servicesUxImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'QA / Sdet Engineers',
            class: 'sdet-engineers-img',
            img: servicesQaImg,
            text: "Quality Analysts and Test Engineers specializing in automated testing, continuous deployment, and process implementation."
        },
    ];

    const servicesJSX = servicesData.map(x => {
        return (
            <div className="single-service" key={x.name}>
                <img src={x.img} className={x.class}/>
                <div className="border-cont">
                    <h3 className="feature-service">{x.name}</h3>
                    <p>{x.text}</p>
                </div>
            </div>
        )
    });    

    const industriesData = [
        {
            name: "FinTech",
            img: houseImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
        },
        {
            name: 'EdTech',
            img: pyramidImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
        },
        {
            name: 'Hospitality',
            img: slabImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
        },
        {
            name: 'Medical',
            img: crossImg,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
        }
    ];

    // const industriesJSX = industriesData.map(x => 
    //     <span key={x.name}>
    //         <img src={x.img} className={"industry-img mobile " + x.name}></img>
    //         <div className={"industry-card " + x.name}>
    //             <h2>{x.name}</h2>
    //             <p>{x.text}</p>
    //             <img src={x.img} className={"industry-img tablet " + x.name}></img>
    //         </div>
    //     </span>
    // );

    // const industriesJSX = industriesData.map(x => 
    //     <>
    //         <img src={x.img} className={"industry-img mobile " + x.name}></img>
    //             <h2>{x.name}</h2>
    //             <p>{x.text}</p>
    //             <img src={x.img} className={"industry-img tablet " + x.name}></img>
    //     </>
    // );

    const industriesJSX = industriesData.map(x => 
        <div className={x.name + ' industry-text'}>
            {/* <img src={x.img} className={"industry-img mobile " + x.name}></img> */}
                <h3>{x.name}</h3>
                <p>{x.text}</p>
                {/* <img src={x.img} className={"industry-img tablet " + x.name}></img> */}
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
            imgPath: lodgiqEx,
            title:'Powerful tool for large hotel owners',
            text: "Lodgiq is a hotel revenue management service.  We helped integrate machine learning data with a fast responsive UI by priority based preloading data on assumptions of how individual users liked to navigate a page"
        },
        {
            label: 'Twine',
            imgPath: twineEx,
            title:'Social Medium App for CPO\'s',
            text:'Brought in to help architect how the various services would communicate and talk with each other',
        },
        {
            label: 'Medidata',
            imgPath: medidataEx,
            title:'Drug and procedure recording application',
            text:'Due to being in the medical field, there was an extreme focus on integratting the development team directly with the SDET teams.  Developers would be working side by side with Automation QA engineers, setting up those teams was one of our specialities.',
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
            <div className="landing-page secondary-color page">
                <div className="primary-content">
                    <h1>Outsource to developers specialized to your needs</h1>
                    <img src={landingImg} className="landing-img"/>

                </div>
                <div className="secondary-content" >
                    <p>Necessitie can provide you with top developers that have skills focused on your needs so you know they will be able to excel at the tasks you throw at them.</p>
                    <Button className="action-btn">Let's work together</Button>
                    <Button className="action-btn outline tablet">Get a quote</Button>
                </div>

            </div>
            <div className="share-page page">
                <div className='primary-content'>
                    <h2 className="share-header">Focused precision for your products</h2>
                </div>
                
                <div className="secondary-content">
                    <p><span className='action-color'>Find people that are specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand. <br className="mobile"/><br/>
                        A broad range front end developer will get the job done, but a React specialist will get it done faster, and more robust. </p>
                </div>
            </div>

            <hr className="divider tablet"/>
            {/* <div className="background-triangle tablet"></div> */}
            <div className="services-page page">

                
                <div className="primary-content">
                    {/* <div className="rocket-container tablet"> */}
                        
                    {/* <img src={rocketImg} className="rocket-img"/> */}
                    {/* </div> */}
                    <div className='services-primary-container'>
                        <h2 className="services-header">Our speciality services</h2>
                        <p>Find people that are <span className='action-color'>specialists</span> in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p>
                        <Button className="action-btn">See All Services</Button>
                    </div>
                    <div className="service-img-container">
                        <img src={servicesMainImg} className="service-main-img"/>
                    </div>



                </div>
                <div className="secondary-content">
                    <div className="services-container">
                        {servicesJSX}
                    </div>
                </div>

            </div>
            <div className="cluster-page page">
                
                <NetworkCluster/>

            </div>
           

            <div className="examples-page page">
                <div className="examples-container mobile">
                    <h2>Here's are some of the projects out team has worked on</h2>
                    <MobileCarousel images={images} activeStep={activeStep} setActiveStep={setActiveStep}/>
                    <h3>{images[activeStep].title}</h3>
                    <p>{images[activeStep].text}</p>
                </div>
                <div className="examples-container tablet">
                    <MobileCarousel images={images} activeStep={activeStep} setActiveStep={setActiveStep}/>
                    <div className="examples-text-cont">
                        <h2>Here's are some of the projects out team has worked on</h2>
                        <h3>{images[activeStep].title}</h3>
                        <p>{images[activeStep].text}</p>
                    </div>
                </div>
            </div>
            <div className="industries-page page">
                <div className="primary-content">
                    <h2 className="industries-header">We work across many industries</h2>
                    <p>Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p>
                    <Button className="action-btn outline">Get a quote</Button>


                    
                </div>

                <div className="secondary-content">
                    <img src={industriesFullImg} className="industries-chart"/>
                    {industriesJSX}

                    {/* <div className="industries-div">
                    </div> */}
                </div>
                
            </div>
            <div className="products-page page">
                <div className="product-insert">
                    <div className="product-container">
                        <div className="primary-content">
                            <h2>How Necessitie can help you <span className="action-color-tablet">reach your goals!</span></h2>
                            <h4>Full team software outsourcing</h4>
                            <p>Necessitie has a range of scalable possibilities to meet your products needs.  Full independent front-end, back-end, or QA team? We will have that, joining in on meetings where you feel appropriate.</p>
                            <p>If you need to scale up, we can move to full service team, handling design and devops as well.</p>
                        </div>

                        <div className="secondary-content">
                            <h4>IT staff augmentation</h4>
                            <p>Necessitie can help place people who know how to work in existing teams, right into yours.
                            <br className='mobile'/><br/>Fast, efficient software developers, UI/UX designers, and QA/Sdet personelle at your fingertips. 
                            <br className='mobile'/><br/>Avoid sourcing and recruitment issues.</p>
                            {/* {learnMoreJSX} */}
                            <img src={sittingDudeImg} className="sitting-dude mobile"/>

                        </div>
                    </div>
                    <img src={sittingDudeImg} className="sitting-dude tablet"/>
                </div>

                
            </div>
            {/* <div className="background-triangle tablet products"></div> */}
            <div className="technologies-page page">
                <div className="primary-content">
                    <h2 className="technologies-header">Technologies we are working with</h2>
                    <p>We would be happy to help you with problems in any of these areas (And beyond?)</p>
                    {/* <button>Get a Quote</button> */}
                    {/* <img src={atomImg} className="atom tablet"/> */}

                </div>
                <div className="secondary-content">
                    <div className="technologies-list mobile">
                        {technologyJSX.map((x, i) => {
                            return (
                                <div className="single-tech" key={x.name}>
                                    <img src={x.img}/>
                                    <h3 className="single-tech-name">{x.name}</h3>
                                    <p>{x.text}</p>
                                    {i!==technologyJSX.length-1&&<hr class="solid"></hr>}
                                </div>
                            )
                        })}
                    </div>
                        
                    <div className="tech-flex-cont tablet">
                        {technologyJSX.slice(0,3).map(x => {
                            return (
                                <div className="single-tech" key={x.name}>
                                    <img src={x.img}/>
                                    <h4 className="single-tech-name">{x.name}</h4>
                                    <p>{x.text}</p>
                                </div>
                                )
                            })}   
                            <img src={atomImg} className="atom"/>                     
                        </div>
                        
                    <div className="tech-flex-cont second tablet">
                        {technologyJSX.slice(3,6).map(x => {
                            return (
                                <div className="single-tech" key={x.name}>
                                    <img src={x.img}/>
                                    <h4 className="single-tech-name">{x.name}</h4>
                                    <p>{x.text}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
                {/* <img src={atomImg} className="atom mobile"/> */}
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

