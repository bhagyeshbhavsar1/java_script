let animes = [ "naruto", "one-piece" , "bleach" , "dragon-ball" , "horimiya" ];

animes[1] = "naruto shippuden";


animes.push( "solo leveling");
animes.pop();

let list_anime = animes.length;

animes.unshift("hunter x hunter");
animes.shift();

let index = animes.indexOf("naruto");
let indexs = animes.indexOf("baka");

//array sorting 

animes.sort();
animes.sort().reverse();

console.log(animes);
console.log("the size of the array is" +list_anime);
console.log(index);
console.log(indexs);
