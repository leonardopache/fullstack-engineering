# Control de flujo

En el nivel más elemental, un programa no es más que una ejecución secuencial de instrucciones. Esta ejecución tiene un flujo predefinido que el desarrollador querrá controlar con diversas técnicas.
Hay veces que hay que ejecutar diferentes acciones dependiendo de diferentes condiciones. Para ello tenemos las **decisiones condicionales** que permiten ejecutar deliberadamente instrucciones dependiendo de una condición.
Esta condición se reduce a un elemento **booleano** es decir **true** o **false**.

![Conditional Flow](/meta/0_11_conditional.png)

JavaScript cuenta con dos tipos de sintaxis:

## Palabra reservada 'If'

La palabra reservada `if(...)` evalua una condición entre parentesis, y si el resultado es `true`, ejecuta un trozo de código.

```javascript
let counter = 5
if(counter == 5) {
    console.log("We've reached 5")
}
```

Si volvemos a [la definición de booleano](/beginner/4_tipos_datos/README.md#boolean), podemos ver que hay ciertos tipos que devuelven `false` al evaluarlos, mientras que los demás devolverán `true`.

### If ... else

Podemos añadir una o varias cláusulas **else** en nuestro bloque condicional para ejecutar la condición que sea verdadera, estas ejecuciones se evaluarán en cascada e irán ejecutando todas las condiciones.

```javascript
if(counter == 6) {
    print("We've reached 6");
    console.log("Hello");
} else {
    console.log("We've got something else");
}
```

Es por ello que podemos anidar varias condiciones

```javascript
counter += 1

if(counter == 1){
    console.log("We've reached 1");
} else if(counter == 2){
    console.log("We've reached 2");
} else if(counter == 3){
    console.log("We've reached 3");
} else if(counter == 4){
    console.log("We've reached 4");
} else if(counter == 5){
    console.log("We've reached 5");
} else if(counter == 6){
    console.log("We've reached 6");
} else {
    console.log("We've got more than that");
}
```

## Operador Condicional '?'

A veces, queremos asignar una variable dependiendo de una condición, en algunos lenguajes se haría de la siguiente forma:

```javascript
let login;
let password = prompt("Please enter the password", "");

if (password == "patata") {
    login = true;
} else {
    login = false;
}

console.log(login);
```

Afortunadamente, exite una manera de realizar esta misma operación de una forma mucho más sencilla con el operador condicional **?**.

```javascript
let loginShort = (password == "patata") ? true : false;
console.log(loginShort);
```

## Operador de fusión

El **nullish coalescing operator** o **??** permite realizar una evaluación para comprobar si una variable es **null** o **undefined**, de una forma similar al operador condicional.

```javascript
let user;

console.log(user ?? "Anonymous");

user = "Lucas";

console.log(user ?? "Anonymous");

console.log((user !== null && user !== undefined) ? user : "Anonymous");
```
