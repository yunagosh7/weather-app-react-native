import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const RowText = ({
    messageOne, 
    messageTwo,
    containerStyles,
    messageOneStyles,
    messageTwoStyles 
}) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default RowText
