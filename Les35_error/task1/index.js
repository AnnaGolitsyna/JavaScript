window.addEventListener('error', function onUnhandledError(err) {
  console.error('error', err.message);
});

let userParsingResult;

try {
  const user = JSON.parse('{"name": "Bobby", "age": "15"}');
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse('{"productName": "milk"; "price":"25"}');
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';

} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}
