import { FC, memo, useCallback } from 'react';
import { Button, Text } from 'react-native';
import styled from '@emotion/native';

import { SignInScreenProps } from '../navigation/AuthStack';

const Container = styled.View({
  backgroundColor: 'white'
});

const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const onSignUp = useCallback(() => {
    navigation.navigate('联系我们');
  }, [navigation]);

  return (
    <Container>
      <Text style={{margin: 10}}>欢迎参加</Text>

      <Button title="立即查看" onPress={onSignUp} />
    </Container>
  );
};

export default memo(SignInScreen);
