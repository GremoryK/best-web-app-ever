import React, {useState} from 'react'

import {Container} from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
    const [value, setValue] = useState('');

    return (
        <Container>
            <ReactQuill theme="snow" value={value} onChange={setValue} />;
        </Container>
    )
}

export default Editor
