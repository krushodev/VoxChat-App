import { useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';

import { Chat, Rooms } from '../../../screens';

import { IconButton } from 'react-native-paper';

import { toggleDrawer } from '../../../store/slices/drawerSlice';

import colors from '../../../constants/colors';

import type { RootStackParamList } from '../../types';

type screens = ['HomeScreen', 'RoomsScreen', 'ChatScreen'];

const Stack = createNativeStackNavigator<RootStackParamList<screens>>();

const StackNavigator = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Stack.Group>
        <Stack.Screen name="RoomsScreen" component={Rooms} />
        <Stack.Screen
          name="ChatScreen"
          component={Chat}
          options={({ route }) => {
            const params = route.params as unknown as { roomId?: string; title?: string };

            return {
              headerShown: true,
              title: params.title ? params.title : 'Room',
              headerRight: () => (
                <IconButton
                  icon="account-group"
                  iconColor={colors.chetwodeBlue700}
                  onPress={() => dispatch(toggleDrawer())}
                  size={responsiveFontSize(4)}
                />
              )
            };
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
