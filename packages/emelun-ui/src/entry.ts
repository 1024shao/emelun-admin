import { App } from "vue";
import Button from "./Button";

export { Button };
export default {
  install(app: App): void {
    app.component(Button.name, Button);
  },
};
