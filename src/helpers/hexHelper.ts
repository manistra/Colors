export const isHex = (hexToValidate: string) =>
{
    if (
        /#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\b/.test(hexToValidate).valueOf()
    ) return true
    else return false
}

export const invertHex = (hexToInvert: string) =>
{
    if (!isHex(hexToInvert)) return

    let hex = hexToInvert.substring(1);
    return (
        '#' +
        (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase()
    );
};