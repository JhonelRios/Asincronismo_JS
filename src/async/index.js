const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Do Something Async"), 2000)
            : reject(new Error("Test Error"))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log("Primera llamada")
doSomething()

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
    } catch (error) {
        console.error(error)
    }
}

console.log("Segunda llamada")
anotherFunction()