# Endpoint description

## Plans ##

List of plans (possible subscriptions) configured at server with defined prices for each available currency, region and units system (metric, imperial).

* Read only
* Collection URL:  `plans/`
* Login not required
* No pagination
* No sorted
* Filtering by:
    * currency: `PLN`, `USD`, etc
    * plan: plan name (`Starter`, `Profesionl`, `Premium`) or plan id
    * region: ISO2 region code (`PL`, `CZ`, `ES`, etc)
    * units: units system name (`imaerial`, `metric`)
* Example: `curl -X GET -H "Content-Type: application/json" "https://app.satagro.pl/api/plans/?plan=Professional&units=metric"`

And as a result you will get a list with all plans configured at the server:

```json
[
    {
        "id": 5,
        "plan": {
            "id": 101,
            "name": "Professional"
        },
        "currency": "CZK",
        "currency_symbol": "Kč",
        "yearly_rate": 66.3,
        "region": "CZ",
        "units_system": 1
    },
    {
        "id": 13,
        "plan": {
            "id": 101,
            "name": "Professional"
        },
        "currency": "EUR",
        "currency_symbol": "€",
        "yearly_rate": 2.5,
        "region": "LT",
        "units_system": 1
    },
    ...
]
```

