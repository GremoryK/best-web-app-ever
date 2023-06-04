import React from 'react';
import Col from "react-bootstrap/Col";
import {Card, Image} from "react-bootstrap";
import {useNavigate} from "react-router";
import {ARTICLE_ROUTE} from "../utils/consts";

const ArticleItem = ({article}) => {
    const navigate = useNavigate()
    return (
        <Col md={4} onClick={() => navigate(ARTICLE_ROUTE + '/' + article.id)}>
            <Card className="mb-3" style={{width: 300, cursor: 'pointer', border: 'light'}}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + article.files}/>
                <div className="text-black-50">{article.type}</div>
                <div>{article.name}</div>
            </Card>
        </Col>
    );
};

export default ArticleItem;