import React from 'react';
import { Heading, Slide, List, ListItem, Notes } from 'spectacle';

export default (
  <Slide
    transition={['fade']}
    align="center top"
  >
    <Notes>
      Modularity & Reusability:&nbsp;
      eliminate the application-specific dependency of component development by forcing isolation
      <br />
      Faster & Easier: less time spent building and integrating -&nbsp;
      no need to wait for entire app to reload
      <br />
      Consistency: canonical source of UI design elements and standardized APIs
      <br />
      Testing: easier to test components since they&apos;re more &quot;functional&quot;
    </Notes>
    <Heading
      size={2}
      textColor="cyan"
    >
      What&apos;s a Component Library and why would I want one?
    </Heading>
    <List>
      <ListItem>Modularity & Reusability</ListItem>
      <ListItem>Faster & Easier</ListItem>
      <ListItem>Consistency</ListItem>
      <ListItem>Testing</ListItem>
    </List>
  </Slide>
);
