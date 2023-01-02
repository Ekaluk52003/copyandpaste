<script>
 import { goto } from '$app/navigation';
	import { ProjectCard } from '$lib/components';
	export let data;

     let searchValue = '';

    const handleSearch = async () => {

		await goto(`/?q=${searchValue}`, {
        keepFocus: true
      })
    };

</script>

<div class="flex flex-col gap-3">
	<h1 class="text-xl font-bold">Recent Projects</h1>
	<form class="input input-bordered input-secondary w-full max-w-xs" on:submit|preventDefault={handleSearch}>
	<input
            class=" w-full py-2 pl-10 pr-2 bg-[transparent] border-none text-text text-lg font-light caret-primary placeholder:font-light focus:outline-none "
            type="text"

            bind:value={searchValue}
        />
	</form>

	<div class="grid grid-cols-3 gap-2">
		{#each data.projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
