import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals, url }) => {
	let Qparam = url.searchParams.get('q');
	let q = `"${Qparam}"`;
	let Qfilter = `name ~ ${q}`;
	console.log('q param', url.searchParams.get('q'));
	const getProjects = async () => {
		try {
			const projects = serializeNonPOJOs(
				await locals.pb.collection('projects').getFullList(undefined /* batch size */, {
					sort: '-created',
					filter: Qfilter
				})
			);

			return projects;
		} catch (err) {
			console.log('Error:', err);
			throw error(err.status, err.message);
		}
	};

	return {
		projects: getProjects()
	};
};
