# React Dripicons
`react-dripicons` is a free SVG icon library, built for React. It is a port of the [Dripicons](http://demo.amitjakhu.com/dripicons/) icon pack by [Amit Jakhu](http://amitjakhu.com/).

Inspired by the popular [react-feather](https://github.com/feathericons/react-feather) library.

### Installation

**npm**

    npm install react-dripicons

**yarn**

    yarn add react-dripicons


### Usage

```js
import { Document } from 'react-dripicons';

const MyComponent = () => (
  <Document color="#0224AD" size={32} />
);
```


Any SVG attribute can be passed in as well:
```js
import { Document } from 'react-dripicons';

const MyComponent = () => (
  <Document size={32} strokeWidth={3} />
);
```


You can include the entire icon pack (but you probably shouldn't):
```js
import * as Icons from 'react-dripicons';

const MyComponent = () => (
  <Icons.Document />
);
```

If your project does not support ES6 imports, use the `dist` folder:
```js
var Document = require('react-dripicons/dist/icons/document').default;
```
