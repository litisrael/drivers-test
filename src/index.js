import { initRouterDriver } from "./api/app.js";

 import serverless from "serverless-http";





  const app = await  initRouterDriver();

module.exports.handler = serverless(app)


// async function main() {
//   const app = await  initRouterDriver();
//   app.listen(4000);
// }

// main();