# Composants

Abstraction permettant de créer des composaants réutilisables et autonomes. (une applications = arbre de composants)  
Un composant = une instance de vue avec des options (propriétés)  
  
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

## Les "props"


## Methods vs computed
`methods` sont des méthodes. Elles sont systèmatiquement toutes appelées lorsque l'une d'elle est appelée. Prend des paramètres.  
`computed` sont des propriétés compilées => la propriété est ré-évaluée seulement si une de ses dépendance change. Ne prend pas de paramètre. Lors de l'instanciation de la vue, elles sont converties sous forme de propriété
  
Conclusion : si les données doivent être mise en cache, utiliser les propriétés computed, sinon methods.