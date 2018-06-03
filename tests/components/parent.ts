import Child from './child';

export default {
    components: { Child },
    template: `<div><h1>Parent: { status }</h1><child v-on:grandchild="propagated" /></div>`,

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
