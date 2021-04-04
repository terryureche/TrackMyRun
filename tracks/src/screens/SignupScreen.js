import React, {useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import {Context as AuthContext} from './../context/AuthContext';
import { NavigationEvents} from 'react-navigation';
import AuthForm from './../components/AuthForm';
import NavLink from './../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup,clearErrorMessage } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage} //when we will navigate to this screen (when transition will be called)
                onDidFocus={() => {}} //success navigation to this screen(when we will land on this screen)
                onWillBlur={clearErrorMessage} //when we will go back from this screen (when transition will be called)
                onDidBlur={() => {}} //when navigate away
            />
            <AuthForm 
                headerText="Sing Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sing Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                submitText="Already have an account? Sign in instead."
            />
        </View>
    );
};
 
SignupScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
});

export default SignupScreen;