#Angular Seed Pack

##Using the Pack
To use the Pack, we created 2 menu options, which you can find on the right of the menu. These menus can be configured in the `.codio` file.

1. **Start Server** : `startup.sh` auto starts the server but should it be stopped for any reason, you can use this menu option.
1. **Preview** : this previews your app.

##Accessing the application
To access your application from a browser, you can use the menu option described above. The url of your box can be found in the `Project->Box Info` menu and will look something like this

```
http://vital-ego.box.codio.io:3000/
```

##How the Pack was prepared
This Starter Pack was built on the Node+Gunr+MongoDB Stack. From the Codio Dashboard, we created a new project by importing from the Angular Seed project : `https://github.com/angular/angular-seed.git` (https://github.com/angular/angular-seed).

Once the project was opened in the IDE, we opened up a Terminal window and ran

```
npm install
```

We then modified the `package.json` file to ensure that `npm start` runs on ip address `0.0.0.0` and port 3000 by replacing the `start` key/value with this

```json
"start": "http-server -a 0.0.0.0 -p 3000 -c-1",
```


##Useful Links

- [Angular](https://angularjs.org/)
- [Node](http://nodejs.org/)
- [npm](https://www.npmjs.org/)
- [Grunt](http://gruntjs.com/)


