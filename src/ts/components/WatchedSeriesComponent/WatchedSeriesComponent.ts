import { Component } from "../Component/Component.js";

export class WatchedSeriesComponents extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "section", "list watched");

    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
      <h3 class="list__title">Watched series</h3>
      <span class="list__info">You have watched 4 series</span>
      <!--<span class="list__info">You have not watched any serie yet</span>-->
      <ul class="series watched"></ul>
    `;
  }
}
