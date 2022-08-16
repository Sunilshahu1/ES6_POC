(function()
{
  const num={};
  for(var i=1;i<=5;i++)
  {
    num[Symbol(i)]=i;
  }
  var n={[Reflect.ownKeys(num)[0]]:num[Reflect.ownKeys(num)[0]]};
  console.log(n);    
  let newNum =  {}
      Object.getOwnPropertySymbols(num).forEach((n,i)=>{
        if(i != 0){
             newNum[n]=i+1;
        }
    })
  fun1(n,newNum);
})();
function fun1(n,num)
{
  const num1={};
  for(var j=6;j<=10;j++)
  {
    num1[Symbol(j)]=j;
   
  }
  var a={n,...num1,...num};
  console.log(a);
  //console.log(con);
};