const serviciosCuidador = {
  Perro: { '0 - 5 KG': 5, '5 - 20 KG': 20, '20 - 50 KG': 50},
  Gato: { '0 - 5 KG': 5, '5 - 20 KG': 20},
  Conejo: { '0 - 5 KG': 5, '5 - 20 KG': 20},
  Hurón: { '0 - 5 KG': 5}
};
const serviciosAve = {"0 - 300 Gr": 300, "300 - 1000 Gr":1000}

const serviciosReptil = ["Tortuga","Serpiente","Gecko","Iguana","Camaleón"]
const serviciosPez = ["Agua dulce","Agua salada"]
const serviciosRoedores = ["Hámster","Conejillo de Indias","Erizo","Ratón","Chinchilla"]
export const checkServices = (allProfessionals, profession, species, animals) => {
  const professionalServices = {};


  allProfessionals?.forEach((professional) => {
    professional?.professions[profession]?.services?.forEach((service) => {
      if (species.includes(service.animal)) {
				// PERRO - GATO - CONEJO -
        if (Object.keys(serviciosCuidador).includes(service.animal)) {
          animals.forEach((animal) => {
            if (animal.specie === service.animal) {
              let animalWeightRange;
              for (const range in serviciosCuidador[service.animal]) {
								if (animal.weight.kilos <= serviciosCuidador[service.animal][range]) {
									animalWeightRange = range;
                  break;
                }
              }
							if(!animalWeightRange) animalWeightRange = "+50 KG"
              if (service.description === animalWeightRange) {
								if (professionalServices[professional.id]) {
									professionalServices[professional.id] = { profile: professional, services: [...professionalServices[professional?.id]?.services, service] };
                } else {
									professionalServices[professional.id] = { profile: professional, services: [service] };
                }
              }
            }
          });
        }
				if(service.animal === "Ave"){
					animals.forEach((animal)=>{
						if(animal.specie === service.animal){
							const aveWeight = (animal.weight.kilos * 1000 + animal.weight.gramos)
							let animalWeightRange;
							for (const range in serviciosAve) {
								if (aveWeight <= serviciosAve[range]) {
									animalWeightRange = range;
                  break;
                }
              }
							if(!animalWeightRange) animalWeightRange = "+1000 Gr"
							if(service.description === animalWeightRange){
								if (professionalServices[professional.id]) {
									professionalServices[professional.id] = { profile: professional, services: [...professionalServices[professional?.id]?.services, service] };
								} else {
									professionalServices[professional.id] = { profile: professional, services: [service] };
								}
							}
						}
					})
				}
				if(service.animal === "Pez"){}
				if(service.animal === "Roedor"){}
				if(service.animal === "Reptil"){}
				
      }
    });
  });
	
	return professionalServices
};
