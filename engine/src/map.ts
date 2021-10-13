import { Map } from './gamestate';

const map: Map = {
    name: 'USA',
    cities: [
        { name: 'Seattle', area: 'purple', x: 74, y: 129 },
        { name: 'Portland', area: 'purple', x: 45, y: 197 },
        { name: 'Boise', area: 'purple', x: 180, y: 250 },
        { name: 'Billings', area: 'purple', x: 345, y: 210 },
        { name: 'Cheyenne', area: 'purple', x: 410, y: 310 },
        { name: 'Denver', area: 'purple', x: 400, y: 363 },
        { name: 'Omaha', area: 'purple', x: 566, y: 323 },
        { name: 'San Francisco', area: 'cyan', x: 48, y: 401 },
        { name: 'Los Angeles', area: 'cyan', x: 116, y: 490 },
        { name: 'San Diego', area: 'cyan', x: 157, y: 537 },
        { name: 'Las Vegas', area: 'cyan', x: 200, y: 440 },
        { name: 'Saltlake City', area: 'cyan', x: 266, y: 13409 },
        { name: 'Phoenix', area: 'cyan', x: 260, y: 516 },
        { name: 'Santa Fe', area: 'cyan', x: 371, y: 465 },
        { name: 'Kansas City', area: 'red', x: 587, y: 386 },
        { name: 'Oklahoma City', area: 'red', x: 550, y: 467 },
        { name: 'Dallas', area: 'red', x: 560, y: 534 },
        { name: 'Houston', area: 'red', x: 569, y: 601 },
        { name: 'Menphis', area: 'red', x: 678, y: 479 },
        { name: 'Birmingham', area: 'red', x: 739, y: 516 },
        { name: 'New Orleans', area: 'red', x: 674, y: 600 },
        { name: 'Fargo', area: 'yellow', x: 551, y: 182 },
        { name: 'Duluth', area: 'yellow', x: 637, y: 163 },
        { name: 'Minneapolis', area: 'yellow', x: 621, y: 220 },
        { name: 'Chicago', area: 'yellow', x: 716, y: 311 },
        { name: 'St. Louis', area: 'yellow', x: 678, y: 392 },
        { name: 'Cincinnati', area: 'yellow', x: 795, y: 378 },
        { name: 'Knoxvile', area: 'yellow', x: 796, y: 452 },
        { name: 'Detroit', area: 'brown', x: 803, y: 292 },
        { name: 'Buffalo', area: 'brown', x: 913, y: 281 },
        { name: 'Pittsburgh', area: 'brown', x: 884, y: 346 },
        { name: 'Boston', area: 'brown', x: 1052, y: 282 },
        { name: 'New York', area: 'brown', x: 1010, y: 320 },
        { name: 'Philadelphia', area: 'brown', x: 985, y: 360 },
        { name: 'Washington', area: 'brown', x: 934, y: 387 },
        { name: 'Horecin', area: 'green', x: 969, y: 435 },
        { name: 'Raleigh', area: 'green', x: 915, y: 467 },
        { name: 'Atlanta', area: 'green', x: 801, y: 517 },
        { name: 'Savannah', area: 'green', x: 867, y: 537 },
        { name: 'Jacksonvile', area: 'green', x: 861, y: 589 },
        { name: 'Tampa', area: 'green', x: 819, y: 651 },
        { name: 'Miami', area: 'green', x: 883, y: 700 },
    ],
    connections: [
        { from: 'Seattle', to: 'Portland', cost: 3 },
        { from: 'Seattle', to: 'Boise', cost: 12 },
        { from: 'Seattle', to: 'Billings', cost: 9 },
        { from: 'Portland', to: 'Boise', cost: 13 },
        { from: 'Portland', to: 'San Francisco', cost: 24 },
        { from: 'Boise', to: 'Billings', cost: 12 },
        { from: 'Boise', to: 'Cheyenne', cost: 24 },
        { from: 'Boise', to: 'San Francisco', cost: 23 },
        { from: 'Boise', to: 'Saltlake City', cost: 8 },
        { from: 'Billings', to: 'Cheyenne', cost: 9 },
        { from: 'Billings', to: 'Fargo', cost: 17 },
        { from: 'Billings', to: 'Minneapolis', cost: 18 },
        { from: 'Cheyenne', to: 'Denver', cost: 0 },
        { from: 'Cheyenne', to: 'Omaha', cost: 14 },
        { from: 'Cheyenne', to: 'Minneapolis', cost: 18 },
        { from: 'Denver', to: 'Saltlake City', cost: 21 },
        { from: 'Denver', to: 'Santa Fe', cost: 13 },
        { from: 'Denver', to: 'Kansas City', cost: 16 },
        { from: 'Omaha', to: 'Kansas City', cost: 5 },
        { from: 'Omaha', to: 'Minneapolis', cost: 8 },
        { from: 'Omaha', to: 'Chicago', cost: 13 },
        { from: 'San Francisco', to: 'Los Angeles', cost: 9 },
        { from: 'San Francisco', to: 'Las Vegas', cost: 14 },
        { from: 'San Francisco', to: 'Saltlake City', cost: 27 },
        { from: 'Los Angeles', to: 'San Diego', cost: 3 },
        { from: 'Los Angeles', to: 'Las Vegas', cost: 9 },
        { from: 'San Diego', to: 'Las Vegas', cost: 9 },
        { from: 'San Diego', to: 'Phoenix', cost: 14 },
        { from: 'Las Vegas', to: 'Saltlake City', cost: 18 },
        { from: 'Las Vegas', to: 'Phoenix', cost: 15 },
        { from: 'Las Vegas', to: 'Santa Fe', cost: 27 },
        { from: 'Saltlake City', to: 'Santa Fe', cost: 28 },
        { from: 'Phoenix', to: 'Santa Fe', cost: 18 },
        { from: 'Santa Fe', to: 'Kansas City', cost: 16 },
        { from: 'Santa Fe', to: 'Oklahoma City', cost: 15 },
        { from: 'Santa Fe', to: 'Dallas', cost: 16 },
        { from: 'Santa Fe', to: 'Houston', cost: 21 },
        { from: 'Kansas City', to: 'Oklahoma City', cost: 8 },
        { from: 'Kansas City', to: 'Menphis', cost: 12 },
        { from: 'Kansas City', to: 'Chicago', cost: 8 },
        { from: 'Kansas City', to: 'St. Louis', cost: 6 },
        { from: 'Oklahoma City', to: 'Dallas', cost: 3 },
        { from: 'Oklahoma City', to: 'Menphis', cost: 14 },
        { from: 'Dallas', to: 'Houston', cost: 5 },
        { from: 'Dallas', to: 'Menphis', cost: 12 },
        { from: 'Dallas', to: 'New Orleans', cost: 12 },
        { from: 'Houston', to: 'New Orleans', cost: 8 },
        { from: 'Menphis', to: 'Birmingham', cost: 6 },
        { from: 'Menphis', to: 'New Orleans', cost: 7 },
        { from: 'Menphis', to: 'St. Louis', cost: 7 },
        { from: 'Birmingham', to: 'New Orleans', cost: 11 },
        { from: 'Birmingham', to: 'Atlanta', cost: 3 },
        { from: 'Birmingham', to: 'Jacksonvile', cost: 9 },
        { from: 'New Orleans', to: 'Jacksonvile', cost: 16 },
        { from: 'Fargo', to: 'Duluth', cost: 6 },
        { from: 'Fargo', to: 'Minneapolis', cost: 6 },
        { from: 'Duluth', to: 'Minneapolis', cost: 5 },
        { from: 'Duluth', to: 'Chicago', cost: 12 },
        { from: 'Duluth', to: 'Detroit', cost: 15 },
        { from: 'Minneapolis', to: 'Chicago', cost: 8 },
        { from: 'Chicago', to: 'St. Louis', cost: 10 },
        { from: 'Chicago', to: 'Cincinnati', cost: 7 },
        { from: 'Chicago', to: 'Detroit', cost: 7 },
        { from: 'St. Louis', to: 'Cincinnati', cost: 12 },
        { from: 'St. Louis', to: 'Atlanta', cost: 12 },
        { from: 'Cincinnati', to: 'Knoxvile', cost: 6 },
        { from: 'Cincinnati', to: 'Detroit', cost: 4 },
        { from: 'Cincinnati', to: 'Pittsburgh', cost: 7 },
        { from: 'Cincinnati', to: 'Raleigh', cost: 15 },
        { from: 'Knoxvile', to: 'Atlanta', cost: 5 },
        { from: 'Detroit', to: 'Buffalo', cost: 7 },
        { from: 'Detroit', to: 'Pittsburgh', cost: 6 },
        { from: 'Buffalo', to: 'Pittsburgh', cost: 7 },
        { from: 'Buffalo', to: 'New York', cost: 8 },
        { from: 'Pittsburgh', to: 'Washington', cost: 6 },
        { from: 'Pittsburgh', to: 'Raleigh', cost: 7 },
        { from: 'Boston', to: 'New York', cost: 3 },
        { from: 'New York', to: 'Philadelphia', cost: 0 },
        { from: 'Philadelphia', to: 'Washington', cost: 3 },
        { from: 'Washington', to: 'Horecin', cost: 5 },
        { from: 'Horecin', to: 'Raleigh', cost: 3 },
        { from: 'Raleigh', to: 'Atlanta', cost: 7 },
        { from: 'Raleigh', to: 'Savannah', cost: 7 },
        { from: 'Atlanta', to: 'Savannah', cost: 7 },
        { from: 'Savannah', to: 'Jacksonvile', cost: 0 },
        { from: 'Jacksonvile', to: 'Tampa', cost: 4 },
        { from: 'Tampa', to: 'Miami', cost: 4 }
    ]
};

export default map;