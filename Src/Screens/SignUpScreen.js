import React, { useState, useRef, useEffect } from 'react';
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
  ScrollView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { Hideo } from "react-native-textinput-effects";
import { SelectList } from 'react-native-dropdown-select-list'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const width = Dimensions.get('window').width;

const SignUpScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [viewPass, setViewPass] = useState(false);

  const [disable, setDisable] = useState(true);

  const [shopName, setShopName] = useState('');
  const [shopEmail, setShopEmail] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [pincode, setPincode] = useState('');

  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [latitude, setLatitude] = useState(21.1702);
  const [longitude, setLongitude] = useState(72.8311);
  const [shopType, setShopType] = useState('');
  const [schedule, setSchedule] = useState('');


  const _name = useRef();
  const _email = useRef();
  const _phoneNo = useRef();
  const _password = useRef();

  const _shopName = useRef();
  const _shopEmail = useRef();
  const _shopAddress = useRef();
  const _pincode = useRef();

  const _map = useRef();

  const s = {
    region: {
      latitude: 21.1702,
      longitude: 72.8311,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }
  }
  const [stat, setStat] = useState(s)

  const CityData = [
    { key: '1', value: 'Surat' },
    { key: '2', value: 'Bharuch' },
    { key: '3', value: 'Vapi' },
    { key: '4', value: 'Valsad' },
    { key: '5', value: 'Bhavanagar' },
    { key: '6', value: 'Rajkot' },
    { key: '7', value: 'Botad' },
  ]

  const StateData = [
    { key: '1', value: 'Gujarat' },
    { key: '2', value: 'Maharastra' },
    { key: '3', value: 'Goa' },
    { key: '4', value: 'Delhi' },
    { key: '5', value: 'Rajasthan' },
    { key: '6', value: 'U.P.' },
    { key: '7', value: 'M.P.' },
  ]

  const ShopTypeData = [
    { key: '1', value: 'Men' },
    { key: '2', value: 'Women' },
  ]

  const ScheduleData = [
    { key: '1', value: 'Morning' },
    { key: '2', value: 'Afternoon' },
    { key: '3', value: 'Evening' },
  ]

  const OnValueChanged = ({ region }) => {
    setStat({ region: region });
    setLatitude(parseFloat(JSON.stringify(region.latitude)));
    setLongitude(parseFloat(JSON.stringify(region.longitude)));
  }

  const validEmail = new RegExp('^[a-z0-9]+@gmail.com$');

  const ValidData = () => {
    if (email != '' && password != '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      handelUserLoaction(); 
    }else{
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handelUserLoaction();
      } else {
        requestLocationPermission();
      }
    } catch (err) {
      console.warn(err)
    }
  }
  }

  const handelUserLoaction = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        _map.current.animateToRegion({
          ...stat.region,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        })
      },
      (error) => {
        // See error code charts below.
        console.warn("Error " + error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, }
    );
  }

  useEffect(() => {
    requestLocationPermission();
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            height: '100%',
            justifyContent: "center",
            marginHorizontal: 7,
          }}
          onPress={() => {
            navigation.pop(1);
          }}
        >
          <Feather name='chevron-left' size={35} color={'#000'} />
        </TouchableOpacity>
      ),
    });

  }, [navigation]);

  return (
    <SafeAreaView style={{
      backgroundColor: '#fff',
      flex: 1,
    }}>
      <StatusBar
        backgroundColor={'#00000000'}
        translucent
        barStyle={'dark-content'} />
      <ScrollView
        contentContainerStyle={{
          width: width,
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* Header Text */}
        <View
          style={{
            width: "100%",
          }}
        >
          <Text
            style={{
              color: '#000',
              fontSize: 24,
            }}
          >Create Account to Start</Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Text
              style={{
                color: '#000',
                fontSize: 24,
              }}
            >Journey with </Text>
            <Text
              style={{
                color: '#0BA5FE',
                fontSize: 24,
                fontWeight: 'bold',
              }}
            >Rylee</Text>
          </View>
        </View>

        {/* Name */}
        <Hideo
          ref={_name}
          placeholder="Full Name"
          iconClass={MaterialIcons}
          iconName={"person-outline"}
          placeholderTextColor={"#808080"}
          iconColor={"white"}
          iconBackgroundColor={"#0BA5FE"}
          inputStyle={{ color: "#000", fontSize: 14, }}
          iconSize={30}
          value={name}
          style={{ fontSize: 10, marginTop: 10, }}
          onChangeText={(value) => { setName(value), ValidData() }}
        />

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
          style={{ fontSize: 10, marginTop: 10, }}
          onChangeText={(value) => { setEmail(value), ValidData() }}
          keyboardType={"email-address"}
        />

        {/* Phone No */}
        <Hideo
          ref={_phoneNo}
          placeholder="Phone Number"
          iconClass={MaterialCommunityIcons}
          iconName={"phone"}
          placeholderTextColor={"#808080"}
          iconColor={"white"}
          iconBackgroundColor={"#0BA5FE"}
          inputStyle={{ color: "#000", fontSize: 14, }}
          iconSize={25}
          value={phoneNo}
          maxLength={10}
          style={{ fontSize: 10, marginTop: 10, }}
          onChangeText={(value) => { setPhoneNo(value), ValidData() }}
          keyboardType={"phone-pad"}
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

        {/* Shop Details */}
        <View
          style={{
            width: '100%',
            marginTop: 15,
          }}
        >
          <Text style={{ color: '#000', fontSize: 18, marginLeft: 5, }}>Shop Details</Text>

          {/* Shop Name */}
          <Hideo
            ref={_shopName}
            placeholder="Shop Name"
            iconClass={MaterialCommunityIcons}
            iconName={"store-outline"}
            placeholderTextColor={"#808080"}
            iconColor={"white"}
            iconBackgroundColor={"#0BA5FE"}
            inputStyle={{ color: "#000", fontSize: 14, }}
            iconSize={30}
            value={shopName}
            style={{ fontSize: 10, marginTop: 10, }}
            onChangeText={(value) => { setShopName(value), ValidData() }}
          />

          {/* Shop Email */}
          <Hideo
            ref={_shopEmail}
            placeholder="Shop Email"
            iconClass={Feather}
            iconName={"mail"}
            placeholderTextColor={"#808080"}
            iconColor={"white"}
            iconBackgroundColor={"#0BA5FE"}
            inputStyle={{ color: "#000", fontSize: 14, }}
            iconSize={25}
            value={shopEmail}
            style={{ fontSize: 10, marginTop: 10, }}
            onChangeText={(value) => { setShopEmail(value), ValidData() }}
            keyboardType='email-address'
          />

          {/* Shop Address */}
          <Hideo
            ref={_shopAddress}
            placeholder="Shop Address"
            iconClass={Ionicons}
            iconName={"ios-location-outline"}
            placeholderTextColor={"#808080"}
            iconColor={"white"}
            iconBackgroundColor={"#0BA5FE"}
            inputStyle={{ color: "#000", fontSize: 14, }}
            iconSize={28}
            value={shopAddress}
            style={{ fontSize: 10, marginTop: 10, }}
            onChangeText={(value) => { setShopAddress(value), ValidData() }}
          />

          {/* Pincode */}
          <Hideo
            ref={_pincode}
            placeholder="Pincode"
            iconClass={Entypo}
            iconName={"location"}
            placeholderTextColor={"#808080"}
            iconColor={"white"}
            iconBackgroundColor={"#0BA5FE"}
            inputStyle={{ color: "#000", fontSize: 14, }}
            iconSize={24}
            value={pincode}
            maxLength={6}
            style={{ fontSize: 10, marginTop: 10, }}
            onChangeText={(value) => { setPincode(value), ValidData() }}
            keyboardType='number-pad'
          />

          {/* City */}
          <SelectList
            onSelect={() => { }}
            setSelected={(val) => setCity(val)}
            data={CityData}
            save="value"
            boxStyles={{
              borderRadius: 24,
              height: 48,
              marginTop: 10,
              alignItems: 'center',
              paddingHorizontal: 15,
              borderColor: '#23232355',
              borderWidth: 1,
              fontSize: 14,
            }}
            dropdownStyles={{
              borderRadius: 24,
              paddingHorizontal: 0,
              borderColor: '#23232355',
            }}
            searchPlaceholder={'Search City'}
            dropdownTextStyles={{
              color: '#000',
              fontSize: 14,
            }}
            dropdownItemStyles={{
              borderBottomWidth: 0.5,
              borderTopWidth: 0.5,
              borderColor: 'rgba(243,244,246,1)',
              marginHorizontal: 10,
              paddingHorizontal: 5,
            }}
            placeholder={'Select City'}
            inputStyles={{
              color: city ? 'rgba(0,0,0,1)' : '#23232355',
              fontSize: 14,
            }}
            notFoundText={'Not Found.'}
            searchicon={<FontAwesome name='search' size={18} color={'#00000040'} style={{ marginRight: 10, }} />}
            closeicon={<Ionicons name='ios-close' size={20} color={'#000'} />}
            arrowicon={<Feather name='chevron-down' size={25} color={'#23232355'} />}
          />

          {/* State */}
          <SelectList
            onSelect={() => { }}
            setSelected={(val) => setState(val)}
            data={StateData}
            save="value"
            boxStyles={{
              borderRadius: 24,
              height: 48,
              marginTop: 10,
              alignItems: 'center',
              paddingHorizontal: 15,
              borderColor: '#23232355',
              borderWidth: 1,
              fontSize: 14,
            }}
            dropdownStyles={{
              borderRadius: 24,
              paddingHorizontal: 0,
              borderColor: '#23232355',
            }}
            searchPlaceholder={'Search State'}
            dropdownTextStyles={{
              color: '#000',
              fontSize: 14,
            }}
            dropdownItemStyles={{
              borderBottomWidth: 0.5,
              borderTopWidth: 0.5,
              borderColor: 'rgba(243,244,246,1)',
              marginHorizontal: 10,
              paddingHorizontal: 5,
            }}
            placeholder={'Select State'}
            inputStyles={{
              color: state ? 'rgba(0,0,0,1)' : '#23232355',
              fontSize: 14,
            }}
            notFoundText={'Not Found.'}
            searchicon={<FontAwesome name='search' size={18} color={'#00000040'} style={{ marginRight: 10, }} />}
            closeicon={<Ionicons name='ios-close' size={20} color={'#000'} />}
            arrowicon={<Feather name='chevron-down' size={25} color={'#23232355'} />}
          />

          {/* Map */}
          <View
            style={{
              width: '100%',
              aspectRatio: 2 / 1.25,
              alignSelf: 'center',
              borderRadius: 15,
              overflow: 'hidden',
              marginTop: 10,
              borderColor: 'rgba(255,255,255,0.5)',
              borderWidth: 1,
            }}
          >
            <MapView
              ref={_map}
              style={{ flex: 1, borderRadius: 15, overflow: 'hidden' }}
              initialRegion={stat.region}
              showsUserLocation={true}
              onRegionChangeComplete={(r) => { OnValueChanged({ region: r }) }}
              rotateEnabled={false}
            // customMapStyle={MapStandardStyle}
            />
            <View style={{ top: '50%', left: "50%", marginLeft: -20, marginTop: -37.5, position: 'absolute', }}>
              <Image
                source={require('../Images/icon.png')}
                style={{ height: 40, width: 40, }}
                resizeMode='cover'
              />
            </View>
          </View>

          {/* Shop Type */}
          <SelectList
            onSelect={() => { }}
            setSelected={(val) => setShopType(val)}
            data={ShopTypeData}
            save="value"
            boxStyles={{
              borderRadius: 24,
              height: 48,
              marginTop: 10,
              alignItems: 'center',
              paddingHorizontal: 15,
              borderColor: '#23232355',
              borderWidth: 1,
              fontSize: 14,
            }}
            dropdownStyles={{
              borderRadius: 24,
              paddingHorizontal: 0,
              borderColor: '#23232355',
            }}
            searchPlaceholder={'Search Type'}
            dropdownTextStyles={{
              color: '#000',
              fontSize: 14,
            }}
            dropdownItemStyles={{
              borderBottomWidth: 0.5,
              borderTopWidth: 0.5,
              borderColor: 'rgba(243,244,246,1)',
              marginHorizontal: 10,
              paddingHorizontal: 5,
            }}
            placeholder={'Select Shop Type'}
            inputStyles={{
              color: shopType ? 'rgba(0,0,0,1)' : '#23232355',
              fontSize: 14,
            }}
            notFoundText={'Not Found.'}
            searchicon={<FontAwesome name='search' size={18} color={'#00000040'} style={{ marginRight: 10, }} />}
            closeicon={<Ionicons name='ios-close' size={20} color={'#000'} />}
            arrowicon={<Feather name='chevron-down' size={25} color={'#23232355'} />}
          />

          {/* Schedule */}
          <SelectList
            onSelect={() => { }}
            setSelected={(val) => setSchedule(val)}
            data={ScheduleData}
            save="value"
            boxStyles={{
              borderRadius: 24,
              height: 48,
              marginTop: 10,
              alignItems: 'center',
              paddingHorizontal: 15,
              borderColor: '#23232355',
              borderWidth: 1,
              fontSize: 14,
            }}
            dropdownStyles={{
              borderRadius: 24,
              paddingHorizontal: 0,
              borderColor: '#23232355',
            }}
            searchPlaceholder={'Search'}
            dropdownTextStyles={{
              color: '#000',
              fontSize: 14,
            }}
            dropdownItemStyles={{
              borderBottomWidth: 0.5,
              borderTopWidth: 0.5,
              borderColor: 'rgba(243,244,246,1)',
              marginHorizontal: 10,
              paddingHorizontal: 5,
            }}
            placeholder={'Select Shop Schedule'}
            inputStyles={{
              color: schedule ? 'rgba(0,0,0,1)' : '#23232355',
              fontSize: 14,
            }}
            notFoundText={'Not Found.'}
            searchicon={<FontAwesome name='search' size={18} color={'#00000040'} style={{ marginRight: 10, }} />}
            closeicon={<Ionicons name='ios-close' size={20} color={'#000'} />}
            arrowicon={<Feather name='chevron-down' size={25} color={'#23232355'} />}
          />

          {/* Timing */}
          <Text style={{ color: '#000', fontSize: 14, marginLeft: 5, marginTop: 10 }}>Select Your Shop Timing</Text>
          <View
            style={{
              marginTop: 10,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={styles.BtnTime}
            >
              <Text style={{
                color: '#23232365',
                fontSize: 14,
              }}>Select Time</Text>
            </TouchableOpacity>

            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000' }}>To</Text>

            <TouchableOpacity
              style={styles.BtnTime}
            >
              <Text style={{
                color: '#23232365',
                fontSize: 14,
              }}>Select Time</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Continue */}
        <TouchableOpacity
          style={{
            backgroundColor: disable ? "#EBF0F3" : "#0BA5FE",
            padding: 15,
            width: width * 0.6,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            borderRadius: 50,
          }}
          disabled={disable}
        >
          <Text style={{ color: disable ? '#000' : '#fff', }}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  BtnTime: {
    width: width * 0.37,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#23232355',
    borderRadius: 25,
    height: 48,
  },
})