import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GroupLanding from '../../../assets/svgs/GroupLandingSVG';
import { Button } from '@ant-design/react-native';

const Groups = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaProvider>
                <StatusBar />
                <View style={styles.image_container}>
                    <GroupLanding />
                </View>

                <View style={styles.title}>
                    <Text style={{ fontSize: 24, letterSpacing: 0, opacity: 1, fontWeight: "bold", textAlign: "center" }}>
                        Different Cravings?
                    </Text>

                    <Text style={{ flex: .87 ,fontSize: 15, textAlign: "center", letterSpacing: 0, opacity: 1, marginLeft: '7%', marginRight: '7%'}}>
                        No worries, let's put it up to a
                        vote! Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nam nec
                        felis placerat, vulputate nisi quis.
                    </Text>
                </View>

                <View>
                    <Button type="primary" style={{ height: 45, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => navigation.navigate('groupInvite')}>
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>
                            Create Group
                        </Text>
                    </Button>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center"}}>
                            Join with code
                        </Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaProvider>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "#fff"
    },
    title: {
        flex: 0.45,
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginTop: "2%",
        alignContent: "center"
    },
    image_container: {
        flex: 0.5,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5%"
    }
});

export default Groups