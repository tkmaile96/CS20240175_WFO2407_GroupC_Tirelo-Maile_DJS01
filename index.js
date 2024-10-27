/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnrate = 0.5; // fuel burn rate (kg/s)

// velocity conversions in meters per second (MS)
const velocityInMS = velocity * (1000 / 3600);

// function to calculate new velocity in M/S
const calculateNewVelocity = (initialVelocity, acceleration, timeInSeconds) => {
  if (![initialVelocity, acceleration, timeInSeconds].every(Number.isFinite)) {
      throw new Error("Velocity, acceleration, and time must be valid numbers")
  }
  return initialVelocity + (acceleration * timeInSeconds);
}

// create an object of the given data for better readability
const givenData = {
  velocty: velocity,
  velocityInMS:  velocityInMS,
  acceleration: acceleration,
  timeInSeconds: timeInSeconds,
  initialDistance: initialDistance,
  initialFuel: initialFuel,
  fuelBurnrate: fuelBurnrate

}

//calcultes new distance
const newDistance = givenData.initialDistance + (givenData.velocityInMS * (givenData.timeInSeconds / 3600));

//calculates remaining fuel
const remainingFuel =  givenData.initialFuel - (givenData.fuelBurnrate * givenData.timeInSeconds);


 //calculates new velocity based on acceleration
const newVelocity =  calculateNewVelocity(givenData.velocityInMS, givenData.acceleration, givenData.timeInSeconds);

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






