let amortizacion_proc = (monto_prestado, interes_anual, plazo) => {
    if (!0 === monto_prestado.includes("%") || !0 === interes_anual.includes("%") || !0 === plazo.includes("%") || !0 === isNaN(parseFloat(monto_prestado))
        || !0 === isNaN(parseFloat(interes_anual)) || !0 === isNaN(parseFloat(plazo)) || 0 === parseInt(monto_prestado) || 0 === parseInt(interes_anual) || 0 === parseInt(plazo))
        return void alert(`Verifique que:\n • ningún campo esté en blanco,\n • esté introduciendo solo números,\n • ningún parámetro es cero (0)`);
    monto_prestado = monto_prestado.replace(/\,?/g, "");
    let d = monto_prestado,
        // e = 12 * plazo,// años
        e = plazo,// meses
        f = interes_anual / 100 / 12,
        g = ((monto_prestado, interes_anual, plazo) => monto_prestado * (interes_anual * Math.pow(1 + interes_anual, plazo) / (Math.pow(1 + interes_anual, plazo) - 1)))(monto_prestado, f, e),
        h = 1,
        i = 0,
        j = 0;
    const k = (monto_prestado, interes_anual) => {
        let plazo = document.createElement("td");
        plazo.innerHTML = monto_prestado.toString(), interes_anual.appendChild(plazo)
    },
        l = monto_prestado => (monto_prestado = (Math.round(100 * monto_prestado) / 100).toLocaleString(), monto_prestado.match(/(?<=\d)(\.\d{1}(?!\d))/g) ? monto_prestado += "0" : !1 === monto_prestado.includes(".") && (monto_prestado += ".00"), 7 === monto_prestado.toString().length && (monto_prestado = monto_prestado.replace(/(?<=\d)(\d{3})/g, ",$1")), monto_prestado);
    let m = document.getElementById("Tabla");
    for (m.innerHTML = ""; h <= e;) {
        let monto_prestado = d * f;
        i += monto_prestado;
        let interes_anual = g - monto_prestado;
        j += interes_anual;
        let plazo = d - interes_anual,
            e = document.createElement("tr");
        k(h, e), k(l(d, 100), e), k(l(g, 100), e), k(l(monto_prestado, 100), e), k(l(interes_anual, 100), e), k(l(plazo, 100), e), m.appendChild(e), d = plazo, h++
    }
    let n = document.createElement("tr");
    n.setAttribute("class", "font-weight-bold"), k("Total:", n), k("", n), k(l(g * e, 100), n), k(l(i, 100), n), k(l(j, 100), n), k("", n), m.appendChild(n)
};