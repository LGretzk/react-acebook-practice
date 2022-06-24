const HomeController = {
  Index: (req, res) => {
    // res.render("home/index", { title: "Acebook" });
    console.log('request made');
    let response = {body: "this is a test response from the server"};
    res.header({'Access-Control-Allow-Origin': '*'}).send(response);
  },
};

module.exports = HomeController;
