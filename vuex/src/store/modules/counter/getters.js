export default {
    // testAuth(state,getters,rootState, rootGetters
    testAuth(state){
        return state.isLoggedIn
    },
    finalCounter(state){
        return state.counter * 2;
    },
    normalizedCounter(_, getters){
        if(getters.finalCounter < 0) return 0;
        if(getters.finalCounter > 100) return 100;
        return getters.finalCounter;
    },
}