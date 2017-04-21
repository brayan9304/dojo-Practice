import { DojoPage } from './app.po';

describe('dojo App', () => {
  let page: DojoPage;

  beforeEach(() => {
    page = new DojoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
