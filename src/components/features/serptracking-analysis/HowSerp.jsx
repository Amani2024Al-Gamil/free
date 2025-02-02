import React from 'react';

import Card from 'react-bootstrap/Card';
import './home.css';
import { TbFocus2 } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { FaBatteryQuarter } from "react-icons/fa6";

function HowSerp() {
  return (
    <div className='p-5 mt-5'>
         <div className="cont py-5 mt-5">
        <div className="serp-info">
            <h2 className='px-5  fw-bolder text-center'>How Serp checker works </h2>
            <p className='px-5 fw-bolder  text-center '>the Serp Analysis feature lets you analyse up to 50 top ranking pages for any keywords
                to find the most influential ranking factors.use this data to know how difficult it will 
                be to rank for this or that keyword. 
            </p>

        </div>

        <div className="cardcont d-flex">
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
      
      <Card.Title className='text-center'><TbFocus2 /></Card.Title>
      
        
        <Card.Text>
        
        Enter your focus keyword
        </Card.Text>
        
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
      
      <Card.Title className='text-center'><PiStudentBold /></Card.Title>
      
        
        <Card.Text>
        
        Collect the data on your top competitors
        </Card.Text>
        
      </Card.Body>
    </Card>




    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
      
      <Card.Title className='text-center'><HiOutlineLightBulb /></Card.Title>
      
        
        <Card.Text>
        
        Analyze ranking factors
        </Card.Text>
        
      </Card.Body>
    </Card>




    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
      
      <Card.Title className='text-center'><GoGraph /></Card.Title>
      
        
        <Card.Text>
        
        Find correlation with SERP positions
        </Card.Text>
        
      </Card.Body>
    </Card>





    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
      
      <Card.Title className='text-center'><FaBatteryQuarter /></Card.Title>
      
        
        <Card.Text>
        
        Spot weaker competitors
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>





    </div>{/**cont */}
    </div>
  )
}

export default HowSerp;