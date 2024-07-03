fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    //Get all the countries from Asia continent /region using Filter method

    const asianCountries = data.filter((country) => country.region === "Asia");
    console.log(asianCountries);
    //Get all the countries with a population of less than 2 lakhs using Filter method
    const po = data.filter((country) => country.population < 200000);
    console.log(po);
    //Print the following details name, capital, flag, using forEach method
    const inf = data.forEach((country) => {
      console.log(country.name, country.capital, country.flag);
    });
    //Print the total population of countries using reduce method
    const total = data.reduce((previousvalue, country) => {
      return previousvalue + country.population;
    }, 0);
    console.log(total);
    //Print the country that uses US dollars as currency.
    const same = data.filter((country) => {
      return (country.currencies = "$");
    });
    console.log(same);
  })
  .catch((error) => console.error("Error:", error));
