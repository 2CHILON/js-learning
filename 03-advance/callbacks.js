function getUser(id, callback) {
    setTimeout(() => callback({ id, name: "Amina"}), 500);
}
function getOrders(userId, callback) {
    setTimeout(() => callback(["laptop", "mouse"]), 500);
}

getUser(1, (user) => {
    getOrders(user.id, (orders) =>{
        console.log(user.name, orders);
    });
});