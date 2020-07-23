import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Card, Text } from '@ui-kitten/components';

const CodeOfConductPage = ({ navigation }: any) => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white-ish',
      }}
    >
      <Card style={styles.card}>
        <Text category="h4" style={styles.text}>
          Give 'n' Go Code of Conduct {'\n'}
        </Text>
        <Text category="p1" style={styles.text}>
          In the interest of fostering an open and welcoming environment, we ask
          all participants to make our community a harassment-free experience
          for everyone, regardless of age, ethnicity, gender identity and
          expression, body, size, disability, level of education, socio-economic
          status, nationality, personal appearance, religion, or sexual identity
          and orientation. {'\n'}
        </Text>
        <Text category="h4" style={styles.text}>
          Our Standards {'\n'}
        </Text>
        <Text category="p1" style={styles.text}>
          Examples of behavior that contributes to creating a positive
          environment include: {'\n'}
          {'\n'}* Using welcoming and inclusive language{'\n'} * Being
          respectful of differing viewpoints and experiences{'\n'} * Gracefully
          accepting constructive criticism{'\n'} * Focusing on what is best for
          the community{'\n'} * Showing empathy towards other community members
        </Text>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 2,
    height: '100%',
    borderColor: 'transparent',
  },
  text: {
    textAlign: 'center',
  },
});

export default CodeOfConductPage;
