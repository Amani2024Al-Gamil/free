import React from 'react';
import Image4 from '../../../images/screen-03.svg';

function SearchComptition() {
  return (
    <div>
         <div className="cont-compt d-flex p-5 justify-content-around align-items-center">

         <div className="comp-image p-5 ">
                <img src={Image4} alt="" />

            </div>{/**comp-image */}

            <div className="comp-info p-5">
                <h2>Analyze your search competition in-depth</h2>
                <p>As SERP Checker calculates keyword difficulty based on competitors' authority,
                     it deeply analyzes each competitor's backlink profile, traffic, and user experience.</p>

                    <p>This set of SEO metrics is available for up to 50 top competitors..</p>
                       

            </div>{/**comp-info */}

          
            
        </div> {/**cont-comp */}
    </div>
  )
}

export default SearchComptition;