let store = {drivers: [], passengers: [], trips: []};

let userId = 0;

let passengerId = 0;

let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++userId;
    this.name = name;
    
    store.drivers.push(this);
  }
  
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    });
  }
  
  passengers() {
    return store.passengers.filter(passenger => {
      
    }
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    
    store.passengers.push(this);
  }
  
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId == this.id;
    });
  }
  
  drivers() {
    
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = tripId++;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    
    store.trips.push(this);
  }
  
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}