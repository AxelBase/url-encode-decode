<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Double Encoding Bugs: How They Happen & How to Spot Them</title>
  <meta name="description" content="Learn why %2520, %252F and infinite redirects appear — and how to prevent the most frustrating URL bug in production." />
  <meta property="og:title" content="Double Encoding Bugs: How They Happen & How to Spot Them" />
  <meta property="og:description" content="The silent killer of tracking links and APIs: double percent-encoding explained with real examples." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span>
    <p>Double Encoding Bugs</p>
  </div>

  <article class="prose">
    <h1>Double Encoding Bugs: How They Happen & How to Spot Them</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>You’ve seen it: a URL containing %2520 instead of %20, or %252F instead of a slash. That “25” means the percent sign itself was encoded — twice. The result? Servers either reject the request or silently decode only once, breaking your data.</p>

    <h2>How Double Encoding Sneaks In</h2>
    <p>Common culprits:</p>
      <ul>
        <li>Encoding a value, then encoding the whole URL again</li>
        <li>Using encodeURI() on an already-encoded string</li>
        <li>Middleware or proxies that “helpfully” re-encode</li>
        <li>Copy-pasting from tools that don’t warn you</li>
      </ul>

    <h2>Real Production Horror Stories</h2>
    <p>Analytics platforms receiving campaign=Spring%2520Sale (becomes Spring%20Sale → no match).  
    OAuth redirects failing because the state parameter contains %253D instead of = after two rounds of encoding.</p>

    <h2>How to Detect It Instantly</h2>
    <p>Paste the suspicious URL into this tool. If you see %25 anywhere in the output — you have double encoding. The decoder will show you the correct final string after one proper pass.</p>

    <h2>Prevention Checklist</h2>
    <ul>
      <li>Encode only raw user input — never re-encode an already encoded string</li>
      <li>Use this tool as your source of truth before sharing links</li>
      <li>Search your codebase for nested encoding calls</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Is %2520 ever valid?</summary>
      <p>Only if you intentionally want to send a literal “%20” as data — almost never.</p>
    </details>
    <details>
      <summary>Does decodeURIComponent fix it?</summary>
      <p>Yes — one call removes one layer. This tool lets you decode repeatedly until clean.</p>
    </details>

    <p class="italic-note">One paste in this tool saves hours of log diving. Use it every time you see %25.</p>
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
