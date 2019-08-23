/*
 *  Copyright (c) 2016-present Invertase Limited & Contributors
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this library except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/* eslint-disable no-console */
import React, { useEffect, Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Text } from 'react-native';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/notifications';

function Root() {
  async function init() {
    const returnedNotification = await firebase.notifications().displayNotification({
      notificationId: Math.random().toString(10),
      title: 'Hello',
      subtitle: 'World',
      body: 'foobarbazdaz test test',
      channelId: 'foo2',
    });

    console.warn(JSON.stringify(returnedNotification));
  }

  useEffect(() => {
    init().catch(console.error);
  }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      <Text>Hello from Notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    height: 120,
    marginBottom: 16,
    width: 135,
  },
});

AppRegistry.registerComponent('testing', () => Root);
