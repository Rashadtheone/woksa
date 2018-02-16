import React, { Component } from 'react';
import {Col, Row} from 'react-materialize'
class Home extends Component {
    render() {
        return (
            <div className = ''>
                <Row>
                <Col s={8} className='grid-example'>
                Kaladin
                </Col>
                <Col s={4} className='grid-example'>
                    <Row>
                        Sign In 
                    </Row>
                    <Row>
                        Recommend
                    </Row>
                    <Row>
                    Go RP
                    </Row>
                </Col>
                </Row>
                </div>
        );
    }
}

export default Home;