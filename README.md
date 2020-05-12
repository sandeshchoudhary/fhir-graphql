# CovidTracker GraphQL API


[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/sandeshchoudhary/fhir-graphql)


Example query
```graphql

query {
  # patient data
  {
    patient(id: "Patient id"){
      name {
        text
        family
        given
      }
    }
  }
}

```


## Run Locally

```bash
  npx micro local.js
```

## Projects using this API

[Add yours +](https://github.com/sandeshchoudhary/fhir-graphql/edit/master/readme.md)

## License
MIT Licensed. PRs welcome! :)
