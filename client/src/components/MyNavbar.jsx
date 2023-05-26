import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {ACCAUNT_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Button} from "@mui/material";

const MyNavbar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar style={{backgroundColor: "#232536", padding: "20px 0px"}}>
            <Container>
                <NavLink style={{color:'white'}} to={HOME_ROUTE}>Главная</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ACCAUNT_ROUTE)}
                        >
                            Личный кабинет
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default MyNavbar;