import React, {useContext, useEffect, useState} from 'react';
import {Container, Dropdown, Form,} from "react-bootstrap";
import {Context} from "../index";
import Button from "react-bootstrap/Button";


const CreateArticle = () => {
    const {article} = useContext(Context)
    return (
        <Container>
            <Form>
                <Form.Control
                    className="mt-3"
                    placeholder="Введите название"
                />
                <Dropdown className="mt-3">
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {article.types.map(type =>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className="mt-3"
                    as="textarea"
                    rows={30}
                />
                <Form.Control
                    className="mt-3"
                    type="file"
                />
            </Form>
            <Button variant="outline-success" className="mt-3">
                Добавить статью
            </Button>
        </Container>
    );
};

export default CreateArticle;