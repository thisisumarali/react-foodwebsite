import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PromotionImage from '../../assets/promotion/pro.png'
function Section4() {
    return (
        <>
            <section className='promotion_section'>
                <Container>
                    <Row className='align-item-center'>
                        <Col lg={6} className='text-center mb-5 mb-lg-0'>
                            <img src={PromotionImage} className='img-fluid' alt='Promotion' />
                        </Col>
                        <Col lg={6} className='px-5'>
                            <h2>Nothing bring a people together like a burger.</h2>
                            <p>
                                Consectetur adipiscing elit. Sed condimentum, dolor a facilisis
                                condimentum,at condimentum metus. Nulla facilisi. Consequat, dolor vel imperdiet fringilla,
                                dui metus consectetur velit, in finibus sapien velit in massa. Donec vel ligula non nisi
                                viverra consectetur.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        etus consectetur velit, in finibus sapien velit in massa. Donec vel ligula non nisi
                                        viverra consectetur.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        n finibus sapien velit in massa. Donec vel ligula non nisi
                                        viverra consectetur.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        ex justo euismod turpis, vitae fermentum diam lectus id ipsu
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='bg_parallax_scroll'></section>
        </>
    )
}

export default Section4
