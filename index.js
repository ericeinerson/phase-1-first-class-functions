function receivesAFunction(callBack){
    callBack()
    
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log('This is a named function');
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('It is still a mystery');
    }
}