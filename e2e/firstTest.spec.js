describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have login button', async () => {
    await expect(element(by.id('loginBtn'))).toBeVisible();
  });

  it('should have login as label on button', async () => {
    await expect(element(by.label('Log In'))).toBeVisible();
  });
})