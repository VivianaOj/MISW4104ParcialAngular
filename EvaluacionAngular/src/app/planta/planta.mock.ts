import { faker } from '@faker-js/faker';
import { Planta } from "./planta";

export function createRandomPlanta(): Planta {
  return new Planta(
    faker.datatype.number(),
    faker.commerce.productName(),
    faker.commerce.productName(),
    faker.helpers.arrayElement(['Interior', 'Exterior']),
    faker.datatype.number(),
    faker.helpers.arrayElement(['Templado', 'cálido']),
    faker.commerce.productName(),
  );
}
