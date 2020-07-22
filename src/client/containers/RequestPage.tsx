import React, { useEffect, useState } from 'react';
import { Button, Layout, Text, Input, Card } from '@ui-kitten/components';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function RequestPage({ navigation }: any): React.ReactElement {
  const [requests, setRequests] = useState([]);
  const [accepted, setAccepted] = useState(false);

  const getRequests = async () => {};

  return (
    <Layout>
      <NavBar />
      <Card>
        <Input placeholder="Enter your request..." />
        <Button size="small" status="basic">
          Submit
        </Button>
      </Card>
      <Footer />
    </Layout>
  );
}
