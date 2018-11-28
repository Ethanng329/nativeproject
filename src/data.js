import React from 'react';
import { View, Text } from 'react-native';


class Data extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.getData()
  }
  render() {
    return (
      <View>
        <Text>!redux Data</Text>
        <Text>?where is redux</Text>
        <Text>{this.props.reduxData}</Text>
      </View>
    );
  }
}


export default Data;
