import 'jest';
import propTypes from 'prop-types';
import deprecated from '../deprecated';

const { error } = console;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = error;
});

it('logs an error when deprecated prop is passed', () => {
  propTypes.checkPropTypes({
    excludeDates: deprecated(propTypes.string, ' It has been replaced by exclude.')
  }, { excludeDates: 'does not matter' }, 'excludeDates', 'MyComponent');
  expect(console.error).toBeCalledWith(`Warning: "excludeDates" property of "MyComponent" has been deprecated.
 It has been replaced by exclude.`);
});

it('throws an error when incorrect prop is passed', () => {
  propTypes.checkPropTypes({
    excludeDates: deprecated(propTypes.string, ' It has been replaced by exclude.')
  }, { excludeDates: 42 }, 'excludeDates', 'MyComponent');
  expect(console.error).toBeCalledWith(`Warning: Failed excludeDates type: Invalid excludeDates \`excludeDates\` of type \`number\` supplied to \`MyComponent\`, expected \`string\`.`);
});