import React, { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div>
                <div 
                    className="note"
                    onClick={this.props.delete}
                    >
                        {this.props.title}
                </div>
                
            </div>
        );
    }
}

export default Note;