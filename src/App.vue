<template>
  <register-name v-if="isNeedSignup" />
  <lobby v-else />
</template>

<script>
import RegisterName from './views/RegisterName.vue';
import Lobby from './views/Lobby.vue';

export default {
  components: {
    RegisterName,
    Lobby,
  },
  data() {
    return {
      isNeedSignup: true,
    };
  },
}
</script>
