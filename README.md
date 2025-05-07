# Island Tax Return Backend
This is a backend service for managing tax returns, users, incomes, assets, and liabilities.

## Package manager
Use Yarn@1.22.22

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```


## Run the project on Docker
You should use [Docker](https://www.docker.com/) to build and run the project.
1. Build the image:
```bash
docker build -t island-tax-return-backend:latest .
```
2. Run the container:
```bash
docker run -p 3000:3000 --env-file .env island-tax-return-backend:latest
```


## GraphQL API
### GraphQL Playground
- **GET /graphql**  
  This endpoint provides a GraphQL playground for testing queries and mutations. You can use it to explore the API and test different operations. For this special project, the playground is also available in the production environment on this URL: [https://7d5113d3dba5034.qaack.1xinter.net/graphql](https://7d5113d3dba5034.qaack.1xinter.net/graphql).
- **GraphQL Schema**  
  The API uses GraphQL to define the schema for users, tax returns, incomes, assets, and liabilities. The schema is defined in the `schema.graphql` file. You can use this file to understand the structure of the data and the relationships between different entities.
- **GraphQL Queries and Mutations**  
  The API supports various queries and mutations for managing users, tax returns, incomes, assets, and liabilities.
- **Example Queries**
  - Create a new user with tax returns (not a real life scenario):
    ```graphql
    mutation CreateUser($user: CreateUserInput!) {
      createUser(user: $user) {
        id
      }
    }
    ```
    ```JSON
    {
      "user": {
        "firstName": "Jökull",
        "lastName": "Þórðarson",
        "ssn": "120389-4569",
        "streetAndHouseNumber": "Bláfjallagata 12",
        "postalCode": "105",
        "city": "Reykjavík",
        "email": "jokull.thordarson@email.is",
        "phone": "772-8391",
        "taxReturns": [
            {
                "userId": 1,
                "year": 2024,
                "status": "draft",
            "incomes": [
              {
                "taxReturnId": 1,
                "source": "Norðurljós Software ehf",
                "amount": 9360000,
                "type": "type 1",
                "subtype": "sub type 1"
              }
            ],
            "assets": [
              {
                "taxReturnId": 1,
                "value": 52000000,
                "type": "realEstate",
                "assetId": "210-9876",
                "address": "Bláfjallagata 12"
              }
            ],
            "liabilities": [
              {
                "taxReturnId": 1,
                "type": "mortgage",
                "subtype": "parliamentAndMunicipality",
                "propertyAddress": "Bláfjallagata 12",
                "lenderName": "Íslandsbanki hf.",
                "lenderSsn": "491008-0160",
                "loanNumber": "56783900123",
                "loanStartDate": "2021-06-15",
                "loanTermYears": 30,
                "annualPayment": 2280000,
                "principalRepayment": 1360000,
                "interestPaid": 920000,
                "remainingBalance": 28540000,
                "details": "4469 88XX XXXX 4567",
                "accountNumber": "0142-26-732645",
                "issuer": "Varðan"
              }
            ]
            }
        ]
      }
    }
    ```
  - Get all users:
  ```graphql
  {
    users {
      id
      firstName
      lastName
      ssn
      streetAndHouseNumber
      postalCode
      city
      email
      phone
      taxReturns {
        id
        userId
        year
        status
        incomes {
          id
          taxReturnId
          source
          amount
          type
          subtype
        }
        assets {
          id
          taxReturnId
          value
          type
          assetId
          address
        }
        liabilities {
          id
          taxReturnId
          type
          subtype
          propertyAddress
          lenderName
          lenderSsn
          loanNumber
          loanStartDate
          loanTermYears
          annualPayment
          principalRepayment
          interestPaid
          remainingBalance
          details
          accountNumber
          issuer
        }
      }
    }
  }
  ```