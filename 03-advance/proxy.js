const user ={ name: "Amina", age: 21};

const guarded = new Proxy(user, {
    get(target, prop) {
        console.log(`reading ${String(prop)}`);
        return Reflect.get(target, prop);
    },
    set(target, prop, value) {
        if (prop === "age" && typeof value !== "number") {
            throw new TypeError("age must be a number");
        }
        return Reflect.set(target, prop, value);
    },

});

guarded.age = 22;
