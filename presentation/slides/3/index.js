import React from 'react';
import { Notes, Heading, Link, Slide, List, ListItem } from 'spectacle';

export default (
  <Slide
    transition={['fade']}
    align="center top"
  >
    <Notes>Kill this presentation</Notes>
    <Heading
      size={1}
      caps
    >
      Solutions
    </Heading>
    <List>
      <ListItem>
        <Link
          href="https://storybook.js.org/"
          target="_blank"
        >
          React Storybook
        </Link>
      </ListItem>
      <ListItem>
        <Link
          target="_blank"
          href="https://formidable.com/open-source/component-playground/"
        >
          Component Playground
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="http://scup.github.io/atellier/"
          target="_blank"
        >
          Atellier
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://react-cosmos.github.io/"
          target="_blank"
        >
          React Cosmos
        </Link>
      </ListItem>
    </List>
  </Slide>
);
