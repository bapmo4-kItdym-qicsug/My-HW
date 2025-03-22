//1 O(1)
function add(mun1, num2, num3){
    return num1 + num2 + num3;
}

//2 O(n)
function sayHello(numberOfTimes){
    for(var i=0; i< numberOfTimes;i++){
        console.log("Hello");
    }
}

//3 O(n^2)
function logMultiples(n) {
    for (var numl = 1; numl <= n; num1++){
    for (var num2 = 1; num2 <= n; num2++) {
    console.log(num1 * num2);
        }
    }
}

4//O(n^2)
function logMultiples2(a,b) {
    for (var numl = 1; numl <= a; num1++){
    for (var num2 = 1; num2 <= b; num2++) {
    console.log("test");
        }
    }
}

//5 O(n)
function sum(x){
    for (let i = 0; i < x;i++){
        console.log("test");
    }
}