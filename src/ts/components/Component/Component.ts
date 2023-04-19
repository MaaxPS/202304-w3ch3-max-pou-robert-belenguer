import { type ComponentStructure } from "../../types/types";

export abstract class Component implements ComponentStructure {
  element: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
  }

  abstract renderHtml(): void;
}
