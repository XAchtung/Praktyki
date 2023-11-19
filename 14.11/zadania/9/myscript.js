const myPromiese = new Promise((resolve, reject) => {
    setTimeout(() => {resolve("Udało się!");}, 5000);
}) 

myPromiese
    .then(console.log);