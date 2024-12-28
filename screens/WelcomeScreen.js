import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import React from 'react';

export default WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/logo-blue.webp')} style={styles.logo} />
                <Text style={styles.notice}>Connect with <Text style={styles.bold}>Like-Minded Individuals</Text></Text>
            </View>
            <Text style={styles.phrase}>Join Us Today</Text>
            <Image source={require('../assets/login.webp')} style={styles.image} />
            <TouchableOpacity
                style={styles.primaryBtn}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.primaryBtnText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.secondaryBtn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.secondaryBtnText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingInline: 20,
        paddingBlock: 50,
        backgroundColor: '#f9f9f9',
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
        fontSize: 12,
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
        marginTop: 20,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: 20,
    },
    primaryBtn: {
        width: '100%',
        backgroundColor: '#1F7EFF',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    primaryBtnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    secondaryBtn: {
        width: '100%',
        backgroundColor: '#fefefe',
        outline: '#0101 solid 2px',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    secondaryBtnText: {
        color: '#1F7EFF',
        fontSize: 20,
        textAlign: 'center',
    },
});