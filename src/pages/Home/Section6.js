import React from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'
import user1 from '../../assets/blog/review-author-1.jpg'
import user2 from '../../assets/blog/review-author-2.jpg'
import user3 from '../../assets/blog/review-author-3.jpg'
import user4 from '../../assets/blog/review-author-5.jpg'

function Section6() {
    return (
        <section className='blog_section'>
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={user1} className='img-fluid' alt='User-1' />
                                </div>
                                <p>
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                </p>
                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>
                                    By Amelie newlove
                                </h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={user1} className='img-fluid' alt='User-1' />
                                </div>
                                <p>
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                </p>
                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>
                                    By Amelie newlove
                                </h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={user1} className='img-fluid' alt='User-1' />
                                </div>
                                <p>
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                </p>
                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>
                                    By Amelie newlove
                                </h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user_img'>
                                    <img src={user1} className='img-fluid' alt='User-1' />
                                </div>
                                <p>
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                    Sed condimentum, dolor a facilisis, sapien velit rutrum
                                </p>
                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>
                                    By Amelie newlove
                                </h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Row>
            </Container>
        </section >
    )
}

export default Section6
