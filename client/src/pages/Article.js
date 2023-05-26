import React from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import ArticleList from "../components/ArticleList";

const Article = () => {
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
};

export default Article;
