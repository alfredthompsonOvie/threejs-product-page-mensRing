import { MathUtils } from "three";

async function setupModel(data) {

  const model = data.scene.children[0];
  // console.log(model);
  model.scale.set(0.8, 0.8, 0.8);
  model.position.set(.6, 0, 0);

  const radiansPerSecond = MathUtils.degToRad(30);

  model.tick = (delta) => {
    model.rotation.x += radiansPerSecond * delta;
    model.rotation.y += radiansPerSecond * delta;
    model.rotation.z += radiansPerSecond * delta;
  }
  return model;
 }

export { setupModel };

git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/alfredthompsonOvie/threejs-product-page-mensRing.git
git push -u origin main