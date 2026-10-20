const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
email.test("a@b.com");                    // true
"2026-10-20".match(/(\d{4})-(\d{2})-(\d{2})/);   // capture groups
"a1b22c333".replace(/\d+/g, "#");         // "a#b#c#"