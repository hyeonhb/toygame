<template>
	<div class="full-screen send-center popup-wrapper">
		<div class="popup-container">
			<div class="popup-header">
				<h3 class="header-title">{{ headerTitle }}</h3>
			</div>
			<div class="popup-contents">
				<div>hi</div>
			</div>
		</div>
	</div>
</template>
  
<script>
export default {
	props: {
			popupWidth: String,
			popupHeight: String,
			customPopupStyle: Object,
			headerTitle: {
				type: String,
				required: true,
			},
	},
}
</script>
  
<style>
.popup-wrapper {
	background-color: gray;
	opacity: 0.5;
}
.popup-container {
	width: 100%;
	max-width: 400px;
	background-color: white;
	border-radius: 10px;
	/* 모서리를 둥글게 했을 때 inner elements가 삐져나올 수 있으므로 hidden 처리 */
	overflow: hidden;
	box-shadow: 5px 10px 10px 1px rgba(0,0,0,.3)
}
.popup-header {
	border-bottom: 1px solid black;
}
.header-title {
	padding: 5px;
}
.popup-contents {
	padding: 10px;
}
</style>