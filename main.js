const glodalVar = "I'm global varible";
function scope(){
    const localVar = "I'm local varible";
    {
        const blockVar = "I'm block varible";
        console.log(glodalVar, "global var inside");// работает 
        console.log(localVar, "local var inside);");// работает 
        console.log(blockVar, "block var inside"); // работает       // Блочная область видимости доступна только внутри какого-либо блока коды, в котором она определена.
    // Локальная работает только внутри функции.
    }
    console.log(glodalVar, "global var inside");// работает 
    console.log(localVar, "local var inside);");// работает 
    console.log(blockVar, "block var inside");// не работает 
}

scope();
console.log(glodalVar, "global var outside");// работает 
console.log(localVar, "local var outside);");//не работает 
console.log(blockVar, "block var outside");// не работает