const navbar = () => {
  $('#navbar').html(`<nav class="navbar navbar-light bg-light">
                      <div class="container-fluid">
                        <a class="navbar-brand" href="#" id="brand">Firebase Pinterest</a>
                        <div id="login-form-container"></div>
                      </div>
                    </nav>
  `);
};

export default navbar;
