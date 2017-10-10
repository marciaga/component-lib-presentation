import React from 'react';
import { Heading, Slide, List, ListItem, Notes } from 'spectacle';

export default (
  <Slide
    transition={['fade']}
    align="center top"
    fit
  >
    <Notes>
      <List>
        <ListItem>
          Fixtures let you mock component inputs and external dependencies (e.g. API responses,
          localStorage, etc). You provide props (context, state) to see your component rendered in
          different possible states
        </ListItem>
        <ListItem>
          Components respond to updates in props/state in real-time
        </ListItem>
        <ListItem>
          Sanity
          When you build a component, you&apos;re forced to think about its API, data requirements
        </ListItem>
        <ListItem>
          Proxies let you mock common actions like fetching data, local storage, Redux, React-Router
        </ListItem>
        <ListItem>
          Works with Create React App, NextJS, React Boilerplate, React Redux starter
        </ListItem>
        <ListItem>
          Deployable via building the app
        </ListItem>
      </List>
    </Notes>

    <Heading
      size={3}
      caps
      textColor="cyan"
    >
      React Cosmos
    </Heading>
    <List>
      <ListItem>Fixtures</ListItem>
      <ListItem>Real-time responsiveness</ListItem>
      <ListItem>Sanity</ListItem>
      <ListItem>Proxies</ListItem>
      <ListItem>Integration with React framework/boilerplate</ListItem>
      <ListItem>Exportable as static assets</ListItem>
      <ListItem>
        This is CDD - Component-Driven Development
      </ListItem>
    </List>
  </Slide>
);
