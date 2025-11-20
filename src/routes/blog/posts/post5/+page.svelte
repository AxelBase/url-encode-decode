<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>URL Encoding Behavior Across Languages & Frameworks (2025)</title>
  <meta name="description" content="JavaScript, Python, Java, PHP, Go, Ruby — exact encoding rules compared side-by-side with this tool as reference." />
  <meta property="og:title" content="URL Encoding Across Languages & Frameworks" />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span>
    <p>URL Encoding Across Languages</p>
  </div>

  <article class="prose">
    <h1>URL Encoding Behavior Across Languages & Frameworks (2025)</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>Not all percent-encoding is created equal. This static tool follows the exact same rules as JavaScript’s encodeURIComponent() — which has become the de facto web standard.</p>

    <h2>Quick Reference Table</h2>
    <ul>
      <li>JavaScript → encodeURIComponent() ✓ (this tool)</li>
      <li>Python → urllib.parse.quote() ✓ (identical)</li>
      <li>Java → URLEncoder.encode(..., UTF-8) → space becomes + (different!)</li>
      <li>PHP → rawurlencode() ✓ (correct %20)</li>
      <li>Go → url.QueryEscape() ✓</li>
      <li>Ruby → CGI.escape → space becomes + (avoid)</li>
    </ul>

    <h2>Why JavaScript’s Behavior Wins</h2>
    <p>It uses %20 for space (not +), encodes * ' ( ) ! properly, and follows RFC 3986 exactly. Most modern APIs and CDNs expect this behavior.</p>

    <h2>Use This Tool as Your Golden Source</h2>
    <p>Whenever you’re unsure what a backend expects, paste the raw string here. The output is what browsers and most compliant libraries produce.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Why does Java use + for space?</summary>
      <p>Legacy from form encoding. Use URLEncoder with StandardCharsets.UTF_8 + replace("+", "%20") to match web standard.</p>
    </details>

    <p class="italic-note">One tool, every language — instant consistency.</p>
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
