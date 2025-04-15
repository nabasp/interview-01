export function objectToArray(obj: Record<string, any>): [string, any][] {
  if (!obj || typeof obj !== "object") {
    return [];
  }
  return Object.entries(obj).filter(
    ([_, value]) => value !== null && value !== undefined && value !== ""
  );
}
