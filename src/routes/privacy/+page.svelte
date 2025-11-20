<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Markdown Meta Tag Tester</title>
  <meta name="description" content="Learn how the Markdown Meta Tag Tester protects your privacy with a strict no-data-collection model." />
  <meta property="og:title" content="Privacy Policy | Markdown Meta Tag Tester" />
  <meta property="og:description" content="Learn how your data is kept private with a 100% client-side, zero-collection architecture." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

<article class="prose">
  <h1>Privacy Policy</h1>

  <p class="post-meta">Effective Date: October 15, 2025</p>

  <h2>1. Introduction</h2>
  <p>Welcome to the <strong>AxelBase URL Encoder – Decoder</strong>, a fully client-side web utility designed to safely encode and decode text using RFC 3986 percent-encoding. This Privacy Policy explains how we handle your information when you use the tool. The core principle of the utility is simple: <strong>your data never leaves your device</strong>. The application runs entirely in your browser without servers, databases, logs, or analytics of any kind.</p>

  <h2>2. Information We Do Not Collect</h2>
  <p>The URL Encoder – Decoder operates under a strict <strong>zero-data-collection policy</strong>. We do not collect, store, or access:</p>
  <ul>
    <li><strong>Personal Identifiable Information (PII)</strong>: Names, emails, phone numbers, IP addresses, or physical addresses.</li>
    <li><strong>Technical Data</strong>: Browser fingerprints, device information, session data, or geographic data.</li>
    <li><strong>Content Data</strong>: Any text, URLs, encoded strings, or decoded outputs you enter into the tool.</li>
    <li><strong>Analytics</strong>: No Google Analytics, no tracking pixels, no logging of user behavior.</li>
  </ul>
  <p>All operations occur strictly <strong>client-side</strong>, ensuring full privacy and data isolation.</p>

  <h2>3. How the Tool Works</h2>
  <p>The tool performs all encoding and decoding locally using JavaScript functions such as <code>encodeURIComponent</code> combined with strict RFC 3986 rules. Auto-detection, Swap Mode, and shareable link features also operate inside your browser without remote calls.</p>
  <ul>
    <li><strong>Processing</strong>: Your text is processed instantly within your session.</li>
    <li><strong>No Transmission</strong>: Nothing is uploaded to our servers or any external service.</li>
    <li><strong>Share Links</strong>: When creating a shareable link, content is Base64-encoded directly in the URL. We never receive or store it.</li>
    <li><strong>Clipboard</strong>: Copy actions use browser APIs and never send data away from your device.</li>
  </ul>

  <h2>4. Cookies and Tracking Technologies</h2>
  <p>The URL Encoder – Decoder <strong>does not use cookies</strong>, localStorage, fingerprinting, ads, or telemetry systems. Your session is completely stateless, and nothing persists after closing or refreshing the page.</p>

  <h2>5. Data Security</h2>
  <p>Because no data is collected or transmitted, risk is minimized. However, we encourage users to:</p>
  <ul>
    <li>Use trusted and updated browsers.</li>
    <li>Avoid pasting extremely sensitive content on shared devices.</li>
    <li>Clear the page or close the tab after handling confidential data.</li>
  </ul>

  <h2>6. Children's Privacy</h2>
  <p>The tool is not directed toward children under 13. Since no information is collected, we cannot knowingly store or process children’s data.</p>

  <h2>7. International Users</h2>
  <p>Because the tool collects no data, it naturally complies with international privacy regulations such as <strong>GDPR</strong>, <strong>CCPA</strong>, and others by default.</p>

  <h2>8. Changes to This Policy</h2>
  <p>We may update this policy to reflect improvements or legal requirements. Updates will be posted with a new effective date.</p>

  <p class="italic-note">By using the URL Encoder – Decoder, you acknowledge and agree to this <strong>no-data-collection policy</strong>.</p>
</article>
</div>

<style>
  .post-layout { max-width: 800px; padding-top: 2rem; padding-bottom: 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; }
  .prose { line-height: 1.8; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: .5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: .5rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
  .prose .post-meta { font-size: .9rem; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); }
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; }
</style>
