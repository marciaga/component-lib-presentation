import React from 'react';
import { Notes, List, ListItem, Heading, Slide } from 'spectacle';

export default (
  <Slide>
    <Notes>
      a class name is a mapping from a group of styles and a DOM node,
      e.g. "btn" references some styles and is applied to buttons
      so why do we even need this when we have components?
      we can do without using "btn" and all class names with components.
      that's what is meant by "styled-components removes the mapping between styles and components"
      <ListItem>Built-in Theming (outside scope of this talk)</ListItem>
      <ListItem>Works with React Native (outside scope of this talk)</ListItem>
    </Notes>
    <Heading
      size={2}
      textColor="cyan"
    >
      Styled Components
    </Heading>
    <List>
      <ListItem>Creates a low-level component, e.g. div, h1, and a stylesheet</ListItem>
      <ListItem>Write real CSS, rather than JS object syntax</ListItem>
      <ListItem>Automatic vendor-prefixing</ListItem>
      <ListItem>Sass syntax</ListItem>
    </List>
  </Slide>
);
