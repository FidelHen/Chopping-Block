import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { Button } from '@ant-design/react-native';

const Cravings = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-evenly", }}>
            <View style={styles.title}>
                <Text style={{ fontSize: 49, letterSpacing: 0, opacity: 1 }}>
                    What are you
                </Text>
                <Text style={{ fontSize: 49, letterSpacing: 0, opacity: 1, }}>
                    craving?
                </Text>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container2}>
                        <View style={{ flex: .1, justifyContent: "space-evenly", }}>
                            <Text style={{ fontSize: 15, letterSpacing: 0, opacity: 1 }}>
                                Prefrences
                            </Text>
                            <TextInput placeholder="Ex. Vegan, Korean, Mexican" />
                        </View>
                        <View style={styles.buttons}>
                            <Button type="primary" style={{ flex: 0.75, backgroundColor: "#4053FA" }} onPress={() => navigation.navigate("Home")} >
                                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                    Next
                                </Text>
                            </Button>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: .75,
        flexDirection: "column",
        justifyContent: "space-evenly",

    },
    container2: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "5%",
        justifyContent: "space-around",

    },
    title: {
        flex: 0.2,
        flexDirection: "column",
        justifyContent: "center",
        left: "10%",
        marginTop: "10%",
    },
    buttons: {
        flex: 0.2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    }
});

export default Cravings
