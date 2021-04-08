import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


const Overlay = props => {
    return (
    
    props.show ? <View style={styles.screen}>
                    <Text style={styles.title}>Bienvenue sur Money Time, {props.name}</Text>
                    <Text style={styles.subtitle}>Créons ensemble l'entrainement parfait afin de vous dépasser</Text>
                    <Button 
                        title="Suivant"
                        onPress={()=> props.closeModal(false)} />
                </View>
     : null
)}

const styles = StyleSheet.create({
    screen:{
        display: "flex",
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.92)",
        position: "absolute",
        left: 0,
        top: 0
    },

    title:{
        color: "#fff",
        fontSize: 25,
        fontWeight: "800",
        textAlign:"center",
        marginVertical: 10
    },

    subtitle:{
        color: "#fff",
        fontSize: 15,
        fontWeight: "300",
        textAlign:"center",
        marginVertical: 10
    }
})

export default Overlay;