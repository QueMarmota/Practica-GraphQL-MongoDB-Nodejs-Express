export default {
    Query: {
        allCars: async (parent, args, { Car }) => {
            const cars = await Car.find();
            return cars.map(x => {
                x._id = x._id.toString();
                return x;
            })
        },
        car: async (parent, args, { Car }) => {
            return Car.findOne(args);
        },
    },
    Mutation: {
        createCar: async (parent, args, { Car }) => {
            const car = await new Car(args).save();
            car._id = car._id.toString();
            return car;
        },
        deleteCar: async (parent, args, { Car }) => {
            const car = await Car.findOneAndDelete(args);
            return car;

        },
        updateCar: async (parent, args, { Car }) => {           
            return new Promise((resolve, reject) => {
                Car.findOneAndUpdate(args._id, { $set: { name:args.name } }).exec(
                  (err, res) => {
                    err ? reject(err) : resolve(res);
                  }
                );
              });

        },
    }
}
