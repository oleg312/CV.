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
})("undefined" != typeof window ? window : this, function (C, e) {
   "use strict";
   var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat
         ? function (e) {
            return t.flat.call(e);
         }
         : function (e) {
            return t.concat.apply([], e);
         },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function (e) {
         return "function" == typeof e && "number" != typeof e.nodeType;
      },
      x = function (e) {
         return null != e && e === e.window;
      },
      E = C.document,
      c = { type: !0, src: !0, nonce: !0, noModule: !0 };
   function b(e, t, n) {
      var r,
         i,
         o = (n = n || E).createElement("script");
      if (((o.text = e), t)) for (r in c) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o);
   }
   function w(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
   }
   var f = "3.5.1",
      S = function (e, t) {
         return new S.fn.init(e, t);
      };
   function p(e) {
      var t = !!e && "length" in e && e.length,
         n = w(e);
      return !m(e) && !x(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
   }
   (S.fn = S.prototype = {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
         return s.call(this);
      },
      get: function (e) {
         return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
         var t = S.merge(this.constructor(), e);
         return (t.prevObject = this), t;
      },
      each: function (e) {
         return S.each(this, e);
      },
      map: function (n) {
         return this.pushStack(
            S.map(this, function (e, t) {
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
            S.grep(this, function (e, t) {
               return (t + 1) % 2;
            })
         );
      },
      odd: function () {
         return this.pushStack(
            S.grep(this, function (e, t) {
               return t % 2;
            })
         );
      },
      eq: function (e) {
         var t = this.length,
            n = +e + (e < 0 ? t : 0);
         return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
         return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
   }),
      (S.extend = S.fn.extend = function () {
         var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
         for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || m(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
            if (null != (e = arguments[s]))
               for (t in e)
                  (r = e[t]),
                     "__proto__" !== t &&
                     a !== r &&
                     (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}), (i = !1), (a[t] = S.extend(l, o, r)))
                        : void 0 !== r && (a[t] = r));
         return a;
      }),
      S.extend({
         expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
         isReady: !0,
         error: function (e) {
            throw new Error(e);
         },
         noop: function () { },
         isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || ("function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l));
         },
         isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
         },
         globalEval: function (e, t, n) {
            b(e, { nonce: t && t.nonce }, n);
         },
         each: function (e, t) {
            var n,
               r = 0;
            if (p(e)) {
               for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
         },
         makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
         },
         inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n);
         },
         merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return (e.length = i), e;
         },
         grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r;
         },
         map: function (e, t, n) {
            var r,
               i,
               o = 0,
               a = [];
            if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a);
         },
         guid: 1,
         support: y,
      }),
      "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
      S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
         n["[object " + t + "]"] = t.toLowerCase();
      });
   var d = (function (n) {
      var e,
         d,
         b,
         o,
         i,
         h,
         f,
         g,
         w,
         u,
         l,
         T,
         C,
         a,
         E,
         v,
         s,
         c,
         y,
         S = "sizzle" + 1 * new Date(),
         p = n.document,
         k = 0,
         r = 0,
         m = ue(),
         x = ue(),
         A = ue(),
         N = ue(),
         D = function (e, t) {
            return e === t && (l = !0), 0;
         },
         j = {}.hasOwnProperty,
         t = [],
         q = t.pop,
         L = t.push,
         H = t.push,
         O = t.slice,
         P = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
         },
         R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
         M = "[\\x20\\t\\r\\n\\f]",
         I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
         W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
         F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
         B = new RegExp(M + "+", "g"),
         $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
         _ = new RegExp("^" + M + "*," + M + "*"),
         z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
         U = new RegExp(M + "|>"),
         X = new RegExp(F),
         V = new RegExp("^" + I + "$"),
         G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
         },
         Y = /HTML$/i,
         Q = /^(?:input|select|textarea|button)$/i,
         J = /^h\d$/i,
         K = /^[^{]+\{\s*\[native \w/,
         Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
         ee = /[+~]/,
         te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
         ne = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
         },
         re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
         ie = function (e, t) {
            return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
         },
         oe = function () {
            T();
         },
         ae = be(
            function (e) {
               return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
            },
            { dir: "parentNode", next: "legend" }
         );
      try {
         H.apply((t = O.call(p.childNodes)), p.childNodes), t[p.childNodes.length].nodeType;
      } catch (e) {
         H = {
            apply: t.length
               ? function (e, t) {
                  L.apply(e, O.call(t));
               }
               : function (e, t) {
                  var n = e.length,
                     r = 0;
                  while ((e[n++] = t[r++]));
                  e.length = n - 1;
               },
         };
      }
      function se(t, e, n, r) {
         var i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = e && e.ownerDocument,
            p = e ? e.nodeType : 9;
         if (((n = n || []), "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
         if (!r && (T(e), (e = e || C), E)) {
            if (11 !== p && (u = Z.exec(t)))
               if ((i = u[1])) {
                  if (9 === p) {
                     if (!(a = e.getElementById(i))) return n;
                     if (a.id === i) return n.push(a), n;
                  } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
               } else {
                  if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                  if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
               }
            if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
               if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
                  ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) || ((s = e.getAttribute("id")) ? (s = s.replace(re, ie)) : e.setAttribute("id", (s = S))), (o = (l = h(t)).length);
                  while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                  c = l.join(",");
               }
               try {
                  return H.apply(n, f.querySelectorAll(c)), n;
               } catch (e) {
                  N(t, !0);
               } finally {
                  s === S && e.removeAttribute("id");
               }
            }
         }
         return g(t.replace($, "$1"), e, n, r);
      }
      function ue() {
         var r = [];
         return function e(t, n) {
            return r.push(t + " ") > b.cacheLength && delete e[r.shift()], (e[t + " "] = n);
         };
      }
      function le(e) {
         return (e[S] = !0), e;
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
         var n = e.split("|"),
            r = n.length;
         while (r--) b.attrHandle[n[r]] = t;
      }
      function pe(e, t) {
         var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
         if (r) return r;
         if (n) while ((n = n.nextSibling)) if (n === t) return -1;
         return e ? 1 : -1;
      }
      function de(t) {
         return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
         };
      }
      function he(n) {
         return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n;
         };
      }
      function ge(t) {
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
      function ve(a) {
         return le(function (o) {
            return (
               (o = +o),
               le(function (e, t) {
                  var n,
                     r = a([], e.length, o),
                     i = r.length;
                  while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
               })
            );
         });
      }
      function ye(e) {
         return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      for (e in ((d = se.support = {}),
         (i = se.isXML = function (e) {
            var t = e.namespaceURI,
               n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || "HTML");
         }),
         (T = se.setDocument = function (e) {
            var t,
               n,
               r = e ? e.ownerDocument || e : p;
            return (
               r != C &&
               9 === r.nodeType &&
               r.documentElement &&
               ((a = (C = r).documentElement),
                  (E = !i(C)),
                  p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
                  (d.scope = ce(function (e) {
                     return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                  })),
                  (d.attributes = ce(function (e) {
                     return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (d.getElementsByTagName = ce(function (e) {
                     return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (d.getElementsByClassName = K.test(C.getElementsByClassName)),
                  (d.getById = ce(function (e) {
                     return (a.appendChild(e).id = S), !C.getElementsByName || !C.getElementsByName(S).length;
                  })),
                  d.getById
                     ? ((b.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                           return e.getAttribute("id") === t;
                        };
                     }),
                        (b.find.ID = function (e, t) {
                           if ("undefined" != typeof t.getElementById && E) {
                              var n = t.getElementById(e);
                              return n ? [n] : [];
                           }
                        }))
                     : ((b.filter.ID = function (e) {
                        var n = e.replace(te, ne);
                        return function (e) {
                           var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                           return t && t.value === n;
                        };
                     }),
                        (b.find.ID = function (e, t) {
                           if ("undefined" != typeof t.getElementById && E) {
                              var n,
                                 r,
                                 i,
                                 o = t.getElementById(e);
                              if (o) {
                                 if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                 (i = t.getElementsByName(e)), (r = 0);
                                 while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                              }
                              return [];
                           }
                        })),
                  (b.find.TAG = d.getElementsByTagName
                     ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
                     }
                     : function (e, t) {
                        var n,
                           r = [],
                           i = 0,
                           o = t.getElementsByTagName(e);
                        if ("*" === e) {
                           while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                           return r;
                        }
                        return o;
                     }),
                  (b.find.CLASS =
                     d.getElementsByClassName &&
                     function (e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
                     }),
                  (s = []),
                  (v = []),
                  (d.qsa = K.test(C.querySelectorAll)) &&
                  (ce(function (e) {
                     var t;
                     (a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                        e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                        (t = C.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                        e.querySelectorAll(":checked").length || v.push(":checked"),
                        e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        v.push("[\\r\\n\\f]");
                  }),
                     ce(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = C.createElement("input");
                        t.setAttribute("type", "hidden"),
                           e.appendChild(t).setAttribute("name", "D"),
                           e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                           2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                           (a.appendChild(e).disabled = !0),
                           2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                           e.querySelectorAll("*,:x"),
                           v.push(",.*:");
                     })),
                  (d.matchesSelector = K.test((c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector))) &&
                  ce(function (e) {
                     (d.disconnectedMatch = c.call(e, "*")), c.call(e, "[s!='']:x"), s.push("!=", F);
                  }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (s = s.length && new RegExp(s.join("|"))),
                  (t = K.test(a.compareDocumentPosition)),
                  (y =
                     t || K.test(a.contains)
                        ? function (e, t) {
                           var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                           return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                        }
                        : function (e, t) {
                           if (t) while ((t = t.parentNode)) if (t === e) return !0;
                           return !1;
                        }),
                  (D = t
                     ? function (e, t) {
                        if (e === t) return (l = !0), 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return (
                           n ||
                           (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!d.sortDetached && t.compareDocumentPosition(e) === n)
                              ? e == C || (e.ownerDocument == p && y(p, e))
                                 ? -1
                                 : t == C || (t.ownerDocument == p && y(p, t))
                                    ? 1
                                    : u
                                       ? P(u, e) - P(u, t)
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
                        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                        if (i === o) return pe(e, t);
                        n = e;
                        while ((n = n.parentNode)) a.unshift(n);
                        n = t;
                        while ((n = n.parentNode)) s.unshift(n);
                        while (a[r] === s[r]) r++;
                        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
                     })),
               C
            );
         }),
         (se.matches = function (e, t) {
            return se(e, null, null, t);
         }),
         (se.matchesSelector = function (e, t) {
            if ((T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))))
               try {
                  var n = c.call(e, t);
                  if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
               } catch (e) {
                  N(t, !0);
               }
            return 0 < se(t, C, null, [e]).length;
         }),
         (se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t);
         }),
         (se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
               r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
         }),
         (se.escape = function (e) {
            return (e + "").replace(re, ie);
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
               while ((t = e[i++])) t === e[i] && (r = n.push(i));
               while (r--) e.splice(n[r], 1);
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
            } else while ((t = e[r++])) n += o(t);
            return n;
         }),
         ((b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
               ATTR: function (e) {
                  return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
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
                  return G.CHILD.test(e[0])
                     ? null
                     : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
               },
            },
            filter: {
               TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                     ? function () {
                        return !0;
                     }
                     : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                     };
               },
               CLASS: function (e) {
                  var t = m[e + " "];
                  return (
                     t ||
                     ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                        m(e, function (e) {
                           return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                        }))
                  );
               },
               ATTR: function (n, r, i) {
                  return function (e) {
                     var t = se.attr(e, n);
                     return null == t
                        ? "!=" === r
                        : !r ||
                        ((t += ""),
                           "=" === r
                              ? t === i
                              : "!=" === r
                                 ? t !== i
                                 : "^=" === r
                                    ? i && 0 === t.indexOf(i)
                                    : "*=" === r
                                       ? i && -1 < t.indexOf(i)
                                       : "$=" === r
                                          ? i && t.slice(-i.length) === i
                                          : "~=" === r
                                             ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                                             : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                  };
               },
               CHILD: function (h, e, t, g, v) {
                  var y = "nth" !== h.slice(0, 3),
                     m = "last" !== h.slice(-4),
                     x = "of-type" === e;
                  return 1 === g && 0 === v
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
                           l = y !== m ? "nextSibling" : "previousSibling",
                           c = e.parentNode,
                           f = x && e.nodeName.toLowerCase(),
                           p = !n && !x,
                           d = !1;
                        if (c) {
                           if (y) {
                              while (l) {
                                 a = e;
                                 while ((a = a[l])) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                 u = l = "only" === h && !u && "nextSibling";
                              }
                              return !0;
                           }
                           if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                              (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2]), (a = s && c.childNodes[s]);
                              while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                 if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [k, s, d];
                                    break;
                                 }
                           } else if ((p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d))
                              while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                 if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                           return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                        }
                     };
               },
               PSEUDO: function (e, o) {
                  var t,
                     a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                  return a[S]
                     ? a(o)
                     : 1 < a.length
                        ? ((t = [e, e, "", o]),
                           b.setFilters.hasOwnProperty(e.toLowerCase())
                              ? le(function (e, t) {
                                 var n,
                                    r = a(e, o),
                                    i = r.length;
                                 while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
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
                     s = f(e.replace($, "$1"));
                  return s[S]
                     ? le(function (e, t, n, r) {
                        var i,
                           o = s(e, null, r, []),
                           a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
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
                     (t = t.replace(te, ne)),
                     function (e) {
                        return -1 < (e.textContent || o(e)).indexOf(t);
                     }
                  );
               }),
               lang: le(function (n) {
                  return (
                     V.test(n || "") || se.error("unsupported lang: " + n),
                     (n = n.replace(te, ne).toLowerCase()),
                     function (e) {
                        var t;
                        do {
                           if ((t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
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
               enabled: ge(!1),
               disabled: ge(!0),
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
                  return !b.pseudos.empty(e);
               },
               header: function (e) {
                  return J.test(e.nodeName);
               },
               input: function (e) {
                  return Q.test(e.nodeName);
               },
               button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && "button" === e.type) || "button" === t;
               },
               text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
               },
               first: ve(function () {
                  return [0];
               }),
               last: ve(function (e, t) {
                  return [t - 1];
               }),
               eq: ve(function (e, t, n) {
                  return [n < 0 ? n + t : n];
               }),
               even: ve(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
               }),
               odd: ve(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
               }),
               lt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                  return e;
               }),
               gt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                  return e;
               }),
            },
         }).pseudos.nth = b.pseudos.eq),
         { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
         b.pseudos[e] = de(e);
      for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
      function me() { }
      function xe(e) {
         for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
         return r;
      }
      function be(s, e, t) {
         var u = e.dir,
            l = e.next,
            c = l || u,
            f = t && "parentNode" === c,
            p = r++;
         return e.first
            ? function (e, t, n) {
               while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
               return !1;
            }
            : function (e, t, n) {
               var r,
                  i,
                  o,
                  a = [k, p];
               if (n) {
                  while ((e = e[u])) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
               } else
                  while ((e = e[u]))
                     if (1 === e.nodeType || f)
                        if (((i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[u] || e;
                        else {
                           if ((r = i[c]) && r[0] === k && r[1] === p) return (a[2] = r[2]);
                           if (((i[c] = a)[2] = s(e, t, n))) return !0;
                        }
               return !1;
            };
      }
      function we(i) {
         return 1 < i.length
            ? function (e, t, n) {
               var r = i.length;
               while (r--) if (!i[r](e, t, n)) return !1;
               return !0;
            }
            : i[0];
      }
      function Te(e, t, n, r, i) {
         for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
         return a;
      }
      function Ce(d, h, g, v, y, e) {
         return (
            v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
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
                  f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                  p = g ? (y || (e ? d : l || v) ? [] : t) : f;
               if ((g && g(f, p, n, r), v)) {
                  (i = Te(p, u)), v(i, [], n, r), (o = i.length);
                  while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
               }
               if (e) {
                  if (y || d) {
                     if (y) {
                        (i = []), (o = p.length);
                        while (o--) (a = p[o]) && i.push((f[o] = a));
                        y(null, (p = []), i, r);
                     }
                     o = p.length;
                     while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                  }
               } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
            })
         );
      }
      function Ee(e) {
         for (
            var i,
            t,
            n,
            r = e.length,
            o = b.relative[e[0].type],
            a = o || b.relative[" "],
            s = o ? 1 : 0,
            u = be(
               function (e) {
                  return e === i;
               },
               a,
               !0
            ),
            l = be(
               function (e) {
                  return -1 < P(i, e);
               },
               a,
               !0
            ),
            c = [
               function (e, t, n) {
                  var r = (!o && (n || t !== w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                  return (i = null), r;
               },
            ];
            s < r;
            s++
         )
            if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
            else {
               if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                  for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                  return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee((e = e.slice(n))), n < r && xe(e));
               }
               c.push(t);
            }
         return we(c);
      }
      return (
         (me.prototype = b.filters = b.pseudos),
         (b.setFilters = new me()),
         (h = se.tokenize = function (e, t) {
            var n,
               r,
               i,
               o,
               a,
               s,
               u,
               l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            (a = e), (s = []), (u = b.preFilter);
            while (a) {
               for (o in ((n && !(r = _.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                  (n = !1),
                  (r = z.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace($, " ") }), (a = a.slice(n.length))),
                  b.filter))
                  !(r = G[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
               if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
         }),
         (f = se.compile = function (e, t) {
            var n,
               v,
               y,
               m,
               x,
               r,
               i = [],
               o = [],
               a = A[e + " "];
            if (!a) {
               t || (t = h(e)), (n = t.length);
               while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
               (a = A(
                  e,
                  ((v = o),
                     (m = 0 < (y = i).length),
                     (x = 0 < v.length),
                     (r = function (e, t, n, r, i) {
                        var o,
                           a,
                           s,
                           u = 0,
                           l = "0",
                           c = e && [],
                           f = [],
                           p = w,
                           d = e || (x && b.find.TAG("*", i)),
                           h = (k += null == p ? 1 : Math.random() || 0.1),
                           g = d.length;
                        for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                           if (x && o) {
                              (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                              while ((s = v[a++]))
                                 if (s(o, t || C, n)) {
                                    r.push(o);
                                    break;
                                 }
                              i && (k = h);
                           }
                           m && ((o = !s && o) && u--, e && c.push(o));
                        }
                        if (((u += l), m && l !== u)) {
                           a = 0;
                           while ((s = y[a++])) s(c, f, t, n);
                           if (e) {
                              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                              f = Te(f);
                           }
                           H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                        }
                        return i && ((k = h), (w = p)), c;
                     }),
                     m ? le(r) : r)
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
               c = !r && h((e = l.selector || e));
            if (((n = n || []), 1 === c.length)) {
               if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                  if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                  l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
               }
               i = G.needsContext.test(e) ? 0 : o.length;
               while (i--) {
                  if (((a = o[i]), b.relative[(s = a.type)])) break;
                  if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), (ee.test(o[0].type) && ye(t.parentNode)) || t))) {
                     if ((o.splice(i, 1), !(e = r.length && xe(o)))) return H.apply(n, r), n;
                     break;
                  }
               }
            }
            return (l || f(e, c))(r, t, !E, n, !t || (ee.test(e) && ye(t.parentNode)) || t), n;
         }),
         (d.sortStable = S.split("").sort(D).join("") === S),
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
         fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
         }),
         se
      );
   })(C);
   (S.find = d), (S.expr = d.selectors), (S.expr[":"] = S.expr.pseudos), (S.uniqueSort = S.unique = d.uniqueSort), (S.text = d.getText), (S.isXMLDoc = d.isXML), (S.contains = d.contains), (S.escapeSelector = d.escape);
   var h = function (e, t, n) {
      var r = [],
         i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
         if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e);
         }
      return r;
   },
      T = function (e, t) {
         for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
         return n;
      },
      k = S.expr.match.needsContext;
   function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
   }
   var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
   function D(e, n, r) {
      return m(n)
         ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r;
         })
         : n.nodeType
            ? S.grep(e, function (e) {
               return (e === n) !== r;
            })
            : "string" != typeof n
               ? S.grep(e, function (e) {
                  return -1 < i.call(n, e) !== r;
               })
               : S.filter(n, e, r);
   }
   (S.filter = function (e, t, n) {
      var r = t[0];
      return (
         n && (e = ":not(" + e + ")"),
         1 === t.length && 1 === r.nodeType
            ? S.find.matchesSelector(r, e)
               ? [r]
               : []
            : S.find.matches(
               e,
               S.grep(t, function (e) {
                  return 1 === e.nodeType;
               })
            )
      );
   }),
      S.fn.extend({
         find: function (e) {
            var t,
               n,
               r = this.length,
               i = this;
            if ("string" != typeof e)
               return this.pushStack(
                  S(e).filter(function () {
                     for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                  })
               );
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n;
         },
         filter: function (e) {
            return this.pushStack(D(this, e || [], !1));
         },
         not: function (e) {
            return this.pushStack(D(this, e || [], !0));
         },
         is: function (e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
         },
      });
   var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
   ((S.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || j), "string" == typeof e)) {
         if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
         if (r[1]) {
            if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
         }
         return (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
      }
      return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
   }).prototype = S.fn),
      (j = S(E));
   var L = /^(?:parents|prev(?:Until|All))/,
      H = { children: !0, contents: !0, next: !0, prev: !0 };
   function O(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e;
   }
   S.fn.extend({
      has: function (e) {
         var t = S(e, this),
            n = t.length;
         return this.filter(function () {
            for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
         });
      },
      closest: function (e, t) {
         var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && S(e);
         if (!k.test(e))
            for (; r < i; r++)
               for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                     o.push(n);
                     break;
                  }
         return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
      },
      index: function (e) {
         return e ? ("string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function (e, t) {
         return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
      },
      addBack: function (e) {
         return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
   }),
      S.each(
         {
            parent: function (e) {
               var t = e.parentNode;
               return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
               return h(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
               return h(e, "parentNode", n);
            },
            next: function (e) {
               return O(e, "nextSibling");
            },
            prev: function (e) {
               return O(e, "previousSibling");
            },
            nextAll: function (e) {
               return h(e, "nextSibling");
            },
            prevAll: function (e) {
               return h(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
               return h(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
               return h(e, "previousSibling", n);
            },
            siblings: function (e) {
               return T((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
               return T(e.firstChild);
            },
            contents: function (e) {
               return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
            },
         },
         function (r, i) {
            S.fn[r] = function (e, t) {
               var n = S.map(this, i, e);
               return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
            };
         }
      );
   var P = /[^\x20\t\r\n\f]+/g;
   function R(e) {
      return e;
   }
   function M(e) {
      throw e;
   }
   function I(e, t, n, r) {
      var i;
      try {
         e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
         n.apply(void 0, [e]);
      }
   }
   (S.Callbacks = function (r) {
      var e, n;
      r =
         "string" == typeof r
            ? ((e = r),
               (n = {}),
               S.each(e.match(P) || [], function (e, t) {
                  n[t] = !0;
               }),
               n)
            : S.extend({}, r);
      var i,
         t,
         o,
         a,
         s = [],
         u = [],
         l = -1,
         c = function () {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
               t = u.shift();
               while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
            }
            r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
         },
         f = {
            add: function () {
               return (
                  s &&
                  (t && !i && ((l = s.length - 1), u.push(t)),
                     (function n(e) {
                        S.each(e, function (e, t) {
                           m(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                        });
                     })(arguments),
                     t && !i && c()),
                  this
               );
            },
            remove: function () {
               return (
                  S.each(arguments, function (e, t) {
                     var n;
                     while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                  }),
                  this
               );
            },
            has: function (e) {
               return e ? -1 < S.inArray(e, s) : 0 < s.length;
            },
            empty: function () {
               return s && (s = []), this;
            },
            disable: function () {
               return (a = u = []), (s = t = ""), this;
            },
            disabled: function () {
               return !s;
            },
            lock: function () {
               return (a = u = []), t || i || (s = t = ""), this;
            },
            locked: function () {
               return !!a;
            },
            fireWith: function (e, t) {
               return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
            },
            fire: function () {
               return f.fireWith(this, arguments), this;
            },
            fired: function () {
               return !!o;
            },
         };
      return f;
   }),
      S.extend({
         Deferred: function (e) {
            var o = [
               ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
               ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
               ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
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
                     return S.Deferred(function (r) {
                        S.each(o, function (e, t) {
                           var n = m(i[t[4]]) && i[t[4]];
                           s[t[1]](function () {
                              var e = n && n.apply(this, arguments);
                              e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                           });
                        }),
                           (i = null);
                     }).promise();
                  },
                  then: function (t, n, r) {
                     var u = 0;
                     function l(i, o, a, s) {
                        return function () {
                           var n = this,
                              r = arguments,
                              e = function () {
                                 var e, t;
                                 if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                    (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                       m(t)
                                          ? s
                                             ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                                             : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith)))
                                          : (a !== R && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                                 }
                              },
                              t = s
                                 ? e
                                 : function () {
                                    try {
                                       e();
                                    } catch (e) {
                                       S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                    }
                                 };
                           i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
                        };
                     }
                     return S.Deferred(function (e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
                     }).promise();
                  },
                  promise: function (e) {
                     return null != e ? S.extend(e, a) : a;
                  },
               },
               s = {};
            return (
               S.each(o, function (e, t) {
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
            var n = arguments.length,
               t = n,
               r = Array(t),
               i = s.call(arguments),
               o = S.Deferred(),
               a = function (t) {
                  return function (e) {
                     (r[t] = this), (i[t] = 1 < arguments.length ? s.call(arguments) : e), --n || o.resolveWith(r, i);
                  };
               };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise();
         },
      });
   var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
   (S.Deferred.exceptionHook = function (e, t) {
      C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
   }),
      (S.readyException = function (e) {
         C.setTimeout(function () {
            throw e;
         });
      });
   var F = S.Deferred();
   function B() {
      E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
   }
   (S.fn.ready = function (e) {
      return (
         F.then(e)["catch"](function (e) {
            S.readyException(e);
         }),
         this
      );
   }),
      S.extend({
         isReady: !1,
         readyWait: 1,
         ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || F.resolveWith(E, [S]);
         },
      }),
      (S.ready.then = F.then),
      "complete" === E.readyState || ("loading" !== E.readyState && !E.documentElement.doScroll) ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
   var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
         u = e.length,
         l = null == n;
      if ("object" === w(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
         void 0 !== r &&
         ((i = !0),
            m(r) || (a = !0),
            l &&
            (a
               ? (t.call(e, r), (t = null))
               : ((l = t),
                  (t = function (e, t, n) {
                     return l.call(S(e), n);
                  }))),
            t)
      )
         for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
   },
      _ = /^-ms-/,
      z = /-([a-z])/g;
   function U(e, t) {
      return t.toUpperCase();
   }
   function X(e) {
      return e.replace(_, "ms-").replace(z, U);
   }
   var V = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
   };
   function G() {
      this.expando = S.expando + G.uid++;
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
            if ("string" == typeof t) i[X(t)] = n;
            else for (r in t) i[X(r)] = t[r];
            return i;
         },
         get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
         },
         access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
         },
         remove: function (e, t) {
            var n,
               r = e[this.expando];
            if (void 0 !== r) {
               if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                  while (n--) delete r[t[n]];
               }
               (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
         },
         hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t);
         },
      });
   var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;
   function Z(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
         if (((r = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
            try {
               n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i));
            } catch (e) { }
            Q.set(e, t, n);
         } else n = void 0;
      return n;
   }
   S.extend({
      hasData: function (e) {
         return Q.hasData(e) || Y.hasData(e);
      },
      data: function (e, t, n) {
         return Q.access(e, t, n);
      },
      removeData: function (e, t) {
         Q.remove(e, t);
      },
      _data: function (e, t, n) {
         return Y.access(e, t, n);
      },
      _removeData: function (e, t) {
         Y.remove(e, t);
      },
   }),
      S.fn.extend({
         data: function (n, e) {
            var t,
               r,
               i,
               o = this[0],
               a = o && o.attributes;
            if (void 0 === n) {
               if (this.length && ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                  t = a.length;
                  while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = X(r.slice(5))), Z(o, r, i[r]));
                  Y.set(o, "hasDataAttrs", !0);
               }
               return i;
            }
            return "object" == typeof n
               ? this.each(function () {
                  Q.set(this, n);
               })
               : $(
                  this,
                  function (e) {
                     var t;
                     if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                     this.each(function () {
                        Q.set(this, n, e);
                     });
                  },
                  null,
                  e,
                  1 < arguments.length,
                  null,
                  !0
               );
         },
         removeData: function (e) {
            return this.each(function () {
               Q.remove(this, e);
            });
         },
      }),
      S.extend({
         queue: function (e, t, n) {
            var r;
            if (e) return (t = (t || "fx") + "queue"), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, S.makeArray(n))) : r.push(n)), r || [];
         },
         dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
               r = n.length,
               i = n.shift(),
               o = S._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
               i &&
               ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                     e,
                     function () {
                        S.dequeue(e, t);
                     },
                     o
                  )),
               !r && o && o.empty.fire();
         },
         _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
               Y.get(e, n) ||
               Y.access(e, n, {
                  empty: S.Callbacks("once memory").add(function () {
                     Y.remove(e, [t + "queue", n]);
                  }),
               })
            );
         },
      }),
      S.fn.extend({
         queue: function (t, n) {
            var e = 2;
            return (
               "string" != typeof t && ((n = t), (t = "fx"), e--),
               arguments.length < e
                  ? S.queue(this[0], t)
                  : void 0 === n
                     ? this
                     : this.each(function () {
                        var e = S.queue(this, t, n);
                        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                     })
            );
         },
         dequeue: function (e) {
            return this.each(function () {
               S.dequeue(this, e);
            });
         },
         clearQueue: function (e) {
            return this.queue(e || "fx", []);
         },
         promise: function (e, t) {
            var n,
               r = 1,
               i = S.Deferred(),
               o = this,
               a = this.length,
               s = function () {
                  --r || i.resolveWith(o, [o]);
               };
            "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
            while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
         },
      });
   var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function (e) {
         return S.contains(e.ownerDocument, e);
      },
      oe = { composed: !0 };
   re.getRootNode &&
      (ie = function (e) {
         return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
      });
   var ae = function (e, t) {
      return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === S.css(e, "display"));
   };
   function se(e, t, n, r) {
      var i,
         o,
         a = 20,
         s = r
            ? function () {
               return r.cur();
            }
            : function () {
               return S.css(e, t, "");
            },
         u = s(),
         l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
         c = e.nodeType && (S.cssNumber[t] || ("px" !== l && +u)) && te.exec(S.css(e, t));
      if (c && c[3] !== l) {
         (u /= 2), (l = l || c[3]), (c = +u || 1);
         while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
         (c *= 2), S.style(e, t, c + l), (n = n || []);
      }
      return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
   }
   var ue = {};
   function le(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
         (r = e[c]).style &&
            ((n = r.style.display),
               t
                  ? ("none" === n && ((l[c] = Y.get(r, "display") || null), l[c] || (r.style.display = "")),
                     "" === r.style.display &&
                     ae(r) &&
                     (l[c] =
                        ((u = a = o = void 0),
                           (a = (i = r).ownerDocument),
                           (s = i.nodeName),
                           (u = ue[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = S.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (ue[s] = u)))))
                  : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e;
   }
   S.fn.extend({
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
               ae(this) ? S(this).show() : S(this).hide();
            });
      },
   });
   var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
   (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
      (fe = E.createElement("input")).setAttribute("type", "radio"),
      fe.setAttribute("checked", "checked"),
      fe.setAttribute("name", "t"),
      ce.appendChild(fe),
      (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ce.innerHTML = "<textarea>x</textarea>"),
      (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
      (ce.innerHTML = "<option></option>"),
      (y.option = !!ce.lastChild);
   var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
   function ve(e, t) {
      var n;
      return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n;
   }
   function ye(e, t) {
      for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
   }
   (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td), y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
   var me = /<|&#?\w+;/;
   function xe(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
         if ((o = e[d]) || 0 === o)
            if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
            else if (me.test(o)) {
               (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]), (c = u[0]);
               while (c--) a = a.lastChild;
               S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
            } else p.push(t.createTextNode(o));
      (f.textContent = ""), (d = 0);
      while ((o = p[d++]))
         if (r && -1 < S.inArray(o, r)) i && i.push(o);
         else if (((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)) {
            c = 0;
            while ((o = a[c++])) he.test(o.type || "") && n.push(o);
         }
      return f;
   }
   var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;
   function Ce() {
      return !0;
   }
   function Ee() {
      return !1;
   }
   function Se(e, t) {
      return (
         (e ===
            (function () {
               try {
                  return E.activeElement;
               } catch (e) { }
            })()) ==
         ("focus" === t)
      );
   }
   function ke(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
         for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) ke(e, s, n, r, t[s], o);
         return e;
      }
      if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Ee;
      else if (!i) return e;
      return (
         1 === o &&
         ((a = i),
            ((i = function (e) {
               return S().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = S.guid++))),
         e.each(function () {
            S.event.add(this, t, i, r, n);
         })
      );
   }
   function Ae(e, i, o) {
      o
         ? (Y.set(e, i, !1),
            S.event.add(e, i, {
               namespace: !1,
               handler: function (e) {
                  var t,
                     n,
                     r = Y.get(this, i);
                  if (1 & e.isTrigger && this[i]) {
                     if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();
                     else if (((r = s.call(arguments)), Y.set(this, i, r), (t = o(this, i)), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}), r !== n))
                        return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                  } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
               },
            }))
         : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
   }
   (S.event = {
      global: {},
      add: function (t, e, n, r, i) {
         var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = Y.get(t);
         if (V(t)) {
            n.handler && ((n = (o = n).handler), (i = o.selector)),
               i && S.find.matchesSelector(re, i),
               n.guid || (n.guid = S.guid++),
               (u = v.events) || (u = v.events = Object.create(null)),
               (a = v.handle) ||
               (a = v.handle = function (e) {
                  return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
               }),
               (l = (e = (e || "").match(P) || [""]).length);
            while (l--)
               (d = g = (s = Te.exec(e[l]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  d &&
                  ((f = S.event.special[d] || {}),
                     (d = (i ? f.delegateType : f.bindType) || d),
                     (f = S.event.special[d] || {}),
                     (c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                     (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
                     f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                     i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                     (S.event.global[d] = !0));
         }
      },
      remove: function (e, t, n, r, i) {
         var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = Y.hasData(e) && Y.get(e);
         if (v && (u = v.events)) {
            l = (t = (t || "").match(P) || [""]).length;
            while (l--)
               if (((d = g = (s = Te.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                  (f = S.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                  while (o--)
                     (c = p[o]),
                        (!i && g !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (s && !s.test(c.namespace)) ||
                        (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                        (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                  a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || S.removeEvent(e, d, v.handle), delete u[d]);
               } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
            S.isEmptyObject(u) && Y.remove(e, "handle events");
         }
      },
      dispatch: function (e) {
         var t,
            n,
            r,
            i,
            o,
            a,
            s = new Array(arguments.length),
            u = S.event.fix(e),
            l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
            c = S.event.special[u.type] || {};
         for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
         if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
            (a = S.event.handlers.call(this, u, l)), (t = 0);
            while ((i = a[t++]) && !u.isPropagationStopped()) {
               (u.currentTarget = i.elem), (n = 0);
               while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                  (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                     ((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
            }
            return c.postDispatch && c.postDispatch.call(this, u), u.result;
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
                  for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                  o.length && s.push({ elem: l, handlers: o });
               }
         return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
      },
      addProp: function (t, e) {
         Object.defineProperty(S.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: m(e)
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
         return e[S.expando] ? e : new S.Event(e);
      },
      special: {
         load: { noBubble: !0 },
         click: {
            setup: function (e) {
               var t = this || e;
               return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
            },
            trigger: function (e) {
               var t = this || e;
               return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
            },
            _default: function (e) {
               var t = e.target;
               return (pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click")) || A(t, "a");
            },
         },
         beforeunload: {
            postDispatch: function (e) {
               void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            },
         },
      },
   }),
      (S.removeEvent = function (e, t, n) {
         e.removeEventListener && e.removeEventListener(t, n);
      }),
      (S.Event = function (e, t) {
         if (!(this instanceof S.Event)) return new S.Event(e, t);
         e && e.type
            ? ((this.originalEvent = e),
               (this.type = e.type),
               (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Ee),
               (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
               (this.currentTarget = e.currentTarget),
               (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && S.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[S.expando] = !0);
      }),
      (S.Event.prototype = {
         constructor: S.Event,
         isDefaultPrevented: Ee,
         isPropagationStopped: Ee,
         isImmediatePropagationStopped: Ee,
         isSimulated: !1,
         preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
         },
         stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
         },
         stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
         },
      }),
      S.each(
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
               return null == e.which && be.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && we.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
            },
         },
         S.event.addProp
      ),
      S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
         S.event.special[e] = {
            setup: function () {
               return Ae(this, e, Se), !1;
            },
            trigger: function () {
               return Ae(this, e), !0;
            },
            delegateType: t,
         };
      }),
      S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
         S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
               var t,
                  n = e.relatedTarget,
                  r = e.handleObj;
               return (n && (n === this || S.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
            },
         };
      }),
      S.fn.extend({
         on: function (e, t, n, r) {
            return ke(this, e, t, n, r);
         },
         one: function (e, t, n, r) {
            return ke(this, e, t, n, r, 1);
         },
         off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
               for (i in e) this.off(i, t, e[i]);
               return this;
            }
            return (
               (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
               !1 === n && (n = Ee),
               this.each(function () {
                  S.event.remove(this, e, n, t);
               })
            );
         },
      });
   var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
   function qe(e, t) {
      return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
   }
   function Le(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
   }
   function He(e) {
      return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
   }
   function Oe(e, t) {
      var n, r, i, o, a, s;
      if (1 === t.nodeType) {
         if (Y.hasData(e) && (s = Y.get(e).events)) for (i in (Y.remove(t, "handle events"), s)) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
         Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
      }
   }
   function Pe(n, r, i, o) {
      r = g(r);
      var e,
         t,
         a,
         s,
         u,
         l,
         c = 0,
         f = n.length,
         p = f - 1,
         d = r[0],
         h = m(d);
      if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
         return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
         });
      if (f && ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
         for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) (u = e), c !== p && ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
         if (s)
            for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
               (u = a[c]),
                  he.test(u.type || "") &&
                  !Y.access(u, "globalEval") &&
                  S.contains(l, u) &&
                  (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l));
      }
      return n;
   }
   function Re(e, t, n) {
      for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
      return e;
   }
   S.extend({
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
         if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
            for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
               (s = o[r]), (u = a[r]), void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
         if (t)
            if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
            else Oe(e, c);
         return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
      },
      cleanData: function (e) {
         for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
            if (V(n)) {
               if ((t = n[Y.expando])) {
                  if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                  n[Y.expando] = void 0;
               }
               n[Q.expando] && (n[Q.expando] = void 0);
            }
      },
   }),
      S.fn.extend({
         detach: function (e) {
            return Re(this, e, !0);
         },
         remove: function (e) {
            return Re(this, e);
         },
         text: function (e) {
            return $(
               this,
               function (e) {
                  return void 0 === e
                     ? S.text(this)
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
            return Pe(this, arguments, function (e) {
               (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || qe(this, e).appendChild(e);
            });
         },
         prepend: function () {
            return Pe(this, arguments, function (e) {
               if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = qe(this, e);
                  t.insertBefore(e, t.firstChild);
               }
            });
         },
         before: function () {
            return Pe(this, arguments, function (e) {
               this.parentNode && this.parentNode.insertBefore(e, this);
            });
         },
         after: function () {
            return Pe(this, arguments, function (e) {
               this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
         },
         empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
            return this;
         },
         clone: function (e, t) {
            return (
               (e = null != e && e),
               (t = null == t ? e : t),
               this.map(function () {
                  return S.clone(this, e, t);
               })
            );
         },
         html: function (e) {
            return $(
               this,
               function (e) {
                  var t = this[0] || {},
                     n = 0,
                     r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                     e = S.htmlPrefilter(e);
                     try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                        t = 0;
                     } catch (e) { }
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
            return Pe(
               this,
               arguments,
               function (e) {
                  var t = this.parentNode;
                  S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
               },
               n
            );
         },
      }),
      S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
         S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n);
         };
      });
   var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function (e) {
         var t = e.ownerDocument.defaultView;
         return (t && t.opener) || (t = C), t.getComputedStyle(e);
      },
      We = function (e, t, n) {
         var r,
            i,
            o = {};
         for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
         for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
         return r;
      },
      Fe = new RegExp(ne.join("|"), "i");
   function Be(e, t, n) {
      var r,
         i,
         o,
         a,
         s = e.style;
      return (
         (n = n || Ie(e)) &&
         ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
            !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
         void 0 !== a ? a + "" : a
      );
   }
   function $e(e, t) {
      return {
         get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
         },
      };
   }
   !(function () {
      function e() {
         if (l) {
            (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
               (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
               re.appendChild(u).appendChild(l);
            var e = C.getComputedStyle(l);
            (n = "1%" !== e.top),
               (s = 12 === t(e.marginLeft)),
               (l.style.right = "60%"),
               (o = 36 === t(e.right)),
               (r = 36 === t(e.width)),
               (l.style.position = "absolute"),
               (i = 12 === t(l.offsetWidth / 3)),
               re.removeChild(u),
               (l = null);
         }
      }
      function t(e) {
         return Math.round(parseFloat(e));
      }
      var n,
         r,
         i,
         o,
         a,
         s,
         u = E.createElement("div"),
         l = E.createElement("div");
      l.style &&
         ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
            S.extend(y, {
               boxSizingReliable: function () {
                  return e(), r;
               },
               pixelBoxStyles: function () {
                  return e(), o;
               },
               pixelPosition: function () {
                  return e(), n;
               },
               reliableMarginLeft: function () {
                  return e(), s;
               },
               scrollboxSize: function () {
                  return e(), i;
               },
               reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                     null == a &&
                     ((e = E.createElement("table")),
                        (t = E.createElement("tr")),
                        (n = E.createElement("div")),
                        (e.style.cssText = "position:absolute;left:-11111px"),
                        (t.style.height = "1px"),
                        (n.style.height = "9px"),
                        re.appendChild(e).appendChild(t).appendChild(n),
                        (r = C.getComputedStyle(t)),
                        (a = 3 < parseInt(r.height)),
                        re.removeChild(e)),
                     a
                  );
               },
            }));
   })();
   var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};
   function Xe(e) {
      var t = S.cssProps[e] || Ue[e];
      return (
         t ||
         (e in ze
            ? e
            : (Ue[e] =
               (function (e) {
                  var t = e[0].toUpperCase() + e.slice(1),
                     n = _e.length;
                  while (n--) if ((e = _e[n] + t) in ze) return e;
               })(e) || e))
      );
   }
   var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = { position: "absolute", visibility: "hidden", display: "block" },
      Qe = { letterSpacing: "0", fontWeight: "400" };
   function Je(e, t, n) {
      var r = te.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
   }
   function Ke(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
         s = 0,
         u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
         "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r
               ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
               : ((u += S.css(e, "padding" + ne[a], !0, i)), "padding" !== n ? (u += S.css(e, "border" + ne[a] + "Width", !0, i)) : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
      return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
   }
   function Ze(e, t, n) {
      var r = Ie(e),
         i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
         o = i,
         a = Be(e, t, r),
         s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Me.test(a)) {
         if (!n) return a;
         a = "auto";
      }
      return (
         ((!y.boxSizingReliable() && i) || (!y.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
         e.getClientRects().length &&
         ((i = "border-box" === S.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
         (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
      );
   }
   function et(e, t, n, r, i) {
      return new et.prototype.init(e, t, n, r, i);
   }
   S.extend({
      cssHooks: {
         opacity: {
            get: function (e, t) {
               if (t) {
                  var n = Be(e, "opacity");
                  return "" === n ? "1" : n;
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
               s = X(t),
               u = Ge.test(t),
               l = e.style;
            if ((u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
            "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = se(e, t, i)), (o = "number")),
               null != n &&
               n == n &&
               ("number" !== o || u || (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                  y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
         }
      },
      css: function (e, t, n, r) {
         var i,
            o,
            a,
            s = X(t);
         return (
            Ge.test(t) || (t = Xe(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
         );
      },
   }),
      S.each(["height", "width"], function (e, u) {
         S.cssHooks[u] = {
            get: function (e, t, n) {
               if (t)
                  return !Ve.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                     ? Ze(e, u, n)
                     : We(e, Ye, function () {
                        return Ze(e, u, n);
                     });
            },
            set: function (e, t, n) {
               var r,
                  i = Ie(e),
                  o = !y.scrollboxSize() && "absolute" === i.position,
                  a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                  s = n ? Ke(e, u, n, a, i) : 0;
               return (
                  a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - 0.5)),
                  s && (r = te.exec(t)) && "px" !== (r[3] || "px") && ((e.style[u] = t), (t = S.css(e, u))),
                  Je(0, t, s)
               );
            },
         };
      }),
      (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
         if (t)
            return (
               (parseFloat(Be(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                  We(e, { marginLeft: 0 }, function () {
                     return e.getBoundingClientRect().left;
                  })) + "px"
            );
      })),
      S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
         (S.cssHooks[i + o] = {
            expand: function (e) {
               for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
               return n;
            },
         }),
            "margin" !== i && (S.cssHooks[i + o].set = Je);
      }),
      S.fn.extend({
         css: function (e, t) {
            return $(
               this,
               function (e, t, n) {
                  var r,
                     i,
                     o = {},
                     a = 0;
                  if (Array.isArray(t)) {
                     for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                     return o;
                  }
                  return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
               },
               e,
               t,
               1 < arguments.length
            );
         },
      }),
      (((S.Tween = et).prototype = {
         constructor: et,
         init: function (e, t, n, r, i, o) {
            (this.elem = e), (this.prop = n), (this.easing = i || S.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (S.cssNumber[n] ? "" : "px"));
         },
         cur: function () {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this);
         },
         run: function (e) {
            var t,
               n = et.propHooks[this.prop];
            return (
               this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
               (this.now = (this.end - this.start) * t + this.start),
               this.options.step && this.options.step.call(this.elem, this.now, this),
               n && n.set ? n.set(this) : et.propHooks._default.set(this),
               this
            );
         },
      }).init.prototype = et.prototype),
      ((et.propHooks = {
         _default: {
            get: function (e) {
               var t;
               return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function (e) {
               S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)]) ? (e.elem[e.prop] = e.now) : S.style(e.elem, e.prop, e.now + e.unit);
            },
         },
      }).scrollTop = et.propHooks.scrollLeft = {
         set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
         },
      }),
      (S.easing = {
         linear: function (e) {
            return e;
         },
         swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
         },
         _default: "swing",
      }),
      (S.fx = et.prototype.init),
      (S.fx.step = {});
   var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;
   function st() {
      nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
   }
   function ut() {
      return (
         C.setTimeout(function () {
            tt = void 0;
         }),
         (tt = Date.now())
      );
   }
   function lt(e, t) {
      var n,
         r = 0,
         i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
   }
   function ct(e, t, n) {
      for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
   }
   function ft(o, e, t) {
      var n,
         a,
         r = 0,
         i = ft.prefilters.length,
         s = S.Deferred().always(function () {
            delete u.elem;
         }),
         u = function () {
            if (a) return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
         },
         l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
               var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
               return l.tweens.push(n), n;
            },
            stop: function (e) {
               var t = 0,
                  n = e ? l.tweens.length : 0;
               if (a) return this;
               for (a = !0; t < n; t++) l.tweens[t].run(1);
               return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
            },
         }),
         c = l.props;
      for (
         !(function (e, t) {
            var n, r, i, o, a;
            for (n in e)
               if (((i = t[(r = X(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)))
                  for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
               else t[r] = i;
         })(c, l.opts.specialEasing);
         r < i;
         r++
      )
         if ((n = ft.prefilters[r].call(l, o, c, l.opts))) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
      return (
         S.map(c, ct, l),
         m(l.opts.start) && l.opts.start.call(o, l),
         l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
         S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
         l
      );
   }
   (S.Animation = S.extend(ft, {
      tweeners: {
         "*": [
            function (e, t) {
               var n = this.createTween(e, t);
               return se(n.elem, e, te.exec(t), n), n;
            },
         ],
      },
      tweener: function (e, t) {
         m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
         for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
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
               c,
               f = "width" in t || "height" in t,
               p = this,
               d = {},
               h = e.style,
               g = e.nodeType && ae(e),
               v = Y.get(e, "fxshow");
            for (r in (n.queue ||
               (null == (a = S._queueHooks(e, "fx")).unqueued &&
                  ((a.unqueued = 0),
                     (s = a.empty.fire),
                     (a.empty.fire = function () {
                        a.unqueued || s();
                     })),
                  a.unqueued++,
                  p.always(function () {
                     p.always(function () {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                     });
                  })),
               t))
               if (((i = t[r]), ot.test(i))) {
                  if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                     if ("show" !== i || !v || void 0 === v[r]) continue;
                     g = !0;
                  }
                  d[r] = (v && v[r]) || S.style(e, r);
               }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
               for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                     null == (l = v && v.display) && (l = Y.get(e, "display")),
                     "none" === (c = S.css(e, "display")) && (l ? (c = l) : (le([e], !0), (l = e.style.display || l), (c = S.css(e, "display")), le([e]))),
                     ("inline" === c || ("inline-block" === c && null != l)) &&
                     "none" === S.css(e, "float") &&
                     (u ||
                        (p.done(function () {
                           h.display = l;
                        }),
                           null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                        (h.display = "inline-block"))),
                  n.overflow &&
                  ((h.overflow = "hidden"),
                     p.always(function () {
                        (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                     })),
                  (u = !1),
                  d))
                  u ||
                     (v ? "hidden" in v && (g = v.hidden) : (v = Y.access(e, "fxshow", { display: l })),
                        o && (v.hidden = !g),
                        g && le([e], !0),
                        p.done(function () {
                           for (r in (g || le([e]), Y.remove(e, "fxshow"), d)) S.style(e, r, d[r]);
                        })),
                     (u = ct(g ? v[r] : 0, r, p)),
                     r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
         },
      ],
      prefilter: function (e, t) {
         t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
      },
   })),
      (S.speed = function (e, t, n) {
         var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
         return (
            S.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
               m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
            }),
            r
         );
      }),
      S.fn.extend({
         fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
         },
         animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t),
               o = S.speed(e, n, r),
               a = function () {
                  var e = ft(this, S.extend({}, t), o);
                  (i || Y.get(this, "finish")) && e.stop(!0);
               };
            return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
         },
         stop: function (i, e, o) {
            var a = function (e) {
               var t = e.stop;
               delete e.stop, t(o);
            };
            return (
               "string" != typeof i && ((o = e), (e = i), (i = void 0)),
               e && this.queue(i || "fx", []),
               this.each(function () {
                  var e = !0,
                     t = null != i && i + "queueHooks",
                     n = S.timers,
                     r = Y.get(this);
                  if (t) r[t] && r[t].stop && a(r[t]);
                  else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                  for (t = n.length; t--;) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                  (!e && o) || S.dequeue(this, i);
               })
            );
         },
         finish: function (a) {
            return (
               !1 !== a && (a = a || "fx"),
               this.each(function () {
                  var e,
                     t = Y.get(this),
                     n = t[a + "queue"],
                     r = t[a + "queueHooks"],
                     i = S.timers,
                     o = n ? n.length : 0;
                  for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                  for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                  delete t.finish;
               })
            );
         },
      }),
      S.each(["toggle", "show", "hide"], function (e, r) {
         var i = S.fn[r];
         S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
         };
      }),
      S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
         S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n);
         };
      }),
      (S.timers = []),
      (S.fx.tick = function () {
         var e,
            t = 0,
            n = S.timers;
         for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
         n.length || S.fx.stop(), (tt = void 0);
      }),
      (S.fx.timer = function (e) {
         S.timers.push(e), S.fx.start();
      }),
      (S.fx.interval = 13),
      (S.fx.start = function () {
         nt || ((nt = !0), st());
      }),
      (S.fx.stop = function () {
         nt = null;
      }),
      (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (S.fn.delay = function (r, e) {
         return (
            (r = (S.fx && S.fx.speeds[r]) || r),
            (e = e || "fx"),
            this.queue(e, function (e, t) {
               var n = C.setTimeout(e, r);
               t.stop = function () {
                  C.clearTimeout(n);
               };
            })
         );
      }),
      (rt = E.createElement("input")),
      (it = E.createElement("select").appendChild(E.createElement("option"))),
      (rt.type = "checkbox"),
      (y.checkOn = "" !== rt.value),
      (y.optSelected = it.selected),
      ((rt = E.createElement("input")).value = "t"),
      (rt.type = "radio"),
      (y.radioValue = "t" === rt.value);
   var pt,
      dt = S.expr.attrHandle;
   S.fn.extend({
      attr: function (e, t) {
         return $(this, S.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
         return this.each(function () {
            S.removeAttr(this, e);
         });
      },
   }),
      S.extend({
         attr: function (e, t, n) {
            var r,
               i,
               o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
               return "undefined" == typeof e.getAttribute
                  ? S.prop(e, t, n)
                  : ((1 === o && S.isXMLDoc(e)) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                     void 0 !== n
                        ? null === n
                           ? void S.removeAttr(e, t)
                           : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                              ? r
                              : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                           ? r
                           : null == (r = S.find.attr(e, t))
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
               i = t && t.match(P);
            if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
         },
      }),
      (pt = {
         set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
         },
      }),
      S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
         var a = dt[t] || S.find.attr;
         dt[t] = function (e, t, n) {
            var r,
               i,
               o = t.toLowerCase();
            return n || ((i = dt[o]), (dt[o] = r), (r = null != a(e, t, n) ? o : null), (dt[o] = i)), r;
         };
      });
   var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;
   function vt(e) {
      return (e.match(P) || []).join(" ");
   }
   function yt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
   }
   function mt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
   }
   S.fn.extend({
      prop: function (e, t) {
         return $(this, S.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
         return this.each(function () {
            delete this[S.propFix[e] || e];
         });
      },
   }),
      S.extend({
         prop: function (e, t, n) {
            var r,
               i,
               o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
               return (
                  (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                  void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
               );
         },
         propHooks: {
            tabIndex: {
               get: function (e) {
                  var t = S.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
               },
            },
         },
         propFix: { for: "htmlFor", class: "className" },
      }),
      y.optSelected ||
      (S.propHooks.selected = {
         get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
         },
         set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
         },
      }),
      S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
         S.propFix[this.toLowerCase()] = this;
      }),
      S.fn.extend({
         addClass: function (t) {
            var e,
               n,
               r,
               i,
               o,
               a,
               s,
               u = 0;
            if (m(t))
               return this.each(function (e) {
                  S(this).addClass(t.call(this, e, yt(this)));
               });
            if ((e = mt(t)).length)
               while ((n = this[u++]))
                  if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                     a = 0;
                     while ((o = e[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                     i !== (s = vt(r)) && n.setAttribute("class", s);
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
               s,
               u = 0;
            if (m(t))
               return this.each(function (e) {
                  S(this).removeClass(t.call(this, e, yt(this)));
               });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
               while ((n = this[u++]))
                  if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                     a = 0;
                     while ((o = e[a++])) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                     i !== (s = vt(r)) && n.setAttribute("class", s);
                  }
            return this;
         },
         toggleClass: function (i, t) {
            var o = typeof i,
               a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a
               ? t
                  ? this.addClass(i)
                  : this.removeClass(i)
               : m(i)
                  ? this.each(function (e) {
                     S(this).toggleClass(i.call(this, e, yt(this), t), t);
                  })
                  : this.each(function () {
                     var e, t, n, r;
                     if (a) {
                        (t = 0), (n = S(this)), (r = mt(i));
                        while ((e = r[t++])) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                     } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
                  });
         },
         hasClass: function (e) {
            var t,
               n,
               r = 0;
            t = " " + e + " ";
            while ((n = this[r++])) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1;
         },
      });
   var xt = /\r/g;
   S.fn.extend({
      val: function (n) {
         var r,
            e,
            i,
            t = this[0];
         return arguments.length
            ? ((i = m(n)),
               this.each(function (e) {
                  var t;
                  1 === this.nodeType &&
                     (null == (t = i ? n.call(this, e, S(this).val()) : n)
                        ? (t = "")
                        : "number" == typeof t
                           ? (t += "")
                           : Array.isArray(t) &&
                           (t = S.map(t, function (e) {
                              return null == e ? "" : e + "";
                           })),
                        ((r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) || (this.value = t));
               }))
            : t
               ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value"))
                  ? e
                  : "string" == typeof (e = t.value)
                     ? e.replace(xt, "")
                     : null == e
                        ? ""
                        : e
               : void 0;
      },
   }),
      S.extend({
         valHooks: {
            option: {
               get: function (e) {
                  var t = S.find.attr(e, "value");
                  return null != t ? t : vt(S.text(e));
               },
            },
            select: {
               get: function (e) {
                  var t,
                     n,
                     r,
                     i = e.options,
                     o = e.selectedIndex,
                     a = "select-one" === e.type,
                     s = a ? null : [],
                     u = a ? o + 1 : i.length;
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                     if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (((t = S(n).val()), a)) return t;
                        s.push(t);
                     }
                  return s;
               },
               set: function (e, t) {
                  var n,
                     r,
                     i = e.options,
                     o = S.makeArray(t),
                     a = i.length;
                  while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
               },
            },
         },
      }),
      S.each(["radio", "checkbox"], function () {
         (S.valHooks[this] = {
            set: function (e, t) {
               if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
            },
         }),
            y.checkOn ||
            (S.valHooks[this].get = function (e) {
               return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (y.focusin = "onfocusin" in C);
   var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
         e.stopPropagation();
      };
   S.extend(S.event, {
      trigger: function (e, t, n, r) {
         var i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p = [n || E],
            d = v.call(e, "type") ? e.type : e,
            h = v.call(e, "namespace") ? e.namespace.split(".") : [];
         if (
            ((o = f = a = n = n || E),
               3 !== n.nodeType &&
               8 !== n.nodeType &&
               !bt.test(d + S.event.triggered) &&
               (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
                  (u = d.indexOf(":") < 0 && "on" + d),
                  ((e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                  (e.namespace = h.join(".")),
                  (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : S.makeArray(t, [e])),
                  (c = S.event.special[d] || {}),
                  r || !c.trigger || !1 !== c.trigger.apply(n, t)))
         ) {
            if (!r && !c.noBubble && !x(n)) {
               for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
               a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
            }
            i = 0;
            while ((o = p[i++]) && !e.isPropagationStopped())
               (f = o),
                  (e.type = 1 < i ? s : c.bindType || d),
                  (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                  (l = u && o[u]) && l.apply && V(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
            return (
               (e.type = d),
               r ||
               e.isDefaultPrevented() ||
               (c._default && !1 !== c._default.apply(p.pop(), t)) ||
               !V(n) ||
               (u &&
                  m(n[d]) &&
                  !x(n) &&
                  ((a = n[u]) && (n[u] = null),
                     (S.event.triggered = d),
                     e.isPropagationStopped() && f.addEventListener(d, wt),
                     n[d](),
                     e.isPropagationStopped() && f.removeEventListener(d, wt),
                     (S.event.triggered = void 0),
                     a && (n[u] = a))),
               e.result
            );
         }
      },
      simulate: function (e, t, n) {
         var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
         S.event.trigger(r, null, t);
      },
   }),
      S.fn.extend({
         trigger: function (e, t) {
            return this.each(function () {
               S.event.trigger(e, t, this);
            });
         },
         triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0);
         },
      }),
      y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
         var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e));
         };
         S.event.special[r] = {
            setup: function () {
               var e = this.ownerDocument || this.document || this,
                  t = Y.access(e, r);
               t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
            },
            teardown: function () {
               var e = this.ownerDocument || this.document || this,
                  t = Y.access(e, r) - 1;
               t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
            },
         };
      });
   var Tt = C.location,
      Ct = { guid: Date.now() },
      Et = /\?/;
   S.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
         t = new C.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
         t = void 0;
      }
      return (t && !t.getElementsByTagName("parsererror").length) || S.error("Invalid XML: " + e), t;
   };
   var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;
   function Dt(n, e, r, i) {
      var t;
      if (Array.isArray(e))
         S.each(e, function (e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
         });
      else if (r || "object" !== w(e)) i(n, e);
      else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
   }
   (S.param = function (e, t) {
      var n,
         r = [],
         i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
         };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
         S.each(e, function () {
            i(this.name, this.value);
         });
      else for (n in e) Dt(n, e[n], t, i);
      return r.join("&");
   }),
      S.fn.extend({
         serialize: function () {
            return S.param(this.serializeArray());
         },
         serializeArray: function () {
            return this.map(function () {
               var e = S.prop(this, "elements");
               return e ? S.makeArray(e) : this;
            })
               .filter(function () {
                  var e = this.type;
                  return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
               })
               .map(function (e, t) {
                  var n = S(this).val();
                  return null == n
                     ? null
                     : Array.isArray(n)
                        ? S.map(n, function (e) {
                           return { name: t.name, value: e.replace(kt, "\r\n") };
                        })
                        : { name: t.name, value: n.replace(kt, "\r\n") };
               })
               .get();
         },
      });
   var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");
   function Ft(o) {
      return function (e, t) {
         "string" != typeof e && ((t = e), (e = "*"));
         var n,
            r = 0,
            i = e.toLowerCase().match(P) || [];
         if (m(t)) while ((n = i[r++])) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      };
   }
   function Bt(t, i, o, a) {
      var s = {},
         u = t === Mt;
      function l(e) {
         var r;
         return (
            (s[e] = !0),
            S.each(t[e] || [], function (e, t) {
               var n = t(i, o, a);
               return "string" != typeof n || u || s[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), l(n), !1);
            }),
            r
         );
      }
      return l(i.dataTypes[0]) || (!s["*"] && l("*"));
   }
   function $t(e, t) {
      var n,
         r,
         i = S.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && S.extend(!0, e, r), e;
   }
   (Wt.href = Tt.href),
      S.extend({
         active: 0,
         lastModified: {},
         etag: {},
         ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
            flatOptions: { url: !0, context: !0 },
         },
         ajaxSetup: function (e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
         },
         ajaxPrefilter: Ft(Rt),
         ajaxTransport: Ft(Mt),
         ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var c,
               f,
               p,
               n,
               d,
               r,
               h,
               g,
               i,
               o,
               v = S.ajaxSetup({}, t),
               y = v.context || v,
               m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
               x = S.Deferred(),
               b = S.Callbacks("once memory"),
               w = v.statusCode || {},
               a = {},
               s = {},
               u = "canceled",
               T = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                     var t;
                     if (h) {
                        if (!n) {
                           n = {};
                           while ((t = Ht.exec(p))) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        }
                        t = n[e.toLowerCase() + " "];
                     }
                     return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                     return h ? p : null;
                  },
                  setRequestHeader: function (e, t) {
                     return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
                  },
                  overrideMimeType: function (e) {
                     return null == h && (v.mimeType = e), this;
                  },
                  statusCode: function (e) {
                     var t;
                     if (e)
                        if (h) T.always(e[T.status]);
                        else for (t in e) w[t] = [w[t], e[t]];
                     return this;
                  },
                  abort: function (e) {
                     var t = e || u;
                     return c && c.abort(t), l(0, t), this;
                  },
               };
            if (
               (x.promise(T),
                  (v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//")),
                  (v.type = t.method || t.type || v.method || v.type),
                  (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
                  null == v.crossDomain)
            ) {
               r = E.createElement("a");
               try {
                  (r.href = v.url), (r.href = r.href), (v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
               } catch (e) {
                  v.crossDomain = !0;
               }
            }
            if ((v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h)) return T;
            for (i in ((g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
               (v.type = v.type.toUpperCase()),
               (v.hasContent = !Ot.test(v.type)),
               (f = v.url.replace(qt, "")),
               v.hasContent
                  ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+"))
                  : ((o = v.url.slice(f.length)),
                     v.data && (v.processData || "string" == typeof v.data) && ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
                     !1 === v.cache && ((f = f.replace(Lt, "$1")), (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
                     (v.url = f + o)),
               v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
               ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
               T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
               v.headers))
               T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (((u = "abort"), b.add(v.complete), T.done(v.success), T.fail(v.error), (c = Bt(Mt, v, t, T)))) {
               if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h)) return T;
               v.async &&
                  0 < v.timeout &&
                  (d = C.setTimeout(function () {
                     T.abort("timeout");
                  }, v.timeout));
               try {
                  (h = !1), c.send(a, l);
               } catch (e) {
                  if (h) throw e;
                  l(-1, e);
               }
            } else l(-1, "No Transport");
            function l(e, t, n, r) {
               var i,
                  o,
                  a,
                  s,
                  u,
                  l = t;
               h ||
                  ((h = !0),
                     d && C.clearTimeout(d),
                     (c = void 0),
                     (p = r || ""),
                     (T.readyState = 0 < e ? 4 : 0),
                     (i = (200 <= e && e < 300) || 304 === e),
                     n &&
                     (s = (function (e, t, n) {
                        var r,
                           i,
                           o,
                           a,
                           s = e.contents,
                           u = e.dataTypes;
                        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
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
                              a || (a = i);
                           }
                           o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                     })(v, T, n)),
                     !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () { }),
                     (s = (function (e, t, n, r) {
                        var i,
                           o,
                           a,
                           s,
                           u,
                           l = {},
                           c = e.dataTypes.slice();
                        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        o = c.shift();
                        while (o)
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
                                    if (a && e["throws"]) t = a(t);
                                    else
                                       try {
                                          t = a(t);
                                       } catch (e) {
                                          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                       }
                              }
                        return { state: "success", data: t };
                     })(v, s, T, i)),
                     i
                        ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                           204 === e || "HEAD" === v.type ? (l = "nocontent") : 304 === e ? (l = "notmodified") : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                        : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                     (T.status = e),
                     (T.statusText = (t || l) + ""),
                     i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                     T.statusCode(w),
                     (w = void 0),
                     g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                     b.fireWith(y, [T, l]),
                     g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
            }
            return T;
         },
         getJSON: function (e, t, n) {
            return S.get(e, t, n, "json");
         },
         getScript: function (e, t) {
            return S.get(e, void 0, t, "script");
         },
      }),
      S.each(["get", "post"], function (e, i) {
         S[i] = function (e, t, n, r) {
            return m(t) && ((r = r || n), (n = t), (t = void 0)), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e));
         };
      }),
      S.ajaxPrefilter(function (e) {
         var t;
         for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
      }),
      (S._evalUrl = function (e, t, n) {
         return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () { } },
            dataFilter: function (e) {
               S.globalEval(e, t, n);
            },
         });
      }),
      S.fn.extend({
         wrapAll: function (e) {
            var t;
            return (
               this[0] &&
               (m(e) && (e = e.call(this[0])),
                  (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                     .map(function () {
                        var e = this;
                        while (e.firstElementChild) e = e.firstElementChild;
                        return e;
                     })
                     .append(this)),
               this
            );
         },
         wrapInner: function (n) {
            return m(n)
               ? this.each(function (e) {
                  S(this).wrapInner(n.call(this, e));
               })
               : this.each(function () {
                  var e = S(this),
                     t = e.contents();
                  t.length ? t.wrapAll(n) : e.append(n);
               });
         },
         wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
               S(this).wrapAll(n ? t.call(this, e) : t);
            });
         },
         unwrap: function (e) {
            return (
               this.parent(e)
                  .not("body")
                  .each(function () {
                     S(this).replaceWith(this.childNodes);
                  }),
               this
            );
         },
      }),
      (S.expr.pseudos.hidden = function (e) {
         return !S.expr.pseudos.visible(e);
      }),
      (S.expr.pseudos.visible = function (e) {
         return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (S.ajaxSettings.xhr = function () {
         try {
            return new C.XMLHttpRequest();
         } catch (e) { }
      });
   var _t = { 0: 200, 1223: 204 },
      zt = S.ajaxSettings.xhr();
   (y.cors = !!zt && "withCredentials" in zt),
      (y.ajax = zt = !!zt),
      S.ajaxTransport(function (i) {
         var o, a;
         if (y.cors || (zt && !i.crossDomain))
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
                                    : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
                     };
                  }),
                     (r.onload = o()),
                     (a = r.onerror = r.ontimeout = o("error")),
                     void 0 !== r.onabort
                        ? (r.onabort = a)
                        : (r.onreadystatechange = function () {
                           4 === r.readyState &&
                              C.setTimeout(function () {
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
      S.ajaxPrefilter(function (e) {
         e.crossDomain && (e.contents.script = !1);
      }),
      S.ajaxSetup({
         accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
         contents: { script: /\b(?:java|ecma)script\b/ },
         converters: {
            "text script": function (e) {
               return S.globalEval(e), e;
            },
         },
      }),
      S.ajaxPrefilter("script", function (e) {
         void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      S.ajaxTransport("script", function (n) {
         var r, i;
         if (n.crossDomain || n.scriptAttrs)
            return {
               send: function (e, t) {
                  (r = S("<script>")
                     .attr(n.scriptAttrs || {})
                     .prop({ charset: n.scriptCharset, src: n.url })
                     .on(
                        "load error",
                        (i = function (e) {
                           r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                        })
                     )),
                     E.head.appendChild(r[0]);
               },
               abort: function () {
                  i && i();
               },
            };
      });
   var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
   S.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
         var e = Xt.pop() || S.expando + "_" + Ct.guid++;
         return (this[e] = !0), e;
      },
   }),
      S.ajaxPrefilter("json jsonp", function (e, t, n) {
         var r,
            i,
            o,
            a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
         if (a || "jsonp" === e.dataTypes[0])
            return (
               (r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
               a ? (e[a] = e[a].replace(Vt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
               (e.converters["script json"] = function () {
                  return o || S.error(r + " was not called"), o[0];
               }),
               (e.dataTypes[0] = "json"),
               (i = C[r]),
               (C[r] = function () {
                  o = arguments;
               }),
               n.always(function () {
                  void 0 === i ? S(C).removeProp(r) : (C[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)), o && m(i) && i(o[0]), (o = i = void 0);
               }),
               "script"
            );
      }),
      (y.createHTMLDocument = (((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ut.childNodes.length)),
      (S.parseHTML = function (e, t, n) {
         return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
               t || (y.createHTMLDocument ? (((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href), t.head.appendChild(r)) : (t = E)),
               (o = !n && []),
               (i = N.exec(e)) ? [t.createElement(i[1])] : ((i = xe([e], t, o)), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
         var r, i, o;
      }),
      (S.fn.load = function (e, t, n) {
         var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
         return (
            -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
            m(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
            0 < a.length &&
            S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
               .done(function (e) {
                  (o = arguments), a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
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
      (S.expr.pseudos.animated = function (t) {
         return S.grep(S.timers, function (e) {
            return t === e.elem;
         }).length;
      }),
      (S.offset = {
         setOffset: function (e, t, n) {
            var r,
               i,
               o,
               a,
               s,
               u,
               l = S.css(e, "position"),
               c = S(e),
               f = {};
            "static" === l && (e.style.position = "relative"),
               (s = c.offset()),
               (o = S.css(e, "top")),
               (u = S.css(e, "left")),
               ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
               m(t) && (t = t.call(e, n, S.extend({}, s))),
               null != t.top && (f.top = t.top - s.top + a),
               null != t.left && (f.left = t.left - s.left + i),
               "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
         },
      }),
      S.fn.extend({
         offset: function (t) {
            if (arguments.length)
               return void 0 === t
                  ? this
                  : this.each(function (e) {
                     S.offset.setOffset(this, t, e);
                  });
            var e,
               n,
               r = this[0];
            return r ? (r.getClientRects().length ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
         },
         position: function () {
            if (this[0]) {
               var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
               if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
               else {
                  (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                  while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                  e && e !== r && 1 === e.nodeType && (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (i.left += S.css(e, "borderLeftWidth", !0)));
               }
               return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) };
            }
         },
         offsetParent: function () {
            return this.map(function () {
               var e = this.offsetParent;
               while (e && "static" === S.css(e, "position")) e = e.offsetParent;
               return e || re;
            });
         },
      }),
      S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
         var o = "pageYOffset" === i;
         S.fn[t] = function (e) {
            return $(
               this,
               function (e, t, n) {
                  var r;
                  if ((x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
                  r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
               },
               t,
               e,
               arguments.length
            );
         };
      }),
      S.each(["top", "left"], function (e, n) {
         S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
            if (t) return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
         });
      }),
      S.each({ Height: "height", Width: "width" }, function (a, s) {
         S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
            S.fn[o] = function (e, t) {
               var n = arguments.length && (r || "boolean" != typeof e),
                  i = r || (!0 === e || !0 === t ? "margin" : "border");
               return $(
                  this,
                  function (e, t, n) {
                     var r;
                     return x(e)
                        ? 0 === o.indexOf("outer")
                           ? e["inner" + a]
                           : e.document.documentElement["client" + a]
                        : 9 === e.nodeType
                           ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                           : void 0 === n
                              ? S.css(e, t, i)
                              : S.style(e, t, n, i);
                  },
                  s,
                  n ? e : void 0,
                  n
               );
            };
         });
      }),
      S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
         S.fn[t] = function (e) {
            return this.on(t, e);
         };
      }),
      S.fn.extend({
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
      S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
         S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
         };
      });
   var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
   (S.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
         return (
            (r = s.call(arguments, 2)),
            ((i = function () {
               return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid = e.guid || S.guid++),
            i
         );
   }),
      (S.holdReady = function (e) {
         e ? S.readyWait++ : S.ready(!0);
      }),
      (S.isArray = Array.isArray),
      (S.parseJSON = JSON.parse),
      (S.nodeName = A),
      (S.isFunction = m),
      (S.isWindow = x),
      (S.camelCase = X),
      (S.type = w),
      (S.now = Date.now),
      (S.isNumeric = function (e) {
         var t = S.type(e);
         return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (S.trim = function (e) {
         return null == e ? "" : (e + "").replace(Gt, "");
      }),
      "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
         return S;
      });
   var Yt = C.jQuery,
      Qt = C.$;
   return (
      (S.noConflict = function (e) {
         return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
      }),
      "undefined" == typeof e && (C.jQuery = C.$ = S),
      S
   );
});

/*!
 * pagepiling.js 1.5.6
 *
 * https://github.com/alvarotrigo/pagePiling.js
 * @license MIT licensed
 *
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
(function ($, document, window, undefined) {
    'use strict';

    $.fn.pagepiling = function (custom) {
        var PP = $.fn.pagepiling;
        var container = $(this);
        var lastScrolledDestiny;
        var lastAnimation = 0;
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var touchStartY = 0, touchStartX = 0, touchEndY = 0, touchEndX = 0;
        var scrollings = [];

        //Defines the delay to take place before being able to scroll to the next section
        //BE CAREFUL! Not recommened to change it under 400 for a good behavior in laptops and
        //Apple devices (laptops, mouses...)
        var scrollDelay = 600;

        // Create some defaults, extending them with any options that were provided
        var options = $.extend(true, {
            direction: 'vertical',
            menu: null,
            verticalCentered: true,
            sectionsColor: [],
            anchors: [],
            scrollingSpeed: 700,
            easing: 'easeInQuart',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                textColor: '#000',
                bulletsColor: '#000',
                position: 'right',
                tooltips: []
            },
            normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 5,
            keyboardScrolling: true,
            sectionSelector: '.section',
            animateAnchor: false,

            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null
        }, custom);


        //easeInQuart animation included in the plugin
        $.extend($.easing,{ easeInQuart: function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b; }});

        /**
        * Defines the scrolling speed
        */
        PP.setScrollingSpeed = function(value){
           options.scrollingSpeed = value;
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
        */
        PP.setMouseWheelScrolling = function (value){
            if(value){
                addMouseWheelHandler();
            }else{
                removeMouseWheelHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        */
        PP.setAllowScrolling = function (value){
            if(value){
                PP.setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                PP.setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
        */
        PP.setKeyboardScrolling = function (value){
            options.keyboardScrolling = value;
        };

        /**
        * Moves sectio up
        */
        PP.moveSectionUp = function () {
            var prev = $('.pp-section.active').prev('.pp-section');

            //looping to the bottom if there's no more sections above
            if (!prev.length && options.loopTop) {
                prev = $('.pp-section').last();
            }

            if (prev.length) {
                scrollPage(prev);
            }
        };

        /**
        * Moves sectio down
        */
        PP.moveSectionDown = function () {
            var next = $('.pp-section.active').next('.pp-section');

            //looping to the top if there's no more sections below
            if(!next.length && options.loopBottom){
                next = $('.pp-section').first();
            }

            if (next.length) {
                scrollPage(next);
            }
        };

        /**
        * Moves the site to the given anchor or index
        */
        PP.moveTo = function (section){
            var destiny = '';

            if(isNaN(section)){
                destiny = $(document).find('[data-anchor="'+section+'"]');
            }else{
                destiny = $('.pp-section').eq( (section -1) );
            }


            if(destiny.length > 0){
                scrollPage(destiny);
            }
        };

        //adding internal class names to void problem with common ones
        $(options.sectionSelector).each(function(){
            $(this).addClass('pp-section');
        });

        //if css3 is not supported, it will use jQuery animations
        if(options.css3){
            options.css3 = support3d();
        }

        $(container).css({
            'overflow' : 'hidden',
            '-ms-touch-action': 'none',  /* Touch detection for Windows 8 */
            'touch-action': 'none'       /* IE 11 on Windows Phone 8.1*/
        });

        //init
        PP.setAllowScrolling(true);

        //creating the navigation dots
        if (!$.isEmptyObject(options.navigation) ) {
            addVerticalNavigation();
        }

         var zIndex = $('.pp-section').length;

        $('.pp-section').each(function (index) {
            $(this).data('data-index', index);
            $(this).css('z-index', zIndex);

            //if no active section is defined, the 1st one will be the default one
            if (!index && $('.pp-section.active').length === 0) {
                $(this).addClass('active');
            }

            if (typeof options.anchors[index] !== 'undefined') {
                $(this).attr('data-anchor', options.anchors[index]);
            }

            if (typeof options.sectionsColor[index] !== 'undefined') {
                $(this).css('background-color', options.sectionsColor[index]);
            }

            if(options.verticalCentered && !$(this).hasClass('pp-scrollable')){
                addTableClass($(this));
            }

            zIndex = zIndex - 1;
        }).promise().done(function(){
            //vertical centered of the navigation + first bullet active
            if(options.navigation){
                $('#pp-nav').css('margin-top', '-' + ($('#pp-nav').height()/2) + 'px');
                $('#pp-nav').find('li').eq($('.pp-section.active').index('.pp-section')).find('a').addClass('active');
            }

            $(window).on('load', function() {
                scrollToAnchor();
            });

            $.isFunction( options.afterRender ) && options.afterRender.call( this);
        });

        /**
        * Enables vertical centering by wrapping the content and the use of table and table-cell
        */
        function addTableClass(element){
            element.addClass('pp-table').wrapInner('<div class="pp-tableCell" style="height:100%" />');
        }


       /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = $('.pp-section.active').index('.pp-section');
            var toIndex = destiny.index('.pp-section');

            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Scrolls the page to the given destination
        */
        function scrollPage(destination, animated) {
            var v ={
                destination: destination,
                animated: animated,
                activeSection: $('.pp-section.active'),
                anchorLink: destination.data('anchor'),
                sectionIndex: destination.index('.pp-section'),
                toMove: destination,
                yMovement: getYmovement(destination),
                leavingSection: $('.pp-section.active').index('.pp-section') + 1
            };

            //quiting when activeSection is the target element
            if(v.activeSection.is(destination)){ return; }

            if(typeof v.animated === 'undefined'){
                v.animated = true;
            }

            if(typeof v.anchorLink !== 'undefined'){
                setURLHash(v.anchorLink, v.sectionIndex);
            }

            v.destination.addClass('active').siblings().removeClass('active');

            v.sectionsToMove = getSectionsToMove(v);

            //scrolling down (moving sections up making them disappear)
            if (v.yMovement === 'down') {
                v.translate3d = getTranslate3d();
                v.scrolling = '-100%';

                if(!options.css3){
                    v.sectionsToMove.each(function(index){
                        if(index != v.activeSection.index('.pp-section')){
                            $(this).css(getScrollProp(v.scrolling));
                        }
                    });
                }

                v.animateSection = v.activeSection;
            }

            //scrolling up (moving section down to the viewport)
            else {
                v.translate3d = 'translate3d(0px, 0px, 0px)';
                v.scrolling = '0';

                v.animateSection = destination;
            }

            $.isFunction(options.onLeave) && options.onLeave.call(this, v.leavingSection, (v.sectionIndex + 1), v.yMovement);

            performMovement(v);

            activateMenuElement(v.anchorLink);
            activateNavDots(v.anchorLink, v.sectionIndex);
            lastScrolledDestiny = v.anchorLink;

            var timeNow = new Date().getTime();
            lastAnimation = timeNow;
        }

        /**
        * Performs the movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            if(options.css3){
                transformContainer(v.animateSection, v.translate3d, v.animated);

                v.sectionsToMove.each(function(){
                    transformContainer($(this), v.translate3d, v.animated);
                });

                setTimeout(function () {
                    afterSectionLoads(v);
                }, options.scrollingSpeed);
            }else{
                v.scrollOptions = getScrollProp(v.scrolling);

                if(v.animated){
                    v.animateSection.animate(
                        v.scrollOptions,
                    options.scrollingSpeed, options.easing, function () {
                        readjustSections(v);
                        afterSectionLoads(v);
                    });
                }else{
                    v.animateSection.css(getScrollProp(v.scrolling));
                    setTimeout(function(){
                        readjustSections(v);
                        afterSectionLoads(v);
                    },400);
                }
            }
        }

        /**
        * Actions to execute after a secion is loaded
        */
        function afterSectionLoads(v){
            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && options.afterLoad.call(this, v.anchorLink, (v.sectionIndex + 1));
        }


        function getSectionsToMove(v){
            var sectionToMove;

            if(v.yMovement === 'down'){
                sectionToMove = $('.pp-section').map(function(index){
                    if (index < v.destination.index('.pp-section')){
                        return $(this);
                    }
                });
            }else{
                sectionToMove = $('.pp-section').map(function(index){
                    if (index > v.destination.index('.pp-section')){
                        return $(this);
                    }
                });
            }

            return sectionToMove;
        }

        /**
        * Returns the sections to re-adjust in the background after the section loads.
        */
        function readjustSections(v){
            if(v.yMovement === 'up'){
                v.sectionsToMove.each(function(index){
                    $(this).css(getScrollProp(v.scrolling));
                });
            }
        }

        /**
        * Gets the property used to create the scrolling effect when using jQuery animations
        * depending on the plugin direction option.
        */
        function getScrollProp(propertyValue){
            if(options.direction === 'vertical'){
                return {'top': propertyValue};
            }
            return {'left': propertyValue};
        }

        /**
        * Scrolls the site without anymations (usually used in the background without the user noticing it)
        */
        function silentScroll(section, offset){
            if (options.css3) {
                transformContainer(section, getTranslate3d(), false);
            }
            else{
                section.css(getScrollProp(offset));
            }
        }

        /**
        * Sets the URL hash for a section with slides
        */
        function setURLHash(anchorLink, sectionIndex){
            if(options.anchors.length){
                location.hash = anchorLink;

                setBodyClass(location.hash);
            }else{
                setBodyClass(String(sectionIndex));
            }
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(text){
            //removing the #
            text = text.replace('#','');

            //removing previous anchor classes
            $('body')[0].className = $('body')[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g, '');

            //adding the current anchor
            $('body').addClass('pp-viewing-' + text);
        }

        //TO DO
        function scrollToAnchor(){
            //getting the anchor link in the URL and deleting the `#`
            var value =  window.location.hash.replace('#', '');
            var sectionAnchor = value;
            var section = $(document).find('.pp-section[data-anchor="'+sectionAnchor+'"]');

            if(section.length > 0){  //if theres any #
                scrollPage(section, options.animateAnchor);
            }
        }

        /**
        * Determines if the transitions between sections still taking place.
        * The variable `scrollDelay` adds a "save zone" for devices such as Apple laptops and Apple magic mouses
        */
        function isMoving(){
            var timeNow = new Date().getTime();
            // Cancel scroll if currently animating or within quiet period
            if (timeNow - lastAnimation < scrollDelay + options.scrollingSpeed) {
                return true;
            }
            return false;
        }

        //detecting any change on the URL to scroll to the given anchor link
        //(a way to detect back history button as we play with the hashes on the URL)
        $(window).on('hashchange', hashChangeHandler);

        /**
        * Actions to do when the hash (#) in the URL changes.
        */
        function hashChangeHandler(){
            var value =  window.location.hash.replace('#', '').split('/');
            var sectionAnchor = value[0];

            if(sectionAnchor.length){
                /*in order to call scrollpage() only once for each destination at a time
                It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                event is fired on every scroll too.*/
                if (sectionAnchor && sectionAnchor !== lastScrolledDestiny)  {
                    var section;

                    if(isNaN(sectionAnchor)){
                        section = $(document).find('[data-anchor="'+sectionAnchor+'"]');
                    }else{
                        section = $('.pp-section').eq( (sectionAnchor -1) );
                    }
                    scrollPage(section);
                }
            }
        }

        /**
        * Cross browser transformations
        */
        function getTransforms(translate3d) {
            return {
                '-webkit-transform': translate3d,
                    '-moz-transform': translate3d,
                    '-ms-transform': translate3d,
                    'transform': translate3d
            };
        }

        /**
         * Adds a css3 transform property to the container class with or without animation depending on the animated param.
         */
        function transformContainer(element, translate3d, animated) {
            element.toggleClass('pp-easing', animated);

            element.css(getTransforms(translate3d));
        }

        /**
         * Sliding with arrow keys, both, vertical and horizontal
         */
        $(document).keydown(function (e) {
            if(options.keyboardScrolling && !isMoving()){
                //Moving the main page with the keyboard arrows if keyboard scrolling is enabled
                switch (e.which) {
                        //up
                    case 38:
                    case 33:
                        PP.moveSectionUp();
                        break;

                        //down
                    case 40:
                    case 34:
                        PP.moveSectionDown();
                        break;

                        //Home
                    case 36:
                        PP.moveTo(1);
                        break;

                        //End
                    case 35:
                        PP.moveTo($('.pp-section').length);
                        break;

                        //left
                    case 37:
                        PP.moveSectionUp();
                        break;

                        //right
                    case 39:
                        PP.moveSectionDown();
                        break;

                    default:
                        return; // exit this handler for other keys
                }
            }
        });

        /**
        * If `normalScrollElements` is used, the mouse wheel scrolling will scroll normally
        * over the defined elements in the option.
        */
        if(options.normalScrollElements){
            $(document).on('mouseenter', options.normalScrollElements, function () {
                PP.setMouseWheelScrolling(false);
            });

            $(document).on('mouseleave', options.normalScrollElements, function(){
                PP.setMouseWheelScrolling(true);
            });
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
          var curTime = new Date().getTime();

          // cross-browser wheel delta
            e = e || window.event;
            var value = e.wheelDelta || -e.deltaY || -e.detail;
            var delta = Math.max(-1, Math.min(1, value));

            var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
            var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

      //Limiting the array to 150 (lets not waste memory!)
            if(scrollings.length > 149){
                scrollings.shift();
            }

            //keeping record of the previous scrollings
            scrollings.push(Math.abs(value));

            //time difference between the last scroll and the current one
            var timeDiff = curTime-prevTime;
            prevTime = curTime;

            //haven't they scrolled in a while?
            //(enough to be consider a different scrolling action to scroll another section)
            if(timeDiff > 200){
                //emptying the array, we dont care about old scrollings for our averages
                scrollings = [];
            }

            if(!isMoving()){
                var activeSection = $('.pp-section.active');
                var scrollable = isScrollable(activeSection);

                var averageEnd = getAverage(scrollings, 10);
                var averageMiddle = getAverage(scrollings, 70);
                var isAccelerating = averageEnd >= averageMiddle;

                if(isAccelerating && isScrollingVertically){
                  //scrolling down?
                  if (delta < 0) {
                      scrolling('down', scrollable);

                  //scrolling up?
                  }else if(delta>0){
                      scrolling('up', scrollable);
                  }
              }

                return false;
            }
         }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type, scrollable){
            var check;
            var scrollSection;

            if(type == 'down'){
                check = 'bottom';
                scrollSection = PP.moveSectionDown;
            }else{
                check = 'top';
                scrollSection = PP.moveSectionUp;
            }

            if(scrollable.length > 0 ){
                //is the scrollbar at the start/end of the scroll?
                if(isScrolled(check, scrollable)){
                    scrollSection();
                }else{
                    return true;
                }
            }else{
                //moved up/down
                scrollSection();
            }
        }

        /**
        * Return a boolean depending on whether the scrollable element is at the end or at the start of the scrolling
        * depending on the given type.
        */
        function isScrolled(type, scrollable){
            if(type === 'top'){
                return !scrollable.scrollTop();
            }else if(type === 'bottom'){
                return scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
            }
        }

         /**
        * Determines whether the active section or slide is scrollable through and scrolling bar
        */
        function isScrollable(activeSection){
            return activeSection.filter('.pp-scrollable');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and tackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (container.get(0).addEventListener) {
                container.get(0).removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                container.get(0).removeEventListener('wheel', MouseWheelHandler, false); //Firefox
            } else {
                container.get(0).detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and tackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        */
        function addMouseWheelHandler(){
            if (container.get(0).addEventListener) {
                container.get(0).addEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                container.get(0).addEventListener('wheel', MouseWheelHandler, false); //Firefox
            } else {
                container.get(0).attachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                container.off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler);
                container.off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                container.off('touchstart ' + MSPointer.down);
                container.off('touchmove ' + MSPointer.move);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove', up: 'pointerup'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove', up: 'MSPointerUp'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = new Array();

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            return events;
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Getting the starting possitions of the touch event
        */
        function touchStartHandler(event){
            var e = event.originalEvent;

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /* Detecting touch events
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if ( !checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

                var activeSection = $('.pp-section.active');
                var scrollable = isScrollable(activeSection);

                if(!scrollable.length){
                    event.preventDefault();
                }

                if (!isMoving()) {
                    var touchEvents = getEventsPage(e);
                    touchEndY = touchEvents.y;
                    touchEndX = touchEvents.x;

                  //$('body').append('<span style="position:fixed; top: 250px; left: 20px; z-index:88; font-size: 25px; color: #000;">touchEndY: ' + touchEndY  + '</div>');

                    //X movement bigger than Y movement?
                    if (options.direction === 'horizontal' && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {
                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartX - touchEndX) > (container.width() / 100 * options.touchSensitivity)) {
                            if (touchStartX > touchEndX) {
                                scrolling('down', scrollable);
                            } else if (touchEndX > touchStartX) {
                                scrolling('up', scrollable);
                            }
                        }
                    } else {
                        if (Math.abs(touchStartY - touchEndY) > (container.height() / 100 * options.touchSensitivity)) {
                            if (touchStartY > touchEndY) {
                                scrolling('down', scrollable);
                            } else if (touchEndY > touchStartY) {
                                scrolling('up', scrollable);
                            }
                        }
                    }
                }
            }
        }

        /**
         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
         * Currently works well for iOS - Android might need some testing
         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
         * @return {boolean} true if there is a match to options.normalScrollElements
         */
        function checkParentForNormalScrollElement (el, hop) {
            hop = hop || 0;
            var parent = $(el).parent();

            if (hop < options.normalScrollElementTouchThreshold &&
                parent.is(options.normalScrollElements) ) {
                return true;
            } else if (hop == options.normalScrollElementTouchThreshold) {
                return false;
            } else {
                return checkParentForNormalScrollElement(parent, ++hop);
            }
        }


        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            $('body').append('<div id="pp-nav"><ul></ul></div>');
            var nav = $('#pp-nav');

            nav.css('color', options.navigation.textColor);

            nav.addClass(options.navigation.position);

            for(var cont = 0; cont < $('.pp-section').length; cont++){
                var link = '';
                if(options.anchors.length){
                    link = options.anchors[cont];
                }
                if(options.navigation.tooltips !== 'undefined'){
                    var tooltip = options.navigation.tooltips[cont];
                    if(typeof tooltip === 'undefined'){
                        tooltip = '';
                    }
                }

                nav.find('ul').append('<li data-tooltip="' + tooltip + '"><a href="#' + link + '"><span></span></a></li>');
            }

            nav.find('span').css('border-color', options.navigation.bulletsColor);
        }

        /**
        * Scrolls to the section when clicking the navigation bullet
        */
        $(document).on('click touchstart', '#pp-nav a', function(e){
            e.preventDefault();
            var index = $(this).parent().index();

            scrollPage($('.pp-section').eq(index));
        });

        /**
        * Navigation tooltips
        */
        $(document).on({
            mouseenter: function(){
                var tooltip = $(this).data('tooltip');
                $('<div class="pp-tooltip ' + options.navigation.position +'">' + tooltip + '</div>').hide().appendTo($(this)).fadeIn(200);
            },
            mouseleave: function(){
                $(this).find('.pp-tooltip').fadeOut(200, function() {
                    $(this).remove();
                });
            }
        }, '#pp-nav li');

         /**
         * Activating the website navigation dots according to the given slide name.
         */
        function activateNavDots(name, sectionIndex){
            if(options.navigation){
                $('#pp-nav').find('.active').removeClass('active');
                if(name){
                    $('#pp-nav').find('a[href="#' + name + '"]').addClass('active');
                }else{
                    $('#pp-nav').find('li').eq(sectionIndex).find('a').addClass('active');
                }
            }
        }

        /**
         * Activating the website main menu elements according to the given slide name.
         */
        function activateMenuElement(name){
            if(options.menu){
                $(options.menu).find('.active').removeClass('active');
                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass('active');
            }
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Gets the translate3d property to apply when using css3:true depending on the `direction` option.
        */
        function getTranslate3d(){
            if (options.direction !== 'vertical') {
                  return 'translate3d(-100%, 0px, 0px)';
            }

            return 'translate3d(0px, -100%, 0px)';
        }

    };
})(jQuery, document, window);
// ! Notie
!(function (e, t) {
   "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.notie = t()) : (e.notie = t());
})(this, function () {
   return (function (e) {
      function t(s) {
         if (n[s]) return n[s].exports;
         var a = (n[s] = { i: s, l: !1, exports: {} });
         return e[s].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
      }
      var n = {};
      return (
         (t.m = e),
         (t.c = n),
         (t.i = function (e) {
            return e;
         }),
         (t.d = function (e, n, s) {
            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: s });
         }),
         (t.n = function (e) {
            var n =
               e && e.__esModule
                  ? function () {
                     return e.default;
                  }
                  : function () {
                     return e;
                  };
            return t.d(n, "a", n), n;
         }),
         (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
         }),
         (t.p = ""),
         t((t.s = 1))
      );
   })([
      function (e, t) {
         e.exports = function (e) {
            return (
               e.webpackPolyfill ||
               ((e.deprecate = function () { }),
                  (e.paths = []),
                  e.children || (e.children = []),
                  Object.defineProperty(e, "loaded", {
                     enumerable: !0,
                     get: function () {
                        return e.l;
                     },
                  }),
                  Object.defineProperty(e, "id", {
                     enumerable: !0,
                     get: function () {
                        return e.i;
                     },
                  }),
                  (e.webpackPolyfill = 1)),
               e
            );
         };
      },
      function (e, t, n) {
         "use strict";
         (function (e) {
            var n,
               s,
               a,
               i =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                     ? function (e) {
                        return typeof e;
                     }
                     : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                     };
            !(function (c, o) {
               "object" === i(t) && "object" === i(e) ? (e.exports = o()) : ((s = []), (n = o), (a = "function" == typeof n ? n.apply(t, s) : n), !(void 0 !== a && (e.exports = a)));
            })(void 0, function () {
               return (function (e) {
                  function t(s) {
                     if (n[s]) return n[s].exports;
                     var a = (n[s] = { i: s, l: !1, exports: {} });
                     return e[s].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
                  }
                  var n = {};
                  return (
                     (t.m = e),
                     (t.c = n),
                     (t.i = function (e) {
                        return e;
                     }),
                     (t.d = function (e, n, s) {
                        t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: s });
                     }),
                     (t.n = function (e) {
                        var n =
                           e && e.__esModule
                              ? function () {
                                 return e.default;
                              }
                              : function () {
                                 return e;
                              };
                        return t.d(n, "a", n), n;
                     }),
                     (t.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                     }),
                     (t.p = ""),
                     t((t.s = 0))
                  );
               })([
                  function (e, t, n) {
                     function s(e, t) {
                        var n = {};
                        for (var s in e) t.indexOf(s) >= 0 || (Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]));
                        return n;
                     }
                     Object.defineProperty(t, "__esModule", { value: !0 });
                     var a =
                        "function" == typeof Symbol && "symbol" === i(Symbol.iterator)
                           ? function (e) {
                              return "undefined" == typeof e ? "undefined" : i(e);
                           }
                           : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : i(e);
                           },
                        c =
                           Object.assign ||
                           function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                 var n = arguments[t];
                                 for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
                              }
                              return e;
                           },
                        o = { top: "top", bottom: "bottom" },
                        r = {
                           alertTime: 3,
                           dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                           overlayClickDismiss: !0,
                           overlayOpacity: 0.75,
                           transitionCurve: "ease",
                           transitionDuration: 0.3,
                           transitionSelector: "all",
                           classes: {
                              container: "notie-container",
                              textbox: "notie-textbox",
                              textboxInner: "notie-textbox-inner",
                              button: "notie-button",
                              element: "notie-element",
                              elementHalf: "notie-element-half",
                              elementThird: "notie-element-third",
                              overlay: "notie-overlay",
                              backgroundSuccess: "notie-background-success",
                              backgroundWarning: "notie-background-warning",
                              backgroundError: "notie-background-error",
                              backgroundInfo: "notie-background-info",
                              backgroundNeutral: "notie-background-neutral",
                              backgroundOverlay: "notie-background-overlay",
                              alert: "notie-alert",
                              inputField: "notie-input-field",
                              selectChoiceRepeated: "notie-select-choice-repeated",
                              dateSelectorInner: "notie-date-selector-inner",
                              dateSelectorUp: "notie-date-selector-up",
                           },
                           ids: { overlay: "notie-overlay" },
                           positions: { alert: o.top, force: o.top, confirm: o.top, input: o.top, select: o.bottom, date: o.top },
                        },
                        l = (t.setOptions = function (e) {
                           r = c({}, r, e, { classes: c({}, r.classes, e.classes), ids: c({}, r.ids, e.ids), positions: c({}, r.positions, e.positions) });
                        }),
                        d = function () {
                           return new Promise(function (e) {
                              return setTimeout(e, 0);
                           });
                        },
                        u = function (e) {
                           return new Promise(function (t) {
                              return setTimeout(t, 1e3 * e);
                           });
                        },
                        p = function () {
                           document.activeElement && document.activeElement.blur();
                        },
                        f = function () {
                           var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                              var t = (16 * Math.random()) | 0,
                                 n = "x" === e ? t : (3 & t) | 8;
                              return n.toString(16);
                           });
                           return "notie-" + e;
                        },
                        m = {
                           1: r.classes.backgroundSuccess,
                           success: r.classes.backgroundSuccess,
                           2: r.classes.backgroundWarning,
                           warning: r.classes.backgroundWarning,
                           3: r.classes.backgroundError,
                           error: r.classes.backgroundError,
                           4: r.classes.backgroundInfo,
                           info: r.classes.backgroundInfo,
                           5: r.classes.backgroundNeutral,
                           neutral: r.classes.backgroundNeutral,
                        },
                        v = function () {
                           return r.transitionSelector + " " + r.transitionDuration + "s " + r.transitionCurve;
                        },
                        b = function (e) {
                           return 13 === e.keyCode;
                        },
                        x = function (e) {
                           return 27 === e.keyCode;
                        },
                        y = function (e, t) {
                           e.classList.add(r.classes.container),
                              (e.style[t] = "-10000px"),
                              document.body.appendChild(e),
                              (e.style[t] = "-" + e.offsetHeight + "px"),
                              e.listener && window.addEventListener("keydown", e.listener),
                              d().then(function () {
                                 (e.style.transition = v()), (e.style[t] = 0);
                              });
                        },
                        L = function (e, t) {
                           var n = document.getElementById(e);
                           n &&
                              ((n.style[t] = "-" + n.offsetHeight + "px"),
                                 n.listener && window.removeEventListener("keydown", n.listener),
                                 u(r.transitionDuration).then(function () {
                                    n.parentNode && n.parentNode.removeChild(n);
                                 }));
                        },
                        g = function (e, t) {
                           var n = document.createElement("div");
                           (n.id = r.ids.overlay),
                              n.classList.add(r.classes.overlay),
                              n.classList.add(r.classes.backgroundOverlay),
                              (n.style.opacity = 0),
                              e &&
                              r.overlayClickDismiss &&
                              (n.onclick = function () {
                                 L(e.id, t), h();
                              }),
                              document.body.appendChild(n),
                              d().then(function () {
                                 (n.style.transition = v()), (n.style.opacity = r.overlayOpacity);
                              });
                        },
                        h = function () {
                           var e = document.getElementById(r.ids.overlay);
                           (e.style.opacity = 0),
                              u(r.transitionDuration).then(function () {
                                 e.parentNode && e.parentNode.removeChild(e);
                              });
                        },
                        k = (t.hideAlerts = function (e) {
                           var t = document.getElementsByClassName(r.classes.alert);
                           if (t.length) {
                              for (var n = 0; n < t.length; n++) {
                                 var s = t[n];
                                 L(s.id, s.position);
                              }
                              e &&
                                 u(r.transitionDuration).then(function () {
                                    return e();
                                 });
                           }
                        }),
                        C = (t.alert = function (e) {
                           var t = e.type,
                              n = void 0 === t ? 4 : t,
                              s = e.text,
                              a = e.time,
                              i = void 0 === a ? r.alertTime : a,
                              c = e.stay,
                              o = void 0 !== c && c,
                              l = e.position,
                              d = void 0 === l ? r.positions.alert || d.top : l;
                           p(), k();
                           var v = document.createElement("div"),
                              g = f();
                           (v.id = g),
                              (v.position = d),
                              v.classList.add(r.classes.textbox),
                              v.classList.add(m[n]),
                              v.classList.add(r.classes.alert),
                              (v.innerHTML = '<div class="' + r.classes.textboxInner + '">' + s + "</div>"),
                              (v.onclick = function () {
                                 return L(g, d);
                              }),
                              (v.listener = function (e) {
                                 (b(e) || x(e)) && k();
                              }),
                              y(v, d),
                              i && i < 1 && (i = 1),
                              !o &&
                              i &&
                              u(i).then(function () {
                                 return L(g, d);
                              });
                        }),
                        E = (t.force = function (e, t) {
                           var n = e.type,
                              s = void 0 === n ? 5 : n,
                              a = e.text,
                              i = e.buttonText,
                              c = void 0 === i ? "OK" : i,
                              o = e.callback,
                              l = e.position,
                              d = void 0 === l ? r.positions.force || d.top : l;
                           p(), k();
                           var u = document.createElement("div"),
                              v = f();
                           u.id = v;
                           var x = document.createElement("div");
                           x.classList.add(r.classes.textbox), x.classList.add(r.classes.backgroundInfo), (x.innerHTML = '<div class="' + r.classes.textboxInner + '">' + a + "</div>");
                           var C = document.createElement("div");
                           C.classList.add(r.classes.button),
                              C.classList.add(m[s]),
                              (C.innerHTML = c),
                              (C.onclick = function () {
                                 L(v, d), h(), o ? o() : t && t();
                              }),
                              u.appendChild(x),
                              u.appendChild(C),
                              (u.listener = function (e) {
                                 b(e) && C.click();
                              }),
                              y(u, d),
                              g();
                        }),
                        T = (t.confirm = function (e, t, n) {
                           var s = e.text,
                              a = e.submitText,
                              i = void 0 === a ? "Yes" : a,
                              c = e.cancelText,
                              o = void 0 === c ? "Cancel" : c,
                              l = e.submitCallback,
                              d = e.cancelCallback,
                              u = e.position,
                              m = void 0 === u ? r.positions.confirm || m.top : u;
                           p(), k();
                           var v = document.createElement("div"),
                              C = f();
                           v.id = C;
                           var E = document.createElement("div");
                           E.classList.add(r.classes.textbox), E.classList.add(r.classes.backgroundInfo), (E.innerHTML = '<div class="' + r.classes.textboxInner + '">' + s + "</div>");
                           var T = document.createElement("div");
                           T.classList.add(r.classes.button),
                              T.classList.add(r.classes.elementHalf),
                              T.classList.add(r.classes.backgroundSuccess),
                              (T.innerHTML = i),
                              (T.onclick = function () {
                                 L(C, m), h(), l ? l() : t && t();
                              });
                           var M = document.createElement("div");
                           M.classList.add(r.classes.button),
                              M.classList.add(r.classes.elementHalf),
                              M.classList.add(r.classes.backgroundError),
                              (M.innerHTML = o),
                              (M.onclick = function () {
                                 L(C, m), h(), d ? d() : n && n();
                              }),
                              v.appendChild(E),
                              v.appendChild(T),
                              v.appendChild(M),
                              (v.listener = function (e) {
                                 b(e) ? T.click() : x(e) && M.click();
                              }),
                              y(v, m),
                              g(v, m);
                        }),
                        M = function (e, t, n) {
                           var i = e.text,
                              c = e.submitText,
                              o = void 0 === c ? "Submit" : c,
                              l = e.cancelText,
                              d = void 0 === l ? "Cancel" : l,
                              u = e.submitCallback,
                              m = e.cancelCallback,
                              v = e.position,
                              C = void 0 === v ? r.positions.input || C.top : v,
                              E = s(e, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
                           p(), k();
                           var T = document.createElement("div"),
                              M = f();
                           T.id = M;
                           var H = document.createElement("div");
                           H.classList.add(r.classes.textbox), H.classList.add(r.classes.backgroundInfo), (H.innerHTML = '<div class="' + r.classes.textboxInner + '">' + i + "</div>");
                           var S = document.createElement("input");
                           S.classList.add(r.classes.inputField),
                              S.setAttribute("autocapitalize", E.autocapitalize || "none"),
                              S.setAttribute("autocomplete", E.autocomplete || "off"),
                              S.setAttribute("autocorrect", E.autocorrect || "off"),
                              S.setAttribute("autofocus", E.autofocus || "true"),
                              S.setAttribute("inputmode", E.inputmode || "verbatim"),
                              S.setAttribute("max", E.max || ""),
                              S.setAttribute("maxlength", E.maxlength || ""),
                              S.setAttribute("min", E.min || ""),
                              S.setAttribute("minlength", E.minlength || ""),
                              S.setAttribute("placeholder", E.placeholder || ""),
                              S.setAttribute("spellcheck", E.spellcheck || "default"),
                              S.setAttribute("step", E.step || "any"),
                              S.setAttribute("type", E.type || "text"),
                              (S.value = E.value || ""),
                              E.allowed &&
                              (S.oninput = function () {
                                 var e = void 0;
                                 if (Array.isArray(E.allowed)) {
                                    for (var t = "", n = E.allowed, s = 0; s < n.length; s++) "an" === n[s] ? (t += "0-9a-zA-Z") : "a" === n[s] ? (t += "a-zA-Z") : "n" === n[s] && (t += "0-9"), "s" === n[s] && (t += " ");
                                    e = new RegExp("[^" + t + "]", "g");
                                 } else "object" === a(E.allowed) && (e = E.allowed);
                                 S.value = S.value.replace(e, "");
                              });
                           var w = document.createElement("div");
                           w.classList.add(r.classes.button),
                              w.classList.add(r.classes.elementHalf),
                              w.classList.add(r.classes.backgroundSuccess),
                              (w.innerHTML = o),
                              (w.onclick = function () {
                                 L(M, C), h(), u ? u(S.value) : t && t(S.value);
                              });
                           var O = document.createElement("div");
                           O.classList.add(r.classes.button),
                              O.classList.add(r.classes.elementHalf),
                              O.classList.add(r.classes.backgroundError),
                              (O.innerHTML = d),
                              (O.onclick = function () {
                                 L(M, C), h(), m ? m(S.value) : n && n(S.value);
                              }),
                              T.appendChild(H),
                              T.appendChild(S),
                              T.appendChild(w),
                              T.appendChild(O),
                              (T.listener = function (e) {
                                 b(e) ? w.click() : x(e) && O.click();
                              }),
                              y(T, C),
                              S.focus(),
                              g(T, C);
                        };
                     t.input = M;
                     var H = (t.select = function (e, t) {
                        var n = e.text,
                           s = e.cancelText,
                           a = void 0 === s ? "Cancel" : s,
                           i = e.cancelCallback,
                           c = e.choices,
                           o = e.position,
                           l = void 0 === o ? r.positions.select || l.top : o;
                        p(), k();
                        var d = document.createElement("div"),
                           u = f();
                        d.id = u;
                        var v = document.createElement("div");
                        v.classList.add(r.classes.textbox),
                           v.classList.add(r.classes.backgroundInfo),
                           (v.innerHTML = '<div class="' + r.classes.textboxInner + '">' + n + "</div>"),
                           d.appendChild(v),
                           c.forEach(function (e, t) {
                              var n = e.type,
                                 s = void 0 === n ? 1 : n,
                                 a = e.text,
                                 i = e.handler,
                                 o = document.createElement("div");
                              o.classList.add(m[s]), o.classList.add(r.classes.button), o.classList.add(r.classes.selectChoice);
                              var p = c[t + 1];
                              p && !p.type && (p.type = 1),
                                 p && p.type === s && o.classList.add(r.classes.selectChoiceRepeated),
                                 (o.innerHTML = a),
                                 (o.onclick = function () {
                                    L(u, l), h(), i();
                                 }),
                                 d.appendChild(o);
                           });
                        var b = document.createElement("div");
                        b.classList.add(r.classes.backgroundNeutral),
                           b.classList.add(r.classes.button),
                           (b.innerHTML = a),
                           (b.onclick = function () {
                              L(u, l), h(), i ? i() : t && t();
                           }),
                           d.appendChild(b),
                           (d.listener = function (e) {
                              x(e) && b.click();
                           }),
                           y(d, l),
                           g(d, l);
                     }),
                        S = (t.date = function (e, t, n) {
                           var s = e.value,
                              a = void 0 === s ? new Date() : s,
                              i = e.submitText,
                              c = void 0 === i ? "OK" : i,
                              o = e.cancelText,
                              l = void 0 === o ? "Cancel" : o,
                              d = e.submitCallback,
                              u = e.cancelCallback,
                              m = e.position,
                              v = void 0 === m ? r.positions.date || v.top : m;
                           p(), k();
                           var C = "&#9662",
                              E = document.createElement("div"),
                              T = document.createElement("div"),
                              M = document.createElement("div"),
                              H = function (e) {
                                 (E.innerHTML = r.dateMonths[e.getMonth()]), (T.innerHTML = e.getDate()), (M.innerHTML = e.getFullYear());
                              },
                              S = function (e) {
                                 var t = new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate(),
                                    n = e.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                                 Number(n) > t && (n = t.toString()), (e.target.textContent = n), Number(n) < 1 && (n = "1"), a.setDate(Number(n));
                              },
                              w = function (e) {
                                 var t = e.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                                 (e.target.textContent = t), a.setFullYear(Number(t));
                              },
                              O = function (e) {
                                 H(a);
                              },
                              A = function (e) {
                                 var t = new Date(a.getFullYear(), a.getMonth() + e + 1, 0).getDate();
                                 a.getDate() > t && a.setDate(t), a.setMonth(a.getMonth() + e), H(a);
                              },
                              D = function (e) {
                                 a.setDate(a.getDate() + e), H(a);
                              },
                              I = function (e) {
                                 var t = a.getFullYear() + e;
                                 t < 0 ? a.setFullYear(0) : a.setFullYear(a.getFullYear() + e), H(a);
                              },
                              j = document.createElement("div"),
                              N = f();
                           j.id = N;
                           var P = document.createElement("div");
                           P.classList.add(r.classes.backgroundInfo);
                           var F = document.createElement("div");
                           F.classList.add(r.classes.dateSelectorInner);
                           var Y = document.createElement("div");
                           Y.classList.add(r.classes.button), Y.classList.add(r.classes.elementThird), Y.classList.add(r.classes.dateSelectorUp), (Y.innerHTML = C);
                           var _ = document.createElement("div");
                           _.classList.add(r.classes.button), _.classList.add(r.classes.elementThird), _.classList.add(r.classes.dateSelectorUp), (_.innerHTML = C);
                           var z = document.createElement("div");
                           z.classList.add(r.classes.button),
                              z.classList.add(r.classes.elementThird),
                              z.classList.add(r.classes.dateSelectorUp),
                              (z.innerHTML = C),
                              E.classList.add(r.classes.element),
                              E.classList.add(r.classes.elementThird),
                              (E.innerHTML = r.dateMonths[a.getMonth()]),
                              T.classList.add(r.classes.element),
                              T.classList.add(r.classes.elementThird),
                              T.setAttribute("contentEditable", !0),
                              T.addEventListener("input", S),
                              T.addEventListener("blur", O),
                              (T.innerHTML = a.getDate()),
                              M.classList.add(r.classes.element),
                              M.classList.add(r.classes.elementThird),
                              M.setAttribute("contentEditable", !0),
                              M.addEventListener("input", w),
                              M.addEventListener("blur", O),
                              (M.innerHTML = a.getFullYear());
                           var U = document.createElement("div");
                           U.classList.add(r.classes.button), U.classList.add(r.classes.elementThird), (U.innerHTML = C);
                           var B = document.createElement("div");
                           B.classList.add(r.classes.button), B.classList.add(r.classes.elementThird), (B.innerHTML = C);
                           var J = document.createElement("div");
                           J.classList.add(r.classes.button),
                              J.classList.add(r.classes.elementThird),
                              (J.innerHTML = C),
                              (Y.onclick = function () {
                                 return A(1);
                              }),
                              (_.onclick = function () {
                                 return D(1);
                              }),
                              (z.onclick = function () {
                                 return I(1);
                              }),
                              (U.onclick = function () {
                                 return A(-1);
                              }),
                              (B.onclick = function () {
                                 return D(-1);
                              }),
                              (J.onclick = function () {
                                 return I(-1);
                              });
                           var R = document.createElement("div");
                           R.classList.add(r.classes.button),
                              R.classList.add(r.classes.elementHalf),
                              R.classList.add(r.classes.backgroundSuccess),
                              (R.innerHTML = c),
                              (R.onclick = function () {
                                 L(N, v), h(), d ? d(a) : t && t(a);
                              });
                           var W = document.createElement("div");
                           W.classList.add(r.classes.button),
                              W.classList.add(r.classes.elementHalf),
                              W.classList.add(r.classes.backgroundError),
                              (W.innerHTML = l),
                              (W.onclick = function () {
                                 L(N, v), h(), u ? u(a) : n && n(a);
                              }),
                              F.appendChild(Y),
                              F.appendChild(_),
                              F.appendChild(z),
                              F.appendChild(E),
                              F.appendChild(T),
                              F.appendChild(M),
                              F.appendChild(U),
                              F.appendChild(B),
                              F.appendChild(J),
                              P.appendChild(F),
                              j.appendChild(P),
                              j.appendChild(R),
                              j.appendChild(W),
                              (j.listener = function (e) {
                                 b(e) ? R.click() : x(e) && W.click();
                              }),
                              y(j, v),
                              g(j, v);
                        });
                     t.default = { alert: C, force: E, confirm: T, input: M, select: H, date: S, setOptions: l, hideAlerts: k };
                  },
               ]);
            });
         }.call(t, n(0)(e)));
      },
   ]);
});

(function ($) {
   var defaults = {
      position: 'bottom',
      height: '5px',
      col_1: '#159756',
      col_2: '#da4733',
      col_3: '#3b78e7',
      col_4: '#fdba2c',
      fadeIn: 200,
      fadeOut: 200
   }
   $.materialPreloader = function (options) {
      var settings = $.extend({}, defaults, options);
      $template =
         "<div id='materialPreloader' class='load-bar' style='height:" +
         settings.height + ";display:none;" + settings.position +
         ":0px'><div class='load-bar-container'><div class='load-bar-base base1' style='background:" +
         settings.col_1 +
         "'><div class='color red' style='background:" + settings.col_2 +
         "'></div><div class='color blue' style='background:" +
         settings.col_3 +
         "'></div><div class='color yellow' style='background:" +
         settings.col_4 +
         "'></div><div class='color green' style='background:" +
         settings.col_1 +
         "'></div></div></div> <div class='load-bar-container'><div class='load-bar-base base2' style='background:" +
         settings.col_1 +
         "'><div class='color red' style='background:" + settings.col_2 +
         "'></div><div class='color blue' style='background:" +
         settings.col_3 +
         "'></div><div class='color yellow' style='background:" +
         settings.col_4 +
         "'></div> <div class='color green' style='background:" +
         settings.col_1 + "'></div> </div> </div> </div>";
      $('body').prepend($template);
      this.on = function () {
         $('#materialPreloader').fadeIn(settings.fadeIn);
      }
      this.off = function () {
         $('#materialPreloader').fadeOut(settings.fadeOut);
      }
   }
}(jQuery));
// ! MixItUp
!(function (t) {
    "use strict";
    var e = null,
        n = null;
    !(function () {
        var e = ["webkit", "moz", "o", "ms"],
            n = t.document.createElement("div"),
            a = -1;
        for (a = 0; a < e.length && !t.requestAnimationFrame; a++) t.requestAnimationFrame = t[e[a] + "RequestAnimationFrame"];
        "undefined" == typeof n.nextElementSibling &&
            Object.defineProperty(t.Element.prototype, "nextElementSibling", {
                get: function () {
                    for (var t = this.nextSibling; t; ) {
                        if (1 === t.nodeType) return t;
                        t = t.nextSibling;
                    }
                    return null;
                },
            }),
            (function (t) {
                t.matches =
                    t.matches ||
                    t.machesSelector ||
                    t.mozMatchesSelector ||
                    t.msMatchesSelector ||
                    t.oMatchesSelector ||
                    t.webkitMatchesSelector ||
                    function (t) {
                        return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t), this) > -1;
                    };
            })(t.Element.prototype),
            Object.keys ||
                (Object.keys = (function () {
                    var t = Object.prototype.hasOwnProperty,
                        e = !1,
                        n = [],
                        a = -1;
                    return (
                        (e = !{ toString: null }.propertyIsEnumerable("toString")),
                        (n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]),
                        (a = n.length),
                        function (i) {
                            var o = [],
                                r = "",
                                s = -1;
                            if ("object" != typeof i && ("function" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
                            for (r in i) t.call(i, r) && o.push(r);
                            if (e) for (s = 0; s < a; s++) t.call(i, n[s]) && o.push(n[s]);
                            return o;
                        }
                    );
                })()),
            Array.isArray ||
                (Array.isArray = function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t);
                }),
            "function" != typeof Object.create &&
                (Object.create = (function (t) {
                    var e = function () {};
                    return function (n, a) {
                        if (n !== Object(n) && null !== n) throw TypeError("Argument must be an object, or null");
                        e.prototype = n || {};
                        var i = new e();
                        return (e.prototype = null), a !== t && Object.defineProperties(i, a), null === n && (i.__proto__ = null), i;
                    };
                })()),
            String.prototype.trim ||
                (String.prototype.trim = function () {
                    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                }),
            Array.prototype.indexOf ||
                (Array.prototype.indexOf = function (t) {
                    var e, n, a, i;
                    if (null === this) throw new TypeError();
                    if (((a = Object(this)), (i = a.length >>> 0), 0 === i)) return -1;
                    if (((e = 0), arguments.length > 1 && ((e = Number(arguments[1])), e !== e ? (e = 0) : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e)))), e >= i)) return -1;
                    for (n = e >= 0 ? e : Math.max(i - Math.abs(e), 0); n < i; n++) if (n in a && a[n] === t) return n;
                    return -1;
                }),
            Function.prototype.bind ||
                (Function.prototype.bind = function (t) {
                    var e, n, a, i;
                    if ("function" != typeof this) throw new TypeError();
                    return (
                        (e = Array.prototype.slice.call(arguments, 1)),
                        (n = this),
                        (a = function () {}),
                        (i = function () {
                            return n.apply(this instanceof a ? this : t, e.concat(Array.prototype.slice.call(arguments)));
                        }),
                        this.prototype && (a.prototype = this.prototype),
                        (i.prototype = new a()),
                        i
                    );
                }),
            t.Element.prototype.dispatchEvent ||
                (t.Element.prototype.dispatchEvent = function (t) {
                    try {
                        return this.fireEvent("on" + t.type, t);
                    } catch (e) {}
                });
    })(),
        (e = function (a, i, o) {
            var r = null,
                s = !1,
                l = null,
                c = null,
                u = null,
                f = null,
                h = [],
                d = "",
                m = [],
                g = -1;
            if (((u = o || t.document), (s = arguments[3]) && (s = "boolean" == typeof s), "string" == typeof a)) m = u.querySelectorAll(a);
            else if (a && "object" == typeof a && n.isElement(a, u)) m = [a];
            else {
                if (!a || "object" != typeof a || !a.length) throw new Error(e.messages.errorFactoryInvalidContainer());
                m = a;
            }
            if (m.length < 1) throw new Error(e.messages.errorFactoryContainerNotFound());
            for (g = 0; (r = m[g]) && (!(g > 0) || s); g++)
                r.id ? (d = r.id) : ((d = "MixItUp" + n.randomHex()), (r.id = d)),
                    e.instances[d] instanceof e.Mixer
                        ? ((l = e.instances[d]), (!i || (i && i.debug && i.debug.showWarnings !== !1)) && console.warn(e.messages.warningFactoryPreexistingInstance()))
                        : ((l = new e.Mixer()), l.attach(r, u, d, i), (e.instances[d] = l)),
                    (c = new e.Facade(l)),
                    i && i.debug && i.debug.enable ? h.push(l) : h.push(c);
            return (f = s ? new e.Collection(h) : h[0]);
        }),
        (e.use = function (t) {
            e.Base.prototype.callActions.call(e, "beforeUse", arguments),
                "function" == typeof t && "mixitup-extension" === t.TYPE ? "undefined" == typeof e.extensions[t.NAME] && (t(e), (e.extensions[t.NAME] = t)) : t.fn && t.fn.jquery && (e.libraries.$ = t),
                e.Base.prototype.callActions.call(e, "afterUse", arguments);
        }),
        (e.instances = {}),
        (e.extensions = {}),
        (e.libraries = {}),
        (n = {
            hasClass: function (t, e) {
                return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
            },
            addClass: function (t, e) {
                this.hasClass(t, e) || (t.className += t.className ? " " + e : e);
            },
            removeClass: function (t, e) {
                if (this.hasClass(t, e)) {
                    var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className.replace(n, " ").trim();
                }
            },
            extend: function (t, e, n, a) {
                var i = [],
                    o = "",
                    r = -1;
                (n = n || !1), (a = a || !1);
                try {
                    if (Array.isArray(e)) for (r = 0; r < e.length; r++) i.push(r);
                    else e && (i = Object.keys(e));
                    for (r = 0; r < i.length; r++)
                        (o = i[r]), !n || "object" != typeof e[o] || this.isElement(e[o]) ? (t[o] = e[o]) : Array.isArray(e[o]) ? (t[o] || (t[o] = []), this.extend(t[o], e[o], n, a)) : (t[o] || (t[o] = {}), this.extend(t[o], e[o], n, a));
                } catch (s) {
                    if (!a) throw s;
                    this.handleExtendError(s, t);
                }
                return t;
            },
            handleExtendError: function (t, n) {
                var a = /property "?(\w*)"?[,:] object/i,
                    i = null,
                    o = "",
                    r = "",
                    s = "",
                    l = "",
                    c = "",
                    u = -1,
                    f = -1;
                if (t instanceof TypeError && (i = a.exec(t.message))) {
                    o = i[1];
                    for (c in n) {
                        for (f = 0; f < o.length && o.charAt(f) === c.charAt(f); ) f++;
                        f > u && ((u = f), (l = c));
                    }
                    throw (u > 1 && (s = e.messages.errorConfigInvalidPropertySuggestion({ probableMatch: l })), (r = e.messages.errorConfigInvalidProperty({ erroneous: o, suggestion: s })), new TypeError(r));
                }
                throw t;
            },
            template: function (t) {
                for (var e = /\${([\w]*)}/g, n = {}, a = null; (a = e.exec(t)); ) n[a[1]] = new RegExp("\\${" + a[1] + "}", "g");
                return function (e) {
                    var a = "",
                        i = t;
                    e = e || {};
                    for (a in n) i = i.replace(n[a], "undefined" != typeof e[a] ? e[a] : "");
                    return i;
                };
            },
            on: function (e, n, a, i) {
                e &&
                    (e.addEventListener
                        ? e.addEventListener(n, a, i)
                        : e.attachEvent &&
                          ((e["e" + n + a] = a),
                          (e[n + a] = function () {
                              e["e" + n + a](t.event);
                          }),
                          e.attachEvent("on" + n, e[n + a])));
            },
            off: function (t, e, n) {
                t && (t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && (t.detachEvent("on" + e, t[e + n]), (t[e + n] = null)));
            },
            getCustomEvent: function (e, n, a) {
                var i = null;
                return (
                    (a = a || t.document),
                    "function" == typeof t.CustomEvent
                        ? (i = new t.CustomEvent(e, { detail: n, bubbles: !0, cancelable: !0 }))
                        : "function" == typeof a.createEvent
                        ? ((i = a.createEvent("CustomEvent")), i.initCustomEvent(e, !0, !0, n))
                        : ((i = a.createEventObject()), (i.type = e), (i.returnValue = !1), (i.cancelBubble = !1), (i.detail = n)),
                    i
                );
            },
            getOriginalEvent: function (t) {
                return t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t;
            },
            index: function (t, e) {
                for (var n = 0; null !== (t = t.previousElementSibling); ) (e && !t.matches(e)) || ++n;
                return n;
            },
            camelCase: function (t) {
                return t.toLowerCase().replace(/([_-][a-z])/g, function (t) {
                    return t.toUpperCase().replace(/[_-]/, "");
                });
            },
            pascalCase: function (t) {
                return (t = this.camelCase(t)).charAt(0).toUpperCase() + t.slice(1);
            },
            dashCase: function (t) {
                return t
                    .replace(/([A-Z])/g, "-$1")
                    .replace(/^-/, "")
                    .toLowerCase();
            },
            isElement: function (e, n) {
                return (
                    (n = n || t.document),
                    !!(t.HTMLElement && e instanceof t.HTMLElement) || !!(n.defaultView && n.defaultView.HTMLElement && e instanceof n.defaultView.HTMLElement) || (null !== e && 1 === e.nodeType && "string" == typeof e.nodeName)
                );
            },
            createElement: function (e, n) {
                var a = null,
                    i = null;
                for (n = n || t.document, a = n.createDocumentFragment(), i = n.createElement("div"), i.innerHTML = e.trim(); i.firstChild; ) a.appendChild(i.firstChild);
                return a;
            },
            removeWhitespace: function (t) {
                for (var e; t && "#text" === t.nodeName; ) (e = t), (t = t.previousSibling), e.parentElement && e.parentElement.removeChild(e);
            },
            isEqualArray: function (t, e) {
                var n = t.length;
                if (n !== e.length) return !1;
                for (; n--; ) if (t[n] !== e[n]) return !1;
                return !0;
            },
            deepEquals: function (t, e) {
                var n;
                if ("object" == typeof t && t && "object" == typeof e && e) {
                    if (Object.keys(t).length !== Object.keys(e).length) return !1;
                    for (n in t) if (!e.hasOwnProperty(n) || !this.deepEquals(t[n], e[n])) return !1;
                } else if (t !== e) return !1;
                return !0;
            },
            arrayShuffle: function (t) {
                for (var e = t.slice(), n = e.length, a = n, i = -1, o = []; a--; ) (i = ~~(Math.random() * n)), (o = e[a]), (e[a] = e[i]), (e[i] = o);
                return e;
            },
            arrayFromList: function (t) {
                var e, n;
                try {
                    return Array.prototype.slice.call(t);
                } catch (a) {
                    for (e = [], n = 0; n < t.length; n++) e.push(t[n]);
                    return e;
                }
            },
            debounce: function (t, e, n) {
                var a;
                return function () {
                    var i = this,
                        o = arguments,
                        r = n && !a,
                        s = null;
                    (s = function () {
                        (a = null), n || t.apply(i, o);
                    }),
                        clearTimeout(a),
                        (a = setTimeout(s, e)),
                        r && t.apply(i, o);
                };
            },
            position: function (t) {
                for (var e = 0, n = 0, a = t; t; ) (e -= t.scrollLeft), (n -= t.scrollTop), t === a && ((e += t.offsetLeft), (n += t.offsetTop), (a = t.offsetParent)), (t = t.parentElement);
                return { x: e, y: n };
            },
            getHypotenuse: function (t, e) {
                var n = t.x - e.x,
                    a = t.y - e.y;
                return (n = n < 0 ? n * -1 : n), (a = a < 0 ? a * -1 : a), Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
            },
            getIntersectionRatio: function (t, e) {
                var n = t.width * t.height,
                    a = -1,
                    i = -1,
                    o = -1,
                    r = -1;
                return (a = Math.max(0, Math.min(t.left + t.width, e.left + e.width) - Math.max(t.left, e.left))), (i = Math.max(0, Math.min(t.top + t.height, e.top + e.height) - Math.max(t.top, e.top))), (o = i * a), (r = o / n);
            },
            closestParent: function (e, n, a, i) {
                var o = e.parentNode;
                if (((i = i || t.document), a && e.matches(n))) return e;
                for (; o && o != i.body; ) {
                    if (o.matches && o.matches(n)) return o;
                    if (!o.parentNode) return null;
                    o = o.parentNode;
                }
                return null;
            },
            children: function (e, n, a) {
                var i = [],
                    o = "";
                return (a = a || t.doc), e && (e.id || ((o = "Temp" + this.randomHexKey()), (e.id = o)), (i = a.querySelectorAll("#" + e.id + " > " + n)), o && e.removeAttribute("id")), i;
            },
            clean: function (t) {
                var e = [],
                    n = -1;
                for (n = 0; n < t.length; n++) "" !== t[n] && e.push(t[n]);
                return e;
            },
            defer: function (n) {
                var a = null,
                    i = null,
                    o = null;
                return (
                    (i = new this.Deferred()),
                    e.features.has.promises
                        ? (i.promise = new Promise(function (t, e) {
                              (i.resolve = t), (i.reject = e);
                          }))
                        : (o = t.jQuery || n.$) && "function" == typeof o.Deferred
                        ? ((a = o.Deferred()), (i.promise = a.promise()), (i.resolve = a.resolve), (i.reject = a.reject))
                        : t.console && console.warn(e.messages.warningNoPromiseImplementation()),
                    i
                );
            },
            all: function (n, a) {
                var i = null;
                return e.features.has.promises
                    ? Promise.all(n)
                    : (i = t.jQuery || a.$) && "function" == typeof i.when
                    ? i.when.apply(i, n).done(function () {
                          return arguments;
                      })
                    : (t.console && console.warn(e.messages.warningNoPromiseImplementation()), []);
            },
            getPrefix: function (t, e, a) {
                var i = -1,
                    o = "";
                if (n.dashCase(e) in t.style) return "";
                for (i = 0; (o = a[i]); i++) if (o + e in t.style) return o.toLowerCase();
                return "unsupported";
            },
            randomHex: function () {
                return ("00000" + ((16777216 * Math.random()) << 0).toString(16)).substr(-6).toUpperCase();
            },
            getDocumentState: function (e) {
                return (
                    (e = "object" == typeof e.body ? e : t.document),
                    {
                        scrollTop: t.pageYOffset,
                        scrollLeft: t.pageXOffset,
                        docHeight: e.documentElement.scrollHeight,
                        docWidth: e.documentElement.scrollWidth,
                        viewportHeight: e.documentElement.clientHeight,
                        viewportWidth: e.documentElement.clientWidth,
                    }
                );
            },
            bind: function (t, e) {
                return function () {
                    return e.apply(t, arguments);
                };
            },
            isVisible: function (e) {
                var n = null;
                return !!e.offsetParent || ((n = t.getComputedStyle(e)), "fixed" === n.position && "hidden" !== n.visibility && "0" !== n.opacity);
            },
            seal: function (t) {
                "function" == typeof Object.seal && Object.seal(t);
            },
            freeze: function (t) {
                "function" == typeof Object.freeze && Object.freeze(t);
            },
            compareVersions: function (t, e) {
                var n = t.split("."),
                    a = e.split("."),
                    i = -1,
                    o = -1,
                    r = -1;
                for (r = 0; r < n.length; r++) {
                    if (((i = parseInt(n[r].replace(/[^\d.]/g, ""))), (o = parseInt(a[r].replace(/[^\d.]/g, "") || 0)), o < i)) return !1;
                    if (o > i) return !0;
                }
                return !0;
            },
            Deferred: function () {
                (this.promise = null), (this.resolve = null), (this.reject = null), (this.id = n.randomHex());
            },
            isEmptyObject: function (t) {
                var e = "";
                if ("function" == typeof Object.keys) return 0 === Object.keys(t).length;
                for (e in t) if (t.hasOwnProperty(e)) return !1;
                return !0;
            },
            getClassname: function (t, e, n) {
                var a = "";
                return (a += t.block), a.length && (a += t.delineatorElement), (a += t["element" + this.pascalCase(e)]), n ? (a.length && (a += t.delineatorModifier), (a += n)) : a;
            },
            getProperty: function (t, e) {
                var n = e.split("."),
                    a = null,
                    i = "",
                    o = 0;
                if (!e) return t;
                for (
                    a = function (t) {
                        return t ? t[i] : null;
                    };
                    o < n.length;

                )
                    (i = n[o]), (t = a(t)), o++;
                return "undefined" != typeof t ? t : null;
            },
        }),
        (e.h = n),
        (e.Base = function () {}),
        (e.Base.prototype = {
            constructor: e.Base,
            callActions: function (t, e) {
                var a = this,
                    i = a.constructor.actions[t],
                    o = "";
                if (i && !n.isEmptyObject(i)) for (o in i) i[o].apply(a, e);
            },
            callFilters: function (t, e, a) {
                var i = this,
                    o = i.constructor.filters[t],
                    r = e,
                    s = "";
                if (!o || n.isEmptyObject(o)) return r;
                a = a || [];
                for (s in o) (a = n.arrayFromList(a)), a.unshift(r), (r = o[s].apply(i, a));
                return r;
            },
        }),
        (e.BaseStatic = function () {
            (this.actions = {}),
                (this.filters = {}),
                (this.extend = function (t) {
                    n.extend(this.prototype, t);
                }),
                (this.registerAction = function (t, e, n) {
                    (this.actions[t] = this.actions[t] || {})[e] = n;
                }),
                (this.registerFilter = function (t, e, n) {
                    (this.filters[t] = this.filters[t] || {})[e] = n;
                });
        }),
        (e.Features = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.boxSizingPrefix = ""),
                (this.transformPrefix = ""),
                (this.transitionPrefix = ""),
                (this.boxSizingPrefix = ""),
                (this.transformProp = ""),
                (this.transformRule = ""),
                (this.transitionProp = ""),
                (this.perspectiveProp = ""),
                (this.perspectiveOriginProp = ""),
                (this.has = new e.Has()),
                (this.canary = null),
                (this.BOX_SIZING_PROP = "boxSizing"),
                (this.TRANSITION_PROP = "transition"),
                (this.TRANSFORM_PROP = "transform"),
                (this.PERSPECTIVE_PROP = "perspective"),
                (this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin"),
                (this.VENDORS = ["Webkit", "moz", "O", "ms"]),
                (this.TWEENABLE = ["opacity", "width", "height", "marginRight", "marginBottom", "x", "y", "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"]),
                this.callActions("afterConstruct");
        }),
        e.BaseStatic.call(e.Features),
        (e.Features.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Features.prototype, {
            constructor: e.Features,
            init: function () {
                var t = this;
                t.callActions("beforeInit", arguments), (t.canary = document.createElement("div")), t.setPrefixes(), t.runTests(), t.callActions("beforeInit", arguments);
            },
            runTests: function () {
                var e = this;
                e.callActions("beforeRunTests", arguments), (e.has.promises = "function" == typeof t.Promise), (e.has.transitions = "unsupported" !== e.transitionPrefix), e.callActions("afterRunTests", arguments), n.freeze(e.has);
            },
            setPrefixes: function () {
                var t = this;
                t.callActions("beforeSetPrefixes", arguments),
                    (t.transitionPrefix = n.getPrefix(t.canary, "Transition", t.VENDORS)),
                    (t.transformPrefix = n.getPrefix(t.canary, "Transform", t.VENDORS)),
                    (t.boxSizingPrefix = n.getPrefix(t.canary, "BoxSizing", t.VENDORS)),
                    (t.boxSizingProp = t.boxSizingPrefix ? t.boxSizingPrefix + n.pascalCase(t.BOX_SIZING_PROP) : t.BOX_SIZING_PROP),
                    (t.transitionProp = t.transitionPrefix ? t.transitionPrefix + n.pascalCase(t.TRANSITION_PROP) : t.TRANSITION_PROP),
                    (t.transformProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.TRANSFORM_PROP) : t.TRANSFORM_PROP),
                    (t.transformRule = t.transformPrefix ? "-" + t.transformPrefix + "-" + t.TRANSFORM_PROP : t.TRANSFORM_PROP),
                    (t.perspectiveProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_PROP) : t.PERSPECTIVE_PROP),
                    (t.perspectiveOriginProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP) : t.PERSPECTIVE_ORIGIN_PROP),
                    t.callActions("afterSetPrefixes", arguments);
            },
        }),
        (e.Has = function () {
            (this.transitions = !1), (this.promises = !1), n.seal(this);
        }),
        (e.features = new e.Features()),
        e.features.init(),
        (e.ConfigAnimation = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.enable = !0),
                (this.effects = "fade scale"),
                (this.effectsIn = ""),
                (this.effectsOut = ""),
                (this.duration = 600),
                (this.easing = "ease"),
                (this.applyPerspective = !0),
                (this.perspectiveDistance = "3000px"),
                (this.perspectiveOrigin = "50% 50%"),
                (this.queue = !0),
                (this.queueLimit = 3),
                (this.animateResizeContainer = !0),
                (this.animateResizeTargets = !1),
                (this.staggerSequence = null),
                (this.reverseOut = !1),
                (this.nudge = !0),
                (this.clampHeight = !0),
                (this.clampWidth = !0),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigAnimation),
        (e.ConfigAnimation.prototype = Object.create(e.Base.prototype)),
        (e.ConfigAnimation.prototype.constructor = e.ConfigAnimation),
        (e.ConfigBehavior = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.liveSort = !1), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigBehavior),
        (e.ConfigBehavior.prototype = Object.create(e.Base.prototype)),
        (e.ConfigBehavior.prototype.constructor = e.ConfigBehavior),
        (e.ConfigCallbacks = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.onMixStart = null),
                (this.onMixBusy = null),
                (this.onMixEnd = null),
                (this.onMixFail = null),
                (this.onMixClick = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigCallbacks),
        (e.ConfigCallbacks.prototype = Object.create(e.Base.prototype)),
        (e.ConfigCallbacks.prototype.constructor = e.ConfigCallbacks),
        (e.ConfigControls = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.enable = !0), (this.live = !1), (this.scope = "global"), (this.toggleLogic = "or"), (this.toggleDefault = "all"), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigControls),
        (e.ConfigControls.prototype = Object.create(e.Base.prototype)),
        (e.ConfigControls.prototype.constructor = e.ConfigControls),
        (e.ConfigClassNames = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.block = "mixitup"),
                (this.elementContainer = "container"),
                (this.elementFilter = "control"),
                (this.elementSort = "control"),
                (this.elementMultimix = "control"),
                (this.elementToggle = "control"),
                (this.modifierActive = "active"),
                (this.modifierDisabled = "disabled"),
                (this.modifierFailed = "failed"),
                (this.delineatorElement = "-"),
                (this.delineatorModifier = "-"),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigClassNames),
        (e.ConfigClassNames.prototype = Object.create(e.Base.prototype)),
        (e.ConfigClassNames.prototype.constructor = e.ConfigClassNames),
        (e.ConfigData = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.uidKey = ""), (this.dirtyCheck = !1), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigData),
        (e.ConfigData.prototype = Object.create(e.Base.prototype)),
        (e.ConfigData.prototype.constructor = e.ConfigData),
        (e.ConfigDebug = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.enable = !1), (this.showWarnings = !0), (this.fauxAsync = !1), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigDebug),
        (e.ConfigDebug.prototype = Object.create(e.Base.prototype)),
        (e.ConfigDebug.prototype.constructor = e.ConfigDebug),
        (e.ConfigLayout = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.allowNestedTargets = !0), (this.containerClassName = ""), (this.siblingBefore = null), (this.siblingAfter = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigLayout),
        (e.ConfigLayout.prototype = Object.create(e.Base.prototype)),
        (e.ConfigLayout.prototype.constructor = e.ConfigLayout),
        (e.ConfigLoad = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.filter = "all"), (this.sort = "default:asc"), (this.dataset = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigLoad),
        (e.ConfigLoad.prototype = Object.create(e.Base.prototype)),
        (e.ConfigLoad.prototype.constructor = e.ConfigLoad),
        (e.ConfigSelectors = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.target = ".mix"), (this.control = ""), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigSelectors),
        (e.ConfigSelectors.prototype = Object.create(e.Base.prototype)),
        (e.ConfigSelectors.prototype.constructor = e.ConfigSelectors),
        (e.ConfigRender = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.target = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigRender),
        (e.ConfigRender.prototype = Object.create(e.Base.prototype)),
        (e.ConfigRender.prototype.constructor = e.ConfigRender),
        (e.ConfigTemplates = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.ConfigTemplates),
        (e.ConfigTemplates.prototype = Object.create(e.Base.prototype)),
        (e.ConfigTemplates.prototype.constructor = e.ConfigTemplates),
        (e.Config = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.animation = new e.ConfigAnimation()),
                (this.behavior = new e.ConfigBehavior()),
                (this.callbacks = new e.ConfigCallbacks()),
                (this.controls = new e.ConfigControls()),
                (this.classNames = new e.ConfigClassNames()),
                (this.data = new e.ConfigData()),
                (this.debug = new e.ConfigDebug()),
                (this.layout = new e.ConfigLayout()),
                (this.load = new e.ConfigLoad()),
                (this.selectors = new e.ConfigSelectors()),
                (this.render = new e.ConfigRender()),
                (this.templates = new e.ConfigTemplates()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Config),
        (e.Config.prototype = Object.create(e.Base.prototype)),
        (e.Config.prototype.constructor = e.Config),
        (e.MixerDom = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.document = null), (this.body = null), (this.container = null), (this.parent = null), (this.targets = []), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.MixerDom),
        (e.MixerDom.prototype = Object.create(e.Base.prototype)),
        (e.MixerDom.prototype.constructor = e.MixerDom),
        (e.UiClassNames = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.base = ""), (this.active = ""), (this.disabled = ""), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.UiClassNames),
        (e.UiClassNames.prototype = Object.create(e.Base.prototype)),
        (e.UiClassNames.prototype.constructor = e.UiClassNames),
        (e.CommandDataset = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.dataset = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.CommandDataset),
        (e.CommandDataset.prototype = Object.create(e.Base.prototype)),
        (e.CommandDataset.prototype.constructor = e.CommandDataset),
        (e.CommandMultimix = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.filter = null), (this.sort = null), (this.insert = null), (this.remove = null), (this.changeLayout = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.CommandMultimix),
        (e.CommandMultimix.prototype = Object.create(e.Base.prototype)),
        (e.CommandMultimix.prototype.constructor = e.CommandMultimix),
        (e.CommandFilter = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.selector = ""), (this.collection = null), (this.action = "show"), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.CommandFilter),
        (e.CommandFilter.prototype = Object.create(e.Base.prototype)),
        (e.CommandFilter.prototype.constructor = e.CommandFilter),
        (e.CommandSort = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.sortString = ""), (this.attribute = ""), (this.order = "asc"), (this.collection = null), (this.next = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.CommandSort),
        (e.CommandSort.prototype = Object.create(e.Base.prototype)),
        (e.CommandSort.prototype.constructor = e.CommandSort),
        (e.CommandInsert = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.index = 0), (this.collection = []), (this.position = "before"), (this.sibling = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.CommandInsert),
        (e.CommandInsert.prototype = Object.create(e.Base.prototype)),
        (e.CommandInsert.prototype.constructor = e.CommandInsert),
        (e.CommandRemove = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.targets = []), (this.collection = []), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.CommandRemove),
        (e.CommandRemove.prototype = Object.create(e.Base.prototype)),
        (e.CommandRemove.prototype.constructor = e.CommandRemove),
        (e.CommandChangeLayout = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.containerClassName = ""), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.CommandChangeLayout),
        (e.CommandChangeLayout.prototype = Object.create(e.Base.prototype)),
        (e.CommandChangeLayout.prototype.constructor = e.CommandChangeLayout),
        (e.ControlDefinition = function (t, a, i, o) {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.type = t), (this.selector = a), (this.live = i || !1), (this.parent = o || ""), this.callActions("afterConstruct"), n.freeze(this), n.seal(this);
        }),
        e.BaseStatic.call(e.ControlDefinition),
        (e.ControlDefinition.prototype = Object.create(e.Base.prototype)),
        (e.ControlDefinition.prototype.constructor = e.ControlDefinition),
        (e.controlDefinitions = []),
        e.controlDefinitions.push(new e.ControlDefinition("multimix", "[data-filter][data-sort]")),
        e.controlDefinitions.push(new e.ControlDefinition("filter", "[data-filter]")),
        e.controlDefinitions.push(new e.ControlDefinition("sort", "[data-sort]")),
        e.controlDefinitions.push(new e.ControlDefinition("toggle", "[data-toggle]")),
        (e.Control = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.el = null),
                (this.selector = ""),
                (this.bound = []),
                (this.pending = -1),
                (this.type = ""),
                (this.status = "inactive"),
                (this.filter = ""),
                (this.sort = ""),
                (this.canDisable = !1),
                (this.handler = null),
                (this.classNames = new e.UiClassNames()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Control),
        (e.Control.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Control.prototype, {
            constructor: e.Control,
            init: function (t, n, a) {
                var i = this;
                if ((this.callActions("beforeInit", arguments), (i.el = t), (i.type = n), (i.selector = a), i.selector)) i.status = "live";
                else
                    switch (((i.canDisable = "boolean" == typeof i.el.disable), i.type)) {
                        case "filter":
                            i.filter = i.el.getAttribute("data-filter");
                            break;
                        case "toggle":
                            i.filter = i.el.getAttribute("data-toggle");
                            break;
                        case "sort":
                            i.sort = i.el.getAttribute("data-sort");
                            break;
                        case "multimix":
                            (i.filter = i.el.getAttribute("data-filter")), (i.sort = i.el.getAttribute("data-sort"));
                    }
                i.bindClick(), e.controls.push(i), this.callActions("afterInit", arguments);
            },
            isBound: function (t) {
                var e = this,
                    n = !1;
                return this.callActions("beforeIsBound", arguments), (n = e.bound.indexOf(t) > -1), e.callFilters("afterIsBound", n, arguments);
            },
            addBinding: function (t) {
                var e = this;
                this.callActions("beforeAddBinding", arguments), e.isBound() || e.bound.push(t), this.callActions("afterAddBinding", arguments);
            },
            removeBinding: function (t) {
                var n = this,
                    a = -1;
                this.callActions("beforeRemoveBinding", arguments),
                    (a = n.bound.indexOf(t)) > -1 && n.bound.splice(a, 1),
                    n.bound.length < 1 && (n.unbindClick(), (a = e.controls.indexOf(n)), e.controls.splice(a, 1), "active" === n.status && n.renderStatus(n.el, "inactive")),
                    this.callActions("afterRemoveBinding", arguments);
            },
            bindClick: function () {
                var t = this;
                this.callActions("beforeBindClick", arguments),
                    (t.handler = function (e) {
                        t.handleClick(e);
                    }),
                    n.on(t.el, "click", t.handler),
                    this.callActions("afterBindClick", arguments);
            },
            unbindClick: function () {
                var t = this;
                this.callActions("beforeUnbindClick", arguments), n.off(t.el, "click", t.handler), (t.handler = null), this.callActions("afterUnbindClick", arguments);
            },
            handleClick: function (t) {
                var a = this,
                    i = null,
                    o = null,
                    r = !1,
                    s = void 0,
                    l = {},
                    c = null,
                    u = [],
                    f = -1;
                if ((this.callActions("beforeHandleClick", arguments), (this.pending = 0), (o = a.bound[0]), (i = a.selector ? n.closestParent(t.target, o.config.selectors.control + a.selector, !0, o.dom.document) : a.el), !i))
                    return void a.callActions("afterHandleClick", arguments);
                switch (a.type) {
                    case "filter":
                        l.filter = a.filter || i.getAttribute("data-filter");
                        break;
                    case "sort":
                        l.sort = a.sort || i.getAttribute("data-sort");
                        break;
                    case "multimix":
                        (l.filter = a.filter || i.getAttribute("data-filter")), (l.sort = a.sort || i.getAttribute("data-sort"));
                        break;
                    case "toggle":
                        (l.filter = a.filter || i.getAttribute("data-toggle")), (r = "live" === a.status ? n.hasClass(i, a.classNames.active) : "active" === a.status);
                }
                for (f = 0; f < a.bound.length; f++) (c = new e.CommandMultimix()), n.extend(c, l), u.push(c);
                for (u = a.callFilters("commandsHandleClick", u, arguments), a.pending = a.bound.length, f = 0; (o = a.bound[f]); f++)
                    (l = u[f]),
                        l &&
                            (o.lastClicked || (o.lastClicked = i),
                            e.events.fire("mixClick", o.dom.container, { state: o.state, instance: o, originalEvent: t, control: o.lastClicked }, o.dom.document),
                            ("function" == typeof o.config.callbacks.onMixClick && ((s = o.config.callbacks.onMixClick.call(o.lastClicked, o.state, t, o)), s === !1)) ||
                                ("toggle" === a.type ? (r ? o.toggleOff(l.filter) : o.toggleOn(l.filter)) : o.multimix(l)));
                this.callActions("afterHandleClick", arguments);
            },
            update: function (t, n) {
                var a = this,
                    i = new e.CommandMultimix();
                a.callActions("beforeUpdate", arguments),
                    a.pending--,
                    (a.pending = Math.max(0, a.pending)),
                    a.pending > 0 ||
                        ("live" === a.status ? a.updateLive(t, n) : ((i.sort = a.sort), (i.filter = a.filter), a.callFilters("actionsUpdate", i, arguments), a.parseStatusChange(a.el, t, i, n)), a.callActions("afterUpdate", arguments));
            },
            updateLive: function (t, n) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = -1;
                if ((a.callActions("beforeUpdateLive", arguments), a.el)) {
                    for (i = a.el.querySelectorAll(a.selector), s = 0; (r = i[s]); s++) {
                        switch (((o = new e.CommandMultimix()), a.type)) {
                            case "filter":
                                o.filter = r.getAttribute("data-filter");
                                break;
                            case "sort":
                                o.sort = r.getAttribute("data-sort");
                                break;
                            case "multimix":
                                (o.filter = r.getAttribute("data-filter")), (o.sort = r.getAttribute("data-sort"));
                                break;
                            case "toggle":
                                o.filter = r.getAttribute("data-toggle");
                        }
                        (o = a.callFilters("actionsUpdateLive", o, arguments)), a.parseStatusChange(r, t, o, n);
                    }
                    a.callActions("afterUpdateLive", arguments);
                }
            },
            parseStatusChange: function (t, e, n, a) {
                var i = this,
                    o = "",
                    r = "",
                    s = -1;
                switch ((i.callActions("beforeParseStatusChange", arguments), i.type)) {
                    case "filter":
                        e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                        break;
                    case "multimix":
                        e.sort === n.sort && e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                        break;
                    case "sort":
                        e.sort.match(/:asc/g) && (o = e.sort.replace(/:asc/g, "")), e.sort === n.sort || o === n.sort ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                        break;
                    case "toggle":
                        for (a.length < 1 && i.renderStatus(t, "inactive"), e.filter === n.filter && i.renderStatus(t, "active"), s = 0; s < a.length; s++) {
                            if (((r = a[s]), r === n.filter)) {
                                i.renderStatus(t, "active");
                                break;
                            }
                            i.renderStatus(t, "inactive");
                        }
                }
                i.callActions("afterParseStatusChange", arguments);
            },
            renderStatus: function (t, e) {
                var a = this;
                switch ((a.callActions("beforeRenderStatus", arguments), e)) {
                    case "active":
                        n.addClass(t, a.classNames.active), n.removeClass(t, a.classNames.disabled), a.canDisable && (a.el.disabled = !1);
                        break;
                    case "inactive":
                        n.removeClass(t, a.classNames.active), n.removeClass(t, a.classNames.disabled), a.canDisable && (a.el.disabled = !1);
                        break;
                    case "disabled":
                        a.canDisable && (a.el.disabled = !0), n.addClass(t, a.classNames.disabled), n.removeClass(t, a.classNames.active);
                }
                "live" !== a.status && (a.status = e), a.callActions("afterRenderStatus", arguments);
            },
        }),
        (e.controls = []),
        (e.StyleData = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.x = 0),
                (this.y = 0),
                (this.top = 0),
                (this.right = 0),
                (this.bottom = 0),
                (this.left = 0),
                (this.width = 0),
                (this.height = 0),
                (this.marginRight = 0),
                (this.marginBottom = 0),
                (this.opacity = 0),
                (this.scale = new e.TransformData()),
                (this.translateX = new e.TransformData()),
                (this.translateY = new e.TransformData()),
                (this.translateZ = new e.TransformData()),
                (this.rotateX = new e.TransformData()),
                (this.rotateY = new e.TransformData()),
                (this.rotateZ = new e.TransformData()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.StyleData),
        (e.StyleData.prototype = Object.create(e.Base.prototype)),
        (e.StyleData.prototype.constructor = e.StyleData),
        (e.TransformData = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.value = 0), (this.unit = ""), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.TransformData),
        (e.TransformData.prototype = Object.create(e.Base.prototype)),
        (e.TransformData.prototype.constructor = e.TransformData),
        (e.TransformDefaults = function () {
            e.StyleData.apply(this),
                this.callActions("beforeConstruct"),
                (this.scale.value = 0.01),
                (this.scale.unit = ""),
                (this.translateX.value = 20),
                (this.translateX.unit = "px"),
                (this.translateY.value = 20),
                (this.translateY.unit = "px"),
                (this.translateZ.value = 20),
                (this.translateZ.unit = "px"),
                (this.rotateX.value = 90),
                (this.rotateX.unit = "deg"),
                (this.rotateY.value = 90),
                (this.rotateY.unit = "deg"),
                (this.rotateX.value = 90),
                (this.rotateX.unit = "deg"),
                (this.rotateZ.value = 180),
                (this.rotateZ.unit = "deg"),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.TransformDefaults),
        (e.TransformDefaults.prototype = Object.create(e.StyleData.prototype)),
        (e.TransformDefaults.prototype.constructor = e.TransformDefaults),
        (e.transformDefaults = new e.TransformDefaults()),
        (e.EventDetail = function () {
            (this.state = null), (this.futureState = null), (this.instance = null), (this.originalEvent = null);
        }),
        (e.Events = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.mixStart = null), (this.mixBusy = null), (this.mixEnd = null), (this.mixFail = null), (this.mixClick = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.Events),
        (e.Events.prototype = Object.create(e.Base.prototype)),
        (e.Events.prototype.constructor = e.Events),
        (e.Events.prototype.fire = function (t, a, i, o) {
            var r = this,
                s = null,
                l = new e.EventDetail();
            if ((r.callActions("beforeFire", arguments), "undefined" == typeof r[t])) throw new Error('Event type "' + t + '" not found.');
            (l.state = new e.State()),
                n.extend(l.state, i.state),
                i.futureState && ((l.futureState = new e.State()), n.extend(l.futureState, i.futureState)),
                (l.instance = i.instance),
                i.originalEvent && (l.originalEvent = i.originalEvent),
                (s = n.getCustomEvent(t, l, o)),
                r.callFilters("eventFire", s, arguments),
                a.dispatchEvent(s);
        }),
        (e.events = new e.Events()),
        (e.QueueItem = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.args = []), (this.instruction = null), (this.triggerElement = null), (this.deferred = null), (this.isToggling = !1), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.QueueItem),
        (e.QueueItem.prototype = Object.create(e.Base.prototype)),
        (e.QueueItem.prototype.constructor = e.QueueItem),
        (e.Mixer = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.config = new e.Config()),
                (this.id = ""),
                (this.isBusy = !1),
                (this.isToggling = !1),
                (this.incPadding = !0),
                (this.controls = []),
                (this.targets = []),
                (this.origOrder = []),
                (this.cache = {}),
                (this.toggleArray = []),
                (this.targetsMoved = 0),
                (this.targetsImmovable = 0),
                (this.targetsBound = 0),
                (this.targetsDone = 0),
                (this.staggerDuration = 0),
                (this.effectsIn = null),
                (this.effectsOut = null),
                (this.transformIn = []),
                (this.transformOut = []),
                (this.queue = []),
                (this.state = null),
                (this.lastOperation = null),
                (this.lastClicked = null),
                (this.userCallback = null),
                (this.userDeferred = null),
                (this.dom = new e.MixerDom()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Mixer),
        (e.Mixer.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Mixer.prototype, {
            constructor: e.Mixer,
            attach: function (a, i, o, r) {
                var s = this,
                    l = null,
                    c = -1;
                for (
                    s.callActions("beforeAttach", arguments),
                        s.id = o,
                        r && n.extend(s.config, r, !0, !0),
                        s.sanitizeConfig(),
                        s.cacheDom(a, i),
                        s.config.layout.containerClassName && n.addClass(s.dom.container, s.config.layout.containerClassName),
                        e.features.has.transitions || (s.config.animation.enable = !1),
                        "undefined" == typeof t.console && (s.config.debug.showWarnings = !1),
                        s.config.data.uidKey && (s.config.controls.enable = !1),
                        s.indexTargets(),
                        s.state = s.getInitialState(),
                        c = 0;
                    (l = s.lastOperation.toHide[c]);
                    c++
                )
                    l.hide();
                s.config.controls.enable && (s.initControls(), s.buildToggleArray(null, s.state), s.updateControls({ filter: s.state.activeFilter, sort: s.state.activeSort })), s.parseEffects(), s.callActions("afterAttach", arguments);
            },
            sanitizeConfig: function () {
                var t = this;
                t.callActions("beforeSanitizeConfig", arguments),
                    (t.config.controls.scope = t.config.controls.scope.toLowerCase().trim()),
                    (t.config.controls.toggleLogic = t.config.controls.toggleLogic.toLowerCase().trim()),
                    (t.config.controls.toggleDefault = t.config.controls.toggleDefault.toLowerCase().trim()),
                    (t.config.animation.effects = t.config.animation.effects.trim()),
                    t.callActions("afterSanitizeConfig", arguments);
            },
            getInitialState: function () {
                var t = this,
                    n = new e.State(),
                    a = new e.Operation();
                if ((t.callActions("beforeGetInitialState", arguments), (n.activeContainerClassName = t.config.layout.containerClassName), t.config.load.dataset)) {
                    if (!t.config.data.uidKey || "string" != typeof t.config.data.uidKey) throw new TypeError(e.messages.errorConfigDataUidKeyNotSet());
                    (a.startDataset = a.newDataset = n.activeDataset = t.config.load.dataset.slice()),
                        (a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName),
                        (a.show = t.targets.slice()),
                        (n = t.callFilters("stateGetInitialState", n, arguments));
                } else
                    (n.activeFilter = t.parseFilterArgs([t.config.load.filter]).command),
                        (n.activeSort = t.parseSortArgs([t.config.load.sort]).command),
                        (n.totalTargets = t.targets.length),
                        (n = t.callFilters("stateGetInitialState", n, arguments)),
                        n.activeSort.collection || n.activeSort.attribute || "random" === n.activeSort.order || "desc" === n.activeSort.order
                            ? ((a.newSort = n.activeSort), t.sortOperation(a), t.printSort(!1, a), (t.targets = a.newOrder))
                            : (a.startOrder = a.newOrder = t.targets),
                        (a.startFilter = a.newFilter = n.activeFilter),
                        (a.startSort = a.newSort = n.activeSort),
                        (a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName),
                        "all" === a.newFilter.selector ? (a.newFilter.selector = t.config.selectors.target) : "none" === a.newFilter.selector && (a.newFilter.selector = "");
                return (a = t.callFilters("operationGetInitialState", a, [n])), (t.lastOperation = a), a.newFilter && t.filterOperation(a), (n = t.buildState(a));
            },
            cacheDom: function (t, e) {
                var n = this;
                n.callActions("beforeCacheDom", arguments), (n.dom.document = e), (n.dom.body = n.dom.document.querySelector("body")), (n.dom.container = t), (n.dom.parent = t), n.callActions("afterCacheDom", arguments);
            },
            indexTargets: function () {
                var t = this,
                    a = null,
                    i = null,
                    o = null,
                    r = -1;
                if (
                    (t.callActions("beforeIndexTargets", arguments),
                    (t.dom.targets = t.config.layout.allowNestedTargets ? t.dom.container.querySelectorAll(t.config.selectors.target) : n.children(t.dom.container, t.config.selectors.target, t.dom.document)),
                    (t.dom.targets = n.arrayFromList(t.dom.targets)),
                    (t.targets = []),
                    (o = t.config.load.dataset) && o.length !== t.dom.targets.length)
                )
                    throw new Error(e.messages.errorDatasetPrerenderedMismatch());
                if (t.dom.targets.length) {
                    for (r = 0; (i = t.dom.targets[r]); r++) (a = new e.Target()), a.init(i, t, o ? o[r] : void 0), (a.isInDom = !0), t.targets.push(a);
                    t.dom.parent = t.dom.targets[0].parentElement === t.dom.container ? t.dom.container : t.dom.targets[0].parentElement;
                }
                (t.origOrder = t.targets), t.callActions("afterIndexTargets", arguments);
            },
            initControls: function () {
                var t = this,
                    n = "",
                    a = null,
                    i = null,
                    o = null,
                    r = null,
                    s = null,
                    l = -1,
                    c = -1;
                switch ((t.callActions("beforeInitControls", arguments), t.config.controls.scope)) {
                    case "local":
                        o = t.dom.container;
                        break;
                    case "global":
                        o = t.dom.document;
                        break;
                    default:
                        throw new Error(e.messages.errorConfigInvalidControlsScope());
                }
                for (l = 0; (n = e.controlDefinitions[l]); l++)
                    if (t.config.controls.live || n.live) {
                        if (n.parent) {
                            if (((r = t.dom[n.parent]), !r || r.length < 0)) continue;
                            "number" != typeof r.length && (r = [r]);
                        } else r = [o];
                        for (c = 0; (i = r[c]); c++) (s = t.getControl(i, n.type, n.selector)), t.controls.push(s);
                    } else for (a = o.querySelectorAll(t.config.selectors.control + n.selector), c = 0; (i = a[c]); c++) (s = t.getControl(i, n.type, "")), s && t.controls.push(s);
                t.callActions("afterInitControls", arguments);
            },
            getControl: function (t, a, i) {
                var o = this,
                    r = null,
                    s = -1;
                if ((o.callActions("beforeGetControl", arguments), !i))
                    for (s = 0; (r = e.controls[s]); s++) {
                        if (r.el === t && r.isBound(o)) return o.callFilters("controlGetControl", null, arguments);
                        if (r.el === t && r.type === a && r.selector === i) return r.addBinding(o), o.callFilters("controlGetControl", r, arguments);
                    }
                return (
                    (r = new e.Control()),
                    r.init(t, a, i),
                    (r.classNames.base = n.getClassname(o.config.classNames, a)),
                    (r.classNames.active = n.getClassname(o.config.classNames, a, o.config.classNames.modifierActive)),
                    (r.classNames.disabled = n.getClassname(o.config.classNames, a, o.config.classNames.modifierDisabled)),
                    r.addBinding(o),
                    o.callFilters("controlGetControl", r, arguments)
                );
            },
            getToggleSelector: function () {
                var t = this,
                    e = "or" === t.config.controls.toggleLogic ? ", " : "",
                    a = "";
                return (
                    t.callActions("beforeGetToggleSelector", arguments),
                    (t.toggleArray = n.clean(t.toggleArray)),
                    (a = t.toggleArray.join(e)),
                    "" === a && (a = t.config.controls.toggleDefault),
                    t.callFilters("selectorGetToggleSelector", a, arguments)
                );
            },
            buildToggleArray: function (t, e) {
                var a = this,
                    i = "";
                if ((a.callActions("beforeBuildToggleArray", arguments), t && t.filter)) i = t.filter.selector.replace(/\s/g, "");
                else {
                    if (!e) return;
                    i = e.activeFilter.selector.replace(/\s/g, "");
                }
                (i !== a.config.selectors.target && "all" !== i) || (i = ""),
                    "or" === a.config.controls.toggleLogic ? (a.toggleArray = i.split(",")) : (a.toggleArray = a.splitCompoundSelector(i)),
                    (a.toggleArray = n.clean(a.toggleArray)),
                    a.callActions("afterBuildToggleArray", arguments);
            },
            splitCompoundSelector: function (t) {
                var e = t.split(/([\.\[])/g),
                    n = [],
                    a = "",
                    i = -1;
                for ("" === e[0] && e.shift(), i = 0; i < e.length; i++) i % 2 === 0 && (a = ""), (a += e[i]), i % 2 !== 0 && n.push(a);
                return n;
            },
            updateControls: function (t) {
                var a = this,
                    i = null,
                    o = new e.CommandMultimix(),
                    r = -1;
                for (
                    a.callActions("beforeUpdateControls", arguments),
                        t.filter ? (o.filter = t.filter.selector) : (o.filter = a.state.activeFilter.selector),
                        t.sort ? (o.sort = a.buildSortString(t.sort)) : (o.sort = a.buildSortString(a.state.activeSort)),
                        o.filter === a.config.selectors.target && (o.filter = "all"),
                        "" === o.filter && (o.filter = "none"),
                        n.freeze(o),
                        r = 0;
                    (i = a.controls[r]);
                    r++
                )
                    i.update(o, a.toggleArray);
                a.callActions("afterUpdateControls", arguments);
            },
            buildSortString: function (t) {
                var e = this,
                    n = "";
                return (n += t.sortString), t.next && (n += " " + e.buildSortString(t.next)), n;
            },
            insertTargets: function (t, a) {
                var i = this,
                    o = null,
                    r = -1,
                    s = null,
                    l = null,
                    c = null,
                    u = -1;
                if (
                    (i.callActions("beforeInsertTargets", arguments),
                    "undefined" == typeof t.index && (t.index = 0),
                    (o = i.getNextSibling(t.index, t.sibling, t.position)),
                    (s = i.dom.document.createDocumentFragment()),
                    (r = o ? n.index(o, i.config.selectors.target) : i.targets.length),
                    t.collection)
                ) {
                    for (u = 0; (c = t.collection[u]); u++) {
                        if (i.dom.targets.indexOf(c) > -1) throw new Error(e.messages.errorInsertPreexistingElement());
                        (c.style.display = "none"),
                            s.appendChild(c),
                            s.appendChild(i.dom.document.createTextNode(" ")),
                            n.isElement(c, i.dom.document) && c.matches(i.config.selectors.target) && ((l = new e.Target()), l.init(c, i), (l.isInDom = !0), i.targets.splice(r, 0, l), r++);
                    }
                    i.dom.parent.insertBefore(s, o);
                }
                (a.startOrder = i.origOrder = i.targets), i.callActions("afterInsertTargets", arguments);
            },
            getNextSibling: function (t, e, n) {
                var a = this,
                    i = null;
                return (
                    (t = Math.max(t, 0)),
                    e && "before" === n
                        ? (i = e)
                        : e && "after" === n
                        ? (i = e.nextElementSibling || null)
                        : a.targets.length > 0 && "undefined" != typeof t
                        ? (i = t < a.targets.length || !a.targets.length ? a.targets[t].dom.el : a.targets[a.targets.length - 1].dom.el.nextElementSibling)
                        : 0 === a.targets.length &&
                          a.dom.parent.children.length > 0 &&
                          (a.config.layout.siblingAfter ? (i = a.config.layout.siblingAfter) : a.config.layout.siblingBefore ? (i = a.config.layout.siblingBefore.nextElementSibling) : a.dom.parent.children[0]),
                    a.callFilters("elementGetNextSibling", i, arguments)
                );
            },
            filterOperation: function (t) {
                var e = this,
                    n = !1,
                    a = -1,
                    i = "",
                    o = null,
                    r = -1;
                for (e.callActions("beforeFilterOperation", arguments), i = t.newFilter.action, r = 0; (o = t.newOrder[r]); r++)
                    (n = t.newFilter.collection ? t.newFilter.collection.indexOf(o.dom.el) > -1 : "" !== t.newFilter.selector && o.dom.el.matches(t.newFilter.selector)), e.evaluateHideShow(n, o, i, t);
                if (t.toRemove.length) for (r = 0; (o = t.show[r]); r++) t.toRemove.indexOf(o) > -1 && (t.show.splice(r, 1), (a = t.toShow.indexOf(o)) > -1 && t.toShow.splice(a, 1), t.toHide.push(o), t.hide.push(o), r--);
                (t.matching = t.show.slice()), 0 === t.show.length && "" !== t.newFilter.selector && 0 !== e.targets.length && (t.hasFailed = !0), e.callActions("afterFilterOperation", arguments);
            },
            evaluateHideShow: function (t, e, n, a) {
                var i = this,
                    o = !1,
                    r = Array.prototype.slice.call(arguments, 1);
                (o = i.callFilters("testResultEvaluateHideShow", t, r)),
                    i.callActions("beforeEvaluateHideShow", arguments),
                    (o === !0 && "show" === n) || (o === !1 && "hide" === n) ? (a.show.push(e), !e.isShown && a.toShow.push(e)) : (a.hide.push(e), e.isShown && a.toHide.push(e)),
                    i.callActions("afterEvaluateHideShow", arguments);
            },
            sortOperation: function (t) {
                var a = this,
                    i = [],
                    o = null,
                    r = null,
                    s = -1;
                if ((a.callActions("beforeSortOperation", arguments), (t.startOrder = a.targets), t.newSort.collection)) {
                    for (i = [], s = 0; (r = t.newSort.collection[s]); s++) {
                        if (a.dom.targets.indexOf(r) < 0) throw new Error(e.messages.errorSortNonExistentElement());
                        (o = new e.Target()), o.init(r, a), (o.isInDom = !0), i.push(o);
                    }
                    t.newOrder = i;
                } else
                    "random" === t.newSort.order
                        ? (t.newOrder = n.arrayShuffle(t.startOrder))
                        : "" === t.newSort.attribute
                        ? ((t.newOrder = a.origOrder.slice()), "desc" === t.newSort.order && t.newOrder.reverse())
                        : ((t.newOrder = t.startOrder.slice()),
                          t.newOrder.sort(function (e, n) {
                              return a.compare(e, n, t.newSort);
                          }));
                n.isEqualArray(t.newOrder, t.startOrder) && (t.willSort = !1), a.callActions("afterSortOperation", arguments);
            },
            compare: function (t, e, n) {
                var a = this,
                    i = n.order,
                    o = a.getAttributeValue(t, n.attribute),
                    r = a.getAttributeValue(e, n.attribute);
                return (
                    isNaN(1 * o) || isNaN(1 * r) ? ((o = o.toLowerCase()), (r = r.toLowerCase())) : ((o = 1 * o), (r = 1 * r)),
                    o < r ? ("asc" === i ? -1 : 1) : o > r ? ("asc" === i ? 1 : -1) : o === r && n.next ? a.compare(t, e, n.next) : 0
                );
            },
            getAttributeValue: function (t, n) {
                var a = this,
                    i = "";
                return (
                    (i = t.dom.el.getAttribute("data-" + n)),
                    null === i && a.config.debug.showWarnings && console.warn(e.messages.warningInconsistentSortingAttributes({ attribute: "data-" + n })),
                    a.callFilters("valueGetAttributeValue", i || 0, arguments)
                );
            },
            printSort: function (e, a) {
                var i = this,
                    o = e ? a.newOrder : a.startOrder,
                    r = e ? a.startOrder : a.newOrder,
                    s = o.length ? o[o.length - 1].dom.el.nextElementSibling : null,
                    l = t.document.createDocumentFragment(),
                    c = null,
                    u = null,
                    f = null,
                    h = -1;
                for (i.callActions("beforePrintSort", arguments), h = 0; (u = o[h]); h++) (f = u.dom.el), "absolute" !== f.style.position && (n.removeWhitespace(f.previousSibling), f.parentElement.removeChild(f));
                for (c = s ? s.previousSibling : i.dom.parent.lastChild, c && "#text" === c.nodeName && n.removeWhitespace(c), h = 0; (u = r[h]); h++)
                    (f = u.dom.el), n.isElement(l.lastChild) && l.appendChild(t.document.createTextNode(" ")), l.appendChild(f);
                i.dom.parent.firstChild && i.dom.parent.firstChild !== s && l.insertBefore(t.document.createTextNode(" "), l.childNodes[0]),
                    s ? (l.appendChild(t.document.createTextNode(" ")), i.dom.parent.insertBefore(l, s)) : i.dom.parent.appendChild(l),
                    i.callActions("afterPrintSort", arguments);
            },
            parseSortString: function (t, a) {
                var i = this,
                    o = t.split(" "),
                    r = a,
                    s = [],
                    l = -1;
                for (l = 0; l < o.length; l++) {
                    switch (((s = o[l].split(":")), (r.sortString = o[l]), (r.attribute = n.dashCase(s[0])), (r.order = s[1] || "asc"), r.attribute)) {
                        case "default":
                            r.attribute = "";
                            break;
                        case "random":
                            (r.attribute = ""), (r.order = "random");
                    }
                    if (!r.attribute || "random" === r.order) break;
                    l < o.length - 1 && ((r.next = new e.CommandSort()), n.freeze(r), (r = r.next));
                }
                return i.callFilters("commandsParseSort", a, arguments);
            },
            parseEffects: function () {
                var t = this,
                    n = "",
                    a = t.config.animation.effectsIn || t.config.animation.effects,
                    i = t.config.animation.effectsOut || t.config.animation.effects;
                t.callActions("beforeParseEffects", arguments),
                    (t.effectsIn = new e.StyleData()),
                    (t.effectsOut = new e.StyleData()),
                    (t.transformIn = []),
                    (t.transformOut = []),
                    (t.effectsIn.opacity = t.effectsOut.opacity = 1),
                    t.parseEffect("fade", a, t.effectsIn, t.transformIn),
                    t.parseEffect("fade", i, t.effectsOut, t.transformOut, !0);
                for (n in e.transformDefaults) e.transformDefaults[n] instanceof e.TransformData && (t.parseEffect(n, a, t.effectsIn, t.transformIn), t.parseEffect(n, i, t.effectsOut, t.transformOut, !0));
                t.parseEffect("stagger", a, t.effectsIn, t.transformIn), t.parseEffect("stagger", i, t.effectsOut, t.transformOut, !0), t.callActions("afterParseEffects", arguments);
            },
            parseEffect: function (t, n, a, i, o) {
                var r = this,
                    s = /\(([^)]+)\)/,
                    l = -1,
                    c = "",
                    u = [],
                    f = "",
                    h = ["%", "px", "em", "rem", "vh", "vw", "deg"],
                    d = "",
                    m = -1;
                if ((r.callActions("beforeParseEffect", arguments), "string" != typeof n)) throw new TypeError(e.messages.errorConfigInvalidAnimationEffects());
                if (n.indexOf(t) < 0) return void ("stagger" === t && (r.staggerDuration = 0));
                switch (((l = n.indexOf(t + "(")), l > -1 && ((c = n.substring(l)), (u = s.exec(c)), (f = u[1])), t)) {
                    case "fade":
                        a.opacity = f ? parseFloat(f) : 0;
                        break;
                    case "stagger":
                        r.staggerDuration = f ? parseFloat(f) : 100;
                        break;
                    default:
                        if ((o && r.config.animation.reverseOut && "scale" !== t ? (a[t].value = (f ? parseFloat(f) : e.transformDefaults[t].value) * -1) : (a[t].value = f ? parseFloat(f) : e.transformDefaults[t].value), f)) {
                            for (m = 0; (d = h[m]); m++)
                                if (f.indexOf(d) > -1) {
                                    a[t].unit = d;
                                    break;
                                }
                        } else a[t].unit = e.transformDefaults[t].unit;
                        i.push(t + "(" + a[t].value + a[t].unit + ")");
                }
                r.callActions("afterParseEffect", arguments);
            },
            buildState: function (t) {
                var n = this,
                    a = new e.State(),
                    i = null,
                    o = -1;
                for (n.callActions("beforeBuildState", arguments), o = 0; (i = n.targets[o]); o++) (!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.targets.push(i.dom.el);
                for (o = 0; (i = t.matching[o]); o++) a.matching.push(i.dom.el);
                for (o = 0; (i = t.show[o]); o++) a.show.push(i.dom.el);
                for (o = 0; (i = t.hide[o]); o++) (!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.hide.push(i.dom.el);
                return (
                    (a.id = n.id),
                    (a.container = n.dom.container),
                    (a.activeFilter = t.newFilter),
                    (a.activeSort = t.newSort),
                    (a.activeDataset = t.newDataset),
                    (a.activeContainerClassName = t.newContainerClassName),
                    (a.hasFailed = t.hasFailed),
                    (a.totalTargets = n.targets.length),
                    (a.totalShow = t.show.length),
                    (a.totalHide = t.hide.length),
                    (a.totalMatching = t.matching.length),
                    (a.triggerElement = t.triggerElement),
                    n.callFilters("stateBuildState", a, arguments)
                );
            },
            goMix: function (a, i) {
                var o = this,
                    r = null;
                return (
                    o.callActions("beforeGoMix", arguments),
                    (o.config.animation.duration && o.config.animation.effects && n.isVisible(o.dom.container)) || (a = !1),
                    i.toShow.length || i.toHide.length || i.willSort || i.willChangeLayout || (a = !1),
                    i.startState.show.length || i.show.length || (a = !1),
                    e.events.fire("mixStart", o.dom.container, { state: i.startState, futureState: i.newState, instance: o }, o.dom.document),
                    "function" == typeof o.config.callbacks.onMixStart && o.config.callbacks.onMixStart.call(o.dom.container, i.startState, i.newState, o),
                    n.removeClass(o.dom.container, n.getClassname(o.config.classNames, "container", o.config.classNames.modifierFailed)),
                    (r = o.userDeferred ? o.userDeferred : (o.userDeferred = n.defer(e.libraries))),
                    (o.isBusy = !0),
                    a && e.features.has.transitions
                        ? (t.pageYOffset !== i.docState.scrollTop && t.scrollTo(i.docState.scrollLeft, i.docState.scrollTop),
                          o.config.animation.applyPerspective &&
                              ((o.dom.parent.style[e.features.perspectiveProp] = o.config.animation.perspectiveDistance), (o.dom.parent.style[e.features.perspectiveOriginProp] = o.config.animation.perspectiveOrigin)),
                          o.config.animation.animateResizeContainer && i.startHeight !== i.newHeight && i.viewportDeltaY !== i.startHeight - i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"),
                          o.config.animation.animateResizeContainer && i.startWidth !== i.newWidth && i.viewportDeltaX !== i.startWidth - i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"),
                          i.startHeight === i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"),
                          i.startWidth === i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"),
                          i.startHeight === i.newHeight && i.startWidth === i.newWidth && (o.dom.parent.style.overflow = "hidden"),
                          requestAnimationFrame(function () {
                              o.moveTargets(i);
                          }),
                          o.callFilters("promiseGoMix", r.promise, arguments))
                        : (o.config.debug.fauxAsync
                              ? setTimeout(function () {
                                    o.cleanUp(i);
                                }, o.config.animation.duration)
                              : o.cleanUp(i),
                          o.callFilters("promiseGoMix", r.promise, arguments))
                );
            },
            getStartMixData: function (n) {
                var a = this,
                    i = t.getComputedStyle(a.dom.parent),
                    o = a.dom.parent.getBoundingClientRect(),
                    r = null,
                    s = {},
                    l = -1,
                    c = i[e.features.boxSizingProp];
                for (a.incPadding = "border-box" === c, a.callActions("beforeGetStartMixData", arguments), l = 0; (r = n.show[l]); l++) (s = r.getPosData()), (n.showPosData[l] = { startPosData: s });
                for (l = 0; (r = n.toHide[l]); l++) (s = r.getPosData()), (n.toHidePosData[l] = { startPosData: s });
                (n.startX = o.left),
                    (n.startY = o.top),
                    (n.startHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom)),
                    (n.startWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight)),
                    a.callActions("afterGetStartMixData", arguments);
            },
            setInter: function (t) {
                var e = this,
                    a = null,
                    i = -1;
                for (
                    e.callActions("beforeSetInter", arguments),
                        e.config.animation.clampHeight && ((e.dom.parent.style.height = t.startHeight + "px"), (e.dom.parent.style.overflow = "hidden")),
                        e.config.animation.clampWidth && ((e.dom.parent.style.width = t.startWidth + "px"), (e.dom.parent.style.overflow = "hidden")),
                        i = 0;
                    (a = t.toShow[i]);
                    i++
                )
                    a.show();
                t.willChangeLayout && (n.removeClass(e.dom.container, t.startContainerClassName), n.addClass(e.dom.container, t.newContainerClassName)), e.callActions("afterSetInter", arguments);
            },
            getInterMixData: function (t) {
                var e = this,
                    n = null,
                    a = -1;
                for (e.callActions("beforeGetInterMixData", arguments), a = 0; (n = t.show[a]); a++) t.showPosData[a].interPosData = n.getPosData();
                for (a = 0; (n = t.toHide[a]); a++) t.toHidePosData[a].interPosData = n.getPosData();
                e.callActions("afterGetInterMixData", arguments);
            },
            setFinal: function (t) {
                var e = this,
                    n = null,
                    a = -1;
                for (e.callActions("beforeSetFinal", arguments), t.willSort && e.printSort(!1, t), a = 0; (n = t.toHide[a]); a++) n.hide();
                e.callActions("afterSetFinal", arguments);
            },
            getFinalMixData: function (e) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = -1;
                for (a.callActions("beforeGetFinalMixData", arguments), s = 0; (r = e.show[s]); s++) e.showPosData[s].finalPosData = r.getPosData();
                for (s = 0; (r = e.toHide[s]); s++) e.toHidePosData[s].finalPosData = r.getPosData();
                for (
                    (a.config.animation.clampHeight || a.config.animation.clampWidth) && (a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = ""),
                        a.incPadding || (i = t.getComputedStyle(a.dom.parent)),
                        o = a.dom.parent.getBoundingClientRect(),
                        e.newX = o.left,
                        e.newY = o.top,
                        e.newHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom),
                        e.newWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight),
                        e.viewportDeltaX = e.docState.viewportWidth - this.dom.document.documentElement.clientWidth,
                        e.viewportDeltaY = e.docState.viewportHeight - this.dom.document.documentElement.clientHeight,
                        e.willSort && a.printSort(!0, e),
                        s = 0;
                    (r = e.toShow[s]);
                    s++
                )
                    r.hide();
                for (s = 0; (r = e.toHide[s]); s++) r.show();
                e.willChangeLayout && (n.removeClass(a.dom.container, e.newContainerClassName), n.addClass(a.dom.container, a.config.layout.containerClassName)), a.callActions("afterGetFinalMixData", arguments);
            },
            getTweenData: function (t) {
                var n = this,
                    a = null,
                    i = null,
                    o = Object.getOwnPropertyNames(n.effectsIn),
                    r = "",
                    s = null,
                    l = -1,
                    c = -1,
                    u = -1,
                    f = -1;
                for (n.callActions("beforeGetTweenData", arguments), u = 0; (a = t.show[u]); u++)
                    for (
                        i = t.showPosData[u],
                            i.posIn = new e.StyleData(),
                            i.posOut = new e.StyleData(),
                            i.tweenData = new e.StyleData(),
                            a.isShown ? ((i.posIn.x = i.startPosData.x - i.interPosData.x), (i.posIn.y = i.startPosData.y - i.interPosData.y)) : (i.posIn.x = i.posIn.y = 0),
                            i.posOut.x = i.finalPosData.x - i.interPosData.x,
                            i.posOut.y = i.finalPosData.y - i.interPosData.y,
                            i.posIn.opacity = a.isShown ? 1 : n.effectsIn.opacity,
                            i.posOut.opacity = 1,
                            i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity,
                            a.isShown || n.config.animation.nudge || ((i.posIn.x = i.posOut.x), (i.posIn.y = i.posOut.y)),
                            i.tweenData.x = i.posOut.x - i.posIn.x,
                            i.tweenData.y = i.posOut.y - i.posIn.y,
                            n.config.animation.animateResizeTargets &&
                                ((i.posIn.width = i.startPosData.width),
                                (i.posIn.height = i.startPosData.height),
                                (l = (i.startPosData.width || i.finalPosData.width) - i.interPosData.width),
                                (i.posIn.marginRight = i.startPosData.marginRight - l),
                                (c = (i.startPosData.height || i.finalPosData.height) - i.interPosData.height),
                                (i.posIn.marginBottom = i.startPosData.marginBottom - c),
                                (i.posOut.width = i.finalPosData.width),
                                (i.posOut.height = i.finalPosData.height),
                                (l = (i.finalPosData.width || i.startPosData.width) - i.interPosData.width),
                                (i.posOut.marginRight = i.finalPosData.marginRight - l),
                                (c = (i.finalPosData.height || i.startPosData.height) - i.interPosData.height),
                                (i.posOut.marginBottom = i.finalPosData.marginBottom - c),
                                (i.tweenData.width = i.posOut.width - i.posIn.width),
                                (i.tweenData.height = i.posOut.height - i.posIn.height),
                                (i.tweenData.marginRight = i.posOut.marginRight - i.posIn.marginRight),
                                (i.tweenData.marginBottom = i.posOut.marginBottom - i.posIn.marginBottom)),
                            f = 0;
                        (r = o[f]);
                        f++
                    )
                        (s = n.effectsIn[r]),
                            s instanceof e.TransformData &&
                                s.value &&
                                ((i.posIn[r].value = s.value), (i.posOut[r].value = 0), (i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value), (i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit));
                for (u = 0; (a = t.toHide[u]); u++)
                    for (
                        i = t.toHidePosData[u],
                            i.posIn = new e.StyleData(),
                            i.posOut = new e.StyleData(),
                            i.tweenData = new e.StyleData(),
                            i.posIn.x = a.isShown ? i.startPosData.x - i.interPosData.x : 0,
                            i.posIn.y = a.isShown ? i.startPosData.y - i.interPosData.y : 0,
                            i.posOut.x = n.config.animation.nudge ? 0 : i.posIn.x,
                            i.posOut.y = n.config.animation.nudge ? 0 : i.posIn.y,
                            i.tweenData.x = i.posOut.x - i.posIn.x,
                            i.tweenData.y = i.posOut.y - i.posIn.y,
                            n.config.animation.animateResizeTargets &&
                                ((i.posIn.width = i.startPosData.width),
                                (i.posIn.height = i.startPosData.height),
                                (l = i.startPosData.width - i.interPosData.width),
                                (i.posIn.marginRight = i.startPosData.marginRight - l),
                                (c = i.startPosData.height - i.interPosData.height),
                                (i.posIn.marginBottom = i.startPosData.marginBottom - c)),
                            i.posIn.opacity = 1,
                            i.posOut.opacity = n.effectsOut.opacity,
                            i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity,
                            f = 0;
                        (r = o[f]);
                        f++
                    )
                        (s = n.effectsOut[r]),
                            s instanceof e.TransformData &&
                                s.value &&
                                ((i.posIn[r].value = 0), (i.posOut[r].value = s.value), (i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value), (i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit));
                n.callActions("afterGetTweenData", arguments);
            },
            moveTargets: function (t) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = "",
                    l = !1,
                    c = -1,
                    u = -1,
                    f = a.checkProgress.bind(a);
                for (a.callActions("beforeMoveTargets", arguments), u = 0; (i = t.show[u]); u++)
                    (o = new e.IMoveData()),
                        (r = t.showPosData[u]),
                        (s = i.isShown ? "none" : "show"),
                        (l = a.willTransition(s, t.hasEffect, r.posIn, r.posOut)),
                        l && c++,
                        i.show(),
                        (o.posIn = r.posIn),
                        (o.posOut = r.posOut),
                        (o.statusChange = s),
                        (o.staggerIndex = c),
                        (o.operation = t),
                        (o.callback = l ? f : null),
                        i.move(o);
                for (u = 0; (i = t.toHide[u]); u++)
                    (r = t.toHidePosData[u]),
                        (o = new e.IMoveData()),
                        (s = "hide"),
                        (l = a.willTransition(s, r.posIn, r.posOut)),
                        (o.posIn = r.posIn),
                        (o.posOut = r.posOut),
                        (o.statusChange = s),
                        (o.staggerIndex = u),
                        (o.operation = t),
                        (o.callback = l ? f : null),
                        i.move(o);
                a.config.animation.animateResizeContainer &&
                    ((a.dom.parent.style[e.features.transitionProp] = "height " + a.config.animation.duration + "ms ease, width " + a.config.animation.duration + "ms ease "),
                    requestAnimationFrame(function () {
                        t.startHeight !== t.newHeight && t.viewportDeltaY !== t.startHeight - t.newHeight && (a.dom.parent.style.height = t.newHeight + "px"),
                            t.startWidth !== t.newWidth && t.viewportDeltaX !== t.startWidth - t.newWidth && (a.dom.parent.style.width = t.newWidth + "px");
                    })),
                    t.willChangeLayout && (n.removeClass(a.dom.container, a.config.layout.ContainerClassName), n.addClass(a.dom.container, t.newContainerClassName)),
                    a.callActions("afterMoveTargets", arguments);
            },
            hasEffect: function () {
                var t = this,
                    e = ["scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"],
                    n = "",
                    a = null,
                    i = !1,
                    o = -1,
                    r = -1;
                if (1 !== t.effectsIn.opacity) return t.callFilters("resultHasEffect", !0, arguments);
                for (r = 0; (n = e[r]); r++)
                    if (((a = t.effectsIn[n]), (o = "undefined" !== a.value ? a.value : a), 0 !== o)) {
                        i = !0;
                        break;
                    }
                return t.callFilters("resultHasEffect", i, arguments);
            },
            willTransition: function (t, e, a, i) {
                var o = this,
                    r = !1;
                return (
                    (r =
                        !!n.isVisible(o.dom.container) &&
                        (!!(("none" !== t && e) || a.x !== i.x || a.y !== i.y) ||
                            (!!o.config.animation.animateResizeTargets && (a.width !== i.width || a.height !== i.height || a.marginRight !== i.marginRight || a.marginTop !== i.marginTop)))),
                    o.callFilters("resultWillTransition", r, arguments)
                );
            },
            checkProgress: function (t) {
                var e = this;
                e.targetsDone++, e.targetsBound === e.targetsDone && e.cleanUp(t);
            },
            cleanUp: function (t) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = null,
                    l = -1;
                for (a.callActions("beforeCleanUp", arguments), a.targetsMoved = a.targetsImmovable = a.targetsBound = a.targetsDone = 0, l = 0; (i = t.show[l]); l++) i.cleanUp(), i.show();
                for (l = 0; (i = t.toHide[l]); l++) i.cleanUp(), i.hide();
                if (
                    (t.willSort && a.printSort(!1, t),
                    (a.dom.parent.style[e.features.transitionProp] = a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = a.dom.parent.style[e.features.perspectiveProp] = a.dom.parent.style[
                        e.features.perspectiveOriginProp
                    ] = ""),
                    t.willChangeLayout && (n.removeClass(a.dom.container, t.startContainerClassName), n.addClass(a.dom.container, t.newContainerClassName)),
                    t.toRemove.length)
                ) {
                    for (l = 0; (i = a.targets[l]); l++)
                        t.toRemove.indexOf(i) > -1 &&
                            ((o = i.dom.el.previousSibling) && "#text" === o.nodeName && (r = i.dom.el.nextSibling) && "#text" === r.nodeName && n.removeWhitespace(o),
                            t.willSort || a.dom.parent.removeChild(i.dom.el),
                            a.targets.splice(l, 1),
                            (i.isInDom = !1),
                            l--);
                    a.origOrder = a.targets;
                }
                t.willSort && (a.targets = t.newOrder),
                    (a.state = t.newState),
                    (a.lastOperation = t),
                    (a.dom.targets = a.state.targets),
                    e.events.fire("mixEnd", a.dom.container, { state: a.state, instance: a }, a.dom.document),
                    "function" == typeof a.config.callbacks.onMixEnd && a.config.callbacks.onMixEnd.call(a.dom.container, a.state, a),
                    t.hasFailed &&
                        (e.events.fire("mixFail", a.dom.container, { state: a.state, instance: a }, a.dom.document),
                        "function" == typeof a.config.callbacks.onMixFail && a.config.callbacks.onMixFail.call(a.dom.container, a.state, a),
                        n.addClass(a.dom.container, n.getClassname(a.config.classNames, "container", a.config.classNames.modifierFailed))),
                    "function" == typeof a.userCallback && a.userCallback.call(a.dom.container, a.state, a),
                    "function" == typeof a.userDeferred.resolve && a.userDeferred.resolve(a.state),
                    (a.userCallback = null),
                    (a.userDeferred = null),
                    (a.lastClicked = null),
                    (a.isToggling = !1),
                    (a.isBusy = !1),
                    a.queue.length &&
                        (a.callActions("beforeReadQueueCleanUp", arguments),
                        (s = a.queue.shift()),
                        (a.userDeferred = s.deferred),
                        (a.isToggling = s.isToggling),
                        (a.lastClicked = s.triggerElement),
                        s.instruction.command instanceof e.CommandMultimix ? a.multimix.apply(a, s.args) : a.dataset.apply(a, s.args)),
                    a.callActions("afterCleanUp", arguments);
            },
            parseMultimixArgs: function (t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (i.animate = a.config.animation.enable, i.command = new e.CommandMultimix(), r = 0; r < t.length; r++)
                    (o = t[r]), null !== o && ("object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? (i.animate = o) : "function" == typeof o && (i.callback = o));
                return (
                    !i.command.insert || i.command.insert instanceof e.CommandInsert || (i.command.insert = a.parseInsertArgs([i.command.insert]).command),
                    !i.command.remove || i.command.remove instanceof e.CommandRemove || (i.command.remove = a.parseRemoveArgs([i.command.remove]).command),
                    !i.command.filter || i.command.filter instanceof e.CommandFilter || (i.command.filter = a.parseFilterArgs([i.command.filter]).command),
                    !i.command.sort || i.command.sort instanceof e.CommandSort || (i.command.sort = a.parseSortArgs([i.command.sort]).command),
                    !i.command.changeLayout || i.command.changeLayout instanceof e.CommandChangeLayout || (i.command.changeLayout = a.parseChangeLayoutArgs([i.command.changeLayout]).command),
                    (i = a.callFilters("instructionParseMultimixArgs", i, arguments)),
                    n.freeze(i),
                    i
                );
            },
            parseFilterArgs: function (t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (i.animate = a.config.animation.enable, i.command = new e.CommandFilter(), r = 0; r < t.length; r++)
                    (o = t[r]),
                        "string" == typeof o
                            ? (i.command.selector = o)
                            : null === o
                            ? (i.command.collection = [])
                            : "object" == typeof o && n.isElement(o, a.dom.document)
                            ? (i.command.collection = [o])
                            : "object" == typeof o && "undefined" != typeof o.length
                            ? (i.command.collection = n.arrayFromList(o))
                            : "object" == typeof o
                            ? n.extend(i.command, o)
                            : "boolean" == typeof o
                            ? (i.animate = o)
                            : "function" == typeof o && (i.callback = o);
                if (i.command.selector && i.command.collection) throw new Error(e.messages.errorFilterInvalidArguments());
                return (i = a.callFilters("instructionParseFilterArgs", i, arguments)), n.freeze(i), i;
            },
            parseSortArgs: function (t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = "",
                    s = -1;
                for (i.animate = a.config.animation.enable, i.command = new e.CommandSort(), s = 0; s < t.length; s++)
                    if (((o = t[s]), null !== o))
                        switch (typeof o) {
                            case "string":
                                r = o;
                                break;
                            case "object":
                                o.length && (i.command.collection = n.arrayFromList(o));
                                break;
                            case "boolean":
                                i.animate = o;
                                break;
                            case "function":
                                i.callback = o;
                        }
                return r && (i.command = a.parseSortString(r, i.command)), (i = a.callFilters("instructionParseSortArgs", i, arguments)), n.freeze(i), i;
            },
            parseInsertArgs: function (t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (i.animate = a.config.animation.enable, i.command = new e.CommandInsert(), r = 0; r < t.length; r++)
                    (o = t[r]),
                        null !== o &&
                            ("number" == typeof o
                                ? (i.command.index = o)
                                : "string" == typeof o && ["before", "after"].indexOf(o) > -1
                                ? (i.command.position = o)
                                : "string" == typeof o
                                ? (i.command.collection = n.arrayFromList(n.createElement(o).childNodes))
                                : "object" == typeof o && n.isElement(o, a.dom.document)
                                ? i.command.collection.length
                                    ? (i.command.sibling = o)
                                    : (i.command.collection = [o])
                                : "object" == typeof o && o.length
                                ? i.command.collection.length
                                    ? (i.command.sibling = o[0])
                                    : (i.command.collection = o)
                                : "object" == typeof o && o.childNodes && o.childNodes.length
                                ? i.command.collection.length
                                    ? (i.command.sibling = o.childNodes[0])
                                    : (i.command.collection = n.arrayFromList(o.childNodes))
                                : "object" == typeof o
                                ? n.extend(i.command, o)
                                : "boolean" == typeof o
                                ? (i.animate = o)
                                : "function" == typeof o && (i.callback = o));
                if (i.command.index && i.command.sibling) throw new Error(e.messages.errorInsertInvalidArguments());
                return !i.command.collection.length && a.config.debug.showWarnings && console.warn(e.messages.warningInsertNoElements()), (i = a.callFilters("instructionParseInsertArgs", i, arguments)), n.freeze(i), i;
            },
            parseRemoveArgs: function (t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = null,
                    s = -1;
                for (i.animate = a.config.animation.enable, i.command = new e.CommandRemove(), s = 0; s < t.length; s++)
                    if (((r = t[s]), null !== r))
                        switch (typeof r) {
                            case "number":
                                a.targets[r] && (i.command.targets[0] = a.targets[r]);
                                break;
                            case "string":
                                i.command.collection = n.arrayFromList(a.dom.parent.querySelectorAll(r));
                                break;
                            case "object":
                                r && r.length ? (i.command.collection = r) : n.isElement(r, a.dom.document) ? (i.command.collection = [r]) : n.extend(i.command, r);
                                break;
                            case "boolean":
                                i.animate = r;
                                break;
                            case "function":
                                i.callback = r;
                        }
                if (i.command.collection.length) for (s = 0; (o = a.targets[s]); s++) i.command.collection.indexOf(o.dom.el) > -1 && i.command.targets.push(o);
                return !i.command.targets.length && a.config.debug.showWarnings && console.warn(e.messages.warningRemoveNoElements()), n.freeze(i), i;
            },
            parseDatasetArgs: function (t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (i.animate = a.config.animation.enable, i.command = new e.CommandDataset(), r = 0; r < t.length; r++)
                    if (((o = t[r]), null !== o))
                        switch (typeof o) {
                            case "object":
                                Array.isArray(o) || "number" == typeof o.length ? (i.command.dataset = o) : n.extend(i.command, o);
                                break;
                            case "boolean":
                                i.animate = o;
                                break;
                            case "function":
                                i.callback = o;
                        }
                return n.freeze(i), i;
            },
            parseChangeLayoutArgs: function (t) {
                var a = this,
                    i = new e.UserInstruction(),
                    o = null,
                    r = -1;
                for (i.animate = a.config.animation.enable, i.command = new e.CommandChangeLayout(), r = 0; r < t.length; r++)
                    if (((o = t[r]), null !== o))
                        switch (typeof o) {
                            case "string":
                                i.command.containerClassName = o;
                                break;
                            case "object":
                                n.extend(i.command, o);
                                break;
                            case "boolean":
                                i.animate = o;
                                break;
                            case "function":
                                i.callback = o;
                        }
                return n.freeze(i), i;
            },
            queueMix: function (t) {
                var a = this,
                    i = null,
                    o = "";
                return (
                    a.callActions("beforeQueueMix", arguments),
                    (i = n.defer(e.libraries)),
                    a.config.animation.queue && a.queue.length < a.config.animation.queueLimit
                        ? ((t.deferred = i),
                          a.queue.push(t),
                          a.config.controls.enable && (a.isToggling ? (a.buildToggleArray(t.instruction.command), (o = a.getToggleSelector()), a.updateControls({ filter: { selector: o } })) : a.updateControls(t.instruction.command)))
                        : (a.config.debug.showWarnings && console.warn(e.messages.warningMultimixInstanceQueueFull()),
                          i.resolve(a.state),
                          e.events.fire("mixBusy", a.dom.container, { state: a.state, instance: a }, a.dom.document),
                          "function" == typeof a.config.callbacks.onMixBusy && a.config.callbacks.onMixBusy.call(a.dom.container, a.state, a)),
                    a.callFilters("promiseQueueMix", i.promise, arguments)
                );
            },
            getDataOperation: function (t) {
                var a = this,
                    i = new e.Operation(),
                    o = [];
                if (((i = a.callFilters("operationUnmappedGetDataOperation", i, arguments)), a.dom.targets.length && !(o = a.state.activeDataset || []).length)) throw new Error(e.messages.errorDatasetNotSet());
                return (
                    (i.id = n.randomHex()),
                    (i.startState = a.state),
                    (i.startDataset = o),
                    (i.newDataset = t.slice()),
                    a.diffDatasets(i),
                    (i.startOrder = a.targets),
                    (i.newOrder = i.show),
                    a.config.animation.enable &&
                        (a.getStartMixData(i), a.setInter(i), (i.docState = n.getDocumentState(a.dom.document)), a.getInterMixData(i), a.setFinal(i), a.getFinalMixData(i), a.parseEffects(), (i.hasEffect = a.hasEffect()), a.getTweenData(i)),
                    (a.targets = i.show.slice()),
                    (i.newState = a.buildState(i)),
                    Array.prototype.push.apply(a.targets, i.toRemove),
                    (i = a.callFilters("operationMappedGetDataOperation", i, arguments))
                );
            },
            diffDatasets: function (t) {
                var a = this,
                    i = [],
                    o = [],
                    r = [],
                    s = null,
                    l = null,
                    c = null,
                    u = null,
                    f = null,
                    h = {},
                    d = "",
                    m = -1;
                for (a.callActions("beforeDiffDatasets", arguments), m = 0; (s = t.newDataset[m]); m++) {
                    if ("undefined" == typeof (d = s[a.config.data.uidKey]) || d.toString().length < 1) throw new TypeError(e.messages.errorDatasetInvalidUidKey({ uidKey: a.config.data.uidKey }));
                    if (h[d]) throw new Error(e.messages.errorDatasetDuplicateUid({ uid: d }));
                    (h[d] = !0),
                        (l = a.cache[d]) instanceof e.Target
                            ? (a.config.data.dirtyCheck &&
                                  !n.deepEquals(s, l.data) &&
                                  ((c = l.render(s)),
                                  (l.data = s),
                                  c !== l.dom.el && (l.isInDom && (l.unbindEvents(), a.dom.parent.replaceChild(c, l.dom.el)), l.isShown || (c.style.display = "none"), (l.dom.el = c), l.isInDom && l.bindEvents())),
                              (c = l.dom.el))
                            : ((l = new e.Target()), l.init(null, a, s), l.hide()),
                        l.isInDom
                            ? ((f = l.dom.el.nextElementSibling), o.push(d), u && (u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")), a.insertDatasetFrag(u, l.dom.el, r), (u = null)))
                            : (u || (u = a.dom.document.createDocumentFragment()),
                              u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")),
                              u.appendChild(l.dom.el),
                              (l.isInDom = !0),
                              l.unbindEvents(),
                              l.bindEvents(),
                              l.hide(),
                              t.toShow.push(l),
                              r.push(l)),
                        t.show.push(l);
                }
                for (u && ((f = f || a.config.layout.siblingAfter), f && u.appendChild(a.dom.document.createTextNode(" ")), a.insertDatasetFrag(u, f, r)), m = 0; (s = t.startDataset[m]); m++)
                    (d = s[a.config.data.uidKey]), (l = a.cache[d]), t.show.indexOf(l) < 0 ? (t.hide.push(l), t.toHide.push(l), t.toRemove.push(l)) : i.push(d);
                n.isEqualArray(i, o) || (t.willSort = !0), a.callActions("afterDiffDatasets", arguments);
            },
            insertDatasetFrag: function (t, e, a) {
                var i = this,
                    o = e ? n.arrayFromList(i.dom.parent.children).indexOf(e) : i.targets.length;
                for (i.dom.parent.insertBefore(t, e); a.length; ) i.targets.splice(o, 0, a.shift()), o++;
            },
            willSort: function (t, e) {
                var n = this,
                    a = !1;
                return (
                    (a =
                        !!(n.config.behavior.liveSort || "random" === t.order || t.attribute !== e.attribute || t.order !== e.order || t.collection !== e.collection || (null === t.next && e.next) || (t.next && null === e.next)) ||
                        (!(!t.next || !e.next) && n.willSort(t.next, e.next))),
                    n.callFilters("resultWillSort", a, arguments)
                );
            },
            show: function () {
                var t = this;
                return t.filter("all");
            },
            hide: function () {
                var t = this;
                return t.filter("none");
            },
            isMixing: function () {
                var t = this;
                return t.isBusy;
            },
            filter: function () {
                var t = this,
                    e = t.parseFilterArgs(arguments);
                return t.multimix({ filter: e.command }, e.animate, e.callback);
            },
            toggleOn: function () {
                var t = this,
                    e = t.parseFilterArgs(arguments),
                    n = e.command.selector,
                    a = "";
                return (t.isToggling = !0), t.toggleArray.indexOf(n) < 0 && t.toggleArray.push(n), (a = t.getToggleSelector()), t.multimix({ filter: a }, e.animate, e.callback);
            },
            toggleOff: function () {
                var t = this,
                    e = t.parseFilterArgs(arguments),
                    n = e.command.selector,
                    a = t.toggleArray.indexOf(n),
                    i = "";
                return (t.isToggling = !0), a > -1 && t.toggleArray.splice(a, 1), (i = t.getToggleSelector()), t.multimix({ filter: i }, e.animate, e.callback);
            },
            sort: function () {
                var t = this,
                    e = t.parseSortArgs(arguments);
                return t.multimix({ sort: e.command }, e.animate, e.callback);
            },
            changeLayout: function () {
                var t = this,
                    e = t.parseChangeLayoutArgs(arguments);
                return t.multimix({ changeLayout: e.command }, e.animate, e.callback);
            },
            dataset: function () {
                var t = this,
                    n = t.parseDatasetArgs(arguments),
                    a = null,
                    i = null,
                    o = !1;
                return (
                    t.callActions("beforeDataset", arguments),
                    t.isBusy
                        ? ((i = new e.QueueItem()), (i.args = arguments), (i.instruction = n), t.queueMix(i))
                        : (n.callback && (t.userCallback = n.callback), (o = n.animate ^ t.config.animation.enable ? n.animate : t.config.animation.enable), (a = t.getDataOperation(n.command.dataset)), t.goMix(o, a))
                );
            },
            multimix: function () {
                var t = this,
                    n = null,
                    a = !1,
                    i = null,
                    o = t.parseMultimixArgs(arguments);
                return (
                    t.callActions("beforeMultimix", arguments),
                    t.isBusy
                        ? ((i = new e.QueueItem()), (i.args = arguments), (i.instruction = o), (i.triggerElement = t.lastClicked), (i.isToggling = t.isToggling), t.queueMix(i))
                        : ((n = t.getOperation(o.command)),
                          t.config.controls.enable && (o.command.filter && !t.isToggling && ((t.toggleArray.length = 0), t.buildToggleArray(n.command)), t.queue.length < 1 && t.updateControls(n.command)),
                          o.callback && (t.userCallback = o.callback),
                          (a = o.animate ^ t.config.animation.enable ? o.animate : t.config.animation.enable),
                          t.callFilters("operationMultimix", n, arguments),
                          t.goMix(a, n))
                );
            },
            getOperation: function (t) {
                var a = this,
                    i = t.sort,
                    o = t.filter,
                    r = t.changeLayout,
                    s = t.remove,
                    l = t.insert,
                    c = new e.Operation();
                return (
                    (c = a.callFilters("operationUnmappedGetOperation", c, arguments)),
                    (c.id = n.randomHex()),
                    (c.command = t),
                    (c.startState = a.state),
                    (c.triggerElement = a.lastClicked),
                    a.isBusy
                        ? (a.config.debug.showWarnings && console.warn(e.messages.warningGetOperationInstanceBusy()), null)
                        : (l && a.insertTargets(l, c),
                          s && (c.toRemove = s.targets),
                          (c.startSort = c.newSort = c.startState.activeSort),
                          (c.startOrder = c.newOrder = a.targets),
                          i && ((c.startSort = c.startState.activeSort), (c.newSort = i), (c.willSort = a.willSort(i, c.startState.activeSort)), c.willSort && a.sortOperation(c)),
                          (c.startFilter = c.startState.activeFilter),
                          o ? (c.newFilter = o) : (c.newFilter = n.extend(new e.CommandFilter(), c.startFilter)),
                          "all" === c.newFilter.selector ? (c.newFilter.selector = a.config.selectors.target) : "none" === c.newFilter.selector && (c.newFilter.selector = ""),
                          a.filterOperation(c),
                          (c.startContainerClassName = c.startState.activeContainerClassName),
                          r ? ((c.newContainerClassName = r.containerClassName), c.newContainerClassName !== c.startContainerClassName && (c.willChangeLayout = !0)) : (c.newContainerClassName = c.startContainerClassName),
                          a.config.animation.enable &&
                              (a.getStartMixData(c),
                              a.setInter(c),
                              (c.docState = n.getDocumentState(a.dom.document)),
                              a.getInterMixData(c),
                              a.setFinal(c),
                              a.getFinalMixData(c),
                              a.parseEffects(),
                              (c.hasEffect = a.hasEffect()),
                              a.getTweenData(c)),
                          c.willSort && (a.targets = c.newOrder),
                          (c.newState = a.buildState(c)),
                          a.callFilters("operationMappedGetOperation", c, arguments))
                );
            },
            tween: function (t, e) {
                var n = null,
                    a = null,
                    i = -1,
                    o = -1;
                for (e = Math.min(e, 1), e = Math.max(e, 0), o = 0; (n = t.show[o]); o++) (a = t.showPosData[o]), n.applyTween(a, e);
                for (o = 0; (n = t.hide[o]); o++) n.isShown && n.hide(), (i = t.toHide.indexOf(n)) > -1 && ((a = t.toHidePosData[i]), n.isShown || n.show(), n.applyTween(a, e));
            },
            insert: function () {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.multimix({ insert: e.command }, e.animate, e.callback);
            },
            insertBefore: function () {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(e.command.collection, "before", e.command.sibling, e.animate, e.callback);
            },
            insertAfter: function () {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(e.command.collection, "after", e.command.sibling, e.animate, e.callback);
            },
            prepend: function () {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(0, e.command.collection, e.animate, e.callback);
            },
            append: function () {
                var t = this,
                    e = t.parseInsertArgs(arguments);
                return t.insert(t.state.totalTargets, e.command.collection, e.animate, e.callback);
            },
            remove: function () {
                var t = this,
                    e = t.parseRemoveArgs(arguments);
                return t.multimix({ remove: e.command }, e.animate, e.callback);
            },
            getConfig: function (t) {
                var e = this,
                    a = null;
                return (a = t ? n.getProperty(e.config, t) : e.config), e.callFilters("valueGetConfig", a, arguments);
            },
            configure: function (t) {
                var e = this;
                e.callActions("beforeConfigure", arguments), n.extend(e.config, t, !0, !0), e.callActions("afterConfigure", arguments);
            },
            getState: function () {
                var t = this,
                    a = null;
                return (a = new e.State()), n.extend(a, t.state), n.freeze(a), t.callFilters("stateGetState", a, arguments);
            },
            forceRefresh: function () {
                var t = this;
                t.indexTargets();
            },
            forceRender: function () {
                var t = this,
                    e = null,
                    n = null,
                    a = "";
                for (a in t.cache)
                    (e = t.cache[a]), (n = e.render(e.data)), n !== e.dom.el && (e.isInDom && (e.unbindEvents(), t.dom.parent.replaceChild(n, e.dom.el)), e.isShown || (n.style.display = "none"), (e.dom.el = n), e.isInDom && e.bindEvents());
                t.state = t.buildState(t.lastOperation);
            },
            destroy: function (t) {
                var n = this,
                    a = null,
                    i = null,
                    o = 0;
                for (n.callActions("beforeDestroy", arguments), o = 0; (a = n.controls[o]); o++) a.removeBinding(n);
                for (o = 0; (i = n.targets[o]); o++) t && i.show(), i.unbindEvents();
                n.dom.container.id.match(/^MixItUp/) && n.dom.container.removeAttribute("id"), delete e.instances[n.id], n.callActions("afterDestroy", arguments);
            },
        }),
        (e.IMoveData = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.posIn = null),
                (this.posOut = null),
                (this.operation = null),
                (this.callback = null),
                (this.statusChange = ""),
                (this.duration = -1),
                (this.staggerIndex = -1),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.IMoveData),
        (e.IMoveData.prototype = Object.create(e.Base.prototype)),
        (e.IMoveData.prototype.constructor = e.IMoveData),
        (e.TargetDom = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.el = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.TargetDom),
        (e.TargetDom.prototype = Object.create(e.Base.prototype)),
        (e.TargetDom.prototype.constructor = e.TargetDom),
        (e.Target = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.id = ""),
                (this.sortString = ""),
                (this.mixer = null),
                (this.callback = null),
                (this.isShown = !1),
                (this.isBound = !1),
                (this.isExcluded = !1),
                (this.isInDom = !1),
                (this.handler = null),
                (this.operation = null),
                (this.data = null),
                (this.dom = new e.TargetDom()),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Target),
        (e.Target.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Target.prototype, {
            constructor: e.Target,
            init: function (t, n, a) {
                var i = this,
                    o = "";
                if ((i.callActions("beforeInit", arguments), (i.mixer = n), t || (t = i.render(a)), i.cacheDom(t), i.bindEvents(), "none" !== i.dom.el.style.display && (i.isShown = !0), a && n.config.data.uidKey)) {
                    if ("undefined" == typeof (o = a[n.config.data.uidKey]) || o.toString().length < 1) throw new TypeError(e.messages.errorDatasetInvalidUidKey({ uidKey: n.config.data.uidKey }));
                    (i.id = o), (i.data = a), (n.cache[o] = i);
                }
                i.callActions("afterInit", arguments);
            },
            render: function (t) {
                var a = this,
                    i = null,
                    o = null,
                    r = null,
                    s = "";
                if ((a.callActions("beforeRender", arguments), (i = a.callFilters("renderRender", a.mixer.config.render.target, arguments)), "function" != typeof i)) throw new TypeError(e.messages.errorDatasetRendererNotSet());
                return (s = i(t)), s && "object" == typeof s && n.isElement(s) ? (o = s) : "string" == typeof s && ((r = document.createElement("div")), (r.innerHTML = s), (o = r.firstElementChild)), a.callFilters("elRender", o, arguments);
            },
            cacheDom: function (t) {
                var e = this;
                e.callActions("beforeCacheDom", arguments), (e.dom.el = t), e.callActions("afterCacheDom", arguments);
            },
            getSortString: function (t) {
                var e = this,
                    n = e.dom.el.getAttribute("data-" + t) || "";
                e.callActions("beforeGetSortString", arguments), (n = isNaN(1 * n) ? n.toLowerCase() : 1 * n), (e.sortString = n), e.callActions("afterGetSortString", arguments);
            },
            show: function () {
                var t = this;
                t.callActions("beforeShow", arguments), t.isShown || ((t.dom.el.style.display = ""), (t.isShown = !0)), t.callActions("afterShow", arguments);
            },
            hide: function () {
                var t = this;
                t.callActions("beforeHide", arguments), t.isShown && ((t.dom.el.style.display = "none"), (t.isShown = !1)), t.callActions("afterHide", arguments);
            },
            move: function (t) {
                var e = this;
                e.callActions("beforeMove", arguments),
                    e.isExcluded || e.mixer.targetsMoved++,
                    e.applyStylesIn(t),
                    requestAnimationFrame(function () {
                        e.applyStylesOut(t);
                    }),
                    e.callActions("afterMove", arguments);
            },
            applyTween: function (t, n) {
                var a = this,
                    i = "",
                    o = null,
                    r = t.posIn,
                    s = [],
                    l = new e.StyleData(),
                    c = -1;
                for (a.callActions("beforeApplyTween", arguments), l.x = r.x, l.y = r.y, 0 === n ? a.hide() : a.isShown || a.show(), c = 0; (i = e.features.TWEENABLE[c]); c++)
                    if (((o = t.tweenData[i]), "x" === i)) {
                        if (!o) continue;
                        l.x = r.x + o * n;
                    } else if ("y" === i) {
                        if (!o) continue;
                        l.y = r.y + o * n;
                    } else if (o instanceof e.TransformData) {
                        if (!o.value) continue;
                        (l[i].value = r[i].value + o.value * n), (l[i].unit = o.unit), s.push(i + "(" + l[i].value + o.unit + ")");
                    } else {
                        if (!o) continue;
                        (l[i] = r[i] + o * n), (a.dom.el.style[i] = l[i]);
                    }
                (l.x || l.y) && s.unshift("translate(" + l.x + "px, " + l.y + "px)"), s.length && (a.dom.el.style[e.features.transformProp] = s.join(" ")), a.callActions("afterApplyTween", arguments);
            },
            applyStylesIn: function (t) {
                var n = this,
                    a = t.posIn,
                    i = 1 !== n.mixer.effectsIn.opacity,
                    o = [];
                n.callActions("beforeApplyStylesIn", arguments),
                    o.push("translate(" + a.x + "px, " + a.y + "px)"),
                    n.mixer.config.animation.animateResizeTargets &&
                        ("show" !== t.statusChange && ((n.dom.el.style.width = a.width + "px"), (n.dom.el.style.height = a.height + "px")),
                        (n.dom.el.style.marginRight = a.marginRight + "px"),
                        (n.dom.el.style.marginBottom = a.marginBottom + "px")),
                    i && (n.dom.el.style.opacity = a.opacity),
                    "show" === t.statusChange && (o = o.concat(n.mixer.transformIn)),
                    (n.dom.el.style[e.features.transformProp] = o.join(" ")),
                    n.callActions("afterApplyStylesIn", arguments);
            },
            applyStylesOut: function (t) {
                var n = this,
                    a = [],
                    i = [],
                    o = n.mixer.config.animation.animateResizeTargets,
                    r = "undefined" != typeof n.mixer.effectsIn.opacity;
                if (
                    (n.callActions("beforeApplyStylesOut", arguments),
                    a.push(n.writeTransitionRule(e.features.transformRule, t.staggerIndex)),
                    "none" !== t.statusChange && a.push(n.writeTransitionRule("opacity", t.staggerIndex, t.duration)),
                    o && (a.push(n.writeTransitionRule("width", t.staggerIndex, t.duration)), a.push(n.writeTransitionRule("height", t.staggerIndex, t.duration)), a.push(n.writeTransitionRule("margin", t.staggerIndex, t.duration))),
                    !t.callback)
                )
                    return n.mixer.targetsImmovable++, void (n.mixer.targetsMoved === n.mixer.targetsImmovable && n.mixer.cleanUp(t.operation));
                switch (
                    ((n.operation = t.operation),
                    (n.callback = t.callback),
                    !n.isExcluded && n.mixer.targetsBound++,
                    (n.isBound = !0),
                    n.applyTransition(a),
                    o &&
                        t.posOut.width > 0 &&
                        t.posOut.height > 0 &&
                        ((n.dom.el.style.width = t.posOut.width + "px"),
                        (n.dom.el.style.height = t.posOut.height + "px"),
                        (n.dom.el.style.marginRight = t.posOut.marginRight + "px"),
                        (n.dom.el.style.marginBottom = t.posOut.marginBottom + "px")),
                    n.mixer.config.animation.nudge || "hide" !== t.statusChange || i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"),
                    t.statusChange)
                ) {
                    case "hide":
                        r && (n.dom.el.style.opacity = n.mixer.effectsOut.opacity), (i = i.concat(n.mixer.transformOut));
                        break;
                    case "show":
                        r && (n.dom.el.style.opacity = 1);
                }
                (n.mixer.config.animation.nudge || (!n.mixer.config.animation.nudge && "hide" !== t.statusChange)) && i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"),
                    (n.dom.el.style[e.features.transformProp] = i.join(" ")),
                    n.callActions("afterApplyStylesOut", arguments);
            },
            writeTransitionRule: function (t, e, n) {
                var a = this,
                    i = a.getDelay(e),
                    o = "";
                return (o = t + " " + (n > 0 ? n : a.mixer.config.animation.duration) + "ms " + i + "ms " + ("opacity" === t ? "linear" : a.mixer.config.animation.easing)), a.callFilters("ruleWriteTransitionRule", o, arguments);
            },
            getDelay: function (t) {
                var e = this,
                    n = -1;
                return (
                    "function" == typeof e.mixer.config.animation.staggerSequence && (t = e.mixer.config.animation.staggerSequence.call(e, t, e.state)),
                    (n = e.mixer.staggerDuration ? t * e.mixer.staggerDuration : 0),
                    e.callFilters("delayGetDelay", n, arguments)
                );
            },
            applyTransition: function (t) {
                var n = this,
                    a = t.join(", ");
                n.callActions("beforeApplyTransition", arguments), (n.dom.el.style[e.features.transitionProp] = a), n.callActions("afterApplyTransition", arguments);
            },
            handleTransitionEnd: function (t) {
                var e = this,
                    n = t.propertyName,
                    a = e.mixer.config.animation.animateResizeTargets;
                e.callActions("beforeHandleTransitionEnd", arguments),
                    e.isBound &&
                        t.target.matches(e.mixer.config.selectors.target) &&
                        (n.indexOf("transform") > -1 || n.indexOf("opacity") > -1 || (a && n.indexOf("height") > -1) || (a && n.indexOf("width") > -1) || (a && n.indexOf("margin") > -1)) &&
                        (e.callback.call(e, e.operation), (e.isBound = !1), (e.callback = null), (e.operation = null)),
                    e.callActions("afterHandleTransitionEnd", arguments);
            },
            eventBus: function (t) {
                var e = this;
                switch ((e.callActions("beforeEventBus", arguments), t.type)) {
                    case "webkitTransitionEnd":
                    case "transitionend":
                        e.handleTransitionEnd(t);
                }
                e.callActions("afterEventBus", arguments);
            },
            unbindEvents: function () {
                var t = this;
                t.callActions("beforeUnbindEvents", arguments), n.off(t.dom.el, "webkitTransitionEnd", t.handler), n.off(t.dom.el, "transitionend", t.handler), t.callActions("afterUnbindEvents", arguments);
            },
            bindEvents: function () {
                var t = this,
                    a = "";
                t.callActions("beforeBindEvents", arguments),
                    (a = "webkit" === e.features.transitionPrefix ? "webkitTransitionEnd" : "transitionend"),
                    (t.handler = function (e) {
                        return t.eventBus(e);
                    }),
                    n.on(t.dom.el, a, t.handler),
                    t.callActions("afterBindEvents", arguments);
            },
            getPosData: function (n) {
                var a = this,
                    i = {},
                    o = null,
                    r = new e.StyleData();
                return (
                    a.callActions("beforeGetPosData", arguments),
                    (r.x = a.dom.el.offsetLeft),
                    (r.y = a.dom.el.offsetTop),
                    (a.mixer.config.animation.animateResizeTargets || n) &&
                        ((o = a.dom.el.getBoundingClientRect()), (r.top = o.top), (r.right = o.right), (r.bottom = o.bottom), (r.left = o.left), (r.width = o.width), (r.height = o.height)),
                    a.mixer.config.animation.animateResizeTargets && ((i = t.getComputedStyle(a.dom.el)), (r.marginBottom = parseFloat(i.marginBottom)), (r.marginRight = parseFloat(i.marginRight))),
                    a.callFilters("posDataGetPosData", r, arguments)
                );
            },
            cleanUp: function () {
                var t = this;
                t.callActions("beforeCleanUp", arguments),
                    (t.dom.el.style[e.features.transformProp] = ""),
                    (t.dom.el.style[e.features.transitionProp] = ""),
                    (t.dom.el.style.opacity = ""),
                    t.mixer.config.animation.animateResizeTargets && ((t.dom.el.style.width = ""), (t.dom.el.style.height = ""), (t.dom.el.style.marginRight = ""), (t.dom.el.style.marginBottom = "")),
                    t.callActions("afterCleanUp", arguments);
            },
        }),
        (e.Collection = function (t) {
            var e = null,
                a = -1;
            for (this.callActions("beforeConstruct"), a = 0; (e = t[a]); a++) this[a] = e;
            (this.length = t.length), this.callActions("afterConstruct"), n.freeze(this);
        }),
        e.BaseStatic.call(e.Collection),
        (e.Collection.prototype = Object.create(e.Base.prototype)),
        n.extend(e.Collection.prototype, {
            constructor: e.Collection,
            mixitup: function (t) {
                var a = this,
                    i = null,
                    o = Array.prototype.slice.call(arguments),
                    r = [],
                    s = -1;
                for (this.callActions("beforeMixitup"), o.shift(), s = 0; (i = a[s]); s++) r.push(i[t].apply(i, o));
                return a.callFilters("promiseMixitup", n.all(r, e.libraries), arguments);
            },
        }),
        (e.Operation = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.id = ""),
                (this.args = []),
                (this.command = null),
                (this.showPosData = []),
                (this.toHidePosData = []),
                (this.startState = null),
                (this.newState = null),
                (this.docState = null),
                (this.willSort = !1),
                (this.willChangeLayout = !1),
                (this.hasEffect = !1),
                (this.hasFailed = !1),
                (this.triggerElement = null),
                (this.show = []),
                (this.hide = []),
                (this.matching = []),
                (this.toShow = []),
                (this.toHide = []),
                (this.toMove = []),
                (this.toRemove = []),
                (this.startOrder = []),
                (this.newOrder = []),
                (this.startSort = null),
                (this.newSort = null),
                (this.startFilter = null),
                (this.newFilter = null),
                (this.startDataset = null),
                (this.newDataset = null),
                (this.viewportDeltaX = 0),
                (this.viewportDeltaY = 0),
                (this.startX = 0),
                (this.startY = 0),
                (this.startHeight = 0),
                (this.startWidth = 0),
                (this.newX = 0),
                (this.newY = 0),
                (this.newHeight = 0),
                (this.newWidth = 0),
                (this.startContainerClassName = ""),
                (this.startDisplay = ""),
                (this.newContainerClassName = ""),
                (this.newDisplay = ""),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Operation),
        (e.Operation.prototype = Object.create(e.Base.prototype)),
        (e.Operation.prototype.constructor = e.Operation),
        (e.State = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.id = ""),
                (this.activeFilter = null),
                (this.activeSort = null),
                (this.activeContainerClassName = ""),
                (this.container = null),
                (this.targets = []),
                (this.hide = []),
                (this.show = []),
                (this.matching = []),
                (this.totalTargets = -1),
                (this.totalShow = -1),
                (this.totalHide = -1),
                (this.totalMatching = -1),
                (this.hasFailed = !1),
                (this.triggerElement = null),
                (this.activeDataset = null),
                this.callActions("afterConstruct"),
                n.seal(this);
        }),
        e.BaseStatic.call(e.State),
        (e.State.prototype = Object.create(e.Base.prototype)),
        (e.State.prototype.constructor = e.State),
        (e.UserInstruction = function () {
            e.Base.call(this), this.callActions("beforeConstruct"), (this.command = {}), (this.animate = !1), (this.callback = null), this.callActions("afterConstruct"), n.seal(this);
        }),
        e.BaseStatic.call(e.UserInstruction),
        (e.UserInstruction.prototype = Object.create(e.Base.prototype)),
        (e.UserInstruction.prototype.constructor = e.UserInstruction),
        (e.Messages = function () {
            e.Base.call(this),
                this.callActions("beforeConstruct"),
                (this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function"),
                (this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element"),
                (this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`"),
                (this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`"),
                (this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}'),
                (this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?'),
                (this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`"),
                (this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items'),
                (this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.'),
                (this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both"),
                (this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container"),
                (this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both"),
                (this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`"),
                (this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets"),
                (this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`"),
                (this.ERROR_SORT_NON_EXISTENT_ELEMENT = "[MixItUp] An element to be sorted does not already exist in the container"),
                (this.WARNING_FACTORY_PREEXISTING_INSTANCE =
                    "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference."),
                (this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`"),
                (this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`"),
                (this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled."),
                (this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy."),
                (this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill."),
                (this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output'),
                this.callActions("afterConstruct"),
                this.compileTemplates(),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Messages),
        (e.Messages.prototype = Object.create(e.Base.prototype)),
        (e.Messages.prototype.constructor = e.Messages),
        (e.Messages.prototype.compileTemplates = function () {
            var t = "",
                e = "";
            for (t in this) "string" == typeof (e = this[t]) && (this[n.camelCase(t)] = n.template(e));
        }),
        (e.messages = new e.Messages()),
        (e.Facade = function (t) {
            e.Base.call(this),
                this.callActions("beforeConstruct", arguments),
                (this.configure = t.configure.bind(t)),
                (this.show = t.show.bind(t)),
                (this.hide = t.hide.bind(t)),
                (this.filter = t.filter.bind(t)),
                (this.toggleOn = t.toggleOn.bind(t)),
                (this.toggleOff = t.toggleOff.bind(t)),
                (this.sort = t.sort.bind(t)),
                (this.changeLayout = t.changeLayout.bind(t)),
                (this.multimix = t.multimix.bind(t)),
                (this.dataset = t.dataset.bind(t)),
                (this.tween = t.tween.bind(t)),
                (this.insert = t.insert.bind(t)),
                (this.insertBefore = t.insertBefore.bind(t)),
                (this.insertAfter = t.insertAfter.bind(t)),
                (this.prepend = t.prepend.bind(t)),
                (this.append = t.append.bind(t)),
                (this.remove = t.remove.bind(t)),
                (this.destroy = t.destroy.bind(t)),
                (this.forceRefresh = t.forceRefresh.bind(t)),
                (this.forceRender = t.forceRender.bind(t)),
                (this.isMixing = t.isMixing.bind(t)),
                (this.getOperation = t.getOperation.bind(t)),
                (this.getConfig = t.getConfig.bind(t)),
                (this.getState = t.getState.bind(t)),
                this.callActions("afterConstruct", arguments),
                n.freeze(this),
                n.seal(this);
        }),
        e.BaseStatic.call(e.Facade),
        (e.Facade.prototype = Object.create(e.Base.prototype)),
        (e.Facade.prototype.constructor = e.Facade),
        "object" == typeof exports && "object" == typeof module
            ? (module.exports = e)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return e;
              })
            : ("undefined" != typeof t.mixitup && "function" == typeof t.mixitup) || (t.mixitup = e),
        e.BaseStatic.call(e.constructor),
        (e.NAME = "mixitup"),
        (e.CORE_VERSION = "3.3.1");
})(window);

/*!
 * Particleground
 *
 * @author Jonathan Nicol - @mrjnicol
 * @version 1.1.0
 * @description Creates a canvas based particle system background
 *
 * Inspired by http://requestlab.fr/ and http://disruptivebydesign.com/
 */

;(function(window, document) {
  "use strict";
  var pluginName = 'particleground';

  // http://youmightnotneedjquery.com/#deep_extend
  function extend(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];
      if (!obj) continue;
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object')
            deepExtend(out[key], obj[key]);
          else
            out[key] = obj[key];
        }
      }
    }
    return out;
  };

  var $ = window.jQuery;

  function Plugin(element, options) {
    var canvasSupport = !!document.createElement('canvas').getContext;
    var canvas;
    var ctx;
    var particles = [];
    var raf;
    var mouseX = 0;
    var mouseY = 0;
    var winW;
    var winH;
    var desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    var orientationSupport = !!window.DeviceOrientationEvent;
    var tiltX = 0;
    var pointerX;
    var pointerY;
    var tiltY = 0;
    var paused = false;

    options = extend({}, window[pluginName].defaults, options);

    /**
     * Init
     */
    function init() {
      if (!canvasSupport) { return; }

      //Create canvas
      canvas = document.createElement('canvas');
      canvas.className = 'pg-canvas';
      canvas.style.display = 'block';
      element.insertBefore(canvas, element.firstChild);
      ctx = canvas.getContext('2d');
      styleCanvas();

      // Create particles
      var numParticles = Math.round((canvas.width * canvas.height) / options.density);
      for (var i = 0; i < numParticles; i++) {
        var p = new Particle();
        p.setStackPos(i);
        particles.push(p);
      };

      window.addEventListener('resize', function() {
        resizeHandler();
      }, false);

      document.addEventListener('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
      }, false);

      if (orientationSupport && !desktop) {
        window.addEventListener('deviceorientation', function () {
          // Contrain tilt range to [-30,30]
          tiltY = Math.min(Math.max(-event.beta, -30), 30);
          tiltX = Math.min(Math.max(-event.gamma, -30), 30);
        }, true);
      }

      draw();
      hook('onInit');
    }

    /**
     * Style the canvas
     */
    function styleCanvas() {
      canvas.width = element.offsetWidth;
      canvas.height = element.offsetHeight;
      ctx.fillStyle = options.dotColor;
      ctx.strokeStyle = options.lineColor;
      ctx.lineWidth = options.lineWidth;
    }

    /**
     * Draw particles
     */
    function draw() {
      if (!canvasSupport) { return; }

      winW = window.innerWidth;
      winH = window.innerHeight;

      // Wipe canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particle positions
      for (var i = 0; i < particles.length; i++) {
        particles[i].updatePosition();
      };
      // Draw particles
      for (var i = 0; i < particles.length; i++) {
        particles[i].draw();
      };

      // Call this function next time screen is redrawn
      if (!paused) {
        raf = requestAnimationFrame(draw);
      }
    }

    /**
     * Add/remove particles.
     */
    function resizeHandler() {
      // Resize the canvas
      styleCanvas();

      var elWidth = element.offsetWidth;
      var elHeight = element.offsetHeight;

      // Remove particles that are outside the canvas
      for (var i = particles.length - 1; i >= 0; i--) {
        if (particles[i].position.x > elWidth || particles[i].position.y > elHeight) {
          particles.splice(i, 1);
        }
      };

      // Adjust particle density
      var numParticles = Math.round((canvas.width * canvas.height) / options.density);
      if (numParticles > particles.length) {
        while (numParticles > particles.length) {
          var p = new Particle();
          particles.push(p);
        }
      } else if (numParticles < particles.length) {
        particles.splice(numParticles);
      }

      // Re-index particles
      for (i = particles.length - 1; i >= 0; i--) {
        particles[i].setStackPos(i);
      };
    }

    /**
     * Pause particle system
     */
    function pause() {
      paused = true;
    }

    /**
     * Start particle system
     */
    function start() {
      paused = false;
      draw();
    }

    /**
     * Particle
     */
    function Particle() {
      this.stackPos;
      this.active = true;
      this.layer = Math.ceil(Math.random() * 3);
      this.parallaxOffsetX = 0;
      this.parallaxOffsetY = 0;
      // Initial particle position
      this.position = {
        x: Math.ceil(Math.random() * canvas.width),
        y: Math.ceil(Math.random() * canvas.height)
      }
      // Random particle speed, within min and max values
      this.speed = {}
      switch (options.directionX) {
        case 'left':
          this.speed.x = +(-options.maxSpeedX + (Math.random() * options.maxSpeedX) - options.minSpeedX).toFixed(2);
          break;
        case 'right':
          this.speed.x = +((Math.random() * options.maxSpeedX) + options.minSpeedX).toFixed(2);
          break;
        default:
          this.speed.x = +((-options.maxSpeedX / 2) + (Math.random() * options.maxSpeedX)).toFixed(2);
          this.speed.x += this.speed.x > 0 ? options.minSpeedX : -options.minSpeedX;
          break;
      }
      switch (options.directionY) {
        case 'up':
          this.speed.y = +(-options.maxSpeedY + (Math.random() * options.maxSpeedY) - options.minSpeedY).toFixed(2);
          break;
        case 'down':
          this.speed.y = +((Math.random() * options.maxSpeedY) + options.minSpeedY).toFixed(2);
          break;
        default:
          this.speed.y = +((-options.maxSpeedY / 2) + (Math.random() * options.maxSpeedY)).toFixed(2);
          this.speed.x += this.speed.y > 0 ? options.minSpeedY : -options.minSpeedY;
          break;
      }
    }

    /**
     * Draw particle
     */
    Particle.prototype.draw = function() {
      // Draw circle
      ctx.beginPath();
      ctx.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, options.particleRadius / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      // Draw lines
      ctx.beginPath();
      // Iterate over all particles which are higher in the stack than this one
      for (var i = particles.length - 1; i > this.stackPos; i--) {
        var p2 = particles[i];

        // Pythagorus theorum to get distance between two points
        var a = this.position.x - p2.position.x
        var b = this.position.y - p2.position.y
        var dist = Math.sqrt((a * a) + (b * b)).toFixed(2);

        // If the two particles are in proximity, join them
        if (dist < options.proximity) {
          ctx.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY);
          if (options.curvedLines) {
            ctx.quadraticCurveTo(Math.max(p2.position.x, p2.position.x), Math.min(p2.position.y, p2.position.y), p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
          } else {
            ctx.lineTo(p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
          }
        }
      }
      ctx.stroke();
      ctx.closePath();
    }

    /**
     * update particle position
     */
    Particle.prototype.updatePosition = function() {
      if (options.parallax) {
        if (orientationSupport && !desktop) {
          // Map tiltX range [-30,30] to range [0,winW]
          var ratioX = (winW - 0) / (30 - -30);
          pointerX = (tiltX - -30) * ratioX + 0;
          // Map tiltY range [-30,30] to range [0,winH]
          var ratioY = (winH - 0) / (30 - -30);
          pointerY = (tiltY - -30) * ratioY + 0;
        } else {
          pointerX = mouseX;
          pointerY = mouseY;
        }
        // Calculate parallax offsets
        this.parallaxTargX = (pointerX - (winW / 2)) / (options.parallaxMultiplier * this.layer);
        this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10; // Easing equation
        this.parallaxTargY = (pointerY - (winH / 2)) / (options.parallaxMultiplier * this.layer);
        this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10; // Easing equation
      }

      var elWidth = element.offsetWidth;
      var elHeight = element.offsetHeight;

      switch (options.directionX) {
        case 'left':
          if (this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
            this.position.x = elWidth - this.parallaxOffsetX;
          }
          break;
        case 'right':
          if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth) {
            this.position.x = 0 - this.parallaxOffsetX;
          }
          break;
        default:
          // If particle has reached edge of canvas, reverse its direction
          if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth || this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
            this.speed.x = -this.speed.x;
          }
          break;
      }

      switch (options.directionY) {
        case 'up':
          if (this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
            this.position.y = elHeight - this.parallaxOffsetY;
          }
          break;
        case 'down':
          if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight) {
            this.position.y = 0 - this.parallaxOffsetY;
          }
          break;
        default:
          // If particle has reached edge of canvas, reverse its direction
          if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight || this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
            this.speed.y = -this.speed.y;
          }
          break;
      }

      // Move particle
      this.position.x += this.speed.x;
      this.position.y += this.speed.y;
    }

    /**
     * Setter: particle stacking position
     */
    Particle.prototype.setStackPos = function(i) {
      this.stackPos = i;
    }

    function option (key, val) {
      if (val) {
        options[key] = val;
      } else {
        return options[key];
      }
    }

    function destroy() {
      console.log('destroy');
      canvas.parentNode.removeChild(canvas);
      hook('onDestroy');
      if ($) {
        $(element).removeData('plugin_' + pluginName);
      }
    }

    function hook(hookName) {
      if (options[hookName] !== undefined) {
        options[hookName].call(element);
      }
    }

    init();

    return {
      option: option,
      destroy: destroy,
      start: start,
      pause: pause
    };
  }

  window[pluginName] = function(elem, options) {
    return new Plugin(elem, options);
  };

  window[pluginName].defaults = {
    minSpeedX: 0.1,
    maxSpeedX: 0.7,
    minSpeedY: 0.1,
    maxSpeedY: 0.7,
    directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
    directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
    density: 10000, // How many particles will be generated: one particle every n pixels
    dotColor: '#666666',
    lineColor: '#666666',
    particleRadius: 5, // Dot size
    lineWidth: 0.7,
    curvedLines: false,
    proximity: 100, // How close two dots need to be before they join
    parallax: true,
    parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
    onInit: function() {},
    onDestroy: function() {}
  };

  // nothing wrong with hooking into jQuery if it's there...
  if ($) {
    $.fn[pluginName] = function(options) {
      if (typeof arguments[0] === 'string') {
        var methodName = arguments[0];
        var args = Array.prototype.slice.call(arguments, 1);
        var returnVal;
        this.each(function() {
          if ($.data(this, 'plugin_' + pluginName) && typeof $.data(this, 'plugin_' + pluginName)[methodName] === 'function') {
            returnVal = $.data(this, 'plugin_' + pluginName)[methodName].apply(this, args);
          }
        });
        if (returnVal !== undefined){
          return returnVal;
        } else {
          return this;
        }
      } else if (typeof options === "object" || !options) {
        return this.each(function() {
          if (!$.data(this, 'plugin_' + pluginName)) {
            $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
          }
        });
      }
    };
  }

})(window, document);

/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
}());

document.addEventListener("DOMContentLoaded", function () {
   // ? PARTICLES
   $('#particles-js').particleground({
      dotColor: '#09695c',
      lineColor: '#074940'
   });
   // ? PAGEPILLING
   $('#pagepiling').pagepiling({
      menu: '#nav',
      direction: 'horizontal',
      verticalCentered: true,
      sectionsColor: [],
      anchors: ['intro', 'about', 'skills', 'works', 'contact'],
      scrollingSpeed: 800,
      easing: 'linear',
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: false,
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: true,

      //events
      onLeave: function (index, nextIndex, direction) { },
      afterLoad: function (anchorLink, index) { },
      afterRender: function () { },
   });
   // ? DOWNLOAD RESUME
   let aboutBtn = document.querySelector('.about__btn')
   aboutBtn.onclick = function () {
      notie.alert({ type: 1, text: 'SUCCESS!', stay: false, position: "bottom" })
      document.getElementById('link').click()
   };
   // ? WORKS ALERT
   let real = document.querySelector('#real')
   let agency = document.querySelector('#agency')
   let maglic = document.querySelector('#maglic')
   real.onclick = function () {
      notie.select({
         text: 'Your choise',
         cancelText: 'Close',
         cancelCallback: function () {
            notie.alert({ type: 5, text: 'Cancel!' })
         },
         choices: [
            {
               text: '<a href="https://babakart.com.ua/">LiveDemo</a>',
            },
         ]
      })
   }
   agency.onclick = function () {
      notie.select({
         text: 'Your choise',
         cancelText: 'Close',
         cancelCallback: function () {
            notie.alert({ type: 5, text: 'Cancel!' })
         },
         choices: [
            {
               text: '<a href="https://github.com/oleh312/Agency">GitHub</a>',
            },
            {
               text: '<a href="https://oleh312.github.io/Agency/">LiveDemo</a>',
            },

         ]
      })
   }
   maglic.onclick = function () {
      notie.select({
         text: 'Your choise',
         cancelText: 'Close',
         cancelCallback: function () {
            notie.alert({ type: 5, text: 'Cancel!' })
         },
         choices: [
            {
               text: '<a href="https://github.com/oleh312/Maglic">GitHub</a>',
            },
            {
               text: '<a href="https://oleh312.github.io/Maglic/">LiveDemo</a>',
            },

         ]
      })
   }
   // ? HAMBURGER AND NAV
   $(".ham").click(function () {
      $('.header__nav').toggleClass('is-active')
      $('.ham').toggleClass('active')
   });
   $(".header__nav a").click(function () {
      $('.header__nav').removeClass('is-active')
      $('.ham').removeClass('active')

   })
   // ? FILTRING WORKS
   let mixer = mixitup('.content', {
      animation: {
         duration: 500,
      }
   });
});

// ? PRELOADER
jQuery(document).ready(function ($) {
   preloader = new $.materialPreloader({
      height: '5px',
      col_1: '#05c7ae',
      col_2: '#fff',
      col_3: '#05c7ae',
      col_4: '#fff',
      fadeIn: 10,
      fadeOut: 2000
   });
   preloader.on();
   $('.loading').fadeOut(700)
   preloader.off();
});
