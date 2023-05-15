import { createCamera } from "./components/createCamera";
import { createScene } from "./components/createScene";
import { createLights } from "./components/createLights";
import { loadModel } from "./components/models/loadModel";

import { createRenderer } from "./systems/createRenderer";
import { Loop } from "./systems/Loop";
import { Resizer } from "./systems/Resizer";
import { createControls } from "./systems/controls";
class World {
	#scene;
	#camera;
	#renderer;
	#loop;
	#controls;

	constructor(container) {
		this.#camera = createCamera();
		this.#scene = createScene();
		this.#renderer = createRenderer();
		container.append(this.#renderer.domElement);

		this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

		const { pointLight, pointLight2, pointLight3, spotLight, dirLight } =
			createLights();
    this.#scene.add(pointLight, pointLight2, pointLight3, spotLight.target, dirLight);
    
    const controls = createControls(this.#camera, this.#renderer.domElement);
    this.#loop.updatables.push(controls);
    // this.#scene.add(controls);

		const resizer = new Resizer(this.#camera, container, this.#renderer);
	}
	render() {}
	start() {
		this.#loop.start();
	}
	stop() {}
	async init() {
		const model = await loadModel();
		this.#loop.updatables.push(model);
		this.#scene.add(model);
		// console.log(model);
	}
}
export { World };
