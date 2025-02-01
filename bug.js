function foo(a,b){return a+b;}console.log(foo(2,3)); //Output: 5
function foo(a,b){return a-b;}console.log(foo(2,3)); //Output: -1
This code works as expected. However, if we change the order of function definitions:
function foo(a,b){return a-b;}console.log(foo(2,3)); //Output: -1
function foo(a,b){return a+b;}console.log(foo(2,3)); //Output: -1
The output changes. The second call to foo still uses the first definition of foo, even though the second definition of foo is defined after the first call. This is because of JavaScript's function hoisting behavior. Functions are hoisted to the top of their scope before the code is executed. When the second call to foo is made, the first definition of foo is still the one that is in scope. To fix this, the functions should have unique names.