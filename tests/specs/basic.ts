import { mount, createLocalVue } from '@vue/test-utils';
import VueBubbler from '../../src';
import ComponentParent from '../components/parent';

const vuePlain = createLocalVue();
const vuePowered = createLocalVue();
vuePowered.use(VueBubbler);

describe('basic event propagation', () => {
    test('Plain Vue does NOT propagate custom events', () => {
        const wrapper = mount(ComponentParent, { localVue: vuePlain });
        const button = wrapper.find('button#grandchild');
        button.trigger('click');

        expect(wrapper.vm.$data.status).toBe('NG');
    });
    test('Powered Vue does propagate custom events', () => {
        const wrapper = mount(ComponentParent, { localVue: vuePowered });
        const button = wrapper.find('button#grandchild');
        button.trigger('click');

        expect(wrapper.vm.$data.status).toBe('OK');
    });
});
