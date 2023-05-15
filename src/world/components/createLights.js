import { DirectionalLight, PointLight, SpotLight, SpotLightHelper } from "three";

function createLights() { 
  const pointLight = new PointLight('white', 100);
  pointLight.position.set(10,-10,-10);
  const pointLight2 = new PointLight('white', 100);
  pointLight2.position.set(-10,10,-10);
  const pointLight3 = new PointLight('white', 100);
  pointLight3.position.set(10, -1, 2);
  

  const spotLight = new SpotLight('white');
  spotLight.penumbra = 0.4;
  spotLight.position.set(10, 14, 5);
  spotLight.intensity = 1;
  

  const dirLight = new DirectionalLight('white', 8);
  dirLight.position.set(10, 10, 10);
  
  return { pointLight, pointLight2, pointLight3, spotLight, dirLight };
}
export { createLights };