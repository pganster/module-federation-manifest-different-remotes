export function helloProducer() {
  console.log('hello from producer');

  fetch('http://producer.test:3000', {credentials: 'include', mode: 'cors'});
}
