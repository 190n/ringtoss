<script lang="ts">
	import type { Configuration } from './Configurator.svelte';
	let canvas: HTMLCanvasElement;

	export function simulate({ diameter, rpm, velocity, angle }: Configuration) {
		canvas.width = diameter;
		canvas.height = diameter;
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, diameter, diameter);

		const radius = diameter / 2,
			edgeVelocity = diameter * Math.PI / (60 / rpm),
			angleRadians = angle / 180 * Math.PI,
			dx = velocity * Math.cos(angleRadians) - edgeVelocity,
			dy = velocity * -Math.sin(angleRadians);

		let x = 0, y = radius;

		ctx.resetTransform();
		ctx.translate(radius, radius);
		ctx.arc(0, 0, radius, 0, 2 * Math.PI);
		ctx.stroke();

		ctx.moveTo(x, y);
		let hitEdge = false, t = 0;
		while (!hitEdge) {
			x += dx * 0.01;
			y += dy * 0.01;
			t += 0.01;

			// https://stackoverflow.com/a/39911207
			const angleRotated = rpm / 60 * 2 * Math.PI * t,
				apparentX = Math.cos(angleRotated) * x - Math.sin(angleRotated) * y,
				apparentY = Math.cos(angleRotated) * y + Math.sin(angleRotated) * x;

			ctx.lineTo(apparentX, apparentY);
			if (Math.sqrt(x * x + y * y) > radius) {
				hitEdge = true;
			}
		}

		ctx.stroke();
	}
</script>

<canvas bind:this={canvas}></canvas>
