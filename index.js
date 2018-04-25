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
    
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    
    store.passengers.push(this);
  }
  
  trips() {
    
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
    
  }
  
  passenger() {
    
  }
}