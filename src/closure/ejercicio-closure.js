export function createPetList() {
    const petList = [];
    return function addPet(myPet) {
      if (myPet) {
        petList.push(myPet);
      }
      return petList;
    }
  }

  // este ejercicio es para almacenar mascotas