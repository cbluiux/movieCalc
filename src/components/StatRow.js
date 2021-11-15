import React from 'react'
import { Text, View } from 'react-native'

const StatRow = ({ message, calculation = 0 }) => {
  return (
    <View>
      <Text>{`${message} ${calculation}`}</Text>
    </View>
  )
}

export default StatRow
