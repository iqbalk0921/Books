import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
import { useHistory } from 'react-router-native';
const styles = StyleSheet.create({
  welcome: {
    textAlign: 'center',
    marginBottom: "50px",
  },
  logo: {
        width: 130,
        height: 130,
        alignSelf:'center',
        marginBottom: 50,     
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
});

const BooksPage= () => {
    const history = useHistory();
    const gotoBooksPage = () => {
        history.push('/Books');
    };

const Separator = () => (
  <View style={styles.separator} />
);

return (
    <View>
     <Text style={styles.welcome}>
        <Text>{`Welcome to BOOKS APP\nRead here to get\nKnowldge`}</Text>
      </Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
         <TouchableOpacity style={styles.button} onPress={gotoBooksPage}>
                        <Text style={styles.buttonText}>Read Books</Text>
                    </TouchableOpacity>
    </View>             
)
};

export default BooksPage;