//Что выведет Promise
Promise.resolve(1)
    .then(x=>x+1) //1+1 = 2
    .then(x=>x+'str') // '2str'
    .then(x=>{throw x}) // выбрасывает ошибку'2str'
    .then(x=>x+3) // игнорируем
    .then(x=>console.log(x)) // игнорируем
    .catch(err => console.log(err)) //console.log выведет ошибку '2str'
    .then(x => Promise.resolve(x)) //undefined
    .catch(err=>console.log(err)) // игнорируем
    .then(x=> console.log(x)) //console.log выведет undefined
