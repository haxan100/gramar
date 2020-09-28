function dandy(e) {
    function t() {
        switch (g) {
            case "square":
                n();
                break;
            case "circle":
                i();
                break;
            case "rounded":
                o();
                break;
            default:
                n()
        }
    }

    function n() {
        h.beginPath(), h.rect(0, 0, p, v), h.fillStyle = y, h.fill()
    }

    function i() {
        h.beginPath(), h.arc(p / 2, v / 2, v / 2, 0, 2 * Math.PI, !1), h.fillStyle = y, h.fill()
    }

    function o() {
        h.beginPath();
        var e = v / 10;
        h.moveTo(p, v), h.arcTo(0, v, 0, 0, e), h.arcTo(0, 0, p, 0, e), h.arcTo(p, 0, p, v, e), h.arcTo(p, v, 0, v, e), h.fillStyle = y, h.fill()
    }

    function r() {
        h.fillStyle = m, h.font = w + "px " + b, h.textBaseline = "alphabetic", h.textAlign = "center";
        var e = p / 2 + l(x, b, w),
            t = v / 2 + c(x, b, w);
        h.fillText(x, e, t)
    }

    function a(e, t, n, i) {
        if (e === undefined || "" === e) return 0;
        var o = document.createElement("canvas");
        o.width = n, o.height = i;
        var r = o.getContext("2d");
        r.textBaseline = "alphabetic", r.textAlign = "center", r.fillStyle = "white";
        for (var a = o.width / 4, c = 0, l = 0; c < .5 && l < .5;) {
            a++, console.log(a), r.font = a + "px " + t;
            var f = u(e, t, a);
            console.log(f);
            var d = s(e, t, a);
            c = f / n, l = d / i
        }
        return a
    }

    function s(e, t, n) {
        if (e === undefined || "" === e) return 0;
        if (t === undefined || "" === t) return 0;
        if (n === undefined || "" === n) return 0;
        var i = document.createElement("canvas"),
            o = i.getContext("2d");
        o.font = n + "px " + t, o.textBaseline = "alphabetic", o.textAlign = "left", o.fillStyle = "white", i.width = Math.ceil(o.measureText(e).width), i.height = 2 * n, o.font = n + "px " + t, o.textBaseline = "alphabetic", o.textAlign = "left", o.fillStyle = "white", o.fillText(e, 0, i.height / 2);
        for (var r, a, s = o.getImageData(0, 0, i.width, i.height).data, u = 0; u <= i.height; u++)
            for (var c = 0; c <= i.width; c++) {
                var l = 4 * (i.width * u + c),
                    f = s[l],
                    d = s[l + 1],
                    h = s[l + 2];
                if (f + d + h > 0) {
                    r || (r = u), a = u;
                    break
                }
            }
        return a - r
    }

    function u(e, t, n) {
        if (e === undefined || "" === e) return 0;
        if (t === undefined || "" === t) return 0;
        if (n === undefined || "" === n) return 0;
        var i = document.createElement("canvas"),
            o = i.getContext("2d");
        o.font = n + "px " + t, o.textBaseline = "alphabetic", o.textAlign = "left", o.fillStyle = "white", i.width = 2 * n, i.height = 2 * n, o.font = n + "px " + t, o.textBaseline = "alphabetic", o.textAlign = "center", o.fillStyle = "white", o.fillText(e, i.width / 2, i.height / 2);
        for (var r, a, s = o.getImageData(0, 0, i.width, i.height).data, u = 0; u <= i.width; u++)
            for (var c = 0; c <= i.height; c++) {
                var l = 4 * (i.width * c + u),
                    f = s[l],
                    d = s[l + 1],
                    h = s[l + 2];
                if (f + d + h > 0) {
                    r || (r = u), a = u;
                    break
                }
            }
        return a - r
    }

    function c(e, t, n) {
        if (e === undefined || "" === e) return 0;
        if (t === undefined || "" === t) return 0;
        if (n === undefined || "" === n) return 0;
        var i = document.createElement("canvas"),
            o = i.getContext("2d");
        o.font = n + "px " + t, o.textBaseline = "alphabetic", o.textAlign = "left", o.fillStyle = "white", i.width = Math.ceil(o.measureText(e).width), i.height = 2 * n, o.font = n + "px " + t, o.textBaseline = "alphabetic", o.textAlign = "left", o.fillStyle = "white", o.fillText(e, 0, i.height / 2);
        for (var r, a, s = o.getImageData(0, 0, i.width, i.height).data, u = 0; u <= i.height; u++)
            for (var c = 0; c <= i.width; c++) {
                var l = 4 * (i.width * u + c),
                    f = s[l],
                    d = s[l + 1],
                    h = s[l + 2];
                if (f + d + h > 0) {
                    r || (r = u), a = u;
                    break
                }
            }
        return i.height / 2 - ((a - r) / 2 + r)
    }

    function l(e, t, n) {
        if (e === undefined || "" === e) return 0;
        if (t === undefined || "" === t) return 0;
        if (n === undefined || "" === n) return 0;
        var i = document.createElement("canvas"),
            o = i.getContext("2d");
        o.font = n + "px " + t, o.textBaseline = "alphabetic", o.textAlign = "left", o.fillStyle = "white", i.width = 2 * n, i.height = 2 * n, o.font = n + "px " + t, o.textBaseline = "alphabetic", o.textAlign = "center", o.fillStyle = "white", o.fillText(e, i.width / 2, i.height / 2);
        for (var r, a, s = o.getImageData(0, 0, i.width, i.height).data, u = 0; u <= i.width; u++)
            for (var c = 0; c <= i.height; c++) {
                var l = 4 * (i.width * c + u),
                    f = s[l],
                    d = s[l + 1],
                    h = s[l + 2];
                if (f + d + h > 0) {
                    r || (r = u), a = u;
                    break
                }
            }
        return i.width / 2 - ((a - r) / 2 + r)
    }
    const f = {
        canvas: document.createElement("canvas"),
        width: 128,
        height: 128,
        shape: "square",
        fontColor: "white",
        backgroundColor: "orange",
        text: "dandy.js",
        fontFamily: "Helvetica",
        fontSize: 50,
        optimizeFontSize: !1
    };
    data = Object.assign({}, f, e);
    const d = data.canvas,
        h = data.canvas.getContext("2d"),
        p = data.width,
        v = data.height,
        g = data.shape,
        m = data.fontColor,
        y = data.backgroundColor,
        x = data.text,
        b = data.fontFamily;
    var w;
    return w = data.optimizeFontSize ? a(x, b, p, v) : data.fontSize, d.width = p, d.height = v, t(), r(), d
}

function Canvas2Favicon(e) {
    function t(e) {
        for (var t = u(e.length), n = 0; n < e.length; n++) {
            var o = e[n],
                s = i(h, o, o),
                f = s.getContext("2d"),
                d = s.width,
                p = s.height,
                v = (f.getImageData(0, 0, d, p), l(d, p)),
                g = a(s);
            t += c(d, p, v.length + g.length, r(e, n))
        }
        for (var n = 0; n < e.length; n++) {
            var o = e[n],
                s = i(h, o, o),
                d = s.width,
                p = s.height,
                v = (f.getImageData(0, 0, d, p), l(d, p)),
                g = a(s);
            t += v, t += g
        }
        return "data:image/x-icon;base64," + btoa(t)
    }

    function n() {
        return e.toDataURL()
    }

    function i(e, t, n) {
        for (var i, r, a = e, s = (e.getContext("2d"), e.width), u = e.height; s / 2 > t;) i = document.createElement("canvas"), r = i.getContext("2d"), s /= 2, u /= 2, i.width = s, i.height = u, r.drawImage(a, 0, 0, s, u), a = i, r;
        return s > t && (a = o(a, t, n)), a
    }

    function o(e, t, n) {
        var i = e,
            o = (e.getContext("2d"), document.createElement("canvas")),
            r = o.getContext("2d");
        return o.width = t, o.height = n, r.drawImage(i, 0, 0, t, n), o
    }

    function r(e, t) {
        var n = 6;
        n += 16 * e.length;
        for (var i = 0; i < t; i++) {
            var o = e[i];
            n += 40, n += 4 * o * o, n += 2 * o * o / 8
        }
        return n
    }

    function a(e) {
        var t = e.getContext("2d"),
            n = t.getImageData(0, 0, e.width, e.height),
            i = new Uint32Array(n.data.buffer),
            o = (i.reverse().buffer, new Uint8Array(e.width * e.height * 2 / 8));
        return o.fill(0), binary = f(s(e)), binary += d(o), binary
    }

    function s(e) {
        for (var t = e.getContext("2d"), n = t.getImageData(0, 0, e.width, e.height), i = n.data, o = new Uint8ClampedArray(n.data.length), r = 0; r < i.length; r += 4) {
            var a = i[r],
                s = i[r + 1],
                u = i[r + 2],
                c = i[r + 3];
            o[r] = u, o[r + 1] = s, o[r + 2] = a, o[r + 3] = c
        }
        for (var l = new Uint32Array(o.buffer), f = new Uint32Array(l.length), r = 0; r < l.length; r++) {
            var d = r % e.width,
                h = Math.floor(r / e.width),
                p = d,
                v = e.height - 1 - h,
                g = v * e.width + p,
                m = l[r];
            f[g] = m
        }
        return f.buffer
    }

    function u(e) {
        var t = new ArrayBuffer(6),
            n = new DataView(t);
        return n.setUint16(0, 0, !0), n.setUint16(2, 1, !0), n.setUint16(4, e, !0), f(t)
    }

    function c(e, t, n, i) {
        var o = new ArrayBuffer(16),
            r = new DataView(o);
        return r.setUint8(0, e), r.setUint8(1, t), r.setUint8(2, 0), r.setUint8(3, 0), r.setUint16(4, 1, !0), r.setUint16(6, 32, !0), r.setUint32(8, n, !0), r.setUint32(12, i, !0), f(o)
    }

    function l(e, t) {
        var n = new ArrayBuffer(40),
            i = new DataView(n);
        return i.setUint32(0, 40, !0), i.setInt32(4, e, !0), i.setInt32(8, 2 * t, !0), i.setUint16(12, 1, !0), i.setUint16(14, 32, !0), i.setUint32(16, 0, !0), i.setUint32(20, 0, !0), i.setUint32(24, 0, !0), i.setUint32(28, 0, !0), i.setUint32(32, 0, !0), i.setUint32(36, 0, !0), f(n)
    }

    function f(e) {
        for (var t = "", n = new Uint8Array(e), i = n.byteLength, o = 0; o < i; o++) t += String.fromCharCode(n[o]);
        return t
    }

    function d(e) {
        for (var t = "", n = e, i = n.byteLength, o = 0; o < i; o++) t += String.fromCharCode(n[o]);
        return t
    }
    var h = o(e, 128, 128);
    return {
        toIco: t,
        toPng: n
    }
}

function initializeConverter() {
    function e(e) {
        var n = new FileReader;
        n.onload = function(e) {
            var n = new Image;
            n.onload = function() {
                o.width = n.width, o.height = n.height, r.drawImage(n, 0, 0), t(n), s = !0
            }, n.src = e.target.result
        }, n.readAsDataURL(e.target.files[0])
    }

    function t(e) {
        document.getElementById("preview-48x48").src = e.src, document.getElementById("preview-32x32").src = e.src, document.getElementById("preview-16x16").src = e.src
    }

    function n() {
        if (s) {
            i(new Canvas2Favicon(o).toIco([16, 32, 48]), "favicon.ico")
        }
    }

    function i(e, t) {
        var objTo = document.getElementById('generate-from-text');
        var n = document.createElement("a");
        n.download = t, n.href = e, objTo.appendChild(n), n.click(), objTo.removeChild(n), delete n
    }
    var o = document.createElement("canvas"),
        r = o.getContext("2d"),
        a = document.getElementById("image"),
        s = !1;
    a.addEventListener("change", e, !1), document.getElementById("image-download-ico").addEventListener("click", n, !1)
}

function previewMultipleSizes() {
    document.getElementById("preview-96x96").src = canvas.toDataURL(), document.getElementById("preview-64x64").src = canvas.toDataURL(), document.getElementById("preview-48x48").src = canvas.toDataURL(), document.getElementById("preview-32x32").src = canvas.toDataURL(), document.getElementById("preview-24x24").src = canvas.toDataURL(), document.getElementById("preview-16x16").src = canvas.toDataURL()
}

function previewAsFavicon() {
    document.getElementById("favicon").href = canvas.toDataURL()
}

function downloadURI(e, t) {
    var n = document.createElement("a");
    var objTo = document.getElementById('generate-from-text');
    n.download = t, n.href = e, objTo.appendChild(n), n.click(), objTo.removeChild(n), delete n
}

function initializeIndex() {
    function e() {
        function e() {
            document.getElementById("favicon").href = a.toDataURL()
        }

        function n() {
            document.getElementById("preview-48x48").src = a.toDataURL(), document.getElementById("preview-32x32").src = a.toDataURL(), document.getElementById("preview-16x16").src = a.toDataURL()
        }
        t(s), dandy(s), e(), n()
    }

    function t() {
        var e = document.getElementById("form");
        s.text = e.text.value, s.shape = e.background.value, s.fontSize = e["font-size"].value, s.fontColor = e["font-color"].value, s.backgroundColor = e["background-color"].value;
    }

    function n(e, t) {
        var n = document.createElement("a");
        n.download = t, n.href = e, document.body.appendChild(n), n.click(), document.body.removeChild(n), delete n
    }

    function i(e, t) {
        t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
            i = n.exec(t);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }

   /* function o() {
        if ("URLSearchParams" in window) {
            var e = new URLSearchParams(window.location.search);
            e.set("t", s.text), e.set("ff", s.fontFamily), e.set("fs", s.fontSize), e.set("fc", s.fontColor), e.set("b", s.background), e.set("bc", s.backgroundColor);
            var t = "https://favicon.io/favicon-generator/?" + e.toString();
            document.getElementById("save").href = t;
            var n = document.getElementById("share"),
                i = "https://twitter.com/share?text=Check out the favicon I created with https://favicon.io (via @johnsorrentino)&amp;url=" + encodeURIComponent(t);
            n.setAttribute("href", i)
        }
    }
*/
    function r() {
        var e = ($("#font-color").outerWidth() - 20) / 14;
        document.querySelector(".huebee-font-color .huebee__cursor").style.width = e + "px", document.querySelector(".huebee-font-color .huebee__cursor").style.height = e + "px", l.updateSizes(), l.renderColors(), l.setAnchorColor(), document.querySelector(".huebee-background-color .huebee__cursor").style.width = e + "px", document.querySelector(".huebee-background-color .huebee__cursor").style.height = e + "px", f.updateSizes(), f.renderColors(), f.setAnchorColor()
    }
    var a = document.createElement("canvas"),
        s = {
            text: i("t") || i("text") || "F",
            fontFamily: i("ff") || i("fontFamily") || "Leckerli One",
            fontColor: i("fc") || i("fontColor") || "#FFFFFF",
            fontSize: i("fs") || i("fontSize") || 110,
            background: i("b") || i("shape") || "rounded",
            backgroundColor: i("bc") || i("backgroundColor") || "#209CEE",
            width: 128,
            height: 128,
            canvas: a
        },
        u = document.getElementById("form");
    u.text.value = s.text, u.background.value = s.background, u["font-family"].value = s.fontFamily, u["font-size"].value = s.fontSize, u["font-color"].value = s.fontColor, u["background-color"].value = s.backgroundColor, WebFont.load({
        google: {
            families: [s.fontFamily]
        },
        fontactive: function() {
            e()
        }
    }), $(":input").bind("keyup mouseup", function() {
        e(favicon)
    }), $("form").change(function() {
        e(favicon)
    }), $("#font-family").change(function(t) {
        s.fontFamily = t.target.value, WebFont.load({
            google: {
                families: [t.target.value]
            },
            active: function() {
                e()
            }
        })
    }), $("#download-ico").click(function() {
        favicon = new Canvas2Favicon(a), n(favicon.toIco([16, 32, 48]), "favicon.ico")
    }), $("#download-png-256").click(function() {
        var e = dandy({
            height: 256,
            width: 256,
            fontFamily: s.fontFamily,
            text: s.text,
            fontColor: s.fontColor,
            backgroundColor: s.backgroundColor,
            shape: s.shape,
            fontSize: 2 * s.fontSize
        });
        favicon = new Canvas2Favicon(e), n(favicon.toPng(), "favicon-256.png")
    }), $("#download-png-1024").click(function() {
        var e = dandy({
            height: 1024,
            width: 1024,
            fontFamily: s.fontFamily,
            text: s.text,
            fontColor: s.fontColor,
            backgroundColor: s.backgroundColor,
            shape: s.shape,
            fontSize: 8 * s.fontSize
        });
        favicon = new Canvas2Favicon(e), n(favicon.toPng(), "favicon-1024.png")
    });

    var l = new Huebee("#font-color", {
        staticOpen: !0,
        saturations: 2,
        shades: 5,
        className: "huebee-font-color"
    });
    l.on("change", function() {
        $("#font-color").trigger("change")
    });
    var f = new Huebee("#background-color", {
        staticOpen: !0,
        saturations: 2,
        shades: 5,
        className: "huebee-background-color"
    });
    f.on("change", function() {
        $("#background-color").trigger("change")
    }), window.addEventListener("resize", function() {
        r()
    }), r()
}
if (document.addEventListener("DOMContentLoaded", function() {
        var e = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
        e.length > 0 && e.forEach(function(e) {
            e.addEventListener("click", function() {
                var t = e.dataset.target,
                    n = document.getElementById(t);
                e.classList.toggle("is-active"), n.classList.toggle("is-active")
            })
        })
    }), function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function n(e, t) {
            t = t || te;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(e) {
            var t = !!e && "length" in e && e.length,
                n = pe.type(e);
            return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function o(e, t, n) {
            return pe.isFunction(t) ? pe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? pe.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? pe.grep(e, function(e) {
                return ae.call(t, e) > -1 !== n
            }) : Te.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function(e) {
                return ae.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }

        function r(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function a(e) {
            var t = {};
            return pe.each(e.match(Ae) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s(e) {
            return e
        }

        function u(e) {
            throw e
        }

        function c(e, t, n) {
            var i;
            try {
                e && pe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && pe.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
            } catch (e) {
                n.call(void 0, e)
            }
        }

        function l() {
            te.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), pe.ready()
        }

        function f() {
            this.expando = pe.expando + f.uid++
        }

        function d(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
        }

        function h(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Me, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = d(n)
                    } catch (e) {}
                    Oe.set(e, t, n)
                } else n = void 0;
            return n
        }

        function p(e, t, n, i) {
            var o, r = 1,
                a = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return pe.css(e, t, "")
                },
                u = s(),
                c = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                l = (pe.cssNumber[t] || "px" !== c && +u) && Be.exec(pe.css(e, t));
            if (l && l[3] !== c) {
                c = c || l[3], n = n || [], l = +u || 1;
                do {
                    r = r || ".5", l /= r, pe.style(e, t, l + c)
                } while (r !== (r = s() / u) && 1 !== r && --a)
            }
            return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = l, i.end = o)), o
        }

        function v(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                o = We[i];
            return o || (t = n.body.appendChild(n.createElement(i)), o = pe.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), We[i] = o, o)
        }

        function g(e, t) {
            for (var n, i, o = [], r = 0, a = e.length; r < a; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = qe.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Re(i) && (o[r] = v(i))) : "none" !== n && (o[r] = "none", qe.set(i, "display", n)));
            for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
            return e
        }

        function m(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], n) : n
        }

        function y(e, t) {
            for (var n = 0, i = e.length; n < i; n++) qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"))
        }

        function x(e, t, n, i, o) {
            for (var r, a, s, u, c, l, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
                if ((r = e[h]) || 0 === r)
                    if ("object" === pe.type(r)) pe.merge(d, r.nodeType ? [r] : r);
                    else if (Ve.test(r)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (ze.exec(r) || ["", ""])[1].toLowerCase(), u = Xe[s] || Xe._default, a.innerHTML = u[1] + pe.htmlPrefilter(r) + u[2], l = u[0]; l--;) a = a.lastChild;
                pe.merge(d, a.childNodes), a = f.firstChild, a.textContent = ""
            } else d.push(t.createTextNode(r));
            for (f.textContent = "", h = 0; r = d[h++];)
                if (i && pe.inArray(r, i) > -1) o && o.push(r);
                else if (c = pe.contains(r.ownerDocument, r), a = m(f.appendChild(r), "script"), c && y(a), n)
                for (l = 0; r = a[l++];) Ge.test(r.type || "") && n.push(r);
            return f
        }

        function b() {
            return !0
        }

        function w() {
            return !1
        }

        function C() {
            try {
                return te.activeElement
            } catch (e) {}
        }

        function E(e, t, n, i, o, r) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) E(e, s, n, i, t[s], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = w;
            else if (!o) return e;
            return 1 === r && (a = o, o = function(e) {
                return pe().off(e), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
                pe.event.add(this, t, o, i, n)
            })
        }

        function T(e, t) {
            return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
        }

        function S(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function k(e) {
            var t = nt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function N(e, t) {
            var n, i, o, r, a, s, u, c;
            if (1 === t.nodeType) {
                if (qe.hasData(e) && (r = qe.access(e), a = qe.set(t, r), c = r.events)) {
                    delete a.handle, a.events = {};
                    for (o in c)
                        for (n = 0, i = c[o].length; n < i; n++) pe.event.add(t, o, c[o][n])
                }
                Oe.hasData(e) && (s = Oe.access(e), u = pe.extend({}, s), Oe.set(t, u))
            }
        }

        function D(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && $e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function A(e, t, i, o) {
            t = oe.apply([], t);
            var r, a, s, u, c, l, f = 0,
                d = e.length,
                h = d - 1,
                p = t[0],
                v = pe.isFunction(p);
            if (v || d > 1 && "string" == typeof p && !de.checkClone && tt.test(p)) return e.each(function(n) {
                var r = e.eq(n);
                v && (t[0] = p.call(this, n, r.html())), A(r, t, i, o)
            });
            if (d && (r = x(t, e[0].ownerDocument, !1, e, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
                for (s = pe.map(m(r, "script"), S), u = s.length; f < d; f++) c = r, f !== h && (c = pe.clone(c, !0, !0), u && pe.merge(s, m(c, "script"))), i.call(e[f], c, f);
                if (u)
                    for (l = s[s.length - 1].ownerDocument, pe.map(s, k), f = 0; f < u; f++) c = s[f], Ge.test(c.type || "") && !qe.access(c, "globalEval") && pe.contains(l, c) && (c.src ? pe._evalUrl && pe._evalUrl(c.src) : n(c.textContent.replace(it, ""), l))
            }
            return e
        }

        function L(e, t, n) {
            for (var i, o = t ? pe.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || pe.cleanData(m(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && y(m(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function j(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || at(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), !de.pixelMarginRight() && rt.test(a) && ot.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
        }

        function I(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function F(e) {
            if (e in ft) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--;)
                if ((e = lt[n] + t) in ft) return e
        }

        function q(e, t, n) {
            var i = Be.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function O(e, t, n, i, o) {
            var r, a = 0;
            for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (a += pe.css(e, n + He[r], !0, o)), i ? ("content" === n && (a -= pe.css(e, "padding" + He[r], !0, o)), "margin" !== n && (a -= pe.css(e, "border" + He[r] + "Width", !0, o))) : (a += pe.css(e, "padding" + He[r], !0, o), "padding" !== n && (a += pe.css(e, "border" + He[r] + "Width", !0, o)));
            return a
        }

        function P(e, t, n) {
            var i, o = !0,
                r = at(e),
                a = "border-box" === pe.css(e, "boxSizing", !1, r);
            if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
                if (i = j(e, t, r), (i < 0 || null == i) && (i = e.style[t]), rt.test(i)) return i;
                o = a && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + O(e, t, n || (a ? "border" : "content"), o, r) + "px"
        }

        function M(e, t, n, i, o) {
            return new M.prototype.init(e, t, n, i, o)
        }

        function _() {
            ht && (e.requestAnimationFrame(_), pe.fx.tick())
        }

        function B() {
            return e.setTimeout(function() {
                dt = void 0
            }), dt = pe.now()
        }

        function H(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = He[i], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function R(e, t, n) {
            for (var i, o = ($.tweeners[t] || []).concat($.tweeners["*"]), r = 0, a = o.length; r < a; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function U(e, t, n) {
            var i, o, r, a, s, u, c, l, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                v = e.nodeType && Re(e),
                m = qe.get(e, "fxshow");
            n.queue || (a = pe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, pe.queue(e, "fx").length || a.empty.fire()
                })
            }));
            for (i in t)
                if (o = t[i], pt.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (v ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        v = !0
                    }
                    h[i] = m && m[i] || pe.style(e, i)
                } if ((u = !pe.isEmptyObject(t)) || !pe.isEmptyObject(h)) {
                f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = m && m.display, null == c && (c = qe.get(e, "display")), l = pe.css(e, "display"), "none" === l && (c ? l = c : (g([e], !0), c = e.style.display || c, l = pe.css(e, "display"), g([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === pe.css(e, "float") && (u || (d.done(function() {
                    p.display = c
                }), null == c && (l = p.display, c = "none" === l ? "" : l)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), u = !1;
                for (i in h) u || (m ? "hidden" in m && (v = m.hidden) : m = qe.access(e, "fxshow", {
                    display: c
                }), r && (m.hidden = !v), v && g([e], !0), d.done(function() {
                    v || g([e]), qe.remove(e, "fxshow");
                    for (i in h) pe.style(e, i, h[i])
                })), u = R(v ? m[i] : 0, i, d), i in m || (m[i] = u.start, v && (u.end = u.start, u.start = 0))
            }
        }

        function W(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = pe.camelCase(n), o = t[i], r = e[n], pe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = pe.cssHooks[i]) && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function $(e, t, n) {
            var i, o, r = 0,
                a = $.prefilters.length,
                s = pe.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (o) return !1;
                    for (var t = dt || B(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, u = c.tweens.length; a < u; a++) c.tweens[a].run(r);
                    return s.notifyWith(e, [c, r, n]), r < 1 && u ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: pe.extend({}, t),
                    opts: pe.extend(!0, {
                        specialEasing: {},
                        easing: pe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: dt || B(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                l = c.props;
            for (W(l, c.opts.specialEasing); r < a; r++)
                if (i = $.prefilters[r].call(c, e, l, c.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(i.stop, i)), i;
            return pe.map(l, R, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), pe.fx.timer(pe.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function z(e) {
            return (e.match(Ae) || []).join(" ")
        }

        function G(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function X(e, t, n, i) {
            var o;
            if (pe.isArray(t)) pe.each(t, function(t, o) {
                n || St.test(e) ? i(e, o) : X(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== pe.type(t)) i(e, t);
            else
                for (o in t) X(e + "[" + o + "]", t[o], n, i)
        }

        function V(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(Ae) || [];
                if (pe.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Y(e, t, n, i) {
            function o(s) {
                var u;
                return r[s] = !0, pe.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || r[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), u
            }
            var r = {},
                a = e === Mt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function K(e, t) {
            var n, i, o = pe.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && pe.extend(!0, e, i), e
        }

        function J(e, t, n) {
            for (var i, o, r, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (o in s)
                    if (s[o] && s[o].test(i)) {
                        u.unshift(o);
                        break
                    } if (u[0] in n) r = u[0];
            else {
                for (o in n) {
                    if (!u[0] || e.converters[o + " " + u[0]]) {
                        r = o;
                        break
                    }
                    a || (a = o)
                }
                r = r || a
            }
            if (r) return r !== u[0] && u.unshift(r), n[r]
        }

        function Q(e, t, n, i) {
            var o, r, a, s, u, c = {},
                l = e.dataTypes.slice();
            if (l[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (r = l.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = r, r = l.shift())
                    if ("*" === r) r = u;
                    else if ("*" !== u && u !== r) {
                if (!(a = c[u + " " + r] || c["* " + r]))
                    for (o in c)
                        if (s = o.split(" "), s[1] === r && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                            !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], l.unshift(s[1]));
                            break
                        } if (!0 !== a)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + u + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function Z(e) {
            return pe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var ee = [],
            te = e.document,
            ne = Object.getPrototypeOf,
            ie = ee.slice,
            oe = ee.concat,
            re = ee.push,
            ae = ee.indexOf,
            se = {},
            ue = se.toString,
            ce = se.hasOwnProperty,
            le = ce.toString,
            fe = le.call(Object),
            de = {},
            he = "3.1.1",
            pe = function(e, t) {
                return new pe.fn.init(e, t)
            },
            ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ge = /^-ms-/,
            me = /-([a-z])/g,
            ye = function(e, t) {
                return t.toUpperCase()
            };
        pe.fn = pe.prototype = {
            jquery: he,
            constructor: pe,
            length: 0,
            toArray: function() {
                return ie.call(this)
            },
            get: function(e) {
                return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = pe.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return pe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(pe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ie.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: re,
            sort: ee.sort,
            splice: ee.splice
        }, pe.extend = pe.fn.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (c && i && (pe.isPlainObject(i) || (o = pe.isArray(i))) ? (o ? (o = !1, r = n && pe.isArray(n) ? n : []) : r = n && pe.isPlainObject(n) ? n : {}, a[t] = pe.extend(c, r, i)) : void 0 !== i && (a[t] = i));
            return a
        }, pe.extend({
            expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === pe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = pe.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof(n = ce.call(t, "constructor") && t.constructor) || le.call(n) !== fe))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                n(e)
            },
            camelCase: function(e) {
                return e.replace(ge, "ms-").replace(me, ye)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, o = 0;
                if (i(e))
                    for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === t.call(e[o], o, e[o])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ve, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : ae.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var o, r, a = 0,
                    s = [];
                if (i(e))
                    for (o = e.length; a < o; a++) null != (r = t(e[a], a, n)) && s.push(r);
                else
                    for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
                return oe.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                if ("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e)) return i = ie.call(arguments, 2), o = function() {
                    return e.apply(t || this, i.concat(ie.call(arguments)))
                }, o.guid = e.guid = e.guid || pe.guid++, o
            },
            now: Date.now,
            support: de
        }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            se["[object " + t + "]"] = t.toLowerCase()
        });
        var xe = function(e) {
            function t(e, t, n, i) {
                var o, r, a, s, u, c, l, d = t && t.ownerDocument,
                    p = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!i && ((t ? t.ownerDocument || t : R) !== F && I(t), t = t || F, O)) {
                    if (11 !== p && (u = me.exec(e)))
                        if (o = u[1]) {
                            if (9 === p) {
                                if (!(a = t.getElementById(o))) return n;
                                if (a.id === o) return n.push(a), n
                            } else if (d && (a = d.getElementById(o)) && B(t, a) && a.id === o) return n.push(a), n
                        } else {
                            if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                            if ((o = u[3]) && C.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                        } if (C.qsa && !G[e + " "] && (!P || !P.test(e))) {
                        if (1 !== p) d = t, l = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(we, Ce) : t.setAttribute("id", s = H), c = k(e), r = c.length; r--;) c[r] = "#" + s + " " + h(c[r]);
                            l = c.join(","), d = ye.test(e) && f(t.parentNode) || t
                        }
                        if (l) try {
                            return Q.apply(n, d.querySelectorAll(l)), n
                        } catch (e) {} finally {
                            s === H && t.removeAttribute("id")
                        }
                    }
                }
                return D(e.replace(se, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > E.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[H] = !0, e
            }

            function o(e) {
                var t = F.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) E.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function l(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function f(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function h(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function p(e, t, n) {
                var i = t.dir,
                    o = t.next,
                    r = o || i,
                    a = n && "parentNode" === r,
                    s = W++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || a) return e(t, n, o);
                    return !1
                } : function(t, n, u) {
                    var c, l, f, d = [U, s];
                    if (u) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || a)
                                if (f = t[H] || (t[H] = {}), l = f[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((c = l[r]) && c[0] === U && c[1] === s) return d[2] = c[2];
                                    if (l[r] = d, d[2] = e(t, n, u)) return !0
                                } return !1
                }
            }

            function v(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
                return i
            }

            function m(e, t, n, i, o) {
                for (var r, a = [], s = 0, u = e.length, c = null != t; s < u; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
                return a
            }

            function y(e, t, n, o, r, a) {
                return o && !o[H] && (o = y(o)), r && !r[H] && (r = y(r, a)), i(function(i, a, s, u) {
                    var c, l, f, d = [],
                        h = [],
                        p = a.length,
                        v = i || g(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : m(v, d, e, s, u),
                        x = n ? r || (i ? e : p || o) ? [] : a : y;
                    if (n && n(y, x, s, u), o)
                        for (c = m(x, h), o(c, [], s, u), l = c.length; l--;)(f = c[l]) && (x[h[l]] = !(y[h[l]] = f));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (c = [], l = x.length; l--;)(f = x[l]) && c.push(y[l] = f);
                                r(null, x = [], c, u)
                            }
                            for (l = x.length; l--;)(f = x[l]) && (c = r ? ee(i, f) : d[l]) > -1 && (i[c] = !(a[c] = f))
                        }
                    } else x = m(x === a ? x.splice(p, x.length) : x), r ? r(null, a, x, u) : Q.apply(a, x)
                })
            }

            function x(e) {
                for (var t, n, i, o = e.length, r = E.relative[e[0].type], a = r || E.relative[" "], s = r ? 1 : 0, u = p(function(e) {
                        return e === t
                    }, a, !0), c = p(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), l = [function(e, n, i) {
                        var o = !r && (i || n !== A) || ((t = n).nodeType ? u(e, n, i) : c(e, n, i));
                        return t = null, o
                    }]; s < o; s++)
                    if (n = E.relative[e[s].type]) l = [p(v(l), n)];
                    else {
                        if (n = E.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                            for (i = ++s; i < o && !E.relative[e[i].type]; i++);
                            return y(s > 1 && v(l), s > 1 && h(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, s < i && x(e.slice(s, i)), i < o && x(e = e.slice(i)), i < o && h(e))
                        }
                        l.push(n)
                    } return v(l)
            }

            function b(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    a = function(i, a, s, u, c) {
                        var l, f, d, h = 0,
                            p = "0",
                            v = i && [],
                            g = [],
                            y = A,
                            x = i || r && E.find.TAG("*", c),
                            b = U += null == y ? 1 : Math.random() || .1,
                            w = x.length;
                        for (c && (A = a === F || a || c); p !== w && null != (l = x[p]); p++) {
                            if (r && l) {
                                for (f = 0,
                                    a || l.ownerDocument === F || (I(l), s = !O); d = e[f++];)
                                    if (d(l, a || F, s)) {
                                        u.push(l);
                                        break
                                    } c && (U = b)
                            }
                            o && ((l = !d && l) && h--, i && v.push(l))
                        }
                        if (h += p, o && p !== h) {
                            for (f = 0; d = n[f++];) d(v, g, a, s);
                            if (i) {
                                if (h > 0)
                                    for (; p--;) v[p] || g[p] || (g[p] = K.call(u));
                                g = m(g)
                            }
                            Q.apply(u, g), c && !i && g.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                        }
                        return c && (U = b, A = y), v
                    };
                return o ? i(a) : a
            }
            var w, C, E, T, S, k, N, D, A, L, j, I, F, q, O, P, M, _, B, H = "sizzle" + 1 * new Date,
                R = e.document,
                U = 0,
                W = 0,
                $ = n(),
                z = n(),
                G = n(),
                X = function(e, t) {
                    return e === t && (j = !0), 0
                },
                V = {}.hasOwnProperty,
                Y = [],
                K = Y.pop,
                J = Y.push,
                Q = Y.push,
                Z = Y.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                fe = new RegExp(re),
                de = new RegExp("^" + ie + "$"),
                he = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                pe = /^(?:input|select|textarea|button)$/i,
                ve = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                be = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Ce = function(e, t) {
                    return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                Ee = function() {
                    I()
                },
                Te = p(function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Q.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
            } catch (e) {
                Q = {
                    apply: Y.length ? function(e, t) {
                        J.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            C = t.support = {}, S = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, I = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : R;
                return i !== F && 9 === i.nodeType && i.documentElement ? (F = i, q = F.documentElement, O = !S(F), R !== F && (n = F.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), C.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), C.getElementsByTagName = o(function(e) {
                    return e.appendChild(F.createComment("")), !e.getElementsByTagName("*").length
                }), C.getElementsByClassName = ge.test(F.getElementsByClassName), C.getById = o(function(e) {
                    return q.appendChild(e).id = H, !F.getElementsByName || !F.getElementsByName(H).length
                }), C.getById ? (E.filter.ID = function(e) {
                    var t = e.replace(xe, be);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, E.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (E.filter.ID = function(e) {
                    var t = e.replace(xe, be);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, E.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), E.find.TAG = C.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, E.find.CLASS = C.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && O) return t.getElementsByClassName(e)
                }, M = [], P = [], (C.qsa = ge.test(F.querySelectorAll)) && (o(function(e) {
                    q.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || P.push(".#.+[+~]")
                }), o(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = F.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), q.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                })), (C.matchesSelector = ge.test(_ = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && o(function(e) {
                    C.disconnectedMatch = _.call(e, "*"), _.call(e, "[s!='']:x"), M.push("!=", re)
                }), P = P.length && new RegExp(P.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(q.compareDocumentPosition), B = t || ge.test(q.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, X = t ? function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === F || e.ownerDocument === R && B(R, e) ? -1 : t === F || t.ownerDocument === R && B(R, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        u = [t];
                    if (!o || !r) return e === F ? -1 : t === F ? 1 : o ? -1 : r ? 1 : L ? ee(L, e) - ee(L, t) : 0;
                    if (o === r) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; s[i] === u[i];) i++;
                    return i ? a(s[i], u[i]) : s[i] === R ? -1 : u[i] === R ? 1 : 0
                }, F) : F
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== F && I(e), n = n.replace(le, "='$1']"), C.matchesSelector && O && !G[n + " "] && (!M || !M.test(n)) && (!P || !P.test(n))) try {
                    var i = _.call(e, n);
                    if (i || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, F, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== F && I(e), B(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== F && I(e);
                var n = E.attrHandle[t.toLowerCase()],
                    i = n && V.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== i ? i : C.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.escape = function(e) {
                return (e + "").replace(we, Ce)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (j = !C.detectDuplicates, L = !C.sortStable && e.slice(0), e.sort(X), j) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return L = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, E = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, be).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = $[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var c, l, f, d, h, p, v = r !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                m = s && t.nodeName.toLowerCase(),
                                y = !u && !s,
                                x = !1;
                            if (g) {
                                if (r) {
                                    for (; v;) {
                                        for (d = t; d = d[v];)
                                            if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                        p = v = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (d = g, f = d[H] || (d[H] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), c = l[e] || [], h = c[0] === U && c[1], x = h && c[2], d = h && g.childNodes[h]; d = ++h && d && d[v] || (x = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++x && d === t) {
                                            l[e] = [U, h, x];
                                            break
                                        }
                                } else if (y && (d = t, f = d[H] || (d[H] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), c = l[e] || [], h = c[0] === U && c[1], x = h), !1 === x)
                                    for (;
                                        (d = ++h && d && d[v] || (x = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && (f = d[H] || (d[H] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), l[e] = [U, x]), d !== t)););
                                return (x -= o) === i || x % i == 0 && x / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[H] ? r(n) : r.length > 1 ? (o = [e, e, "", n], E.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = N(e.replace(se, "$1"));
                        return o[H] ? i(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(xe, be),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === q
                    },
                    focus: function(e) {
                        return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !E.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ve.test(e.nodeName)
                    },
                    input: function(e) {
                        return pe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, E.pseudos.nth = E.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) E.pseudos[w] = s(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) E.pseudos[w] = u(w);
            return d.prototype = E.filters = E.pseudos, E.setFilters = new d, k = t.tokenize = function(e, n) {
                var i, o, r, a, s, u, c, l = z[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (s = e, u = [], c = E.preFilter; s;) {
                    i && !(o = ue.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(se, " ")
                    }), s = s.slice(i.length));
                    for (a in E.filter) !(o = he[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
            }, N = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = G[e + " "];
                if (!r) {
                    for (t || (t = k(e)), n = t.length; n--;) r = x(t[n]), r[H] ? i.push(r) : o.push(r);
                    r = G(e, b(o, i)), r.selector = e
                }
                return r
            }, D = t.select = function(e, t, n, i) {
                var o, r, a, s, u, c = "function" == typeof e && e,
                    l = !i && k(e = c.selector || e);
                if (n = n || [], 1 === l.length) {
                    if (r = l[0] = l[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && O && E.relative[r[1].type]) {
                        if (!(t = (E.find.ID(a.matches[0].replace(xe, be), t) || [])[0])) return n;
                        c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !E.relative[s = a.type]);)
                        if ((u = E.find[s]) && (i = u(a.matches[0].replace(xe, be), ye.test(r[0].type) && f(t.parentNode) || t))) {
                            if (r.splice(o, 1), !(e = i.length && h(r))) return Q.apply(n, i), n;
                            break
                        }
                }
                return (c || N(e, l))(i, t, !O, n, !t || ye.test(e) && f(t.parentNode) || t), n
            }, C.sortStable = H.split("").sort(X).join("") === H, C.detectDuplicates = !!j, I(), C.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(F.createElement("fieldset"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), C.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        pe.find = xe, pe.expr = xe.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = xe.uniqueSort, pe.text = xe.getText, pe.isXMLDoc = xe.isXML, pe.contains = xe.contains, pe.escapeSelector = xe.escape;
        var be = function(e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && pe(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            we = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Ce = pe.expr.match.needsContext,
            Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Te = /^.[^:#\[\.,]*$/;
        pe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, pe.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (pe.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) pe.find(e, o[t], n);
                return i > 1 ? pe.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(o(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(o(this, e || [], !0))
            },
            is: function(e) {
                return !!o(this, "string" == typeof e && Ce.test(e) ? pe(e) : e || [], !1).length
            }
        });
        var Se, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (pe.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || Se, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ee.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = te.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this)
        }).prototype = pe.fn, Se = pe(te);
        var Ne = /^(?:parents|prev(?:Until|All))/,
            De = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        pe.fn.extend({
            has: function(e) {
                var t = pe(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (pe.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    a = "string" != typeof e && pe(e);
                if (!Ce.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            } return this.pushStack(r.length > 1 ? pe.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ae.call(pe(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), pe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return be(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return be(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return be(e, "nextSibling")
            },
            prevAll: function(e) {
                return be(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return be(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return be(e, "previousSibling", n)
            },
            siblings: function(e) {
                return we((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return we(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || pe.merge([], e.childNodes)
            }
        }, function(e, t) {
            pe.fn[e] = function(n, i) {
                var o = pe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = pe.filter(i, o)), this.length > 1 && (De[e] || pe.uniqueSort(o), Ne.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var Ae = /[^\x20\t\r\n\f]+/g;
        pe.Callbacks = function(e) {
            e = "string" == typeof e ? a(e) : pe.extend({}, e);
            var t, n, i, o, r = [],
                s = [],
                u = -1,
                c = function() {
                    for (o = e.once, i = t = !0; s.length; u = -1)
                        for (n = s.shift(); ++u < r.length;) !1 === r[u].apply(n[0], n[1]) && e.stopOnFalse && (u = r.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                },
                l = {
                    add: function() {
                        return r && (n && !t && (u = r.length - 1, s.push(n)), function t(n) {
                            pe.each(n, function(n, i) {
                                pe.isFunction(i) ? e.unique && l.has(i) || r.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return pe.each(arguments, function(e, t) {
                            for (var n;
                                (n = pe.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= u && u--
                        }), this
                    },
                    has: function(e) {
                        return e ? pe.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = s = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = s = [], n || t || (r = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return l
        }, pe.extend({
            Deferred: function(t) {
                var n = [
                        ["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2],
                        ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        "catch": function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return pe.Deferred(function(t) {
                                pe.each(n, function(n, i) {
                                    var o = pe.isFunction(e[i[4]]) && e[i[4]];
                                    r[i[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(t, i, o) {
                            function r(t, n, i, o) {
                                return function() {
                                    var c = this,
                                        l = arguments,
                                        f = function() {
                                            var e, f;
                                            if (!(t < a)) {
                                                if ((e = i.apply(c, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                f = e && ("object" == typeof e || "function" == typeof e) && e.then, pe.isFunction(f) ? o ? f.call(e, r(a, n, s, o), r(a, n, u, o)) : (a++, f.call(e, r(a, n, s, o), r(a, n, u, o), r(a, n, s, n.notifyWith))) : (i !== s && (c = void 0, l = [e]), (o || n.resolveWith)(c, l))
                                            }
                                        },
                                        d = o ? f : function() {
                                            try {
                                                f()
                                            } catch (e) {
                                                pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (i !== u && (c = void 0, l = [e]), n.rejectWith(c, l))
                                            }
                                        };
                                    t ? d() : (pe.Deferred.getStackHook && (d.stackTrace = pe.Deferred.getStackHook()), e.setTimeout(d))
                                }
                            }
                            var a = 0;
                            return pe.Deferred(function(e) {
                                n[0][3].add(r(0, e, pe.isFunction(o) ? o : s, e.notifyWith)), n[1][3].add(r(0, e, pe.isFunction(t) ? t : s)), n[2][3].add(r(0, e, pe.isFunction(i) ? i : u))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? pe.extend(e, o) : o
                        }
                    },
                    r = {};
                return pe.each(n, function(e, t) {
                    var a = t[2],
                        s = t[5];
                    o[t[1]] = a.add, s && a.add(function() {
                        i = s
                    }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), r[t[0]] = function() {
                        return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[t[0] + "With"] = a.fireWith
                }), o.promise(r), t && t.call(r, r), r
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    o = ie.call(arguments),
                    r = pe.Deferred(),
                    a = function(e) {
                        return function(n) {
                            i[e] = this, o[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || r.resolveWith(i, o)
                        }
                    };
                if (t <= 1 && (c(e, r.done(a(n)).resolve, r.reject), "pending" === r.state() || pe.isFunction(o[n] && o[n].then))) return r.then();
                for (; n--;) c(o[n], a(n), r.reject);
                return r.promise()
            }
        });
        var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        pe.Deferred.exceptionHook = function(t, n) {
            e.console && e.console.warn && t && Le.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, pe.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        };
        var je = pe.Deferred();
        pe.fn.ready = function(e) {
            return je.then(e)["catch"](function(e) {
                pe.readyException(e)
            }), this
        }, pe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? pe.readyWait++ : pe.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || je.resolveWith(te, [pe]))
            }
        }), pe.ready.then = je.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var Ie = function(e, t, n, i, o, r, a) {
                var s = 0,
                    u = e.length,
                    c = null == n;
                if ("object" === pe.type(n)) {
                    o = !0;
                    for (s in n) Ie(e, t, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, pe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(pe(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : c ? t.call(e) : u ? t(e[0], n) : r
            },
            Fe = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        f.uid = 1, f.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[pe.camelCase(t)] = n;
                else
                    for (i in t) o[pe.camelCase(i)] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        pe.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t), t = t in i ? [t] : t.match(Ae) || []), n = t.length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !pe.isEmptyObject(t)
            }
        };
        var qe = new f,
            Oe = new f,
            Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Me = /[A-Z]/g;
        pe.extend({
            hasData: function(e) {
                return Oe.hasData(e) || qe.hasData(e)
            },
            data: function(e, t, n) {
                return Oe.access(e, t, n)
            },
            removeData: function(e, t) {
                Oe.remove(e, t)
            },
            _data: function(e, t, n) {
                return qe.access(e, t, n)
            },
            _removeData: function(e, t) {
                qe.remove(e, t)
            }
        }), pe.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Oe.get(r), 1 === r.nodeType && !qe.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)), h(r, i, o[i])));
                        qe.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    Oe.set(this, e)
                }) : Ie(this, function(t) {
                    var n;
                    if (r && void 0 === t) {
                        if (void 0 !== (n = Oe.get(r, e))) return n;
                        if (void 0 !== (n = h(r, e))) return n
                    } else this.each(function() {
                        Oe.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Oe.remove(this, e)
                })
            }
        }), pe.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = qe.get(e, t), n && (!i || pe.isArray(n) ? i = qe.access(e, t, pe.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = pe._queueHooks(e, t),
                    a = function() {
                        pe.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return qe.get(e, n) || qe.access(e, n, {
                    empty: pe.Callbacks("once memory").add(function() {
                        qe.remove(e, [t + "queue", n])
                    })
                })
            }
        }), pe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = pe.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = qe.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Be = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
            He = ["Top", "Right", "Bottom", "Left"],
            Re = function(e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display")
            },
            Ue = function(e, t, n, i) {
                var o, r, a = {};
                for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t) e.style[r] = a[r];
                return o
            },
            We = {};
        pe.fn.extend({
            show: function() {
                return g(this, !0)
            },
            hide: function() {
                return g(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Re(this) ? pe(this).show() : pe(this).hide()
                })
            }
        });
        var $e = /^(?:checkbox|radio)$/i,
            ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ge = /^$|\/(?:java|ecma)script/i,
            Xe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
        var Ve = /<|&#?\w+;/;
        ! function() {
            var e = te.createDocumentFragment(),
                t = e.appendChild(te.createElement("div")),
                n = te.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ye = te.documentElement,
            Ke = /^key/,
            Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Qe = /^([^.]*)(?:\.(.+)|)/;
        pe.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, a, s, u, c, l, f, d, h, p, v, g = qe.get(e);
                if (g)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), o && pe.find.matchesSelector(Ye, o), n.guid || (n.guid = pe.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                            return void 0 !== pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(Ae) || [""], c = t.length; c--;) s = Qe.exec(t[c]) || [], h = v = s[1], p = (s[2] || "").split(".").sort(), h && (f = pe.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = pe.event.special[h] || {}, l = pe.extend({
                        type: h,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && pe.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, r), (d = u[h]) || (d = u[h] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, l) : d.push(l), pe.event.global[h] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, u, c, l, f, d, h, p, v, g = qe.hasData(e) && qe.get(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(Ae) || [""], c = t.length; c--;)
                        if (s = Qe.exec(t[c]) || [], h = v = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (f = pe.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, d = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) l = d[r], !o && v !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (d.splice(r, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || pe.removeEvent(e, h, g.handle), delete u[h])
                        } else
                            for (h in u) pe.event.remove(e, h + t[c], n, i, !0);
                    pe.isEmptyObject(u) && qe.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, r, a, s = pe.event.fix(e),
                    u = new Array(arguments.length),
                    c = (qe.get(this, "events") || {})[s.type] || [],
                    l = pe.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                    for (a = pe.event.handlers.call(this, s, c), t = 0;
                        (o = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((pe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, u)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a, s = [],
                    u = t.delegateCount,
                    c = e.target;
                if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [], a = {}, n = 0; n < u; n++) i = t[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? pe(o, this).index(c) > -1 : pe.find(o, this, null, [c]).length), a[o] && r.push(i);
                            r.length && s.push({
                                elem: c,
                                handlers: r
                            })
                        } return c = this, u < t.length && s.push({
                    elem: c,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(pe.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: pe.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[pe.expando] ? e : new pe.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== C() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === C() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && pe.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return pe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, pe.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, pe.Event = function(e, t) {
            return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
        }, pe.Event.prototype = {
            constructor: pe.Event,
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pe.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, pe.event.addProp), pe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            pe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return o && (o === i || pe.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), pe.fn.extend({
            on: function(e, t, n, i) {
                return E(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return E(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = w), this.each(function() {
                    pe.event.remove(this, e, n, t)
                })
            }
        });
        var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            et = /<script|<style|<link/i,
            tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            nt = /^true\/(.*)/,
            it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        pe.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ze, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, r, a, s = e.cloneNode(!0),
                    u = pe.contains(e.ownerDocument, e);
                if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                    for (a = m(s), r = m(e), i = 0, o = r.length; i < o; i++) D(r[i], a[i]);
                if (t)
                    if (n)
                        for (r = r || m(e), a = a || m(s), i = 0, o = r.length; i < o; i++) N(r[i], a[i]);
                    else N(e, s);
                return a = m(s, "script"), a.length > 0 && y(a, !u && m(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, i, o = pe.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (Fe(n)) {
                        if (t = n[qe.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
                            n[qe.expando] = void 0
                        }
                        n[Oe.expando] && (n[Oe.expando] = void 0)
                    }
            }
        }), pe.fn.extend({
            detach: function(e) {
                return L(this, e, !0)
            },
            remove: function(e) {
                return L(this, e)
            },
            text: function(e) {
                return Ie(this, function(e) {
                    return void 0 === e ? pe.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return A(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        T(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return A(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return A(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return A(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (pe.cleanData(m(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return pe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ie(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !et.test(e) && !Xe[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = pe.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(m(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return A(this, arguments, function(t) {
                    var n = this.parentNode;
                    pe.inArray(this, e) < 0 && (pe.cleanData(m(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), pe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            pe.fn[e] = function(e) {
                for (var n, i = [], o = pe(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), pe(o[a])[t](n), re.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ot = /^margin/,
            rt = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
            at = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            };
        ! function() {
            function t() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(a);
                    var t = e.getComputedStyle(s);
                    n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Ye.removeChild(a), s = null
                }
            }
            var n, i, o, r, a = te.createElement("div"),
                s = te.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), pe.extend(de, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return t(), i
                },
                pixelMarginRight: function() {
                    return t(), o
                },
                reliableMarginLeft: function() {
                    return t(), r
                }
            }))
        }();
        var st = /^(none|table(?!-c[ea]).+)/,
            ut = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ct = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            lt = ["Webkit", "Moz", "ms"],
            ft = te.createElement("div").style;
        pe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = j(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = pe.camelCase(t),
                        u = e.style;
                    return t = pe.cssProps[s] || (pe.cssProps[s] = F(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t] : (r = typeof n, "string" === r && (o = Be.exec(n)) && o[1] && (n = p(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (u[t] = n))))
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, s = pe.camelCase(t);
                return t = pe.cssProps[s] || (pe.cssProps[s] = F(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = j(e, t, i)), "normal" === o && t in ct && (o = ct[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), pe.each(["height", "width"], function(e, t) {
            pe.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return !st.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, i) : Ue(e, ut, function() {
                        return P(e, t, i)
                    })
                },
                set: function(e, n, i) {
                    var o, r = i && at(e),
                        a = i && O(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, r), r);
                    return a && (o = Be.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), q(e, n, a)
                }
            }
        }), pe.cssHooks.marginLeft = I(de.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), pe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            pe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + He[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ot.test(e) || (pe.cssHooks[e + t].set = q)
        }), pe.fn.extend({
            css: function(e, t) {
                return Ie(this, function(e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (pe.isArray(t)) {
                        for (i = at(e), o = t.length; a < o; a++) r[t[a]] = pe.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), pe.Tween = M, M.prototype = {
            constructor: M,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (pe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = M.propHooks[this.prop];
                return e && e.get ? e.get(this) : M.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = M.propHooks[this.prop];
                return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, pe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, pe.fx = M.prototype.init, pe.fx.step = {};
        var dt, ht, pt = /^(?:toggle|show|hide)$/,
            vt = /queueHooks$/;
        pe.Animation = pe.extend($, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return p(n.elem, e, Be.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
                    for (var n, i = 0, o = e.length; i < o; i++) n = e[i], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
                },
                prefilters: [U],
                prefilter: function(e, t) {
                    t ? $.prefilters.unshift(e) : $.prefilters.push(e)
                }
            }), pe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? pe.extend({}, e) : {
                    complete: n || !n && t || pe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !pe.isFunction(t) && t
                };
                return pe.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pe.fx.speeds ? i.duration = pe.fx.speeds[i.duration] : i.duration = pe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
                }, i
            }, pe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Re).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = pe.isEmptyObject(e),
                        r = pe.speed(t, n, i),
                        a = function() {
                            var t = $(this, pe.extend({}, e), r);
                            (o || qe.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = pe.timers,
                            a = qe.get(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && vt.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        !t && n || pe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = qe.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = pe.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, pe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), pe.each(["toggle", "show", "hide"], function(e, t) {
                var n = pe.fn[t];
                pe.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, o)
                }

            }), pe.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                pe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), pe.timers = [], pe.fx.tick = function() {
                var e, t = 0,
                    n = pe.timers;
                for (dt = pe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || pe.fx.stop(), dt = void 0
            }, pe.fx.timer = function(e) {
                pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
            }, pe.fx.interval = 13, pe.fx.start = function() {
                ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(_) : e.setInterval(pe.fx.tick, pe.fx.interval))
            }, pe.fx.stop = function() {
                e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
            }, pe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, pe.fn.delay = function(t, n) {
                return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(o)
                    }
                })
            },
            function() {
                var e = te.createElement("input"),
                    t = te.createElement("select"),
                    n = t.appendChild(te.createElement("option"));
                e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", de.radioValue = "t" === e.value
            }();
        var gt, mt = pe.expr.attrHandle;
        pe.fn.extend({
            attr: function(e, t) {
                return Ie(this, pe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    pe.removeAttr(this, e)
                })
            }
        }), pe.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === r && pe.isXMLDoc(e) || (o = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    o = t && t.match(Ae);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) e.removeAttribute(n)
            }
        }), gt = {
            set: function(e, t, n) {
                return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = mt[t] || pe.find.attr;
            mt[t] = function(e, t, i) {
                var o, r, a = t.toLowerCase();
                return i || (r = mt[a], mt[a] = o, o = null != n(e, t, i) ? a : null, mt[a] = r), o
            }
        });
        var yt = /^(?:input|select|textarea|button)$/i,
            xt = /^(?:a|area)$/i;
        pe.fn.extend({
            prop: function(e, t) {
                return Ie(this, pe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[pe.propFix[e] || e]
                })
            }
        }), pe.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, o = pe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = pe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), de.optSelected || (pe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pe.propFix[this.toLowerCase()] = this
        }), pe.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, a, s, u = 0;
                if (pe.isFunction(e)) return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, G(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Ae) || []; n = this[u++];)
                        if (o = G(n), i = 1 === n.nodeType && " " + z(o) + " ") {
                            for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = z(i), o !== s && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a, s, u = 0;
                if (pe.isFunction(e)) return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, G(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Ae) || []; n = this[u++];)
                        if (o = G(n), i = 1 === n.nodeType && " " + z(o) + " ") {
                            for (a = 0; r = t[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            s = z(i), o !== s && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                    pe(this).toggleClass(e.call(this, n, G(this), t), t)
                }) : this.each(function() {
                    var t, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = pe(this), r = e.match(Ae) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = G(this), t && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : qe.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + z(G(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var bt = /\r/g;
        pe.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = pe.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, pe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : pe.isArray(o) && (o = pe.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = pe.valHooks[o.type] || pe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)) : void 0
            }
        }), pe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = pe.find.attr(e, "value");
                        return null != t ? t : z(pe.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, o = e.options,
                            r = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? r + 1 : o.length;
                        for (i = r < 0 ? u : a ? r : 0; i < u; i++)
                            if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pe(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = pe.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = pe.inArray(pe.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), pe.each(["radio", "checkbox"], function() {
            pe.valHooks[this] = {
                set: function(e, t) {
                    if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
                }
            }, de.checkOn || (pe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var wt = /^(?:focusinfocus|focusoutblur)$/;
        pe.extend(pe.event, {
            trigger: function(t, n, i, o) {
                var r, a, s, u, c, l, f, d = [i || te],
                    h = ce.call(t, "type") ? t.type : t,
                    p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(h + pe.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[pe.expando] ? t : new pe.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), f = pe.event.special[h] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                    if (!o && !f.noBubble && !pe.isWindow(i)) {
                        for (u = f.delegateType || h, wt.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                        s === (i.ownerDocument || te) && d.push(s.defaultView || s.parentWindow || e)
                    }
                    for (r = 0;
                        (a = d[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? u : f.bindType || h, l = (qe.get(a, "events") || {})[t.type] && qe.get(a, "handle"), l && l.apply(a, n), (l = c && a[c]) && l.apply && Fe(a) && (t.result = l.apply(a, n), !1 === t.result && t.preventDefault());
                    return t.type = h, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Fe(i) || c && pe.isFunction(i[h]) && !pe.isWindow(i) && (s = i[c], s && (i[c] = null), pe.event.triggered = h, i[h](), pe.event.triggered = void 0, s && (i[c] = s)), t.result
                }
            },
            simulate: function(e, t, n) {
                var i = pe.extend(new pe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                pe.event.trigger(i, null, t)
            }
        }), pe.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    pe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return pe.event.trigger(e, t, n, !0)
            }
        }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            pe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), pe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), de.focusin = "onfocusin" in e, de.focusin || pe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                pe.event.simulate(t, e.target, pe.event.fix(e))
            };
            pe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = qe.access(i, t);
                    o || i.addEventListener(e, n, !0), qe.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = qe.access(i, t) - 1;
                    o ? qe.access(i, t, o) : (i.removeEventListener(e, n, !0), qe.remove(i, t))
                }
            }
        });
        var Ct = e.location,
            Et = pe.now(),
            Tt = /\?/;
        pe.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (e) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
        };
        var St = /\[\]$/,
            kt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Dt = /^(?:input|select|textarea|keygen)/i;
        pe.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    var n = pe.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) X(n, e[n], t, o);
            return i.join("&")
        }, pe.fn.extend({
            serialize: function() {
                return pe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = pe.prop(this, "elements");
                    return e ? pe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !pe(this).is(":disabled") && Dt.test(this.nodeName) && !Nt.test(e) && (this.checked || !$e.test(e))
                }).map(function(e, t) {
                    var n = pe(this).val();
                    return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
                }).get()
            }
        });
        var At = /%20/g,
            Lt = /#.*$/,
            jt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            qt = /^(?:GET|HEAD)$/,
            Ot = /^\/\//,
            Pt = {},
            Mt = {},
            _t = "*/".concat("*"),
            Bt = te.createElement("a");
        Bt.href = Ct.href, pe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: Ft.test(Ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": _t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": pe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? K(K(e, pe.ajaxSettings), t) : K(pe.ajaxSettings, e)
            },
            ajaxPrefilter: V(Pt),
            ajaxTransport: V(Mt),
            ajax: function(t, n) {
                function i(t, n, i, s) {
                    var c, d, h, b, w, C = n;
                    l || (l = !0, u && e.clearTimeout(u), o = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = J(p, E, i)), b = Q(p, b, E, c), c ? (p.ifModified && (w = E.getResponseHeader("Last-Modified"), w && (pe.lastModified[r] = w), (w = E.getResponseHeader("etag")) && (pe.etag[r] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, h = b.error, c = !h)) : (h = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", c ? m.resolveWith(v, [d, C, E]) : m.rejectWith(v, [E, C, h]), E.statusCode(x), x = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [E, p, c ? d : h]), y.fireWith(v, [E, C]), f && (g.trigger("ajaxComplete", [E, p]), --pe.active || pe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var o, r, a, s, u, c, l, f, d, h, p = pe.ajaxSetup({}, n),
                    v = p.context || p,
                    g = p.context && (v.nodeType || v.jquery) ? pe(v) : pe.event,
                    m = pe.Deferred(),
                    y = pe.Callbacks("once memory"),
                    x = p.statusCode || {},
                    b = {},
                    w = {},
                    C = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (l) {
                                if (!s)
                                    for (s = {}; t = It.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return l ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == l && (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (l) E.always(e[E.status]);
                                else
                                    for (t in e) x[t] = [x[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || C;
                            return o && o.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(E), p.url = ((t || p.url || Ct.href) + "").replace(Ot, Ct.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ae) || [""], null == p.crossDomain) {
                    c = te.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)), Y(Pt, p, n, E), l) return E;
                f = pe.event && p.global, f && 0 == pe.active++ && pe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !qt.test(p.type), r = p.url.replace(Lt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(At, "+")) : (h = p.url.slice(r.length), p.data && (r += (Tt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(jt, "$1"), h = (Tt.test(r) ? "&" : "?") + "_=" + Et++ + h), p.url = r + h), p.ifModified && (pe.lastModified[r] && E.setRequestHeader("If-Modified-Since", pe.lastModified[r]), pe.etag[r] && E.setRequestHeader("If-None-Match", pe.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : p.accepts["*"]);
                for (d in p.headers) E.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(v, E, p) || l)) return E.abort();
                if (C = "abort", y.add(p.complete), E.done(p.success), E.fail(p.error), o = Y(Mt, p, n, E)) {
                    if (E.readyState = 1, f && g.trigger("ajaxSend", [E, p]), l) return E;
                    p.async && p.timeout > 0 && (u = e.setTimeout(function() {
                        E.abort("timeout")
                    }, p.timeout));
                    try {
                        l = !1, o.send(b, i)
                    } catch (e) {
                        if (l) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return E
            },
            getJSON: function(e, t, n) {
                return pe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return pe.get(e, void 0, t, "script")
            }
        }), pe.each(["get", "post"], function(e, t) {
            pe[t] = function(e, n, i, o) {
                return pe.isFunction(n) && (o = o || i, i = n, n = void 0), pe.ajax(pe.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, pe.isPlainObject(e) && e))
            }
        }), pe._evalUrl = function(e) {
            return pe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, pe.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return pe.isFunction(e) ? this.each(function(t) {
                    pe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = pe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = pe.isFunction(e);
                return this.each(function(n) {
                    pe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    pe(this).replaceWith(this.childNodes)
                }), this
            }
        }), pe.expr.pseudos.hidden = function(e) {
            return !pe.expr.pseudos.visible(e)
        }, pe.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, pe.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        };
        var Ht = {
                0: 200,
                1223: 204
            },
            Rt = pe.ajaxSettings.xhr();
        de.cors = !!Rt && "withCredentials" in Rt, de.ajax = Rt = !!Rt, pe.ajaxTransport(function(t) {
            var n, i;
            if (de.cors || Rt && !t.crossDomain) return {
                send: function(o, r) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (a in o) s.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n) throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), pe.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), pe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return pe.globalEval(e), e
                }
            }
        }), pe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), pe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, o) {
                        t = pe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), te.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ut = [],
            Wt = /(=)\?(?=&|$)|\?\?/;
        pe.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Ut.pop() || pe.expando + "_" + Et++;
                    return this[e] = !0, e
                }
            }), pe.ajaxPrefilter("json jsonp", function(t, n, i) {
                var o, r, a, s = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Wt, "$1" + o) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                    return a || pe.error(o + " was not called"), a[0]
                }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                    a = arguments
                }, i.always(function() {
                    void 0 === r ? pe(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ut.push(o)), a && pe.isFunction(r) && r(a[0]), a = r = void 0
                }), "script"
            }), de.createHTMLDocument = function() {
                var e = te.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), pe.parseHTML = function(e, t, n) {
                if ("string" != typeof e) return [];
                "boolean" == typeof t && (n = t, t = !1);
                var i, o, r;
                return t || (de.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), o = Ee.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = x([e], t, r), r && r.length && pe(r).remove(), pe.merge([], o.childNodes))
            }, pe.fn.load = function(e, t, n) {
                var i, o, r, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (i = z(e.slice(s)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && pe.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    r = arguments, a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, r || [e.responseText, t, e])
                    })
                }), this
            }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                pe.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), pe.expr.pseudos.animated = function(e) {
                return pe.grep(pe.timers, function(t) {
                    return e === t.elem
                }).length
            }, pe.offset = {
                setOffset: function(e, t, n) {
                    var i, o, r, a, s, u, c, l = pe.css(e, "position"),
                        f = pe(e),
                        d = {};
                    "static" === l && (e.style.position = "relative"), s = f.offset(), r = pe.css(e, "top"), u = pe.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (r + u).indexOf("auto") > -1, c ? (i = f.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : f.css(d)
                }
            }, pe.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        pe.offset.setOffset(this, e, t)
                    });
                    var t, n, i, o, r = this[0];
                    return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, n = Z(o), t = o.documentElement, {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (i = e.offset()), i = {
                            top: i.top + pe.css(e[0], "borderTopWidth", !0),
                            left: i.left + pe.css(e[0], "borderLeftWidth", !0)
                        }), {
                            top: t.top - i.top - pe.css(n, "marginTop", !0),
                            left: t.left - i.left - pe.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === pe.css(e, "position");) e = e.offsetParent;
                        return e || Ye
                    })
                }
            }), pe.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                pe.fn[e] = function(i) {
                    return Ie(this, function(e, i, o) {
                        var r = Z(e);
                        return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
                    }, e, i, arguments.length)
                }
            }),
            pe.each(["top", "left"], function(e, t) {
                pe.cssHooks[t] = I(de.pixelPosition, function(e, n) {
                    if (n) return n = j(e, t), rt.test(n) ? pe(e).position()[t] + "px" : n
                })
            }), pe.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                pe.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, i) {
                    pe.fn[i] = function(o, r) {
                        var a = arguments.length && (n || "boolean" != typeof o),
                            s = n || (!0 === o || !0 === r ? "margin" : "border");
                        return Ie(this, function(t, n, o) {
                            var r;
                            return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? pe.css(t, n, s) : pe.style(t, n, o, s)
                        }, t, a ? o : void 0, a)
                    }
                })
            }), pe.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), pe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
                return pe
            });
        var $t = e.jQuery,
            zt = e.$;
        return pe.noConflict = function(t) {
            return e.$ === pe && (e.$ = zt), t && e.jQuery === pe && (e.jQuery = $t), pe
        }, t || (e.jQuery = e.$ = pe), pe
    }), window.dandyConfig && dandy(window.dandyConfig), function() {
        function e(e) {
            return e.call.apply(e.bind, arguments)
        }

        function t(e, t) {
            if (!e) throw Error();
            if (2 < arguments.length) {
                var n = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var i = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(i, n), e.apply(t, i)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }

        function n() {
            return n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e : t, n.apply(null, arguments)
        }

        function i(e, t) {
            this.F = e, this.k = t || e, this.H = this.k.document
        }

        function o(e, t, n) {
            e = e.H.getElementsByTagName(t)[0], e || (e = document.documentElement), e.insertBefore(n, e.lastChild)
        }

        function r(e, t, n) {
            t = t || [], n = n || [];
            for (var i = e.className.split(/\s+/), o = 0; o < t.length; o += 1) {
                for (var r = !1, a = 0; a < i.length; a += 1)
                    if (t[o] === i[a]) {
                        r = !0;
                        break
                    } r || i.push(t[o])
            }
            for (t = [], o = 0; o < i.length; o += 1) {
                for (r = !1, a = 0; a < n.length; a += 1)
                    if (i[o] === n[a]) {
                        r = !0;
                        break
                    } r || t.push(i[o])
            }
            e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function a(e, t) {
            for (var n = e.className.split(/\s+/), i = 0, o = n.length; i < o; i++)
                if (n[i] == t) return !0;
            return !1
        }

        function s(e) {
            if ("string" == typeof e.fa) return e.fa;
            var t = e.k.location.protocol;
            return "about:" == t && (t = e.F.location.protocol), "https:" == t ? "https:" : "http:"
        }

        function u(e, t, n) {
            function i() {
                u && r && a && (u(s), u = null)
            }
            t = e.createElement("link", {
                rel: "stylesheet",
                href: t,
                media: "all"
            });
            var r = !1,
                a = !0,
                s = null,
                u = n || null;
            J ? (t.onload = function() {
                r = !0, i()
            }, t.onerror = function() {
                r = !0, s = Error("Stylesheet failed to load"), i()
            }) : setTimeout(function() {
                r = !0, i()
            }, 0), o(e, "head", t)
        }

        function c(e, t, n, i) {
            var o = e.H.getElementsByTagName("head")[0];
            if (o) {
                var r = e.createElement("script", {
                        src: t
                    }),
                    a = !1;
                return r.onload = r.onreadystatechange = function() {
                    a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), r.onload = r.onreadystatechange = null, "HEAD" == r.parentNode.tagName && o.removeChild(r))
                }, o.appendChild(r), setTimeout(function() {
                    a || (a = !0, n && n(Error("Script load timeout")))
                }, i || 5e3), r
            }
            return null
        }

        function l() {
            this.S = 0, this.K = null
        }

        function f(e) {
            return e.S++,
                function() {
                    e.S--, h(e)
                }
        }

        function d(e, t) {
            e.K = t, h(e)
        }

        function h(e) {
            0 == e.S && e.K && (e.K(), e.K = null)
        }

        function p(e) {
            this.ea = e || "-"
        }

        function v(e, t) {
            this.Q = e, this.M = 4, this.L = "n";
            var n = (t || "n4").match(/^([nio])([1-9])$/i);
            n && (this.L = n[1], this.M = parseInt(n[2], 10))
        }

        function g(e) {
            return x(e) + " " + e.M + "00 300px " + m(e.Q)
        }

        function m(e) {
            var t = [];
            e = e.split(/,\s*/);
            for (var n = 0; n < e.length; n++) {
                var i = e[n].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? t.push("'" + i + "'") : t.push(i)
            }
            return t.join(",")
        }

        function y(e) {
            return e.L + e.M
        }

        function x(e) {
            var t = "normal";
            return "o" === e.L ? t = "oblique" : "i" === e.L && (t = "italic"), t
        }

        function b(e) {
            var t = 4,
                n = "n",
                i = null;
            return e && ((i = e.match(/(normal|oblique|italic)/i)) && i[1] && (n = i[1].substr(0, 1).toLowerCase()), (i = e.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? t = 7 : /[1-9]00/.test(i[1]) && (t = parseInt(i[1].substr(0, 1), 10)))), n + t
        }

        function w(e, t) {
            this.a = e, this.j = e.k.document.documentElement, this.O = t, this.f = "wf", this.e = new p("-"), this.da = !1 !== t.events, this.u = !1 !== t.classes
        }

        function C(e) {
            e.u && r(e.j, [e.e.d(e.f, "loading")]), T(e, "loading")
        }

        function E(e) {
            if (e.u) {
                var t = a(e.j, e.e.d(e.f, "active")),
                    n = [],
                    i = [e.e.d(e.f, "loading")];
                t || n.push(e.e.d(e.f, "inactive")), r(e.j, n, i)
            }
            T(e, "inactive")
        }

        function T(e, t, n) {
            e.da && e.O[t] && (n ? e.O[t](n.getName(), y(n)) : e.O[t]())
        }

        function S() {
            this.t = {}
        }

        function k(e, t, n) {
            var i, o = [];
            for (i in t)
                if (t.hasOwnProperty(i)) {
                    var r = e.t[i];
                    r && o.push(r(t[i], n))
                } return o
        }

        function N(e, t) {
            this.a = e, this.h = t, this.m = this.a.createElement("span", {
                "aria-hidden": "true"
            }, this.h)
        }

        function D(e, t) {
            var n, i = e.m;
            n = "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + m(t.Q) + ";font-style:" + x(t) + ";font-weight:" + t.M + "00;", i.style.cssText = n
        }

        function A(e) {
            o(e.a, "body", e.m)
        }

        function L(e, t, n, i, o, r) {
            this.G = e, this.J = t, this.g = i, this.a = n, this.v = o || 3e3, this.h = r || void 0
        }

        function j(e, t, n, i, o, r, a) {
            this.G = e, this.J = t, this.a = n, this.g = i, this.h = a || "BESbswy", this.s = {}, this.v = o || 3e3, this.Z = r || null, this.D = this.C = this.A = this.w = null, this.w = new N(this.a, this.h), this.A = new N(this.a, this.h), this.C = new N(this.a, this.h), this.D = new N(this.a, this.h), D(this.w, new v(this.g.getName() + ",serif", y(this.g))), D(this.A, new v(this.g.getName() + ",sans-serif", y(this.g))), D(this.C, new v("serif", y(this.g))), D(this.D, new v("sans-serif", y(this.g))), A(this.w), A(this.A), A(this.C), A(this.D)
        }

        function I() {
            if (null === Z) {
                var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                Z = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
            }
            return Z
        }

        function F(e, t, n) {
            for (var i in Q)
                if (Q.hasOwnProperty(i) && t === e.s[Q[i]] && n === e.s[Q[i]]) return !0;
            return !1
        }

        function q(e) {
            var t, n = e.w.m.offsetWidth,
                i = e.A.m.offsetWidth;
            (t = n === e.s.serif && i === e.s["sans-serif"]) || (t = I() && F(e, n, i)), t ? K() - e.ga >= e.v ? I() && F(e, n, i) && (null === e.Z || e.Z.hasOwnProperty(e.g.getName())) ? P(e, e.G) : P(e, e.J) : O(e) : P(e, e.G)
        }

        function O(e) {
            setTimeout(n(function() {
                q(this)
            }, e), 50)
        }

        function P(e, t) {
            setTimeout(n(function() {
                this.w.remove(), this.A.remove(), this.C.remove(), this.D.remove(), t(this.g)
            }, e), 0)
        }

        function M(e, t, n) {
            this.a = e, this.p = t, this.P = 0, this.ba = this.Y = !1, this.v = n
        }

        function _(e) {
            0 == --e.P && e.Y && (e.ba ? (e = e.p, e.u && r(e.j, [e.e.d(e.f, "active")], [e.e.d(e.f, "loading"), e.e.d(e.f, "inactive")]), T(e, "active")) : E(e.p))
        }

        function B(e) {
            this.F = e, this.q = new S, this.$ = 0, this.T = this.U = !0
        }

        function H(e, t, i, o, a) {
            var s = 0 == --e.$;
            (e.T || e.U) && setTimeout(function() {
                var e = a || null,
                    u = o || null || {};
                if (0 === i.length && s) E(t.p);
                else {
                    t.P += i.length, s && (t.Y = s);
                    var c, l = [];
                    for (c = 0; c < i.length; c++) {
                        var f = i[c],
                            d = u[f.getName()],
                            h = t.p,
                            p = f;
                        h.u && r(h.j, [h.e.d(h.f, p.getName(), y(p).toString(), "loading")]), T(h, "fontloading", p), h = null, null === ee && (ee = !!window.FontFace && (!(h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) || 42 < parseInt(h[1], 10))), h = ee ? new L(n(t.V, t), n(t.W, t), t.a, f, t.v, d) : new j(n(t.V, t), n(t.W, t), t.a, f, t.v, e, d), l.push(h)
                    }
                    for (c = 0; c < l.length; c++) l[c].start()
                }
            }, 0)
        }

        function R(e, t, n) {
            var i = [],
                o = n.timeout;
            C(t);
            var i = k(e.q, n, e.a),
                r = new M(e.a, t, o);
            for (e.$ = i.length, t = 0, n = i.length; t < n; t++) i[t].load(function(t, n, i) {
                H(e, r, t, n, i)
            })
        }

        function U(e, t, n) {
            this.N = e || t + te, this.o = [], this.R = [], this.ca = n || ""
        }

        function W(e, t) {
            for (var n = t.length, i = 0; i < n; i++) {
                var o = t[i].split(":");
                3 == o.length && e.R.push(o.pop());
                var r = "";
                2 == o.length && "" != o[1] && (r = ":"), e.o.push(o.join(r))
            }
        }

        function $(e) {
            this.o = e, this.aa = [], this.I = {}
        }

        function z(e, t) {
            this.a = e, this.c = t
        }

        function G(e, t) {
            this.a = e, this.c = t, this.X = []
        }

        function X(e, t) {
            this.a = e, this.c = t
        }

        function V(e, t) {
            this.a = e, this.c = t
        }

        function Y(e, t) {
            this.a = e, this.c = t
        }
        var K = Date.now || function() {
                return +new Date
            },
            J = !!window.FontFace;
        i.prototype.createElement = function(e, t, n) {
            if (e = this.H.createElement(e), t)
                for (var i in t) t.hasOwnProperty(i) && ("style" == i ? e.style.cssText = t[i] : e.setAttribute(i, t[i]));
            return n && e.appendChild(this.H.createTextNode(n)), e
        }, p.prototype.d = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t].replace(/[\W_]+/g, "").toLowerCase());
            return e.join(this.ea)
        }, v.prototype.getName = function() {
            return this.Q
        }, N.prototype.remove = function() {
            var e = this.m;
            e.parentNode && e.parentNode.removeChild(e)
        }, L.prototype.start = function() {
            function e() {
                K() - i >= n.v ? n.J(n.g) : t.fonts.load(g(n.g), n.h).then(function(t) {
                    1 <= t.length ? n.G(n.g) : setTimeout(e, 25)
                }, function() {
                    n.J(n.g)
                })
            }
            var t = this.a.k.document,
                n = this,
                i = K();
            e()
        };
        var Q = {
                ia: "serif",
                ha: "sans-serif"
            },
            Z = null;
        j.prototype.start = function() {
            this.s.serif = this.C.m.offsetWidth, this.s["sans-serif"] = this.D.m.offsetWidth, this.ga = K(), q(this)
        };
        var ee = null;
        M.prototype.V = function(e) {
            var t = this.p;
            t.u && r(t.j, [t.e.d(t.f, e.getName(), y(e).toString(), "active")], [t.e.d(t.f, e.getName(), y(e).toString(), "loading"), t.e.d(t.f, e.getName(), y(e).toString(), "inactive")]), T(t, "fontactive", e), this.ba = !0, _(this)
        }, M.prototype.W = function(e) {
            var t = this.p;
            if (t.u) {
                var n = a(t.j, t.e.d(t.f, e.getName(), y(e).toString(), "active")),
                    i = [],
                    o = [t.e.d(t.f, e.getName(), y(e).toString(), "loading")];
                n || i.push(t.e.d(t.f, e.getName(), y(e).toString(), "inactive")), r(t.j, i, o)
            }
            T(t, "fontinactive", e), _(this)
        }, B.prototype.load = function(e) {
            this.a = new i(this.F, e.context || this.F), this.U = !1 !== e.events, this.T = !1 !== e.classes, R(this, new w(this.a, e), e)
        };
        var te = "//fonts.googleapis.com/css";
        U.prototype.d = function() {
            if (0 == this.o.length) throw Error("No fonts to load!");
            if (-1 != this.N.indexOf("kit=")) return this.N;
            for (var e = this.o.length, t = [], n = 0; n < e; n++) t.push(this.o[n].replace(/ /g, "+"));
            return e = this.N + "?family=" + t.join("%7C"), 0 < this.R.length && (e += "&subset=" + this.R.join(",")), 0 < this.ca.length && (e += "&text=" + encodeURIComponent(this.ca)), e
        };
        var ne = {
                latin: "BESbswy",
                cyrillic: "&#1081;&#1103;&#1046;",
                greek: "&#945;&#946;&#931;",
                khmer: "&#x1780;&#x1781;&#x1782;",
                Hanuman: "&#x1780;&#x1781;&#x1782;"
            },
            ie = {
                thin: "1",
                extralight: "2",
                "extra-light": "2",
                ultralight: "2",
                "ultra-light": "2",
                light: "3",
                regular: "4",
                book: "4",
                medium: "5",
                "semi-bold": "6",
                semibold: "6",
                "demi-bold": "6",
                demibold: "6",
                bold: "7",
                "extra-bold": "8",
                extrabold: "8",
                "ultra-bold": "8",
                ultrabold: "8",
                black: "9",
                heavy: "9",
                l: "3",
                r: "4",
                b: "7"
            },
            oe = {
                i: "i",
                italic: "i",
                n: "n",
                normal: "n"
            },
            re = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
        $.prototype.parse = function() {
            for (var e = this.o.length, t = 0; t < e; t++) {
                var n = this.o[t].split(":"),
                    i = n[0].replace(/\+/g, " "),
                    o = ["n4"];
                if (2 <= n.length) {
                    var r, a = n[1];
                    if (r = [], a)
                        for (var a = a.split(","), s = a.length, u = 0; u < s; u++) {
                            var c;
                            if (c = a[u], c.match(/^[\w-]+$/))
                                if (null == (c = re.exec(c.toLowerCase()))) c = "";
                                else {
                                    var l;
                                    if (null == (l = c[1]) || "" == l) l = "4";
                                    else {
                                        var f = ie[l];
                                        l = f || (isNaN(l) ? "4" : l.substr(0, 1))
                                    }
                                    c = c[2], c = [null == c || "" == c ? "n" : oe[c], l].join("")
                                }
                            else c = "";
                            c && r.push(c)
                        }
                    0 < r.length && (o = r), 3 == n.length && (n = n[2], r = [], n = n ? n.split(",") : r, 0 < n.length && (n = ne[n[0]]) && (this.I[i] = n))
                }
                for (this.I[i] || (n = ne[i]) && (this.I[i] = n), n = 0; n < o.length; n += 1) this.aa.push(new v(i, o[n]))
            }
        };
        var ae = {
            Arimo: !0,
            Cousine: !0,
            Tinos: !0
        };
        z.prototype.load = function(e) {
            var t = new l,
                n = this.a,
                i = new U(this.c.api, s(n), this.c.text),
                o = this.c.families;
            W(i, o);
            var r = new $(o);
            r.parse(), u(n, i.d(), f(t)), d(t, function() {
                e(r.aa, r.I, ae)
            })
        }, G.prototype.B = function(e) {
            var t = this.a;
            return s(this.a) + (this.c.api || "//f.fontdeck.com/s/css/js/") + (t.k.location.hostname || t.F.location.hostname) + "/" + e + ".js"
        }, G.prototype.load = function(e) {
            var t = this.c.id,
                n = this.a.k,
                i = this;
            t ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[t] = function(t, n) {
                for (var o = 0, r = n.fonts.length; o < r; ++o) {
                    var a = n.fonts[o];
                    i.X.push(new v(a.name, b("font-weight:" + a.weight + ";font-style:" + a.style)))
                }
                e(i.X)
            }, c(this.a, this.B(t), function(t) {
                t && e([])
            })) : e([])
        }, X.prototype.B = function(e) {
            return (this.c.api || "https://use.typekit.net") + "/" + e + ".js"
        }, X.prototype.load = function(e) {
            var t = this.c.id,
                n = this.a.k;
            t ? c(this.a, this.B(t), function(t) {
                if (t) e([]);
                else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                    t = n.Typekit.config.fn;
                    for (var i = [], o = 0; o < t.length; o += 2)
                        for (var r = t[o], a = t[o + 1], s = 0; s < a.length; s++) i.push(new v(r, a[s]));
                    try {
                        n.Typekit.load({
                            events: !1,
                            classes: !1,
                            async: !0
                        })
                    } catch (e) {}
                    e(i)
                }
            }, 2e3) : e([])
        }, V.prototype.B = function(e, t) {
            return s(this.a) + "//" + (this.c.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "") + "/" + e + ".js" + (t ? "?v=" + t : "")
        }, V.prototype.load = function(e) {
            function t() {
                if (o["__mti_fntLst" + n]) {
                    var i, r = o["__mti_fntLst" + n](),
                        a = [];
                    if (r)
                        for (var s = 0; s < r.length; s++) {
                            var u = r[s].fontfamily;
                            void 0 != r[s].fontStyle && void 0 != r[s].fontWeight ? (i = r[s].fontStyle + r[s].fontWeight, a.push(new v(u, i))) : a.push(new v(u))
                        }
                    e(a)
                } else setTimeout(function() {
                    t()
                }, 50)
            }
            var n = this.c.projectId,
                i = this.c.version;
            if (n) {
                var o = this.a.k;
                c(this.a, this.B(n, i), function(n) {
                    n ? e([]) : t()
                }).id = "__MonotypeAPIScript__" + n
            } else e([])
        }, Y.prototype.load = function(e) {
            var t, n, i = this.c.urls || [],
                o = this.c.families || [],
                r = this.c.testStrings || {},
                a = new l;
            for (t = 0, n = i.length; t < n; t++) u(this.a, i[t], f(a));
            var s = [];
            for (t = 0, n = o.length; t < n; t++)
                if (i = o[t].split(":"), i[1])
                    for (var c = i[1].split(","), h = 0; h < c.length; h += 1) s.push(new v(i[0], c[h]));
                else s.push(new v(i[0]));
            d(a, function() {
                e(s, r)
            })
        };
        var se = new B(window);
        se.q.t.custom = function(e, t) {
            return new Y(t, e)
        }, se.q.t.fontdeck = function(e, t) {
            return new G(t, e)
        }, se.q.t.monotype = function(e, t) {
            return new V(t, e)
        }, se.q.t.typekit = function(e, t) {
            return new X(t, e)
        }, se.q.t.google = function(e, t) {
            return new z(t, e)
        };
        var ue = {
            load: n(se.load, se)
        };
        "function" == typeof define && define.amd ? define(function() {
            return ue
        }) : "undefined" != typeof module && module.exports ? module.exports = ue : (window.WebFont = ue, window.WebFontConfig && se.load(window.WebFontConfig))
    }(), function(e, t) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
    }("undefined" != typeof window ? window : this, function() {
        function e() {}
        var t = e.prototype;
        return t.on = function(e, t) {
            if (e && t) {
                var n = this._events = this._events || {},
                    i = n[e] = n[e] || [];
                return -1 == i.indexOf(t) && i.push(t), this
            }
        }, t.once = function(e, t) {
            if (e && t) {
                this.on(e, t);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[e] = n[e] || {})[t] = !0, this
            }
        }, t.off = function(e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                var i = n.indexOf(t);
                return -1 != i && n.splice(i, 1), this
            }
        }, t.emitEvent = function(e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                var i = 0,
                    o = n[i];
                t = t || [];
                for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                    var a = r && r[o];
                    a && (this.off(e, o), delete r[o]), o.apply(this, t), i += a ? 0 : 1, o = n[i]
                }
                return this
            }
        }, e
    }), function(e, t) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(n) {
            return t(e, n)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.Unipointer = t(e, e.EvEmitter)
    }(window, function(e, t) {
        function n() {}

        function i() {}
        var o = i.prototype = Object.create(t.prototype);
        o.bindStartEvent = function(e) {
            this._bindStartEvent(e, !0)
        }, o.unbindStartEvent = function(e) {
            this._bindStartEvent(e, !1)
        }, o._bindStartEvent = function(t, n) {
            n = n === undefined || !!n;
            var i = n ? "addEventListener" : "removeEventListener";
            e.navigator.pointerEnabled ? t[i]("pointerdown", this) : e.navigator.msPointerEnabled ? t[i]("MSPointerDown", this) : (t[i]("mousedown", this), t[i]("touchstart", this))
        }, o.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, o.getTouch = function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.identifier == this.pointerIdentifier) return n
            }
        }, o.onmousedown = function(e) {
            var t = e.button;
            t && 0 !== t && 1 !== t || this._pointerDown(e, e)
        }, o.ontouchstart = function(e) {
            this._pointerDown(e, e.changedTouches[0])
        }, o.onMSPointerDown = o.onpointerdown = function(e) {
            this._pointerDown(e, e)
        }, o._pointerDown = function(e, t) {
            this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = t.pointerId !== undefined ? t.pointerId : t.identifier, this.pointerDown(e, t))
        }, o.pointerDown = function(e, t) {
            this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
        };
        var r = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"],
            MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
        };
        return o._bindPostStartEvents = function(t) {
            if (t) {
                var n = r[t.type];
                n.forEach(function(t) {
                    e.addEventListener(t, this)
                }, this), this._boundPointerEvents = n
            }
        }, o._unbindPostStartEvents = function() {
            this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
                e.removeEventListener(t, this)
            }, this), delete this._boundPointerEvents)
        }, o.onmousemove = function(e) {
            this._pointerMove(e, e)
        }, o.onMSPointerMove = o.onpointermove = function(e) {
            e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
        }, o.ontouchmove = function(e) {
            var t = this.getTouch(e.changedTouches);
            t && this._pointerMove(e, t)
        }, o._pointerMove = function(e, t) {
            this.pointerMove(e, t)
        }, o.pointerMove = function(e, t) {
            this.emitEvent("pointerMove", [e, t])
        }, o.onmouseup = function(e) {
            this._pointerUp(e, e)
        }, o.onMSPointerUp = o.onpointerup = function(e) {
            e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
        }, o.ontouchend = function(e) {
            var t = this.getTouch(e.changedTouches);
            t && this._pointerUp(e, t)
        }, o._pointerUp = function(e, t) {
            this._pointerDone(), this.pointerUp(e, t)
        }, o.pointerUp = function(e, t) {
            this.emitEvent("pointerUp", [e, t])
        }, o._pointerDone = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
        }, o.pointerDone = n, o.onMSPointerCancel = o.onpointercancel = function(e) {
            e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
        }, o.ontouchcancel = function(e) {
            var t = this.getTouch(e.changedTouches);
            t && this._pointerCancel(e, t)
        }, o._pointerCancel = function(e, t) {
            this._pointerDone(), this.pointerCancel(e, t)
        }, o.pointerCancel = function(e, t) {
            this.emitEvent("pointerCancel", [e, t])
        }, i.getPointerPoint = function(e) {
            return {
                x: e.pageX,
                y: e.pageY
            }
        }, i
    }), function(e, t) {
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter", "unipointer/unipointer"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("unipointer")) : e.Huebee = t(e, e.EvEmitter, e.Unipointer)
    }(window, function(e, t, n) {
        function i(e, t) {
            if (!(e = s(e))) throw "Bad element for Huebee: " + e;
            this.anchor = e, this.options = {}, this.option(i.defaults), this.option(t), this.create()
        }

        function o() {
            for (var e = document.querySelectorAll("[data-huebee]"), t = 0; t < e.length; t++) {
                var n, o = e[t],
                    r = o.getAttribute("data-huebee");
                try {
                    n = r && JSON.parse(r)
                } catch (e) {
                    w && w.error("Error parsing data-huebee on " + o.className + ": " + e);
                    continue
                }
                new i(o, n)
            }
        }

        function r(e) {
            T.clearRect(0, 0, 1, 1), T.fillStyle = "#010203", T.fillStyle = e, T.fillRect(0, 0, 1, 1);
            var t = T.getImageData(0, 0, 1, 1).data;
            if (t = [t[0], t[1], t[2], t[3]], "1,2,3,255" != t.join(",")) {
                var n = l.apply(this, t);
                return {
                    color: e.trim(),
                    hue: n[0],
                    sat: n[1],
                    lum: n[2]
                }
            }
        }

        function a(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function s(e) {
            return "string" == typeof e && (e = document.querySelector(e)), e
        }

        function u(e, t, n) {
            return f(c(e, t, n))
        }

        function c(e, t, n) {
            var i, o, r = (1 - Math.abs(2 * n - 1)) * t,
                a = e / 60,
                s = r * (1 - Math.abs(a % 2 - 1));
            switch (Math.floor(a)) {
                case 0:
                    i = [r, s, 0];
                    break;
                case 1:
                    i = [s, r, 0];
                    break;
                case 2:
                    i = [0, r, s];
                    break;
                case 3:
                    i = [0, s, r];
                    break;
                case 4:
                    i = [s, 0, r];
                    break;
                case 5:
                    i = [r, 0, s];
                    break;
                default:
                    i = [0, 0, 0]
            }
            return o = n - r / 2, i = i.map(function(e) {
                return e + o
            })
        }

        function l(e, t, n) {
            e /= 255, t /= 255, n /= 255;
            var i, o = Math.max(e, t, n),
                r = Math.min(e, t, n),
                a = o - r,
                s = .5 * (o + r),
                u = 0 === a ? 0 : a / (1 - Math.abs(2 * s - 1));
            return 0 === a ? i = 0 : o === e ? i = (t - n) / a % 6 : o === t ? i = (n - e) / a + 2 : o === n && (i = (e - t) / a + 4), [60 * i, parseFloat(u), parseFloat(s)]
        }

        function f(e) {
            return "#" + e.map(function(e) {
                e = Math.round(255 * e);
                var t = e.toString(16).toUpperCase();
                return t = t.length < 2 ? "0" + t : t
            }).join("")
        }

        function d(e) {
            return "#" + e[1] + e[3] + e[5]
        }
        i.defaults = {
            hues: 12,
            hue0: 0,
            shades: 5,
            saturations: 3,
            notation: "shortHex",
            setText: !0,
            setBGColor: !0
        };
        var h = i.prototype = Object.create(t.prototype);
        h.option = function(e) {
            this.options = a(this.options, e)
        };
        var p = 0,
            v = {};
        h.create = function() {
            function e(e) {
                e.target == i && e.preventDefault()
            }
            var t = this.guid = ++p;
            this.anchor.huebeeGUID = t, v[t] = this, this.setBGElems = this.getSetElems(this.options.setBGColor), this.setTextElems = this.getSetElems(this.options.setText), this.outsideCloseIt = this.outsideClose.bind(this), this.onDocKeydown = this.docKeydown.bind(this), this.closeIt = this.close.bind(this), this.openIt = this.open.bind(this), this.onElemTransitionend = this.elemTransitionend.bind(this), this.isInputAnchor = "INPUT" == this.anchor.nodeName, this.options.staticOpen || (this.anchor.addEventListener("click", this.openIt), this.anchor.addEventListener("focus", this.openIt)), this.isInputAnchor && this.anchor.addEventListener("input", this.inputInput.bind(this));
            var n = this.element = document.createElement("div");
            n.className = "huebee ", n.className += this.options.staticOpen ? "is-static-open " : "is-hidden ", n.className += this.options.className || "";
            var i = this.container = document.createElement("div");
            if (i.className = "huebee__container", i.addEventListener("mousedown", e), i.addEventListener("touchstart", e), this.createCanvas(), this.cursor = document.createElement("div"), this.cursor.className = "huebee__cursor is-hidden", i.appendChild(this.cursor), this.createCloseButton(), n.appendChild(i), !this.options.staticOpen) {
                var o = getComputedStyle(this.anchor.parentNode);
                "relative" != o.position && "absolute" != o.position && (this.anchor.parentNode.style.position = "relative")
            }
            var r = this.options.hues,
                a = this.options.customColors,
                s = a && a.length;
            this.satY = s ? Math.ceil(s / r) + 1 : 0, this.updateColors(), this.setAnchorColor(), this.options.staticOpen && this.open()
        }, h.getSetElems = function(e) {
            return !0 === e ? [this.anchor] : "string" == typeof e ? document.querySelectorAll(e) : void 0
        }, h.createCanvas = function() {
            var e = this.canvas = document.createElement("canvas");
            e.className = "huebee__canvas", this.ctx = e.getContext("2d");
            var t = this.canvasPointer = new n;
            t._bindStartEvent(e), t.on("pointerDown", this.canvasPointerDown.bind(this)), t.on("pointerMove", this.canvasPointerMove.bind(this)), this.container.appendChild(e)
        };
        var g = "http://www.w3.org/2000/svg";
        h.createCloseButton = function() {
            if (!this.options.staticOpen) {
                var e = document.createElementNS(g, "svg");
                e.setAttribute("class", "huebee__close-button"), e.setAttribute("viewBox", "0 0 24 24"), e.setAttribute("width", "24"), e.setAttribute("height", "24");
                var t = document.createElementNS(g, "path");
                t.setAttribute("d", "M 7,7 L 17,17 M 17,7 L 7,17"), t.setAttribute("class", "huebee__close-button__x"), e.appendChild(t), e.addEventListener("click", this.closeIt), this.container.appendChild(e)
            }
        }, h.updateColors = function() {
            this.swatches = {}, this.colorGrid = {}, this.updateColorModer();
            var e = this.options.shades,
                t = this.options.saturations,
                n = this.options.hues,
                i = this.options.customColors;
            if (i && i.length) {
                var o = 0;
                i.forEach(function(e) {
                    var t = o % n,
                        i = Math.floor(o / n),
                        a = r(e);
                    a && (this.addSwatch(a, t, i), o++)
                }.bind(this))
            }
            for (var a = 0; a < t; a++) {
                var s = 1 - a / t,
                    u = e * a + this.satY;
                this.updateSaturationGrid(a, s, u)
            }
            for (a = 0; a < e + 2; a++) {
                var c = 1 - a / (e + 1),
                    l = this.colorModer(0, 0, c),
                    f = r(l);
                this.addSwatch(f, n + 1, a)
            }
        }, h.updateSaturationGrid = function(e, t, n) {
            for (var i = this.options.shades, o = this.options.hues, a = this.options.hue0, s = 0; s < i; s++)
                for (var u = 0; u < o; u++) {
                    var c = Math.round(360 * u / o + a) % 360,
                        l = 1 - (s + 1) / (i + 1),
                        f = this.colorModer(c, t, l),
                        d = r(f),
                        h = s + n;
                    this.addSwatch(d, u, h)
                }
        }, h.addSwatch = function(e, t, n) {
            this.swatches[t + "," + n] = e, this.colorGrid[e.color.toUpperCase()] = {
                x: t,
                y: n
            }
        };
        var m = {
            hsl: function(e, t, n) {
                return t = Math.round(100 * t), n = Math.round(100 * n), "hsl(" + e + ", " + t + "%, " + n + "%)"
            },
            hex: u,
            shortHex: function(e, t, n) {
                return d(u(e, t, n))
            }
        };
        h.updateColorModer = function() {
            this.colorModer = m[this.options.notation] || m.shortHex
        }, h.renderColors = function() {
            var e = 2 * this.gridSize;
            for (var t in this.swatches) {
                var n = this.swatches[t],
                    i = t.split(","),
                    o = i[0],
                    r = i[1];
                this.ctx.fillStyle = n.color, this.ctx.fillRect(o * e, r * e, e, e)
            }
        }, h.setAnchorColor = function() {
            this.isInputAnchor && this.setColor(this.anchor.value)
        };
        var y = document.documentElement;
        h.open = function() {
            if (!this.isOpen) {
                var e = this.anchor,
                    t = this.element;
                this.options.staticOpen || (t.style.left = e.offsetLeft + "px", t.style.top = e.offsetTop + e.offsetHeight + "px"), this.bindOpenEvents(!0), t.removeEventListener("transitionend", this.onElemTransitionend), e.parentNode.insertBefore(t, e.nextSibling);
                var n = getComputedStyle(t).transitionDuration;
                this.hasTransition = n && "none" != n && parseFloat(n), this.isOpen = !0, this.updateSizes(), this.renderColors(), this.setAnchorColor();
                t.offsetHeight;
                t.classList.remove("is-hidden")
            }
        }, h.bindOpenEvents = function(e) {
            if (!this.options.staticOpen) {
                var t = (e ? "add" : "remove") + "EventListener";
                y[t]("mousedown", this.outsideCloseIt), y[t]("touchstart", this.outsideCloseIt), document[t]("focusin", this.outsideCloseIt), document[t]("keydown", this.onDocKeydown), this.anchor[t]("blur", this.closeIt)
            }
        }, h.updateSizes = function() {
            var e = this.options.hues,
                t = this.options.shades,
                n = this.options.saturations;
            this.cursorBorder = parseInt(getComputedStyle(this.cursor).borderTopWidth, 10), this.gridSize = Math.round(this.cursor.offsetWidth - 2 * this.cursorBorder), this.canvasOffset = {
                x: this.canvas.offsetLeft,
                y: this.canvas.offsetTop
            };
            var i = Math.max(t * n + this.satY, t + 2),
                o = this.gridSize * (e + 2);
            this.canvas.width = 2 * o, this.canvas.style.width = o + "px", this.canvas.height = this.gridSize * i * 2
        }, h.outsideClose = function(e) {
            var t = this.anchor.contains(e.target),
                n = this.element.contains(e.target);
            t || n || this.close()
        };
        var x = {
            13: !0,
            27: !0
        };
        h.docKeydown = function(e) {
            x[e.keyCode] && this.close()
        };
        var b = "string" == typeof y.style.transform;
        h.close = function() {
            this.isOpen && (b && this.hasTransition ? this.element.addEventListener("transitionend", this.onElemTransitionend) : this.remove(), this.element.classList.add("is-hidden"), this.bindOpenEvents(!1), this.isOpen = !1)
        }, h.remove = function() {
            var e = this.element.parentNode;
            e.contains(this.element) && e.removeChild(this.element)
        }, h.elemTransitionend = function(e) {
            e.target == this.element && (this.element.removeEventListener("transitionend", this.onElemTransitionend), this.remove())
        }, h.inputInput = function() {
            this.setColor(this.anchor.value)
        }, h.canvasPointerDown = function(e, t) {
            e.preventDefault(), this.updateOffset(), this.canvasPointerChange(t)
        }, h.updateOffset = function() {
            var t = this.canvas.getBoundingClientRect();
            this.offset = {
                x: t.left + e.pageXOffset,
                y: t.top + e.pageYOffset
            }
        }, h.canvasPointerMove = function(e, t) {
            this.canvasPointerChange(t)
        }, h.canvasPointerChange = function(e) {
            var t = Math.round(e.pageX - this.offset.x),
                n = Math.round(e.pageY - this.offset.y),
                i = this.gridSize,
                o = Math.floor(t / i),
                r = Math.floor(n / i),
                a = this.swatches[o + "," + r];
            this.setSwatch(a)
        }, h.setColor = function(e) {
            var t = r(e);
            this.setSwatch(t)
        }, h.setSwatch = function(e) {
            var t = e && e.color;
            if (e) {
                var n = t == this.color;
                this.color = t, this.hue = e.hue, this.sat = e.sat, this.lum = e.lum;
                var i = this.lum - .15 * Math.cos((this.hue + 70) / 180 * Math.PI);
                this.isLight = i > .5;
                var o = this.colorGrid[t.toUpperCase()];
                this.updateCursor(o), this.setTexts(), this.setBackgrounds(), n || this.emitEvent("change", [t, e.hue, e.sat, e.lum])
            }
        }, h.setTexts = function() {
            if (this.setTextElems)
                for (var e = 0; e < this.setTextElems.length; e++) {
                    var t = this.setTextElems[e],
                        n = "INPUT" == t.nodeName ? "value" : "textContent";
                    t[n] = this.color
                }
        }, h.setBackgrounds = function() {
            if (this.setBGElems)
                for (var e = this.isLight ? "#222" : "white", t = 0; t < this.setBGElems.length; t++) {
                    var n = this.setBGElems[t];
                    n.style.backgroundColor = this.color, n.style.color = e
                }
        }, h.updateCursor = function(e) {
            if (this.isOpen) {
                var t = e ? "remove" : "add";
                if (this.cursor.classList[t]("is-hidden"), e) {
                    var n = this.gridSize,
                        i = this.canvasOffset,
                        o = this.cursorBorder;
                    this.cursor.style.left = e.x * n + i.x - o + "px", this.cursor.style.top = e.y * n + i.y - o + "px"
                }
            }
        };
        var w = e.console,
            C = document.readyState;
        "complete" == C || "interactive" == C ? o() : document.addEventListener("DOMContentLoaded", o), i.data = function(e) {
            e = s(e);
            var t = e && e.huebeeGUID;
            return t && v[t]
        };
        var E = document.createElement("canvas");
        E.width = E.height = 1;
        var T = E.getContext("2d");
        return i
    }), document.querySelector("#generate-from-image") && initializeConverter(), document.querySelector("#emoji") && (document.getElementById("download-ico").addEventListener("click", function() {
        favicon = new Canvas2Favicon(canvas), downloadURI(favicon.toIco([16, 32]), "favicon.ico")
    }), document.getElementById("download-png").addEventListener("click", function() {
        favicon = new Canvas2Favicon(canvas), downloadURI(favicon.toPng(), "favicon.png")
    }), previewMultipleSizes(), previewAsFavicon()), document.querySelector("#generate-from-text")) {
}
$(document).ready(function() {
    document.querySelector("#generate-from-text") && initializeIndex()
});
//# sourceMappingURL=/assets/source-maps/main.js.map
//# sourceURL=_assets/javascripts/main.js