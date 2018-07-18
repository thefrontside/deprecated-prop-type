import warning from 'warning';

let warned = {};

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) { // Note ...rest here
    if (props[propName] != null) {
      const message = `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`;
      if (!warned[message]) {
        warning(false, message);
        warned[message] = true;
      }
    }

    return propType(props, propName, componentName, ...rest); // and here
  };
}

function _resetWarned() {
  warned = {};
}

deprecated._resetWarned = _resetWarned;

export default deprecated;
