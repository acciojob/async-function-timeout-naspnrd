document.getElementById("btn").addEventListener("click", async () => {
	const text = document.getElementById("text").value;
	const delay = document.getElementById("delay").value;
	if(!text || isNaN(delay)){
		alert("Please fill in all fields and provide a valid delay and text.");
		return;
	}
	// introduce the delay
	await delayFunction(delay);
	document.getElementById("output").innerText = text;
});
function delayFunction(delay){
	return new Promise((resolve, reject) => {
		setTimeout(resolve, delay);
	});
};