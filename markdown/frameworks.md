# Frameworks Front End 

## Plan
1. Introduction
2. Différents patterns
3. Stack
4. Notions clés


# Différents patterns

## MVC
 Architecture 3-tiers côté client: Modèle-Vue-Contrôleur
* Modèle : contient les données
* Vue : présentation UI (lit le modèle et envoie les actions utilisateurs)
* Contrôleur : logique des actions utilisateur (traite les actions pour mettre à jour le modèle).

### MVC  : conclusion
* Un peu complexe a prendre en main, très dogmatique, fonctionne bien dans de large applications.
* action→mise à jour→affichage induit par ce patron est bien adapté aux applications web

## MVVM 
* Modèle-vue Vue Modèle
* Par rapport au MVC, communication bidirectionnelle entre la Vue et le Modèle, les actions de l'utilisateur entraînent des modifications des données du modèle.séparer la vue de la logique et de l'accès aux données en accentuant les principes de binding et d’événement
* un peu moins dogmatique que MVC

##  Flux 
* actions : qu'elles proviennent du serveur ou d'une interaction utilisateur ;
* dispatcher : dans lequel sont envoyées les actions que ce dernier transmet à qui veut, un peu comme un EventEmitter global ;
* stores :  (équivalent du modele dans MVC), contiennent les données, et réagissent aux actions que le dispatcher leur transmet ;
* views : s'occupent du rendu des données dans le DOM, et de lancer des actions utilisateur.

###  Flux : conclusion
architecture unidirectionnelle
raisonne en actions,  déclenchées par la vue ou le serveur
Toutes les actions passent par le dispatcher
Seuls les stores signalent aux vues qu'il faut se mettre à jour  
ref: [PDC : Flux](https://putaindecode.io/fr/articles/js/flux/)


## Functional reactive programming 
> Reactive Programming is an asynchronous programming paradigm concerned with data streams and the propagation of change.
> -- Wikipedia

### Functional reactive programming
* State : store immuable . On ne le modifie jamais, on en recrée un nouveau.
le State est l'unique source de vérité sur l'état actuel de la TOTALITÉ de l'application côté front.
* Reducer : action + state -> state. (dispatcher simplifié). Le reducer est une fonction PURE, c'est à dire sans aucun effet de bord : les mêmes entrées produisent les mêmes sorties.  
  
Rappel programmation fonctionnelle. Exemple f(x) = x+3.


## Le DOM ...
DOM  = Document Object Model (arbre de noeuds). Fait la liaison entre HTML et JS.
  
Quand faire le nouveau rendu? Doit-on rerendre *tout* le DOM? Quelle partie est prioritaire..

### Le DOM Virtuel
Virtual DOM : optimiser les modifications du DOM . Algorithme différentiel entre le DOM et le DOM Virtuel pour savoir quelle partie du DOM re-rendre.
  
Pros: taux de rafraichissement maximum. 
On ne touche plus au DOM directement (donc plus besoin de jQuery o/)
Cons: complexe à prendre en main (cycle de vie des composants)

## Résumé
  
| Framework 	| MVC 	| MVVM 	| Flux 	| FRP 	|
|-------------	|:---:	|:----:	|:----:	|:-----:|
| Angular > 2 	| x 	|  	    |  	    | ~ 	|
| Vue.js 	    |  	    | x 	|  	    | vuex 	|
| React 	    |  	    |  	    | x 	| redux |