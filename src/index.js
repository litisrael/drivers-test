import { initRouterDriver } from "./api/app.js";

 import serverless from "serverless-http";




async function main() {
  const app = await  initRouterDriver();
const all =  serverless(app)
return all
}

module.exports.handler = main

// async function main() {
//   const app = await  initRouterDriver();
//   app.listen(4000);
// }

// main();