import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Layout,
  Text,
  Input,
  Card,
  Radio,
  RadioGroup,
} from '@ui-kitten/components';

export default function RequestPage({ navigation }: any): React.ReactElement {
  const [request, setRequest] = React.useState<string>('');
  const [selectedIndex, setSelectedIndex] = React.useState<number>();

  function addRequest() {
    fetch('/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        taskBody: request,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('request submitted: ', data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    navigation.navigate("Give'N'Go", { screen: 'Home' });
  }

  return (
    <Layout>
      <Text style={styles.text} category="h6">
        Submit your request for a donation from your neighbors!
      </Text>
      <Card style={styles.card}>
        <Input
          multiline={true}
          textStyle={{ minHeight: 100 }}
          placeholder="Enter your request..."
          value={request}
          onChangeText={setRequest}
        />
        <Text style={{ marginTop: 8, marginBottom: 5 }} category="s1">
          Select the type of request:
        </Text>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={(index: number) => setSelectedIndex(index)}
        >
          <Radio>Grocery</Radio>
          <Radio>Pharmacy</Radio>
          <Radio>Clothing</Radio>
          <Radio>Household</Radio>
          <Radio>Pets</Radio>
          <Radio>Other</Radio>
        </RadioGroup>

        <Button
          style={{ marginTop: 10 }}
          size="small"
          status="primary"
          onPress={addRequest}
        >
          Submit
        </Button>
      </Card>
    </Layout>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 2,
    height: '100%',
    borderColor: 'transparent',
  },
  text: {
    color: 'rgb(51, 102, 255)',
    marginTop: 20,
    margin: 10,
    textAlign: 'center',
  },
  radio: {
    fontSize: 12,
    fontWeight: '100',
  },
});
