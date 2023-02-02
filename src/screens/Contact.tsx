import { memo } from 'react';
import { Text, Image } from 'react-native';
import styled from '@emotion/native';

const Row = styled.View({
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
});

const Contact = () => {
  return (
    <Row>
      <Image source={require('../assets/images/photo6.png')} />
      <Image style={{marginLeft: 20}} source={require('../assets/images/photo6.png')} />
    </Row>
  );
};

export default memo(Contact);
