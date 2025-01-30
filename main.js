const verification = function( login, password) { 
    if ( login === "nika@l" && password === "nnnz") { 
    console.log("You are logged in"); 
    }
    else if ( login ==! "nika@l" && password === "nnnz") { 
    console.log ("Your login is wrong ");
    }
    else if ( login === "nika@l" && password ==! "nnnz") { 
    console.log ("Your password is wrong");
    }
    else {
    console.log("Both inputs are wrong");
    }
}