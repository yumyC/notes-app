import { memo } from 'react';
import { Text, Image } from 'react-native';
import styled from '@emotion/native';

const Row = styled.View({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
});
const Column = styled.View({
  flex: 1,
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
});

const Address = () => {
  return (
    <Column>
      <Row>
        <Image source={require('../assets/images/photo2.png')} />
      </Row>
      <Row>
        <Text>欢迎</Text>
      </Row>
    </Column>
  );
};

export default memo(Address);
