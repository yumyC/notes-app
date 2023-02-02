import { memo } from 'react';
import { Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  flexDirection: "row",
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#396545'
});

const Home = () => {
  return (
    <Container>
      <Image source={require('../assets/images/photo1.png')} />
      <Text style={{color:'white', marginLeft: 10}}>2023.10.1.我们结婚啦</Text>
    </Container>
  );
};

export default memo(Home);
