import Grandchild from './grandchild';
import { sealed } from '../../src/sealing';

export default {
    mixins: [sealed(true)],
    components: { Grandchild },
    template: `<div><h2>Child</h2><grandchild /></div>`,
};
