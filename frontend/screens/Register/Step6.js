import React, {useState, useEffect} from 'react'
import { View, Text, Button, TextInput, StyleSheet} from 'react-native'

const Step6 = props => {

    const next = e => {
        console.log(e)
        e.preventDefault();
        props.nextStep();
    }

    return (
        <View>
            <View>
                <Text> Choisissez un mot de passe</Text>
            </View>
            <View>
                <TextInput placeholder="mot de passe"/>
            </View>
            <View>
                <Text>Le mot de passe doit faire au minimum 8 caractères</Text>
            </View>

            <View>
                <Button 
                    title="Next"
                    onPress={()=> props.nextStep()}
                />
            </View>
        </View>
    )
}


export default Step5;
