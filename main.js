new Vue({
    el:"#app",
    data:{
        // message: 'Bonjour,1er test vue js',
        // notshow:'au revoir',
        // show:false,
        // divStyle:{
        //    'background-color':'#A7E0E0',
        //    'padding':'10px',
        // },
        // bg: true

        name:'',
        names:['amal' ,'sara ','salma','soukaina']
         },
         methods:
         {
             addName(){
                 this.names.push('Houda');
             }
         }
});