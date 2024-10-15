function fibonacciIT(n){
    let x = 0;
    let y = 1;
    let res;
    let aux = 0;
    
    for(i=0;i<n;i++){
        res = x + y;
        aux += res;
        console.log(res);
        x = y;
        y = res;
    }
}
fibonacciIT(10);

function fibonacciRE(n){
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }else{
        return fibonacciRE(n-1) + fibonacciRE(n-2);
    }
}

for(i=0;i<10;i++){
    console.log(fibonacciRE(i));
}