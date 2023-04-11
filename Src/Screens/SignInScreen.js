import React, { useState, useRef } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    useColorScheme,
    TouchableOpacity,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Hideo } from "react-native-textinput-effects";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const width = Dimensions.get('window').width;

const SignInScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(true);

    const [viewPass, setViewPass] = useState(false);

    const validEmail = new RegExp('^[a-z0-9]+@gmail.com$');

    const _email = useRef();
    const _password = useRef();

    const ValidData = (email, password) => {
        if (email != '' && password != '') {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    return (
        <SafeAreaView style={{
            backgroundColor: '#fff',
            flex: 1,
        }}>
            <StatusBar
                backgroundColor={'#00000000'}
                translucent
                barStyle={'dark-content'} />
            <View
                style={{
                    alignItems: 'center',
                    top: "10%",
                }}
            >
                <Image
                    source={require('../Images/Partner_Logo.png')}
                    style={{
                        height: width * 0.75,
                        width: width * 0.75,
                    }}
                />
                <View
                    style={{
                        width: width,
                        padding: 15,
                        marginTop: 30,
                        alignItems: 'center',
                    }}
                >
                    {/* Email */}
                    <Hideo
                        ref={_email}
                        placeholder="Email"
                        iconClass={Feather}
                        iconName={"mail"}
                        placeholderTextColor={"#808080"}
                        iconColor={"white"}
                        iconBackgroundColor={"#0BA5FE"}
                        inputStyle={{ color: "#000", fontSize: 14, }}
                        iconSize={25}
                        value={email}
                        style={{ fontSize: 10, }}
                        onChangeText={(value) => { setEmail(value), ValidData(value, password) }}
                        keyboardType={"email-address"}
                    />

                    {/* Password */}
                    <View
                        style={{
                            width: '100%',
                            marginTop: 10,
                        }}
                    >
                        <Hideo
                            ref={_password}
                            placeholder="Password"
                            iconClass={SimpleLineIcons}
                            iconName={viewPass ? "lock-open" : "lock"}
                            placeholderTextColor={"#808080"}
                            iconColor={"white"}
                            iconBackgroundColor={"#0BA5FE"}
                            inputStyle={{ color: "#000", fontSize: 14, }}
                            iconSize={25}
                            value={password}
                            style={{ fontSize: 10, }}
                            onChangeText={(value) => { setPassword(value), ValidData(email, value) }}
                            keyboardType={"default"}
                            passwordField={!viewPass}
                            maxLength={25}
                            onBlur={() => { setViewPass(false) }}
                        />
                        <TouchableOpacity
                            style={{
                                padding: 15,
                                height: '100%',
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center',
                                right: 5,
                            }}
                            onPress={() => { setViewPass(!viewPass) }}
                        >
                            {
                                viewPass ?
                                    <Ionicons name='ios-eye' size={20} color={"#23232370"} />
                                    :
                                    <Ionicons name='ios-eye-off' size={20} color={'#23232360'} />
                            }
                        </TouchableOpacity>
                    </View>

                    {/* Continue */}
                    <TouchableOpacity
                        style={{
                            backgroundColor: disable ? "#EBF0F3" : "#0BA5FE",
                            padding: 15,
                            width: width * 0.6,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 40,
                            borderRadius: 50,
                        }}
                        disabled={disable}
                        onPress={() => { navigation.replace('TabNavigation') }}
                    >
                        <Text style={{ color: disable ? '#000' : '#fff', }}>Continue</Text>
                    </TouchableOpacity>

                    {/* SignUp */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
                            marginTop: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: '#232323',
                                fontSize: 13,
                                marginLeft: 5,
                                paddingVertical: 10,
                            }}
                        >Don't have an account?</Text>
                        <TouchableOpacity
                            style={{
                                paddingHorizontal: 5,
                                paddingVertical: 10,
                            }}
                            onPress={() => {
                                navigation.navigate("SignUpScreen");
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                }}
                            >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({})