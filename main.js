const  arr = [1, 3, 4, 5, 8, 9];

//percorre todos os items do vetor
const newArr =  arr.map(function(item, index){
    return item + index;
});

console.log(newArr);
// retorna o valor total da soma de todos os items do vetor 
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);
//retorna true ou false da condição passada
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);


// retorna o valor encotrando 
const find = arr.find(function(item){
    return item === 4;
});

console.log(find);