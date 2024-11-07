const { test, expect } = require('@playwright/test');

test('Verify GET request status code 200 for user data', async () => {
  
  const response = await fetch('https://reqres.in/api/users/1');

  expect(response.status).toBe(200);
});
