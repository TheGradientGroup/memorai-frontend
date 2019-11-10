var api = {};

var fakeDataHomescreen = [
    { title: "Stochastic Optimization", description: "This is scary.", numDue: 30, deckID: "1m709" },
    { title: "Linear Algebra", description: "Algebra, but linear.", numDue: 10, deckID: "jnlck" },
    { title: "Data Structures and Algorithms", description: "If LeetCode was a class.", numDue: 20, deckID: "acu76" },
    { title: "Stats for CS/SE", description: "I'm p < .001.", numDue: 40, deckID: "3vy7f" },
    { title: "Complex Analysis", description: "Exactly as it sounds.", numDue: 0, deckID: "1ajab" }
];

api.getCardInfo = params => {
    var response = { _fake: fakeDataHomescreen };
    if (!params.owner || !params.homescreen) {
        response._fake = null;
        response.status = 400;
    } else { 
        response.status = 200;
    }
    console.log('parameters:');
    console.log(params);
    response.json = () => (new Promise((resolve, _) => {
        resolve(response._fake || undefined);
    }));

    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(response)
        }, 50);
    });
};

export default api;