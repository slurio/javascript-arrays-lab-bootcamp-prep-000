var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
} function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
} function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
} function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
} function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
} function prependKitten(name) {
  array = [name, ...kittens];
  return array;
}
