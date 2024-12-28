import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            
            <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.secondaryBtnText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontSize: 16,      
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 16,
    },
    secondaryBtn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#699BC1',
        borderRadius: 20
    },
    secondaryBtnText: {
        color: '#f2eaea',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 10,
    },
    linkText: {
        color: '#6200ee',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});