<h2 align="center">Julius Backend</h2>


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