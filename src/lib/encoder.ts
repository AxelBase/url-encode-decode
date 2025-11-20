/*====================================================
  URL ENCODER – RFC 3986 STRICT
====================================================*/
export function encodeStrict(input: string): string {
    const base = encodeURIComponent(input);
    return base
        .replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase());
}

export function decodeSafe(input: string): string {
    try {
        return decodeURIComponent(input);
    } catch {
        return "__ERROR__INVALID_PERCENT_ENCODING__";
    }
}
