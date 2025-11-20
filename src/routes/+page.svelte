<script lang="ts">
    import { base } from "$app/paths";
    import { encodeStrict, decodeSafe } from "$lib/encoder";
    import { detectMode, copyToClipboard, selectTextarea } from "$lib/utils";
    import { makeShareURL, parseShareURL } from "$lib/share";

    let text = "";
    let mode: "encode" | "decode" = "encode";
    let copied = false;

    // FR10: Read share params on load
    if (typeof window !== "undefined") {
        const init = parseShareURL();
        text = init.text;
        mode = init.mode;
        if (text) process();
    }

    function process() {
        mode = detectMode(text);
        text = mode === "encode" ? encodeStrict(text) : decodeSafe(text);

        if (text === "__ERROR__INVALID_PERCENT_ENCODING__") {
            alert("Invalid percent-encoding sequence");
            text = "";
        }

        selectTextarea("main-input");
    }

    function swapMode() {
        mode = mode === "encode" ? "decode" : "encode";
        process();
    }

    async function doCopy() {
        copied = await copyToClipboard(text);
        setTimeout(() => (copied = false), 1500);
    }

    function share() {
        const url = makeShareURL(text, mode);
        window.history.replaceState(null, "", url);
        alert("Shareable link updated.");
    }
</script>

<div class="container">
    
    <div class="text-center mb-5">
        <h1 class="display-4" style="color: var(--brand-color);">URL Encoder - Decoder</h1>
        <p class="lead">Professional URL encoding and decoding tool.</p>
    </div>

    <div class="fancy-card mb-5">
        <textarea
            id="main-input"
            class="form-control mb-4"
            rows="10"
            bind:value={text}
            placeholder="Enter text to encode or decode..."
        ></textarea>

        <div class="d-flex flex-wrap gap-3 justify-content-start">
            <button class="btn btn-brand" on:click={process}>
                {mode === "encode" ? "Encode" : "Decode"}
            </button>

            <button class="btn btn-secondary" on:click={swapMode}>
                Swap Mode
            </button>

            <button class="btn btn-outline-dark" on:click={doCopy}>
                {copied ? "Copied!" : "Copy Result"}
            </button>

            <button class="btn btn-outline-primary" on:click={share} style="margin-left: auto;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill me-2" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .6 3 1.694 1.694 0 0 1-1.762-.607l-4.462 2.58a2.49 2.49 0 0 1 0 3.053l4.462 2.58a1.694 1.694 0 0 1 1.762-.607 2.5 2.5 0 1 1-.3 2.1l-5.555-3.214a2.482 2.482 0 0 1-.305.008 2.5 2.5 0 0 1 0-5 2.482 2.482 0 0 1 .305.008l5.555-3.214A2.5 2.5 0 0 1 11 2.5z"/>
                </svg>
                Share Link
            </button>
        </div>
    </div>

<section id="about" class="info-section">
    <h3>About</h3>
    <p>
        The URL Encoder – Decoder by AxelBase is a lightweight, client-side, privacy-focused utility built specifically for developers, testers, and technical users who need a fast and reliable way to convert text using RFC 3986 percent-encoding. Unlike traditional online encoders, this tool operates entirely inside your browser using modern SvelteKit technology and a fully static deployment pipeline. This means no servers, no tracking, no logs, no data collection, and no risk of your input being transmitted across the internet.
    </p>
    <p>
        The tool was built to solve a common pain point: URL encoding and decoding should be simple, accurate, predictable, and private. Many existing tools introduce unnecessary complexity, rely on remote backends, store logs for analytics, or provide inconsistent results depending on how special characters are handled. The AxelBase utility eliminates these issues by implementing a clean, standards-compliant encoder that uses encodeURIComponent with additional RFC 3986 strict character handling. This ensures that reserved characters such as !, (, ), *, and others are correctly converted for safe transmission in URLs, query parameters, API calls, and security-sensitive scripts.
    </p>
    <p>
        Because the utility is fully static and deployed via GitHub Pages, the entire application downloads once and runs instantly, even in low-bandwidth environments. After the first load, your browser can run the tool offline, ensuring reliability regardless of network availability. This architecture satisfies the SRS goals of being lightweight, 0-dependency, offline-capable, and responsive across devices.
    </p>
    <p>
        The interface is intentionally minimal. A single multiline text area serves as the central workspace, allowing you to paste, inspect, and transform URLs or raw text. The tool automatically detects whether your input already contains %XX-encoded patterns, switching between Encode and Decode modes intelligently. This auto-detection speeds up workflows when analyzing URLs from logs, redirects, APIs, JavaScript snippets, or documentation.
    </p>
    <p>
        Supporting features, such as Copy to Clipboard, Swap Mode, and shareable links, are implemented with the same privacy-first approach. The “Copy” button writes only to your local clipboard. The “Share Link” feature embeds your text client-side into the URL using Base64 encoding—no data is ever sent to a server. When someone opens that link, your text is decoded and processed entirely by their browser.
    </p>
    <p>
        Overall, the AxelBase URL Encoder – Decoder aims to provide a dependable, transparent, and developer-friendly environment. Its focus is accuracy, privacy, and efficiency—making it invaluable for debugging encoded strings, preparing safe URLs for transmission, generating redirect parameters, validating API call inputs, handling OAuth redirect URLs, encoding JSON for query strings, or decoding messy, multi-layered encoded data from logs. It is a small tool, but one designed with professional precision.
    </p>
</section>

<section id="how-to" class="info-section">
    <h3>How to use</h3>
    <p>
        Using the AxelBase URL Encoder – Decoder is intentionally simple, intuitive, and optimized around real developer workflows. The interface revolves around a single core workspace combined with action buttons that adapt to your input. Below is a complete guide explaining how each feature works and how to get the most out of the tool.
    </p>
    <p>
        When you open the utility, you’ll see a large multiline text area. This is where you enter your input. You can paste raw text, full URLs, query parameters, JSON strings, redirect values, OAuth URLs, or encoded sequences directly into the field. The utility immediately scans for percent-encoding patterns (e.g., %20, %3A, %2F). If these are detected, the tool automatically switches into Decode Mode, assuming your intention is to decode them. If no encoded patterns are found, the system defaults to Encode Mode. This auto-detection eliminates guesswork and makes the tool effective for fast debugging tasks.
    </p>
    <p>
        If you want to override the detection, use the Swap Mode button. This instantly toggles between Encode and Decode modes and immediately reprocesses your current text. This is helpful when working with double-encoded data or when analyzing layered encoded payloads from logs or security headers.
    </p>
    <p>
        To run an operation manually, use the main action button labeled either “Encode” or “Decode.” The text is updated in place, replacing your original content. The tool also auto-selects the resulting text, making it easy to copy, inspect, or reuse elsewhere.
    </p>
    <p>
        The Copy to Clipboard button instantly writes the processed value to your clipboard. A confirmation (“Copied!”) appears briefly to ensure the action succeeded. Since clipboard access is handled through modern browser APIs, no data leaves your device.
    </p>
    <p>
        If you need to share a processed string with a teammate, the Share Link feature generates a URL containing your text encoded in Base64. This allows someone else to load the exact same state of the tool without sending anything to a server. When they open the link, the tool decodes the embedded value and automatically processes it based on the stored mode.
    </p>
    <p>
        The tool is also designed for professional workflows where privacy and accuracy matter. All encoding follows strict RFC 3986 rules, ensuring that reserved characters are encoded properly. This is crucial for generating safe URLs in production systems, security-sensitive environments, OAuth flows, redirect parameters, or script-based routing systems.
    </p>
    <p>
        Whether you work in backend development, frontend routing, QA testing, API debugging, or documentation, the AxelBase URL Encoder – Decoder provides a fast, private, reliable way to transform data with confidence.
    </p>
</section>

<section id="faq" class="info-section">
    <h3>FAQ</h3>
    <p><strong>Does the tool store or upload my data?</strong> No. The utility is 100% client-side. All processing happens inside your browser. Nothing is transmitted, logged, or saved on remote servers. This fulfills the SRS requirement for a fully offline-capable, stateless environment.</p>
    <p><strong>Does the tool use cookies or analytics?</strong> No cookies, tracking scripts, analytics systems, or monitoring tools are used. The application is designed with a strict privacy-first philosophy.</p>
    <p><strong>Why is this tool safer than other URL encoders online?</strong> Most online encoders send your data to a backend server. This tool does not. Everything is executed in your browser via static JavaScript, making it ideal for private, internal, or sensitive debugging tasks.</p>
    <p><strong>What encoding standard does it use?</strong> The tool uses encodeURIComponent combined with strict RFC 3986 adjustments for reserved characters. This ensures accurate and predictable transformations suitable for production environments.</p>
    <p><strong>What decoding rules are used?</strong> The tool uses decodeURIComponent with safe error handling. If the input contains invalid percent sequences (e.g., %ZZ), the tool alerts you and prevents corrupted output.</p>
    <p><strong>What is auto-detection and how does it work?</strong> The system checks your input for valid %XX patterns. If found, it switches to Decode Mode automatically. Otherwise, it defaults to Encode Mode. This speeds up workflows and prevents common mistakes.</p>
    <p><strong>Can I force-override the mode?</strong> Yes. Use the Swap Mode button to instantly switch modes and reprocess your text.</p>
    <p><strong>What formats can I encode or decode?</strong> Any text content is supported: URLs, query parameters, JSON snippets, file paths, redirect payloads, OAuth URLs, percent-encoded data, and multi-layer encoded strings.</p>
    <p><strong>Is the tool free?</strong> Yes. The utility is completely free to use. Optional donations help support development but are never required.</p>
    <p><strong>Does the Share Link feature upload anything?</strong> No. Your content is Base64 encoded directly into the URL. When someone opens the link, their browser decodes it locally.</p>
    <p><strong>Does it work offline?</strong> Yes. After your first visit, your browser can load the entire tool offline because it is fully static.</p>
    <p><strong>Which browsers are supported?</strong> Modern versions of Chrome, Edge, Firefox, and Safari.</p>
    <p><strong>Why is this tool so fast?</strong> Because it has zero network overhead, no backend round-trips, and optimized SvelteKit static compilation.</p>
</section>


</div>