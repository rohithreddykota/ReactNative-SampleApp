import React from 'react';
import { View } from 'react-native';

// component defination
const Card = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

// styles declaration
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    // position: 'relative',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

// export component
export default Card;
