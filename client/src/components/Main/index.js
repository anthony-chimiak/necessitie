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
                {/* <Route exact path="/" element={<Services />}/> */}
                <Route path="/services" element={<Services />}/> 
                <Route path="/technologies" element={<Technologies />}/>
                <Route path="/industries" element={<Industries />}/>
                <Route path="/contactus" element={<ContactUs />}/>
            </Routes>
        </div>

    )
}

export default Main;
