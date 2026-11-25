import { mkdirSync, writeFileSync } from "fs";

// The joke: an ex is exactly like a subscription — it keeps charging you,
// it auto-renews when you forget about it, and cancelling it takes five
// hidden menus and a phone call you never want to make. And just when you
// think you finally cancelled it, a "we miss you, come back" email arrives.
const entry = "subscription";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
