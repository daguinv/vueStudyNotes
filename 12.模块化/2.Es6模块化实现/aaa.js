let name = 'zwq';
let age = 18;
let flag = true;
function sum(a,b){
  return a+b;
}
if(flag){
  console.log(sum(2,3));
}
// 导出方式一  先定义在导出
export{
  flag,
  sum
}
// 导出方式二  直接在定义的时候就导出
export let num1 = 1000;
export let height = 500;

// 3.导出函数/类
export function fn(n1,n2){
  return n1 * n2;
}
export class Person{
  run(){
    console.log('在奔跑');
    
  }
}

// 4.export default  默认导出，只能有一个
// 在某些情况下，一个模块中包含某个功能，但是并不希望给这个功能命名，而且让导入者自己来命名时，可以使用默认导出
// export default 在同一个模块中，不允许同时存在多个

// const address  = '北京'
// export default address
export default function(){
  console.log('默认导出');
  
}