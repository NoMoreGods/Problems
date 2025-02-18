Promise.resolve(1)
    .then(x=>x+1) //1+1 = 2
    .then(x=>x+'str') // 2+'str' ='2str'
    .then(x=>{throw x}) 
    .then(x=>x+3)
    .then(x=>console.log(x))
    .catch(err => console.log(err)) //console.log выведет '2str'
    .then(x => Promise.resolve(x)) //undefined
    .catch(err=>console.log(err))
    .then(x=> console.log(x)) //console.log выведет undefined
