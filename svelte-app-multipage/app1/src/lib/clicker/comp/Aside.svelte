<aside
	class="aside bg-gray-50 bg-opacity-50 overflow-x-hidden relative rounded-l"
	style="grid-area: aside;">
	<div id="log" class="flex flex-col h-full p-2 space-y-2 w-full">
		<div class="mt-auto" />
		<slot>
			<p class="bg-blue-200 border end mt-auto px-2 py-1 rounded">⌛ Turn 1</p>
			<p class="bg-white border px-2 py-1 rounded welcome">
				🏟️ Welcome to the Arena
			</p>
		</slot>
	</div>
</aside>
