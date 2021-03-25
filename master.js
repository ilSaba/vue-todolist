var app = new Vue({

    el: '#root',
    data: {
        input: '',
        todos: [
            {
                title: 'Completare esercitazione di ieri',
                status: 'todo',
            },
            {
                title: 'Andare al supermercato',
                status: 'todo',
            },
            {
                title: 'Riunione alle ore 9:00',
                status: 'done',
            },
            {
                title: 'Cena da nonna',
                status: 'todo',
            },
            {
                title: 'Annaffiare la piante',
                status: 'done',
            },
        ],
    },

    computed: {
        todoComputed: function () {
            todosDone = this.todos.filter ((todo) => todo.status == 'done');
            todosTodo = this.todos.filter ((todo) => todo.status == 'todo');
            return [...todosTodo, ...todosDone];
        }
    },

    methods: {
        add: function () {
            if (this.input != '') {
                let obj = {
                    title: this.input,
                    status:'todo',
                }
                this.todos.push(obj);
                this.input = '';
            }
        },
        check: function (todo) {
            let index = this.todos.indexOf(todo);
            this.todos [index].status = 'done';
        },
        remove: function (todo) {
            let index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        }
    }

});