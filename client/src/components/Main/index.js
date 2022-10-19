import React, {Fragment} from 'react';
import { Router, Routes, Route } from "react-router-dom";
import Map from './Map'
import Home from './Home';
import Services from './Services';
import Technologies from './Technologies';
import Industries from './Industries';
import Company from './Company';
import ContactUs from './ContactUs/ContactUs';

import './main.scss'



export const Main = (props) => {

    return (
        <div className="main-div">
            <Map />
            <Routes>
                {/* <Route exact path="/" element={<Map />}/>
                <Route path="/Map" element={<Map />}/> */}
                <Route path="/Home" element={<Home />}/>
                <Route path="/Services" element={<Services />}/> 
                <Route path="/Industries" element={<Industries />}/>
                <Route path="/Technologies" element={<Technologies />}/>
                <Route path="/Company" element={<Company />}/>
                <Route path="/Contact" element={<ContactUs />}/>
            </Routes>
        </div>

    )
}

export default Main;
