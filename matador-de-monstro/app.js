new Vue({
    el: '#app',
    data: {
        running:false,/*Este atributo é responsavle por saber se o jogo está sendo executado ou não*/
        playerLife:0,
        monsterLife:100,
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    method: {

    },
    watch: {

    }
});