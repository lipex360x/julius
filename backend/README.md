<h2 align="center">Boilerplate Typescript Backend</h2>

#### :bookmark_tabs: Content Index
- [Snippets Backend](https://gist.github.com/lipex360x/d55aec8387c8f4d0a5ab18131e56cd65)

- [Package Scripts](#zap-package-scripts)

---

#### :zap: Package Scripts

* Start Server 
```
> Develop Mode
yarn dev:server

> Production Mode (after build)
yarn start
```

* Remove .gitkeep files 
```
yarn clean
```

* Create New Module 
```
yarn module
```

* TypeORM CLI 
```
> default CLI
yarn orm 

> Create a Migration
yarn orm:create nameMigration 

> Execute Migrations
yarn orm:run 

> Revert Migration (one to one)
yarn orm:revert 

> Displays migrations performed
yarn orm:show 
```

* TypeORM Seeds CLI
```
> Seed Check Config
yarn seed:config

> Seed Execute
yarn seed:run
```

* Jest Test CLI
```
> Execute all Tests
yarn test

> Execute one specific Test
yarn test:v testPath

> Clear Test Cache
yarn test:c testPath

```

* Babel Build
```
yarn build
```

:bookmark_tabs: [Go to Content Index](#bookmark_tabs-content-index)

---
