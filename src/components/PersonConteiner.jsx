import React from 'react'
import { connect } from 'react-redux';
import {Row, Col, Container} from 'react-bootstrap';
import Person from './Person'

function PersonContainer(props) {
    const createCard = (personProps) => {
        return (
            <Col xs={4} key={1}>
                <Person {...personProps} />
            </Col>
        )
    }

    const createRow = (rows) => {
        return (
            <Row key={`${Math.random()}-${Date.now()}`}>
                {rows.map((i) => createCard(Object.assign(i, {key: i.id})))}
            </Row>
        )
    }

    const {data} = props;
    const contents = [];

    for(let i=0; i< data.length ; i+=3){
        contents.push(data.slice(i,i+3));
    }
    
    return (
        <Container> {contents.map((i) => createRow(i))}</Container>
    )
}

const mapStateToProps = (state) => ({
    data: state.person,
})

export default connect(mapStateToProps)(PersonContainer);