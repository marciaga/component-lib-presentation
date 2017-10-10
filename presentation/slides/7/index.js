import React from 'react';
import { CodePane, Heading, Slide } from 'spectacle';
import code from 'raw-loader!../../../assets/ttl.example'; // eslint-disable-line

export default (
  <Slide>
    <Heading
      size={3}
      textColor="cyan"
    >
      A Quick Primer on ES6 Tagged Template Literals
    </Heading>
    <CodePane lang="javascript" style={{ overflowY: 'scroll', maxHeight: '500px' }}>
      {code}
    </CodePane>
  </Slide>
);
