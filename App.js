import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'
import UpcomingWeather from './src/components/UpcomingWeather'

export default App = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
