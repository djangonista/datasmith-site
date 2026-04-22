import type { APIRoute } from 'astro';

const robotsTxt = `
# Content Signals (contentsignals.org) — build-in-public, maksymalna widoczność AI
Content-Signal: search=yes, ai-input=yes, ai-train=yes

User-agent: *
Allow: /

# AI Crawlers - allow all (service business, want visibility)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

Sitemap: https://datasmith.pl/sitemap-index.xml
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
