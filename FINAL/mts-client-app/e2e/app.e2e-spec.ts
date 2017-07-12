import { MtsClientAppPage } from './app.po';

describe('mts-client-app App', () => {
  let page: MtsClientAppPage;

  beforeEach(() => {
    page = new MtsClientAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
