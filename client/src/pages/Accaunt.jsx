import React, {useContext} from 'react';
import {Container, Nav} from "react-bootstrap";
import {CREATEARTICLE_ROUTE, HOME_ROUTE} from "../utils/consts";
import {Context} from "../index";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router";
import {observer} from "mobx-react-lite";

const Accaunt = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(HOME_ROUTE)
    }


    return (
        <Container>
            <Nav>
                <Nav.Link style={{color: 'white'}} href={CREATEARTICLE_ROUTE}>Добавить статью</Nav.Link>
            </Nav>
            <Button
                variant={"outline-light"}
                onClick={() => logOut()

            }
            >
                Выйти
            </Button>

        </Container>
    );
});

export default Accaunt;
