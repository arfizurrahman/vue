const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Learn Vue!',
            courseGoalB: 'Master Vue!',
            vueLink: 'https://vuejs.org/',
            counter: 0,
            name: '',
            lastName: '',
            confirmedName: '',
            // fullname: ''
        };
    },
    watch: {
        // name(value) {
         //     if (value === '') {
        //         this.fullname = ''
        //     } else {
        //         this.fullname = value + " " + this.lastName
        //     }
        // },
        // lastName(value) {
        //     if (value === '') {
        //         this.fullname = ''
        //     } else {
        //         this.fullname = this.name + " " + value
        //     }
        // },
        counter(value) {
            if (value > 50) {
                this.counter = 0;
            }
        }
    },
    computed: {
        fullname() {
            console.log('Running')
            if (this.name === '' || this.lastName === '') {
                return ''
            }
            return this.name + " " + this.lastName;
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