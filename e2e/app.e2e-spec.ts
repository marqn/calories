import { CaloriesPage } from './app.po';

describe('calories App', function() {
  let page: CaloriesPage;

  beforeEach(() => {
    page = new CaloriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
