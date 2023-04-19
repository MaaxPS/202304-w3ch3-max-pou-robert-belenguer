import AppContainer from "./components/AppContainer/AppContainer.js";
import { CardComponent } from "./components/CardComponent/CardComponent.js";
import { PendingSeriesComponent } from "./components/PendingSeriesComponent/PendingSeriesComponent.js";
import { WatchedSeriesComponents } from "./components/WatchedSeriesComponent/WatchedSeriesComponent.js";
const series = [
    {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster: "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        isWatched: false,
        score: 3,
        emmies: 21,
    },
    {
        id: 2,
        name: "Game of Thrones",
        creator: "David Benioff",
        year: 2011,
        poster: "https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA==",
        isWatched: false,
        score: 0,
        emmies: 164,
    },
    {
        id: 3,
        name: "Mad Men",
        creator: "Matthew Weiner",
        year: 2007,
        poster: "https://es.web.img3.acsta.net/pictures/21/02/10/20/02/0834301.jpg",
        isWatched: true,
        score: 5,
        emmies: 116,
    },
    {
        id: 4,
        name: "6 feet under",
        creator: "Alan Ball",
        year: 2001,
        poster: "https://www.cine.com/media/series/2711.jpg",
        isWatched: true,
        score: 5,
        emmies: 53,
    },
];
const seriesIsWatched = [];
series.forEach((serie) => {
    if (!serie.isWatched) {
        seriesIsWatched.push(serie);
    }
});
const seriesIsPending = [];
series.forEach((serie) => {
    if (serie.isWatched) {
        seriesIsPending.push(serie);
    }
});
const body = document.querySelector("body");
new AppContainer(body);
const appContainer = document.querySelector(".main-content");
new PendingSeriesComponent(appContainer);
new WatchedSeriesComponents(appContainer);
const pendingContainer = document.querySelector(".series.pending");
const watchedContainer = document.querySelector(".series.watched");
seriesIsPending.forEach((serie) => {
    new CardComponent(pendingContainer, serie);
});
seriesIsWatched.forEach((serie) => {
    new CardComponent(watchedContainer, serie);
});
//# sourceMappingURL=index.js.map