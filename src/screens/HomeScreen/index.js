import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from '@emotion/native';

const HomeScreen = () => {
  const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
  `;

  const Heading = styled.Text`
    color: #000;
    font-size: 22px;
    font-weight: bold;
  `;

  return (
    <Container>
      <Heading>Home Screen</Heading>
    </Container>
  );
};

export default HomeScreen;
