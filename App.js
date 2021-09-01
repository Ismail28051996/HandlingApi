import React, {useState, useEffect} from "react";

import {Button,Spinner} from "native-base";


import {
    StyleSheet,
    View,
    StatusBar,
    Text
} from "react-native";
 
import Axios from "axios";
import User from "./components/User";


const App = () => {
    
    const [details, setDetails] = useState(null);

    const fetchDetailes = async () => {
        try{

           const {data} = await Axios.get("https://randomuser.me/api/")
           const details = data.results[0];

            console.log(details);
           setDetails(details);

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchDetailes();
    },[])
   
    if(!details){
        return(
            <View style={styles.container}>
            <Spinner color="danger" />
            </View>
        )
    }
    else{
        return (
            <View style={styles.container}>
                <View> 
                    <User details={details}/>
                    <Button info block
                    // style={styles.Button}
                    onPress={() => fetchDetailes()}
                    >
                        <Text> Click For New User </Text>
                    </Button>
                </View>      
            </View>
        )
    }   
}

export default App;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#222831"
    },
    button:{
        marginTop:20,
        paddingHorizontal:10,
        paddingLeft: 10,
        paddingRight:10
    }
})

