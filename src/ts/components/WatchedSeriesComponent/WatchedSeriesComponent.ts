import type { SeriesStructure } from "../../types/types.js";
import { CardComponent } from "../CardComponent/CardComponent.js";
import { Component } from "../Component/Component.js";

export class WatchedSeriesComponents extends Component {
  seriesWatched: SeriesStructure[];
  constructor(parentElement: Element, seriesData: SeriesStructure[]) {
    super(parentElement, "section", "list watched");
    this.seriesWatched = seriesData.filter((serie) => serie.isWatched);

    this.renderHtml();
    this.createCards();
  }

  renderHtml() {
    this.element.innerHTML = `
      <h3 class="list__title">Watched series</h3>
      <span class="list__info">You have watched ${
        this.seriesWatched.length
      } series</span>

      ${
        this.seriesWatched.length === 0
          ? `<!--<span class="list__info">You have not watched any serie yet</span>-->`
          : ""
      }
      
      <ul class="series watched"></ul>
    `;
  }

  createCards() {
    const listContainer = this.element.querySelector(".watched")!;

    this.seriesWatched.forEach((serie) => {
      new CardComponent(listContainer, serie);
    });
  }
}
