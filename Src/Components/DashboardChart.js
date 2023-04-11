import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { VictoryChart, VictoryLabel, VictoryAxis, VictoryLine, } from 'victory-native';
import { SelectList } from 'react-native-dropdown-select-list'
import Feather from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get('window');
const DashboardChart = ({ onSelect, chartData, lable, }) => {

    const listData = [
        { key: '1', value: '7 Days' },
        { key: '2', value: '1-6 Months' },
        { key: '3', value: '6-12 Months' },
    ]
    const [selectedData, setSelectedData] = useState(listData[0].value);
    return (
        <View
            style={{
                backgroundColor: '#F2F5F8',
                width: width - 30,
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: 15,
            }}
        >
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 16, color: '#000', }}>{lable}</Text>

                <SelectList
                    onSelect={() => { }}
                    setSelected={(val) => { setSelectedData(val), onSelect ? onSelect(val) : null }}
                    data={listData}
                    save="value"
                    boxStyles={{
                        height: 35,
                        alignItems: 'center',
                        alignContent: 'center',
                        borderWidth: 0,
                        fontSize: 14,
                        paddingHorizontal: 17,
                        paddingVertical: 0,
                        width: width * 0.4,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        elevation: 1,
                    }}
                    dropdownStyles={{
                        borderRadius: 10,
                        paddingHorizontal: 0,
                        backgroundColor: '#fff',
                        borderWidth: 0,
                        elevation: 1,
                        marginTop: 5,
                    }}
                    dropdownTextStyles={{
                        color: '#000',
                        fontSize: 14,
                    }}
                    dropdownItemStyles={{
                        marginHorizontal: 10,
                        paddingHorizontal: 5,
                    }}
                    inputStyles={{
                        color: '#232323',
                        fontSize: 14,
                    }}
                    search={false}
                    defaultOption={listData[0]}
                    notFoundText={''}
                    arrowicon={
                        <View
                            style={{
                                position: 'absolute',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                            }}
                        >
                            <Feather name='chevron-down' size={23} color={'#23232355'} style={{ right: -10, }} />
                        </View>}
                />
            </View>

            <View
                style={{ paddingLeft: 25, }}
            >
                <VictoryChart
                    height={width * 0.7}
                    horizontal={false}
                    width={width}
                    domainPadding={{ x: [10, 8], y: [0, 8] }}
                >
                    <VictoryLabel
                        text={"Jan 30, 2023"}
                        dy={5}
                        dx={15}
                        style={{ fill: '#23232370', fontSize: 12, }}
                    />
                    <VictoryLabel
                        text={"₹25,000.00"}
                        dy={25}
                        dx={15}
                        style={{ fill: '#000', fontSize: 20, }}
                    />
                    <VictoryAxis
                        horizontal
                        style={{
                            grid: { strokeWidth: 0 },
                            axis: { stroke: '#00446C' },
                            tickLabels: { fill: '#23232395', fontSize: 10, padding: 5, },
                            ticks: { stroke: "#00446C", size: 8 },
                        }}

                    />
                    <VictoryAxis
                        dependentAxis
                        domain={[0]}
                        tickCount={10}
                        style={{
                            grid: { strokeWidth: 0 },
                            axis: { stroke: '#00446C' },
                            tickLabels: { fill: '#23232395', fontSize: 10, padding: 5, },
                            ticks: { stroke: "#00446C", size: 8 },
                        }}
                    />
                    <VictoryLine
                        style={{ data: { stroke: "#0996E9", strokeWidth: 1.5 } }}
                        data={chartData} x="day" y="value"
                        interpolation="linear"
                    />
                </VictoryChart>
            </View>
        </View>
    )
}

export default DashboardChart

const styles = StyleSheet.create({})