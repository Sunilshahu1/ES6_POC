
(function () {
    const symbol1={};
    for (var i=1;i<=5;i++)
    {
        symbol1[Symbol('a')]=i;
	console.log('a',i);
    }
     console.log(symbol1);
    var element={[Reflect.ownKeys(symbol1)[0]]:symbol1[Reflect.ownKeys(symbol1)[0]]};
    let number = {}
    Object.getOwnPropertySymbols(symbol1).forEach((element,i)=>{
        if (i != 0){
            number[element]=i+1;
        }
    })
    sym(element,number);
    
    
   // console.log(number);
})();
function sym(element,symbol1) {
    const symbol2={};
    for (var j=6; j<=10; j++) {
        symbol2[Symbol('a')] = j;
	 console.log('a',j);
    }
      console.log(symbol2);
    var add={element,...symbol2,...symbol1};
    console.log(add);
};


