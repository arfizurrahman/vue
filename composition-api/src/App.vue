<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="changeAge">Change Age</button>
    <div>
      <input type="text" placeholder="First name" v-model="firstName">
      <input type="text" placeholder="Last name" ref="lastNameInput">
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
// import { ref, reactive, isReactive, isRef } from 'vue';

// const userName = ref('Arfiz');
// const age = ref(26);
// const user = reactive({
//   name: 'Arfiz',
//   age: 26
// })

// setTimeout(() => {
//   user.name = 'Mohammad Arfizur Rahman';
//   user.age = 27;
// }, 2000);

// function changeAge() {
//   user.age = 27
// }


// computed
const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);
const age = ref(26);

function changeAge() {
  age.value = 27
}

function setLastName() {
  lastName.value = lastNameInput.value.value
}


provide('userAge', age);

const userName = computed(function () {
  return firstName.value + ' ' + lastName.value;
})

watch(age, function (newValue, oldValue) {
  console.log('Old Age: ' + oldValue);
  console.log('New Age: ' + newValue);
})

watch([age, userName], function (newValues, oldValues) {
  console.log('Old Age: ' + oldValues[0]);
  console.log('New Age: ' + newValues[0]);

  console.log('Old Name: ' + oldValues[1]);
  console.log('New Name: ' + newValues[1]);
})



</script>

<!-- Manually adding the setup() method -->
<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const userName = ref('Arfiz');


    setTimeout(() => {
      userName.value = 'Mohammad Arfizur Rahman'
    }, 2000);
    return {
      userName
    }
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>
 -->
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>