const genPicture = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => {
		if(!response.ok) {
			throw new Error("Network response was not OK")
		}
		return response.json()
	})
	.then((myJson) => {
        const json = myJson.filter((json) => json.id == 3)[0];
		let h1 = document.createElement('h1');
		h1.src = json["title"];
        document.querySelector('body').appendChild(h1)
        let div = document.createElement("div");
        div.textContent = json["body"];
        document.querySelector("h1").appendChild(div);
	})
	.catch((error) => console.error('There has been some kind of problem: ', error))
}
