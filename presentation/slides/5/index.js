import React from 'react';
import { Notes, List, ListItem, Heading, Slide } from 'spectacle';

export default (
  <Slide>
    <Notes>
      <List>
        <ListItem>Add test dependencies</ListItem>
        <ListItem>jest react-test-renderer react-cosmos-loader</ListItem>
        <ListItem>Now you can load fixtures in your tests with react-cosmos-loader!</ListItem>
      </List>
    </Notes>
    {/* Begin slide */}
    <Heading
      size={2}
      textColor="cyan"
    >
      Let&apos;s look at a basic React Cosmos setup
    </Heading>
    <List>
      <ListItem>Atomic vs Composite Components</ListItem>
      <ListItem>Create Fixtures</ListItem>
      <ListItem>Modify Props</ListItem>
      <ListItem>Modify State (React classes)</ListItem>
      <ListItem>Add some tests</ListItem>
    </List>
  </Slide>
);
