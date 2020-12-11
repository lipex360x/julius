module.exports = function (plop) {
  // controller generator
  plop.setGenerator('module', {
    description: 'Create a Module',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Module name please'
    }],
    actions: [

      // INFRA: http
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/infra/http/controllers/Create{{pascalCase name}}Controller.ts',
        templateFile: 'templates/controller.hbs'
      },
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/infra/http/routes/{{camelCase name}}.routes.ts',
        templateFile: 'templates/routes.hbs'
      },

      // INFRA: typeORM
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/infra/typeorm/entities/{{pascalCase name}}.ts',
        templateFile: 'templates/entities.hbs'
      },
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/infra/typeorm/repositories/{{pascalCase name}}Repository.ts',
        templateFile: 'templates/repository.hbs'
      },

      // REPOSITORIES
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/repositories/index.ts',
        templateFile: 'templates/indexContainer.hbs'
      },
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/repositories/fakes/Fake{{pascalCase name}}Repository.ts',
        templateFile: 'templates/fakeRepository.hbs'
      },
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/repositories/interfaces/I{{pascalCase name}}Repository.ts',
        templateFile: 'templates/interfaceRepository.hbs'
      },

      // SERVICES
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/services/Create{{pascalCase name}}/Create{{pascalCase name}}Service.ts',
        templateFile: 'templates/service.hbs'
      },
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/services/Create{{pascalCase name}}/Create{{pascalCase name}}Service.spec.ts',
        templateFile: 'templates/service.spec.hbs'
      }
    ]
  })
}
