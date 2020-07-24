new Vue({
    el: '#app',
    data: {
        running:false,/*Este atributo é responsavle por saber se o jogo está sendo executado ou não*/
        playerLife:100,
        monsterLife:100,
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {
        /*Iniciar o jogo*/
        startGame(){
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
    },
    watch: {

    }
});