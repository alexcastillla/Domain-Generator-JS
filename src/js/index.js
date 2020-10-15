var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var www = " www.";
var network = [".com", ".net", ".us", ".io"];

function generadordedominios() {
  let resultado = [];

  for (a = 0; a < pronoun.length; a++) {
    for (b = 0; b < adj.length; b++) {
      for (c = 0; c < noun.length; c++) {
        for (d = 0; d < network.length; d++) {
          resultado.push(www.concat(pronoun[a], adj[b], noun[c], network[d]));
        }
      }
    }
  }
  document.querySelector("#answergenerator").innerHTML = resultado;
}
