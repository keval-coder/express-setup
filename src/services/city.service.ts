import { cityModel } from "../database/schemas/cities.schema";

export const createCity = async () => {
  const city = await cityModel.create({
    name: "Sample City",
    state: "Sample State",
  });

  console.log(city, "City");
};
