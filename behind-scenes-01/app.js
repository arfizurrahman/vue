const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate(){
    console.log('beforeCreate()');
  },
  created(){
    console.log('created()');
  },
  beforeMount(){
    console.log('beforeMount()');
  },
  mount(){
    console.log('mount()');
  },
  beforeUpdate(){
    console.log('beforeUpdate()');
  },
  updated(){
    console.log('updated()');
  },
  beforeUnmount(){
    console.log('beforeUnmount()');
  },
  unmounted(){
    console.log('unmounted()');
  }
});

app.mount('#app');

// setTimeout(() => {app.unmount()},3000)

const app2 = Vue.createApp({
  data() {
    return {
      favoritFood: 'Pizza!'
    };
  },
  methods: {
  },
});

app2.mount('#app2');

// ------------ //
// let message = 'Hello';

// let longMessage = message + ' World!!';

// console.log(longMessage);

// message = "Hello!!!";

// console.log(longMessage);

/* Reactive approach (done by Vue) behind the scenes */

const data = {
  message: 'Hello',
  longMessage: 'Hello world!!',
};

const handler = {
  set(target, key, value){
    if(key === 'message'){
      target.longMessage = value + " World!";
      target.message = value;
    }
    
  }
};


const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!';

// console.log(proxy.longMessage)


proxy.longMessage = 'None';

// console.log(proxy.message);