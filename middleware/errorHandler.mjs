export default function errorHandler(req, res, next) {
  res.status(404).render("error");
}
