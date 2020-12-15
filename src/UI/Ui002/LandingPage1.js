import React from 'react';
import Title from '../../Title';
import './styles/LandingPage1.css';
import Header from './components/Header';
import Content from './components/Content';

const LandingPage1 = () => {
    return (
        <div className="landing">
            <Title title="day 002" />
            <Header />
            <Content />
        </div>
    )
}

export default LandingPage1
