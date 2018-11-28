import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getData } from '../actions';
import Data from './data';

// const Reduxdata = props => {
//   return (
//     <View>
//       <Text>!redux Data</Text>
//       <Text>?where is redux</Text>
//       <Text>{props.reduxData}</Text>
//     </View>
//   );
// };

function mapStateToProps(reduxState) {
  return {
    reduxData: reduxState.Data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(getData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);
