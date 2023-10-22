<template>
  <section>
    <the-header />
    <router-view />
    <the-popup-register-name v-if="isOpenPopup" :is-edit="false" @closePopup="closePopup" />
  </section>
</template>

<script>
import TheHeader from './components/common/TheHeader.vue';
import ThePopupRegisterName from '@/components/popup/ThePopupRegisterName.vue';

export default {
  components: {
    TheHeader,
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
      return 'TEMP';
    },
		closePopup() {
			this.isOpenPopup = false;
		},
	},
}
</script>
