# object-inject
Inject a new object into an existing one at a certain position.

## Example
```javascript
var objectInject = require('object-inject');

var original = {
  created: new Date(),
  modified: new Date(),
  name: 'Test!',
  status: 'active'
};

var injectThis = {
  info: {
    created_by: 'me',
    modified_by: 'you'
  }
};

var newObject = objectInject(original, injectThis, 'name', 'before');
```
