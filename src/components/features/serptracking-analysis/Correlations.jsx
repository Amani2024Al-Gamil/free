
import React from 'react';
import Image3 from '../../../images/screen-02.svg';

function Correlations() {
  return (
    <div>
            <div className="cont-compt d-flex p-5 justify-content-around align-items-center">
            <div className="comp-info p-5">
                <h2>Find correlations between SERP positions and ranking factors</h2>
                <p>For each keyword, the free SERP Checker finds if there is a correlation 
                    between different ranking factors and the pages' actual positions in search.</p>

                    <p>Sometimes, growing backlinks is more important, while other times
                        , optimizing for user experience might be more effective.
                         This feature removes the guesswork and tells you the best area to focus on..</p>
                       

            </div>{/**comp-info */}

            <div className="comp-image p-5 ">
                <img src={Image3} alt="" />

            </div>{/**comp-image */}
            
        </div> {/**cont-comp */}
    </div>
  )
}

export default Correlations;