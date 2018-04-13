import React, { Component } from 'react';

require('./Card.css');
class RSVPEventCard extends React.Component {
    constructor(props){
    	super(props);
    	this.state={
              eventTitle:'',
              image: undefined,
              eventStartTime: '',
              eventLocation: '',
              RSVPStatus: '',
        };
      }
      
      render() {
      return (
          
        <div className="Card" onClick={() => this.props.renderEventInfo(this.props.eventId, this.props.canRSVP)}>
            <div className="card-content">
                <h1 className="card-sub-item">{this.props.eventTitle}</h1>
                <h1 className="card-sub-item">{this.props.eventLocation}</h1>
                <h1 className="card-sub-item">{this.props.eventStartTime}</h1>
                <h1 className="card-sub-item">{this.props.RSVPStatus}</h1>
            </div>
        </div>);
      }

}

export default RSVPEventCard;