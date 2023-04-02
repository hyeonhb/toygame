<template>
	<base-popup header-title="Register Nickame">
		<template v-slot:popup-body>
			<base-input :max-length="20" :error-message="nicknameErrMsg" @update-value="updateNickname" />
		</template>
		<template v-slot:popup-foot>
			<button type="button" class="btn-basic btn-cancel" @click="closePopup">Cancel</button>
			<button type="button" class="btn-basic btn-highlight" @click="postNickname">Ok</button>
		</template>
	</base-popup>
</template>

<script>
import BasePopup from './BasePopup.vue';
import BaseInput from '../input/BaseInput.vue';

export default {
  components: {BasePopup, BaseInput},
	data() {
		return {
			nicknameErrMsg: '',
			nickname: '',
		}
	},
	methods: {
		updateNickname(txt) {
			this.nickname = txt;
			this.nicknameErrMsg = this.getErrorMessage(txt);
		},
		getErrorMessage(name) {
			return name === '' ? 'This is required.' : '';
		},
		closePopup() {
			this.$emit('closePopup');
		},
		postNickname() {
			if (this.getErrorMessage(this.nickname) === '') {
				// TODO: do post nickname
				console.log(this.nickname);
			}
			this.closePopup();
		}
	}
}
</script>