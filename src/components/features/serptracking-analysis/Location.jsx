import React from 'react';
import Image5 from '../../../images/screen-06@2x.webp';

function Location() {
  return (
    <div>
         <div className="cont-compt d-flex p-5 justify-content-around align-items-center">
            <div className="comp-info p-5">
                <h2>Check SERP for any location</h2>
                <p>SERPs differ depending on the location. Considering this,
                     SEO PowerSuite's SERP Checker tool lets you specify a location as precise as a street address. Thus, you get the most detailed analysis of your SERP
                     competitors and can build a relevant local SEO strategy.</p>

                    
                       

            </div>{/**comp-info */}

            <div className="comp-image p-5 ">
                <img height='500px' src={Image5} alt="" />

            </div>{/**comp-image */}
            
            
        </div> {/**cont-comp */}
    </div>
  )
}

export default Location;