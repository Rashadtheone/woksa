import React, { Component } from 'react';
import {Card, CardTitle } from 'react-materialize'
import './characters.css';

class Characters extends Component {
    render() {
        return (
            <div>
                <div className="main-characters"> 
                <h2>Main Characters</h2>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
		              title="Khaladin & Syl"
                      reveal={
                      <div>
                          <h5>Personality</h5>
                          <h5>Biography</h5>
                          <h5>Abilities & Powers</h5>
                          <h5>Appearance</h5>
                      </div>
                      }>
		        <p><a href="#">This is a link</a></p>
                </Card>
                </div>
                <div className="secondary-characters"> 
                <h2>Secondary Characters</h2>
                <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
		              title="Adolin"
                      reveal={
                      <div>
                          <h5>Personality</h5>
                          <h5>Biography</h5>
                          <h5>Abilities & Powers</h5>
                          <h5>Appearance</h5>
                      </div>
                      }>
		        <p><a href="#">This is a link</a></p>
                </Card>
                </div>
            </div>
        );
    }
}

export default Characters;