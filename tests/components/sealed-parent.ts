import SealedChild from './sealed-child';

export default {
    components: { SealedChild },
    template: `<div><h1>Parent: { status }</h1><sealed-child v-on:grandchild="propagated" /></div>`,

    data() {
        return {
            status: 'NG',
        };
    },
    methods: {
        propagated() {
            this.status = 'OK';
        },
    },
};
