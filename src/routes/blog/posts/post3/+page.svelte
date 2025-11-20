<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Handling Special Characters in Query Strings – The Right Way</title>
  <meta name="description" content="Spaces, +, &, emojis, non-Latin scripts — exactly what gets encoded and what should stay literal in 2025 URLs." />
  <meta property="og:title" content="Handling Special Characters in Query Strings – The Right Way" />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span>
    <p>Handling Special Characters in Query Strings</p>
  </div>

  <article class="prose">
    <h1>Handling Special Characters in Query Strings (The Right Way)</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>Query strings are full of landmines: spaces become +, & separates parameters, # starts fragments. Get one wrong and your data disappears silently.</p>

    <h2>Common Characters & Their Fate</h2>
    <ul>
      <li>Space → %20 (preferred) or + (only in application/x-www-form-urlencoded)</li>
      <li>& → %26 (must be encoded or it splits parameters)</li>
      <li>= → %3D (must be encoded in values)</li>
      <li>? → %3F (only if inside a value)</li>
      <li>Emoji → encoded as UTF-8 bytes → %F0%9F%98%8A</li>
      <li>Non-Latin (中文, عربي) → percent-encoded UTF-8</li>
    </ul>

    <h2>Never Do This</h2>
    <p>Manually replacing space with + in URLs (unless you’re building form-encoded bodies). Modern servers treat + as space only in form posts — not in regular query strings.</p>

    <h2>Pro Tips</h2>
    <p>Always encode user input with encodeURIComponent(). Never pre-process with replace(" ","+"). Let the browser/runtime do it correctly.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I keep + as space in URLs?</summary>
      <p>Only if the server explicitly supports it (most don’t in 2025). Use %20 instead.</p>
    </details>
    <details>
      <summary>Are emojis safe in URLs?</summary>
      <p>Yes when properly encoded. This tool handles them perfectly.</p>
    </details>

    <p class="italic-note">Paste any text — even emojis and CJK — and see the correct encoding instantly.</p>
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

  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }
  
  .prose details[open] {
    background-color: var(--card-bg);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }
  
  .prose summary::-webkit-details-marker {
    display: none;
  }
  
  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }
  
  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>
