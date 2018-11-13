
# Instance de Vue

## Création
```js
var vm = new Vue({
  // options
})
```
Le Vue-Modèle dans MVVM

## Données et méthodes
```js
var data = { a: 1 };
// L'objet est ajouté à une instance de Vue
var vm = new Vue({
  data: data
})
// Récupérer la propriété depuis l'instance
// retourne celle des données originales
vm.a == data.a // => true
vm.a = 2
data.a = 3
```
Quand ces données changent, le rendu de la vue est refait. Il est à noter que les propriétés dans data sont **réactives**

## Cycle de vie d'une instance
<div  class="scrollable">
<img src="img/lifecycle.png" alt="Instance lifecycle"/>
</div>

### Exemple 
```js
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` est une référence à l'instance de vm
    console.log('a is: ' + this.a)
  },
  mounted: function () {
    // `this` est une référence à l'instance de vm
    console.log("i'm mounted")
  }
})
```