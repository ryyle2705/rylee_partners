import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductScreen from '../Screens/ProductScreen';
import AlertScreen from '../Screens/AlertScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import AddProductScreen from '../Screens/AddProductScreen';
import DashboardScreen from '../Screens/DashboardScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabButtons = ({ focused, icon, lable }) => {
    return (
        <View style={{ alignItems: 'center', marginTop: 9}}>
            {icon ?
                <Image
                    source={icon}
                    style={{
                        height: 20,
                        tintColor: focused ? "#17A9F2" : "#000",
                    }}
                    resizeMode='contain'
                />
                : null}
            <Text style={{ color: focused ? "#17A9F2" : "#000", marginTop: 3 }}>{lable}</Text>
            <View style={{
                backgroundColor: focused ? "#17A9F2" : "#fff",
                height: 3,
                width: 12,
                borderRadius: 3,
                marginTop: 4,
            }}></View>
        </View>
    )
}

const HomeTabNavigation = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    justifyContent: 'space-evenly',
                    backgroundColor: '#fff',
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <CustomTabButtons focused={focused} icon={require('../Images/Icons/Dashboard.png')} lable={"Dashboard"} />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="AlertScreen"
                component={AlertScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <CustomTabButtons focused={focused} icon={require('../Images/Icons/Alert.png')} lable={"Alert"} />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="AddProductScreen"
                component={AddProductScreen}
                options={{
                    headerShown: false,
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#0BA5FE',
                                borderRadius: 50,
                                bottom: 40,
                                height: 70,
                                aspectRatio: 1 / 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 2,
                            }}
                            disabled={false}
                            onPress={() => { props.onPress() }}
                        >
                            <Image
                                source={require('../Images/Icons/Add.png')}
                                style={{
                                    height: 30,
                                    left: -1,
                                    aspectRatio: 1 / 1,
                                }}
                            />
                        </TouchableOpacity>
                    )
                }}
            />

            <Tab.Screen
                name="ProductsScreen"
                component={ProductScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <CustomTabButtons focused={focused} icon={require('../Images/Icons/Products.png')} lable={"Products"} />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    headerShadowVisible: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <CustomTabButtons focused={focused} icon={require('../Images/Icons/Profile.png')} lable={"Profile"} />
                        )
                    }
                }}
            />
        </Tab.Navigator >
    )
}

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
                title: 'Profile',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerShown: false,
            }} />
            {/* <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{
                title: 'Edit Profile',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
            }} /> */}
        </Stack.Navigator>
    )
}

export const SplashNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}
                options={{
                    title: '',
                    headerBackTitle: '#000',
                    headerShadowVisible: false,
                }} />
            <Stack.Screen name="TabNavigation" component={HomeTabNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}