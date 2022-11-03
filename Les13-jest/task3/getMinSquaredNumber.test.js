
import { getMinSquaredNum } from './getMinSquaredNumber.js';

it ('should testing empty array on input', () => {
    const result = getMinSquaredNum([]);
    expect(result).toEqual(null);
});

it ('should testing \'string\' on input', () => {
    const result = getMinSquaredNum('-777, 3, abc, 6, 45, -20');
    expect(result).toEqual(null);
});

it ('should get squared min number', () => {
    const result = getMinSquaredNum([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});
