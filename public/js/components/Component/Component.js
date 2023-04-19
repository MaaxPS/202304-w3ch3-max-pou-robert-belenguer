export class Component {
    element;
    constructor(parentElement, tagName, className) {
        this.element = document.createElement(tagName);
        this.element.className = className;
        parentElement.appendChild(this.element);
    }
}
//# sourceMappingURL=Component.js.map