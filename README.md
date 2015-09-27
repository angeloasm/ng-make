
ng-make
=========

The ng-make command line utility makes it easy to make all with AngularJS.
This command help you to manage your project without edit the route and the app configuration files.
Use the `ng-make --help` command for more detailed task information.
##### Free for all!
If you want to add a new module into the repository of ng-make, go to this(http://www.angelocarraggi.altervista.org/ng-make) and you can add your module into ng-make repository.

## Installing

```bash
$ npm install -g ng-make
```

*Note: For a global install of `-g ng-make`, OSX/Linux users may need to prefix the command with `sudo` or can setup [proper file permissions on OSX for npm](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/) to install without `sudo`. *


## Starting your project with AngularJS easily

```bash
$ ng-make project nameProject 
```

When the command is launched it install the following components:

		angular .......  basic module of angularJS
		angular-ui ......  module for the routes page 
   
The structure of the project created with this command will be:

		appName/
				|
				|_css/ ( for the css style in your app)
				|
				|_js/ ( js module required by the app)
				|
				|_template/ (The view that you can be used)
				|
				|_img/ ( the image directory for your app )
				|
				|_bower_components/ (all components module)
				|
				|_settings/ ( settings for your application )
				|			|
				|			|_app.js
				|			|
				|			|_config.js
				|			|
				|			|_config.routes.js
				|
				|_module.json ( important file for the module installed in ng-make )
				|
				|_settings.conf ( important file for the settings of ng-make )

## Create your state in one command

With ng-make you can create the state for your application. For make this quickly with ng-make you can use:

```bash
$ ng-make state nameOfState [default] [abstract]
```

This command update the file `config.routes.js` with the new lines of declare your state. 
It create the controller file append at the `nameOfState` the suffix `CTRL` and save it into the folder js,
It create the html template (this view is empty) into the folder `template` named with the name of the state,
It update the index.html with the `<script type="text/javascript" src="js/nameOfStateCTRL.js"></script>` before the end tag `</body>`.

* If you using the option default, the state it's default, that is writed in `config.routes.js` within the `otherwise` property setted for the state.

## Testing your AngularJS App

With ng-make you can also test your app without another XAMPP or LAMP software.
For try your server you should be go into the folder project and launch this command:

```bash
$ ng-make webstart [host] [port] [rootPoint]]
```

* By default if you launch the command it used:
	 - "localhost" as host
	 - "port" as 9090
	 - "rootPoint" as "./"
	 
	 
## Integration Module in your Angular App

With ng-make you can install the new module in your angular app or install it from the repository available.
Typically you use this command as:

```bash
$ ng-make module [install|list|list-installed] nameOfNewModule [options]
```

The available keywords can be used like below:

`ng-make module install nameOfAvailablePackage`

With this command you add the `nameOfAvailablePackage` in your angular project.
For obtain the list of available package in ng-make, you can run this command:

```bash
$ ng-make module list
```

For obtain the list of install modules in your angular app you can run this:

```bash
$ ng-make module list-installed
```

	 
	 
	  	  

