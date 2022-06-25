const app = Vue.createApp({
    data(){
        return {
            friends: [
                {
                    id: 'farez',
                    name: 'Ashfaqur Rahman Farez',
                    phone: '01823 232323',
                    email: 'farez@gmail.com'
                },
                {
                    id: 'farhana',
                    name: 'Farhana Yasmin',
                    phone: '01823 242424',
                    email: 'farez@gmail.com'
                }
            ]
        }
    }
});

app.component('friend-component',{
    template: `
        <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
            <ul v-if='detailsAreVisible'>
                <li><strong>Phone:</strong> {{friend.phone}}</li>
                <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'farhana',
                name: 'Farhana Yasmin',
                phone: '01823 242424',
                email: 'farez@gmail.com'
            }
        }    
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app");