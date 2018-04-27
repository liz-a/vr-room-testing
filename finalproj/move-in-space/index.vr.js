'use strict';

import React from 'react';
import { AppRegistry, asset, Pano, Text, Image, View } from 'react-vr';
const VrButton = require('VrButton');
import CylindricalPanel from 'CylindricalPanel';


var AUTH_KEY = '8825240-c7cbb4a0c138d3f87d226a813';



const imgArr = ['https://pixabay.com/get/e830b0062bf3053ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/e834b40b2cf2093ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/ea35b60e2bf7053ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/eb32b90a28f3053ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/ea3db5092cf31c22d2524518b7444e94e675e6d504b0144391f8c270a0eeb0_1280.jpg',
  'https://pixabay.com/get/e133b80f2bf61c22d2524518b7444e94e675e6d504b0144391f8c270a0eeb0_1280.jpg',
  'https://pixabay.com/get/ea36b10c21f4033ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/ea37b60629f0093ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/ea34b70d2efd023ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/ea34b70d2efd073ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/e837b10629f6083ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/eb30b80f21fd023ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/ea34b70d2cf2063ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/ea30b40a2be90021d85a5854ee444493e173e2c818b413459df3c87ea4e8_1280.png',
  'https://pixabay.com/get/ea37b50b29f1023ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/eb37b80c20fd013ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/ea35b60d28f5073ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/eb31b30c21f6003ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg',
  'https://pixabay.com/get/eb31b10b2afc073ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.png',
  'https://pixabay.com/get/ea35b80e2ef5063ed1584d05fb1d4e9ee172e0d119ac104497f4c97aaeeab6bd_1280.jpg']


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
  state = {
    imgs: []
  }

  componentDidMount() {
    let imgs = this.fetchImage()
    this.setState({ imgs })
  }

  fetchImage = () => {
    fetch(`https://pixabay.com/api/?key=${AUTH_KEY}&q=yellow+flowers&image_type=photo`)
      .then((res) => {
        let imgs = res.json()
        return imgs
      })
      .then((imgs) => {
        console.log(imgs)
      })
  }

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
              flexDirection: 'row',
              margin: 10
            }}
          >
            {imgArr.map((img) => {
              return <Image style={{
                borderRadius: 20,
                backgroundColor: '#123123',
                borderWidth: 3,
                width: 200,
                height: 200,
                opacity: 1,
                padding: 5

              }}
                source={{
                  uri: img
                }} />
            })}
            <Button />
          </View>
        </CylindricalPanel>
      </View>
    );
  }
}

AppRegistry.registerComponent('CylindricalPanelDemo', () => CylindricalPanelDemo);