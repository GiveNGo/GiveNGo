import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, Input, Card } from '@ui-kitten/components';

export default function RequestPage({ navigation }: any): React.ReactElement {
  const [requests, setRequests] = useState([]);
  const [accepted, setAccepted] = useState(false);

  return (
    <Layout>
      <View>
        <Text style={{ margin: 1 }} category="h2">
          Submit your request for a donation from your neighbors!
        </Text>
      </View>
      <Card style={styles.card}>
        <Input placeholder="Enter your request..." />
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
    flex: 1,
    margin: 2,
    height: 400,
  },
});
