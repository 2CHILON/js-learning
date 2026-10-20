//this in depth
const user = {
    name: "Amina",
    greet() { return `Hi,  ${this.name}`;},
};

user.greet();

const loose = user.greet;
//loose()

const bound = user.greet.bind(user);
bound();

// Arrow  functions

const time = {
    seconds: 0,
    start() {
        setInterval(() => {
            this.seconds++;
        }, 1000);
    },
};