import { NgBasicsPage } from './app.po';

describe('ng-basics App', () => {
  let page: NgBasicsPage;

  beforeEach(() => {
    page = new NgBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
