var n =10 ;

function call(){
    for(var i =1;i<4;i++){
        console.log(i)
    }
}

function alpah(){
    for(var i ='A';i<'D';i++){
        console.log(i);
    }
}
call();
alpah();
console.log('반올림:',Math.round(2.3));
console.log(Math.max(1,2,3));

function Sum(n,m){
    let sum =0;

    for(i= n; i<m;i++){
        sum+= i
    }
    return sum;

    
    
}

console.log(Sum(1,10));