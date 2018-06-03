import { mount, createLocalVue } from '@vue/test-utils';
import VueBubbler from '../../src';
import { preventSealedComponents } from '../../src/sealing';
import SealedParent from '../components/sealed-parent';

const vuePowered = createLocalVue();
vuePowered.use(VueBubbler, {
    shouldPropagate: preventSealedComponents,
    override: false,
});

describe('sealing extension', () => {
    test('Sealed child does NOT propagate custom events', () => {
        const wrapper = mount(SealedParent, { localVue: vuePowered });
        const button = wrapper.find('button#grandchild');
        button.trigger('click');

        expect(wrapper.vm.$data.status).toBe('NG');
    });
});
