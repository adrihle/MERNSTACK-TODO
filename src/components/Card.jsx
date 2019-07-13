import React, { Component } from 'react'
import Moment from 'react-moment'

class Card extends Component {
    render() {
        return (
            <div className="card mb-3 mt-3" onClick={this.props.delete}>
                <div className="card-header d-flex justify-content-between">
                    <h5>{this.props.title}</h5>
                    <Moment date={this.props.date} fromNow></Moment>
                </div>
                <div className="card-body">
                    <div className="card-text d-block ">{this.props.description}</div>
                    <div className="d-flex justify-content-between">
                        <footer className="blockquote-footer">{this.props.author}</footer>
                        <a href='https://google.com' className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;