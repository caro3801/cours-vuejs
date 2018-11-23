document.addEventListener("DOMContentLoaded", () => {
    //creation d'une instance de vue
 instance();
    //markdown();
})

const instance = () => {
    var dataObject = { 
        message:"toto",
        a: 1,
        datetitle:'Je me suis affiché '+ new Date().toLocaleString(),
        parentMessage:"parentMessage",
        items: [{ message: "Foo" }, { message: "Bar" }],
        seen:true
    };
    // L'objet est ajouté à une instance de Vue
    var vm = new Vue({
        el:"#app",
        data: dataObject,
        created: function () {
            // `this` est une référence à l'instance de vm
            this.message = 'i m created and a is: ' + this.a
        },
        mounted: function () {
            this.message+= " and now i'm mounted";
        }
    })
    // Récupérer la propriété depuis l'instance
    // retourne celle des données originales
    console.log(vm.a == dataObject.a) // => true
    vm.a = 2;
    console.log(vm.a, dataObject.a);
    dataObject.a = 3
    console.log(vm.a, dataObject.a);
}
const markdown = () => {
    new Vue({
        el: '#editor',
        data: {
            input: '# hello',
            mounted: false
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.input, { sanitize: true })
            }
        },
        methods: {
            update: _.debounce(function (e) {
                this.input = e.target.value
            }, 300)
        }
    })
}