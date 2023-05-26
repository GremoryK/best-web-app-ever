import React from 'react'
import {Carousel, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyCarousel() {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://avatars.dzeninfra.ru/get-zen_doc/4761941/pub_63cfaacc336ca566e90766e2_63cfab771c01af2a9240441e/scale_1200"
                        alt="First slide"
                        style={{height: 680, width: 750, objectFit: "cover"}}
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "yellowgreen"}}>Всё о сквозных технологиях</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.mgpu.ru/wp-content/uploads/2019/10/93472-scaled.jpg"
                        alt="Second slide"
                        style={{height: 680, width: 750, objectFit: "cover"}}
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "yellowgreen"}}>Искусственный интеллект</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tadviser.ru/images/2/22/Techproj840.jpg"
                        alt="Third slide"
                        style={{height: 680, width: 750, objectFit: "cover"}}
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "yellowgreen"}}>Робототехника</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default MyCarousel
