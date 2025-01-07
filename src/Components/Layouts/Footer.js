import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    const [isVisible, setIsVisible] = useState(false)
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const listenToscroll = () => {
        let heighttoHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop
        windowScroll > heighttoHidden ? setIsVisible(true) : setIsVisible(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToscroll)
    }, [])
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                            <div className='text-center'>
                                <h5>location</h5>
                                <p>5505 Waterford district</p>
                                <p>Waterford, Ireland</p>
                                <p>United States</p>
                            </div>
                        </Col>
                        <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                            <div className='text-center'>
                                <h5>Working Hours</h5>
                                <p>Mon-Fri: 9:00AM -10:00PM</p>
                                <p>Saturday:10:00Am -8:30PM</p>
                                <p>Sunday:12:00-5:00pm</p>
                            </div>
                        </Col>
                        <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                            <div className='text-center'>
                                <h5>Order Now</h5>
                                <p>Quadret neque purus ipsulm</p>
                                <p><Link to='tel:9998887777' className='calling'>999-888-777</Link></p>
                            </div>
                        </Col>
                        <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                            <div className='text-center'>
                                <h5>Follow Us</h5>
                                <p>Quadret neque purus ipsulm</p>
                                <ul className='list-unstyled text-center mt-2'>
                                    <li>
                                        <Link to='/'>
                                            <i className='bi bi-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <i className='bi bi-linkedin'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <i className='bi bi-instagram'></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to='/'>
                                            <i className='bi bi-youtube'></i>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className='copy_right'
                    >
                        <Col>
                            <div>
                                <ul className='list-unstyled text-center mb-0'>
                                    <li>
                                        <Link to='/'>
                                            @2025 <span>Umar Khan</span>. All rights reserved
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Terms & Condition
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Privacy & Policy.
                                        </Link>
                                    </li>
                                </ul>
                            </div></Col>
                    </Row>
                </Container>
            </footer>
            {/* Scroll to top */}
            {isVisible && (<div className='scroll_top' onClick={scrollTop}>
                <i className='bi bi-arrow-up'></i>
            </div>)}
        </>
    )
}

export default Footer
