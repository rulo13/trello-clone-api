'use strict'
const Board = use('App/Models/Board')

class BoardController {

  async index({request, auth}) {
    const user = await auth.getUser();
    return await user.boards()
  }

  show() {
    return Board.find()
  }

  async store({ request }) {
    const BoardData = request.all()
    const Board = Board.create(BoardData)
    return Board;
  }

  async destroy({ params }) {
    const Board = await Board.find(params['id'])
    await Board.delete()
    return Board;
  }
}

module.exports = BoardController
