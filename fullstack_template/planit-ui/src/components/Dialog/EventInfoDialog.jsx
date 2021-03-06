import Dialog from 'material-ui/Dialog';
import React, { Component } from 'react';
import CommentContainer from '../CommentContainer/CommentContainer';
import RSVPResponseContainer from '../RSVPResponseContainer/RSVPResponseContainer';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

require('./Dialog.css');

class EventInfoDialog extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getEventComments(this.props.event.eventId, true);
        this.props.getEventRSVPResponses(this.props.event.eventId);
    }

    render() {
        const event = this.props.event;


        console.log("ADMIN COMMENTS???")
        console.log(this.props.EventComments)
        return (
            <Dialog
                title={event.eventTitle}
                open={this.props.isVisible}
                autoScrollBodyContent={true}
                onRequestClose={this.props.close}>
                <Table>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableRowColumn className="bold-row">Description</TableRowColumn>
                            <TableRowColumn>{event.eventDescription}</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn className="bold-row">Location</TableRowColumn>
                            <TableRowColumn>{event.eventLocation}</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn className="bold-row">Start Time</TableRowColumn>
                            <TableRowColumn>{event.eventStartTime}</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn className="bold-row">End Time</TableRowColumn>
                            <TableRowColumn>{event.eventEndTime}</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn className="bold-row">Max Participants</TableRowColumn>
                            <TableRowColumn>{event.maxParticipants}</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn className="bold-row">Event Type</TableRowColumn>
                            <TableRowColumn>{event.eventMembersOnly ? "For Members Only" : "Open to Everyone"}</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <h4>RSVP Responses</h4>
                <RSVPResponseContainer
                    responseList={this.props.EventRSVPResponses}
                    {...this.props} />
                <h4>Discussion</h4>
                <CommentContainer
                    comList={this.props.EventComments}
                    isAdminComment={true}
                    {...this.props} />
            </Dialog>
        );
    }
}

export default EventInfoDialog;