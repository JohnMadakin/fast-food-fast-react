import updatedObject from '../utility';

describe('### upDateObject utility', () => {
  it('should update object if valid parameters is supplied', () => {
    expect(updatedObject({ dafe: true, omare: false }, { john: true })).toEqual(
      { dafe: true, john: true, omare: false },
    );
  });

  it('should update object if valid parameters is supplied', () => {
    expect(updatedObject({ dan: true, ced: false }, { show: true })).toEqual(
      { dan: true, ced: false, show: true },
    );
  });
});