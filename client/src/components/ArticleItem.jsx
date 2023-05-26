import React from 'react';
import {Col, Image} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {useHistory} from "react-router-dom";
import {ONEARTICLE_ROUTE} from "../utils/consts";

const ArticleItem = ({article}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(ONEARTICLE_ROUTE) + '/' + article.id}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={article.img}/>
                <div> {article.name}</div>
            </Card>
        </Col>
    );
};

export default ArticleItem;