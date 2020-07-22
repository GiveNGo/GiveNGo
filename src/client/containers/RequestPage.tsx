import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, Input, Card } from '@ui-kitten/components';

export default function RequestPage({ navigation }: any): React.ReactElement {
  const [requests, setRequests] = useState([]);
  const [accepted, setAccepted] = useState(false);

  return (
    <Layout>
      <Text style={styles.text} category="s1">
        Submit your request for a donation from your neighbors!
      </Text>
      <Card style={styles.card}>
        <Input
          multiline={true}
          textStyle={{ minHeight: 100 }}
          placeholder="Enter your request..."
        />
        <Button
          size="small"
          status="basic"
          onPress={() => navigation.navigate('Dashboard')}
        >
          Submit
        </Button>
      </Card>
    </Layout>
  );
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    margin: 2,
    height: 200,
  },
  text: {
    margin: 10,
    textAlign: 'center',
  },
});
