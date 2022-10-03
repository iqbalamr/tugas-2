(function foo (i){
    if (i === 5){
        console.log(i);
    }
    else {
        foo(++i);
    }
}(0));
