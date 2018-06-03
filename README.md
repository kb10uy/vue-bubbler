# vue-bubbler
[![CircleCI](https://circleci.com/gh/kb10uy/vue-bubbler/tree/master.svg?style=svg)](https://circleci.com/gh/kb10uy/vue-bubbler/tree/master)

A Vue plugin that enables bubbling of custom events
[vue-bubbler - npm](https://www.npmjs.com/package/vue-bubbler)

## Usage
### 1. Install package
```sh
npm install vue-bubbler
```

### 2. Vue.use it
```js
import Vue from 'vue';
import VueBubbler from 'vue-bubbler';

Vue.use(VueBubbler);
// Now all custom events will be propagated to parent components
```

### 3. Emit and receive custom events!

## License
The MIT License.
