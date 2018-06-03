import { mount, createLocalVue } from '@vue/test-utils';
import VueBubbler from '../../src';
import Parent from '../components/parent';
import Grandparent from '../components/grandparent';

const vuePlain = createLocalVue();
const vuePowered = createLocalVue();
const vueOverriden = createLocalVue();
vuePowered.use(VueBubbler);
vueOverriden.use(VueBubbler, { override: true });

describe('basic event propagation', () => {
    test('Powered Vue does propagate custom events', () => {
        const wrapper = mount(Parent, { localVue: vuePowered });
        const button = wrapper.find('button#grandchild');
        button.trigger('click');

        expect(wrapper.vm.$data.status).toBe('OK');
    });

    test('Powered Vue does propagate custom events more than 4 steps', () => {
        const wrapper = mount(Grandparent, { localVue: vuePowered });
        const button = wrapper.find('button#grandchild');
        button.trigger('click');

        expect(wrapper.vm.$data.status).toBe('Ja');
    });
});
