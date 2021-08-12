import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Navigation = props => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconWrap}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Icon name="home" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Icon name="power-off" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    textAlign: 'left',
    backgroundColor: '#8571ff',
  },
  iconWrap: {
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  powerIcon: {},
  user: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'red',
    padding: 5,
  },
});

export default Navigation;
