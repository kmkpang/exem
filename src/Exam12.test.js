import { fetch_data } from './Exam12';

it('should call generator function', () => {
  const generator = fetch_data();
  expect(generator.next().value).toBe("");
});
