import { CH3RouterPage } from './app.po';

describe('ch3-router App', () => {
  let page: CH3RouterPage;

  beforeEach(() => {
    page = new CH3RouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
