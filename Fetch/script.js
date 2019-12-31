document.getElementById('btnTxt').addEventListener("click", getText);
document.getElementById('btnUsers').addEventListener("click", getUsers);
document.getElementById('btnJSON').addEventListener("click", getJSON);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText(){
    fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
        document.getElementById('output').innerHTML = data;
    })
}

function getUsers(){
    fetch('users.json')
    .then(res => res.json())
    .then(data => {
        var out = "";
        for(var i=0; i<data.length; i++){
            
            out += `
                <ul>
                <li>${data[i].id}</li>
                <li>${data[i].name}</li>
                <li>${data[i].email}</li>
                </ul>
            `
        }
        document.getElementById('output').innerHTML = out;
    })
}

function getJSON(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => {
       let out = "";
       data.forEach( post =>{
        out += `
            <ul>
                <li>${post.title}</li>
                <li>${post.body}</li>
            </ul>
        
        `
       })
       document.getElementById('output').innerHTML = out;
   })
}

function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({title: title, body: body})
        
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('output').innerHTML = `<ul>
            <li>${data.title}</li>
            <li>${data.body}</li>
        </ul>`
    })
}