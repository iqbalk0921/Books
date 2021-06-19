import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(155, 199, 120, 0.356)',
    },
    contentContainerStyle: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
    },
    inputContainer: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    button: {
        padding: 10,
        marginTop: 10,
        backgroundColor: 'rgba(235, 168, 12, 0.911)',
        width: '100%',
        borderRadius: 4,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize:28,  
    },
   
    heading: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 32,
    },
});

const UserLogin = function() {
    const history = useHistory();
    const [username, setUsername] = useState('kamal kr dia');
    const [password, setPassword] = useState('kamal kr dia');
    const [loading, setLoading] = useState(false);

    const loginUser = () => {
       if (username === 'kamal kr dia' && password == 'kamal kr dia') {
          history.push('/Dashboard');
        }
        else{
        alert('Invalid Username or Password!')
      }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.contentContainerStyle}>

                    <Text style={styles.heading}>Sign in</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Enter Username"
                            value={username}
                            onChangeText={setUsername}
                            />
                    </View>
                    <View style={styles.inputContainer}>
                
                        <TextInput
         placeholder="Enter Password"
         value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={loginUser}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
};

export default UserLogin;
