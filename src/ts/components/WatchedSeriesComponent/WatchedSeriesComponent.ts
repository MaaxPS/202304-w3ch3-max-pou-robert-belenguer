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
      <ul class="series">
        <li class="serie">
          <img class="serie__poster"
            src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
            alt="The Sopranos poster" />
          <h4 class="serie__title">The Sopranos</h4>
          <span class="serie__info">David Chase (1999)</span>
          <ul class="score">
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="1/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="2/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="3/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="4/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="5/5"></i></button>
            </li>
          </ul>
          <button><i class="icon icon--delete fas fa-times-circle"></i></button>
        </li>
        <li class="serie">
          <img class="serie__poster"
            src="https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA=="
            alt="Game of Thrones poster" />
          <h4 class="serie__title">Game of Thrones</h4>
          <span class="serie__info">David Benioff (2011)</span>
          <ul class="score">
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="1/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="2/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="3/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="4/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="5/5"></i></button>
            </li>
          </ul>
          <button><i class="icon icon--delete fas fa-times-circle"></i></button>
        </li>
        <li class="serie">
          <img class="serie__poster" src="https://es.web.img3.acsta.net/pictures/21/02/10/20/02/0834301.jpg"
            alt="Mad Men poster" />
          <h4 class="serie__title">Mad Men</h4>
          <span class="serie__info">Matthew Weiner (2007)</span>
          <ul class="score">
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="1/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="2/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="3/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="4/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="5/5"></i></button>
            </li>
          </ul>
          <button><i class="icon icon--delete fas fa-times-circle"></i></button>
        </li>
        <li class="serie">
          <img class="serie__poster" src="https://www.cine.com/media/series/2711.jpg" alt="6 feet under poster" />
          <h4 class="serie__title">6 feet under</h4>
          <span class="serie__info">Alan Ball (2001)</span>
          <ul class="score">
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="1/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="2/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="3/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="4/5"></i></button>
            </li>
            <li class="score__star">
              <button><i class="icon-score fas fa-star" title="5/5"></i></button>
            </li>
          </ul>
          <button><i class="icon icon--delete fas fa-times-circle"></i></button>
        </li>
      </ul>
    `;
  }
}
