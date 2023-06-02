import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyCarousel from "../components/MyCarousel";


function Home() {
    return (
        <>
            <Container>
                <MyCarousel></MyCarousel>
            </Container>
            <br/><br/>
            <Container>
                <h1 style={{textAlign: "center", fontWeight:"bolder", color:"white"}}>Популярные статьи</h1>
                <Row><Col><Card style={{ width: '50rem', backgroundColor:"#c1c3c8"}}>
                            <Card.Body>
                                <Card.Title style={{textAlign:"center"}}>Сквозные технологии в образовании</Card.Title>
                                <Card.Img variant="top" src="https://kapital-rus.ru/img/articles/289429.jpg" />
                                <Card.Text>
                                    В глобальном масштабе современным трендом развития образования
                                    выступает цифровизация, рассматриваемая в двух ракурсах: как внешнее условие, определяющее вектор происходящих и грядущих изменений,
                                    и как «точка роста», содержащая в себе потенциал этих изменений.
                                    В этом процессе важная роль отводится применению разработанных для
                                    сферы образования и функционирующих на основе сквозных технологий
                                    IT-решений, рассмотренных в работе.
                                </Card.Text>
                                <div style={{paddingLeft:650}}>
                                    <Button variant="link" >Подробнее</Button></div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <div style={{backgroundColor:"#323335", paddingBottom: 6, color: "#c1c3c8"}}>
                            <p> Ruslan Kim| 26.04.2023</p>
                            <h5>Что такое ИИ</h5>
                            <div>Искусственный интеллект в широком понимании — набор методов и моделей, получающий данные и делающий определенный вывод на их основе.</div>
                            <div style={{paddingLeft:350}}>
                                <Button variant="link" >Подробнее</Button></div>
                        </div><br/>
                        <div style={{backgroundColor:"#323335", paddingBottom:6, color: "#c1c3c8"}}>
                            <p> Ruslan Kim| 26.04.2023</p>
                            <h5>Развитии ИИ в наше время</h5>
                            <div>Начиная с «нулевых» начинают внедрять разработки умного дома. Искусственный интеллект находит применение в растущей индустрии компьютерных игр.</div>
                            <div style={{paddingLeft:350}}>
                                <Button variant="link" >Подробнее</Button></div>
                        </div><br/>
                        <div style={{backgroundColor:"#323335", paddingBottom:6, color: "#c1c3c8"}}>
                            <p> Ruslan Kim| 26.04.2023</p>
                            <h5>Где применяются сквозные технологии</h5>
                            <div>В данной статье рассказывается о сферах, в которых применяются сквозных технологий</div>
                            <div style={{paddingLeft:350}}>
                                <Button variant="link" >Подробнее</Button></div>
                        </div><br/>
                        <div style={{backgroundColor:"#323335", paddingBottom:6, color: "#c1c3c8"}}>
                            <p> Ruslan Kim| 26.04.2023</p>
                            <h5>Отличие ИИ от нейронной сети</h5>
                            <div>ИИ решения могут работать на разных алгоритмах. Один из этих алгоритмов — нейросети.</div>
                            <div style={{paddingLeft:350}}>
                                <Button variant="link" >Подробнее</Button></div>
                        </div><br/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 style={{textAlign: "center", fontWeight:"bolder", color:"white"}}>Выберите категорию статей</h1><br/>
            <Row  className="d-flex justify-content-around">
                <Card style={{ width: '15rem'}}>
                    <Card.Img variant="top"  src="https://monitorbank.ru/wp-content/uploads/2022/01/%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%B5%D1%82%D0%B8.jpg" style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: '12',textAlign:"center"}}>Нейронные сети и ИИ</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Подробнее</Button></div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/4368340/pub_6184de81afa6a852658dfb40_618b8d714d9bfd50e49c70e1/scale_1200" style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: "12",textAlign:"center"}}>Большие данные</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Подробнее</Button></div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://s.digitalocean.ru/upload/1642162150_blockchain3052119_1920.jpg" style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: '12',textAlign:"center"}}>Блокчейн</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Подробнее</Button></div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://www.kindpng.com/picc/m/708-7085535_graphic-ar-vr-game-development-virtual-reality-big.png"  style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: '12',textAlign:"center"}}>VR и AR</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Подробнее</Button></div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://klike.net/uploads/posts/2022-12/1671597191_9.jpg" style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: '12',textAlign:"center"}}>Робототехника</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Подробнее</Button></div>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
            <br/><br/>
            <Container>
                <h1 style={{textAlign: "center", fontWeight:"bolder", color:"white"}}>Ближайшие мероприятия</h1>
                <br/>




                <Carousel>

                    <Carousel.Item>

                        <div className="d-flex justify-content-around">

                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src="https://cityreporter.ru/wp-content/uploads/2019/10/3x0aR0XVbqI.jpg" style={{height:200}} />
                                <Card.Body>
                                    <Card.Title>Название мероприятия</Card.Title>
                                    <Card.Text>
                                        Краткое описание этого мероприятия, формы и места проведения участия
                                    </Card.Text>
                                    <Button variant="primary">Принять участие</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src="https://sales-to-all.com/wp-content/uploads/2021/06/nematerialnaya-motivatsiya-vidy-prodazhi-vsem.jpg" style={{height:200}}/>
                                <Card.Body>
                                    <Card.Title>Название мероприятия</Card.Title>
                                    <Card.Text>
                                        Краткое описание этого мероприятия, формы и места проведения участия
                                    </Card.Text>
                                    <Button variant="primary">Принять участие</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src="https://res.cloudinary.com/dyiieswbh/image/upload/tof1nevwb26cxnn94xg4" style={{height:200}}/>
                                <Card.Body>
                                    <Card.Title>Название мероприятия</Card.Title>
                                    <Card.Text>
                                        Краткое описание этого мероприятия, формы и места проведения участия
                                    </Card.Text>
                                    <Button variant="primary">Принять участие</Button>
                                </Card.Body>
                            </Card>

                        </div>

                    </Carousel.Item>

                    <Carousel.Item>

                        <div className="d-flex justify-content-around">

                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src="https://www.ncfu.ru/export/photo2022/v-skfu-proshla-premiya-gordost-2022-ncfu.ru-04.jpg" style={{height:200}} />
                                <Card.Body>
                                    <Card.Title>Название мероприятия</Card.Title>
                                    <Card.Text>
                                        Краткое описание этого мероприятия, формы и места проведения участия
                                    </Card.Text>
                                    <Button variant="primary">Принять участие</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src="https://sun9-53.userapi.com/impf/y9Cuiu9Ll4hU-iQM0vchJ-0oxWec0rla0G3G9g/3e0Y6womM3s.jpg?size=1024x682&quality=96&sign=8d4927b5dbb5621dd7220f4de1651e74&type=album" style={{height:200}} />
                                <Card.Body>
                                    <Card.Title>Название мероприятия</Card.Title>
                                    <Card.Text>
                                        Краткое описание этого мероприятия, формы и места проведения участия
                                    </Card.Text>
                                    <Button variant="primary">Принять участие</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src="https://spark.ru/upload/other/b_62a89e4db523e.jpg" style={{height:200}}/>
                                <Card.Body>
                                    <Card.Title>Название мероприятия</Card.Title>
                                    <Card.Text>
                                        Краткое описание этого мероприятия, формы и места проведения участия
                                    </Card.Text>
                                    <Button variant="primary">Принять участие</Button>
                                </Card.Body>
                            </Card>

                        </div>

                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="d-flex justify-content-around">

                            <Card style={{ width: '24rem' }}>
                                <Card.Img variant="top" src="https://cq.ru/storage/uploads/posts/1671765/1.jpg" style={{height:200}} />
                                <Card.Body>
                                    <Card.Title>Название мероприятия</Card.Title>
                                    <Card.Text>
                                        Краткое описание этого мероприятия, формы и места проведения участия
                                    </Card.Text>
                                    <Button variant="primary">Принять участие</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '24rem'}}>
                                <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=2a00000187b9b0228ca3a4579b6938fd1608-1064982-fast-images&n=13" style={{height:200}} />
                                <Card.Body>
                                    <Card.Title>Название мероприятия</Card.Title>
                                    <Card.Text>
                                        Краткое описание этого мероприятия, формы и места проведения участия
                                    </Card.Text>
                                    <Button variant="primary">Принять участие</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '24rem'}}>
                                <Card.Img variant="top" src="https://new-world-rpg.ru/wp-content/uploads/f/2/8/f28c35da855a2cb6ab27f73143b0916a.jpeg" style={{height:200}} />
                                <Card.Body>
                                    <Card.Title>Название мероприятия</Card.Title>
                                    <Card.Text>
                                        Краткое описание этого мероприятия, формы и места проведения участия
                                    </Card.Text>
                                    <Button variant="primary">Принять участие</Button>
                                </Card.Body>
                            </Card>

                        </div>

                    </Carousel.Item>
                </Carousel>
            </Container>
            <br/><br/>

        </>
    );
}

export default Home;