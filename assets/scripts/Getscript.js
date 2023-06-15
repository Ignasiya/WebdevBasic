async function start() {
    let url = 'https://jsonplaceholder.typicode.com/users/';
    let response = await fetch(url);
    let users = await response.json();
    console.log(users);
}

start();