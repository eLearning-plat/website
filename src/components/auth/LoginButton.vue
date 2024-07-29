<template>
  <div>
    <Button @click="login">Log in</Button>
  </div>
</template>

<script setup>
// Composition API
import { useAuth0 } from "@auth0/auth0-vue";
import { Button } from "../ui/button";

const auth0 = useAuth0();

function login() {
  auth0.loginWithRedirect();
}
</script>
