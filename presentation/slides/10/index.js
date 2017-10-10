import React from 'react';
import { Link, Text, List, ListItem, Heading, Slide } from 'spectacle';

export default (
  <Slide>
    <Heading
      size={2}
      textColor="cyan"
    >
      What now?
    </Heading>
    <List>
      <ListItem>Get this thing publishable</ListItem>
      <ListItem>Profit</ListItem>
    </List>
    <Text>
      This presentation uses Spectacle and the source code is&nbsp;
      <Link
        href="https://github.com/marciaga/component-lib-presentation"
        target="_blank"
      >
        here.
      </Link>
    </Text>
    <Text>
      The React Cosmos demo source code is&nbsp;
      <Link
        href="https://github.com/marciaga/cosmos-demo"
        target="_blank"
      >
        here
      </Link>
      &nbsp;and a live version is&nbsp;
      <Link
        href="https://marciaga.github.io/cosmos-demo/"
        target="_blank"
      >
        here.
      </Link>
    </Text>
    <Text>
      Contact me at mark.arciaga@gmail.com, find me on&nbsp;
      <Link
        href="https://github.com/marciaga"
        target="_blank"
      >
        GitHub
      </Link>
    </Text>
  </Slide>
);
