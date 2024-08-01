const btn = document.getElementById("btn")
 
btn.addEventListener('click', async () => {
	const text = document.getElementById("text").value;
	const delay = parseInt(document.getElementById("delay").value);
	// const delay = +(document.getElementById("delay").value);
	await delayFunction(delay);
	document.getElementById("output").innerText = text;
})

function  delayFunction(delay) {
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}