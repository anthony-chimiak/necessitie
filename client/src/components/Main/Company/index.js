import React, {useRef} from "react";
import { Button } from 'semantic-ui-react';
import { isMobile } from "react-device-detect";

import {toContact} from './../../helperFunctions'
import ContactUs from '../ContactUs/ContactUs';
import NetworkCluster from '../Map/Cluster/clusterTest.jsx';


import threePeople from "./../../../assets/images/three-people.svg"
import threeCircles from "./../../../assets/images/three-circles.svg"
import cheerfulFace from "./../../../assets/images/cheerful-face.png"
import flatScreen from "./../../../assets/images/flat-screen.png"


import './company.scss'



function Technologies(props) {
    const landingRef = useRef(null);
    const landingRefMobile = useRef(null)

    const whoListJSX = [
      {
        name: 'Young & Passionate',
        img: threePeople,
        text: 'Our teams are still eager to pick up on the newest technologies',
      },
      {
        name: ' Enthusiast & creative',
        img: threeCircles,
        text: 'Design work must be done with love, and people will notice the difference',
      },
      {
        name: 'Cheerful & comfortable',
        img: cheerfulFace,
        text: 'Beyond everything, our priority is a culture match.  Happy people just work better',
      },
    ].map(x => (
      <div className={"single-who " + x.name} key={x.name}>
        <img loading="lazy" src={x.img}/>
        <h5 className="tablet">{x.name}</h5>
        <h4 className="mobile">{x.name}</h4>
        <p>{x.text}</p>
      </div>
    ));


    return (
        <div className='company main-content'>
            <div className="landing-page secondary-color page" ref={landingRef}>
                {!isMobile && <NetworkCluster landingRef={landingRef} page="Company"/>}
                <div className="primary-content">
                    <h1>A <span>team</span> you can enjoy creating with</h1>
                </div>
                <div className="secondary-content" >
                    <p>Experienced professionals who are dedicated to helping your company achieve its goals through innovative technology solutions.</p>
                    <Button className="action-btn"  onClick={toContact}>Let's work together</Button>

                </div>
                {isMobile && <div className="mobile-cluster-container">
                    <div className="mobile-cluster cover"></div> 
                    <div className="mobile-cluster" id="cluster-container" ref={landingRefMobile}>
                        <NetworkCluster landingRef={landingRefMobile} page="Company"/>
                    </div>
                </div>}
            </div>
            <div className="intro-page page main-template second-page">
                <hr className="divider thick tablet"/>
                <div className="primary-content">
                    <h2 className="tablet">Prioritizing outcomes as well as cohesion</h2>
                    <h1 className="mobile">Prioritizing outcomes as well as cohesion</h1>
                </div>
                <div className="secondary-content">
                    <div>
                        <p><span>Successful product</span> development requires a balanced approach. We focus on personalized, in-depth technical guidance. It's important to find not just a good developer, but a good match.</p>
                        <p>To that end, company culture has to meet developer sensibilities.  We don't pull the trigger on an engagement unless we are sure we will have good chemistry with your teams.</p>
                    </div>
                </div>
            </div>

            <div className="list-page page main-template mobile third-page">
                <div className="primary-content">
                    <h4 className="tablet">Into the land <span>beyond</span> just Agile</h4>
                    <h2 className="mobile">Into the land <span>beyond</span> just Agile</h2>

                    <p>Lets be honest, we are getting to the point where <span>Agile just doesn't feel that, Agile</span> anymore.  We prefer to build off the lessons of the older methodologies in small teams.</p>  <br/><p>To that ends everyone we place has experience in <span>newer self management style</span>, freeing you up to focus on running your business</p>
                </div>
            </div>
            <div className="who-page page">
                <div className='primary-content'>
                <h4 className="tablet">Who are we?</h4>
                    <div className="who-container">
                        {whoListJSX}
                    </div>
                                    </div>
                <div className='secondary-content'>
                    <h4 className="tablet">We enjoy what we do and that <span>drives us to excel</span></h4>  
                    <h2 className="mobile first-header">We enjoy what we do and that <span>drives us to excel</span></h2>  

                    <div>

                     
                      <h5 className="tablet">Worldwide teams never felt so close</h5>
                      <h2 className="mobile">Worldwide teams never felt so close</h2>

                      <p className="">Although we believe properly managed remote is the future, we provide honest advice about whether going remote is the right option for your organization, or a more traditional physical meet up situation might be a better fit. Even as we get better and better at running teams this way, that doesn't mean its always the right fit yet.</p>
                      {/* <p className='tablet'>Our dedicated team focus completely on you, We help Define your goals and provide honest advice about whether going remote is the right option for your organization We assemble engineering team tailored to your desired skill set designed to blend flawlessly with your in house engineers</p> */}

                      <h5 className="tablet">Let's put the goals on the table</h5>
                      <h2 className="mobile">Let's put the goals on the table</h2>

                      <p className="">Our dedicated team focus completely on you, we help define your goals We assemble engineering team tailored to your desired skill set designed to blend flawlessly with your in house engineers</p>
                      {/* <p className='tablet'>Our dedicated team focus completely on you, We help Define your goals and provide honest advice about wheter going remote is the right option for your organization We assemble engineering team tailored to your desired skill set designed to blend flawlessly with your in house engineers</p> */}

                    </div>
                    <img loading="lazy" src={flatScreen} className=''/>
                </div>
            </div>
            <div className='final-page page'>
                <div className='primary-content'>
                    <h5 className="tablet">Focusing on reals people needs</h5>
                    <h2 className="mobile">Focusing on reals people needs</h2>
                    <h5 className="tablet">Human-Centered Design</h5>
                    <h4 className="mobile">Human-Centered Design</h4>

                    <p className='mobile'>When designing screens, we always keep the user in mind. How will they use your app? How can we make it's use feel more natural, effortless?</p>
                    <p className="tablet">When designing screens, we always keep the user in mind. How will they use your app? How can we make it's use feel more natural, effortless?  Good Human-Centered Design is an artform of anticipation.  This comes from both researching case studies, and intuition.  Beyond just our UX designers, every memember of Necesitie respects the importance of it and builds it into their craft. </p>
                    <p className='mobile'>What are the underlying factors that area creating the needs to begin with? By using a human-centered design approach, we can better anticipate and address people's needs before they even begin to interact with your company and products.</p>
                    <p className='tablet'>Sometimes it helps to look at the underlying factors that area creating the needs to begin with? By using this approach, we can put ourselves in the minds of your clients and address people's needs before they even begin to interact with your company and products.  Just give thm the clarity to think about what they are doing with the product, not how.</p>

                    {/* <p className='tablet'>For every screen we design and build, the person interacting with that screen is top of mind. What are their needs? More importantly, what are the behaviors motivating those needs? By taking a human-centered design approach, we’re able to better meet and anticipate people’s expectations as they interact with your business and products.</p>
                    <p className='tablet'>To achieve this, we conduct thorough foundational research before we even begin to think about the product’s design. This allows us to really understand the people you’re trying to reach and how to successfully engage them with your product or service. From there, we use our findings to guide how we design in a way that solves the problem and meets people’s needs in the simplest way possible.</p> */}
                </div>
                <div className='second-content'>
                    <h5 className="tablet">A newer delivery methodology</h5>
                    <h5 className="tablet">Agile 2.0 is here</h5>
                    <h2 className="mobile">A newer delivery methodology</h2>
                    <h4 className="mobile">Agile 2.0 is here</h4>
                    <p className='tablet'>Agile itself isn't a bad philospophy, but some bad habits have been codified by project managers who don't really understand the reasoning behind it. Having been around since the early 2000's, many of its tenants have become dogma instead of philosophy as it was intended.</p>
                    <p className='tablet'>Let's remove the uncompromising structure and modify it to fit your project.  Got a high flying developer who doesn't need much guidance, why bog him down with extra meetings?  Have another front-end developer who needs a bit of a push to get talking with the back-end? Make that a priority at your standups.  Agile was meant to be adaptable, and sadly is moving away from that.</p>
                    <p className='mobile'>Agile itself isn't a bad philospophy, but some bad habits have been codified by project managers who don't really understand the reasoning behind it. </p>
                    <p className='mobile'>Let's remove the uncompromising structure and modify it to fit your project.  Got a high flying developer who doesn't need much guidance, why bog him down with extra meetings?</p>
                </div>
                <div className='third-content'>
                    <h5 className="tablet">A balance between secure delivery and efficiancy</h5>
                    <h5 className="tablet">Secure Delivery</h5>
                    <h2 className="mobile">A balance between secure delivery and efficiancy</h2>
                    <h4 className="mobile">Secure Delivery</h4>
                    <p className='mobile'>Every stage of the development process, from standalone applications to intricate cloud architecture, depends on effective security and privacy procedures. </p>
                    <p className='mobile'>They should strike a balance between keeping data and information secure and providing users with a clean easy process minimizing friction </p>
                    <p className='tablet'>Every stage of the development process, from standalone applications to intricate cloud architecture, depends on effective security and privacy procedures. They should strike a balance between keeping data and information secure and providing users with a clean easy process minimizing friction.</p>
                    <p className='tablet'>We make sure that users have quick access to the resources they require by using solutions like role-based access management with single sign-on. We manage source code access in a very similar manner. Our support personnel can also keep a look out for any odd tendencies by monitoring your system after launch. If we notice any strange activity, we advise you on what to do next to reduce any potential harm.</p>
                </div>
            </div>
            <div className="contact-page page">
                <ContactUs />
            </div>
        </div>
    )
}

export default Technologies;