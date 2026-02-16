# AgendaAngularJS
Projeto simples aplicando conceitos AngularJS

## Versão do AngularJS
Este projeto utiliza **AngularJS 1.8.3** (última versão oficial).

## Estrutura do Projeto
- `/lib` - Bibliotecas AngularJS locais (angular.min.js, angular-route.min.js)
- `/app` - Módulos da aplicação
- `/controllers` - Controladores AngularJS
- `/routes` - Configuração de rotas
- `/pages` - Templates das páginas

## Recursos Implementados
- ✅ Roteamento com ngRoute
- ✅ Two-way data binding
- ✅ Filtros (lowercase)
- ✅ Múltiplos controladores
- ✅ $rootScope e $scope
- ✅ Estilos dinâmicos com ng-model

## Rotas Disponíveis
- `/` - Página inicial
- `/jackson` - Página do professor com nested controllers
- `/banana` - Página de exemplo

## Como Executar
1. Clone o repositório
2. Abra um servidor HTTP na raiz do projeto:
   ```bash
   python3 -m http.server 8080
   ```
3. Acesse http://localhost:8080 no navegador

## Notas
- AngularJS foi oficialmente descontinuado, mas este projeto usa a última versão estável (1.8.3)
- Os arquivos AngularJS são servidos localmente para melhor desempenho e confiabilidade
