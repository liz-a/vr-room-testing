'use strict';

import React from 'react';
import { AppRegistry, asset, Pano, Text, Image, View } from 'react-vr';
const VrButton = require('VrButton');

import CylindricalPanel from 'CylindricalPanel';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  render() {
    return (
      <VrButton
        onClick={() => {
          this.setState({ open: !this.state.open });
        }}
      >
        <Image
          style={{
            borderRadius: 20,
            height: this.state.open ? 120 : 60,
            margin: 10,
            width: this.state.open ? 200 : 100
          }}
          source={{
            uri: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
      </VrButton>
    );
  }
}

class CylindricalPanelDemo extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <CylindricalPanel layer={{ width: 2000, height: 720 }} style={{ position: 'absolute' }}>
          <View
            style={{
              opacity: 1,
              width: 2000,
              height: 720,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row'
            }}
          >
            <Image
              style={{
                borderRadius: 20,
                backgroundColor: '#123123',
                borderWidth: 3,
                width: 300,
                height: 150,
                opacity: 1,
                padding: 5
              }}
              source={{
                uri: 'https://i.imgur.com/Qe8rqGa.png'
              }}
            />
            <Image
              style={{
                borderRadius: 20,
                backgroundColor: '#123123',
                borderWidth: 3,
                width: 300,
                height: 150,
                opacity: 1,
                padding: 5

              }}
              source={{
                uri: 'https://i.imgur.com/OmAQLYt.jpg'
              }}
            />
            <Button />
          </View>
        </CylindricalPanel>
      </View>
    );
  }
}

AppRegistry.registerComponent('CylindricalPanelDemo', () => CylindricalPanelDemo);