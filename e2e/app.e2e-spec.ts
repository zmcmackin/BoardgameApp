import { BoardgameA2CLIPage } from './app.po';

describe('boardgame-a2-cli App', function() {
  let page: BoardgameA2CLIPage;

  beforeEach(() => {
    page = new BoardgameA2CLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
