import React from 'react'
import './newsletter.css'

import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

function Newsleetter() {
  return (
    <section className='newletter'>
    <Container>
    <Row>
        <Col lg='6'>
            <div className="newsletter__content">
                <h2>Subscribe now to get useful travelling information.</h2>
                <div className='newsletter__input'>
                    <input type='email' placeholder='enter your email' />
                    <button className='btn newsletter__btn'>Subscribe</button>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente optio, pariatur nesciunt, eaque itaque molestiae .
                </p>
            </div>
        </Col>
        <Col lg='6'>
            <div className="newsletter__img">
                <img src={maleTourist} alt="mews img" />
            </div>
        </Col>
    </Row>
</Container>
</section>
  )
}

export default Newsleetter