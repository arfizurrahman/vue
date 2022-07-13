<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script setup>
import { computed, inject, onMounted, onBeforeMount } from 'vue'
const props = defineProps(['firstName', 'lastName']);

const age = inject('userAge');

const userName = computed(function () {
    return props.firstName + ' ' + props.lastName;
})

onBeforeMount(function () {
    console.log('Before mount')
})

onMounted(function () {
    console.log('on mounted')
})

</script>

<!-- <script>
export default {
    setup(props, context){

    }
}
</script> -->