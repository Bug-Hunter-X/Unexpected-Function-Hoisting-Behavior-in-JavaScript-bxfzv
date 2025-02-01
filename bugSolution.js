function foo1(a,b){return a+b;}console.log(foo1(2,3)); //Output: 5
function foo2(a,b){return a-b;}console.log(foo2(2,3)); //Output: -1
This solution uses unique names for the functions, thereby resolving the issue. Each function call now correctly uses the intended function definition.  This approach avoids the ambiguity caused by redefining functions with the same name.