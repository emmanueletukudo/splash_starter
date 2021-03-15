import React from "react";
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from  "react-native";
import {images} from "../constants/";

const Login =  () => {

    const [text, onChangeText] = React.useState("This is a text");
    const [number, onChangeNumber] = React.useState(null);
    
    return(
      <View style={styles.container} >
        <View style={styles.logoView}>
          <Image source={images.logo} resizeMode="contain" style={styles.logo}/>
        </View>
      <View style={styles.inputView}>
      <TextInput  
        style={styles.inputText}
        placeholder="+2340899004909" 
        placeholderTextColor="#AFAFAF"
        onChangeText={text => onChangeText(text)}/>
      </View>
      <View style={styles.inputView}>
      <TextInput  
        style={styles.inputText}
        placeholder="Password" 
        placeholderTextColor="#AFAFAF"
        onChangeText={text => onChangeText(text)}/>
      </View>
        

<TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    <View style={styles.actions}>
    <TouchableOpacity style={{marginHorizontal: 15}}>
      <Text style={styles.forgot}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.singUp}>Signup</Text>
    </TouchableOpacity>
    </View>
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center"
  },

  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },

  inputView:{
    width:"80%",
    backgroundColor:"#EAEAEA",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#777777",
    fontWeight: "800",
  },
  singUp:{
    color: "#39B54A",
    fontWeight: "500",
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#39B54A",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  loginText: {
    color: "#ffffff",
    fontWeight: "800",
  },  
  actions:{
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  logoView:{
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
    marginTop: 0,
  },
  logo:{
    marginBottom: 25,
    width: 250,
    height: 100,
  }
})
export default Login;