import { DemoFirebasePage } from './app.po';

describe('demo-firebase App', () => {
  let page: DemoFirebasePage;

  beforeEach(() => {
    page = new DemoFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
