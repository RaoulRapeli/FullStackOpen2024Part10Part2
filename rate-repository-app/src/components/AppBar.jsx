import { View, StyleSheet, Text, ScrollView, Platform } from 'react-native';
import { Link } from 'react-router-native';
import theme from './Text';

const styles = StyleSheet.create({
    container: theme.container,
    barLinks: {
        marginRight:10,
    },
    barLinkText:{
        color: theme.colors.white,
        fontFamily: Platform.select({
            android: theme.fonts.android,
            ios:theme.fonts.ios,
            default: theme.fonts.default
        }),
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView horizontal>
            <Link to="/repositoryList" style={styles.barLinks}>
                <Text style={styles.barLinkText}>Repositories</Text>
            </Link>
            <Link to="/signin" style={styles.barLinks}>
                <Text style={styles.barLinkText}>Sign in</Text>
            </Link>
        </ScrollView>
    </View>;
};

export default AppBar;