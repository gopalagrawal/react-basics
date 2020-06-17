# MY DEV NOTES

### SOURCE PROJECT 
- [2:18 Hrs] ReactJS Tutorial for Beginners 
- By: Academind  2017
- [Youtube Link](https://www.youtube.com/watch?v=pgAvVxowaYU&list=RDCMUCSJbGtTlrDami-tDGPUV9-w&index=1)

---------------------------------------------
### Create react app
```
npx create-react-app <my-app>
```
---------------------------------------------

### Sync to GitHub repo

* Create a github `<my-app>` repo 
  * (without license, .gitignore, readme etc.)

* Local project: 
```
git init -> git add . -> git commit -m "msg"
git remote add <https://github.com/gitrepo.git>
git push -u origin master 
``` 
---------------------------------------------

### Support for SASS files.

- `npm install node-sass --save`

- Rename `src/App.css` --> `src/App.scss` 
  - update src/App.js to import src/App.scss

- Create scss files.  Include them in other css/scss files:  
```
@import 'styles/shared.scss';   // importing from styles folder. 
@import '~nprogress/nprogress'; // importing from nprogress node module
```

- [OPTIONAL] node-sass also supports the SASS_PATH variable.
 To use imports relative to a path you specify, and from node_modules without adding the ~ prefix, you can add a **`.env`** file at the project root with the variable `SASS_PATH=node_modules:src`. To specify more directories you can add them to SASS_PATH separated by a : like `path1:path2:path3`.  If you set SASS_PATH=node_modules:src, this will allow you to do imports like
```
@import 'styles/colors';
@import 'nprogress/nprogress';
```
---------------------------------------------
