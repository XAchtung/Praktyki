checkResponse =(response)=>{
    if(response.status == 200){
        return response.json();
    }else{
        throw new Error("Network response was not 200");
    }
}

printPost =(myJson)=>{
    for(const post of myJson){
        console.log("title: ", post.title);
        console.log("body: ", post.body);
    }
}

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(checkResponse)
    .then(printPost)
    .catch(console.error)