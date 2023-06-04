import React, {useContext, useEffect, useState} from 'react';
import {Container, Dropdown, Form,} from "react-bootstrap";
import {Context} from "../index";
import Button from "react-bootstrap/Button";
import {createArticle, fetchArticle, fetchTypes} from "../http/ArticleAPI";
import {observer} from "mobx-react-lite";


const CreateArticle = observer(() => {
    const {article, user} = useContext(Context)

    const[name, setName] = useState('')
    const [content, setContent] = useState('')
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => article.setTypes(data))
    }, [])

    const addArticle = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('files', file)
        formData.append('typeId', article.selectedType.id)
        formData.append('content', content)
        formData.append('userId', user.setUser.id)


        createArticle(formData).then(data => article.setArticle(data))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    return (
        <Container>
            <Form>
                <Form.Control
                    value ={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-3"
                    placeholder="Введите название"
                />
                <Dropdown className="mt-3">
                    <Dropdown.Toggle>{article.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {article.types.map(type =>
                            <Dropdown.Item onClick={() => article.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="mt-3"
                    as="textarea"
                    rows={30}
                />
                <Form.Control
                    className="mt-3"
                    type="file"
                    onChange={selectFile}
                />
            </Form>
            <Button variant="outline-success" className="mt-3" onClick={addArticle}>
                Добавить статью
            </Button>
        </Container>
    );
});

export default CreateArticle;