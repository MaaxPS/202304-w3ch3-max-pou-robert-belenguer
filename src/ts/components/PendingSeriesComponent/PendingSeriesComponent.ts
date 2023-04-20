import { type SeriesStructure } from "../../types/types.js";
import { CardComponent } from "../CardComponent/CardComponent.js";
import { Component } from "../Component/Component.js";

export class PendingSeriesComponent extends Component {
  seriesPending: SeriesStructure[];

  constructor(parentElement: Element, seriesData: SeriesStructure[]) {
    super(parentElement, "section", "list pending");

    this.seriesPending = seriesData.filter((serie) => !serie.isWatched);
    this.renderHtml();
    this.createCards();
  }

  createCards() {
    const listContainer = this.element.querySelector(".series.pending")!;

    this.seriesPending.forEach((serie) => {
      new CardComponent(listContainer, serie);
    });
  }

  renderHtml() {
    this.element.innerHTML = `
    <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have ${
          this.seriesPending.length
        } series pending to watch</span>
        ${
          this.seriesPending.length === 0
            ? `<!--<span class="list__info">Congrats! You've watched all your series</span>-->`
            : ``
        }
        <ul class="series pending"></ul>`;
  }
}
