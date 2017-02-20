import { PearSportsPage } from './app.po';

describe('pear-sports App', function() {
  let page: PearSportsPage;

  beforeEach(() => {
    page = new PearSportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
