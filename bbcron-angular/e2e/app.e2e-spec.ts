import { BbCronPage } from './app.po';

describe('bb-cron App', () => {
  let page: BbCronPage;

  beforeEach(() => {
    page = new BbCronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
