
const save = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
}

const get = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}

export { save, get };