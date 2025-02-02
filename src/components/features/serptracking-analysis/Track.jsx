import React from 'react';

import Card from 'react-bootstrap/Card';
import { IoWatch } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";
import { PiVisorFill } from "react-icons/pi";

function Track() {
  return (
    <div className='mt-5 pt-5'>
        <h2 className='px-5 fw-bolder text-center'>Track your SERP position and visibility progress over time</h2>
        <p className='px-5 fw-bolder text-center'>Check how SERPs change over time and see which websites gain or lose positions.
             Draw the correlation between 
            your SEO activities and Google updates to reallocate your optimization effort if needed.</p>
            <div className="con d-flex mx-auto container">
            <Card className='mx-2' style={{ width: '18rem' }}>
     
      <Card.Body>
      <Card.Title><IoWatch /></Card.Title>
      
      <Card.Title>Track the recent ranking progress of the keyword</Card.Title>
        <Card.Text>
        Every time you check rankings, you'll see the keyword's position changes and the SERP position difference score.
         The SERP Checker also alerts you if the Google URL differs from your mapped landing page.
        </Card.Text>
        
      </Card.Body>
    </Card>


    <Card className='mx-2' style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title><GiProgression /></Card.Title>
        <Card.Title>Track ranking progress over time</Card.Title>
        <Card.Text>
        View the rank progress graph on the Rank Progress tab.
        This tab also displays the history of all position changes.
        </Card.Text>
       
      </Card.Body>
    </Card>


    <Card className='mx-2' style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title><BsFillStarFill />
        </Card.Title>

        <Card.Title>Find out your Google rich features
        </Card.Title>
       
        <Card.Text>
        The free SERP Checker tool shows if your site gets highlighted in
         top Google results with rich snippets, such as Featured Snippet, Image Pack, 
         Sitelinks, Reviews, People Also Ask, etc.
         Find your SERP results in the Rank Tracking module under the Keyword and Rankings tab.
        </Card.Text>
       
      </Card.Body>
    </Card>


    <Card className='mx-2' style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title><PiVisorFill /></Card.Title>
        <Card.Title>Track online keyword visibility</Card.Title>
        <Card.Text>
        Monitor visibility changes for a keyword and for your whole website.
         The Visibility tab displays the metric in percentages
         and as a progress graph. Use the drop-down menu to switch between every search engine you track.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
    </div>
  )
}

export default Track;