import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyCarousel from "../components/MyCarousel";
import MyFooter from "../components/MyFooter";
import MyNavbar from "../components/MyNavbar";


function Home() {
    return (
        <>
            <Container>
                <MyCarousel/>
            </Container>
            <br/>
            <Container>
                <h1 style={{textAlign: "center", fontWeight:"bolder", color:"white"}}>Популярные статьи</h1>
                <Row><Col><Card style={{ width: '50rem', backgroundColor:"#2c2c34", color: "white"}}>
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
                                <div className="justify-content-end d-flex">
                                    <Button variant="link" >Читать...</Button></div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <div style={{backgroundColor:"#2c2c34", color: "white", paddingBottom: 6, borderRadius: 5}}>
                            <p> Ruslan Kim| 26.04.2023</p>
                            <h5>Что такое ИИ</h5>
                            <div>Искусственный интеллект в широком понимании — набор методов и моделей, получающий данные и делающий определенный вывод на их основе.</div>
                            <div className="justify-content-end d-flex">
                                <Button variant="link" >Читать...</Button></div>
                        </div><br/>
                        <div style={{backgroundColor:"#2c2c34", paddingBottom:6, color:"white", borderRadius: 5}}>
                            <p> Ruslan Kim| 26.04.2023</p>
                            <h5>Развитии ИИ в наше время</h5>
                            <div>Начиная с «нулевых» начинают внедрять разработки умного дома. Искусственный интеллект находит применение в растущей индустрии компьютерных игр.</div>
                            <div className="justify-content-end d-flex">
                                <Button variant="link" >Читать...</Button></div>
                        </div><br/>
                        <div style={{backgroundColor:"#2c2c34", paddingBottom:6, color:"white", borderRadius: 5}}>
                            <p> Ruslan Kim| 26.04.2023</p>
                            <h5>Где применяются сквозные технологии</h5>
                            <div>В данной статье рассказывается о сферах, в которых применяются сквозных технологий</div>
                            <div className="justify-content-end d-flex">
                                <Button variant="link" >Читать...</Button></div>
                        </div><br/>
                        <div style={{backgroundColor:"#2c2c34", paddingBottom:6, color:"white", borderRadius: 5}}>
                            <p> Ruslan Kim| 26.04.2023</p>
                            <h5>Отличие ИИ от нейронной сети</h5>
                            <div>ИИ решения могут работать на разных алгоритмах. Один из этих алгоритмов — нейросети.</div>
                            <div className="justify-content-end d-flex">
                                <Button variant="link" >Читать...</Button></div>
                        </div><br/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 style={{textAlign: "center", fontWeight:"bolder", color:"white"}}>Выберите категорию статей</h1><br/>
            <Row  className="d-flex justify-content-around">
                <Card style={{ width: '15rem', backgroundColor:"#2c2c34", color: "white"}}>
                    <Card.Img variant="top"  src="https://monitorbank.ru/wp-content/uploads/2022/01/%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%B5%D1%82%D0%B8.jpg" style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: '12',textAlign:"center"}}>Нейронные сети и ИИ</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Перейти</Button></div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem', backgroundColor:"#2c2c34", color: "white"}}>
                    <Card.Img variant="top" src="https://avatars.dzeninfra.ru/get-zen_doc/4368340/pub_6184de81afa6a852658dfb40_618b8d714d9bfd50e49c70e1/scale_1200" style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: "12",textAlign:"center"}}>Большие данные</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Перейти</Button></div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem', backgroundColor:"#2c2c34", color: "white" }}>
                    <Card.Img variant="top" src="https://s.digitalocean.ru/upload/1642162150_blockchain3052119_1920.jpg" style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: '12',textAlign:"center"}}>Блокчейн</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Перейти</Button></div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem', backgroundColor:"#2c2c34", color: "white" }}>
                    <Card.Img variant="top" src="https://www.kindpng.com/picc/m/708-7085535_graphic-ar-vr-game-development-virtual-reality-big.png"  style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: '12',textAlign:"center"}}>VR и AR</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Перейти</Button></div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem', backgroundColor:"#2c2c34", color: "white" }}>
                    <Card.Img variant="top" src="https://klike.net/uploads/posts/2022-12/1671597191_9.jpg" style={{width: 215, height: 200, float: "left", objectFit: "cover"}}/>
                    <Card.Body>
                        <p style = {{fontSize: '12',textAlign:"center"}}>Робототехника</p><br/>
                        <div className="justify-content-center d-flex">
                            <Button variant="outline-primary">Перейти</Button></div>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
            <br/>
            <Container>
                <Card style={{backgroundColor:"#2c2c34", color:"white"}}>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Обучение сквозыным технологиям</Card.Title>
                        <Card.Img variant="top" src="http://www.brandlifemag.com/wp-content/uploads/2018/09/shutterstock_1055047346.jpg" />
                        <Card.Text>
                            У нас вы можете пройти курсы по отдельным направлениям сквозных технологий, для этого вам необходимо зарегестрироваться на курс и пройти обучение.
                        </Card.Text>
                        <div className="justify-content-end d-flex">
                            <Button variant="link" >Перейти к курсам</Button></div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Home;