import { AngGajalPage } from './app.po';

describe('ang-gajal App', () => {
  let page: AngGajalPage;

  beforeEach(() => {
    page = new AngGajalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
