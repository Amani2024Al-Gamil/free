import React from 'react';
import Image2 from '../../../images/screen-01.svg'

function Competitors() {
  return (
    <div>
        <div className="competitors w-75 mx-auto">
            <h2 className="compinfo text-center fw-bolder px-5">Analyze top competitors for any keyword and win the SERP</h2>
            <p className="compt-p text-center fw-bolder px-5">Use SEO PowerSuite's SERP Checker to analyze your competition
                 and measure pages' authority. Discover your competitors'
                 strengths and weaknesses to refine your SERP winning strategy 
                 and get tangible SEO results.</p>
        </div>{/**competitors */}
        <div className="cont-compt d-flex p-5 justify-content-around align-items-center">
            <div className="comp-image p-5 ">
                <img src={Image2} alt="" />

            </div>{/**comp-image */}
            <div className="comp-info p-5">
                <h2>Estimate keyword potential at a glance</h2>
                <p>SERP Checker quickly calculates keyword difficulty
                     based on crucial metrics such as page and domain authority, 
                    the number of backlinks, and SERP competitors' domain authority.</p>
                    <p>Keyword difficulty lets you decide if a keyword is worth competing for, 
                        or if it is better to focus on another one.</p>
                        <button className='btn btn-warning'>Analiese SERP for Free</button>

            </div>{/**comp-info */}
        </div>
    </div>
  )
}

export default Competitors;