//Design a function, which multiplies first two arguments, and sums rest of the arguments

function sum(args){
    let ans1 = 0
    for (let a of args)
    {
    ans1+=a
    }
    console.log(ans1)
    return ans1
    }
    
    function multiply(args2){
    let ans2 = 1
    for (let b of args2)
    {
    ans2*=b
    }
    console.log(ans2)
    return ans2
    }
    
    function twoAns(...args)
    {
    multiply(args.splice(0,2))
    sum(args)
    }
    
    twoAns(1,2,3,4,5)