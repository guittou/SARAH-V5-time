```html
	<h3>Inputs</h3>
	<p> - <code>msg.payload.options.plugin</code>:</p>
	<dd>à utiliser avec un module <b>switch</b> pour rediriger vers le bon plugin</dd>
	<p></p>
	<dd>valeur de <code>out.action.plugin</code> du fichier <b>sarah-time.xml</b></dd>
	<p></p>
	<h3>Outputs</h3>
	<p><code>msg.speak</code>: texte à lire par win-speak(ou autre)</p>
	<h3>Détails</h3>
    <p>module à associer aux modules SARAH </p>
	<p>		- <b>win-sarah</b></p>
	<p>		- <b>win-speak</b></p>
	<p></P>
	<p>Copier le fichier xml <b>./grammar/sarah-time.xml</b> dans le dossier grammar configuré sur le module <b>win-sarah</b></p>
	<p></p>
	<p>dans le cas de plusieurs plugins utiliser un module <b>switch</b> avec comme discriminant <code>msg.payload.options.plugin</code> renvoyé par <b>win-sarah</b> (ici <b>time</b>)</p>
	<p></p>
	<h3>Utilisation</h3>
	<p></p>
	<p>sarah il est qu'elle heure</p>
	<p>sarah peux tu me donner l'heure</p>
	<p>sarah tu peux me donner l'heure</p>
```
