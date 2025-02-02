import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

function Monitor() {
  return (
    <div className='txtt container mx-auto p-5'>
        <h2 className='p-1 mt-5 text-center fw-bolder text-light'>
        Monitor and analyze all the local SERP data</h2>

        <p className='text-center fw-bolder px-5 text-light'>Download powerful Google SERP Checker to get
             all the information needed for the analysis of search trends and organic performance:</p>
             <input className='em' type="email" />
             <button className='btn btn-dark p-2 mx-2 fw-bolder'>download for free</button>


             <div className="flxxx p-5 d-flex">
                <div className="xxx p-5">
                <IoMdCheckmark  className='mx-2 text-light d-flex'/>  <h6 className='text-light px-2 '>Track keywords without limits</h6>
                <IoMdCheckmark  className='mx-2 text-light d-flex'/> <h6 className='text-light  px-2 '>Add any search engine for any location</h6>
                  <IoMdCheckmark  className='mx-2 text-light d-flex'/>  <h6 className='text-light px-2  '>Integrate with Google Analytics and Search Console</h6>
                  <IoMdCheckmark  className='mx-2 text-light d-flex'/>  <h6 className='text-light  px-2 '>Monitor up to 40 competitors to track in a single project</h6>
                </div>
                <div className="xxx p-5">
                   <IoMdCheckmark  className='mx-2 text-light d-flex'/> <h6 className='text-light  px-2 '>Copy data or export in CSV</h6>
                  <IoMdCheckmark  className='mx-2 text-light d-flex'/>  <h6 className='text-light  px-2 '>Run automated tasks to check SERPs and report the results</h6>
                   <IoMdCheckmark  className='mx-2 text-light d-flex'/> <h6 className='text-light  px-2 '>Receive email alerts when rankings change</h6>
                   <IoMdCheckmark  className='mx-2 text-light d-flex'/> <h6 className='text-light  px-2 '>Integrate your SERP Checker data within all SEO PowerSuite tools
                    </h6>
                </div>
             </div>
    </div>
  )
}

export default Monitor;