import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, setName } from '../actions/User.actions';

class ShowCounter extends React.Component {

  render() {
    return (
      <div>
        <div>Recieved data: {this.props.count}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.app
  };
};


export default withRouter(connect(mapStateToProps)(ShowCounter));
