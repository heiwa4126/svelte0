<script lang="ts">
	import Counter from '$components/Counter.svelte';
	import Counter2 from '$components/Counter2.svelte';
	import Inner from '$components/Inner.svelte';

	const title = 'Welcome to Svelte';
	let name = 'world';

	let m = { x: 0, y: 0 };
	function handleMove(event: PointerEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	function handleMessage(event: CustomEvent<{ text: string }>) {
		alert(event.detail.text);
	}
	let c1 = 1;
	let c2 = 2;
	let c3 = 3;

	let number: number | undefined;

	async function roll() {
		const response = await fetch('/roll');
		number = await response.json();
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>
<div>
	<Counter />
</div>

<div>
	<p>{c1}+{c2}+{c3}={c1 + c2 + c3}</p>
	<Counter2 bind:count={c1} />
	<Counter2 bind:count={c2} />
	<Counter2 bind:count={c3} />
</div>

<p on:pointermove={handleMove}>
	The pointer is at {m.x} x {m.y}
</p>

<div>
	<h2>Hello {name}!</h2>
	<input bind:value={name} />
</div>

<p><Inner on:message={handleMessage} /></p>

<div>
	<button on:click={roll}>Roll the dice</button>

	{#if number !== undefined}
		<p>You rolled a {number}</p>
	{/if}
</div>

<p>Visit <a href="https://svelte.dev">svelte.dev</a> to read the documentation</p>
