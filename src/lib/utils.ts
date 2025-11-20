/*====================================================
  UTILITIES: MODE DETECTION, COPY, SELECT
====================================================*/

export function detectMode(text: string): "encode" | "decode" {
    const hasPct = /%[0-9A-Fa-f]{2}/.test(text);
    return hasPct ? "decode" : "encode";
}

export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        return false;
    }
}

export function selectTextarea(id: string) {
    const el = document.getElementById(id) as HTMLTextAreaElement;
    if (el) el.select();
}
