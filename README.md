CSS Events
=======
Get the correct transition- or animation-end event.

Install
-------

### With Bower

```bash
bower install cssevents
```

### With NPM

```bash
npm install cssevents
```

Example Setup
-------------

### Javascript

```javascript
import 'cssevents';

// or
import {transitionEnd, animationEnd} from 'cssevents';

document.querySelector('.selector').addEventListener(transitionEnd, e => {
  // do something
});
```

License
-------

[MIT License](LICENSE)
