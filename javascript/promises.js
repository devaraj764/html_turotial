// Promises
// Promises represent asynchronous operations.

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000);
});

fetchData.then(response => console.log(response)).catch(error => console.log(error));

// Async/Await
// Used to handle asynchronous operations more cleanly.

async function fetchAsyncData() {
    try {
        let response = await fetchData;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
fetchAsyncData();