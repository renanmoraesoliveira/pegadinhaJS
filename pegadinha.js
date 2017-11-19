console.log("Exemplo 1");

const arr = ['a', 'b', 'c', 'd'];

for(var i = 0; i < arr.length; i++){
    setTimeout(() => {
        console.log(i, arr[i]);
    }, 0);
}

console.log('out', i);

/* 
>>>> retorno <<<<<

out 4
4 undefined
4 undefined
4 undefined
4 undefined
*/
console.log("\n\nExemplo 2");

const arr2 = ['a', 'b', 'c', 'd'];

for(let i = 0; i < arr2.length; i++){
    setTimeout(() => {
        console.log(i, arr2[i]);
    }, 0);
}

console.log('out');

/* 
>>>> retorno <<<<<

out 
0 'a'
1 'b'
2 'c'
3 'd'
*/

console.log("\n\nExemplo 3");

const arr3 = ['a', 'b', 'c', 'd'];

for(let i = 0; i < arr3.length; i++){
    console.log(i, arr3[i]);
}

console.log('out');

/* 
>>>> retorno <<<<<

0 'a'
1 'b'
2 'c'
3 'd'
out 
*/

console.log("\n\nExemplo 4");

const arr4 = ['a', 'b', 'c', 'd'];

for(var i = 0; i < arr4.length; i++){
    setTimeout(function(ii) {
        return () => {
           console.log(ii, arr4[ii]);     
        }
    }(i), 0);
}

console.log('out');

/* 
>>>> retorno <<<<<

out
0 'a'
1 'b'
2 'c'
3 'd' 
*/

