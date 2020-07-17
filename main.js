//Create the Traveler Class first

class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }

    hunt () {
        this.food += 2

    }

    eat () {
        if (this.food!== 0) {
            this.food -= 1

        }
        else {
            this.isHealthy = false
        }
    }

}

//Create the instance for the Travel Class

let angelica = new Traveler ("Angelica")
console.log(angelica)

angelica.eat()
console.log(angelica)

angelica.eat()
console.log(angelica)

//Create the Doctor Class that extends from the Traveler Class

class Doctor extends Traveler {
    constructor (name, food, isHealthy) {
        super (name, food)
        this.isHealthy = isHealthy
    }

    heal(traveler) {
        traveler.isHealthy = true
    }
}

//Create the Hunter Class that extends from the Traveler Class

class Hunter extends Traveler {
    constructor (name, food, isHealthy) {
        super (name, food)
        this.food = 2
        this.isHealthy = isHealthy
    }

    hunt() {
        this.food += 5
    }

    eat() {
        
        if (this.food < 2) {
        
            this.isHealthy = false
            this.food = 0

        }
        else {
            this.food -= 2
        }
    }

    giveFood(traveler, numOfFoodUnits) {

        if (this.food >= numOfFoodUnits ) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }
        
        
    }
}

//Create the Wagon Class

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return (this.capacity - this.passengers.length)
    }

    join(traveler) {
        if ((this.capacity - this.passengers.length) > 0) {
               this.passengers.push(traveler) 
        
        }
    }

    shouldQuarantine() {
        let quarantineTravelers = false
        for ( let counter = 0; counter < this.passengers.length; counter ++)

        if (this.passengers[counter].isHealthy === false) {
            quarantineTravelers = true
        }

        return quarantineTravelers
    }

    totalFood() {
        let foodTotal = 0
        for ( let counter = 0; counter < this.passengers.length; counter ++) {
            foodTotal += this.passengers[counter].food
        }
        
        return foodTotal;
    } 
    

}


