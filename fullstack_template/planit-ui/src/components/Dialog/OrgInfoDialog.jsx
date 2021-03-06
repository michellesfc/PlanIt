import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

import React, { Component } from 'react';
import OrgMembersContainer from '../OrgMembersContainer/OrgMembersContainer';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class OrgInfoDialog extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const exit = <FlatButton label="Exit" primary={true} onClick={this.props.close}/>
        const request_admin = <FlatButton label="Request Admin Status" primary={true} onClick={() => this.props.submitAdminRequest(this.props.org.organizationId)}/>    
        const viewRequests = <FlatButton label="View Admin Requests" primary={true} onClick={() => this.props.viewAdminRequests(this.props.org.organizationId)}/>;
        const viewEvents = 
        <FlatButton
                label="View Events"
                primary={true}
                onClick={() => this.props.viewAllEvents(this.props.org.organizationId)} />
        const leaveOrg = <FlatButton
                            label="Leave Org"
                            primary={true}
                            onClick={() => this.props.leaveOrg("false", this.props.org.organizationId)} />
        var currUser = this.props.Members.filter(m => m.email === this.props.User.username);
        var isAdmin = currUser[0] && currUser[0].memberStatus === "admin";

        return (
            <Dialog 
             actions={isAdmin && this.props.viewAsAdmin ? [leaveOrg, viewEvents, viewRequests, exit] : 
                       (isAdmin && !this.props.viewAsAdmin || this.props.org.requestedAdmin ? [leaveOrg, viewEvents, exit] :
                                                             [leaveOrg, viewEvents, request_admin, exit])}
             title={this.props.org.organizationName}
             open={this.props.isVisible}
             onRequestClose={this.props.close}>
                <Table>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableRowColumn className="bold-row">Type</TableRowColumn>
                            <TableRowColumn>{this.props.org.organizationType}</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn className="bold-row">Description</TableRowColumn>
                            <TableRowColumn>{this.props.org.organizationDescription}</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <OrgMembersContainer members={this.props.Members}/>
            </Dialog>
        );
    }
}

export default OrgInfoDialog;