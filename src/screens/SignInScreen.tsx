import { FC, memo, useCallback } from 'react';
import { Button, Text } from 'react-native';
import styled from '@emotion/native';

import { SignInScreenProps } from '../navigation/AuthStack';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
});

const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const onSignUp = useCallback(() => {
    navigation.push('SignUp');
  }, [navigation]);

  return (
    <Container>
      <Text style={{bottom: 10}}>欢迎参加</Text>

      <Button title="立即查看" onPress={onSignUp} />
    </Container>
  );
};

export default memo(SignInScreen);
