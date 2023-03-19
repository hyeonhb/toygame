<template>
	<section aria-roledescription="Lobby">
		<div>Lobby</div>
		<the-popup-register-name />
	</section>
</template>

<script>
import ThePopupRegisterName from '@/components/popup/ThePopupRegisterName.vue';

export default {
	components: {ThePopupRegisterName},
}
</script>