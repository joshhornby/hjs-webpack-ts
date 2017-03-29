import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './Test.tsx';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Test foo="I am a string" />
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
