var lion ={
    name:"Simba",
    legs: 4,
    tails: 1
    
}

function myFunction (prop,propVal){

    lion[prop]= propVal
    return lion
    
}

myFunction('roar', 'roar-roar')

module.exports = myFunction;
