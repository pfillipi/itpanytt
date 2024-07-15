function leggtil(nummer1, nummer2) {
  if (typeof nummer1 !== "number") {
    return "feil";
  }
  return nummer1 + nummer2;
}

exports.leggtil = leggtil;
