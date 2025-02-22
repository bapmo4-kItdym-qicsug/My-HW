const parapgraph = "The quick brown fox jump over the lazy dog.It the dog barked,was it really lazy?"
const searchTerm = "dog";
let int = parapgraph.indexOf(searchTerm)
console.log(parapgraph.indexOf(searchTerm,int+1));