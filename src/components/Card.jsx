import React, {useState} from 'react'
import {Row} from 'react-bootstrap'
import CardComponents from './CardComponents'

export default function Cards() {
    let [text, setText] = useState("");
    let data = [
        {
            name: "hi!",
            desc: "lorem ipsum1"
        },
        {
            name: "hallo!",
            desc: "lorem ipsum2"
        },
        {
            name: "holla!",
            desc: "lorem ipsum3"
        }
    ]
    return (
        <>
            <Row className='row'>
                {data.map((item, id) => {
                    let props = {
                        name: item.name,
                        key: id,
                        desc: item.desc,
                        setText
                    }
                    return (
                        <CardComponents {...props}></CardComponents>
                    )
                })}
            </Row>
            <h1>{text}</h1>
        </>
    )
}
