# SatAgro Prices
Application built with use of Vue. [Live version on Heroku](https://satagro-prices.herokuapp.com/).
There's also Proxy API as somebody did not unlock the CORS for all (deliberately or not).

## About the Application
- App calls API plan endpoint once for every specific plan, this way net usage is maximally reduced. After first load selects filter functions filter the data.
- Region selection changes language of application
- Translations were done with use of i18n for Vue and json files
- I added support for error when API will fail but didn't tested
- I used scoped CSS. For such small project I didn't use SASS
- Currency selection is chained to region
- Currency symbol and country currencies are built in in App - this could be done as an API request, but I didn't want to use time for this
- Proxy API was done as the Frontend application couldn't receive data from https://app.satagro.pl/api/plans/
- As this is demo app it was done on top of Vue framework, but real production would be better as an SSR
- There's no support for url queries as for form selections - this would need some more time and would be nice for UX and url sharing

This project took me **12** work hours

## Setting up the Application

### LOCAL

Clone the git repo:
> `git clone https://github.com/ThomasK0lasa/satagro-prices`

To run the App developer version do:

> `npm install`<br>
> `npm run serve`

### ONLINE

You can find online App here (unvisited heroku apps are kept in sleep state so if You receive error please reload the page again):
https://satagro-prices.herokuapp.com/

And live proxy of API here:
https://satagro-prices-api.herokuapp.com/

## Others
Proxy git repo: https://github.com/ThomasK0lasa/satagro-prices-proxy
