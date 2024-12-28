import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default StartUpScreen = ( { navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/logo-blue.webp')} style={styles.logo} />
                <Text style={styles.notice}>Welcome to <Text style={styles.bold}>Word of Mouth</Text></Text>
            </View>
            <Text style={styles.phrase}>Connecting you with the world</Text>
            <Image source={require('../assets/welcome.webp')} style={styles.welcomeImage} />
            <TouchableOpacity 
                style={styles.primaryBtn}
                onPress={() => navigation.navigate('Info')}>
                <Text style={styles.primaryBtnText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingInline: 20,
        paddingBlock: 50,
        backgroundColor: '#1A2D42',
        height: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 75,
        resizeMode: 'contain',
    },
    notice: {
        fontSize: 16,
        backgroundColor: 'lightblue',
        padding: 5,
        borderRadius: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    phrase: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#D64161',
        marginTop: 20,
    },
    welcomeImage: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        marginBottom: 'auto',
    },
    primaryBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F7EFF',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        marginTop: 'auto',
    },
    primaryBtnText: {
        color: 'white',
        fontSize: 18,
    },
});