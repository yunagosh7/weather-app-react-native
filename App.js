import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator()

export default App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name={'Current'} component={CurrentWeather } />
        <Tabs.Screen name={'Upcoming'} component={UpcomingWeather} />
        <Tabs.Screen name={'City'} component={City} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
