<script lang="ts">
	import Configurator, { Configuration } from './lib/Configurator.svelte';
	import Simulator from './lib/Simulator.svelte';

	let config: Configuration, simulator;

	function simulate({ detail }: CustomEvent<Configuration>) {
		console.log(`got config: ${JSON.stringify(detail)}`);
		config = detail;
		simulator.simulate(config);
	}
</script>

<main>
	<Configurator on:simulate={simulate} />
	<Simulator bind:this={simulator} />
</main>
