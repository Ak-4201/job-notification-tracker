(function () {
  var routes = {
    "/": {
      key: "/dashboard",
      headerTitle: "Dashboard",
      headerSubtitle:
        "A calm overview of your job notifications will appear here.",
      pageTitle: "Dashboard",
      pageSubtitle: "This section will be built in the next step.",
    },
    "/dashboard": {
      key: "/dashboard",
      headerTitle: "Dashboard",
      headerSubtitle:
        "A calm overview of your job notifications will appear here.",
      pageTitle: "Dashboard",
      pageSubtitle: "This section will be built in the next step.",
    },
    "/saved": {
      key: "/saved",
      headerTitle: "Saved",
      headerSubtitle:
        "A focused space for saved roles and notifications will appear here.",
      pageTitle: "Saved",
      pageSubtitle: "This section will be built in the next step.",
    },
    "/digest": {
      key: "/digest",
      headerTitle: "Digest",
      headerSubtitle:
        "A structured digest of job notifications will be defined here.",
      pageTitle: "Digest",
      pageSubtitle: "This section will be built in the next step.",
    },
    "/settings": {
      key: "/settings",
      headerTitle: "Settings",
      headerSubtitle:
        "Notification preferences and delivery settings will live here.",
      pageTitle: "Settings",
      pageSubtitle: "This section will be built in the next step.",
    },
    "/proof": {
      key: "/proof",
      headerTitle: "Proof",
      headerSubtitle:
        "A clear view of what has shipped will be defined in this section.",
      pageTitle: "Proof",
      pageSubtitle: "This section will be built in the next step.",
    },
    notFound: {
      key: null,
      headerTitle: "Page Not Found",
      headerSubtitle: "The page you are looking for does not exist.",
      pageTitle: "Page Not Found",
      pageSubtitle: "The page you are looking for does not exist.",
    },
  };

  var headerTitle = document.querySelector(".context-header__title");
  var headerSubtitle = document.querySelector(".context-header__subtitle");
  var placeholderTitle = document.querySelector(".route-placeholder__title");
  var placeholderSubtitle = document.querySelector(
    ".route-placeholder__subtitle"
  );
  var nav = document.querySelector(".app-nav");
  var navToggle = document.querySelector(".app-nav__toggle");
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".app-nav__link")
  );
  var brandLink = document.querySelector(".app-name");

  function resolveRoute(pathname) {
    if (!pathname || pathname === "/") {
      return routes["/"];
    }
    if (routes[pathname]) {
      return routes[pathname];
    }
    return routes.notFound;
  }

  function setActiveLink(route) {
    var targetKey = route && route.key;
    navLinks.forEach(function (link) {
      var linkRoute = link.getAttribute("data-route");
      if (targetKey && linkRoute === targetKey) {
        link.classList.add("app-nav__link--active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("app-nav__link--active");
        link.removeAttribute("aria-current");
      }
    });
  }

  function render(pathname) {
    var route = resolveRoute(pathname);
    if (headerTitle && route.headerTitle) {
      headerTitle.textContent = route.headerTitle;
    }
    if (headerSubtitle && route.headerSubtitle) {
      headerSubtitle.textContent = route.headerSubtitle;
    }
    if (placeholderTitle && route.pageTitle) {
      placeholderTitle.textContent = route.pageTitle;
    }
    if (placeholderSubtitle && route.pageSubtitle) {
      placeholderSubtitle.textContent = route.pageSubtitle;
    }
    setActiveLink(route);
  }

  function navigate(pathname) {
    if (window.location.pathname === pathname) {
      render(pathname);
      return;
    }
    window.history.pushState({}, "", pathname);
    render(pathname);
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("app-nav--open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var target = link.getAttribute("href");
      if (!target) return;
      navigate(target);
      if (nav && nav.classList.contains("app-nav--open") && navToggle) {
        nav.classList.remove("app-nav--open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  if (brandLink) {
    brandLink.addEventListener("click", function (event) {
      event.preventDefault();
      navigate("/");
    });
  }

  window.addEventListener("popstate", function () {
    render(window.location.pathname);
  });

  render(window.location.pathname);
})();

