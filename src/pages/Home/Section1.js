import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
import { Link } from 'react-router-dom'
const Section1 = () => {

  return (
    <section className='hero_section' >
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className='position-relative'>
              <img src={Burger} className='img-fluid' alt="hero" />
              <div className='price_badge'>
                <div className='badge_text'>
                  <h4 className='h4_xs'>Only</h4>
                  <h4 className='h3_lg'>$6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='hero_text text-center'>
              <h1 className='text-white'>Tasty Food</h1>
              <h2 className='text-white'>Explore More</h2>
              <p className='text-white pt-2 pb-4'>
                Facilisis, est nulla
                facilisis ipsum, in elementum dui purus ac justo.
                Cras vel urna eu mauris sagittis iaculis. Nulla facilisi.
                Donec sodales, lectus in elementum consectetur, mauris nisi
                faucibus lectus, a semper lectus est vel ipsum.
                Donec non sem ac lectus tristique consectetur. Donec
              </p>
              <Link to='/' className='btn order_now'>
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section1