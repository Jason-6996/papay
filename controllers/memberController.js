let memberController = module.exports;

memberController.home = (req, res) => {
  res.send("Home sahifadasiz");
};

memberController.signup = (req, res) => {
  res.send("signup sahifadasiz");
};

memberController.login = (req, res) => {
  res.send("login sahifadasiz");
};

memberController.logout = (req, res) => {
  res.send("logout sahifadasiz");
};
