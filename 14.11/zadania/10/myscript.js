multiplyAsync =(x,y)=>{
    return promise = new Promise((resolve, reject) => {
        if(typeof(x) === 'number' && typeof(y) === 'number'){
            resolve(x*y);
        }else{
            reject("Argumenty nie sa liczba");
        }
    })
}

multiplyAsync(5, 4)
    .then(console.log)
    .catch(console.error)