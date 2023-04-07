import React from 'react';
import { Link } from 'react-router-dom';
import './Resources.css';
import Navbar from './Navbar';

export default function Resources() {
  return (
    <>
    <Navbar />
    <h1>Welcome to the Resource Library</h1>
    <p>Tap on a tile below to get started</p>

    <div className="container">
        <div className="option" id="boxOne">
            <h2>What to Recycle</h2>
        </div>
        <div className="option" id="boxThree">
            <h2>Purchase Decisions</h2>
        </div>
        <div className="option" id="boxTwo">
            <h2>How to Recycle</h2>
        </div>
    </div>

    </>
  );
};
