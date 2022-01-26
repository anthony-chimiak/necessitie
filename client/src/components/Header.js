import React from 'react';


function Header() {
    return (
        <div 
            style={{
                height: '488px',
                backgroundColor: '#C4C4C4',
            }}
        >
            <text 
                style={{
                    position: 'absolute',
                    height: '152px',
                    left: '10.42%',
                    right: '40.97%',
                    //top: 'calc(50% - 152px/2 - 109.5px)',
                    top: '114px',
                    width: '700px',
                    
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '66px',
                    lineHeight: '76px',
                    color: '#FFFFFF',
                    fontFamily: 'Ubu'

                }}
            >
                Necessitie
                Full Service Software Development
            </text>
            <text style={{
                position: 'absolute',
                height: '85px',
                width: '576px',
                left: '10.45%',
                top: '400px',


                fontFamily: 'Ubu',
                color: '#FFFFFF',
                fontSize: '17px',
                lineHeight: '24px'
                }}>
            More stuff about our services and goals, a catchy little thing to hear, made for you by us
            </text>
        </div>
    );
}

export default Header;