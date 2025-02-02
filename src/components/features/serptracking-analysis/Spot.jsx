import React from 'react';
import Image4 from '../../../images/screen-04.svg';

function Spot() {
  return (
    <div>
             <div className="cont-compt d-flex p-5 justify-content-around align-items-center">
            <div className="comp-info p-5">
                <h2>Spot the weakest SERP competitor</h2>
                <p>If you want to get into a highly competitive SERP with a relatively small site,
                     find the weakest SERP player and do your best to outrank this website.</p>

                    <p>SERP Checker will show the weakest competitor so you can compare their site against yours,
                         see where you fall behind, 
                        and refine your SEO strategy to outrank the lowest site of the top 10.</p>
                        <buttom className="btn btn-warning fw-bolder">Analyse SERP for free</buttom>
                       

            </div>{/**comp-info */}

            <div className="comp-image p-5 ">
                <img  src={Image4} alt="" />

            </div>{/**comp-image */}
            
            
        </div> {/**cont-comp */}
        

    </div>
  )
}

export default Spot;