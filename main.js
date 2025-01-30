const putOn = function (degrees){
    if (degrees < 0){
        console.log("Stay inside");
    }
    else if (degrees < 30){
        console.log("Wear  coat and a hat");
    }
    else if (degrees < 50){
    console.log("Wear a coat");
}
    else{
        console.log("Wear whatever you want");
    }
}

putOn(49);
putOn(29);
putOn(100);
putOn(-1);