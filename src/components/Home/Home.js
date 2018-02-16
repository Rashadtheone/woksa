import React, { Component } from 'react';
import {Col, Row, Card, CardTitle, CardPanel} from 'react-materialize'
import './home.css';
class Home extends Component {
    render() {
        return (
            <div className = 'mainContainer'>
                <Row>
                <Col s={8} className='feedcontainer'>
                <Card header={<CardTitle reveal image={"https://img00.deviantart.net/9fed/i/2015/322/a/9/kaladin_stormblessed_rework_by_emmgoyer7-d906wi0.jpg"} waves='light'/>}
		              title="User Post Title"
		              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">Link To Article!</a></p>
                </Card>
                <Card header={<CardTitle reveal image={"https://img00.deviantart.net/9fed/i/2015/322/a/9/kaladin_stormblessed_rework_by_emmgoyer7-d906wi0.jpg"} waves='light'/>}
		              title="User Post Title"
		              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">Link To Article!</a></p>
                </Card>
                </Col>
                <Col s={4} className='grid-example'>
                    <Row>
                        <button>Sign In</button>
                        <button>Sign Up</button>

                        <button>Log Out</button>
                    </Row>
                    <Row>
                        <div className="recommendedPost">
                    <CardPanel className="teal lighten-4 black-text">
						<span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
				    </CardPanel>    
                    <CardPanel className="teal lighten-4 black-text">
						<span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
				</CardPanel>
                </div>
                    </Row>
                    <Row>
                    <Card className='small'
	                    header={<CardTitle image='https://img00.deviantart.net/9fed/i/2015/322/a/9/kaladin_stormblessed_rework_by_emmgoyer7-d906wi0.jpg'>Card Title</CardTitle>}
	                    actions={[<a href='#'>Link to User Bio</a>]}>
	                    Number of likes and shares
                        </Card>
                    </Row>
                </Col>
                </Row>
                </div>
        );
    }
}

export default Home;