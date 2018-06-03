import Parent from './parent';

export default {
    components: { Parent },
    template: `<div><h1>Grandparent: { status }</h1><parent v-on:grandchild="propagated" /></div>`,

    data() {
        return {
            status: 'Nein',
        };
    },
    methods: {
        propagated() {
            this.status = 'Ja';
        },
    },
};
