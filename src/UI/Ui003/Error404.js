import React from 'react';
import './styles/Error404.css';
import arrow from './assets/arrow.svg';
import Title from '../../Title';

const Error404 = () => {
    return (
        <div className="error" >
            <Title title="Ui 003" />
            <h1 className="error__404">404</h1>
            <div className="error__text">Oops, you still haven't <br />found what you looking for?</div>
            <div className="error__description">The page you are looking for might have been removed, <br />had its name changed, or is temporarily unavailable.</div>
            <div className="error__links">
                <button>
                    <img src={arrow} alt="arrow" />
                </button>
                <p>Back to Home Page</p>
            </div>
        </div>
    )
}

export default Error404
