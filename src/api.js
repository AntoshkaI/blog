class Api {
    constructor() {
        this.url = "https://ithub-blog.herokuapp.com/api/"
    }
    getUsers() {
        return fetch(`${this.url}users`)
    }
    getUser(id) {
        return fetch(`${this.url}users/${id}`)
    }
    getPersonInfo(id) { 
        return fetch(`${this.url}users/me/${id}`)
    }
    setPersonInfo(id, body) { 
        return fetch(`${this.url}users/update/${id}`, { 
            method: "PUT",
            header: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    signUp(body) { // email и password required!
        return fetch(`${this.url}users/add`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    logIn(body) { 
        return fetch(`${this.url}users/auth`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    getPosts() { 
        return fetch(`${this.url}posts`)
    }
    getPost(id) { 
        return fetch(`${this.url}posts/${id}`)
    }
    addPost(body) { 
        return fetch(`${this.url}posts/add`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    updatePost(id, body) { 
        return fetch(`${this.url}posts/update/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    deletePost(id) {
        return fetch(`${this.url}posts/${id}`, {
            method: "DELETE"
        })
    }
}

export default Api;