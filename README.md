# block-content-to-vue

Dynamically render Vue.js components from [Sanity](https://www.sanity.io/).

## Installation

```js
npm i --save block-content-to-vue
```

### Import as module

```js
import BlockContent from 'block-content-to-vue';
```

### Use via cdn

Include the script file, then install the component with `Vue.use(BlockContent);` e.g.:

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/block-content-to-vue"></script>
<script>
  Vue.use(BlockContent);
</script>
```

## Usage

The component requires the props `blocks` and `serializer`.

```html
<block-content :blocks="blocks" :serializer="serializer" />
```

`blocks` must be an array of content blocks from a Sanity query response e.g.:

```js
[
  {
    _id: 12345, // required
    _type: 'heading-block',
    heading: 'The heading!',
    subtitle: 'The subtitle'
  },
  {
    _id: 12346, // required
    _type: 'two-column-block',
    leftColumn: 'Left column content',
    rightColumn: 'Right column content'
  }
]
```

`serializer` is an object describing the components you want to render based on the Sanity block's `_type` value.
For now the serializer supports all custom types you define yourself in the schema, and the types `span`, `em`, `underline` and `strike-through`.
The regular types like `span` receive the prop `fields` with all it's properties inside.

```js
import Heading from '@/components/Heading.vue';
import TwoColumn from '@/components/TwoColumn.vue';
import Span from '@/components/Span.vue';
import Underline from '@/components/Underline.vue';

const serializer = {
  'heading-block': Heading,
  'two-column-block': TwoColumn,
  'span': Span,
  'underline': Underline,
}
```


The block-content-to-vue component will automatically make the properties of each block available as props in your component.

Let's have a look at the `Heading` component.

```html
<template>
  <div>
    <h1>{{heading}}</h1>
    <p>{{subtitle}}</p>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    heading: String,
    subtitle: String,
  },
};
</script>
```

We can now define the props our component will receive, and we can type-check each of them.
We can also use internal state and all the other good stuff from a regular Vue.js component.

## Implementation example

```html
<template>
  <div id="app">
    <BlockContent :blocks="post['contentBlock']" :serializer="serializer" />
  </div>
</template>

<script>
import sanity from '@/sanity';
import BlockContent from "block-content-to-vue";

import Heading from "./components/heading.vue";
import Button from './components/button.vue'

const query = `*[_type == "post"] {
  _id,
  contentBlock
}
`

const serializer = {
  'heading': Heading,
  'button': Button,
}

export default {
  name: "App",
  components: { BlockContent },
  data() {
    return {
      post: {},
      serializer,
    };
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      sanity.fetch(query).then(posts => {
        this.post = posts[0]
      });
    }
  }
};
</script>
```
