export function validateText (text, fieldName) {
    const regexp = /^[a-zA-Zа-яА-я\-']+$/;

    if (!regexp.test(text)) {
        throw new Error(`Your ${fieldName} is invalid!`);
    }
}

export function validatePhone (phone) {
    const regexp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

    if (!regexp.test(phone)) {
        throw new Error(`Your phone number is invalid!`);
    }
}

export function validateEmail (email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexp.test(email)) {
        throw new Error(`Your email is invalid!`);
    }
}