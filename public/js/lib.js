let app = {};

if (window.location.host === "stuarrrt.com") {
  if (window.location.protocol === "https:") {
    app.API_HOST = "https://stuarrrt.com/";
  } else {
    app.API_HOST = "http://stuarrrt.com/";
  }

} else if (window.location.host === "3.135.51.44") {
  app.API_HOST = "http://3.135.51.44/";
} else if (window.location.host === "localhost:3000") {
  app.API_HOST = "http://localhost:3000/";
} else {
  app.API_HOST = "http://stuarrrt.com/";
}
