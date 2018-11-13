import mongoose from 'mongoose';
export default `
    type Car{
        _id: String!,
        name: String
    }
    type Query{
        allCars: [Car!]!
        car(_id: String!):Car
    }
    type Mutation{
        createCar(_id:String!,name:String!): Car!
        deleteCar(_id:String!):Car
        updateCar(_id:String!,name:String!):Car!
    }
`;  
