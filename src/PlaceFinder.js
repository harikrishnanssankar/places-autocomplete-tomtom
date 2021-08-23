import axios from "axios";

export default class PlaceFinder {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  // async getNearbyPlaces(query, lat, long, limit = 5, radius = 10000) {
  //   let baseUrl = "https://api.tomtom.com/search/2/poiSearch";
  //   let queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=${this.apiKey}`;
  //   let response = await axios.get(`${baseUrl}/${query}.json?${queryString}`);
  //   return response.data.results;
  // }
  async getNearbyPlaces(
    query,
    lat,
    long,
    country = "IN",
    limit = 7,
    radius = 200000,
    entity = "CountrySubdivision, CountrySecondarySubdivision ,CountryTertiarySubdivision, Municipality, MunicipalitySubdivision"
  ) {
    let baseUrl = "https://api.tomtom.com/search/2/geocode/";
    let queryString = `&limit=${limit}&lat=${lat}&lon=${long}&raduis=${radius}&countrySet=${country}&key=${this.apiKey}&idxSet=Geo&entityTypeSet=${entity}`;
    let response = await axios.get(`${baseUrl}/${query}.json?${queryString}`);
    return response.data.results;
  }
}
