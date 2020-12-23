<script>
	import TailwindStyles from './TailwindStyles.svelte';
	import { Input, Autocomplete } from 'svetamat2';
	
	let message = 'Learn Svelte';
	let countries = ['Singapore','Malaysia',"Thailand","Vietnam"];
	let country;
</script>

<style>
	.App-logo {
		animation: App-logo-scale infinite 1.6s ease-in-out alternate;
	}
	@keyframes App-logo-scale {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.06);
		}
	}
</style>

<div>
	<header class="bg-gray-100 h-screen flex justify-center items-center flex-col">
		<img src="/logo.svg" class="App-logo pointer-events-none m-4 h-64" alt="logo" />
		<p>
			Edit <code>src/App.svelte</code> and save to reload.
		</p>
		<a
			class="text-orange-500"
			href="https://svelte.dev"
			target="_blank"
			rel="noopener noreferrer"
		>
			{message} in {country} now
		</a>
		<div class="flex elevation-5 border w-full justify-center pt-4">
			<div class="pr-6">
				<Input bind:value={message} outlined label="message to myself"></Input>
			</div>
			<Autocomplete label="Select a country" outlined items={countries} bind:value={country}></Autocomplete>
		</div>
	</header>
</div>