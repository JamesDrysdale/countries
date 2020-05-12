import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      el: '#app',
      data: {
              countries: [],
              filterCountry: ""
      },
      mounted(){
          this.fetchCountries();
           this.filteredCountries();
        },
      methods: {
          fetchCountries: function(){
              fetch("https://restcountries.eu/rest/v2/all")
                .then(response =>  response.json())
                .then(countries => this.countries = countries)
            },
          filteredCountries: function(){
              return this.countries.filter(country => country.name === this.filterCountry)
            }
      }
    });
  });