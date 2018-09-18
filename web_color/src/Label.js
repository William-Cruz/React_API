import React from 'react';



export default class Label extends React.Component {
    state = {};

    render() {
        return ( 
            <div className = "Label">
                <p>{this.props.color}</p>
            </div>
        );
    }
}



