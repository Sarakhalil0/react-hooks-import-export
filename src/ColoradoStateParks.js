import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife ,elevation} from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

console.log(RMFunctions.trees);
// => "Aspen and Pine"

RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

RMFunctions.elevation();

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(trees)
  wildlife()
  elevation()

  
  
  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks