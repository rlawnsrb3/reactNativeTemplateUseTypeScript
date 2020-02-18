/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
  Header,
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

const ScrollView = Styled.ScrollView`background-color:${Colors.lighter};`;
const Body = Styled.View`background-color:${Colors.white};`;

const SectionContainer = Styled.View`marginTop:32px; paddingHorizontal:24px;`;

const SectionDescription = Styled.Text`marginTop:8px; fontSize:18px; fontWeight:400; color:${Colors.dark};`;

const HighLight = Styled.Text`fontWeight:700;`;

interface Props {}

const App = ({}: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionDescription>Step One</SectionDescription>
              <SectionDescription>
                Edit<HighLight>App.js</HighLight> to change this screen and then
                come back to see your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>See Your Changes</SectionDescription>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
