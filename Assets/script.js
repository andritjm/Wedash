function initPage() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const historyEl = document.getElementById("history");
    const nameEl = document.getElementById("city-name");
    const picksEl = document.getElementById("current-picks");
    const tempEl = document.getElementById("temperature");
    const humEl = document.getElementById("humidity");
    const windEl = document.getElementById("wind-speed");
    const UVEl = document.getElementById("UV-index");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory)

}