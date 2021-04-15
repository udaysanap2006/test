import React from 'react'

function OnceLoadashImplentation() {   
    function add(a, b) {
        function once(){
        return a + b; 
        }
    
        return once;
    }
    const onceAdd = add(1,2); 
    
    console.log("onceAdd(3, 2)",onceAdd(3, 2)); // 3
    console.log("onceAdd(5, 4)",onceAdd(5, 4)); // 3
    
    return (
        <div className="container">
            <h4>Implemetaion of 'once' loadash method (please check in OnceLoadashImplentation component) with closures</h4>
            <br />
            initially excuted with add(1,3) and function defination to onceAdd so expected output is 3

            later on excuted with onceAdd(4,4) // still output will be 3 and so on i.e execute with any two numbers it will always give result 3
            <br />
        </div>
    )
}

export default OnceLoadashImplentation
