export default function shuffle(array) {
    // const array = ["a", "b" , "c"]
    let i = array.length, j, temp;
    while(--i > 0) {
      j = Math.floor(Math.random() * (i+1));
      temp = array[j]
      array[j] = array[i]
      array[i] = temp
      console.log("shuffle",array)
    }
    return array
  
  }