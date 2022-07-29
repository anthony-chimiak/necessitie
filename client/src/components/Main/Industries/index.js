import React from 'react';
import { Form, Input, TextArea, Button, Card, Icon, Image } from 'semantic-ui-react';
import ContactUs from '../ContactUs/ContactUs';

import './industries.scss'

function Industries(props) {
    const industriesList = [
        {
            name: 'FinTech',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
            tabletText: `Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. /n/nWe offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.`,
            img: '',
        },
        {
            name: 'EdTech',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
            tabletText: 'Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. /n/nWe offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.',
            img: '',
        },
        {
            name: 'Medical',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
            tabletText: 'Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. /n/nWe offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.',
            img: '',
        },
        {
            name: 'Hospitality',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
            tabletText: 'Necessitie has spent time working with in the fast paced fintech ecosphere, understanding the need for high performing, and secure products. /n/nWe offer staff augmentation of developers specifically with fintech experience, as well as vetting processes focusing on fundmanetal knowledge of economics and finance that assist developers in understanding project needs quickly and efficiently.',
            img: '',
        }
    ]

    
    return (
        <div className='industries main-content'>
            <div className="landing-page primary-color page">

            <div className="primary-content">
                <h2>Industries</h2>
            </div>
            <div className="secondary-content" >
                <p>Necessitie can provide you with top developers that have skills focused on your needs so you know they will be able to excel at the tasks you throw at them.</p>
                <Button className="action-btn">Let's work together</Button>
                <Button className="action-btn outline tablet">Get a quote</Button>

            </div>
            </div>
            <div className="intro-page page">
                <div className="primary-content">
                    <h3 >Our Custom Software Development Services</h3>
                    <p>Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand. <br/><br/>  A broad range front end developer will get the job done, but a React specialist will get it done faster, and more robust.</p>
                </div>
                <div className="secondary-content">
                </div>

            </div>
            <div className="background-triangle into tablet"></div>

            <div className="list-page page">
                <div className="primary-content">
                    <h3>Necessitie’s industries specialities</h3>
                    <p>Find people that are specialists in the technology you are looking to use, not wide range generalists that lack the experience to truely utilize the tools at hand.</p>
                    <Button className="action-btn outline mobile">Get a quote</Button>
                    <Button className="action-btn tablet">Hire top-level developers</Button>

                </div>
                <div className="secondary-content">
                    <div className="industries-list-container">
                        {industriesList.map(x => {
                            return (
                                <div className={"industries-card " + x.name}>
                                    <h3>{x.name}</h3> 
                                    <p className="mobile">{x.text}</p>
                                    <p className="tablet">{x.tabletText}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <ContactUs />
        </div>
    )
}

export default Industries;