import React from 'react';
import {Container, Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";

const OneArticle = () => {
    const article = {id: 1, name: "Робототехника", files: "https://www.digital-energy.ru/wp-content/uploads/2021/04/2019-11-14-1200.jpg" }
    const content = [
        {content: 'Тут куча информации по статье и я в душе не ебу что делать с этой хренью, потому что оно меня все заебало и пошло оно нахуй со всеми своими ебучими ошибками, заебался уже писать это говно.'}
    ]

    return (
        <Container>
            <h2 className="mt-2" style={{color: 'white', textAlign:'center'}}>{article.name}</h2>
            <Row className="justify-content-center"><Image style={{height:600, width: 1000, objectFit: "cover"}} src={article.files}></Image></Row>
            <Row className="d-flex justify-content-center mt-3">
                {content.map(info =>
                <Row style={{width: 800, color: 'white'}} key={info.id}>
                    {info.content}
                </Row>
            )}

            </Row>
        </Container>
    );
};

export default OneArticle;
