/**
 * The App component wraps the Main component and the Redux library
 * to bind the action creators and datastore to properties in the component
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main/Main';

// These are the properties we'll automatically pass to Main
function mapStateToProps(state) {
   console.log("State is " + JSON.stringify(state));
   return {
       User: state.User,
       AdminOrgs: state.AdminOrgs,
       MemberOrgs: state.MemberOrgs,
       Members: state.Members,
       AllOrgs: state.AllOrgs,
       AdminEvents: state.AdminEvents,
       AllEvents: state.AllEvents,
       RSVPEvents: state.RSVPEvents,
       EventComments: state.EventComments,
       OrgEvents: state.OrgEvents,
       EventRSVPResponses: state.EventRSVPResponses
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(
   mapStateToProps,
   mapDispatchToProps
)(Main));

export default App;
