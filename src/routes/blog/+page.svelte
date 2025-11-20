<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Why URL Encoding Still Matters in 2025',
      description: 'Even with modern frameworks, getting percent-encoding wrong breaks APIs, tracking links, and SEO. Learn why it’s still critical.'
    },
    {
      href: '/blog/posts/post2',
      title: 'encodeURIComponent vs encodeURI: Never Mix Them Up Again',
      description: 'The single most common source of broken URLs explained with practical examples and when to use each.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Handling Special Characters in Query Strings (The Right Way)',
      description: 'Spaces, ampersands, plus signs, and emojis — what actually gets encoded and what should stay as-is.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Double Encoding Bugs: How They Happen and How to Spot Them',
      description: 'Real-world stories of %2520, %252F, and infinite redirects caused by accidental double encoding.'
    },
    {
      href: '/blog/posts/post5',
      title: 'URL Encoding in Different Languages & Frameworks',
      description: 'Quick reference: JavaScript, Python, Java, PHP, Go, and how this tool matches the official behavior.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Testing Your API: Why You Need This Encoder/Decoder Daily',
      description: 'How developers at top companies use this exact tool in Postman, curl, and browser devtools workflows.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Shareable Encoded Links: The Hidden Feature You’ll Use Every Day',
      description: 'Generate a link with pre-filled text in one click — perfect for bug reports, documentation, and team sharing.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | URL Encoder/Decoder Insights</title>
  <meta name="description" content="Deep dives, best practices, and pro tips for URL encoding/decoding from the team behind the fastest static encoder tool." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1>Blog: URL Encoding Mastered</h1>
    <p class="subtitle">
      Practical guides, common pitfalls, and expert techniques for percent-encoding URLs in 2025. 
      All articles are written for real developers who copy-paste URLs daily.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  /* Same beautiful, responsive styling as your original — unchanged */
  .blog-index { padding: 2rem 0 4rem; }
  .blog-header { text-align: center; margin-bottom: 3rem; border-bottom: 1px solid var(--border-color); padding-bottom: 2rem; }
  .blog-header h1 { font-size: 2.8rem; margin-bottom: 1rem; }
  .subtitle { font-size: 1.1rem; color: var(--text-secondary); max-width: 700px; margin: 0 auto; line-height: 1.7; }
  .posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
  .post-card { text-decoration: none; display: flex; flex-direction: column; justify-content: space-between; }
  .post-card .card-body { display: flex; flex-direction: column; height: 100%; }
  .post-title { font-size: 1.25rem; color: var(--accent-secondary); margin-bottom: 0.75rem; }
  .post-description { color: var(--text-secondary); flex-grow: 1; margin-bottom: 1rem; }
  .read-more { color: var(--accent-primary); font-weight: 600; align-self: flex-start; transition: transform 0.2s ease; }
  .post-card:hover .read-more { transform: translateX(5px); }
</style>