const { GraphQLServer } = require('graphql-yoga');

const dinnerOptions = ["🍔", "🥗", "🌭", "🍗"];
const funOptions = ["🎪","🎢","🎃","🏀"];

const food = `
type Query {
whatsForDinner: String!,
whatsForFun: String!
} 
`;

const resolvers= {
    Query:{
        whatsForDinner:() => {
            const idx = Math.floor(Math.random() * dinnerOptions.length);
            const foodChoice = dinnerOptions[idx];
            return `Tonight we eat ${foodChoice}`;
        },

        whatsForFun: () => {
            const fun = Math.floor(Math.random() * funOptions.length);
            const funChoice = funOptions[fun];
            return `Fun ${funChoice}`;
        }

    }

};

const server = new GraphQLServer({typeDefs: food, resolvers});
server.start(() =>  console.log("Now browse to http://localhost:4000"))