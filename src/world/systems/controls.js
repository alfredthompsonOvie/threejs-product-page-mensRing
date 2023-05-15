import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function createControls(camera, el) { 
  const orbitcontrols = new OrbitControls(camera, el);
  orbitcontrols.tick = () => orbitcontrols.update();
  return orbitcontrols;
}
export { createControls };