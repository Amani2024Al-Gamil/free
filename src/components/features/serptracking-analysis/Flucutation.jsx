import React from 'react';
import Image8 from '../../../images/w7.webp';
function Flucutation() {
  return (
    <div className='container  mx-auto bg-body-tertiary www'>
         <h2 className='p-5 mt-5 text-center fw-bolder'>See SERP fluctuation for the
           keyword and for the project</h2>
                <p className='text-center fw-bolder px-5'>When search engines update their ranking algorithms, positions
                     and rich feature arrangements may change for many websites. 
                     These changes create fluctuations in search results, based on which the SERP Checker 
                     displays a Fluctuation Graph — the proprietary
                     metric to help you understand search engine trends that matter
                      for your business niche.</p>

                     <div className="comp-image p-5 w-75 mx-auto ">
                <img className='w-75'  src={Image8} alt="" />

            </div>{/**comp-image */}

            <p className='text-center fw-bolder px-5 p-5'>The graph depicts recent and historical 
              changes in the top 30 search results in each of your target search engines, for
               any individual keyword separately or for all your keywords together. The spikes
                on your graph indicate that the real-time SERP
               changed significantly that day, implying a possible algorithm change.</p>
    </div>
  )
}

export default Flucutation;