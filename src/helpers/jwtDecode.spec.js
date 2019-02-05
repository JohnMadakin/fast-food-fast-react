import jwtDecode from './jwtDecode';


describe('## VerifyUser', () => {
  it('should decode Token', () => {
    expect(jwtDecode()).toEqual(null);
  });

  it('should return a user when token exists and hasn\'t expired', () => {
    window.localStorage.setItem('token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI'
    + '6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    const user = jwtDecode();
    expect(user).toEqual(null);
  });

  it('should return a user when token exists and hasn\'t expired', () => {
    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
    + 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLC'
    + 'JleHAiOjE1MTYyMzkwMjJ9.4Adcj3UFYzPUVaVF43FmMab6RlaQD8A9V8wFzzht-KQ');
    jwtDecode();
    const user = jwtDecode();
    expect(user).toEqual(null);
  });
});
