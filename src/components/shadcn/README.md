## Pour lancer le projet

* `npm run dev`
* Site accessible sur http://localhost:3000

## Figma

Maquette [Figma](https://www.figma.com/design/xpGDhL3t8bpVvDUhd2a9Pi/Activity-Feed?node-id=104-508&t=qz62FizAvInNJo2z-1)


## ToDo 

* Ajouter le composant Calendrier dans la search
* Ajouter l'état "sélectionné" sur le dropdown de la search
* Remplacer la librairie d'Icon (lucide-react) par des icones issus du Design System
* Nettoyer les CSS des composants Shadcn restant
* Améliorer l'accessibilité des composants initialement importés depuis Shadcn
* Formaliser le nommage des classes CSS
* Mettre en place des tests sur les composants et sur la search
* Mettre en place des règles de Breakpoint en fonction de l'utilisation des produits
* Supprimer Tailwind de package Json et du postcss config


## Amélioration UX/UI

* Revoir tout le fonctionnement des résultats dans les select : quand afficher les résultats réels en fonction des filtres sélectionner et quand afficher les résultats complets ? 
* Définir une charte graphique / Design System cohérent : mélange d'arrondi et d'angle droit
* A l'utilisation des filtres, mettre en place un "fake" loader d'un court instant pour que l'utilisateur comprenne que les résultats ont changé.
* Si trop de filtres, envisager de les regrouper sous un bouton "+ de filtres" ou jouer tous les filtres dans un panel.