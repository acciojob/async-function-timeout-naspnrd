const btn = document.getElementById("btn");
const output = document.getElementById("output");
btn.addEventListener("click", async () => {
	
	const text = document.getElementById("text").value;
	const delay = parseInt(document.getElementById("delay").value);

	await delayFunction(delay);
	output.innerText = text;
	document.getElementById("text").value = '';
	document.getElementById("delay").value = '';
})

function delayFunction(delay) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, delay);
	})
}