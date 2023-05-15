import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 2;

  return camera;
 }
export { createCamera };