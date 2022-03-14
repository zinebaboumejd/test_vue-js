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
// **********P2**********************
        // name:'',
        // names:['amal' ,'sara ','salma','soukaina']
        //  },
        //  methods:
        //  {
        //      addName(){
        //          this.names.push('Houda');
        //      }
// ***************P3:calculatrice*******************
       nombre1 :0,
       nombre2 :0,
       result :0
          },
          methods:{
                  addition(){
                          return this.result = parseInt(this.nombre1)+parseInt(this.nombre2);
                  },
                  sustraction(){
                        return this.result = parseInt(this.nombre1)-parseInt(this.nombre2);
                  },
                  multiplication(){
                        return this.result = parseInt(this.nombre1)*parseInt(this.nombre2);
                  },
                  division(){
                        if(this.nombre1==0 || this.nombre2==0){
                                return this.result=0;
                        }else{
                                return this.result =Math.round(parseInt(this.nombre1)/parseInt(this.nombre2));
                              //  return this.result =Math.floor(parseInt(this.nombre1)/parseInt(this.nombre2));
                    }
                  },
                  CE(){
                          this.nombre1=0;
                          this.nombre2=0;
                          this.result=0;
                  }


          }
});