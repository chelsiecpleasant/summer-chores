
function getTooTired() {
  return Math.random() < 0.3; 
}

function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve(name);
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getTooTired()) {
        reject(`${name} fell asleep after mowing the yard.`);
      } else {
        console.log(`${name} finished using the weed eater.`);
        resolve(name);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getTooTired()) {
        reject(`${name} fell asleep after weed eating the yard.`);
      } else {
        console.log(`${name} finished trimming the hedges.`);
        resolve(name);
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getTooTired()) {
        reject(`${name} fell asleep after trimming the hedges.`);
      } else {
        console.log(`${name} finished collecting wood.`);
        resolve(name);
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getTooTired()) {
        reject(`${name} fell asleep after collecting wood.`);
      } else {
        console.log(`${name} finished watering the garden.`);
        resolve(name);
      }
    }, 500);
  });
}

function doSummerChores(name) {
  mowYard(name)
    .then(weedEat)
    .then(trimHedges)
    .then(collectWood)
    .then(waterGarden)
    .then(() => console.log(`${name} finished all their chores!`))
    .catch((msg) => console.log(msg));
}


doSummerChores("Chelsie");
