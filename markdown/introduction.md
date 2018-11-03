# Introduction à Vue.js

## Présentation
* Vue (prononcé /vjuː/ - view) 
* Framework (open-source) pour construire des interfaces utilisateur
* Créé en 2014 par Evan You (ancien Google)
* Actuellement en version 2.5 (Javascript)


## Objectifs
* Faciliter le développement d'UI web. Framework moins dogmatique (qu'angular par exemple) -mais quand même : la courbe d'apprentissage est moins sévère.
* Adoption incrémentale de l'architecture (dans le cas d'une web app pré existante par exemple). 

## 2 parties
* Core: declarative rendering + composition de composants
* Extra : routing, gestion de l'état, build (maintenance des bibliothèques et packages supportés officiellement) 


# Fonctionnalités

## Templates
* Templates basés sur la syntaxe HTML (déclaratif)
* Liaison (binding) entre le DOM rendu et les données de l'instance Vue  
* HTML valide (spec-compliant)
* Le template est compilé sous la forme de fonctions de rendu dans le *virtual DOM*.

## Rendu déclaratif

### Conditions et boucles
v-if
v-for
### gestion des propriétés dynamique
v-on

## Composants
Abstraction permettant de créer des composaants réutilisables et autonomes. (une applications = arbre de composants)
Un composant = une instance de vue avec des options (propriétés)  
  
```js
Vue.component('todo-item', {
  template: '<li>Ceci est une liste</li>'
})
```
insertion dans un autre composant
```html
<ol>
  <!-- Crée une instance du composant todo-list -->
  <todo-item></todo-item>
</ol>
```

## Le système de réactivité

Un modèle = un object JS
une modification = une mise à jour de la vue.

En ES5 le système de getter/setter (accesseur/mutateurs) permet le suivi des dépendances et la notification de changement des propriétés.

Chaque composant a une instance d'observateur qui suit les modifications.

Ajout/suppression : this.$set(this.someObject, 'b', 2)

l'object 'data' est comme le schéma de l'état du composant.

# Tooling
* vue-cli 3.0 : interface en ligne de commandes.
Initialisation rapide d'un nouveau projet, GUI...
* DevTools 5.0 : débug des appli Vue et Vuex



## Futures évolutions
* version 3 en typescript (~2019) 



## Références

* [Roadmap vue.js](https://github.com/vuejs/roadmap) 

