import React, {useContext} from 'react';
import {Container, Nav, Navbar, Button, Row, Col} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ACCAUNT_ROUTE, ARTICLE_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const MyNavbar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }


    return (
        <Navbar style={{backgroundColor: "#232536", padding: "20px 0px"}}>
            <Container>
                    <Nav className="ml-auto" style={{color: 'white', paddingLeft: 900}}>
                        <Button variant={"link"} onClick={() => navigate(HOME_ROUTE)}>Главная</Button>
                        <Button variant={"link"} onClick={() => navigate(HOME_ROUTE)} className="ml-2">Курсы</Button>
                        <Button variant={"link"} onClick={() => navigate(ARTICLE_ROUTE)} className="ml-2">Статьи</Button>
                        {user.isAuth ?
                        <Button variant={"link"} onClick={() => navigate(ACCAUNT_ROUTE)}>Личный кабинет</Button>
                    :
                        <Button variant={"link"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    }
                    </Nav>
            </Container>
        </Navbar>
    );
});

export default MyNavbar;