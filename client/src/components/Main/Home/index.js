import React, {useState} from 'react';
import CardComponent from './CardComponent.js'
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import landingPic from "/Users/anthony/necessitie/client/src/assets/images/necessitie-main-image.png"

import MobileCarousel from './MobileCarousel';
import './home.scss'

export const Home = (props) => {
    const industriesList = ['FinTech', 'EdTech', 'Hospitality', 'Medical'];
    const [selIndustry, setSelIndustry] = useState(industriesList[0]);
    const technologyJSX = [
        {
            name: 'Android',
            img: 'https://freeiconshop.com/wp-content/uploads/edd/android-flat.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 1
        },
        {
            name: 'IOS',
            img: 'https://icon-library.com/images/ios-icon/ios-icon-25.jpg',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 2
        },
        {
            name: 'Frontend',
            img: 'https://cdn-icons-png.flaticon.com/512/2166/2166895.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 3
        },
        {
            name: 'Backend',
            img: 'https://cdn-icons-png.flaticon.com/512/2166/2166823.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 4
        },
        {
            name: 'Cross-platform',
            img: 'https://cdn-icons-png.flaticon.com/512/2037/2037075.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 5
        },
        {
            name: 'Articial-Intelligence',
            img: 'https://cdn-icons-png.flaticon.com/512/1985/1985582.png',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            id: 6
        },
    ];

    const servicesJSX = [
        {
            name: 'React Developers',
            img: '',
            text: "Developers with experience in all versions of React, but a focus on the Hooks/Context paradigm."
        },
        {
            name: 'Python Developers',
            img: '',
            text: "Python Experts with a wider range of uses.  Data Analytics to backend work, Python is a powerfuly ally."
        },
        {
            name: 'UI/UX',
            img: '',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            name: 'QA / Sdet Engineers',
            img: '',
            text: "Quality Analysts and Test Engineers specializing in automated testing, continuous deployment, and process implementation."
        },
    ];

    

    const industriesData = {
        FinTech: {
            img: '',
            text: "Test for FinTech",
        },
        EdTech: {
            img: '',
            text: "Test for FinTech",
        },
        Hospitality: {
            img: '',
            text: "Test for FinTech",
        },
        Medical: {
            img: '',
            text: "Test for FinTech",
        }
    };
        // {
        //     name: 'FinTech',
        //     img: '',
        //     text: "Test for FinTech",
        // },
        // {
        //     name: 'EdTech',
        //     img: '',
        //     text: "Test for EdTech",
        // },
        // {
        //     name: 'Hospitality',
        //     img: '',
        //     text: "Test of Hospitality",
        // },
        // {
        //     name: 'Medical',
        //     img: '',
        //     text: "Test for Medical",
        // },
    // ];

    let technologiesTable = technologyJSX.map((tech) => (
        <CardComponent
            key={tech.id}
            name={tech.name}
            image={tech.img}
        />
    ))

    let industryListJSX = industriesList.map((industry) => 
        {
            let active = (industry === selIndustry)?true:false;
            // debugger;
            return <div className={"industry-card " + (active?"active":'')} onClick={(e)=>setSelIndustry(industry)} key={industry}>{industry}</div>
        }
    );

    const learnMoreJSX = (
        <div className="learn-more">
            <span className='learn-more'>Learn More</span>
            <ArrowForwardIcon/>
        </div>
    )

    const images = [
        {
          label: 'San Francisco – Oakland Bay Bridge, United States',
          imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          label: 'Bird',
          imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          label: 'Bali, Indonesia',
          imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
          label: 'Goč, Serbia',
          imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ];

    // let industriesJSX = [];

    return (
        <div className="home">
            <div className="landing-page primary-color page">
                <div className="primary-content">
                    <h1>Outsource to developers specialized to your needs</h1>
                    <div>Necessitie can provide you with top developers that have skills focused on your needs so you know they will be able to excel at the tasks you throw at them.</div>
                    <Button className="work-together-btn">Let's work together</Button>
                </div>
                <div className="secondary-content" >
                    <img src={landingPic} className="landing-pic"/>
                </div>
            </div>
            <div className="share-page page">
                <div className='primary-content'>
                    <h2 className="share-header">Focused precision for your products</h2>
                </div>
                
                <div className="secondary-content">
                    <div>Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand. <br/><br/>
                        A broad range front end developer will get the job done, but a React specialist will get it done faster, and more robust. </div>
                </div>
            </div>
            <div className="services-page page">
                <div className="primary-content">
                    <h2 className="services-header">Our speciality services</h2>
                </div>
                <div className="secondary-content">
                    {servicesJSX.map(x => {
                        return (
                            <div className="single-service" key={x.name}>
                                <img src={x.img}/>
                                <h3 className="feature-service">{x.name}</h3>
                                <span>{x.text}</span>
                            </div>
                        )
                    })}
                </div>
                (INFO ICONS HERE WITHS DESCRIPTIONS)
            </div>
            <div className="examples-page page">
                <h2>App Name Example</h2>
                <MobileCarousel images={images}/>
                <h3>The secret sauce of Form</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            </div>
            <div className="industries-page page">
                <div className="primary-content">
                <h2 className="industries-header">We work across many industries</h2>
                    <p>While happy to work on any project you put before us, Necessitie has considerable experience in the following industries.</p>
                    <div className="industries-div">
                        <div className="industries-list">{industryListJSX}</div>
                        
                        <div>
                            <h3>{selIndustry}</h3>
                            <p>{industriesData[selIndustry].text}</p>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="secondary-content">
                </div>
                
            </div>
            <div className="technologies-page page">
                <div className="primary-content">
                    <h2 className="technologies-header">Where business meets cutting-edge technology</h2>
                    <h3 className="technologies-subheader">Choose the tech stack for your next application, or let us pick the best  solution for you</h3>
                    <button>Get a Quote</button>
                </div>
                <div className="secondary-content">
                    <Card.Group itemsPerRow={3}>
                        {technologiesTable}
                    </Card.Group>
                    {/* REPLACED OLD MAPPING WITH COMPONENT MAPPING/ REUSABLE WITH OTHER TABLES} */}
                    {/* {technologyJSX.map(x => {
                        return (
                            <div className="single-tech" key={x.name}>
                                <img src={x.img}/>
                                <h3 className="single-tech-name">{x.name}</h3>
                                <span>{x.test}</span>
                            </div>
                        )
                    })} */}
                </div>
            </div>
            <div className="products-page page">
                <div className="primary-content">
                    <h2>Our team experts?</h2>
                    <img/>
                    <h3>Full team software outsourcing</h3>
                    <p>Necessitie has a range of scalable possibilities to meet your products needs.  Full independent front-end, back-end, or QA team? We will have that, joining in on meetings where you feel appropriate.</p>
                    <p>If you need to scale up, we can move to full service team, handling design and devops as well.</p>
                </div>
                <div className="secondary-content">
                    <h3>IT staff augmentation</h3>
                    <p>Necessitie can help place people who know how to work in existing teams, right into yours.
                    <br/><br/>Fast, efficient software developers, UI/UX designers, and QA/Sdet personelle at your fingertips. 
                    <br/><br/>Avoid sourcing and recruitment issues.</p>
                    {learnMoreJSX}
                </div>
                
            </div>
            <div className="contact-page page">
                <h2 className="contact-header">Want to talk about your project?</h2>
                <p>We’re here to connect you with great developers perfect for your roles</p>
                {/* <div className="contact-us-wrapper"> */}
                    
                    <div className="secondary-content">
                        <Form className="contact-form">
                            {/* <Form.Group> */}
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
                                {/* </Form.Group> */}
                                <Form.Field
                                    id='form-button-control-public'
                                    className="submit-button"
                                    control={Button}
                                    content='Submit'
                                />
                        </Form>
                    </div>
                    <div className="primary-content">
                        {/* <h3 className="contact-subheader">We'd love to hear from you</h3> */}
                        {/* <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>    */}
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
                {/* </div> */}
            </div>
        </div>
    )
}

export default Home;

