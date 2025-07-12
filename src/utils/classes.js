// Adapted from alveusgg/extension
// https://github.com/alveusgg/extension/blob/main/src/utils/classes.ts
export function classes(...classes) {
  return classes.filter(Boolean).join(' ');
}
