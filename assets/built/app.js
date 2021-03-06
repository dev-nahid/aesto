!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (T, e) {
    "use strict";
    function g(e) {
        return null != e && e === e.window;
    }
    var t = [],
        n = Object.getPrototypeOf,
        s = t.slice,
        m = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        u = t.push,
        i = t.indexOf,
        r = {},
        o = r.toString,
        v = r.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        b = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        C = T.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function x(e, t, n) {
        var r,
            i,
            o = (n = n || C).createElement("script");
        if (((o.text = e), t)) for (r in c) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e;
    }
    var f = "3.5.1",
        _ = function (e, t) {
            return new _.fn.init(e, t);
        };
    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = h(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (_.fn = _.prototype = {
        jquery: f,
        constructor: _,
        length: 0,
        toArray: function () {
            return s.call(this);
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            e = _.merge(this.constructor(), e);
            return (e.prevObject = this), e;
        },
        each: function (e) {
            return _.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                _.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                _.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                _.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
    }),
        (_.extend = _.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o = arguments[0] || {},
                a = 1,
                s = arguments.length,
                u = !1;
            for ("boolean" == typeof o && ((u = o), (o = arguments[a] || {}), a++), "object" == typeof o || b(o) || (o = {}), a === s && ((o = this), a--); a < s; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        (n = e[t]),
                            "__proto__" !== t &&
                                o !== n &&
                                (u && n && (_.isPlainObject(n) || (r = Array.isArray(n)))
                                    ? ((i = o[t]), (i = r && !Array.isArray(i) ? [] : r || _.isPlainObject(i) ? i : {}), (r = !1), (o[t] = _.extend(u, i, n)))
                                    : void 0 !== n && (o[t] = n));
            return o;
        }),
        _.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                return !(!e || "[object Object]" !== o.call(e) || ((e = n(e)) && ("function" != typeof (e = v.call(e, "constructor") && e.constructor) || a.call(e) !== l)));
            },
            isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (d(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                t = t || [];
                return null != e && (d(Object(e)) ? _.merge(t, "string" == typeof e ? [e] : e) : u.call(t, e)), t;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return m(a);
            },
            guid: 1,
            support: y,
        }),
        "function" == typeof Symbol && (_.fn[Symbol.iterator] = t[Symbol.iterator]),
        _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            r["[object " + t + "]"] = t.toLowerCase();
        });
    var p = (function (n) {
        function f(e, t) {
            return (e = "0x" + e.slice(1) - 65536), t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320));
        }
        function r() {
            T();
        }
        var e,
            d,
            x,
            o,
            i,
            p,
            h,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            _,
            m,
            s,
            c,
            v,
            E = "sizzle" + +new Date(),
            y = n.document,
            k = 0,
            b = 0,
            A = ue(),
            S = ue(),
            N = ue(),
            j = ue(),
            D = function (e, t) {
                return e === t && (l = !0), 0;
            },
            L = {}.hasOwnProperty,
            t = [],
            I = t.pop,
            q = t.push,
            O = t.push,
            H = t.slice,
            M = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            W = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            z = "\\[" + R + "*(" + W + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + R + "*\\]",
            F = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            $ = new RegExp(R + "+", "g"),
            B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            X = new RegExp("^" + R + "*," + R + "*"),
            U = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            V = new RegExp(R + "|>"),
            G = new RegExp(F),
            Z = new RegExp("^" + W + "$"),
            Y = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i"),
            },
            Q = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            re = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
                return t ? ("\0" === e ? "???" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            ae = ye(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            O.apply((t = H.call(y.childNodes)), y.childNodes), t[y.childNodes.length].nodeType;
        } catch (e) {
            O = {
                apply: t.length
                    ? function (e, t) {
                          q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                      },
            };
        }
        function se(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (((n = n || []), "string" != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))) return n;
            if (!r && (T(t), (t = t || C), _)) {
                if (11 !== f && (s = te.exec(e)))
                    if ((l = s[1])) {
                        if (9 === f) {
                            if (!(o = t.getElementById(l))) return n;
                            if (o.id === l) return n.push(o), n;
                        } else if (c && (o = c.getElementById(l)) && v(t, o) && o.id === l) return n.push(o), n;
                    } else {
                        if (s[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((l = s[3]) && d.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(l)), n;
                    }
                if (d.qsa && !j[e + " "] && (!m || !m.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                    if (((l = e), (c = t), 1 === f && (V.test(e) || U.test(e)))) {
                        for (((c = (ne.test(e) && ge(t.parentNode)) || t) === t && d.scope) || ((a = t.getAttribute("id")) ? (a = a.replace(ie, oe)) : t.setAttribute("id", (a = E))), i = (u = p(e)).length; i--; )
                            u[i] = (a ? "#" + a : ":scope") + " " + ve(u[i]);
                        l = u.join(",");
                    }
                    try {
                        return O.apply(n, c.querySelectorAll(l)), n;
                    } catch (t) {
                        j(e, !0);
                    } finally {
                        a === E && t.removeAttribute("id");
                    }
                }
            }
            return g(e.replace(B, "$1"), t, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], (e[t + " "] = n);
            };
        }
        function le(e) {
            return (e[E] = !0), e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) x.attrHandle[n[r]] = t;
        }
        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function pe(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function he(a) {
            return le(function (o) {
                return (
                    (o = +o),
                    le(function (e, t) {
                        for (var n, r = a([], e.length, o), i = r.length; i--; ) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
        (i = se.isXML = function (e) {
            var t = e.namespaceURI,
                e = (e.ownerDocument || e).documentElement;
            return !Q.test(t || (e && e.nodeName) || "HTML");
        }),
        (T = se.setDocument = function (e) {
            var t,
                e = e ? e.ownerDocument || e : y;
            return (
                e != C &&
                    9 === e.nodeType &&
                    e.documentElement &&
                    ((a = (C = e).documentElement),
                    (_ = !i(C)),
                    y != C && (t = C.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)),
                    (d.scope = ce(function (e) {
                        return a.appendChild(e).appendChild(C.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (d.attributes = ce(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (d.getElementsByTagName = ce(function (e) {
                        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (d.getElementsByClassName = ee.test(C.getElementsByClassName)),
                    (d.getById = ce(function (e) {
                        return (a.appendChild(e).id = E), !C.getElementsByName || !C.getElementsByName(E).length;
                    })),
                    d.getById
                        ? ((x.filter.ID = function (e) {
                              var t = e.replace(re, f);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (x.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && _) {
                                  e = t.getElementById(e);
                                  return e ? [e] : [];
                              }
                          }))
                        : ((x.filter.ID = function (e) {
                              var t = e.replace(re, f);
                              return function (e) {
                                  e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return e && e.value === t;
                              };
                          }),
                          (x.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && _) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (x.find.TAG = d.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  r = [],
                                  i = 0,
                                  o = t.getElementsByTagName(e);
                              if ("*" !== e) return o;
                              for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                              return r;
                          }),
                    (x.find.CLASS =
                        d.getElementsByClassName &&
                        function (e, t) {
                            if (void 0 !== t.getElementsByClassName && _) return t.getElementsByClassName(e);
                        }),
                    (s = []),
                    (m = []),
                    (d.qsa = ee.test(C.querySelectorAll)) &&
                        (ce(function (e) {
                            var t;
                            (a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + P + ")"),
                                e.querySelectorAll("[id~=" + E + "-]").length || m.push("~="),
                                (t = C.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length || m.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                                e.querySelectorAll(":checked").length || m.push(":checked"),
                                e.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                m.push("[\\r\\n\\f]");
                        }),
                        ce(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                (a.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                m.push(",.*:");
                        })),
                    (d.matchesSelector = ee.test((c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector))) &&
                        ce(function (e) {
                            (d.disconnectedMatch = c.call(e, "*")), c.call(e, "[s!='']:x"), s.push("!=", F);
                        }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (s = s.length && new RegExp(s.join("|"))),
                    (t = ee.test(a.compareDocumentPosition)),
                    (v =
                        t || ee.test(a.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      t = t && t.parentNode;
                                  return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
                              }
                            : function (e, t) {
                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                              }),
                    (D = t
                        ? function (e, t) {
                              if (e === t) return (l = !0), 0;
                              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  n ||
                                  (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!d.sortDetached && t.compareDocumentPosition(e) === n)
                                      ? e == C || (e.ownerDocument == y && v(y, e))
                                          ? -1
                                          : t == C || (t.ownerDocument == y && v(y, t))
                                          ? 1
                                          : u
                                          ? M(u, e) - M(u, t)
                                          : 0
                                      : 4 & n
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (l = !0), 0;
                              var n,
                                  r = 0,
                                  i = e.parentNode,
                                  o = t.parentNode,
                                  a = [e],
                                  s = [t];
                              if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? M(u, e) - M(u, t) : 0;
                              if (i === o) return de(e, t);
                              for (n = e; (n = n.parentNode); ) a.unshift(n);
                              for (n = t; (n = n.parentNode); ) s.unshift(n);
                              for (; a[r] === s[r]; ) r++;
                              return r ? de(a[r], s[r]) : a[r] == y ? -1 : s[r] == y ? 1 : 0;
                          })),
                C
            );
        }),
        (se.matches = function (e, t) {
            return se(e, null, null, t);
        }),
        (se.matchesSelector = function (e, t) {
            if ((T(e), d.matchesSelector && _ && !j[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {
                    j(t, !0);
                }
            return 0 < se(t, C, null, [e]).length;
        }),
        (se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), v(e, t);
        }),
        (se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = x.attrHandle[t.toLowerCase()],
                n = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== n ? n : d.attributes || !_ ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
        }),
        (se.escape = function (e) {
            return (e + "").replace(ie, oe);
        }),
        (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (se.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (((l = !d.detectDuplicates), (u = !d.sortStable && e.slice(0)), e.sort(D), l)) {
                for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                for (; r--; ) e.splice(n[r], 1);
            }
            return (u = null), e;
        }),
        (o = se.getText = function (e) {
            var t,
                n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += o(t);
            return n;
        }),
        ((x = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: Y,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(re, f)), (e[3] = (e[3] || e[4] || e[5] || "").replace(re, f)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && G.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(re, f).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = A[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                            A(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (t, n, r) {
                    return function (e) {
                        e = se.attr(e, t);
                        return null == e
                            ? "!=" === n
                            : !n ||
                                  ((e += ""),
                                  "=" === n
                                      ? e === r
                                      : "!=" === n
                                      ? e !== r
                                      : "^=" === n
                                      ? r && 0 === e.indexOf(r)
                                      : "*=" === n
                                      ? r && -1 < e.indexOf(r)
                                      : "$=" === n
                                      ? r && e.slice(-r.length) === r
                                      : "~=" === n
                                      ? -1 < (" " + e.replace($, " ") + " ").indexOf(r)
                                      : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function (h, e, t, g, m) {
                    var v = "nth" !== h.slice(0, 3),
                        y = "last" !== h.slice(-4),
                        b = "of-type" === e;
                    return 1 === g && 0 === m
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var r,
                                  i,
                                  o,
                                  a,
                                  s,
                                  u,
                                  l = v != y ? "nextSibling" : "previousSibling",
                                  c = e.parentNode,
                                  f = b && e.nodeName.toLowerCase(),
                                  d = !n && !b,
                                  p = !1;
                              if (c) {
                                  if (v) {
                                      for (; l; ) {
                                          for (a = e; (a = a[l]); ) if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                          u = l = "only" === h && !u && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((u = [y ? c.firstChild : c.lastChild]), y && d)) {
                                      for (
                                          p = (s = (r = (i = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                          (a = (++s && a && a[l]) || (p = s = 0) || u.pop());

                                      )
                                          if (1 === a.nodeType && ++p && a === e) {
                                              i[h] = [k, s, p];
                                              break;
                                          }
                                  } else if (!1 === (p = d ? (s = (r = (i = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) : p))
                                      for (
                                          ;
                                          (a = (++s && a && a[l]) || (p = s = 0) || u.pop()) &&
                                          ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, p]), a !== e));

                                      );
                                  return (p -= m) === g || (p % g == 0 && 0 <= p / g);
                              }
                          };
                },
                PSEUDO: function (e, o) {
                    var t,
                        a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[E]
                        ? a(o)
                        : 1 < a.length
                        ? ((t = [e, e, "", o]),
                          x.setFilters.hasOwnProperty(e.toLowerCase())
                              ? le(function (e, t) {
                                    for (var n, r = a(e, o), i = r.length; i--; ) e[(n = M(e, r[i]))] = !(t[n] = r[i]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: le(function (e) {
                    var r = [],
                        i = [],
                        s = h(e.replace(B, "$1"));
                    return s[E]
                        ? le(function (e, t, n, r) {
                              for (var i, o = s(e, null, r, []), a = e.length; a--; ) (i = o[a]) && (e[a] = !(t[a] = i));
                          })
                        : function (e, t, n) {
                              return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                          };
                }),
                has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length;
                    };
                }),
                contains: le(function (t) {
                    return (
                        (t = t.replace(re, f)),
                        function (e) {
                            return -1 < (e.textContent || o(e)).indexOf(t);
                        }
                    );
                }),
                lang: le(function (n) {
                    return (
                        Z.test(n || "") || se.error("unsupported lang: " + n),
                        (n = n.replace(re, f).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = _ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === a;
                },
                focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !x.pseudos.empty(e);
                },
                header: function (e) {
                    return K.test(e.nodeName);
                },
                input: function (e) {
                    return J.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: he(function () {
                    return [0];
                }),
                last: he(function (e, t) {
                    return [t - 1];
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = x.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            x.pseudos[e] = (function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                };
            })(e);
        for (e in { submit: !0, reset: !0 })
            x.pseudos[e] = (function (n) {
                return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n;
                };
            })(e);
        function me() {}
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function ye(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = b++;
            return e.first
                ? function (e, t, n) {
                      for (; (e = e[s]); ) if (1 === e.nodeType || c) return a(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var r,
                          i,
                          o = [k, f];
                      if (n) {
                          for (; (e = e[s]); ) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
                      } else
                          for (; (e = e[s]); )
                              if (1 === e.nodeType || c)
                                  if (((r = (i = e[E] || (e[E] = {}))[e.uniqueID] || (i[e.uniqueID] = {})), u && u === e.nodeName.toLowerCase())) e = e[s] || e;
                                  else {
                                      if ((i = r[l]) && i[0] === k && i[1] === f) return (o[2] = i[2]);
                                      if (((r[l] = o)[2] = a(e, t, n))) return !0;
                                  }
                      return !1;
                  };
        }
        function be(i) {
            return 1 < i.length
                ? function (e, t, n) {
                      for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function xe(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function we(e) {
            for (
                var r,
                    t,
                    n,
                    i = e.length,
                    o = x.relative[e[0].type],
                    a = o || x.relative[" "],
                    s = o ? 1 : 0,
                    u = ye(
                        function (e) {
                            return e === r;
                        },
                        a,
                        !0
                    ),
                    l = ye(
                        function (e) {
                            return -1 < M(r, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            n = (!o && (n || t !== w)) || ((r = t).nodeType ? u : l)(e, t, n);
                            return (r = null), n;
                        },
                    ];
                s < i;
                s++
            )
                if ((t = x.relative[e[s].type])) c = [ye(be(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[E]) {
                        for (n = ++s; n < i && !x.relative[e[n].type]; n++);
                        return (function e(p, h, g, m, v, t) {
                            return (
                                m && !m[E] && (m = e(m)),
                                v && !v[E] && (v = e(v, t)),
                                le(function (e, t, n, r) {
                                    var i,
                                        o,
                                        a,
                                        s = [],
                                        u = [],
                                        l = t.length,
                                        c =
                                            e ||
                                            (function (e, t, n) {
                                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                                return n;
                                            })(h || "*", n.nodeType ? [n] : n, []),
                                        f = !p || (!e && h) ? c : xe(c, s, p, n, r),
                                        d = g ? (v || (e ? p : l || m) ? [] : t) : f;
                                    if ((g && g(f, d, n, r), m)) for (i = xe(d, u), m(i, [], n, r), o = i.length; o--; ) (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
                                    if (e) {
                                        if (v || p) {
                                            if (v) {
                                                for (i = [], o = d.length; o--; ) (a = d[o]) && i.push((f[o] = a));
                                                v(null, (d = []), i, r);
                                            }
                                            for (o = d.length; o--; ) (a = d[o]) && -1 < (i = v ? M(e, a) : s[o]) && (e[i] = !(t[i] = a));
                                        }
                                    } else (d = xe(d === t ? d.splice(l, d.length) : d)), v ? v(null, t, d, r) : O.apply(t, d);
                                })
                            );
                        })(1 < s && be(c), 1 < s && ve(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && we(e.slice(s, n)), n < i && we((e = e.slice(n))), n < i && ve(e));
                    }
                    c.push(t);
                }
            return be(c);
        }
        return (
            (me.prototype = x.filters = x.pseudos),
            (x.setFilters = new me()),
            (p = se.tokenize = function (e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = S[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], u = x.preFilter; a; ) {
                    for (o in ((n && !(r = X.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                    (n = !1),
                    (r = U.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(B, " ") }), (a = a.slice(n.length))),
                    x.filter))
                        !(r = Y[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? se.error(e) : S(e, s).slice(0);
            }),
            (h = se.compile = function (e, t) {
                var n,
                    m,
                    v,
                    y,
                    b,
                    r,
                    i = [],
                    o = [],
                    a = N[e + " "];
                if (!a) {
                    for (n = (t = t || p(e)).length; n--; ) ((a = we(t[n]))[E] ? i : o).push(a);
                    (a = N(
                        e,
                        ((y = 0 < (v = i).length),
                        (b = 0 < (m = o).length),
                        (r = function (e, t, n, r, i) {
                            var o,
                                a,
                                s,
                                u = 0,
                                l = "0",
                                c = e && [],
                                f = [],
                                d = w,
                                p = e || (b && x.find.TAG("*", i)),
                                h = (k += null == d ? 1 : Math.random() || 0.1),
                                g = p.length;
                            for (i && (w = t == C || t || i); l !== g && null != (o = p[l]); l++) {
                                if (b && o) {
                                    for (a = 0, t || o.ownerDocument == C || (T(o), (n = !_)); (s = m[a++]); )
                                        if (s(o, t || C, n)) {
                                            r.push(o);
                                            break;
                                        }
                                    i && (k = h);
                                }
                                y && ((o = !s && o) && u--, e && c.push(o));
                            }
                            if (((u += l), y && l !== u)) {
                                for (a = 0; (s = v[a++]); ) s(c, f, t, n);
                                if (e) {
                                    if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = I.call(r));
                                    f = xe(f);
                                }
                                O.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r);
                            }
                            return i && ((k = h), (w = d)), c;
                        }),
                        y ? le(r) : r)
                    )).selector = e;
                }
                return a;
            }),
            (g = se.select = function (e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = "function" == typeof e && e,
                    c = !r && p((e = l.selector || e));
                if (((n = n || []), 1 === c.length)) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && _ && x.relative[o[1].type]) {
                        if (!(t = (x.find.ID(a.matches[0].replace(re, f), t) || [])[0])) return n;
                        l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                    }
                    for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && ((a = o[i]), !x.relative[(s = a.type)]); )
                        if ((u = x.find[s]) && (r = u(a.matches[0].replace(re, f), (ne.test(o[0].type) && ge(t.parentNode)) || t))) {
                            if ((o.splice(i, 1), !(e = r.length && ve(o)))) return O.apply(n, r), n;
                            break;
                        }
                }
                return (l || h(e, c))(r, t, !_, n, !t || (ne.test(e) && ge(t.parentNode)) || t), n;
            }),
            (d.sortStable = E.split("").sort(D).join("") === E),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function (e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
            })),
            ce(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                fe("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (d.attributes &&
                ce(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                fe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ce(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                fe(P, function (e, t, n) {
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null;
                }),
            se
        );
    })(T);
    (_.find = p), (_.expr = p.selectors), (_.expr[":"] = _.expr.pseudos), (_.uniqueSort = _.unique = p.uniqueSort), (_.text = p.getText), (_.isXMLDoc = p.isXML), (_.contains = p.contains), (_.escapeSelector = p.escape);
    function w(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && _(e).is(n)) break;
                r.push(e);
            }
        return r;
    }
    function E(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var k = _.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function N(e, n, r) {
        return b(n)
            ? _.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? _.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : "string" != typeof n
            ? _.grep(e, function (e) {
                  return -1 < i.call(n, e) !== r;
              })
            : _.filter(n, e, r);
    }
    (_.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? _.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : _.find.matches(
                      e,
                      _.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        _.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        _(e).filter(function () {
                            for (t = 0; t < r; t++) if (_.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) _.find(e, i[t], n);
                return 1 < r ? _.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(N(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(N(this, e || [], !0));
            },
            is: function (e) {
                return !!N(this, "string" == typeof e && k.test(e) ? _(e) : e || [], !1).length;
            },
        });
    var j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function (e, t, n) {
        if (!e) return this;
        if (((n = n || D), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : b(e) ? (void 0 !== n.ready ? n.ready(e) : e(_)) : _.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || (!r[1] && t)) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (r[1]) {
            if (((t = t instanceof _ ? t[0] : t), _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), S.test(r[1]) && _.isPlainObject(t))) for (var r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
        }
        return (e = C.getElementById(r[2])) && ((this[0] = e), (this.length = 1)), this;
    }).prototype = _.fn;
    var D = _(C),
        L = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };
    function q(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    _.fn.extend({
        has: function (e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && _(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? _.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? i.call(_(e), this[0]) : i.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        _.each(
            {
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                    return w(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return w(e, "parentNode", n);
                },
                next: function (e) {
                    return q(e, "nextSibling");
                },
                prev: function (e) {
                    return q(e, "previousSibling");
                },
                nextAll: function (e) {
                    return w(e, "nextSibling");
                },
                prevAll: function (e) {
                    return w(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return w(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return w(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return E((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return E(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), _.merge([], e.childNodes));
                },
            },
            function (r, i) {
                _.fn[r] = function (e, t) {
                    var n = _.map(this, i, e);
                    return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = _.filter(t, n)), 1 < this.length && (I[r] || _.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var O = /[^\x20\t\r\n\f]+/g;
    function H(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function P(e, t, n, r) {
        var i;
        try {
            e && b((i = e.promise)) ? i.call(e).done(t).fail(n) : e && b((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (_.Callbacks = function (r) {
        var n;
        r =
            "string" == typeof r
                ? ((n = {}),
                  _.each(r.match(O) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : _.extend({}, r);
        function i() {
            for (a = a || r.once, t = o = !0; u.length; l = -1) for (e = u.shift(); ++l < s.length; ) !1 === s[l].apply(e[0], e[1]) && r.stopOnFalse && ((l = s.length), (e = !1));
            r.memory || (e = !1), (o = !1), a && (s = e ? [] : "");
        }
        var o,
            e,
            t,
            a,
            s = [],
            u = [],
            l = -1,
            c = {
                add: function () {
                    return (
                        s &&
                            (e && !o && ((l = s.length - 1), u.push(e)),
                            (function n(e) {
                                _.each(e, function (e, t) {
                                    b(t) ? (r.unique && c.has(t)) || s.push(t) : t && t.length && "string" !== h(t) && n(t);
                                });
                            })(arguments),
                            e && !o && i()),
                        this
                    );
                },
                remove: function () {
                    return (
                        _.each(arguments, function (e, t) {
                            for (var n; -1 < (n = _.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < _.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return (s = s && []), this;
                },
                disable: function () {
                    return (a = u = []), (s = e = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), e || o || (s = e = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), o || i()), this;
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!t;
                },
            };
        return c;
    }),
        _.extend({
            Deferred: function (e) {
                var o = [
                        ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                        ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return _.Deferred(function (r) {
                                _.each(o, function (e, t) {
                                    var n = b(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                    (i = null);
                            }).promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                b(t)
                                                    ? s
                                                        ? t.call(e, l(u, o, H, s), l(u, o, M, s))
                                                        : (u++, t.call(e, l(u, o, H, s), l(u, o, M, s), l(u, o, H, o.notifyWith)))
                                                    : (a !== H && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                                        }
                                    }
                                    var n = this,
                                        r = arguments,
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                                  }
                                              };
                                    i ? t() : (_.Deferred.getStackHook && (t.stackTrace = _.Deferred.getStackHook()), T.setTimeout(t));
                                };
                            }
                            return _.Deferred(function (e) {
                                o[0][3].add(l(0, e, b(r) ? r : H, e.notifyWith)), o[1][3].add(l(0, e, b(t) ? t : H)), o[2][3].add(l(0, e, b(n) ? n : M));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? _.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    _.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        (i[t] = this), (o[t] = 1 < arguments.length ? s.call(arguments) : e), --n || a.resolveWith(i, o);
                    };
                }
                var n = arguments.length,
                    r = n,
                    i = Array(r),
                    o = s.call(arguments),
                    a = _.Deferred();
                if (n <= 1 && (P(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || b(o[r] && o[r].then))) return a.then();
                for (; r--; ) P(o[r], t(r), a.reject);
                return a.promise();
            },
        });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (_.Deferred.exceptionHook = function (e, t) {
        T.console && T.console.warn && e && R.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
        (_.readyException = function (e) {
            T.setTimeout(function () {
                throw e;
            });
        });
    var W = _.Deferred();
    function z() {
        C.removeEventListener("DOMContentLoaded", z), T.removeEventListener("load", z), _.ready();
    }
    (_.fn.ready = function (e) {
        return (
            W.then(e).catch(function (e) {
                _.readyException(e);
            }),
            this
        );
    }),
        _.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --_.readyWait : _.isReady) || ((_.isReady = !0) !== e && 0 < --_.readyWait) || W.resolveWith(C, [_]);
            },
        }),
        (_.ready.then = W.then),
        "complete" === C.readyState || ("loading" !== C.readyState && !C.documentElement.doScroll) ? T.setTimeout(_.ready) : (C.addEventListener("DOMContentLoaded", z), T.addEventListener("load", z));
    var F = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === h(n)) for (s in ((i = !0), n)) F(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                b(r) || (a = !0),
                (t = l
                    ? a
                        ? (t.call(e, r), null)
                        : ((l = t),
                          function (e, t, n) {
                              return l.call(_(e), n);
                          })
                    : t))
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        $ = /^-ms-/,
        B = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase();
    }
    function U(e) {
        return e.replace($, "ms-").replace(B, X);
    }
    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function G() {
        this.expando = _.expando + G.uid++;
    }
    (G.uid = 1),
        (G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[U(t)] = n;
                else for (r in t) i[U(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(O) || []).length;
                        for (; n--; ) delete r[t[n]];
                    }
                    (void 0 !== t && !_.isEmptyObject(r)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !_.isEmptyObject(e);
            },
        });
    var Z = new G(),
        Y = new G(),
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    function K(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : Q.test(i) ? JSON.parse(i) : i));
                } catch (e) {}
                Y.set(e, t, n);
            } else n = void 0;
        return n;
    }
    _.extend({
        hasData: function (e) {
            return Y.hasData(e) || Z.hasData(e);
        },
        data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        removeData: function (e, t) {
            Y.remove(e, t);
        },
        _data: function (e, t, n) {
            return Z.access(e, t, n);
        },
        _removeData: function (e, t) {
            Z.remove(e, t);
        },
    }),
        _.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n
                        ? this.each(function () {
                              Y.set(this, n);
                          })
                        : F(
                              this,
                              function (e) {
                                  var t;
                                  return o && void 0 === e
                                      ? void 0 !== (t = Y.get(o, n)) || void 0 !== (t = K(o, n))
                                          ? t
                                          : void 0
                                      : void this.each(function () {
                                            Y.set(this, n, e);
                                        });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (this.length && ((i = Y.get(o)), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--; ) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = U(r.slice(5))), K(o, r, i[r]));
                    Z.set(o, "hasDataAttrs", !0);
                }
                return i;
            },
            removeData: function (e) {
                return this.each(function () {
                    Y.remove(this, e);
                });
            },
        }),
        _.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (r = Z.get(e, (t = (t || "fx") + "queue"))), n && (!r || Array.isArray(n) ? (r = Z.access(e, t, _.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                var n = _.queue(e, (t = t || "fx")),
                    r = n.length,
                    i = n.shift(),
                    o = _._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                _.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Z.get(e, n) ||
                    Z.access(e, n, {
                        empty: _.Callbacks("once memory").add(function () {
                            Z.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        _.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? _.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = _.queue(this, t, n);
                              _._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && _.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    _.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                function n() {
                    --i || o.resolveWith(a, [a]);
                }
                var r,
                    i = 1,
                    o = _.Deferred(),
                    a = this,
                    s = this.length;
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (r = Z.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
                return n(), o.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = C.documentElement,
        ie = function (e) {
            return _.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    re.getRootNode &&
        (ie = function (e) {
            return _.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
        });
    function ae(e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === _.css(e, "display"));
    }
    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return _.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (_.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (_.cssNumber[t] || ("px" !== l && +u)) && te.exec(_.css(e, t));
        if (c && c[3] !== l) {
            for (l = l || c[3], c = +(u /= 2) || 1; a--; ) _.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            _.style(e, t, (c *= 2) + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u = [], l = 0, c = e.length; l < c; l++)
            (r = e[l]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n && ((u[l] = Z.get(r, "display") || null), u[l] || (r.style.display = "")),
                      "" === r.style.display &&
                          ae(r) &&
                          (u[l] =
                              ((s = o = i = void 0),
                              (o = r.ownerDocument),
                              (a = r.nodeName),
                              (s = ue[a]) || ((i = o.body.appendChild(o.createElement(a))), (s = _.css(i, "display")), i.parentNode.removeChild(i), (ue[a] = s = "none" === s ? "block" : s)))))
                    : "none" !== n && ((u[l] = "none"), Z.set(r, "display", n)));
        for (l = 0; l < c; l++) null != u[l] && (e[l].style.display = u[l]);
        return e;
    }
    _.fn.extend({
        show: function () {
            return le(this, !0);
        },
        hide: function () {
            return le(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? _(this).show() : _(this).hide();
                  });
        },
    });
    var ce = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i,
        f = C.createDocumentFragment().appendChild(C.createElement("div"));
    (p = C.createElement("input")).setAttribute("type", "radio"),
        p.setAttribute("checked", "checked"),
        p.setAttribute("name", "t"),
        f.appendChild(p),
        (y.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (f.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!f.cloneNode(!0).lastChild.defaultValue),
        (f.innerHTML = "<option></option>"),
        (y.option = !!f.lastChild);
    var pe = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function he(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || (t && A(e, t)) ? _.merge([e], n) : n;
    }
    function ge(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
    }
    (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead), (pe.th = pe.td), y.option || (pe.optgroup = pe.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function ve(e, t, n, r, i) {
        for (var o, a, s, u, l, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === h(o)) _.merge(f, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    for (a = a || c.appendChild(t.createElement("div")), s = (fe.exec(o) || ["", ""])[1].toLowerCase(), s = pe[s] || pe._default, a.innerHTML = s[1] + _.htmlPrefilter(o) + s[2], l = s[0]; l--; ) a = a.lastChild;
                    _.merge(f, a.childNodes), ((a = c.firstChild).textContent = "");
                } else f.push(t.createTextNode(o));
        for (c.textContent = "", d = 0; (o = f[d++]); )
            if (r && -1 < _.inArray(o, r)) i && i.push(o);
            else if (((u = ie(o)), (a = he(c.appendChild(o), "script")), u && ge(a), n)) for (l = 0; (o = a[l++]); ) de.test(o.type || "") && n.push(o);
        return c;
    }
    var ye = /^key/,
        be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0;
    }
    function Te() {
        return !1;
    }
    function Ce(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return C.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function _e(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) _e(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Te;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return _().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = _.guid++))),
            e.each(function () {
                _.event.add(this, t, i, r, n);
            })
        );
    }
    function Ee(e, i, o) {
        o
            ? (Z.set(e, i, !1),
              _.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          r = Z.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length) (_.event.special[i] || {}).delegateType && e.stopPropagation();
                          else if (((r = s.call(arguments)), Z.set(this, i, r), (t = o(this, i)), this[i](), r !== (n = Z.get(this, i)) || t ? Z.set(this, i, !1) : (n = {}), r !== n))
                              return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                      } else r.length && (Z.set(this, i, { value: _.event.trigger(_.extend(r[0], _.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Z.get(e, i) && _.event.add(e, i, we);
    }
    (_.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h = Z.get(t);
            if (V(t))
                for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                        i && _.find.matchesSelector(re, i),
                        n.guid || (n.guid = _.guid++),
                        (s = h.events) || (s = h.events = Object.create(null)),
                        (a = h.handle) ||
                            (a = h.handle = function (e) {
                                return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0;
                            }),
                        u = (e = (e || "").match(O) || [""]).length;
                    u--;

                )
                    (f = p = (l = xe.exec(e[u]) || [])[1]),
                        (d = (l[2] || "").split(".").sort()),
                        f &&
                            ((c = _.event.special[f] || {}),
                            (f = (i ? c.delegateType : c.bindType) || f),
                            (c = _.event.special[f] || {}),
                            (l = _.extend({ type: f, origType: p, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && _.expr.match.needsContext.test(i), namespace: d.join(".") }, o)),
                            (p = s[f]) || (((p = s[f] = []).delegateCount = 0), (c.setup && !1 !== c.setup.call(t, r, d, a)) || (t.addEventListener && t.addEventListener(f, a))),
                            c.add && (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                            (_.event.global[f] = !0));
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                m = Z.hasData(e) && Z.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(O) || [""]).length; l--; )
                    if (((p = g = (s = xe.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), p)) {
                        for (f = _.event.special[p] || {}, d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; )
                            (c = d[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) || _.removeEvent(e, p, m.handle), delete u[p]);
                    } else for (p in u) _.event.remove(e, p + t[l], n, r, !0);
                _.isEmptyObject(u) && Z.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a = new Array(arguments.length),
                s = _.event.fix(e),
                u = (Z.get(this, "events") || Object.create(null))[s.type] || [],
                e = _.event.special[s.type] || {};
            for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (((s.delegateTarget = this), !e.preDispatch || !1 !== e.preDispatch.call(this, s))) {
                for (o = _.event.handlers.call(this, s, u), t = 0; (r = o[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        (s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace)) ||
                            ((s.handleObj = i), (s.data = i.data), void 0 !== (i = ((_.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < _(i, this).index(l) : _.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (t, e) {
            Object.defineProperty(_.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[_.expando] ? e : new _.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    e = this || e;
                    return ce.test(e.type) && e.click && A(e, "input") && Ee(e, "click", we), !1;
                },
                trigger: function (e) {
                    e = this || e;
                    return ce.test(e.type) && e.click && A(e, "input") && Ee(e, "click"), !0;
                },
                _default: function (e) {
                    e = e.target;
                    return (ce.test(e.type) && e.click && A(e, "input") && Z.get(e, "click")) || A(e, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (_.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (_.Event = function (e, t) {
            if (!(this instanceof _.Event)) return new _.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? we : Te),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && _.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[_.expando] = !0);
        }),
        (_.Event.prototype = {
            constructor: _.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = we), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = we), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = we), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        _.each(
            {
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
                char: !0,
                code: !0,
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
                which: function (e) {
                    var t = e.button;
                    return null == e.which && ye.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && be.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            _.event.addProp
        ),
        _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            _.event.special[e] = {
                setup: function () {
                    return Ee(this, e, Ce), !1;
                },
                trigger: function () {
                    return Ee(this, e), !0;
                },
                delegateType: t,
            };
        }),
        _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
            _.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        r = e.handleObj;
                    return (n && (n === this || _.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
                },
            };
        }),
        _.fn.extend({
            on: function (e, t, n, r) {
                return _e(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return _e(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                        !1 === n && (n = Te),
                        this.each(function () {
                            _.event.remove(this, e, n, t);
                        })
                    );
                for (i in e) this.off(i, t, e[i]);
                return this;
            },
        });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ne(e, t) {
        return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0]) || e;
    }
    function je(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function De(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Le(e, t) {
        var n, r, i, o;
        if (1 === t.nodeType) {
            if (Z.hasData(e) && (o = Z.get(e).events)) for (i in (Z.remove(t, "handle events"), o)) for (n = 0, r = o[i].length; n < r; n++) _.event.add(t, i, o[i][n]);
            Y.hasData(e) && ((e = Y.access(e)), (e = _.extend({}, e)), Y.set(t, e));
        }
    }
    function Ie(n, r, i, o) {
        r = m(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = b(p);
        if (h || (1 < f && "string" == typeof p && !y.checkClone && Ae.test(p)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = p.call(this, e, t.html())), Ie(t, r, i, o);
            });
        if (f && ((t = (e = ve(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = _.map(he(e, "script"), je)).length; c < f; c++) (u = e), c !== d && ((u = _.clone(u, !0, !0)), s && _.merge(a, he(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, _.map(a, De), c = 0; c < s; c++)
                    (u = a[c]),
                        de.test(u.type || "") &&
                            !Z.access(u, "globalEval") &&
                            _.contains(l, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && !u.noModule && _._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : x(u.textContent.replace(Se, ""), u, l));
        }
        return n;
    }
    function qe(e, t, n) {
        for (var r, i = t ? _.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || _.cleanData(he(r)), r.parentNode && (n && ie(r) && ge(he(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    _.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || _.isXMLDoc(e)))
                for (a = he(c), r = 0, i = (o = he(e)).length; r < i; r++)
                    (s = o[r]), "input" === (l = (u = a[r]).nodeName.toLowerCase()) && ce.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
            if (t)
                if (n) for (o = o || he(e), a = a || he(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = he(c, "script")).length && ge(a, !f && he(e, "script")), c;
        },
        cleanData: function (e) {
            for (var t, n, r, i = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if ((t = n[Z.expando])) {
                        if (t.events) for (r in t.events) i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                        n[Z.expando] = void 0;
                    }
                    n[Y.expando] && (n[Y.expando] = void 0);
                }
        },
    }),
        _.fn.extend({
            detach: function (e) {
                return qe(this, e, !0);
            },
            remove: function (e) {
                return qe(this, e);
            },
            text: function (e) {
                return F(
                    this,
                    function (e) {
                        return void 0 === e
                            ? _.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Ie(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ne(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Ie(this, arguments, function (e) {
                    var t;
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = Ne(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function () {
                return Ie(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Ie(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(he(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return _.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return F(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ke.test(e) && !pe[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = _.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(he(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Ie(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        _.inArray(this, n) < 0 && (_.cleanData(he(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
            _.fn[e] = function (e) {
                for (var t, n = [], r = _(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), _(r[o])[a](t), u.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    function Oe(e, t, n) {
        var r,
            i = {};
        for (r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
        for (r in ((n = n.call(e)), t)) e.style[r] = i[r];
        return n;
    }
    var He,
        Me,
        Pe,
        Re,
        We,
        ze,
        Fe,
        $e,
        Be = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Xe = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t = !t || !t.opener ? T : t).getComputedStyle(e);
        },
        Ue = new RegExp(ne.join("|"), "i");
    function Ve(e, t, n) {
        var r,
            i,
            o = e.style;
        return (
            (n = n || Xe(e)) &&
                ("" !== (i = n.getPropertyValue(t) || n[t]) || ie(e) || (i = _.style(e, t)),
                !y.pixelBoxStyles() && Be.test(i) && Ue.test(t) && ((r = o.width), (e = o.minWidth), (t = o.maxWidth), (o.minWidth = o.maxWidth = o.width = i), (i = n.width), (o.width = r), (o.minWidth = e), (o.maxWidth = t))),
            void 0 !== i ? i + "" : i
        );
    }
    function Ge(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    function Ze() {
        var e;
        $e &&
            ((Fe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            ($e.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            re.appendChild(Fe).appendChild($e),
            (e = T.getComputedStyle($e)),
            (He = "1%" !== e.top),
            (ze = 12 === Ye(e.marginLeft)),
            ($e.style.right = "60%"),
            (Re = 36 === Ye(e.right)),
            (Me = 36 === Ye(e.width)),
            ($e.style.position = "absolute"),
            (Pe = 12 === Ye($e.offsetWidth / 3)),
            re.removeChild(Fe),
            ($e = null));
    }
    function Ye(e) {
        return Math.round(parseFloat(e));
    }
    (Fe = C.createElement("div")),
        ($e = C.createElement("div")).style &&
            (($e.style.backgroundClip = "content-box"),
            ($e.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === $e.style.backgroundClip),
            _.extend(y, {
                boxSizingReliable: function () {
                    return Ze(), Me;
                },
                pixelBoxStyles: function () {
                    return Ze(), Re;
                },
                pixelPosition: function () {
                    return Ze(), He;
                },
                reliableMarginLeft: function () {
                    return Ze(), ze;
                },
                scrollboxSize: function () {
                    return Ze(), Pe;
                },
                reliableTrDimensions: function () {
                    var e, t, n;
                    return (
                        null == We &&
                            ((e = C.createElement("table")),
                            (n = C.createElement("tr")),
                            (t = C.createElement("div")),
                            (e.style.cssText = "position:absolute;left:-11111px"),
                            (n.style.height = "1px"),
                            (t.style.height = "9px"),
                            re.appendChild(e).appendChild(n).appendChild(t),
                            (n = T.getComputedStyle(n)),
                            (We = 3 < parseInt(n.height)),
                            re.removeChild(e)),
                        We
                    );
                },
            }));
    var Qe = ["Webkit", "Moz", "ms"],
        Je = C.createElement("div").style,
        Ke = {};
    function et(e) {
        return (
            _.cssProps[e] ||
            Ke[e] ||
            (e in Je
                ? e
                : (Ke[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--; ) if ((e = Qe[n] + t) in Je) return e;
                      })(e) || e))
        );
    }
    var tt = /^(none|table(?!-c[ea]).+)/,
        nt = /^--/,
        rt = { position: "absolute", visibility: "hidden", display: "block" },
        it = { letterSpacing: "0", fontWeight: "400" };
    function ot(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function at(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += _.css(e, n + ne[a], !0, i)),
                r
                    ? ("content" === n && (u -= _.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= _.css(e, "border" + ne[a] + "Width", !0, i)))
                    : ((u += _.css(e, "padding" + ne[a], !0, i)), "padding" !== n ? (u += _.css(e, "border" + ne[a] + "Width", !0, i)) : (s += _.css(e, "border" + ne[a] + "Width", !0, i)));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
    }
    function st(e, t, n) {
        var r = Xe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, r),
            o = i,
            a = Ve(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Be.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!y.boxSizingReliable() && i) || (!y.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === _.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === _.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + at(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        );
    }
    function ut(e, t, n, r, i) {
        return new ut.prototype.init(e, t, n, r, i);
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        e = Ve(e, "opacity");
                        return "" === e ? "1" : e;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = U(t),
                    u = nt.test(t),
                    l = e.style;
                if ((u || (t = et(s)), (a = _.cssHooks[t] || _.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = se(e, t, i)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o || u || (n += (i && i[3]) || (_.cssNumber[s] ? "" : "px")),
                        y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o = U(t);
            return (
                nt.test(t) || (t = et(o)),
                "normal" === (i = void 0 === (i = (o = _.cssHooks[t] || _.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ? Ve(e, t, r) : i) && t in it && (i = it[t]),
                "" === n || n ? ((t = parseFloat(i)), !0 === n || isFinite(t) ? t || 0 : i) : i
            );
        },
    }),
        _.each(["height", "width"], function (e, s) {
            _.cssHooks[s] = {
                get: function (e, t, n) {
                    if (t)
                        return !tt.test(_.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? st(e, s, n)
                            : Oe(e, rt, function () {
                                  return st(e, s, n);
                              });
                },
                set: function (e, t, n) {
                    var r,
                        i = Xe(e),
                        o = !y.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === _.css(e, "boxSizing", !1, i),
                        n = n ? at(e, s, n, a, i) : 0;
                    return (
                        a && o && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - at(e, s, "border", !1, i) - 0.5)),
                        n && (r = te.exec(t)) && "px" !== (r[3] || "px") && ((e.style[s] = t), (t = _.css(e, s))),
                        ot(0, t, n)
                    );
                },
            };
        }),
        (_.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Ve(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Oe(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        _.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (_.cssHooks[i + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                "margin" !== i && (_.cssHooks[i + o].set = ot);
        }),
        _.fn.extend({
            css: function (e, t) {
                return F(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = _.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((_.Tween = ut).prototype = {
            constructor: ut,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || _.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (_.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = ut.propHooks[this.prop];
                return (e && e.get ? e : ut.propHooks._default).get(this);
            },
            run: function (e) {
                var t,
                    n = ut.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : ut.propHooks._default).set(this),
                    this
                );
            },
        }).init.prototype = ut.prototype),
        ((ut.propHooks = {
            _default: {
                get: function (e) {
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (e = _.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function (e) {
                    _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!_.cssHooks[e.prop] && null == e.elem.style[et(e.prop)]) ? (e.elem[e.prop] = e.now) : _.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = ut.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (_.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (_.fx = ut.prototype.init),
        (_.fx.step = {});
    var lt,
        ct,
        ft = /^(?:toggle|show|hide)$/,
        dt = /queueHooks$/;
    function pt() {
        ct && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(pt) : T.setTimeout(pt, _.fx.interval), _.fx.tick());
    }
    function ht() {
        return (
            T.setTimeout(function () {
                lt = void 0;
            }),
            (lt = Date.now())
        );
    }
    function gt(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function mt(e, t, n) {
        for (var r, i = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function vt(i, e, t) {
        var n,
            o,
            r = 0,
            a = vt.prefilters.length,
            s = _.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (o) return !1;
                for (var e = lt || ht(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++) l.tweens[n].run(t);
                return s.notifyWith(i, [l, t, e]), t < 1 && r ? e : (r || s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l]), !1);
            },
            l = s.promise({
                elem: i,
                props: _.extend({}, e),
                opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: lt || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    e = _.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(e), e;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l, e])) : s.rejectWith(i, [l, e]), this;
                },
            }),
            c = l.props;
        for (
            (function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (((i = t[(r = U(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = _.cssHooks[r]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < a;
            r++
        )
            if ((n = vt.prefilters[r].call(l, i, c, l.opts))) return b(n.stop) && (_._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return (
            _.map(c, mt, l),
            b(l.opts.start) && l.opts.start.call(i, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            _.fx.timer(_.extend(u, { elem: i, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (_.Animation = _.extend(vt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            for (var n, r = 0, i = (e = b(e) ? ((t = e), ["*"]) : e.match(O)).length; r < i; r++) (n = e[r]), (vt.tweeners[n] = vt.tweeners[n] || []), vt.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = "width" in t || "height" in t,
                    f = this,
                    d = {},
                    p = e.style,
                    h = e.nodeType && ae(e),
                    g = Z.get(e, "fxshow");
                for (r in (n.queue ||
                    (null == (a = _._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    f.always(function () {
                        f.always(function () {
                            a.unqueued--, _.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), ft.test(i))) {
                        if ((delete t[r], (o = o || "toggle" === i), i === (h ? "hide" : "show"))) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            h = !0;
                        }
                        d[r] = (g && g[r]) || _.style(e, r);
                    }
                if ((u = !_.isEmptyObject(t)) || !_.isEmptyObject(d))
                    for (r in (c &&
                        1 === e.nodeType &&
                        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                        null == (l = g && g.display) && (l = Z.get(e, "display")),
                        "none" === (c = _.css(e, "display")) && (l ? (c = l) : (le([e], !0), (l = e.style.display || l), (c = _.css(e, "display")), le([e]))),
                        ("inline" === c || ("inline-block" === c && null != l)) &&
                            "none" === _.css(e, "float") &&
                            (u ||
                                (f.done(function () {
                                    p.display = l;
                                }),
                                null == l && ((c = p.display), (l = "none" === c ? "" : c))),
                            (p.display = "inline-block"))),
                    n.overflow &&
                        ((p.overflow = "hidden"),
                        f.always(function () {
                            (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    d))
                        u ||
                            (g ? "hidden" in g && (h = g.hidden) : (g = Z.access(e, "fxshow", { display: l })),
                            o && (g.hidden = !h),
                            h && le([e], !0),
                            f.done(function () {
                                for (r in (h || le([e]), Z.remove(e, "fxshow"), d)) _.style(e, r, d[r]);
                            })),
                            (u = mt(h ? g[r] : 0, r, f)),
                            r in g || ((g[r] = u.start), h && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
        },
    })),
        (_.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? _.extend({}, e) : { complete: n || (!n && t) || (b(e) && e), duration: e, easing: (n && t) || (t && !b(t) && t) };
            return (
                _.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in _.fx.speeds ? (r.duration = _.fx.speeds[r.duration]) : (r.duration = _.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    b(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue);
                }),
                r
            );
        }),
        _.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                var i = _.isEmptyObject(t),
                    o = _.speed(e, n, r),
                    r = function () {
                        var e = vt(this, _.extend({}, t), o);
                        (i || Z.get(this, "finish")) && e.stop(!0);
                    };
                return (r.finish = r), i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
            },
            stop: function (i, e, o) {
                function a(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                }
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = _.timers,
                            r = Z.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else for (t in r) r[t] && r[t].stop && dt.test(t) && a(r[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || _.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e,
                            t = Z.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = _.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, _.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        _.each(["toggle", "show", "hide"], function (e, r) {
            var i = _.fn[r];
            _.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n);
            };
        }),
        _.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
            _.fn[e] = function (e, t, n) {
                return this.animate(r, e, t, n);
            };
        }),
        (_.timers = []),
        (_.fx.tick = function () {
            var e,
                t = 0,
                n = _.timers;
            for (lt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || _.fx.stop(), (lt = void 0);
        }),
        (_.fx.timer = function (e) {
            _.timers.push(e), _.fx.start();
        }),
        (_.fx.interval = 13),
        (_.fx.start = function () {
            ct || ((ct = !0), pt());
        }),
        (_.fx.stop = function () {
            ct = null;
        }),
        (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (_.fn.delay = function (r, e) {
            return (
                (r = (_.fx && _.fx.speeds[r]) || r),
                this.queue((e = e || "fx"), function (e, t) {
                    var n = T.setTimeout(e, r);
                    t.stop = function () {
                        T.clearTimeout(n);
                    };
                })
            );
        }),
        (f = C.createElement("input")),
        (ee = C.createElement("select").appendChild(C.createElement("option"))),
        (f.type = "checkbox"),
        (y.checkOn = "" !== f.value),
        (y.optSelected = ee.selected),
        ((f = C.createElement("input")).value = "t"),
        (f.type = "radio"),
        (y.radioValue = "t" === f.value);
    var yt,
        bt = _.expr.attrHandle;
    _.fn.extend({
        attr: function (e, t) {
            return F(this, _.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                _.removeAttr(this, e);
            });
        },
    }),
        _.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                        ? _.prop(e, t, n)
                        : ((1 === o && _.isXMLDoc(e)) || (i = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? yt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void _.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = _.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(O);
                if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
            },
        }),
        (yt = {
            set: function (e, t, n) {
                return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = bt[t] || _.find.attr;
            bt[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return n || ((i = bt[o]), (bt[o] = r), (r = null != a(e, t, n) ? o : null), (bt[o] = i)), r;
            };
        });
    var xt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
    function Tt(e) {
        return (e.match(O) || []).join(" ");
    }
    function Ct(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function _t(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(O)) || [];
    }
    _.fn.extend({
        prop: function (e, t) {
            return F(this, _.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[_.propFix[e] || e];
            });
        },
    }),
        _.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && _.isXMLDoc(e)) || ((t = _.propFix[t] || t), (i = _.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = _.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : xt.test(e.nodeName) || (wt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
            (_.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    e = e.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            _.propFix[this.toLowerCase()] = this;
        }),
        _.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = 0;
                if (b(t))
                    return this.each(function (e) {
                        _(this).addClass(t.call(this, e, Ct(this)));
                    });
                if ((e = _t(t)).length)
                    for (; (n = this[s++]); )
                        if (((a = Ct(n)), (r = 1 === n.nodeType && " " + Tt(a) + " "))) {
                            for (o = 0; (i = e[o++]); ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            a !== (a = Tt(r)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = 0;
                if (b(t))
                    return this.each(function (e) {
                        _(this).removeClass(t.call(this, e, Ct(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = _t(t)).length)
                    for (; (n = this[s++]); )
                        if (((a = Ct(n)), (r = 1 === n.nodeType && " " + Tt(a) + " "))) {
                            for (o = 0; (i = e[o++]); ) for (; -1 < r.indexOf(" " + i + " "); ) r = r.replace(" " + i + " ", " ");
                            a !== (a = Tt(r)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function (i, t) {
                var o = typeof i,
                    a = "string" == o || Array.isArray(i);
                return "boolean" == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : b(i)
                    ? this.each(function (e) {
                          _(this).toggleClass(i.call(this, e, Ct(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, r;
                          if (a) for (t = 0, n = _(this), r = _t(i); (e = r[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                          else (void 0 !== i && "boolean" != o) || ((e = Ct(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", (!e && !1 !== i && Z.get(this, "__className__")) || ""));
                      });
            },
            hasClass: function (e) {
                for (var t, n = 0, r = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + Tt(Ct(t)) + " ").indexOf(r)) return !0;
                return !1;
            },
        });
    var Et = /\r/g;
    _.fn.extend({
        val: function (t) {
            var n,
                e,
                r,
                i = this[0];
            return arguments.length
                ? ((r = b(t)),
                  this.each(function (e) {
                      1 === this.nodeType &&
                          (null == (e = r ? t.call(this, e, _(this).val()) : t)
                              ? (e = "")
                              : "number" == typeof e
                              ? (e += "")
                              : Array.isArray(e) &&
                                (e = _.map(e, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((n = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value")) || (this.value = e));
                  }))
                : i
                ? (n = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value"))
                    ? e
                    : "string" == typeof (e = i.value)
                    ? e.replace(Et, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        _.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = _.find.attr(e, "value");
                        return null != t ? t : Tt(_.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++)
                            if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
                                if (((t = _(t).val()), i)) return t;
                                o.push(t);
                            }
                        return o;
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = _.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = -1 < _.inArray(_.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        _.each(["radio", "checkbox"], function () {
            (_.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < _.inArray(_(e).val(), t));
                },
            }),
                y.checkOn ||
                    (_.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (y.focusin = "onfocusin" in T);
    function kt(e) {
        e.stopPropagation();
    }
    var At = /^(?:focusinfocus|focusoutblur)$/;
    _.extend(_.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = [n || C],
                d = v.call(e, "type") ? e.type : e,
                p = v.call(e, "namespace") ? e.namespace.split(".") : [],
                h = (c = o = n = n || C);
            if (
                3 !== n.nodeType &&
                8 !== n.nodeType &&
                !At.test(d + _.event.triggered) &&
                (-1 < d.indexOf(".") && ((d = (p = d.split(".")).shift()), p.sort()),
                (s = d.indexOf(":") < 0 && "on" + d),
                ((e = e[_.expando] ? e : new _.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                (e.namespace = p.join(".")),
                (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : _.makeArray(t, [e])),
                (l = _.event.special[d] || {}),
                r || !l.trigger || !1 !== l.trigger.apply(n, t))
            ) {
                if (!r && !l.noBubble && !g(n)) {
                    for (a = l.delegateType || d, At.test(a + d) || (h = h.parentNode); h; h = h.parentNode) f.push(h), (o = h);
                    o === (n.ownerDocument || C) && f.push(o.defaultView || o.parentWindow || T);
                }
                for (i = 0; (h = f[i++]) && !e.isPropagationStopped(); )
                    (c = h),
                        (e.type = 1 < i ? a : l.bindType || d),
                        (u = (Z.get(h, "events") || Object.create(null))[e.type] && Z.get(h, "handle")) && u.apply(h, t),
                        (u = s && h[s]) && u.apply && V(h) && ((e.result = u.apply(h, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                        e.isDefaultPrevented() ||
                        (l._default && !1 !== l._default.apply(f.pop(), t)) ||
                        !V(n) ||
                        (s &&
                            b(n[d]) &&
                            !g(n) &&
                            ((o = n[s]) && (n[s] = null),
                            (_.event.triggered = d),
                            e.isPropagationStopped() && c.addEventListener(d, kt),
                            n[d](),
                            e.isPropagationStopped() && c.removeEventListener(d, kt),
                            (_.event.triggered = void 0),
                            o && (n[s] = o))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            e = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
            _.event.trigger(e, null, t);
        },
    }),
        _.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    _.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return _.event.trigger(e, t, n, !0);
            },
        }),
        y.focusin ||
            _.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
                function i(e) {
                    _.event.simulate(r, e.target, _.event.fix(e));
                }
                _.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Z.access(e, r);
                        t || e.addEventListener(n, i, !0), Z.access(e, r, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Z.access(e, r) - 1;
                        t ? Z.access(e, r, t) : (e.removeEventListener(n, i, !0), Z.remove(e, r));
                    },
                };
            });
    var St = T.location,
        Nt = { guid: Date.now() },
        jt = /\?/;
    _.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new T.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return (t && !t.getElementsByTagName("parsererror").length) || _.error("Invalid XML: " + e), t;
    };
    var Dt = /\[\]$/,
        Lt = /\r?\n/g,
        It = /^(?:submit|button|image|reset|file)$/i,
        qt = /^(?:input|select|textarea|keygen)/i;
    (_.param = function (e, t) {
        function n(e, t) {
            (t = b(t) ? t() : t), (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
        }
        var r,
            i = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
            _.each(e, function () {
                n(this.name, this.value);
            });
        else
            for (r in e)
                !(function n(r, e, i, o) {
                    if (Array.isArray(e))
                        _.each(e, function (e, t) {
                            i || Dt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o);
                        });
                    else if (i || "object" !== h(e)) o(r, e);
                    else for (var t in e) n(r + "[" + t + "]", e[t], i, o);
                })(r, e[r], t, n);
        return i.join("&");
    }),
        _.fn.extend({
            serialize: function () {
                return _.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = _.prop(this, "elements");
                    return e ? _.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !_(this).is(":disabled") && qt.test(this.nodeName) && !It.test(e) && (this.checked || !ce.test(e));
                    })
                    .map(function (e, t) {
                        var n = _(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? _.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Lt, "\r\n") };
                    })
                    .get();
            },
        });
    var Ot = /%20/g,
        Ht = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        zt = {},
        Ft = {},
        $t = "*/".concat("*"),
        Bt = C.createElement("a");
    function Xt(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(O) || [];
            if (b(t)) for (; (n = i[r++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Ut(t, r, i, o) {
        var a = {},
            s = t === Ft;
        function u(e) {
            var n;
            return (
                (a[e] = !0),
                _.each(t[e] || [], function (e, t) {
                    t = t(r, i, o);
                    return "string" != typeof t || s || a[t] ? (s ? !(n = t) : void 0) : (r.dataTypes.unshift(t), u(t), !1);
                }),
                n
            );
        }
        return u(r.dataTypes[0]) || (!a["*"] && u("*"));
    }
    function Vt(e, t) {
        var n,
            r,
            i = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
        return r && _.extend(!0, e, r), e;
    }
    (Bt.href = St.href),
        _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Vt(Vt(e, _.ajaxSettings), t) : Vt(_.ajaxSettings, e);
            },
            ajaxPrefilter: Xt(zt),
            ajaxTransport: Xt(Ft),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var u,
                    l,
                    c,
                    n,
                    f,
                    d,
                    p,
                    r,
                    i,
                    h = _.ajaxSetup({}, (t = t || {})),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                    v = _.Deferred(),
                    y = _.Callbacks("once memory"),
                    b = h.statusCode || {},
                    o = {},
                    a = {},
                    s = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (d) {
                                if (!n) for (n = {}; (t = Pt.exec(c)); ) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return d ? c : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == d && ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e), (o[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == d && (h.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (d) x.always(e[x.status]);
                                else for (var t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            e = e || s;
                            return u && u.abort(e), w(0, e), this;
                        },
                    };
                if (
                    (v.promise(x),
                    (h.url = ((e || h.url || St.href) + "").replace(Wt, St.protocol + "//")),
                    (h.type = t.method || t.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(O) || [""]),
                    null == h.crossDomain)
                ) {
                    i = C.createElement("a");
                    try {
                        (i.href = h.url), (i.href = i.href), (h.crossDomain = Bt.protocol + "//" + Bt.host != i.protocol + "//" + i.host);
                    } catch (e) {
                        h.crossDomain = !0;
                    }
                }
                if ((h.data && h.processData && "string" != typeof h.data && (h.data = _.param(h.data, h.traditional)), Ut(zt, h, t, x), d)) return x;
                for (r in ((p = _.event && h.global) && 0 == _.active++ && _.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Rt.test(h.type)),
                (l = h.url.replace(Ht, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+"))
                    : ((i = h.url.slice(l.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((l += (jt.test(l) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((l = l.replace(Mt, "$1")), (i = (jt.test(l) ? "&" : "?") + "_=" + Nt.guid++ + i)),
                      (h.url = l + i)),
                h.ifModified && (_.lastModified[l] && x.setRequestHeader("If-Modified-Since", _.lastModified[l]), _.etag[l] && x.setRequestHeader("If-None-Match", _.etag[l])),
                ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && x.setRequestHeader("Content-Type", h.contentType),
                x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]),
                h.headers))
                    x.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, x, h) || d)) return x.abort();
                if (((s = "abort"), y.add(h.complete), x.done(h.success), x.fail(h.error), (u = Ut(Ft, h, t, x)))) {
                    if (((x.readyState = 1), p && m.trigger("ajaxSend", [x, h]), d)) return x;
                    h.async &&
                        0 < h.timeout &&
                        (f = T.setTimeout(function () {
                            x.abort("timeout");
                        }, h.timeout));
                    try {
                        (d = !1), u.send(o, w);
                    } catch (e) {
                        if (d) throw e;
                        w(-1, e);
                    }
                } else w(-1, "No Transport");
                function w(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = t;
                    d ||
                        ((d = !0),
                        f && T.clearTimeout(f),
                        (u = void 0),
                        (c = r || ""),
                        (x.readyState = 0 < e ? 4 : 0),
                        (r = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (a = (function (e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break;
                                        }
                                        a = a || i;
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(h, x, n)),
                        !r && -1 < _.inArray("script", h.dataTypes) && (h.converters["text script"] = function () {}),
                        (a = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o; )
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(h, a, x, r)),
                        r
                            ? (h.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (_.lastModified[l] = n), (n = x.getResponseHeader("etag")) && (_.etag[l] = n)),
                              204 === e || "HEAD" === h.type ? (s = "nocontent") : 304 === e ? (s = "notmodified") : ((s = a.state), (i = a.data), (r = !(o = a.error))))
                            : ((o = s), (!e && s) || ((s = "error"), e < 0 && (e = 0))),
                        (x.status = e),
                        (x.statusText = (t || s) + ""),
                        r ? v.resolveWith(g, [i, s, x]) : v.rejectWith(g, [x, s, o]),
                        x.statusCode(b),
                        (b = void 0),
                        p && m.trigger(r ? "ajaxSuccess" : "ajaxError", [x, h, r ? i : o]),
                        y.fireWith(g, [x, s]),
                        p && (m.trigger("ajaxComplete", [x, h]), --_.active || _.event.trigger("ajaxStop")));
                }
                return x;
            },
            getJSON: function (e, t, n) {
                return _.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return _.get(e, void 0, t, "script");
            },
        }),
        _.each(["get", "post"], function (e, i) {
            _[i] = function (e, t, n, r) {
                return b(t) && ((r = r || n), (n = t), (t = void 0)), _.ajax(_.extend({ url: e, type: i, dataType: r, data: t, success: n }, _.isPlainObject(e) && e));
            };
        }),
        _.ajaxPrefilter(function (e) {
            for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (_._evalUrl = function (e, t, n) {
            return _.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    _.globalEval(e, t, n);
                },
            });
        }),
        _.fn.extend({
            wrapAll: function (e) {
                return (
                    this[0] &&
                        (b(e) && (e = e.call(this[0])),
                        (e = _(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return b(n)
                    ? this.each(function (e) {
                          _(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = _(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = b(t);
                return this.each(function (e) {
                    _(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            _(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (_.expr.pseudos.hidden = function (e) {
            return !_.expr.pseudos.visible(e);
        }),
        (_.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (_.ajaxSettings.xhr = function () {
            try {
                return new T.XMLHttpRequest();
            } catch (e) {}
        });
    var Gt = { 0: 200, 1223: 204 },
        Zt = _.ajaxSettings.xhr();
    (y.cors = !!Zt && "withCredentials" in Zt),
        (y.ajax = Zt = !!Zt),
        _.ajaxTransport(function (i) {
            var o, a;
            if (y.cors || (Zt && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                    "abort" === e
                                        ? r.abort()
                                        : "error" === e
                                        ? "number" != typeof r.status
                                            ? t(0, "error")
                                            : t(r.status, r.statusText)
                                        : t(Gt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o("error")),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          T.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        _.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        _.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return _.globalEval(e), e;
                },
            },
        }),
        _.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        _.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = _("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            C.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || _.expando + "_" + Nt.guid++;
            return (this[e] = !0), e;
        },
    }),
        _.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
                i,
                o,
                a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(Qt, "$1" + r)) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function () {
                        return o || _.error(r + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = T[r]),
                    (T[r] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === i ? _(T).removeProp(r) : (T[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(r)), o && b(i) && i(o[0]), (o = i = void 0);
                    }),
                    "script"
                );
        }),
        (y.createHTMLDocument = (((f = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === f.childNodes.length)),
        (_.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (y.createHTMLDocument ? (((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href), t.head.appendChild(r)) : (t = C)),
                  (r = !n && []),
                  (n = S.exec(e)) ? [t.createElement(n[1])] : ((n = ve([e], t, r)), r && r.length && _(r).remove(), _.merge([], n.childNodes)));
            var r;
        }),
        (_.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
                b(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                    _.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        (_.expr.pseudos.animated = function (t) {
            return _.grep(_.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (_.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s = _.css(e, "position"),
                    u = _(e),
                    l = {};
                "static" === s && (e.style.position = "relative"),
                    (o = u.offset()),
                    (r = _.css(e, "top")),
                    (a = _.css(e, "left")),
                    (a = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? ((i = (s = u.position()).top), s.left) : ((i = parseFloat(r) || 0), parseFloat(a) || 0)),
                    null != (t = b(t) ? t.call(e, n, _.extend({}, o)) : t).top && (l.top = t.top - o.top + i),
                    null != t.left && (l.left = t.left - o.left + a),
                    "using" in t ? t.using.call(e, l) : ("number" == typeof l.top && (l.top += "px"), "number" == typeof l.left && (l.left += "px"), u.css(l));
            },
        }),
        _.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              _.offset.setOffset(this, t, e);
                          });
                var e,
                    n = this[0];
                return n ? (n.getClientRects().length ? ((e = n.getBoundingClientRect()), (n = n.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === _.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position"); ) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = _(e).offset()).top += _.css(e, "borderTopWidth", !0)), (i.left += _.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - _.css(r, "marginTop", !0), left: t.left - i.left - _.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === _.css(e, "position"); ) e = e.offsetParent;
                    return e || re;
                });
            },
        }),
        _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
            var o = "pageYOffset" === i;
            _.fn[t] = function (e) {
                return F(
                    this,
                    function (e, t, n) {
                        var r;
                        return g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? (r ? r[i] : e[t]) : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n));
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        _.each(["top", "left"], function (e, n) {
            _.cssHooks[n] = Ge(y.pixelPosition, function (e, t) {
                if (t) return (t = Ve(e, n)), Be.test(t) ? _(e).position()[n] + "px" : t;
            });
        }),
        _.each({ Height: "height", Width: "width" }, function (a, s) {
            _.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
                _.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return F(
                        this,
                        function (e, t, n) {
                            var r;
                            return g(e)
                                ? 0 === o.indexOf("outer")
                                    ? e["inner" + a]
                                    : e.document.documentElement["client" + a]
                                : 9 === e.nodeType
                                ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                                : void 0 === n
                                ? _.css(e, t, i)
                                : _.style(e, t, n, i);
                        },
                        s,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            _.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        _.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            _.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        });
    var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (_.proxy = function (e, t) {
        var n, r;
        if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), b(e)))
            return (
                (n = s.call(arguments, 2)),
                ((r = function () {
                    return e.apply(t || this, n.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || _.guid++),
                r
            );
    }),
        (_.holdReady = function (e) {
            e ? _.readyWait++ : _.ready(!0);
        }),
        (_.isArray = Array.isArray),
        (_.parseJSON = JSON.parse),
        (_.nodeName = A),
        (_.isFunction = b),
        (_.isWindow = g),
        (_.camelCase = U),
        (_.type = h),
        (_.now = Date.now),
        (_.isNumeric = function (e) {
            var t = _.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (_.trim = function (e) {
            return null == e ? "" : (e + "").replace(Jt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return _;
            });
    var Kt = T.jQuery,
        en = T.$;
    return (
        (_.noConflict = function (e) {
            return T.$ === _ && (T.$ = en), e && T.jQuery === _ && (T.jQuery = Kt), _;
        }),
        void 0 === e && (T.jQuery = T.$ = _),
        _
    );
}),
    (function (o) {
        "use strict";
        (o.fn.fitVids = function (e) {
            var t,
                n,
                i = { customSelector: null, ignore: null };
            return (
                document.getElementById("fit-vids-style") ||
                    ((t = document.head || document.getElementsByTagName("head")[0]),
                    ((n = document.createElement("div")).innerHTML =
                        '<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
                    t.appendChild(n.childNodes[1])),
                e && o.extend(i, e),
                this.each(function () {
                    var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                    i.customSelector && e.push(i.customSelector);
                    var r = ".fitvidsignore";
                    i.ignore && (r = r + ", " + i.ignore);
                    e = o(this).find(e.join(","));
                    (e = (e = e.not("object object")).not(r)).each(function () {
                        var e,
                            t,
                            n = o(this);
                        0 < n.parents(r).length ||
                            ("embed" === this.tagName.toLowerCase() && n.parent("object").length) ||
                            n.parent(".fluid-width-video-wrapper").length ||
                            (n.css("height") || n.css("width") || (!isNaN(n.attr("height")) && !isNaN(n.attr("width"))) || (n.attr("height", 9), n.attr("width", 16)),
                            (e =
                                ("object" === this.tagName.toLowerCase() || (n.attr("height") && !isNaN(parseInt(n.attr("height"), 10))) ? parseInt(n.attr("height"), 10) : n.height()) /
                                (isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10))),
                            n.attr("name") || ((t = "fitvid" + o.fn.fitVids._count), n.attr("name", t), o.fn.fitVids._count++),
                            n
                                .wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>')
                                .parent(".fluid-width-video-wrapper")
                                .css("padding-top", 100 * e + "%"),
                            n.removeAttr("height").removeAttr("width"));
                    });
                })
            );
        }),
            (o.fn.fitVids._count = 0);
    })(window.jQuery || window.Zepto),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).LazyLoad = t());
    })(this, function () {
        "use strict";
        function t() {
            return (t =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n,
                            r = arguments[t];
                        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function a(e) {
            return t({}, Y, e);
        }
        function i(e, t) {
            var n,
                t = new e(t);
            try {
                n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: t } });
            } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: t });
            }
            window.dispatchEvent(n);
        }
        function u(e, t) {
            return e.getAttribute("data-" + t);
        }
        function l(e, t, n) {
            (t = "data-" + t), null !== n ? e.setAttribute(t, n) : e.removeAttribute(t);
        }
        function f(e) {
            return u(e, "ll-status");
        }
        function d(e, t) {
            return l(e, "ll-status", t);
        }
        function p(e) {
            return d(e, null), 0;
        }
        function h(e) {
            return null === f(e);
        }
        function s(e) {
            return "native" === f(e);
        }
        function g(e, t, n, r) {
            e && (void 0 === r ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, r));
        }
        function c(e, t) {
            G ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
        }
        function m(e, t) {
            G
                ? e.classList.remove(t)
                : (e.className = e.className
                      .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                      .replace(/^\s+/, "")
                      .replace(/\s+$/, ""));
        }
        function v(e) {
            return e.llTempImage;
        }
        function y(e, t) {
            !t || ((t = t._observer) && t.unobserve(e));
        }
        function b(e, t) {
            e && (e.loadingCount += t);
        }
        function x(e, t) {
            e && (e.toLoadCount = t);
        }
        function n(e) {
            for (var t, n = [], r = 0; (t = e.children[r]); r += 1) "SOURCE" === t.tagName && n.push(t);
            return n;
        }
        function r(e, t, n) {
            n && e.setAttribute(t, n);
        }
        function o(e, t) {
            e.removeAttribute(t);
        }
        function w(e) {
            return !!e.llOriginalAttrs;
        }
        function T(e) {
            var t;
            w(e) || (((t = {}).src = e.getAttribute("src")), (t.srcset = e.getAttribute("srcset")), (t.sizes = e.getAttribute("sizes")), (e.llOriginalAttrs = t));
        }
        function C(e) {
            var t;
            w(e) && ((t = e.llOriginalAttrs), r(e, "src", t.src), r(e, "srcset", t.srcset), r(e, "sizes", t.sizes));
        }
        function _(e, t) {
            r(e, "sizes", u(e, t.data_sizes)), r(e, "srcset", u(e, t.data_srcset)), r(e, "src", u(e, t.data_src));
        }
        function E(e) {
            o(e, "src"), o(e, "srcset"), o(e, "sizes");
        }
        function k(e, t) {
            (e = e.parentNode) && "PICTURE" === e.tagName && n(e).forEach(t);
        }
        function A(e, t) {
            n(e).forEach(t);
        }
        function S(e, t) {
            var n = J[e.tagName];
            n && n(e, t);
        }
        function N(e, t, n) {
            b(n, 1), c(e, t.class_loading), d(e, "loading"), g(t.callback_loading, e, n);
        }
        function j(e, t) {
            var n = K[e.tagName];
            n ? n(e, t) : (l((e = e), (t = t).data_bg, null), l(e, t.data_bg_hidpi, null));
        }
        function D(e, t) {
            !t || 0 < t.loadingCount || 0 < t.toLoadCount || g(e.callback_finish, t);
        }
        function L(e, t, n) {
            e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
        }
        function I(e) {
            return !!e.llEvLisnrs;
        }
        function q(e) {
            if (I(e)) {
                var t,
                    n = e.llEvLisnrs;
                for (t in n) {
                    var r = n[t];
                    (i = t), (r = r), e.removeEventListener(i, r);
                }
                delete e.llEvLisnrs;
            }
            var i;
        }
        function O(e, t, n) {
            delete e.llTempImage, b(n, -1), n && --n.toLoadCount, m(e, t.class_loading), t.unobserve_completed && y(e, n);
        }
        function H(n, r, i) {
            var o = v(n) || n;
            I(o) ||
                (function (e) {
                    I(e) || (e.llEvLisnrs = {});
                    var t = "VIDEO" === e.tagName ? "loadeddata" : "load";
                    L(e, t, function (e) {
                        !(function (e, t, n, r) {
                            var i = s(t);
                            O(t, n, r), c(t, n.class_loaded), d(t, "loaded"), j(t, n), g(n.callback_loaded, t, r), i || D(n, r);
                        })(0, n, r, i),
                            q(o);
                    }),
                        L(e, "error", function (e) {
                            !(function (e, t, n, r) {
                                var i = s(t);
                                O(t, n, r), c(t, n.class_error), d(t, "error"), g(n.callback_error, t, r), i || D(n, r);
                            })(0, n, r, i),
                                q(o);
                        });
                })(o);
        }
        function M(e, t, n) {
            var r, i, o, a, s;
            (e.llTempImage = document.createElement("IMG")),
                H(e, t, n),
                (o = n),
                (a = u((r = e), (i = t).data_bg)),
                (s = u(r, i.data_bg_hidpi)),
                (a = Z && s ? s : a) && ((r.style.backgroundImage = 'url("'.concat(a, '")')), v(r).setAttribute("src", a), N(r, i, o)),
                (i = n),
                (e = u((o = e), (n = t).data_bg_multi)),
                (t = u(o, n.data_bg_multi_hidpi)),
                (t = Z && t ? t : e) &&
                    ((o.style.backgroundImage = t),
                    (e = i),
                    c((t = o), (i = n).class_applied),
                    d(t, "applied"),
                    l((o = t), (n = i).data_bg_multi, null),
                    l(o, n.data_bg_multi_hidpi, null),
                    i.unobserve_completed && y(t, i),
                    g(i.callback_applied, t, e));
        }
        function P(e, t, n) {
            var r, i, o;
            -1 < ee.indexOf(e.tagName) ? (H((r = e), (i = t), (o = n)), S(r, i), N(r, i, o)) : M(e, t, n);
        }
        function R(e) {
            return e.use_native && "loading" in HTMLImageElement.prototype;
        }
        function W(e, l, c) {
            e.forEach(function (e) {
                return e.isIntersecting || 0 < e.intersectionRatio
                    ? ((o = e.target), (a = e), (s = l), (u = c), d(o, "entered"), s.unobserve_entered && y(o, u), g(s.callback_enter, o, a, u), void (0 <= Q.indexOf(f(o)) || P(o, s, u)))
                    : ((t = e.target),
                      (n = e),
                      (r = l),
                      (i = c),
                      void (
                          h(t) ||
                          ((a = t),
                          (o = n),
                          (s = i),
                          (u = r).cancel_on_exit &&
                              "loading" === f(a) &&
                              "IMG" === a.tagName &&
                              (q(a),
                              k((e = a), function (e) {
                                  E(e);
                              }),
                              E(e),
                              k((e = a), function (e) {
                                  C(e);
                              }),
                              C(e),
                              m(a, u.class_loading),
                              b(s, -1),
                              p(a),
                              g(u.callback_cancel, a, o, s)),
                          g(r.callback_exit, t, n, i))
                      ));
                var t, n, r, i, o, a, s, u;
            });
        }
        function z(e) {
            return Array.prototype.slice.call(e);
        }
        function F(e) {
            return e.container.querySelectorAll(e.elements_selector);
        }
        function $(e) {
            return "error" === f(e);
        }
        function B(e, t) {
            return (t = e || F(t)), z(t).filter(h);
        }
        function e(e, t) {
            var r,
                i,
                n,
                o,
                e = a(e);
            (this._settings = e),
                (this.loadingCount = 0),
                (n = e),
                (o = this),
                V &&
                    !R(n) &&
                    (o._observer = new IntersectionObserver(
                        function (e) {
                            W(e, n, o);
                        },
                        { root: n.container === document ? null : n.container, rootMargin: n.thresholds || n.threshold + "px" }
                    )),
                (r = e),
                (i = this),
                X &&
                    window.addEventListener("online", function () {
                        var t, e, n;
                        (e = i),
                            (n = F((t = r))),
                            z(n)
                                .filter($)
                                .forEach(function (e) {
                                    m(e, t.class_error), p(e);
                                }),
                            e.update();
                    }),
                this.update(t);
        }
        var X = "undefined" != typeof window,
            U = (X && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            V = X && "IntersectionObserver" in window,
            G = X && "classList" in document.createElement("p"),
            Z = X && 1 < window.devicePixelRatio,
            Y = {
                elements_selector: ".lazy",
                container: U || X ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                data_bg_hidpi: "bg-hidpi",
                data_bg_multi: "bg-multi",
                data_bg_multi_hidpi: "bg-multi-hidpi",
                data_poster: "poster",
                class_applied: "applied",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                unobserve_completed: !0,
                unobserve_entered: !1,
                cancel_on_exit: !0,
                callback_enter: null,
                callback_exit: null,
                callback_applied: null,
                callback_loading: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                callback_cancel: null,
                use_native: !1,
            },
            Q = ["loading", "loaded", "applied", "error"],
            J = {
                IMG: function (e, t) {
                    k(e, function (e) {
                        T(e), _(e, t);
                    }),
                        T(e),
                        _(e, t);
                },
                IFRAME: function (e, t) {
                    r(e, "src", u(e, t.data_src));
                },
                VIDEO: function (e, t) {
                    A(e, function (e) {
                        r(e, "src", u(e, t.data_src));
                    }),
                        r(e, "poster", u(e, t.data_poster)),
                        r(e, "src", u(e, t.data_src)),
                        e.load();
                },
            },
            K = {
                IMG: function (e, t) {
                    l(e, t.data_src, null),
                        l(e, t.data_srcset, null),
                        l(e, t.data_sizes, null),
                        k(e, function (e) {
                            l(e, t.data_srcset, null), l(e, t.data_sizes, null);
                        });
                },
                IFRAME: function (e, t) {
                    l(e, t.data_src, null);
                },
                VIDEO: function (e, t) {
                    l(e, t.data_src, null),
                        l(e, t.data_poster, null),
                        A(e, function (e) {
                            l(e, t.data_src, null);
                        });
                },
            },
            ee = ["IMG", "IFRAME", "VIDEO"],
            te = ["IMG", "IFRAME"];
        return (
            (e.prototype = {
                update: function (e) {
                    var t,
                        n,
                        r,
                        i = this._settings,
                        o = B(e, i);
                    x(this, o.length),
                        !U && V
                            ? R(i)
                                ? ((n = i),
                                  (r = this),
                                  o.forEach(function (e) {
                                      var t;
                                      -1 !== te.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), H((t = e), (e = n), r), S(t, e), j(t, e), d(t, "native"));
                                  }),
                                  x(r, 0))
                                : ((e = o),
                                  (i = this._observer).disconnect(),
                                  (t = i),
                                  e.forEach(function (e) {
                                      t.observe(e);
                                  }))
                            : this.loadAll(o);
                },
                destroy: function () {
                    this._observer && this._observer.disconnect(),
                        F(this._settings).forEach(function (e) {
                            delete e.llOriginalAttrs;
                        }),
                        delete this._observer,
                        delete this._settings,
                        delete this.loadingCount,
                        delete this.toLoadCount;
                },
                loadAll: function (e) {
                    var t = this,
                        n = this._settings;
                    B(e, n).forEach(function (e) {
                        y(e, t), P(e, n, t);
                    });
                },
            }),
            (e.load = function (e, t) {
                t = a(t);
                P(e, t);
            }),
            (e.resetStatus = function (e) {
                p(e);
            }),
            X &&
                (function (e, t) {
                    if (t)
                        if (t.length) for (var n, r = 0; (n = t[r]); r += 1) i(e, n);
                        else i(e, t);
                })(e, window.lazyLoadOptions),
            e
        );
    }),
    (function (o) {
        "use strict";
        function e() {
            (this._activeZoom = this._initialScrollPosition = this._initialTouchPosition = this._touchMoveListener = null),
                (this._$document = o(document)),
                (this._$window = o(window)),
                (this._$body = o(document.body)),
                (this._boundClick = o.proxy(this._clickHandler, this));
        }
        function a(e) {
            (this._fullHeight = this._fullWidth = this._overlay = this._targetImageWrap = null), (this._targetImage = e), (this._$body = o(document.body));
        }
        (e.prototype.listen = function () {
            this._$body.on("click", '[data-action="zoom"]', o.proxy(this._zoom, this));
        }),
            (e.prototype._zoom = function (e) {
                var t = e.target;
                if (t && "IMG" == t.tagName && !this._$body.hasClass("zoom-overlay-open"))
                    return e.metaKey || e.ctrlKey
                        ? window.open(e.target.getAttribute("data-original") || e.target.src, "_blank")
                        : void (
                              t.width >= o(window).width() - a.OFFSET ||
                              (this._activeZoomClose(!0),
                              (this._activeZoom = new a(t)),
                              this._activeZoom.zoomImage(),
                              this._$window.on("scroll.zoom", o.proxy(this._scrollHandler, this)),
                              this._$document.on("keyup.zoom", o.proxy(this._keyHandler, this)),
                              this._$document.on("touchstart.zoom", o.proxy(this._touchStart, this)),
                              document.addEventListener ? document.addEventListener("click", this._boundClick, !0) : document.attachEvent("onclick", this._boundClick, !0),
                              "bubbles" in e ? e.bubbles && e.stopPropagation() : (e.cancelBubble = !0))
                          );
            }),
            (e.prototype._activeZoomClose = function (e) {
                this._activeZoom &&
                    (e ? this._activeZoom.dispose() : this._activeZoom.close(), this._$window.off(".zoom"), this._$document.off(".zoom"), document.removeEventListener("click", this._boundClick, !0), (this._activeZoom = null));
            }),
            (e.prototype._scrollHandler = function (e) {
                null === this._initialScrollPosition && (this._initialScrollPosition = o(window).scrollTop());
                var t = this._initialScrollPosition - o(window).scrollTop();
                40 <= Math.abs(t) && this._activeZoomClose();
            }),
            (e.prototype._keyHandler = function (e) {
                27 == e.keyCode && this._activeZoomClose();
            }),
            (e.prototype._clickHandler = function (e) {
                e.preventDefault ? e.preventDefault() : (event.returnValue = !1), "bubbles" in e ? e.bubbles && e.stopPropagation() : (e.cancelBubble = !0), this._activeZoomClose();
            }),
            (e.prototype._touchStart = function (e) {
                (this._initialTouchPosition = e.touches[0].pageY), o(e.target).on("touchmove.zoom", o.proxy(this._touchMove, this));
            }),
            (e.prototype._touchMove = function (e) {
                10 < Math.abs(e.touches[0].pageY - this._initialTouchPosition) && (this._activeZoomClose(), o(e.target).off("touchmove.zoom"));
            }),
            (a.OFFSET = 80),
            (a._MAX_WIDTH = 2560),
            (a._MAX_HEIGHT = 4096),
            (a.prototype.zoomImage = function () {
                var e = document.createElement("img");
                (e.onload = o.proxy(function () {
                    (this._fullHeight = Number(e.height)), (this._fullWidth = Number(e.width)), this._zoomOriginal();
                }, this)),
                    (e.src = this._targetImage.src);
            }),
            (a.prototype._zoomOriginal = function () {
                (this._targetImageWrap = document.createElement("div")),
                    (this._targetImageWrap.className = "zoom-img-wrap"),
                    this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage),
                    this._targetImageWrap.appendChild(this._targetImage),
                    o(this._targetImage).addClass("zoom-img").attr("data-action", "zoom-out"),
                    (this._overlay = document.createElement("div")),
                    (this._overlay.className = "zoom-overlay"),
                    document.body.appendChild(this._overlay),
                    this._calculateZoom(),
                    this._triggerAnimation();
            }),
            (a.prototype._calculateZoom = function () {
                this._targetImage.offsetWidth;
                var e = this._fullWidth,
                    t = this._fullHeight,
                    n = (o(window).scrollTop(), e / this._targetImage.width),
                    r = o(window).height() - a.OFFSET,
                    i = o(window).width() - a.OFFSET;
                this._imgScaleFactor = e < i && t < r ? n : e / t < i / r ? (r / t) * n : (i / e) * n;
            }),
            (a.prototype._triggerAnimation = function () {
                this._targetImage.offsetWidth;
                var e = o(this._targetImage).offset(),
                    t = o(window).scrollTop() + o(window).height() / 2,
                    n = o(window).width() / 2,
                    r = e.top + this._targetImage.height / 2,
                    e = e.left + this._targetImage.width / 2;
                (this._translateY = t - r), (this._translateX = n - e);
                (n = "scale(" + this._imgScaleFactor + ")"), (e = "translate(" + this._translateX + "px, " + this._translateY + "px)");
                o.support.transition && (e += " translateZ(0)"),
                    o(this._targetImage).css({ "-webkit-transform": n, "-ms-transform": n, transform: n }),
                    o(this._targetImageWrap).css({ "-webkit-transform": e, "-ms-transform": e, transform: e }),
                    this._$body.addClass("zoom-overlay-open");
            }),
            (a.prototype.close = function () {
                if (
                    (this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"),
                    o(this._targetImage).css({ "-webkit-transform": "", "-ms-transform": "", transform: "" }),
                    o(this._targetImageWrap).css({ "-webkit-transform": "", "-ms-transform": "", transform: "" }),
                    !o.support.transition)
                )
                    return this.dispose();
                o(this._targetImage).one(o.support.transition.end, o.proxy(this.dispose, this)).emulateTransitionEnd(300);
            }),
            (a.prototype.dispose = function () {
                this._targetImageWrap &&
                    this._targetImageWrap.parentNode &&
                    (o(this._targetImage).removeClass("zoom-img").attr("data-action", "zoom"),
                    this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap),
                    this._overlay.parentNode.removeChild(this._overlay),
                    this._$body.removeClass("zoom-overlay-transitioning"));
            }),
            o(function () {
                new e().listen();
            });
    })(jQuery);
//# sourceMappingURL=app.min.js.map
