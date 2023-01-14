import React, {Fragment} from 'react';
import { Router, Routes, Route } from "react-router-dom";
import Map from './Map'
import Home from './Home';
import Services from './Services';
import Technologies from './Technologies';
import Industries from './Industries';
import Company from './Company';
import ContactUs from './ContactUs';

import './main.scss'



export const Main = (props) => {
    const { isMobile } = props;
    return (
        <div className="main-div">
            {/* <Map /> */}
            <Routes>
                <Route exact path="/" element={<Home isMobile={isMobile}/>}/>
                <Route path="/Home" element={<Home isMobile={isMobile}/>}/>
                <Route path="/Services" element={<Services isMobile={isMobile}/>}/> 
                <Route path="/Industries" element={<Industries isMobile={isMobile}/>}/>
                <Route path="/Technologies" element={<Technologies isMobile={isMobile}/>}/>
                <Route path="/Company" element={<Company isMobile={isMobile}/>}/>
                <Route path="/Contact" element={<ContactUs isMobile={isMobile}/>}/>
            </Routes>
        </div>

    )
}

export default Main;
