import { memo } from 'react';
import { Text, Image } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#396545'
});

const Home = () => {
  return (
    <Container>
      <Image source={require('../assets/images/photo1.png')} />
      <Text style={{color:'white'}}>欢迎</Text>
    </Container>
  );
};

export default memo(Home);
