import React from "react";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  console.log(RMFunctions.trees);
  console.log(trees);
  wildlife();
  RMFunctions.wildlife();
  RMFunctions.elevation();
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;