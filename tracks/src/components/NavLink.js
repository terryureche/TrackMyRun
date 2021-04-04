import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, submitText, routeName}) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>{submitText}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        textAlign: 'center'
    }
});

export default withNavigation(NavLink);