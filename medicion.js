/* Medición de la captación comercial (D-141).
   Cada enlace a la agenda de citas lleva data-cta="<texto o id>" y, opcionalmente,
   data-posicion="cabecera|portada|cuerpo|cierre". Al hacer clic se envía a GA4 el evento
   «clic_calendario» con la página, el CTA y la posición. Solo si hay consentimiento
   (window.dgEvento, de consentimiento.js). No guarda nada en el navegador: el origen de la
   visita (orgánico, UTM, etc.) lo atribuye GA4 a la sesión, no este script.
   Un clic NO es una reunión: las reservas se cuentan aparte desde Google Calendar. */
(function () {
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest ? ev.target.closest("a[data-cta]") : null;
    if (!a || !window.dgEvento) return;
    window.dgEvento("clic_calendario", {
      pagina: location.pathname,
      cta: (a.getAttribute("data-cta") || "").slice(0, 100),
      posicion: a.getAttribute("data-posicion") || "",
      transport_type: "beacon",
    });
  });
})();
