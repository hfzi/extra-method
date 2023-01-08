```js
// es6 before  
require('extra-method')
```
```js
// es6 after  
import 'extra-method'
```

## ".fasterMap()" method fast then ".map()"
The ".fasterMap()" method is almost twice as fast as the ".map()" ten. 
Usage is the same.
```js
var arr = [1, 4, 3, 3, 9, 11]
arr.fastermap(x => x > 5)
```

```js
return 9, 11
```

## ".remove()" method

```js
var arr = [1, 4, 3, 3, 9, 11]
arr.remove(3)
```

```js
return [1, 4, 3, 9, 11]
```

## ".removeAll()" method

```js
var arr = [1, 4, 3, 3, 9, 11]
arr.removeAll(3)
```

```js
return [1, 4, 9, 11]
```