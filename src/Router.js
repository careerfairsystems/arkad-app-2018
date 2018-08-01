import React from 'react'
import { TabNavigator } from 'react-navigation'
import MapScreen from './screens/Map/MapScreen'
import CompaniesScreen from './screens/Companies/CompaniesScreen'
import EventsScreen from './screens/Events/EventsScreen'
import AboutScreen from './screens/About/AboutScreen'

const Router = TabNavigator({
  Map: {
    screen: MapScreen
  },
  Companies: {
    screen: CompaniesScreen
  },
  Events: {
    screen: EventsScreen
  },
  About: {
    screen: AboutScreen
  }
})

export default Router