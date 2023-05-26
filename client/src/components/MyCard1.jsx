import React from 'react'
import {Card, Container} from 'react-bootstrap'
import MyButton from './MyButton'

const MyCard1 = () => {
    return (
        <Container>
            <Card style={{backgroundColor:"#ffffff"}}>
                <Card.Body>
                    <Card.Title style={{textAlign: "center"}}>
                        НОВОСТЬ
                    </Card.Title>
                    <Card.Img
                        style={{objectFit: "cover"}}
                        variant="top"
                        src="https://zakupki-digital.ru/wp-content/uploads/2019/04/%D0%9F%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0-1.jpg"
                    />
                    <Card.Text>
                        Свежая новость, рассказ о событиях. Сенсация! Такого еще не было:
                        Информационная черная дыра засосала пользователя. Ёж съел слона, слон съел еж.
                        Кошка съела мышку.  С помощью магии слов великие творцы старались передать все чувства,
                        которые может испытывать каждый человек на Земле: любовь, счастье, радость, страх, боль. Все они крутятся в неведомом водовороте, в который может окунуться читатель.
                    </Card.Text>
                    <MyButton variant="primary">
                        Читать подробнее
                    </MyButton>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default MyCard1
