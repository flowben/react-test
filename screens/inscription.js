import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default class Inscription extends React.Component {
    renders() {
        return (

            <View >
                <Text>Inscription</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={ }
                    placeholder="Name"
                    keyboardType="string"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Email"
                    keyboardType="string"
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
                <Text>Déjà inscrit ? </Text>
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