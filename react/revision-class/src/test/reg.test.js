
import { debug } from 'jest-preview';
describe("Registration Form Validation Test", () => {

  test('Check if input is not empty string', () => {
    const formValue = {
      name: 'John',
      lastName: 'Doe',
      birthday: '14/05/1999',
      email: 'john@example.com',
      password: '123456',
      confirmPassword: '123456'
    };

    expect(typeof formValue.name).toBe("string");
    debug();
    expect(typeof formValue.lastName).toBe("string");
    expect(typeof formValue.birthday).toBe("string");
    expect(typeof formValue.email).toBe("string");
    expect(typeof formValue.password).toBe("string");
    expect(typeof formValue.confirmPassword).toBe("string");
  });

  test('Check if password and confirmPassword values match', () => {
    const marchingPass = {
      password: '123456',
      confirmPassword: '123456'
    };

    expect(marchingPass.password).toEqual(marchingPass.confirmPassword);
  });
})