import type { RequestHandler } from '../$types';
import { OPENAI_KEY } from '$env/static/private'
export const POST: RequestHandler = async () => {
    return new Response();
};