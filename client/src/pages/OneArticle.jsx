import React, {useContext, useEffect, useState} from 'react';
import {Container, Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {useParams} from "react-router";
import {Context} from "../index";

const OneArticle = () => {
    const {article} = useContext(Context)
    const {id} = useParams()



    return (
        <Container>
            <h2 className="mt-2" style={{color: 'white', textAlign:'center'}}>{article.name}</h2>
            <Row className="justify-content-center"><Image style={{height:600, width: 1000, objectFit: "cover"}} src={article.files}></Image></Row>
            <Row className="d-flex justify-content-center mt-3">
                <Row style={{width: 800, color: 'white'}} key={article.id}>
                    {article.content}
                </Row>
            </Row>
        </Container>
    );
};

export default OneArticle;
