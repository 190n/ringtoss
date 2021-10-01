<script lang="ts">
	import Config from './lib/Config.svelte';

	let lastUpdate = '';

	function simulate(data: any) {
		lastUpdate = JSON.stringify(data.detail);
	}
</script>

<main>
	<Config on:simulate={simulate} />
	<pre>{lastUpdate}</pre>
</main>
