import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const Reduxdata = props => {
  return (
    <View>
      <Text>!redux Data</Text>
      <Text>{props.reduxData}</Text>
    </View>
  );
};

function mapStateToProps(reduxState) {
  return {
    reduxData: reduxState.reduxData
  };
}

export default connect(
  mapStateToProps,
  null
)(Reduxdata);
