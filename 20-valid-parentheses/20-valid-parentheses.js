
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length <= 1 || s.length % 2 !== 0) return false;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currChar = s.charAt(i);

    if (currChar === '(' || currChar === '[' || currChar === '{') {
      stack.push(currChar);
    } else {
      switch (currChar) {
        case '}':
          if (stack.length === 0 || stack[stack.length - 1] !== '{') {
            return false;
          }
          stack.pop();

          break;
        case ')':
          if (stack.length === 0 || stack[stack.length - 1] !== '(') {
            return false;
          }
          stack.pop();

          break;
        case ']':
          if (stack.length === 0 || stack[stack.length - 1] !== '[') {
            return false;
          }
          stack.pop();
          break;
        default:
          break;
      }
    }
  }

  return stack.length === 0;
};
