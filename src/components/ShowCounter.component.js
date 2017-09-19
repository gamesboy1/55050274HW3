import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ShowCounter extends React.Component {

  render() {
    return (
      <div>
        <div>**********************************</div>
        <div>Counter: {this.props.count}</div>
        <div>**********************************</div>
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
