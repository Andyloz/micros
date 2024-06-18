# Micros

A simple tool for organization of microphone shifts on JW meetings.

**Status:** The project is currently `WIP`.

## Stack

 * **Database:** MySQL queried with [Drizzle-ORM](https://orm.drizzle.team/).
 * **Frontend:** React with [TailwindCSS](https://tailwindcss.com/)
 * **Backend:** [Next.js](https://nextjs.org/) (using the new
   [App router](https://nextjs.org/docs/app))
 * **Code quality:** This project uses
   [Typescript](https://www.typescriptlang.org/)

It uses as well [Temporal](https://tc39.es/proposal-temporal/docs/) a TC39
stage 3 API that pretends to create a modern and accurate alternative to 
`Date`. Provided by the [temporal-polyfill](https://github.com/fullcalendar/temporal-polyfill#readme)
package. 

## Requirements

This project uses [Bun](https://bun.sh/) for package management. You can try
to run this project with the default `npm`, but it may not work.

To test it, you need a **MySQL** database, it won't work with MariaDB. Use 
the `.env.example` file to create an `.env` file. Create an empty database 
and fill the environment variables. Then run the migrations:

```shell
bun install # better make sure the dependencies are installed
bunx drizzle-kit migrate 
```

_TODO:_ Use Faker to generate sample data.

## Get started

With the database ready, you can run the project.

```shell
bun install
bun run dev
```