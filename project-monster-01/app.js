function getRandomVlaue(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        monsterBarStyles(){
            if(this.monsterHealth < 0) 
                return {width: '0%'};
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            if(this.playerHealth < 0) 
                return {width: '0%'};
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        playerHealth(value){
           if(value <= 0 && this.monsterHealth <= 0){
            this.winner = 'draw';
           } else if (value <= 0){
            this.winner = 'monster';
           }
        },
        monsterHealth(value){
           if(value <= 0 && this.playerHealth <= 0){
            this.winner = 'draw';
           } else if(value <= 0) {
            this.winner = 'player';
           }
        }
    },
    methods: {
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomVlaue(5,12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player','attack',attackValue);

            this.attackPalyer();
        },
        attackPalyer(){
            const attackValue = getRandomVlaue(8,15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster','attack',attackValue);
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomVlaue(10,25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player','attack',attackValue);

            this.attackPalyer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomVlaue(8,20);
            if(this.playerHealth + healValue > 100)
            {
                this.playerHealth = 100;
            } else {
                this.playerHealth -= healValue;
            }
            this.addLogMessage('player','heal',healValue);
            this.attackPalyer();
        },
        surrender() {
            this.winner = 'monster'
        },
        addLogMessage(who,what,value){
            this.logMessages.unshift({
                actionBy: who, 
                actionType: what, 
                actionValue: value
            })
        }
    }
});

app.mount("#game")