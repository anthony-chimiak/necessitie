import { fontStyle } from '@mui/system';
import React from 'react';

function Homepage(props) {
    return (
    <div>
        <h3>HOMEPAGE</h3>
        <text 
        style={{
            position: 'absolute',
            width: '490px',
            height: '114px',
            left: '140px',
            top: '680px',

            fontFamily: 'Ubumedium',
            fontSize: '50px',
            lineHeight: '57px',
            color: '#424B5A'

        }}
        >
            You share your idea. We get it done.
        </text>
        <text
        style={{
            position: 'absolute',
            width: '590px',
            height: '144px',
            left: '820px',
            top: '680px',
            
            fontFamily: 'Ubu',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '18px',
            lineHeight: '24px',
            color: '#A1AEB7'
        }}
        >
            OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA OWARI DA
        </text>
        <text
        style={{
            position: 'relative',
            width: '700px',
            height: '114px',
            textAlign: 'center',
            top: '610px',

            fontFamily: 'Ubumedium',
            fontSize: '50px',
            lineHeight: '57px',
            color: '#424B5A'
        }}>
        See what we can do for you (INFO ICONS HERE WITHS DESCRIPTIONS)
        </text>
    </div>
    )
}

export default Homepage;

