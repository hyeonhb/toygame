<template>
  <div>
    <input type="text" class="base-input" :class="{'input-error': onError}" :value="inputText" :maxlength="maxLength" @input="inputEvent">
    <p v-show="onError" class="error-message">{{errorMessage}}</p>
  </div>
</template>

<script>
export default {
  props: {
    maxLength: {
      type: Number,
      default: 20,
    },
    initValue: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputText: '',
    };
  },
  watch: {
    initValue: {
      immediate: true,
      handler(txt) {
        this.inputText = txt;
      },
    },
  },
  computed: {
    onError() {
      return this.errorMessage !== '';
    },
  },
  methods: {
    inputEvent(evt) {
      this.inputText = evt.target.value;
      this.$emit('updateValue', this.inputText);
    },
  },
};
</script>

<style>
.base-input {
  width: 100%;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
}
.base-input:focus-visible {
  outline: unset;
  border-width: 2px;
}
.input-error {
  border-color: red;
}
.error-message {
  color: red;
}
</style>