


export const getSolution = async (req, res) => {
  try {
    const solution = [
      {"word":"ninja","id":1},
      {"word":"apple","id":2},
      {"word":"zebra","id":3},
      {"word":"ocean","id":4},
      {"word":"sunny","id":5},
      {"word":"laser","id":6},
      {"word":"music","id":7},
      {"word":"hatch","id":8},
      {"word":"trump","id":9},
      {"word":"fairy","id":10},
      {"word":"tiger","id":11},
      {"word":"jumbo","id":12},
      {"word":"quick","id":13},
      {"word":"magic","id":14},
      {"word":"daisy","id":15},
      {"word":"lemon","id":16},
      {"word":"smile","id":17},
      {"word":"yacht","id":18},
      {"word":"dream","id":19},
      {"word":"earth","id":20}
    ]
    return res.status(200).send(solution);
  } catch (error) {
    return res.status(404).send({ error: "getSolution Error" });
  }
  
}