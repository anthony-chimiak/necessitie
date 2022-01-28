import React from 'react';

import './../styles/header.scss';
import breakpoint from '../Commons/breakpoints';
import styled, { css } from 'styled-components'



export const Header = () => {
    return (
        <div className="header">
            <div className="main-text">
                Necessitie
                Full Service Software Development
            </div>
            <div className="secondary-text" >
                More stuff about our services and goals, a catchy little thing to hear, made for you by us
            </div>
        </div>
    );
}

export default Header;