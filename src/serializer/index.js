import SpanBlock from '../types/Span.vue';
import EmBlock from '../types/Em.vue';
import LinkBlock from '../types/Link.vue';
import StrongBlock from '../types/Strong.vue';
import StrikeBlock from '../types/Strike.vue';
import UnderlineBlock from '../types/Underline.vue';
import CodeBlock from '../types/Code.vue';

const serializer = {
  'span': SpanBlock,
  'em': EmBlock,
  'strong': StrongBlock,
  'strike-through': StrikeBlock,
  'code': CodeBlock,
  'underline': UnderlineBlock,
  'link': LinkBlock
}

export default serializer;
