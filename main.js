const getUrl = "https://api.tvmaze.com/search/shows?q=predator";
fetch(getUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
