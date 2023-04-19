import { Component } from "../Component/Component.js";

export class PendingSeriesComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "section", "list pending");

    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
    <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series pending"></ul>`;
  }
}
