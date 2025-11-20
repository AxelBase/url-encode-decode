<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Shareable Encoded Links – The Feature You’ll Use Daily</title>
  <meta name="description" content="One click → a permanent link with your exact encoded or decoded text. Perfect for bug reports, docs, and team handoff." />
  <meta property="og:title" content="Shareable Encoded Links Feature" />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span>
    <p>Shareable Links</p>
  </div>

  <article class="prose">
    <h1>Shareable Encoded Links: The Hidden Feature You’ll Use Every Day</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>Click “Copy Shareable Link” → get a URL that opens this exact tool with your text pre-filled and processed. No more “here, paste this into the encoder” in Slack.</p>

    <h2>Use Cases That Save Hours</h2>
    <ul>
      <li>Bug reports with exact failing query string</li>
      <li>Onboarding new devs (“here’s how we encode tracking params”)</li>
      <li>Documentation examples that are always correct</li>
      <li>Code reviews — link directly to the problematic string</li>
    </ul>

    <h2>How It Works</h2>
    <p>Text → Base64 → ?text=… → ?mode=encode|decode. 100% client-side, works forever, no backend needed.</p>

    <p class="italic-note">One link = perfect context. Start using it today.</p>
  </article>
</div>
<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2{
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }
  
  .prose p {
    color: var(--text-primary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>
