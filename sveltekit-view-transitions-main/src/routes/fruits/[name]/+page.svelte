<script>
	export let data;

	$: ({ name, image, amountPer, nutrition } = data);

	import Nutrition from '$lib/Nutrition.svelte';
</script>

<svelte:head>
	<title>Fruits - {name}</title>
</svelte:head>

<div class={'flex flex-col items-center justify-center py-4 px-4 sm:flex-row'}>
	<div class="flex flex-col items-center sm:w-2/4">
		<!-- Inline style works around https://github.com/tailwindlabs/tailwindcss/issues/506 -->
		<img
			class="object-cover border-gray-100 border-2 rounded-full"
			src={image}
			width="240"
			style:height="240px"
			alt={`picture of ${name}`}
			style:--tag={name}
		/>
		<h1 class="text-4xl font-bold mt-4" style:--tag="h-{name}">{name}</h1>
	</div>

	<div class="sm:w-2/4 w-full">
		<Nutrition {amountPer} {nutrition} />
	</div>
</div>
