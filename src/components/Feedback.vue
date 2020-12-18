<template>
  <div class="feedback">
    <div class="feedback__header">
      {{ $options.titles.feedback.header | translate }}
    </div>
    <form class="form__container">
      <CustomInput
        v-for="(input, index) in inputs"
        :key="index"
        :label="input | translate"
        :isWide="index === 'textarea'"
        v-model="$v[index].$model"
        :error="$v[index].$invalid && $v[index].$dirty"
      />
      <div class="form__submit" @click="submit">
        {{ $options.titles.feedback.button | translate }}
      </div>
    </form>
  </div>
</template>


<script>
import { titles } from "../data/titles.data";
import CustomInput from "../components/CustomInput";
import { required, email, numeric, helpers } from "vuelidate/lib/validators";
const phone = helpers.regex("phone", /^((7|8)+([0-9]){10})$/);

export default {
  titles,
  components: {
    CustomInput,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      textarea: "",
    };
  },
  computed: {
    inputs() {
      return titles.feedback.inputs;
    },
  },
  validations: {
    name: { required },
    email: { email },
    phone: { numeric, phone },
    textarea: {required},
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        fetch("http://httpbin.org/post", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.data),
        })
          
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.feedback {
  padding: 5px;
}

.feedback__header {
  text-align: center;
  font-size: 1.8vw;
  color: $lighter-red;
  font-weight: 600;
}
.form__container {
  @include flexcol(center);
}
.form__submit {
  cursor: pointer;
  width: 18vw;
  height: 4vw;
  background-color: $lighter-red;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  text-align: center;
  line-height: 4vw;
  font-size: 1.6vw;
  box-shadow: none;
  margin: 1vw 0;
  @include mobile {
    font-size: 18px;
    width: 80%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  font-family: "Montserrat", sans-serif;
}
</style>