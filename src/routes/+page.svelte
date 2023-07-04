<script lang="ts">
	import Counter from '../components/Counter.svelte';

	const title = 'Welcome to Svelte';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>
<Counter />
<Counter />
<Counter />
<p>Visit <a href="https://svelte.dev">svelte.dev</a> to read the documentation</p>
