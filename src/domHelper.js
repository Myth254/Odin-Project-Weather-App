export function el(tagName, options = {}, children = []) {
    // create element
    const element = document.createElement(tagName)

    // Extract known properties, rest are attributes
    const { classes = [], textContent, ...attributes } = options

    // apply classes
    classes.forEach(className => {
        if (className) element.classList.add(className)
    })

    // apply textcontent
    if (textContent !== undefined) {
        element.textContent = textContent
    }

    // Apply HTML attributes (e.g., id, type, data-*, placeholder)
    Object.entries(attributes).forEach(([key, val]) => {
        if (val !== undefined) {
            element.setAttribute(key, val)
        }
    })

    // Nest children
    children.forEach(child => {
        if (child instanceof HTMLElement) {
            element.appendChild(child)
        }
    })

    return element
}