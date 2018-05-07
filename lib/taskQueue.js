 // 模拟一次api网络请求花费特定时间
 function mockAPI(result, time = 1000) {
   console.log(result, time);
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(result);
     }, time);
   });
 }

const start = Date.now();
function worker(tasks, result) {
  const task = tasks.shift();
  if (!task) {
    // 任务结束
    return;
  }
  const costtime = task % 3 === 0 ? 3 : task % 3; // 第一个任务1s， 第二个2是， 第三个3s...
  return mockAPI(task, costtime * 1000).then(r => {
    console.log(`${r} completes at time: ${Date.now() - start}`);
    result.push(r);
    return worker(tasks, result);
  });
}

async function get10Topics5() {
  const t1 = Date.now();
  const total = await mockAPI(10);
  const MAX_CURRENCY = 3;
  const result = [];

  const tasks = [];
  for (let i = 1; i <= total; i += 1) {
    tasks.push(i);
  }

  const promises = [];
  for (let i = 0; i < MAX_CURRENCY; i += 1) {
    promises.push(worker(tasks, result));
  }

  const r = await Promise.all(promises);
  const t2 = Date.now();
  console.log(`total cost: ${t2 - t1}ms.`);
  return result;
}

get10Topics5().then(data => console.log(data));