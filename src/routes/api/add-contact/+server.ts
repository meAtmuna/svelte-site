import { json } from '@sveltejs/kit';
import db from '$lib/server/db';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async({ request }) => {
    const { name, address, phone } = await request.json();

    const statement = db.prepare(
        'INSERT INTO contacts (name, address, phone) VALUES (@name, @address, @phone)'
    );

    statement.run({ name, address, phone });

    return json({ success: true }, { status: 201 });
}