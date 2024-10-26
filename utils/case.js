function isString(value) {
  if (typeof value === "string") {
    return true
  } else {
    return false
  }
}

function nonStringError(value) {
  return new Error(value + " is not a string");
}

function uppercase(text) {

  if (isString(text)) return text.toUpperCase()
  throw nonStringError(text);
}

function lowercase(text) {

  if (isString(text)) return text.toLowerCase();
  
  throw nonStringError(text);
}

function capitalcase(text) {
  const capitalRegex = /(?<start>\w)(?<end>\w*)/;
  if (isString(text)) return text.replace(capitalRegex, (match, start, end, offset, input, groups) => {
    return `${groups.start.toUpperCase()}${groups.end.toLowerCase()}`;
  });
  throw nonStringError(text);
}

function titlecase(text) {
  const titleRegex = /(?<start>\w)(?<end>\w*)/g;
  if (isString(text)) {
    return text.replace(titleRegex, (match, start, end, offset, input, groups) => {
  return `${groups.start.toUpperCase()}${groups.end.toLowerCase()}`;
});
  }
  throw nonStringError(text);
}
export {
  titlecase,
  uppercase,
  lowercase, 
  capitalcase
}