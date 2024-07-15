function status(request, response) {
  response.status(200).json({
    nøkkel:
      "Tilhengerne av vãrt åpen kildekode-prosjekt er mennesker over gjennomsnittet",
  });
}

export default status;
