const getFirstName = (x) => x.split(' ')[0];

const add = (a, b) => {
    return a + b;
};

const user = {
    name: 'Luke',
    cities: ['Bangkok', 'Dublin', 'Berlin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());