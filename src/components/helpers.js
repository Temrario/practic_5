const ids = {};

export function getId(base = 'key') {
  if (!ids[base]) ids[base] = 0;
  ids[base]++;
  return `${base}_${ids[base]}`;
}
