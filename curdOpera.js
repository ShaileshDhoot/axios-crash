
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
            axios.delete(`https://crudcrud.com/api/c2bf44aa787142ca906a26200f4bb12b/Register/${_id}`)
                .then(response => showOutput(res))
                .catch(err => console.error(err))
        }
        if (e.target.classList.contains('edit')) {
            document.querySelector("#name").value = name
            document.querySelector("#mobile").value = mobile
            document.querySelector('#email').value = email
            e.target.parentNode.remove()
            localStorage.removeItem(personData.email)
            const config = {
                method: "PUT",
                url: `https://crudcrud.com/api/c2bf44aa787142ca906a26200f4bb12b/Register/${_id}`,
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
        }
    })

    const config = {
        method: "POST",
        url: 'https://crudcrud.com/api/7f8066b1bb5d442e8b18ac498e34b275/Register',

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

})
window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()

    axios('https://crudcrud.com/api/7f8066b1bb5d442e8b18ac498e34b275/Register')
        .then((response) => {
            console.log(response);
            console.log(response.data)

            for (let i = 0; i < response.data.length; i++) {
                let newUl = document.querySelector('.display')
                const newLi = document.createElement('li')
                newLi.className = "newItem "
                newLi.textContent = `${response.data[i].Name}     ${response.data[i].MobileNo}     ${response.data[i].Email}`
                const edit = document.createElement('button')
                edit.className = "edit w3-btn w3-blue btn"
                edit.name = "edit"
                edit.textContent = 'Edit'
                const del = document.createElement('button')
                del.className = "delete w3-btn w3-blue btn"
                del.textContent = 'Delete'
                del.name = 'delete'
                newUl.appendChild(newLi)
                newLi.appendChild(del)
                newLi.appendChild(edit)
            };
        }).catch((error) => {
            console.log(error);
        })
})