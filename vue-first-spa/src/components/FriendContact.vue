<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data(){
        return {
            detailsAreVisible: false,
            friend: {
                id: 'Ashfaq',
                name: 'Ashfaqur Rahman',
                phone: '02323 232323',
                email: 'ashfaq@gmail.com'
            },
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}
</script>
