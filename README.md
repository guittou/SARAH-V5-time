#### Module Node-Red pour S.A.R.A.H V5

### Inputs

- `msg.payload.options.plugin`:

	à utiliser avec un module **switch** pour rediriger vers le bon plugin

	valeur de `out.action.plugin` du fichier **sarah-time.xml**

### Outputs

`msg.speak`: texte à lire par win-speak(ou autre)

### Détails

module à associer aux modules SARAH

- **win-sarah**

- **win-speak**

Copier le fichier xml **./grammar/sarah-time.xml** dans le dossier grammar configuré sur le module **win-sarah**

dans le cas de plusieurs plugins utiliser un module **switch** avec comme discriminant `msg.payload.options.plugin` renvoyé par **win-sarah** (ici **time**)

### Utilisation

sarah il est qu'elle heure

sarah peux tu me donner l'heure

sarah tu peux me donner l'heure
