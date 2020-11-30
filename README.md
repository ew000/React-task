# GraphQL React - Engineer Exercise
Simple JSON GraphQL Server - React / Node

## Introduction

This project has the following components:

- Next.js, React and Node.js api
- GraphQL server running on `localhost:4000/graphql`
  - Schema is defined in `./api/schema.js`
  - Data is located in `./api/db/courses.json`
  - GraphiQL is included with this graphQL server

## Running the application

- `yarn` - Install dependancies.
- `yarn dev` - Uses Concurrently to run both the next app and the Node graphQL server.

## Requirements

- The page should follow the wireframe provided.
- Code should be clean and maintainable.
- Code should be accessibile.
- Design should be responsive.

## Notes

- Use any design system you want such as Bootstrap, Chakra UI, Material UI to help with design and layout.
- Use TypeScript.
- Don't spend too much time on the styling, basic styling is fine. Functionality and accessability is the main focus on this Exercise.
- Do **NOT** spend more than 2-3 hours doing this Exercise. If you don't complete all the tasks in this time, that is fine.

## Exercise Submission

Option 1: **Prefered** Upload to Github or Bitbucket and invite info@carl-stanley.com

Option 2: Remove node_modules, compress and send to info@carl-stanley.com

## Task 1

When navigating to `localhost:3000/courses`, list the courses based on the wireframe [linked here](https://www.dropbox.com/s/ka46l9arj5hli7v/Screenshot%202020-10-14%20at%2021.41.54.png?dl=0).

## Task 2

Create a filter resolver on the graphQL server `./api` to allow for filtering on the following fields:
- *Title* - Free text field
- *Class Type* - Select
- *Level* - Select

## Task 3

On the client, implement filtering for the fields added in Task 2 and display the filtered results.

## Task 4 - Bonus (Not required)

Add a basket list on the page and add a class to this list when `Book` button is clicked.

- Focus on function rather than style.
- The list does not need to persist on refresh.