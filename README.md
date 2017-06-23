# Installation
 
> First, run `npm install --save @cw-types/chalk`


>Then, you must add `node_modules/@cw-types` to your `tsconifg.json` file, like so:
```javascript
    "typeRoots": [
      "node_modules/@cw-types",
      "node_modules/@types"
    ]
```
> This will enable the Typescript compiler to find and use this typing since it is not installed under `node_modules/@types`.

> Please note the order is important of the entries in `typeRoots`.  If you want `node_modules/@types` to resolve first then move it up top. 

# Summary
Modified type definitions for `chalk` `1.1.3` that allows passing `number`, `boolean` and `any` like the javascript API.  Original typings could only handle `string` and `any`.

 This package contains type definitions for [chalk](https://github.com/chalk/chalk).

# Credits
Starting definitions were written by [Diullei Gomes](https://github.com/Diullei), [Bart van der Schoor](https://github.com/Bartvds), [Nico Jansen](https://github.com/nicojs)

# Maintainers
This project is mainted by [Kavan J. Shaban](https://github.com/kavanshaban) at [Cycloware](https://github.com/cycloware) 
