let array = ["Google", "Apple", "Visa", "Netflex", "Verizon", "Coca-Cola", "Nike" ,"Disney", "Instagram", "Orange"]
function chooceCompany (){
    for (let i = 0; i < array.length; i++){
        if(i === 0){
            console.log("My choise first " + array [0]);
        }
        else if ( i === 1){
            console.log("My choise secound " + array [1])
        }
        else if ( i === 2){
            console.log("My choise therd " + array [2])
        }
        else{
            console.log("My choise " + array [i])
        }
    }
}

chooceCompany();