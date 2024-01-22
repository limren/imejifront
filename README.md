# Imeji

Bienvenue sur mon site Imeji (Projet pour le S4 en programmation web) - React (TS)/Laravel.

## Le site

Permet de retranscrire le contenu d'une image par l'OCR (Reconnaissance optique de caractères) via l'API fournie gratuitement par [OCRSpace](https://ocr.space/OCRAPI) et permet également de les stockers et d'effectuer une pagination simple dessus.

Il y a un système d'authentification permettant de retrouver vos images via votre session - géré avec Laravel Sanctum.

Tout le contenu est normalement traduisible en Anglais/Français, il suffit de mettre son navigateur en Anglais et tout est géré ( les textes traduits sont dans [src/utils/Text.ts]()).

## Lancement

## Côté Front

### `npm start`

Lance l'application côté front sur le port 3000 :
[http://localhost:3000](http://localhost:3000).


## Côté Back

### php artian serve --port=8000

Lance l'application côté serveur sur le port 8000 :
[http://localhost:8000](http://localhost:8000).

