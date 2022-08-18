import React from 'react'
import {Card, Col} from 'react-bootstrap'

export default function CardComponents(props) {
    let {name, desc, setText} = props;
    let klik = (e) => {
        setText("klik sudah berfungsi");
    }
    return (
        <Col>
            <Card>
                <h1>{name}</h1>
                <h2>{desc}</h2>
                <button onClick={klik}>Coba</button>
            </Card>
        </Col>
    )
}
