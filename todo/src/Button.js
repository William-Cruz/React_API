import React from 'react';
export default class Button extends React.Component {
    state ={
    };
    render() {
        return (
            <button type={this.props.type || 'submit'}>
                {this.props.name || 'Submit'}
            </button>
        )
    }
}