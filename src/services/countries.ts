import { myAxios } from "../lib/axios/axios";

export async function getCountries() {
  try {
    const response = await myAxios().get("/all");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}
