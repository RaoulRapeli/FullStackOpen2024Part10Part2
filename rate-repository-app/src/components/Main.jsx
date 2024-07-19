import { StyleSheet, View} from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList/RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from './Text';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.backgroundColor
    },
});

const Main = () => {
    const onSubmit = values => {
        console.log(values);
        // const username = values.username
        // const password = values.password
    
        // if (!isNaN(username) && !isNaN(password)) {
        //   console.log(`Login with data: ${username}, ${password}`);
        // }
      };

    return (
        <View style={styles.container}>
            <AppBar/>
            <Routes>
                <Route path="/repositoryList" element={<RepositoryList />} />
                <Route path="/signin" element={<SignIn onSubmit={onSubmit}/>} />
                <Route path="*" element={<Navigate to="/repositoryList" replace />} />
            </Routes>
        </View>
    );
};

export default Main;