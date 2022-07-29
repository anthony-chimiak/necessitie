import React, {Fragment} from 'react';
import { Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Services from './Services';
import Technologies from './Technologies';
import Industries from './Industries';
import ContactUs from './ContactUs/ContactUs';

import './main.scss'



export const Main = (props) => {

    return (
        <div className="main-div">
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/Home" element={<Home />}/>
                {/* <Route exact path="/" element={<Industries />}/> */}
                <Route path="/Services" element={<Services />}/> 
                <Route path="/Technologies" element={<Technologies />}/>
                <Route path="/Industries" element={<Industries />}/>
                <Route path="/Contact" element={<ContactUs />}/>
            </Routes>
        </div>

    )
}

export default Main;
