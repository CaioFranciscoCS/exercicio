async function getUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await resp.json();

    return users;

    //document.querySelector(".name").innerText = posts.name
    //document.querySelector(".username").innerText = posts.username
    //document.querySelector(".email").innerText = posts.email
    //document.querySelector(".phone").innerText = posts.phone
    // document.querySelector(".website").innerText = posts.website
    //document.querySelector(".address").innerText = `${posts.address.street}, ${posts.address.city}, ${posts.address.zipcode}`
    //document.querySelector(".company").innerText = posts.company.name
} 

async function updateTable () {
    let tableBody = document.querySelector(".js-user-line")
    let users = await getUsers()
    let linhas = ""
    for(let user of users) {
        linhas += `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>
                <button>exibir</button>
            </td>
        </tr>
        `

    }
    tableBody.innerHTML = linhas
}

updateTable()