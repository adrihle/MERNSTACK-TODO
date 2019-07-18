import React, { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div>
                <div 
                    className="note"
                    >
                        {this.props.title}
                </div>
                
            </div>
        );
    }
}

export default Note;