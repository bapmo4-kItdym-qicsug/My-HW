const grade = [
    {
        name:"Nika",
        score: 95
    },
    {
        name:"Liza",
        score: 59,
    },
    {
        name:"Vika",
        score: 20,
    },
    {
        name:"Vova",
        score: 47,
    },
    {
        name:"Nastya",
        score: 80,
    },
    {
        name:"Dima",
        score: 33,
    },
    {
        name:"Anya",
        score: 100,
    },
    {
        name:"Dasha",
        score: 70,
    }
 ]

 let sortingGrade = function(){
    for(let i=0; i<grade.length; i++){
        if (grade[i].score >= 90){
            console.log(grade[i].name + " you get 90-100 points, you get grade A " );
        }
        else if (grade[i].score >= 70){
            console.log(grade[i].name + " you get 70-89 points, you get grade B "  );
        }
        else if (grade[i].score >= 50){
            console.log(grade[i].name + " you get 50-69 points, you get grade C ");
        }
        else{
            console.log(grade[i].name + " you get 0-49 points, you get grade F ");
        }
    }
 }

 sortingGrade();