import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import fakeGroupData from '../../../utils/fakeGroupData';
import { Card } from '@ant-design/react-native';
import RecentGroupTile from '../../../components/RecentGroupTile';
import CardDivider from '../../../components/RestaurantCardSimplified/CardDivider';




const RecentGroups = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaProvider>
                <StatusBar />
                <View style={{ flex: 0.15, marginLeft: '5%', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <AntDesign name='left' size={28} color="#000000" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text  style={{ fontSize: 32, letterSpacing: 0, opacity: 1, padding: 20 }}> 
                        RecentGroups
                    </Text>
                </View>
                <View style={styles.container}>
                    <Card style={styles.card}>
                        <Card.Body style={styles.cardBody}>
                            {fakeGroupData.map((group, index) => {
                                return (
                                    <TouchableOpacity onPress={() =>{}}>
                                        <View key={group.name}>
                                            <RecentGroupTile
                                                key={index}
                                                group={group}
                                            />
                                            {index !== fakeGroupData.length - 1 && <CardDivider />}
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </Card.Body>
                    </Card>
                </View>
            </SafeAreaProvider>
        </SafeAreaView>

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
        flex: 0.15,
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    group: {
        flex: .3,

    },
    image_container: {
        flex: 0.4,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    image_text: {
        flex: 0.8,
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginLeft: "5%",
        alignItems: "flex-start",
    },
    buttons: {
        flex: 0.2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    card: {
        flex: .9
    }



});


export default RecentGroups