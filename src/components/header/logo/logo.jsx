import React, { Fragment as FR } from "react";
import logo from '../logo/../../../images/pngwing.png';
import './image.css';

export function Logo(){
    return(
        <FR>
            <img src={logo} alt="Cortesia de https://www.pngwing.com" className="imgSize" />
        </FR>
    );
}