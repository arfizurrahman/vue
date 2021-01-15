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
        setName(event, name) {
            this.name = event.target.value + " " + name;
        },
        confirmName() {
            this.confirmedName = this.name;
        },
        submitForm() {
            alert('Submitted')
        }
    }
});

app.mount('#events');