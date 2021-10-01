<script lang="ts" context="module">
	export interface Configuration {
		diameter: number;
		rpm: number;
		velocity: number;
		angle: number;
	}
</script>

<script lang="ts">
	import { createEventDispatcher, afterUpdate } from 'svelte';

	const dispatch = createEventDispatcher();

	const G = 9.80665;
	let diameter = 400, rpm = 2, velocity = 20, angle = 45,
		edgeVelocity, apparentGravity;
	$: edgeVelocity = Math.PI * diameter / (60 / rpm);
	$: apparentGravity = edgeVelocity ** 2 / (diameter / 2);

	afterUpdate(() => {
		console.log('update');
		dispatch('simulate', { diameter, rpm, velocity, angle });
	});
</script>

<p>
	<label for="diameter">
		Ring diameter:
		<input type="text" id="diameter" bind:value={diameter} />m
		<input type="range" bind:value={diameter} min="50" max="1000" />
	</label>
</p>

<p>
	<label for="rpm">
		Rotational velocity:
		<input type="text" id="rpm" bind:value={rpm} />rpm
		<input type="range" bind:value={rpm} min="1" max="10" />
	</label>
</p>

<p>
	<label for="velocity">
		Launch velocity:
		<input type="text" id="velocity" bind:value={velocity} />m/s
		<input type="range" bind:value={velocity} />
	</label>
</p>

<p>
	<label for="angle">
		Launch angle:
		<input type="text" id="angle" bind:value={angle} />&deg;
		<input type="range" bind:value={angle} min="0" max="180" />
	</label>
</p>

<p>
	Edge velocity: {edgeVelocity} m/s &bull;
	Apparent gravity: {apparentGravity} m/s<sup>2</sup> = {apparentGravity / G}g
</p>
