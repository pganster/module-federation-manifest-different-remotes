import { loadRemote } from '@module-federation/enhanced/runtime';
import './index.css';

const remote = loadRemote('federation_provider/helloProducer');

remote.then((module) => module.helloProducer());
fetch('http://consumer.test:2000/123', {credentials: 'include'});

document.querySelector('#root')!.innerHTML = `
<div class="content">
  <h1>Hello from consumer</h1>
</div>
`;
