import React from 'react';
import Image6 from '../../../images/w1.webp';
import Image7 from '../../../images/55.webp';

function Record() {
  return (
    <div className='bg-body-tertiary www container mx-auto'>
      <div className="conty text-center w-75 mx-auto mt-5 p-5 bg-body-tertiary"> 
         <h2 className='text-center fw-bolder ' >Record your SERP position history</h2>
        <p className='text-center fw-bolder ' >The SERP position history table saves the top 30 search engine results for every rank
             check you run across all your keywords and search engines. These historical organic
              results will let you observe position changes of all top-ranking domains and discover
               new online competitors instantly as soon as they enter one of the top 30 positions.
        </p>
        </div>{/**conty */}


        <div className='www p-5 w-75 mx-auto'>
        <h2 className='text-center fw-bolder ' >
        Get an in-depth view of your competitive landscape</h2>
        <p className='text-center fw-bolder ' >SERP history workspace lets you right-click any
             record to switch between Domain and Full URL display to see the exact ranking page of your
              competitor. Pay attention to icons near the URLs,
             as they indicate the SERP feature your competitor wins.
        </p>

        <div className="imag w-75 mx-auto">
            <img className='w-100' src={Image6} alt="" />
        </div>



        </div>{/**get */}


        <div className="volatility  www w-75 mx-auto">
        <div className="conty  text-center w-75 mx-auto mt-5 p-5 bg-body-tertiary"> 
        <h2 className='text-center fw-bolder ' >
        
         Get historical insights into position distribution and traffic volatility</h2>
        <p className='text-center fw-bolder ' >SERP Checker allows you to instantly 
            check historical data on position distribution for you and your competitors
             to spot SEO strategy changes and see how competition changes as time goes by.
        </p>

        <p className='text-center fw-bolder ' >Besides, follow historical organic traffic changes to track
             seasonality in SERPs and adjust your keyword strategy to create the most relevant SEO content.
        </p>
        </div>{/**conty */}
        <div className="imag w-75 mx-auto">
            <img className='w-100' src={Image7} alt="" />
        </div>{/**image */}

        </div>{/**www */}


        



    </div>
  )
}

export default Record;