# Imeji

Bonjour/Bonsoir Monsieur,

Bienvenue sur mon site Imeji - site que j'ai effectué de A à Z avec React (TS)/Laravel pour ce semestre.

## Le site

Permet de retranscrire le contenu d'une image par l'OCR (Reconnaissance optique de caractères) via l'API fournie gratuitement par [OCRSpace](https://ocr.space/OCRAPI) et permet également de les stockers et d'effectuer une pagination simple dessus. La clé de l'API est disponible dans le .env. (Vous pouvez utiliser la mienne, ce n'est pas un problème !)

J'ai laissé la config par défaut de React avec webpack, désolé pour cet affront ! (Vive Vite)

Le contenu est envoyé/retrouvé côté serveur grâce à Laravel et l'API que j'ai setup avec.

De plus, j'ai implémenté un système d'authentification, ce qui permet de créer son propre compte et d'avoir ses propres images.

Si vous ne voulez pas vous créer de compte, vous pouvez by-pass la vérification en mettant un auth-token dans le local storage vide/avec du contenu au hasard. 

Tout le stockage des données est sur une BdD MySQL dont le dump est normalement trouvable dans le [GitLab](https://gitlab.unistra.fr/imeji/imejiback) du projet côté serveur - la gestion des données côtés serveur est effectué via l'intermédiaire Eloquent, qui est l'ORM fournie par défaut avec Laravel.

Le design a été fait main (ça se voit, désolé ce n'est pas mon fort ahah) et toutes les icônes sont libres et trouvables sur [iconmonstr](https://iconmonstr.com/) et/ou les icônes gratuites offertes avec le GH Student Pack sur [icons8](https://icones8.fr/).

Tout le contenu est normalement traduisible en Anglais/Français, il suffit de mettre son navigateur en Anglais et tout est géré ( les textes traduits sont dans [src/utils/Text.ts]()).
Il se peut cependant que le cache fasse un peu n'importe quoi niveau API OCRSpace qui permet de choisir n'importe quelle langue, désolé si cela arrive.

## Lancement

## Côté Front

### `npm start`

Lance l'application côté front sur le port 3000 :
[http://localhost:3000](http://localhost:3000).

 Il est préférable de configurer le front sur le port 3000 à cause de problème de CORS sur la config du serv php.


## Côté Back

### php artian serve --port=8000

Lance l'application côté serveur sur le port 8000 :
[http://localhost:8000](http://localhost:8000).

La BdD est par défaut lancée sur le port 3306 - comme indiqué dans le .env, n'hésitez pas à changer.



## Finalement,

Si vous avez un quelconque problème de lancement ou des questions, n'hésitez pas à me contacter sur mon Discord limren ou via mon adresse mail axel.boyer2@etu.unistra.fr.

Merci à vous.
