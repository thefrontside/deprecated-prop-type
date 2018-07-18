# deprecated-prop-type

`deprectated` prop type communicates to the developer that the marked prop should not be used. 

## Installation

```bash
yarn add deprecated-prop-type

# 

npm --save deprecated-prop-type
```

## Usage

`deprecated` prop type takes two arguments: original prop type and reason for the deprecation. It will not show the warning if the original prop type failes. 

```jsx
import React from 'react';
import propTypes from 'prop-types';
import deprecated from 'deprecated-prop-type';

export default class MyComponent extends React.Component {
  static propTypes = {
    excludeDates: deprecated(propTypes.string, `Use excluded instead.`)
  }

  ...
}
```

## Tests

```bash
npm install;
npm test
```

## Credits

The code was taken from https://reactjs.org/warnings/dont-call-proptypes.html#fixing-the-false-positive-in-third-party-proptypes