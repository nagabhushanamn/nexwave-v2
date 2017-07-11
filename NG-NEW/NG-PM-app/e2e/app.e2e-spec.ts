import { PMAppPage } from './app.po';

describe('pm-app App', () => {
  let page: PMAppPage;

  beforeEach(() => {
    page = new PMAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
