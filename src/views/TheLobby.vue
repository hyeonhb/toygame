<template>
	<section aria-roledescription="Lobby">
		<div>Lobby</div>
		<the-popup-register-name v-if="isOpenPopup" @closePopup="closePopup" />
	</section>
</template>

<script>
import ThePopupRegisterName from '@/components/popup/ThePopupRegisterName.vue';

export default {
	components: {ThePopupRegisterName},
	data() {
		return {
			isOpenPopup: true,
		};
	},
	methods: {
		closePopup() {
			this.isOpenPopup = false;
		},
	},
}
</script>