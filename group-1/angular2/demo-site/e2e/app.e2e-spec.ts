import { DemoSitePage } from './app.po';

describe('demo-site App', function() {
  let page: DemoSitePage;

  beforeEach(() => {
    page = new DemoSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
