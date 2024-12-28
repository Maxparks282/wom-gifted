import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default InfoScreen = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/logo-blue.webp')} style={styles.logo} />
                <Text style={styles.notice}>Connect with <Text style={styles.bold}>Like-Minded Individuals</Text></Text>
            </View>
            <Text style={styles.phrase}>Expand your network</Text>
            <Image source={require('../assets/info.webp')} style={styles.image} />

            <TouchableOpacity
                style={styles.primaryBtn}
                onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.primaryBtnText}>Next</Text>
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
        paddingTop: 10,
        paddingBottom: 50,
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
        fontSize: 11,
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
        width: '80%',
        height: 150,
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