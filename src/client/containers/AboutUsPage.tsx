import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';

const AboutUsPage = () => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white-ish',
      }}
    >
      <Card style={styles.card}>
        <Text category="p1" style={styles.text}>
          Give 'n' Go is here to connect people who need
          toiletries/groceries/other goods with those who live nearby and are
          willing to donate and drop off those goods to them. {'\n'}
          {'\n'}
          Our goal is to help build community while helping those in need.
          {'\n'}
          {'\n'}
          Give 'n' go includes a chat app to allow users to coordinate for drop
          off or communicate any specific requirements.
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

export default AboutUsPage;
