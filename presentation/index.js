import React from 'react';
import { Deck } from 'spectacle';
import t from 'spectacle-theme-nova/bundle';
import * as slides from './slides';

const theme = t();

const slideImports = Object.keys(slides).reduce((arr, v, i) => {
  arr[i] = slides[v];

  return arr;
}, []);

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: slideImports,
    };
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
        {this.state.slides.map((slide, i) => React.cloneElement(slide, { key: `slide_${i}` }))}
      </Deck>
    );
  }
}
