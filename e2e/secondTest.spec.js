describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should show log out on button after tap', async () => {
    await element(by.label('Log In')).tap();
    await expect(element(by.label('Log Out'))).toBeVisible();
  });
})