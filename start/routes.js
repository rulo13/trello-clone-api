'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.resource('users', 'UserController')
  .apiOnly()
  .middleware('auth')
  .formats(['json'])

Route.post('login', 'UserController.login')
  .formats(['json'])

Route.get('currentUser', 'UserController.currentUser')
  .middleware('auth')
  .formats(['json'])

Route.post('users', 'UserController.store')
.formats(['json'])

Route.get('boards', 'BoardController.index')
  .middleware('auth')
  .formats(['json'])

Route.post('boards', 'BoardController.store')
  .middleware('auth')
  .formats(['json'])

Route.resource('boards', 'BoardController')
  .except(['show', 'edit', 'update', 'destroy'])
  .middleware('auth')
  .formats(['json'])

Route.resource('boards.cards', 'CardController')
  .only(['index', 'create'])
  .middleware('auth')
  .formats(['json'])

Route.resource('cards', 'CardController')
  .except(['show', 'edit', 'update', 'destroy'])
  .middleware('auth')
  .formats(['json'])

Route.resource('cards.comments', 'CommentsController')
  .only(['index', 'create'])
  .middleware('auth')
  .formats(['json'])

Route.resource('cards', 'CommentController')
  .except(['show', 'edit', 'update', 'destroy'])
  .middleware('auth')
  .formats(['json'])
