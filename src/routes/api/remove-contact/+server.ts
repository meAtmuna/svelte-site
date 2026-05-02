import { json } from '@sveltejs/kit';
import db from '$lib/server/db';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async({ request }) => {
    const { name, address, phone } = await request.json();

    db.prepare(
        'DELETE FROM contacts WHERE name = ? AND address = ? AND phone = ?'
    ).run(name, address, phone);

    return json({ success: true});
}