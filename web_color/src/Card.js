import React from 'react';
import Label from './Label';
import Square from './Square';


export default class Card extends React.Component {
    state = {
        
    };

    render() {
        return ( 
        <div className = "Card">
        <Square color={this.props.color}/>
        <Label color={this.props.color}/>
        </div>
        );
    }
}


