import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Card, Text } from '@ui-kitten/components';
import * as types from '../Reducer/actionsTypes';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserId,
  setUserName,
  setAnonymous,
  setEmail,
  setAddress,
  setKarma,
  setUserRequests,
  setUserTasks,
  setAppTasks,
  setCurrentTask,
} from '../Reducer/actions';
import { ScrollView } from 'react-native-gesture-handler';

const CodeOfConductPage = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const userName = useSelector((state: { userName: any }) => state.userName);
  // const { userId, userName, anonymous, email, address, karma, userRequests,userTasks, appTasks } = store;
  return (
    <ScrollView>
      <Layout
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white-ish',
        }}
      >
        <Card style={styles.card}>
          <Text category="h5" style={styles.text}>
            Give 'n' Go{'\n'} Code of Conduct
          </Text>
          <Text category="p1" style={styles.text}>
            {'\n'}In the interest of fostering an open and welcoming environment
            where people feel comfortable requesting help, we ask all
            participants to make our community a harassment-free experience for
            everyone, regardless of age, ethnicity, gender identity and
            expression, body, size, disability, level of education,
            socio-economic status, nationality, personal appearance, religion,
            or sexual identity and orientation. {'\n'}
          </Text>
          <Text category="h5" style={styles.text}>
            Our Standards
          </Text>
          <Text category="p1" style={styles.text}>
            {'\n'}Above all, be a good neighbor. {'\n'}
          </Text>
          <Text category="p1" style={styles.text}>
            On interactions with other members: {'\n'}
          </Text>
          <Text category="p1" style={styles.text}>
            In using Give 'n' Go to request and donate items, you, and not Give
            'n' Go, are responsible for your own decisions and actions. You
            agree to share your location once you make a request so that a donor
            can deliver any items that you have requested. You may choose on
            your profile to remain anonymous if you would like your profile,
            name, etc. to remain private. {'\n'}
            {'\n'}
            In addition, you alone are responsible for any documentation or of
            tax-deductible donations. Give 'n' Go is not a party to transactions
            or disputes between members.
          </Text>
        </Card>
      </Layout>
    </ScrollView>
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
