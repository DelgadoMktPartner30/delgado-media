/* Consentimiento de cookies y Google Analytics 4 (delgado.media).
   GA4 solo se carga si el visitante pulsa «Aceptar». Sin respuesta o con «Rechazar» no se instala
   ninguna cookie de análisis. La elección se guarda 12 meses en este navegador.
   - window.dgCookies.abrir(): vuelve a mostrar el aviso (enlace en cookies.html).
   - window.dgEvento(nombre, parámetros): envía un evento a GA4 solo si hay consentimiento. */
(function () {
  var ID = "G-XGHYB9WCMJ";
  var CLAVE = "dg-cookies";
  var VIGENCIA = 365 * 24 * 60 * 60 * 1000;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });

  function leer() {
    try {
      var v = JSON.parse(localStorage.getItem(CLAVE) || "null");
      if (v && (v.e === "si" || v.e === "no") && Date.now() - v.t < VIGENCIA) return v.e;
    } catch (e) {}
    return null;
  }
  function guardar(e) {
    try { localStorage.setItem(CLAVE, JSON.stringify({ e: e, t: Date.now() })); } catch (x) {}
  }

  var cargado = false;
  function activarAnalytics() {
    if (cargado) return;
    cargado = true;
    gtag("consent", "update", { analytics_storage: "granted" });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", ID);
  }
  function borrarCookiesGa() {
    var dominios = ["", location.hostname, "." + location.hostname.replace(/^www\./, "")];
    document.cookie.split(";").forEach(function (c) {
      var n = c.split("=")[0].trim();
      if (n === "_ga" || n.indexOf("_ga_") === 0) {
        dominios.forEach(function (d) {
          document.cookie = n + "=; Max-Age=0; path=/" + (d ? "; domain=" + d : "");
        });
      }
    });
  }

  window.dgEvento = function (nombre, parametros) {
    if (leer() === "si") gtag("event", nombre, parametros || {});
  };

  var aviso = null;
  function cerrar() { if (aviso) { aviso.remove(); aviso = null; } }
  function decidir(e) {
    guardar(e);
    cerrar();
    if (e === "si") activarAnalytics();
    else { borrarCookiesGa(); if (cargado) location.reload(); }
  }

  function mostrar() {
    if (aviso || !document.body) return;
    aviso = document.createElement("div");
    aviso.setAttribute("role", "dialog");
    aviso.setAttribute("aria-live", "polite");
    aviso.setAttribute("aria-label", "Aviso de cookies");
    aviso.style.cssText = "position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:560px;margin:0 auto;background:#000;color:#fff;border-radius:14px;padding:20px 22px;box-shadow:0 8px 32px rgba(0,0,0,.28);font:400 15px/1.55 'Inter Tight',system-ui,-apple-system,'Segoe UI',sans-serif";
    aviso.innerHTML =
      '<p style="margin:0 0 14px">Usamos cookies de análisis (Google Analytics) para saber cuántas personas visitan la web y qué páginas les interesan. Solo las instalamos si aceptas. <a href="/cookies.html" style="color:#fff;text-decoration:underline;text-underline-offset:.2em">Política de cookies</a></p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:10px">' +
      '<button type="button" data-dg="no" style="flex:1 1 140px;min-height:44px;border:1.5px solid #fff;border-radius:999px;background:transparent;color:#fff;font-weight:600;font-size:15px;line-height:1;font-family:inherit;cursor:pointer">Rechazar</button>' +
      '<button type="button" data-dg="si" style="flex:1 1 140px;min-height:44px;border:1.5px solid #fff;border-radius:999px;background:#fff;color:#000;font-weight:600;font-size:15px;line-height:1;font-family:inherit;cursor:pointer">Aceptar</button>' +
      "</div>";
    aviso.addEventListener("click", function (ev) {
      var b = ev.target.closest && ev.target.closest("[data-dg]");
      if (b) decidir(b.getAttribute("data-dg"));
    });
    document.body.appendChild(aviso);
  }

  window.dgCookies = { abrir: mostrar, estado: leer };

  var estado = leer();
  if (estado === "si") activarAnalytics();
  else if (estado === null) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mostrar);
    else mostrar();
  }
})();
