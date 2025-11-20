<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>encodeURIComponent vs encodeURI: Never Mix Them Up Again</title>
  <meta name="description" content="The definitive guide to when and why you must use encodeURIComponent instead of encodeURI — with real examples that break when you choose wrong." />
  <meta property="og:title" content="encodeURIComponent vs encodeURI: Never Mix Them Up Again" />
  <meta property="og:description" content="The definitive guide to when and why you must use encodeURIComponent instead of encodeURI." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span>
    <p>encodeURIComponent vs encodeURI</p>
  </div>

  <article class="prose">
    <h1>encodeURIComponent vs encodeURI: Never Mix Them Up Again</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>These two functions look almost identical — yet choosing the wrong one is the #1 cause of broken query strings and 400 Bad Request errors.</p>

    <h2>The Critical Difference</h2>
    <p>encodeURI() assumes the string is a full URL and leaves slashes, colons, and question marks intact.  
    encodeURIComponent() assumes the string is a single component (like a query value) and encodes everything that could break parsing — including &, ?, =, and /.</p>

    <h2>Real Example That Breaks</h2>
    <p>Search term: “cats & dogs”  
    Correct: ?q=encodeURIComponent("cats & dogs") → ?q=cats%20%26%20dogs  
    Wrong: ?q=encodeURI("cats & dogs") → ?q=cats%20&%20dogs → splits into q=cats and dogs= (empty)</p>

    <h2>Quick Rule of Thumb</h2>
    <ul>
      <li>Use encodeURI() only when building a complete URL from safe parts</li>
      <li>Use encodeURIComponent() for every query parameter value and path segment</li>
      <li>When in doubt → encodeURIComponent()</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Why does encodeURI exist at all?</summary>
      <p>For safely encoding entire URLs when you already know the structure is valid (rare in practice).</p>
    </details>
    <details>
      <summary>Does this tool use the correct one?</summary>
      <p>Yes — it always uses encodeURIComponent() + proper handling of reserved chars for maximum safety.</p>
    </details>

    <p class="italic-note">One wrong function call = hours of debugging. Bookmark this page.</p>
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
