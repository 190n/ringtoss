<script lang="ts">
	export let diameter: number, rpm: number, velocity: number, angle: number;
	let canvas: HTMLCanvasElement;
</script>

<canvas bind:this={canvas}></canvas>
