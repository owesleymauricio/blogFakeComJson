// https://jsonplaceholder.typicode.com/posts
async function readPosts(){
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = `Carregando...`
    let response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if(json.length > 0){
        postArea.innerHTML =''
        for (let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</div>`
            postArea.innerHTML += postHtml
        }
    } else {
        postArea.innerHTML = 'Nada aqui'
    }
}
async function addNewPost(title, body){
    await fetch ( 'https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: json.stringify({
             title,
             body,
            userId: 2
        })
    }
   )
   document.querySelector('#titlefield').value = ''
   document.querySelector('#bodyfield').value = ''
   readPosts()
}
    function btn() {
        let title = document.querySelector('#titlefield').value       
        let body  = document.querySelector('#bodyfield').value

        if(title && body){
            addNewPost(title, body)
        } else {
            alert('[ERRO] PREENCHA BONITINHO')

            
        }
    }

readPosts()