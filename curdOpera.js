
const form = document.querySelector("#myForm")
const ul = document.querySelector("#list")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = document.querySelector("#name").value
    let mobile = document.querySelector("#mobile").value
    let email = document.querySelector('#email').value
    const personData = {
        name,
        mobile,
        email
    }


    const config = {
        method: "POST",
        url: 'https://crudcrud.com/api/644c82c012ff4aa88bda54c6f01a011a/appointmentData',

        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            Name: name,
            MobileNo: mobile,
            Email: email
        }
    }

    axios(config)
        .then((res) => {
            console.log(res.data)
        })

        .catch((error) => {
            console.log(error);
        })




    localStorage.setItem(personData.email, JSON.stringify(personData))
    const displayPersonData = JSON.parse(localStorage.getItem(personData.email))
    // console.log(displayPersonData);
    const newLi = document.createElement('li')
    newLi.className = "newItem "
    newLi.textContent = `${name}     ${mobile}     ${email}`
    // console.log(name);
    const edit = document.createElement('button')
    edit.className = "edit w3-btn w3-blue btn"
    edit.name = "edit"
    edit.textContent = 'Edit'
    const del = document.createElement('button')
    del.className = "delete w3-btn w3-blue btn"
    del.textContent = 'Delete'
    del.name = 'delete'

    ul.appendChild(newLi)
    newLi.appendChild(del)
    newLi.appendChild(edit)

    document.querySelector("#name").value = ""
    document.querySelector("#mobile").value = ""
    document.querySelector('#email').value = ""

    newLi.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            e.target.parentNode.remove()
            localStorage.removeItem(personData.email)
        }

        if (e.target.classList.contains('edit')) {
            document.querySelector("#name").value = name
            document.querySelector("#mobile").value = mobile
            document.querySelector('#email').value = email
            e.target.parentNode.remove()
            localStorage.removeItem(personData.email)
        }
    })
})

