// const s: string = 'Hello Typescript'
// console.log(s)

// import Button from "./button";
// import FCButton from "./FCButton.vue";
// import JXButton from "./JXButton";

// createApp(Button)
// createApp(FCButton)
import { createApp } from "vue/dist/vue.esm-browser";
import EmelunUI from "./entry";
createApp({
  template: `
       <div style="margin-bottom:20px;">
       <Button color="blue">主要按钮</Button>
       <Button color="green">绿色按钮</Button>
       <Button color="gray">灰色按钮</Button>
       <Button color="yellow">黄色按钮</Button>
       <Button color="red">红色按钮</Button>
   </div>
   <div style="margin-bottom:20px;"
   >
       <Button color="blue" plain>朴素按钮</Button>
       <Button color="green" plain>绿色按钮</Button>
       <Button color="gray" plain>灰色按钮</Button>
       <Button color="yellow" plain>黄色按钮</Button>
       <Button color="red" plain>红色按钮</Button>
   </div>
   <div style="margin-bottom:20px;">
       <Button size="small" plain>小按钮</Button>
       <Button size="medium" plain>中按钮</Button>
       <Button size="large" plain>大按钮</Button>
   </div>
   <div style="margin-bottom:20px;">
       <Button color="blue" round plain icon="search">搜索按钮</Button>
       <Button color="green" round plain icon="edit">编辑按钮</Button>
       <Button color="gray" round plain icon="check">成功按钮</Button>
       <Button color="yellow" round plain icon="message">提示按钮</Button>
       <Button color="red" round plain icon="delete">删除按钮</Button>
   </div>
   <div style="margin-bottom:20px;">
       <Button color="blue" round plain icon="search"></Button>
       <Button color="green" round plain icon="edit"></Button>
       <Button color="gray" round plain icon="check"></Button>
       <Button color="yellow" round plain icon="message"></Button>
       <Button color="red" round plain icon="delete"></Button>
   </div>
       `,
})
  .use(EmelunUI)
  .mount("#app");
