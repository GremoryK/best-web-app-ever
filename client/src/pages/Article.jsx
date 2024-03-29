import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import ArticleList from "../components/ArticleList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchArticle, fetchTypes} from "../http/ArticleAPI";

const Article = observer(() => {
    const {article} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => article.setTypes(data))
        fetchArticle().then(data => article.setArticle(data.rows))
    }, [])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <ArticleList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Article;
