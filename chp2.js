 for(let i = 1 ; i <=5 ; i++ ){

        let hash = " ";
        for(let j = 1; j<=i ; j++ ){

                hash+="#";
        }

            console.log(hash);

 }


 //print fizz for no. divisible by there and for divisible by 5 print buzz b/w 1 ti 100


 for(let i = 1 ; i <101 ; i ++){

                if(i%3==0){
                      console.log("fizz");  
                }
                 else if(i%5==0){
                        console.log("buzz");
                }
                 else{

                 console.log(i);

                }
 }




 //print chess pattern of hash 


 for(let i=1 ; i <=8 ; i++){

        let hash="";
        for(let j=1 ; j<=6 ; j++){

                hash+="# ";
        }
        if(i%2==0){

                console.log(hash);
        }
        else{
               console.log(" "+hash);
        }
 }