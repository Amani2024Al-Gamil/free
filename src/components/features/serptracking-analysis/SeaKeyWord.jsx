import React from 'react';
import Image5 from '../../../images/screen-05.svg'

function SeaKeyWord() {
  return (
    <div>
          <div className="cont-compt d-flex p-5 justify-content-around align-items-center">

<div className="comp-image p-5 ">
       <img src={Image5} alt="" />

   </div>{/**comp-image */}

   <div className="comp-info p-5">
       <h2>See keyword and traffic stats</h2>
       <p>You should also look at each competitor's overall presence in search. Track the number of keywords that the domains rank for and the amount of traffic they are likely to attract through their positions in search. 
        This information is also available for each of the top 50 search results.</p>

              

   </div>{/**comp-info */}

 
   
</div> {/**cont-comp */}
    </div>
  )
}

export default SeaKeyWord;