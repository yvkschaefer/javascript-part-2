# JavaScript part 2: functions and objects

* If you haven’t finished the previous assignment (excluding the challenges part), complete this first.
* Fork this repository and create a new Cloud9 project based on it.

Functions
---------
* Create a file called `functions.js`. Then, do the following:
  * Read about the [`Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method. Create a function that can be used with `sort`. This function should take two strings, and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.
  * Create an array of objects (don’t need to use `new` here, just regular object literals). These objects will contain a `name` and `email` property. Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.
  * Create a function that can be used with [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). This function should take a number and return its square. Then, use this function with map on an array of numbers to check the result.
  * Create a function that can be used with `Array.prototype.map`. This function should be able to take an object and square its “num” property. Then, use this function with map on an array of objects each containing a “num” property.
  * In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) and returned the result of the operation on the two numbers. Here we are going to do the same but at a higher order.
  Create a function called `operationMaker` that takes only a string called `operation` as argument. This string could be `“add”`, `“subtract”`, `“mult”` or `“div”`. Your function will **return a function** that will take two numbers and return the result of running operation on these numbers.
  The end result should let me do something like this:
    ```javascript
var adder = operationMaker(“add”);
var sum = adder(5, 10); //15

var multiplier = operationMaker(“mult”);
var product = mult(5, 10); // 50
```

* Once you are finished, commit and push your changes. Then, create a pull request so we can start checking your work.

Objects
-------
* Create a file called `warriors.js`, then, do the following. Commit and push as often as you like so that we can monitor the progress of your code in the pull request.
  * Create a constructor function called `Warrior` that can create new warriors. This function will take parameters `name`, and `gender`. `name` can be any string, `gender` can be `M` or `F`. It should create a warrior that has these properties:
    * `name`: the value that was passed to the constructor
    * `gender`: the value that was passed to the constructor
    * `level`: 1
    * `weapon`: wooden sword
    * `power`: a random number between 1 and 100
  * In addition to that, every object that gets created should have the following methods:
    * `fight`: will output to the console: "<name> rushes to the arena with <his/her> <weapon>"
    * `faceoff`: faceoff takes one argument called `opponent`. Based on the `power` of each opponent, this method should output to the console which player won the fight based on their power. Be as creative as you like with the text of this method :)
  * Finally, create a bunch of warriors and make them fight together.

* Create a file called `addressbook.js`, then do the following. Commit and push as often as you like so that we can monitor the progress of your work in the pull request.
  * Create a constructor function called `Person` that can create new persons. It takes `firstName` and `lastName` as arguments, and assigns them to the new object. In addition to that, the constructor function will assign each person an `emails` property that will be an empty array.
  * Create a constructor function called `Email` that can create a new email address. It takes `address` and `type` as arguments. It will assign `address` to the new object. For `type`, check if it's in the list (work, home, other). If it's not in the list, set the type to "other".
  * Add an `addEmail` function to the *prototype of `Person`*. This function will be available to all objects created using `new Person`. The `addEmail` function should take an email address and type as arguments, call the `Email` constructor to create a new email object, then *`push`* that email object to the `emails` of the person.
  * Finally test your code by creating a person and giving them a home and work email.

* Create a file called `terrain.js`, then, do the following. Commit and push as often as you like so that we can monitor the progress of your code in the pull request.
  * Create a constructor function called `Tile` that can create new tiles. This function will take parameters `x` and `y` and create an object that has these properties:
    * `x`: the value that was passed to the constructor
    * `y`: the value that was passed to the constructor
    * `height`: a random number between 1 and 3
    * `type`: a random word between `grass`, `rocks` or `water`
    * `condition`: a random word between `burning`, `normal` or `frozen`
  * In addition to that, every object that gets created should have the following methods:
    * `freeze`: if the object is burning, then its condition should change to `normal`. if the object is normal then its condition should change to `frozen` and if it is `frozen`, its `height` should increment by 1
    * `burn`: if the object is frozen, then it will become normal. if the object is normal, then it should change to `burning`. if it is already burning, then its height should decrement by 1 until it gets to 0.
  * Write a piece of code that will use the `Tile` constructor to create a 20x20 map of `Tile`s. The map will be a 2D array (array inside array).
  * Output the map to the console in the following way:
    * For each tile, output the height of the tile as an "icon" for that tile
  * Go thru all the map again, randomly burning and freezing some tiles. Then, re-output the map in the same way again

When you are done
-----------------
When you are done with the previous exercises, start the activity below. You may not finish it. The last few exercises are quite challenging ;)

[Functional programming in JavaScript](http://reactivex.io/learnrx/)
