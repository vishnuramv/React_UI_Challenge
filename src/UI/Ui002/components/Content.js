import React from "react"
import search from '../assets/search.svg';
import arrow from '../assets/arrow.svg';
import '../styles/Content.css';

function Content(){
    return(
        <div className="content">
            <img src={ search } alt="search" />
            <div className="content__body">
                <h1>GEAR VR</h1>
                <p>it's easy to get lost in the world of <br /> virtual reality because the Gear Vr<br /> is engineered to feel lighter.</p>
                <button>
                    <span>Find out more</span>
                    <img src={ arrow } alt="arrow" />
                </button>
            </div>
            <div></div>
        </div>
        )
}

export default Content
