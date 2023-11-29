import * as React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import TodoList from '../componentes/TodoList';

const Home = () => {
  return (
    <View style={styles.container}>
        <Image 
            source={require('../assets/logo.png')}
            style={styles.pic}
        />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  pic: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: 'flex-end'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10
  }
})

export default Home;