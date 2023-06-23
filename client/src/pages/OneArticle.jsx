import React, {useEffect, useState} from 'react';
import {Container, Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {useParams} from "react-router";
import {fetchOneArticle} from "../http/ArticleAPI";

const OneArticle = () => {
    const [article, setArticle] = useState({})
    const {id} = useParams()
    useEffect(()=> {fetchOneArticle(id).then(data => setArticle(data))}, [])
    


    return (
        <Container>
            <h2 className="mt-2" style={{color: 'white', textAlign:'center'}}>{article.name}</h2>
            <Row className="justify-content-center"><Image style={{height:600, width: 1000, objectFit: "cover"}} src={process.env.REACT_APP_API_URL + article.files}></Image></Row>
            <Row className="d-flex justify-content-center mt-3">
                <Row style={{width: 800, color: 'white'}} key={article.id}>
                    {article.content}
                </Row>
            </Row>
        </Container>
    );
};

export default OneArticle;
