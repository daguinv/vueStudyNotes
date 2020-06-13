import {flag,sum,num1,height,fn,Person} from './aaa.js';
if(flag){
  console.log('我是天才');
  console.log(sum(10,20));
}
console.log(num1,height);
console.log(fn(1,9));

const p = new Person()
p.run();

// 引入aaa.js 的默认导出，进行导入的变量名可以是任意值
// export default 在同一个模块中，不允许同时存在多个
import addr from './aaa.js'
console.log(addr());

// 统一全部导入
// 将所有导出的东西放进o这个对象中
import * as o from './aaa.js'
// o.flag
console.log(o.flag);

