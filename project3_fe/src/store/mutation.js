export default {
    /*
    * THD(20-4-23)
    * set name
    */
    setName(state, name) {
        state.name = name
    },

    /**
     * set isAuthenticated
     * THD(15-5-23)
     */
    setAuthenticated(state, value){
        state.isAuthenticated = value
    }
}