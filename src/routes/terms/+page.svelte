<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | Markdown Meta Tag Tester</title>
  <meta name="description" content="Terms and Conditions governing use of the Markdown Meta Tag Tester." />
  <meta property="og:title" content="Terms and Conditions | Markdown Meta Tag Tester" />
  <meta property="og:description" content="Understand your rights and responsibilities when using this client-side utility." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

<article class="prose">
  <h1>Terms & Conditions</h1>

  <p class="post-meta">Effective Date: October 15, 2025</p>

  <h2>1. Acceptance of Terms</h2>
  <p>By accessing or using the <strong>AxelBase URL Encoder – Decoder</strong> ("the Tool"), you agree to be bound by these Terms & Conditions. If you do not agree, discontinue use immediately. These terms apply to all users, including developers, testers, researchers, and organizations.</p>

  <h2>2. Purpose of the Tool</h2>
  <p>The Tool provides a fast, accurate, fully client-side encoder and decoder for transforming text using RFC 3986 percent-encoding. It is intended for legitimate debugging, testing, development, and educational use. All processing takes place in your browser, ensuring privacy and self-contained operation.</p>

  <h2>3. User Responsibilities</h2>
  <p>When using the Tool, you agree to:</p>
  <ul>
    <li>Use it in accordance with applicable laws and standards.</li>
    <li>Avoid entering harmful, malicious, or illegal content.</li>
    <li>Handle sensitive text responsibly, given that it remains on your device.</li>
    <li>Understand that encoded and decoded values may reveal sensitive information.</li>
  </ul>

  <h2>4. Permitted Use</h2>
  <p>You may use the Tool for personal, academic, or professional projects. You may share the output, generate shareable URLs, copy results, or integrate the tool into your workflow. You may not misrepresent the Tool or imply endorsement by AxelBase.</p>

  <h2>5. Prohibited Activities</h2>
  <p>You may not:</p>
  <ul>
    <li>Use the Tool for harmful, unlawful, or intrusive activities.</li>
    <li>Exploit encoded text to bypass security systems.</li>
    <li>Reverse-engineer or modify the Tool in a way that removes attribution.</li>
    <li>Use the Tool as part of a service that collects user data without consent.</li>
  </ul>

  <h2>6. Intellectual Property</h2>
  <p>The branding, design, layout, and implementation of the URL Encoder – Decoder are the intellectual property of AxelBase. You may not replicate substantial portions of the interface or code without permission, except under fair-use or open-source allowances (if applicable).</p>

  <h2>7. No Warranties</h2>
  <p>The Tool is provided <em>"as is"</em> with no guarantees of accuracy, reliability, interoperability, uptime, or fitness for a particular purpose. While the Tool is built to follow RFC 3986 encoding standards, we cannot guarantee compatibility with every system, API, or third-party parser.</p>

  <h2>8. Limitation of Liability</h2>
  <p>To the fullest extent permitted by law, AxelBase will not be liable for any damages arising from your use of the Tool, including data loss, incorrect encoding/decoding, business interruptions, or unexpected behavior. Because the Tool runs entirely on your device, you are solely responsible for the safety of your inputs and outputs.</p>

  <h2>9. Updates</h2>
  <p>We may update or improve the Tool over time. Continued use signifies acceptance of any updated terms.</p>

  <h2>10. Contact</h2>
  <p>If you have questions regarding these Terms & Conditions, contact us.</p>

  <p class="italic-note">Your continued use of the URL Encoder – Decoder signifies your acceptance of these Terms.</p>
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
