const app = Vue.createApp({
    data() {
        return {
            name: 'Mohammad Arfizur Rahman',
            age: 27,
            imageUrl: 'https://www.researchgate.net/profile/Bestoun-Ahmed/publication/325120814/figure/fig1/AS:651446374658048@1532328327579/Software-Architecture-of-a-3-Tier-System-Under-Test.png',
        }
    },
    methods: {
        randomNumber(){
           const random = Math.random();
           return random.toFixed(2);   
        }
    }
});

app.mount('#assignment');