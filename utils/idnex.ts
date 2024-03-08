import { CarProps, FilterProps } from "@/types";

export default async function fetchCars(filters: FilterProps) {

   const {manufacturer, year, model, limit, fuel} = filters;

   const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
   const apiKey = "d1be856589msh38175f6a977465dp1b09ffjsn3bbc277c61b3";
   const apiHost = "cars-by-api-ninjas.p.rapidapi.com";


   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': apiKey,
         'X-RapidAPI-Host': apiHost
      }
   };

   try {
      const apiResponse = await fetch(url+`?model=${model}&make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}`, options);
      const result = await apiResponse.json();
      return result;
   } catch (error) {
      console.error(error);
   }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

 
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

 
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle? : string) =>
{

}



export const updateSearchParams = (type: string, value: string) => {
   
   const searchParams = new URLSearchParams(window.location.search);

   searchParams.set(type, value);
   
   const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
   return newPathName;
}