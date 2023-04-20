import { type SeriesStructure } from "../../types/types.js";
import { Component } from "../Component/Component.js";

export class CardComponent extends Component {
  constructor(parentElement: Element, public serieData: SeriesStructure) {
    super(parentElement, "li", "serie");

    this.getStars();
    this.renderHtml();
  }

  getStars() {
    let stars = "";

    if (!this.serieData.isWatched) {
      for (let i = 0; i < this.serieData.score; i++) {
        stars += `<li class="score__star"><button><i class="icon icon--score far fa-star" title="${
          i + 1
        }/5"></i></button></li>`;
      }
    }

    if (this.serieData.isWatched) {
      for (let i = 0; i < this.serieData.score; i++) {
        stars += `<li class="score__star"><button><i class="icon icon--score far fa-star" title="${
          i + 1
        }/5"></i></button></li>`;
      }
    }

    return stars;
  }

  renderHtml() {
    this.element.innerHTML = `
    <img class="serie__poster"
              src="${this.serieData.poster}"
              alt="${this.serieData.name} poster" />
            <h4 class="serie__title">${this.serieData.name}</h4>
            <span class="serie__info">${this.serieData.creator} (${
      this.serieData.year
    })</span>
            <ul class="score">
              ${this.getStars()}
            </ul>
            <button><i class="icon icon--delete fas fa-times-circle"></i></button>`;
  }
}
