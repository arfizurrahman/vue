const app = Vue.createApp({
    data(){
        return {
            keydownInput: '',
            confirmedInput: '',
            input: ''
        }
    },
    methods:{
        showAlert(){
            alert('Alert shown!');
        },
        saveInput(event){
            this.input = event.target.value;
        },
        confirmInput(){
            this.confirmedInput = this.input;
        },
    }
});

app.mount('#assignment')