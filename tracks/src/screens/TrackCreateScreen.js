import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from './../components/Map';
import useLocation from './../hooks/useLocation';
// import '../_mockLocation';
import { Context as LocationContext } from './../context/LocationContext';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    // 15-53
    const [errPermission] = useLocation(isFocused, (location) => addLocation(location));

    return (
        <SafeAreaView forceInset={{top: "always"}}>
            <Text h2>Create a Track</Text>
            <Map />
            {errPermission ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
    
};


const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
