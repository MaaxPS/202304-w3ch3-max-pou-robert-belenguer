import { Component } from "../Component/Component.js";

class AppContainer extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
      <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main-content">
         <h2 class="main-content__title">Series list</h2>
      </main>
      `;
  }
}

export default AppContainer;
