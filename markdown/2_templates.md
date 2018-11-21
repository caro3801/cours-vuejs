# Rendu déclaratif dans le DOM

Syntaxe de template (ex. interpolation de texte):
```html
<!--template-->
<div id="app">
  {{ message }}
</div>
```
```js
//script js
let app = new Vue({
    el: "#app",
    data: {
        message: "Hello World !"
    }
});
```
```txt
Hello World !
```

## Templates
-   Les templates sont basés sur la syntaxe HTML (déclaratif)
-   Liaison (binding) entre le DOM rendu et les données de l'instance Vue
-   HTML valide (spec-compliant)
-   Le template est compilé sous la forme de fonctions de rendu dans le _virtual DOM_.
  
_possibilité d'utiliser JSX (voir cours react)_

## Binding de données
Liaison d'un attribut d'un élément
```html
<!--template-->
<div id="app">
  <span v-bind:title="message">Hello again !</span>
</div>
```
```js
//script js
let app = new Vue({
  el: '#app',
  data: {
    message: 'Je me suis affiché ' new Date().toLocaleString();
  }
})
```
Que se passe-t-il?

L'attribut `v-bind` est une des **directives** de Vue. Elle permet de lier l'attribut à une valeur dynamique (`v-bind` peut être abrégé par "`:`").
```html
<!--template-->
<div id="app">
  <span :title="message">Hello again !</span>
</div>
```

## Directive
Une **directive** est un attribut spécial fourni par le framework ; elle applique un comportement _réactif_ spécifique au DOM après rendu.
Dans Vue, les directives sont préfixées par `v-`.
  
_Remarque : côté un peu magique du framework avec la liaison "automatique" des données et de la vue._

### Rendu conditionnel

#### Directive `v-if`, `v-else`
<pre><code class="html" data-trim contenteditable >
<div id="app-3">
  <p v-if="seen">Maintenant vous me voyez</p>
  <p v-else>Ou pas</p>
</div>
</code></pre>
<pre><code class="javascript" data-trim contenteditable >
let app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
</code></pre>
  
et le `v-else-if`?

#### Directive `v-show`
`v-show` : toujours rendu, permutation basée sur du CSS.  
Le `v-if` est un vrai rendu conditionnel (construction/destruction des listeners). Ne se rend que quand la condition est vraie pour la première fois.

#### Binding sur les classes (style)
Liaison de Classes HTML  
Il est possible de passer un objet à v-bind:class pour permuter les classes automatiquement :
<pre><code class="html" data-trim contenteditable >
<div id="app-3">
  <p v-if="seen" :class="{active:seen}">Maintenant vous me voyez</p>
  <p v-else>Ou pas</p>
</div>
</code></pre>

### Rendu de listes (boucles)

#### Directive `v-for` sur un tableau
```html
<ul id="maliste-1">
  <li v-for="item in items">
      <!-- item est un alias de l'élément en cours d'itération-->
    {{ item.message }}
  </li>
</ul>
```
```js
let maliste = new Vue({
    el: "#maliste-1",
    data: {
        items: [{ message: "Foo" }, { message: "Bar" }]
    }
});
```
```txt
• Foo
• Bar
```

#### Directive `v-for` sur un tableau
```html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```
```js
new Vue({
    el: "#iterobject",
    data: {
        parentMessage: "Parent",
        items: [{ message: "Foo" }, { message: "Bar" }]
    }
});
```
Qu'est-ce qui s'affiche?

#### Directive `v-for` sur un object
```html
<ul id="iterobject">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```
```js
new Vue({
    el: "#iterobject",
    data: {
        object: {
            firstName: "John",
            lastName: "Doe",
            age: 30
        }
    }
});
```
Qu'est-ce qui s'affiche?

#### Directive `v-for` sur un object
```html
<ul id="iterobject">
  <li v-for="(value, key, index) in object">
     {{ index }}. {{ key }}: {{ value }}
  </li>
</ul>
```
```js
new Vue({
    el: "#iterobject",
    data: {
        object: {
            firstName: "John",
            lastName: "Doe",
            age: 30
        }
    }
});
```
Qu'est-ce qui s'affiche?

#### Directive `v-for` et les `key`
La mise à jour d'une liste peut etre coûteuse. Dans Vue pour aider à traquer les modifications, l'attribut `key` permet à Vue de suivre l'identité de chaque noeud (doit être unique). Si `key` est une valeur dynamique, il faut utiliser `v-bind`.
```html
<div v-for="item in items" :key="item.id">
  <!-- contenu -->
</div>
```

### Gestion des évènements
Similaire à la couche évenementiel du DOM (gestion par callback).

#### Directive `v-on`
```html
<div id="counter">
  <button v-on:click="counter += 1">Add 1</button>
  <p>Le bouton ci-dessus a été cliqué {{ counter }} fois.</p>
</div>
```
```js
let example1 = new Vue({
    el: "#counter",
    data: {
        counter: 0
    }
});
```

```html
<div id="hello">
  <button v-on:click="greet($event,'L3')">Greet</button>
    <span>{{greet2('L3')}}</span>
</div>
```
```js
let example2 = new Vue({
    el: "#hello",
    data: { name: "Caroline" },
    methods: {
        greet: function(event, niveau) {
            if (event) {
                alert(
                    event.target.tagName,
                    this.name + " greets " + niveau + "!"
                );
            }
        },
        greet2: niveau => niveau + " hello"
    }
});
```

#### Modificateurs d'évènement
Comme pour `event.preventDefault()` ou `event.stopPropagation()` Vue permet d'utiliser des suffixes à de directive pour préserver la logique des données dans les méthodes.
  
Modificateurs ([ref](https://fr.vuejs.org/v2/guide/events.html#Modificateurs-d%E2%80%99evenements)) : `.stop , .prevent, .capture, .self, .once, .passive`
Exemples :
```html
<!-- equivalent à  event.stopPropagation()-->
<a v-on:click.stop="doThis"></a>
<!-- l'évènement `submit` ne rechargera plus la page -->
<form v-on:submit.prevent="onSubmit"></form>
```

#### Des listener dans le HTML ? et la séparation des responsabilités ?
  
* Le Modèle-Vue gère la vue courante donc pas de difficulté de maintenance.
* Avantages:
    -   Localiser l'implémentation des gestionnaires dans le JS en regardant le HTML
    -   Pas d'attache manuel de l'événement (magie du framework)
    -   Suppression automatique des listeners à al destruction du Modèle-vue.

### Binding bi-directionnel

#### Directive `v-model`
Liaison bi-directectionnel entre le modèle et la vue sur les champs de formulaire (input, checkbox, select, textarea).
```html
<input v-model="message" placeholder="modifiez-moi">
<p>Le message est : {{ message }}</p>
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```
Possède des modificateurs (`.lazy`, `.number`, `.trim`)


## Résumé des directives
<p data-trim contenteditable >
 v-bind<br/>
 v-if/v-else-if/v-else<br/>
 v-for with keys (arrays and objects)<br/>
 v-on<br/>
 v-model<br/>
 
</p>