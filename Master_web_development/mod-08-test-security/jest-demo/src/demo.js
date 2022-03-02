function operation(op, number1, number2) {
  if (typeof(number1) !== "number" || typeof(number2) !== "number") {
    return undefined;
  }
  if (op === "+"){
    return number1 + number2
  }else if (op === "-") {
    return number1 - number2
  }
  return undefined;
}


exports.exported = operation;