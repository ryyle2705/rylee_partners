import { PermissionsAndroid } from 'react-native';
import {Linking} from 'react-native';

export const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location")
        } else {
            requestLocationPermission();
        }
        return granted;
    } catch (err) {
        console.warn(err)
    }
}

export const storagePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Storage Access.")
        } else {
            Linking.openSettings();
        }
        return granted;
    } catch (err) {
        console.warn(err)
    }
}

export const cameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera Access.")
            console.log(granted);
        } else {
            Linking.openSettings();
        }
        return granted;
    } catch (err) {
        console.warn(err)
    }
}

