<script lang="ts">
    import "bootstrap/dist/css/bootstrap.min.css";
    import "../app.css";
    import { base } from "$app/paths";
    import { fly } from "svelte/transition";

    const currentYear = new Date().getFullYear();

    let isDropdownOpen = false;

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    function closeDropdown() {
        isDropdownOpen = false;
    }

    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        };
        document.addEventListener('click', handleClick, true);
        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }
</script>

<header class="custom-navbar">
    <div class="nav-container">
        <div class="nav-left">
            <a href="{base}/" class="brand-group" aria-label="Home">
                <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
                <span class="navbar-brand-text">AxelBase</span>
            </a>

            <div class="bmac-wrapper position-relative" use:clickOutside on:click_outside={closeDropdown}>
                <button
                    class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
                    on:click={toggleDropdown}
                    aria-label="Support options"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
                    </svg>
                    <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
                </button>

                {#if isDropdownOpen}
                    <div class="bmac-dropdown mt-2" transition:fly={{ y: -10, duration: 250 }}>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$3</span> One Coffee
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$5</span> Two Coffees
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$10</span> Three Coffees
                        </a>

                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                            Custom Amount
                        </a>

                        <a
                            href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                            on:click={closeDropdown}
                            class="custom-amount"
                        >
                            Buy via Crypto (Bitcoin)
                        </a>
                    </div>
                {/if}
            </div>
        </div>

        <ul class="nav-links">
            <li><a class="nav-link" href="{base}/">Home</a></li>
            <li><a class="nav-link" href="{base}/#about">About</a></li>
            <li><a class="nav-link" href="{base}/#how-to">How to use</a></li>
            <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
            <li><a class="nav-link" href="{base}/blog">Blog</a></li>
        </ul>
    </div>
</header>

<main>
    <slot />
</main>

<footer>
    <div class="container">
        <p class="mb-2">&copy; {currentYear} AxelBase URL Encoder – Decoder</p>
        <div>
            <a href="{base}/privacy">Privacy</a> | <a href="{base}/terms">Terms</a>
        </div>
    </div>
</footer>

<style>
    /* Preserve all original File 2 styles from app.css */
    :root {
        --brand-color: #3E5F8A;
        --brand-hover: #2c4463;
        --accent-color: #ffffff;
        --text-color: #1a1a1a;
        --bg-color: #ffffff;
        --border-color: #000000;
        --border-width: 2px;
        --shadow-offset: 4px;
        --nav-height: 70px;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --text-color: #f0f0f0;
            --bg-color: #121212;
            --accent-color: #1e1e1e;
            --border-color: #ffffff;
        }
    }

    /* ... (all other original styles remain unchanged: body, main, navbar, nav-links, etc.) ... */

    /* NEW BMAC STYLES – Button from File 1, adapted to File 2 color scheme & design language */

    .bmac-wrapper {
        position: relative;
    }

    .bmac-button {
        background: var(--brand-color);
        color: white;
        font-size: 0.95rem;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-offset) var(--shadow-offset) 0 var(--border-color);
    }

    .bmac-button:hover {
        background: var(--brand-hover);
        transform: translate(-2px, -2px);
        box-shadow: calc(var(--shadow-offset) + 4px) calc(var(--shadow-offset) + 4px) 0 var(--border-color);
    }

    .bmac-button:active {
        transform: translate(var(--shadow-offset), var(--shadow-offset));
        box-shadow: 0 0 0 var(--border-color);
    }

    .bmac-button svg {
        width: 20px;
        height: 20px;
    }

    .bmac-dropdown {
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
        width: 240px;
        background: var(--bg-color);
        border: var(--border-width) solid var(--border-color);
        border-radius: 16px;
        box-shadow: 0 12px 32px rgba(62, 95, 138, 0.25);
        overflow: hidden;
        z-index: 1001;
        margin-top: 8px;
    }

    .bmac-dropdown a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        color: var(--text-color);
        text-decoration: none;
        font-size: 0.98rem;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .bmac-dropdown a:hover {
        background: var(--brand-color);
        color: white;
        padding-left: 28px;
    }

    .bmac-dropdown .amount {
        font-weight: 700;
        color: var(--brand-color);
        font-size: 1.1rem;
    }

    .bmac-dropdown .custom-amount {
        font-weight: 600;
        color: var(--brand-color);
        border-top: 1px solid var(--border-color);
        justify-content: center !important;
    }

    .bmac-dropdown .custom-amount:hover {
        background: var(--brand-color);
        color: white;
    }

    /* Mobile: keep dropdown centered */
    @media (max-width: 768px) {
        .bmac-dropdown {
            left: 50%;
            right: auto;
            transform: translateX(-50%);
        }
    }
</style>