const kalkulator = require("../../models/kalkulator");

test("å legge til 2 + 2 skal returnere 4", () => {
  const resultat = kalkulator.leggtil(2, 2);
  expect(resultat).toBe(4);
});

test("å legge til 5 + 100 skal returnere 105", () => {
  const resultat = kalkulator.leggtil(5, 100);
  expect(resultat).toBe(105);
});

test("å legge til 'banan' + 100 skal returnere 'feil'", () => {
  const resultat = kalkulator.leggtil("banan", 100);
  expect(resultat).toBe("feil");
});
