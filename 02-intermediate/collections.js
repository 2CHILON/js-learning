const m = new Map();
m.set("a", 1);
m.set({ id: 1}, "any type works as a key");
m.get("a"); m.has("a"); m.size; m.delete("a");
for (const [key, value] of m ) console.log(key, value);

const s = new Set([1,2,2,3]);
s.add(4); s.has(2); s.size;
const unique = [...new Set(arrayWithDuplicates)]