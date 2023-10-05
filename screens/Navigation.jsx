import { View, Text, Button, StyleSheet } from 'react-native'
import SignIn from './SignIn'
import Register from './Register'
import AccountDetails from './AccountDetails'
import HomePage from './HomePage'


const Navigation = (props) => {
  return (
    <View style={styles.container}>

    <Button title='Register Screen' onPress={()=>{props.navigation.navigate(Register)}}  />
    <Button title='Sign in Screen' onPress={()=>{props.navigation.navigate(SignIn)}}  />
    <Button title='Account Details Screen' onPress={()=>{props.navigation.navigate(AccountDetails)}}  />
    <Button title='Home Page' onPress={()=>{props.navigation.navigate(HomePage)}}  />
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
})

export default Navigation