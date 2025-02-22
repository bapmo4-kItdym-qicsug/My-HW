const findword= function(drow){
    const word1 = drow;
    const words = word1.split('');
    words.reverse();
    const word2 = words.join('');
    console.log(word2);
}

findword("Civic");
findword("Racecar");
findword("Testset");
findword("Madam");
