import React, { Component } from 'react';
import {Parallax, Collapsible, CollapsibleItem, Row, Col,
        Modal, Button} from 'react-materialize'
import './universe.css';

class UniverseItem extends Component {
    constructor(props) {
        super(props);
    }

    // princedoms(props) {
    //     const princedoms = this.props.region.princedoms;
    //     const listItems = princedoms.map((princedom) =>
    //       <li>{princedom}</li>
    //     );
    //     return (
    //         <ul>{listItems}</ul>
    //       );
    // }

    render() {

        return (
                <Modal 
                header={this.props.region.name}
	            fixedFooter
	            trigger={
                <Button>{this.props.region.name}</Button>
                }>
                    <img src={this.props.region.img} />
                    <p>{this.props.region.lore}</p>
                        <ul>
                            <li>{this.props.region.princedom}</li>
                        </ul>
                        <ul>
                            {this.props.region.cites}
                        </ul>
                </Modal>
        );
    }
}

export default UniverseItem;
