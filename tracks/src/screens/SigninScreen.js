import React,  {useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Context as AuthContext} from './../context/AuthContext';
import { NavigationEvents} from 'react-navigation';
import AuthForm from './../components/AuthForm'
import NavLink from './../components/NavLink';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage} //when we will navigate to this screen (when transition will be called)
                onDidFocus={() => {}} //success navigation to this screen(when we will land on this screen)
                onWillBlur={clearErrorMessage} //when we will go back from this screen (when transition will be called)
                onDidBlur={() => {}} //when navigate away
            />
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sing In"
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                submitText="Don't have an an account? Sign up instead."
            />
        </View>
    );
    
};

SigninScreen.navigationOptions = () => {
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
    },});

export default SigninScreen;