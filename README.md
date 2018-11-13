# Practica-GraphQL-MongoDB-Nodejs-Express


Para esta practica se utilizaron las siguientes dependencias 

"dependencies": {
    "apollo-server-express": "^2.2.1",
    "express": "^4.16.4",
    "graphql": "^14.0.2",
    "graphql-tools": "^4.0.3",
    "mongoose": "^5.3.11"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-preset-env": "^1.7.0"
  }

  Para ejecutar la practica tenemos que tener mongodb y tenerlo ejecutado
    $ "C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe"
  Para ejecutar la practica ejecutar el comando
    npm run dev 

Esta practica consiste en utilizar Graphql integrado con mongoDB , nodeJS y Express 
para una aplicacion la cual maneja carros en la cual puede agregar eliminar modificar y consultar Carros
por medio de /graphql



QUERYS EN GRAPHQL

{
  allCars{
    _id
    name
  }
  car(_id:"1"){
    _id
    name
  }
}
mutation{
  createCar(_id:"1",name:"carro2"){
    name 	
  }
}
mutation{
  deleteCar(name:"carro2"){
    name
  }
}
mutation{
  updateCar(_id:"1",name:"CarroAct"){
    _id
    name
  }
}