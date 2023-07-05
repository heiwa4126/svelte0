// https://learn.svelte.jp/tutorial/get-handlers

import { json } from '@sveltejs/kit';

export function GET(): Response {
	const number = Math.floor(Math.random() * 6) + 1;

	return json(number);
}
