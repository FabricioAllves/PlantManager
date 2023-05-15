import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { AuthRoutes } from './tab.routes';


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen  name='Welcome' component={Welcome}/>
      <Screen  name='UserIdentification' component={UserIdentification}/>
      <Screen  name='Confirmation' component={Confirmation}/>
      <Screen  name='PlantSelect' component={AuthRoutes}/>
      <Screen  name='PlantSave' component={PlantSave}/>
      <Screen  name='MyPlants' component={AuthRoutes}/>
    </Navigator>
  );
}