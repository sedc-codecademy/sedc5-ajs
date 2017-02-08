import { DemoOnePage } from './app.po';

describe('demo-one App', function() {
  let page: DemoOnePage;

  beforeEach(() => {
    page = new DemoOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
