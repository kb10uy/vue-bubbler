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
```

### 3. Emit custom events with `vm.$bubble` instead of `vm.$emit`

```js
{
    // ...
    methods: {
        foo() {
            // You can add extra arguments, of course
            this.$bubble('foo-called');
        }
    }
}
```

## Options

```js
Vue.use(VueBubbler, {
    shouldPropagate(child, parent, event, args) {
        // You should return true if you want components to propagate custom events.
        // By default this is undefined, all events will be propagated.
        return true;
    },

    // When true, vue-bubbler will NOT add new "$bubble" instance method,
    // instead overrides existing "$on" instance method.
    override: false,
});
```

## Sealing Extension

vue-bubbler includes official extension `vue-bubbler/sealing`.

This adds `vm.$sealed` custom property, which decides whether the component propagates custom events by `$bubble` method.

### Usage

In bootstrap:

```js
import Vue from 'vue';
import VueBubbler from 'vue-bubbler';
import { preventSealedComponents } from 'vue-bubbler/sealing';

Vue.use(VueBubbler, {
    shouldPropagate: preventSealedComponents,
});
```

In component:

```js
import Vue from 'vue';
import { sealed } from 'vue-bubbler/sealing';

Vue.extend({
    // Now this component prevent propagation with $bubble.
    mixins: [sealed(true)],
    // ...
});
```

## License

The MIT License.
