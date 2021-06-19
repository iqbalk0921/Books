import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform, Button, Share, KeyboardAvoidingView } from 'react-native';
import { useHistory } from 'react-router-native';
import * as SecureStore from 'expo-secure-store';


const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom: "0px",
    fontSize:26,
    fontWeight:"bold",
  },
  container: {
        flex: 1,
        backgroundColor: 'rgba(155, 199, 120, 0.356)'    
    },

    text: {
        fontSize:26,    
    },
});
const Dashboard = () => {
    const history = useHistory();
    const onShare6 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 6th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-6th.pdf',
      });
    }
  };

  const onShare7 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 7th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-7th.pdf',
      });
    }
  };

  const onShare8 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 8th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-8th.pdf',
      });
    }
  };

  const onShare9 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 9th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-9th.pdf',
      });
    }
  };

  const onShare10 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 10th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-10th.pdf',
      });
    }
  };

    const logout = () => {
        history.push('/');
    };

    return (
        <View style={styles.container}>

            <Text style={styles.header} >BOOKS</Text>
        <Image source={{ uri: "https://books-dj2.pages.dev/thumbnails/6th.jpg" }} style={{ width: 320, height: 450 }} />

       <Text style={styles.text}>Computer Education Class 6th</Text>
       <Text style={styles.description}>Class 6th Computer book Punjab Curriculum and Textbook Board</Text>

        <a  href = "https://co.vid19.pk/media/books/computer-education-class-6th.pdf"><h2>Read OR Download</h2></a>

         <Button onPress={onShare6} title="Share" color="orange"  fontWeight='bold' ></Button>

        <Image source={{ uri: "https://books-dj2.pages.dev/thumbnails/7th.jpg" }} style={{ width: 320, height: 450 }} />

<Text style={styles.text}>Computer Education Class 7th</Text>
<Text style={styles.description}>Class 7th Computer book Punjab Curriculum and Textbook Board</Text>

        <a href = "https://co.vid19.pk/media/books/computer-education-class-7th.pdf"><h2>Read OR Download</h2></a>

         <Button onPress={onShare7} title="Share" color="orange" fontWeight='bold' ></Button>

        <Image source={{ uri: "https://books-dj2.pages.dev/thumbnails/8th.jpg" }} style={{ width: 320, height: 450 }} />

<Text style={styles.text}>Computer Education Class 8th</Text>
<Text style={styles.description}>Class 8th Computer book Punjab Curriculum and Textbook Board</Text>

        <a href = "https://co.vid19.pk/media/books/computer-education-class-8th.pdf"><h2>Read OR Download</h2></a>

         <Button onPress={onShare8} title="Share" color="orange" fontWeight='bold' ></Button>
        
        <Image source={{ uri: "https://books-dj2.pages.dev/thumbnails/9th.jpg" }} style={{ width: 320, height: 450 }} />

<Text style={styles.text}>Computer Education Class 9th</Text>
<Text style={styles.description}>Class 9th Computer book Punjab Curriculum and Textbook Board</Text>

        <a href = "https://co.vid19.pk/media/books/computer-education-class-9th.pdf"><h2>Read OR Download</h2></a>

         <Button onPress={onShare9} title="Share" color="orange" fontSize='26' fontWeight='bold' ></Button>

        <Image source={{ uri: "https://books-dj2.pages.dev/thumbnails/10th.jpg" }} style={{ width: 320, height: 450 }} />

        <Text style={styles.text}>Computer Education Class 10th</Text>
        <Text style={styles.description}>Class 10th Computer book Punjab Curriculum and Textbook Board</Text>

        <a href = "https://co.vid19.pk/media/books/computer-education-class-10th.pdf"><h2>Read OR Download</h2></a>

         <Button onPress={onShare10} title="Share" color="orange" fontSize='26' fontWeight='bold' ></Button>

        <Button title="" color="none" fontSize='32' fontWeight='bold' ></Button>

            <Button onPress={logout} title="Logout" fontWeight='bold' ></Button>
        </View>
    )
};

export default Dashboard;
