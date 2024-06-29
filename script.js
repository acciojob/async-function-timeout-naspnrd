const btn = document.getElementById("btn");
btn.addEventListener('click', async function(){ 
	const text = document.getElementById("text").value; // string
	const delay = parseInt(document.getElementById("delay").value); // string
	
	// wait
	await delayFunction(delay);
	// display the output
	document.getElementById("output").innerText = text;
	
})

function delayFunction(delay){
	return new Promise(resolve => {
		setTimeout(resolve, delay);
	})
}