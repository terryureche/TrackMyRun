import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from './../components/Spacer';
import { Context as AuthContext } from './../context/AuthContext';

const AcountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{ fontSize: 48}}>Acount Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
};

// AcountScreen.navigationOptions = () => {
//     return {
//       header: () => false,
//     };
// };


const styles = StyleSheet.create({});

export default AcountScreen;