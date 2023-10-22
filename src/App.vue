<template>
  <div>
    <router-view />
    <the-popup-register-name v-if="isOpenPopup" :is-edit="false" @closePopup="closePopup" />
  </div>
</template>

<script>
import ThePopupRegisterName from '@/components/popup/ThePopupRegisterName.vue';

export default {
  components: {
    ThePopupRegisterName,
  },
  data() {
		return {
			isOpenPopup: true,
		};
	},
  created() {
    this.checkNickname();
  },
	methods: {
    checkNickname() {
      const nickname = this.getNickname();
      this.isOpenPopup = nickname === '';
    },
    getNickname() {
      // TODO API: GET, get nickname
      return '';
    },
		closePopup() {
			this.isOpenPopup = false;
		},
	},
}
</script>
