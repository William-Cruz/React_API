import React from 'react';


 export default class Square extends React.Component {
    state = {
    };
    
    render() {
        const squareStyle = {
            backgroundColor: this.props.color
        }
        return ( 
            <div style={squareStyle} className="Square"></div>
        );
    }
}


