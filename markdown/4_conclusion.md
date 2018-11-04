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

