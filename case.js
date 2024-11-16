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
  const capitalRegex = /(?<start>^[a-z\u00C0-\u017F])(?<end>\w*)/;

  if (isString(text)) return text.replace(capitalRegex, (match, start, end, offset, input, groups) => {
    return `${groups.start.toUpperCase()}${groups.end.toLowerCase()}`;
  });
  throw nonStringError(text);
}

// toleranceLength : the maximum length for a word to be ignored (not capitalized)
function titlecase(text, toleranceLength = 3) {

  if (isString(text)) return text.split(/\s+/)
    .map(word => {
      if (word.length > toleranceLength) return capitalcase(word);
      return word
    })
    .join(" ");
  throw nonStringError(text);
}

export {
  titlecase,
  uppercase,
  lowercase,
  capitalcase
}