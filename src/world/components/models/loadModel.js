import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel";
// import { MathUtils } from "three";

async function loadModel() { 
  const loader = new GLTFLoader();

  const modelData = await loader.loadAsync('/src/assets/models/diamond_encrusted_gold_ring.glb');
  
  const model = setupModel(modelData);
  // const radiansPerSecond = MathUtils.degToRad(30);

  // model.tick = (delta) => {
  //   model.rotation.x += radiansPerSecond * delta;
  //   model.rotation.y += radiansPerSecond * delta;
  //   model.rotation.z += radiansPerSecond * delta;
  // }
  return model;
}

export { loadModel };