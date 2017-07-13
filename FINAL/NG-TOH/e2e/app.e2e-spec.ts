import { NGTOHPage } from './app.po';

describe('ng-toh App', () => {
  let page: NGTOHPage;

  beforeEach(() => {
    page = new NGTOHPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
