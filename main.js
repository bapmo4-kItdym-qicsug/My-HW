const choosePresedent = function(citizenship, age, criminalRecord) {
    if (citizenship == "Kazakhstan" && age >= 35 && criminalRecord == "No") {
        console.log("You can go for President");
    } else if (citizenship != "Kazakhstan") {
        console.log("You can't go for President because you are not a citizen of Kazakhstan");
    } else if (age < 35) {
        console.log("You are still young");
    } else if (criminalRecord == "Yes") {
        console.log("You can't go for President due to a criminal record");
    } else {
        console.log("You can't go for President");
    }
}

choosePresedent("Kazakhstan", 25, "No"); 
choosePresedent("Russia", 40, "No"); 
choosePresedent("Kazakhstan", 40, "No"); 
choosePresedent("Kazakhstan", 50, "Yes"); 
choosePresedent("India", 68, "No"); 
choosePresedent("Kazakhstan", 35, "No"); 