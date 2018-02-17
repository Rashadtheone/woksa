import React, { Component } from 'react';
import {Parallax, Collapsible, CollapsibleItem, Row, Col,
        Modal, Button} from 'react-materialize'
import './universe.css';
import roshar from './images/Map_roshar.jpg'
class Universe extends Component {
    state = {
        regions: ['reg 1', 'reg 2', 'reg 3'],
        current: 'none'
    }

    setCurrentRegion(region) {
        console.log(region);
        this.setState({ current: region }, () => { console.log(this) });
    }

    render() {
        return (
            <div>
            <div className="roshar">
             <h1>Roshar</h1>
             <img className='rosharPic' src='https://i2.wp.com/img2.wikia.nocookie.net/__cb20130609204511/stormlightarchive/images/3/34/Map_roshar.jpg'/>
             </div>
             <Row>
                <Col>
                <div className='majorNations'>
                <Modal
                id="foo"
	            header='Modal Header'
	            fixedFooter
	            trigger={<Button>MODAL WITH FIXED FOOTER</Button>}>
                    <h1>Nation Name</h1>
                    <p>dfiojasdjf</p>
                </Modal>

                {
                    this.state.regions.map((r, index) => (
                        <Button key={index} onClick={ window.$('#foo').modal('open') }>{r}</Button>
                    ))
                }
                <p>{this.state.current}</p>
                </div>
                </Col>
            </Row>
            <h1>Lesser Nations</h1>
             <Row>
                 <Col s={4}>
             <Collapsible popout defaultActiveKey={1}>
	            <CollapsibleItem header='First' icon='filter_drama'>
		Lorem ipsum dolor sit amet.
	            </CollapsibleItem>
	        <CollapsibleItem header='Second' icon='place'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
	        <CollapsibleItem header='Third' icon='whatshot'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
            </Collapsible>
            </Col>
            <Col s={4}>
             <Collapsible popout defaultActiveKey={1}>
	            <CollapsibleItem header='First' icon='filter_drama'>
		Lorem ipsum dolor sit amet.
	            </CollapsibleItem>
	        <CollapsibleItem header='Second' icon='place'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
	        <CollapsibleItem header='Third' icon='whatshot'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
            </Collapsible>
            </Col>
            <Col s={4}>
             <Collapsible popout defaultActiveKey={1}>
	            <CollapsibleItem header='First' icon='filter_drama'>
		Lorem ipsum dolor sit amet.
	            </CollapsibleItem>
	        <CollapsibleItem header='Second' icon='place'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
	        <CollapsibleItem header='Third' icon='whatshot'>
		Lorem ipsum dolor sit amet.
	        </CollapsibleItem>
            </Collapsible>
            </Col>
            </Row>

            </div>
        );
    }
}

export default Universe;