import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event, {
        transformPageChunk: ({ html }) => minifyHTML(html)
    });
    return response;
};

function minifyHTML(html: string) {
    return html
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/>\s+</g, '><')
        .replace(/\s+/g, ' ')
        .replace(/<script[^>]*>([\s\S]*?)<\/script>/g, (match, p1) => {
            return `<script>${p1.replace(/\/\/.*\n/g, '')}</script>`;
        })
        .replace(/<style[^>]*>([\s\S]*?)<\/style>/g, (match, p1) => {
            return `<style>${p1.replace(/\/\*.*\*\//g, '')}</style>`;
        });
}
