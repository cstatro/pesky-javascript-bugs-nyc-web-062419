function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepository);
  req.open("GET", "https://api.github.com/users/octocat/repos");
  req.send();
}

function showRepository(event, data) {
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById("repository-template").innerHTML;
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  document.getElementById("repositories").innerHTML = repoList;
}

document.addEventListener("DOMContentLoaded", event => {
  Handlebars.registerPartial(
    "authorPartial",
    document.getElementById("author-partial-template").innerHTML
  );
});
