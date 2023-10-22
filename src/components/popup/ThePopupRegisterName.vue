<template>
	<base-popup :header-title="`닉네임 ${this.actionType}`">
		<template v-slot:popup-body>
			<base-input :max-length="20" :error-message="nicknameErrMsg" @update-value="updateNickname" />
		</template>
		<template v-slot:popup-foot>
			<!-- <button type="button" class="btn-basic btn-cancel" @click="closePopup">Cancel</button> -->
			<button type="button" class="btn-basic btn-highlight" :class="{'disabled-click': onError}" @click="postNickname">
				{{ this.actionType }}
			</button>
		</template>
	</base-popup>
</template>

<script>
import BasePopup from './BasePopup.vue';
import BaseInput from '../input/BaseInput.vue';

export default {
  components: {BasePopup, BaseInput},
	props: {
		isEdit: {
			type: Boolean,
			default: true,
		}
	},
	data() {
		return {
			nicknameErrMsg: '',
			nickname: '',
			actionType: this.isEdit ? '수정' : '등록',
		}
	},
	computed: {
		onError() {
			return this.nicknameErrMsg !== '';
		},
	},
	created() {
		this.updateNickname('');
	},
	methods: {
		updateNickname(txt) {
			this.nickname = txt;
			this.nicknameErrMsg = this.getErrorMessage(txt);
		},
		getErrorMessage(name) {
			return name === '' ? '닉네임을 입력해 주세요.' : '';
		},
		closePopup() {
			this.$emit('closePopup');
		},
		postNickname() {
			const isVerified = this.getErrorMessage(this.nickname) === '';
			if (!isVerified) return false;

			// TODO API: post, register nickname
			this.closePopup();
		}
	}
}
</script>