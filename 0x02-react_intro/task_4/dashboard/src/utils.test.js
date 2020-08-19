import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('utils', () => {
  test('getFullYear returns current year', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  })
  test('getFooterCopy returns correct string', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
    expect(getFooterCopy(false)).toEqual('Holberton School Main Dashboard');
  })
  test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toEqual(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  })
})