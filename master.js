var app = new Vue({

    el: '#root',
    data: {
        input: '',
        todos: [
            {
                title: 'Completare esercitazione di ieri',
            },
            {
                title: 'Andare al supermercato',
            },
            {
                title: 'Riunione alle ore 9:00',
            },
            {
                title: 'Cena da nonna',
            },
            {
                title: 'Annaffiare la piante',
            },
        ],
    },

    methods: {
        add: function () {
            if (this.input != '') {
                let obj = {
                    title: this.input
                }
                this.todos.push(obj);
                this.input = '';
            }
        }
    }
});