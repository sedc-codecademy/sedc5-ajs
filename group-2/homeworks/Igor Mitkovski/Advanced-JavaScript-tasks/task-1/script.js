let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	let xhr = XMLHttpRequest();
	xhr.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/filelist.json', true);
	xhr.send(null);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			let filelist = JSON.parse(xml.responseText);
			let randomElement = filelist[Math.floor(Math.random() * filelist.length)];
			console.log(randomElement);
			let secondRequest = XMLHttpRequest();
			secondRequest.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/', true);
			secondRequest.send(null);

			secondRequest.onreadystatechange = function() {
				if (secondRequest.readyState == XMLHttpRequest.DONE) {
					let randomFile = JSON.parse(secondRequest.responseText);
					console.log("randomFile");
				}
			}
		}
	}
});