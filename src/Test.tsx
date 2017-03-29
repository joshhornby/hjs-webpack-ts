import * as React from 'react';

interface TestInterface {
  foo: boolean;
}

export const Test: React.SFC<TestInterface> = ({ foo }) => <p>{foo}</p>;
