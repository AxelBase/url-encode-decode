/*====================================================
  SHAREABLE LINK HANDLING (?text= & ?mode=)
====================================================*/
import { base } from "$app/paths";

export function makeShareURL(text: string, mode: "encode" | "decode"): string {
    const encoded = btoa(unescape(encodeURIComponent(text)));
    return `${base}?text=${encoded}&mode=${mode}`;
}

export function parseShareURL(): { text: string; mode: "encode" | "decode" } {
    const params = new URLSearchParams(window.location.search);

    const raw = params.get("text");
    const mode = (params.get("mode") as "encode" | "decode") || "encode";

    if (!raw) return { text: "", mode };

    try {
        const decoded = decodeURIComponent(escape(atob(raw)));
        return { text: decoded, mode };
    } catch {
        return { text: "", mode };
    }
}
