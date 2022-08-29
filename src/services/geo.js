import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

class Geo {
    constructor(){
        this._longitude = undefined;
        this._latitude = undefined;
    }

    initializeGeoRN(){
            if (Platform.OS === 'ios') {
                Geolocation.requestAuthorization();
                
                Geolocation.getCurrentPosition(
                    (position) => {
                        const {latitude,longitude}=position.coords;
                        this._latitude = latitude;
                        this._longitude = longitude;
                    },
                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                );
                this.watchGeoPosition()
    
            } else {
                const requestLocationPermission  = async ()  =>{
                    try {
                        const granted = await PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                            'title': 'Location Access Required',
                            'message': 'This App needs to Access your location'
                        }
                        )
                        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                            //To Check, If Permission is granted
                            
                            Geolocation.getCurrentPosition(
                                (position) => {
                                    const {latitude,longitude}=position.coords;
                                    this._latitude = latitude;
                                    this._longitude = longitude;
                                },
                                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                            );
                                this.watchGeoPosition()
                        } else {
                            // console.warn("Permission Denied");
                        }
                    } catch (err) {
                        // console.warn("ACCESS_FINE_LOCATION permission denied : ",err)
                    }
                }
                requestLocationPermission();
            }
    }
    getCurrentPosition(){
        if(!this._latitude || !this._longitude){
            this.initializeGeoRN()
        }
        return {latitude: this._latitude, longitude: this._longitude}
    }
    watchGeoPosition = () => {
        Geolocation.watchPosition((position) => {
            const {latitude,longitude}=position.coords;
            this._latitude = latitude;
            this._longitude = longitude;
        });
    }
}

export default new Geo()