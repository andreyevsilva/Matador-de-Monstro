new Vue({
    el: '#app',
    data: {
        running:false,/*Este atributo é responsavel por saber se o jogo está sendo executado ou não*/
        playerLife:100,
        monsterLife:100,
        logs:[],
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
            this.logs = [];
        },
        /*Para ataques normais e especiais */
        attack(especial){
            this.hurt('monsterLife',5,10,especial,'Player','Monstro','player');
            if(this.monsterLife > 0){
                this.hurt('playerLife',7,12,false,'Monstro','Player','monster');
            }
        },
        /*Machucar*/
        hurt(attr,min,max,especial,source,target,classe){
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min+plus,max+plus);

            /*Caso a subração da vida do jogar pelo ataque, seja negativa, o valor fica 0, 
            assim evita valor negativo */
            this[attr] = Math.max(this[attr] - hurt ,0);

            /*Log de Ferimento */
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`,classe);
        },
        /*Curar e atacar */
        healAndHurt(){
            this.heal(10,15);
            this.hurt('playerLife',7,12,false,'Monstro','Player','monster');
        },
        /*Curar*/
        heal(min,max){
            const heal = this.getRandom(min,max);
            this.playerLife = Math.min(this.playerLife+heal,100);

            /*Log de Cura */
            this.registerLog(`Jogador ganhou força de ${heal}.`,'heal-player');
        },
        /*Registrar Logs

         Obs:usei 'classe', para não ter problemas com a palavra 'class'
        */
        registerLog(text,classe){
            this.logs.unshift({text,classe})
        },
        getRandom(min,max){
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        }
    },
    watch: {
        hasResult(value){
            if (value)
                this.running = false;
            else
                this.running = true;
        }
    }
});