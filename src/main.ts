import "./assets/index.css";
import { createApp } from "vue";
// @ts-expect-error
import App from "./App.vue";
// @ts-expect-error
import store from "./store/store";
// @ts-expect-error
import router from "./router/router.js";
import { createAuth0 } from '@auth0/auth0-vue';
const app = createApp(App);
app.use(router);
app.use(store);
app.use(
  createAuth0({
    domain: "dev-nokuvgx3njqonar7.us.auth0.com",
    clientId: "Zlvzh5AbmyofpRg5CYb1HTmkX1aZdoN6",
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  })
);
app.mount("#app");
