//your JS code here. If required.
const output=document.getElementById('output');

function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}

createPromise().then((data)=>{
	output.textContent = data;
})