import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = {
  container: {
    backgroundColor: 'rgba(0, 43, 100, 0.9)',
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  mainText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 36,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: '500'
  },
  subText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: '400'
  }
}

const { container, mainText, subText } = styles
const OverlayMap = ({ title, onPress }) => (
  <View style={container}>
    <Text style={mainText}>
      Under construction
    </Text>
    <Text style={subText}>
      The map is under construction and will be back before ARKAD starts.
    </Text>
  </View>
)


export default OverlayMap