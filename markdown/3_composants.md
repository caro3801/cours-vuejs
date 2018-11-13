# Composants

Abstraction permettant de créer des composaants réutilisables et autonomes. 
> une applications = arbre de composants  
  
![alt text](./img/components.png "Composition application")

## Le composant  
Un composant = une instance de Vue  
  
```js
Vue.component('todo-item', {
  template: '<li>Ceci est une liste</li>'
})
```
Insertion dans un autre composant
```html
<ol>
  <!-- Crée une instance du composant todo-list -->
  <todo-item></todo-item>
</ol>
```
et avec des options (propriétés) ?

## Les props
```js
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```
Le composant `todo-item` accepte maintenant une «**prop**» (propriété) qui est comme un attribut personnalisé. Cette prop est appelée `todo`.

## Les props : exemple
```html
<div id="maliste">
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>
  </ol>
</div>
```
```js
var malistedecourses = new Vue({
  el: '#maliste',
  data: {
    groceryList: [
      { id: 0, text: 'Légumes' },
      { id: 1, text: 'Fromage' },
      { id: 2, text: 'Oeufs' }
    ]
  }
})
```

### Composants Vue et Custom Elements

Parallèle composants Vue et Custom Elements (spec Web Components) :
* Syntaxe proche
* La spec des WC est finalisée mais pas implémentée (pas besoin de polyfill avec Vue)
* Un composant de Vue peut etre implémenté a l'interieur d'un élément natif
* Fonctionnalités supplémentaires das les composants de Vue (flux de données, event personnalisé, integration des outils de build)

## Methods vs computed
`methods` sont des méthodes. Elles sont systèmatiquement toutes appelées lorsque l'une d'elle est appelée. Prend des paramètres.  
`computed` sont des propriétés compilées => la propriété est ré-évaluée seulement si une de ses dépendance change. Ne prend pas de paramètre. Lors de l'instanciation de la vue, elles sont converties sous forme de propriété
  
Conclusion : si les données doivent être mise en cache, utiliser les propriétés computed, sinon methods.