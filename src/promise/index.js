const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Bien hecho!")
        } else {
            reject("Oppps...")
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))