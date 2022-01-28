import React, {Fragment} from 'react';
import { Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Services from './Services';
import Technologies from './Technologies';
import ContactUs from './ContactUs';



function Body(props) {

    return (
        <div classname="body-div">
            {/* <Routes>
                <Route exact path="/" element={<Homepage />}/>
                <Route path="/services" element={<Services />}/> 
                <Route path="/technologies" element={<Technologies />}/>
                <Route path="/ContactUs" element={<ContactUs />}/>
            </Routes> */}
            <Homepage />
            <Services/>
            <Technologies />
            <ContactUs />
        </div>

    )
}

export default Body;
