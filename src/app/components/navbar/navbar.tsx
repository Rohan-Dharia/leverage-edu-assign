import  "./navbar.css"; 
import React, { useState } from 'react';

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="logo">
                <img src="https://asset.brandfetch.io/idhRczzVps/idENk698Wh.svg" alt="Leverage Edu Logo"></img>
            </div>
            <div className="nav-items">
                <a href="#">Study Abroad</a>
                <a href="#">Accommodation</a>
                <a href="#">Test Prep</a>
                <a href="#">Finance</a>
                <a href="#">Community</a>
                <a href="#">Products</a>
                <a href="#">More</a>
            </div>
            <div className="right-icons">
                <img src="https://img.icons8.com/?size=100&id=HcIQmljj5Or3&format=png&color=000000" alt="description of image"></img>
                <img src="https://img.icons8.com/?size=100&id=43298&format=png&color=000000" alt="description of image"></img>
                <img src="https://img.icons8.com/?size=100&id=iVc75LcS3jho&format=png&color=000000" alt="description of image"></img>
            </div>
        </div>
    );
}
