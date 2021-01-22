const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Learn Vue!',
            courseGoalB: 'Master Vue!',
            vueLink: 'https://vuejs.org/',
            counter: 0,
            name: '',
            confirmedName: ''
        };
    },
    computed: {
        fullname() {
            console.log('Running')
            if (this.name === '') {
                return ''
            }
            return this.name + " " + "Rahman"
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            }
            return this.courseGoalB;
        },
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        },
        setName(event) {
            this.name = event.target.value;
        },
        outputFullname() {
            if (this.name === '') {
                return ''
            }
            return this.name + " " + "Rahman"
        },
        confirmName() {
            this.confirmedName = this.name;
        },
        submitForm() {
            alert('Submitted')
        },
        resetInput() {
            this.name = '';
        }
    }
});

app.mount('#events');