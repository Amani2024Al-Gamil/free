import React from 'react';
import Image1 from '../../../images/top-screen.svg';
import './home.css';
import WhatIsSerpChecker from './WhatIsSerpChecker';
import HowSerp  from './HowSerp';
import Competitors from './Competitors';
import Correlations from './Correlations';
import SearchComptition from './SearchComptition';
import  Spot from './Spot';
import SeaKeyWord from './SeaKeyWord';
import Location from './Location';
import FreeSerp from './FreeSerp';
import Track from './Track';
import Record from './Record';
import Flucutation from './Flucutation';
import Monitor from './Monitor';

function Home() {
  return (
    <>
    <div className='container-fluid  px-5 txt  d-flex justify-content-around align-items-center'>
        <div className="text  px-5 ">
            <h2 className="texth text-light fw-bolder display-6">
            SERP Checker Tool

            </h2>
            <p className="textp fw-bolder">
            Analyze organic competitors & overview rank history


            </p>

            <button className="btn btn-warning fw-bolder">Download for free</button>

        </div>{/**text */}



        <div className="image1 px-2 py-5">
       <img className='im1' src={Image1} alt="" />

        </div>{/**image1 */}
    </div>{/**container */}
    <WhatIsSerpChecker />
    <HowSerp />
    <Competitors/>
    <Correlations/>
    <SearchComptition />
    < Spot />
    <SeaKeyWord />
    <Location />
    <FreeSerp />
    <Track />
    <Record/>
    <Flucutation />
    <Monitor />
    </>
  );
}

export default Home;