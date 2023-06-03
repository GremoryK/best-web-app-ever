import React, {useState} from 'react';
import {Container, Nav} from "react-bootstrap";
import {CREATEARTICLE_ROUTE} from "../utils/consts";

const Accaunt = () => {

    return (
        <Container>
            <Nav>
                <Nav.Link style={{color: 'white'}} href={CREATEARTICLE_ROUTE}>Добавить статью</Nav.Link>
            </Nav>
        </Container>
    );
};

export default Accaunt;
