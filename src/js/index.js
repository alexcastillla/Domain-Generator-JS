const pronouns = ["the", "our"];
const adjs = ["great", "big"];
const nouns = ["jogger", "racoon"];
const www = " www.";
const networks = [".com", ".net", ".us", ".io"];

function generadordedominios() {
  let resultado = [];

  for (pronoun = 0; pronoun < pronouns.length; pronoun++) {
    for (adj = 0; adj < adjs.length; adj++) {
      for (noun = 0; noun < nouns.length; noun++) {
        for (network = 0; network < networks.length; network++) {
          resultado.push(www.concat(pronouns[pronoun], adjs[adj], nouns[noun], networks[network]));
        }
      }
    }
  }
  document.querySelector("#answergenerator").innerHTML = resultado;
}
