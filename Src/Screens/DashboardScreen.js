import { StatusBar, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ToggleSwitch from 'rn-toggle-switch'
import DashboardChart from '../Components/DashboardChart';

const DashboardScreen = ({ navigation }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#00000000'}
        translucent
      />
      <View
        style={styles.HeaderCardView}
      >
        <View style={{ paddingHorizontal: 20, }}>
          {/* Header */}
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: "#000", fontSize: 17, }}>Welcome to the </Text>
            <Text style={{ color: "#0BA5FE", fontSize: 17, }}>Rylee</Text>
          </View>
          <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', marginTop: 3, }}>Radhika Fashion Hub</Text>

          {/* Status View */}
          <View style={[styles.StatusView, { backgroundColor: isOpen ? "#E4FFF2" : "#FFF1E4" }]}>

            {/* Icon */}
            <Image
              source={require('../Images/Icons/Siren.png')}
              style={{ height: 25, width: 25 }}
              resizeMode='contain'
            />

            {/* Text */}
            <Text style={{ color: '#000', marginLeft: 15, fontSize: 16 }}>Shop is now </Text>
            <Text style={{ color: isOpen ? "#41AA47" : "#FB4F05" }}>{isOpen ? "Open" : "Close"}</Text>

            {/* ToggleSwitch */}
            <View
              style={{ position: 'absolute', right: 10 }}
            >
              <ToggleSwitch
                text={{ on: '  On', off: 'Off  ', activeTextColor: '#fff', inactiveTextColor: '#fff' }}
                textStyle={{ fontSize: 15, }}
                color={{ indicator: 'white', active: '#51AC57', inactive: '#23232350', activeBorder: '#51AC57', inactiveBorder: '#23232390' }}
                active={isOpen}
                disabled={false}
                width={30}
                radius={14}
                onValueChange={(val) => {
                  setIsOpen(val);
                }}
              />
            </View>
          </View>
        </View>

        {/* Scroll Menu */}
        <ScrollView
          horizontal
          style={{
            flexGrow: 0, // Wrap Content Height
            marginTop: 25,
          }}
          contentContainerStyle={{
            paddingStart: 15,
            paddingEnd: 15,
          }}
          showsHorizontalScrollIndicator={false}
        >

          {/* Order */}
          <TouchableOpacity
            onPress={() => { }}
            style={styles.MenuButton}
          >

            <Image
              source={require('../Images/Icons/Order.png')}
              style={styles.MenuButtonIcon}
              resizeMode='contain'
            />
            <Text style={styles.MenuButtonText}>Orders</Text>
          </TouchableOpacity>

          {/* Transaction */}
          <TouchableOpacity
            onPress={() => { }}
            style={styles.MenuButton}
          >

            <Image
              source={require('../Images/Icons/Transaction.png')}
              style={styles.MenuButtonIcon}
              resizeMode='contain'
            />
            <Text style={styles.MenuButtonText}>Transaction</Text>
          </TouchableOpacity>

          {/* Return */}
          <TouchableOpacity
            onPress={() => { }}
            style={styles.MenuButton}
          >

            <Image
              source={require('../Images/Icons/Return.png')}
              style={styles.MenuButtonIcon}
              resizeMode='contain'
            />
            <Text style={styles.MenuButtonText}>Return</Text>
          </TouchableOpacity>

          {/* Replace */}
          <TouchableOpacity
            onPress={() => { }}
            style={styles.MenuButton}
          >

            <Image
              source={require('../Images/Icons/Replace.png')}
              style={styles.MenuButtonIcon}
              resizeMode='contain'
            />
            <Text style={styles.MenuButtonText}>Replace</Text>
          </TouchableOpacity>

          {/* Cancel Order */}
          <TouchableOpacity
            onPress={() => { }}
            style={styles.MenuButton}
          >

            <Image
              source={require('../Images/Icons/CancelOrder.png')}
              style={styles.MenuButtonIcon}
              resizeMode='contain'
            />
            <Text style={styles.MenuButtonText}>Cancel Order</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>
      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          paddingBottom: 15,
        }}
      >
        <DashboardChart
          lable={"Order"}
          chartData={[
            { day: 'MON', value: 1000 },
            { day: 'TUE', value: 1500 },
            { day: 'WED', value: 4500 },
            { day: 'THU', value: 1500 },
            { day: 'FRI', value: 2500 },
            { day: 'SAT', value: 4000 },
            { day: 'SUN', value: 3000 },
          ]}
          onSelect={(val) => { console.log(val) }}
        />

        <DashboardChart
          lable={"Profit"}
          chartData={[
            { day: 'MON', value: 1000 },
            { day: 'TUE', value: 1500 },
            { day: 'WED', value: 4500 },
            { day: 'THU', value: 1500 },
            { day: 'FRI', value: 2500 },
            { day: 'SAT', value: 4000 },
            { day: 'SUN', value: 9000 },
          ]}
          onSelect={(val) => { console.log(val) }}
        />

        <DashboardChart
          lable={"Product Sell"}
          chartData={[
            { day: 'MON', value: 1000 },
            { day: 'TUE', value: 5000 },
            { day: 'WED', value: 2000 },
            { day: 'THU', value: 3500 },
            { day: 'FRI', value: 6000 },
            { day: 'SAT', value: 4000 },
            { day: 'SUN', value: 9000 },
          ]}
          onSelect={(val) => { console.log(val) }}
        />

      </ScrollView>
    </View >
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderCardView: {
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 15,
    width: '100%',
    elevation: 5,
    shadowColor: '#23232380',
  },
  StatusView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'flex-start',
    elevation: 3,
    marginTop: 20,
    shadowColor: '#232323',
    borderRadius: 5,
  },
  MenuButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: '#232323',
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  MenuButtonText: {
    color: '#23232395',
    marginLeft: 5,
    fontSize: 14,
  },
  MenuButtonIcon: {
    tintColor: '#23232398',
    width: 23,
    aspectRatio: 1 / 1,
  },
})