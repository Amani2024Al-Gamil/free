import React from 'react';
import Image7 from '../../../images/wwwwp.webp'

function Main() {
  return (
    <div>
      <div className='w-100 px-5 txt  d-flex justify-content-around align-items-center'>
        <div className="text  px-5 w-50">
            <h2 className="texth text-light fw-bolder display-6">
            Local Rank Tracker Tool

            </h2>
            <p className="textp fw-bolder">
            Check accurate rankings in local search and on Google Maps


            </p>
           <div className="email d-flex">
           <input type="email" className='w-75' />

           <button className="btn btn-dark fw-bolder">Download for free</button>
           </div>

        </div>{/**text */}



        <div className="image1 w-50 ">
       <img className='im1 w-100' src={Image7} alt="" />

        </div>{/**image1 */}


    </div>{/**container */}
    <div className="inftxx txt d-flex justify-content-around align-items-center p-5">
    <div className="infxx">
        <h6 className='text-light  px-2'>Track rankings for exact locations</h6>

    </div>
    <div className="infxx">
        <h6 className='text-light  px-2'>Check local SERP features</h6>

    </div>
    <div className="infxx">
        <h6 className='text-light  px-2'>Measure search visibility for your local keywords</h6>

    </div>
   </div>

   
    </div>
  )
}

export default Main;