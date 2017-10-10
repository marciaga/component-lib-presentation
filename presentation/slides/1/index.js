import React from 'react';
import { Notes, Heading, Slide, Text } from 'spectacle';

export default (
  <Slide>
    <Notes>Say what FlighStats is/does.
      Say: first we will talk about React Cosmos and then move on to Styled Components
      and see how the two come together to build a component library.
    </Notes>

    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
    >
      Building a Component Library
    </Heading>
    <Heading
      size={3}
      textColor="secondary"
    >
      (with Styled Components and React Cosmos)
    </Heading>
    <Text
      margin="30px 0 0"
      textColor="gray5"
      size={3}
      fit
    >
      Mark Arciaga, Software Engineer at FlightStats
    </Text>
  </Slide>
);
