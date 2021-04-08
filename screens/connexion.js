import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default class Connexion extends React.Component {
    constructor() { }

    render() {

        return (

            <View >
                <Text>Connexion</Text>
                <TextInput
                    label = "Email"
                    placeholder="Email"
                    returnKeyType = "next"
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    
                    keyboardType="email-address"
                />
                <TextInput
                    label = "Password"
                    placeholder="Password"
                    returnKeyType = "next"
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                />
                <Button
                    // onPress={}
                    title="Connexion"
                    color="#0000ff"
                />
                <Button

                    title="S'inscrire"
                    color="#f8f8ff"
                />
                <StatusBar style="auto" />
            </View>

        )
    }

}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});