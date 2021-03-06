try
{


    function dropdownEffectData(t) {
        var e = null, n = null, i = $(t), o = $(".dropdown-menu", t), a = i.parents("ul.nav");
        return a.height > 0 && (e = a.data("dropdown-in") || null, n = a.data("dropdown-out") || null), {target: t, dropdown: i, dropdownMenu: o, effectIn: o.data("dropdown-in") || e, effectOut: o.data("dropdown-out") || n}
    }
    function dropdownEffectStart(t, e) {
        e && (t.dropdown.addClass("dropdown-animating"), t.dropdownMenu.addClass("animated"), t.dropdownMenu.addClass(e))
    }
    function dropdownEffectEnd(t, e) {
        t.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            t.dropdown.removeClass("dropdown-animating"), t.dropdownMenu.removeClass("animated"), t.dropdownMenu.removeClass(t.effectIn), t.dropdownMenu.removeClass(t.effectOut), "function" == typeof e && e()
        })
    }
    function _classCallCheck(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    !function (t) {
        function e(e) {
            if ($this = e, !1 === $this.hasClass("active")) {
                $this.addClass("active"), $this.find("ul .btn-floating").velocity({scaleY: ".4", scaleX: ".4", translateY: "40px"}, {duration: 0});
                n = 0;
                $this.find("ul .btn-floating").reverse().each(function () {
                    t(this).velocity({opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"}, {duration: 80, delay: n}), n += 40
                })
            } else {
                $this.removeClass("active");
                var n = 0;
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({opacity: "0", scaleX: ".4", scaleY: ".4", translateY: "40px"}, {duration: 80})
            }
        }
        t(document).ready(function () {
            t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (e) {
                var i = t(this);
                n(i)
            }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (e) {
                var n = t(this);
                i(n)
            }), t(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function (e) {
                var o = t(this).parent();
                o.hasClass("active") ? i(o) : n(o)
            })
        }), t.fn.extend({openFAB: function () {
                n(t(this))
            }, closeFAB: function () {
                i(t(this))
            }});
        var n = function (e) {
            if ($this = e, !1 === $this.hasClass("active")) {
                var n, i;
                !0 === $this.hasClass("horizontal") ? i = 40 : n = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({scaleY: ".4", scaleX: ".4", translateY: n + "px", translateX: i + "px"}, {duration: 0});
                var o = 0;
                $this.find("ul .btn-floating").reverse().each(function () {
                    t(this).velocity({opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: "0"}, {duration: 80, delay: o}), o += 40
                })
            }
        }, i = function (t) {
            $this = t;
            var e, n;
            !0 === $this.hasClass("horizontal") ? n = 40 : e = 40, $this.removeClass("active");
            $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({opacity: "0", scaleX: ".4", scaleY: ".4", translateY: e + "px", translateX: n + "px"}, {duration: 80})
        };
        t(".fixed-action-btn").on({click: function (n) {
                return n.preventDefault(), e(t(".fixed-action-btn")), !1
            }})
    }(jQuery), function (t) {
        t(document).ready(function () {
            t(document).on("click.card", ".card", function (e) {
                var n = t(this);
                if (n.find(".card-reveal").length) {
                    var i = t(e.target), o = i.is(".card-reveal .card-title"), a = i.is(".card-reveal .card-title i"), r = i.is(".card .activator"), s = i.is(".card .activator i");
                    o || a ? n.find(".card-reveal").velocity({translateY: 0}, {duration: 225, queue: !1, easing: "easeInOutQuad", complete: function () {
                            t(this).css({display: "none"})
                        }}) : (r || s) && n.find(".card-reveal").css({display: "block"}).velocity("stop", !1).velocity({translateY: "-100%"}, {duration: 300, queue: !1, easing: "easeInOutQuad"})
                }
            }), t(".rotate-btn").on("click", function () {
                var e = t(this).attr("data-card");
                t("#" + e).toggleClass("flipped")
            })
        })
    }(jQuery), $(document).ready(function (t) {
        t(".card-share > a").on("click", function (e) {
            e.preventDefault(), t(this).parent().find("div").toggleClass("social-reveal-active"), t(this).toggleClass("share-expanded")
        })
    }), function (t) {
        t.fn.collapsible = function (e) {
            var n = {accordion: void 0};
            return e = t.extend(n, e), this.each(function () {
                function n(e) {
                    s = r.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({duration: 350, easing: "easeOutQuart", queue: !1, complete: function () {
                            t(this).css("height", "")
                        }}) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({duration: 350, easing: "easeOutQuart", queue: !1, complete: function () {
                            t(this).css("height", "")
                        }}), s.not(e).removeClass("active").parent().removeClass("active"), s.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({duration: 350, easing: "easeOutQuart", queue: !1, complete: function () {
                            t(this).css("height", "")
                        }})
                }
                function i(e) {
                    e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({duration: 350, easing: "easeOutQuart", queue: !1, complete: function () {
                            t(this).css("height", "")
                        }}) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({duration: 350, easing: "easeOutQuart", queue: !1, complete: function () {
                            t(this).css("height", "")
                        }})
                }
                function o(t) {
                    return a(t).length > 0
                }
                function a(t) {
                    return t.closest("li > .collapsible-header")
                }
                var r = t(this), s = t(this).find("> li > .collapsible-header"), l = r.data("collapsible");
                r.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), e.accordion || "accordion" === l || void 0 === l ? ((s = r.find("> li > .collapsible-header")).on("click.collapse", function (e) {
                    var i = t(e.target);
                    o(i) && (i = a(i)), i.toggleClass("active"), n(i)
                }), n(s.filter(".active").first())) : s.each(function () {
                    t(this).on("click.collapse", function (e) {
                        var n = t(e.target);
                        o(n) && (n = a(n)), n.toggleClass("active"), i(n)
                    }), t(this).hasClass("active") && i(t(this))
                })
            })
        }, t(document).ready(function () {
            t(".collapsible").collapsible()
        })
    }(jQuery), function (t) {
        t.fn.scrollTo = function (e) {
            return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
        }, t.fn.dropdown = function (e) {
            var n = {inDuration: 300, outDuration: 225, constrain_width: !0, hover: !0, gutter: 0, belowOrigin: !1, alignment: "left"};
            this.each(function () {
                function i() {
                    void 0 !== r.data("induration") && (s.inDuration = r.data("inDuration")), void 0 !== r.data("outduration") && (s.outDuration = r.data("outDuration")), void 0 !== r.data("constrainwidth") && (s.constrain_width = r.data("constrainwidth")), void 0 !== r.data("hover") && (s.hover = r.data("hover")), void 0 !== r.data("gutter") && (s.gutter = r.data("gutter")), void 0 !== r.data("beloworigin") && (s.belowOrigin = r.data("beloworigin")), void 0 !== r.data("alignment") && (s.alignment = r.data("alignment"))
                }
                function o(e) {
                    "focus" === e && (l = !0), i(), c.addClass("active"), r.addClass("active"), !0 === s.constrain_width ? c.css("width", r.outerWidth()) : c.css("white-space", "nowrap");
                    var n = window.innerHeight, o = r.innerHeight(), a = r.offset().left, u = r.offset().top - t(window).scrollTop(), d = s.alignment, h = 0, p = 0, f = 0;
                    !0 === s.belowOrigin && (f = o);
                    var m = 0, g = r.parent();
                    if (!g.is("body") && g[0].scrollHeight > g[0].clientHeight && (m = g[0].scrollTop), a + c.innerWidth() > t(window).width() ? d = "right" : a - c.innerWidth() + r.innerWidth() < 0 && (d = "left"), u + c.innerHeight() > n)
                        if (u + o - c.innerHeight() < 0) {
                            var v = n - u - f;
                            c.css("max-height", v)
                        } else
                            f || (f += o), f -= c.innerHeight();
                    "left" === d ? (h = s.gutter, p = r.position().left + h) : "right" === d && (p = r.position().left + r.outerWidth() - c.outerWidth() + (h = -s.gutter)), c.css({position: "absolute", top: r.position().top + f + m, left: p}), c.stop(!0, !0).css("opacity", 0).slideDown({queue: !1, duration: s.inDuration, easing: "easeOutCubic", complete: function () {
                            t(this).css("height", "")
                        }}).animate({opacity: 1}, {queue: !1, duration: s.inDuration, easing: "easeOutSine"})
                }
                function a() {
                    l = !1, c.fadeOut(s.outDuration), c.removeClass("active"), r.removeClass("active"), setTimeout(function () {
                        c.css("max-height", "")
                    }, s.outDuration)
                }
                var r = t(this), s = t.extend({}, n, e), l = !1, c = t("#" + r.attr("data-activates"));
                if (i(), r.after(c), s.hover) {
                    var u = !1;
                    r.unbind("click." + r.attr("id")), r.on("mouseenter", function (t) {
                        !1 === u && (o(), u = !0)
                    }), r.on("mouseleave", function (e) {
                        var n = e.toElement || e.relatedTarget;
                        t(n).closest(".dropdown-content").is(c) || (c.stop(!0, !0), a(), u = !1)
                    }), c.on("mouseleave", function (e) {
                        var n = e.toElement || e.relatedTarget;
                        t(n).closest(".dropdown-button").is(r) || (c.stop(!0, !0), a(), u = !1)
                    })
                } else
                    r.unbind("click." + r.attr("id")), r.bind("click." + r.attr("id"), function (e) {
                        l || (r[0] != e.currentTarget || r.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? r.hasClass("active") && (a(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (e.preventDefault(), o("click")), c.hasClass("active") && t(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function (e) {
                            c.is(e.target) || r.is(e.target) || r.find(e.target).length || (a(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")))
                        }))
                    });
                r.on("open", function (t, e) {
                    o(e)
                }), r.on("close", a)
            })
        }, t(document).ready(function () {
            t(".dropdown-button").dropdown()
        })
    }(jQuery);
    var dropdownSelectors = $(".dropdown, .dropup");
    dropdownSelectors.on({"show.bs.dropdown": function () {
            $(this).find(".dropdown-menu").first().stop(!0, !0).fadeIn();
            var t = dropdownEffectData(this);
            dropdownEffectStart(t, t.effectIn)
        }, "shown.bs.dropdown": function () {
            var t = dropdownEffectData(this);
            t.effectIn && t.effectOut && dropdownEffectEnd(t, function () {})
        }, "hide.bs.dropdown": function (t) {
            $(this).find(".dropdown-menu").first().stop(!0, !0).fadeOut();
            var e = dropdownEffectData(this);
            e.effectOut && (t.preventDefault(), dropdownEffectStart(e, e.effectOut), dropdownEffectEnd(e, function () {
                e.dropdown.removeClass("open"), e.dropdown.removeClass("show")
            }))
        }}), function (t) {
        t(document).on("change", '.file-field input[type="file"]', function (e) {
            for (var n = t(e.target), i = n.closest(".file-field").find("input.file-path"), o = n[0].files, a = [], r = 0; r < o.length; r++) {
                var s = o[r].name;
                a.push(s)
            }
            i.val(a.join(", ")), i.trigger("change")
        })
    }(jQuery), function (t) {
        t(document).ready(function () {
            var e = ["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function (t) {
                return"input[type=" + t + "]"
            }).join(", ") + ", textarea", n = function (t) {
                var e = t.siblings("label, i"), n = t.val().length, i = t.attr("placeholder");
                e[(n || i ? "add" : "remove") + "Class"]("active")
            }, i = function (t) {
                if (t.hasClass("validate")) {
                    var e = t.val(), n = !e.length, i = !t[0].validity.badInput;
                    if (n && i)
                        t.removeClass("valid").removeClass("invalid");
                    else {
                        var o = t.is(":valid"), a = +t.attr("length") || 0;
                        o && (!a || a > e.length) ? t.removeClass("invalid").addClass("valid") : t.removeClass("valid").addClass("invalid")
                    }
                }
            }, o = function () {
                var e = t(void 0);
                if (e.val().length) {
                    var n = t(".hiddendiv"), i = e.css("font-family"), o = e.css("font-size");
                    o && hiddenDiv.css("font-size", o), i && hiddenDiv.css("font-family", i), "off" === e.attr("wrap") && hiddenDiv.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(e.val() + "\n");
                    var a = hiddenDiv.html().replace(/\n/g, "<br>");
                    n.html(a), n.css("width", e.is(":visible") ? e.width() : t(window).width() / 2), e.css("height", n.height())
                }
            };
            t(e).each(function (e, i) {
                var o = t(i), a = o.siblings("label, i");
                n(o), i.validity.badInput && a.addClass("active")
            }), t(document).on("focus", e, function (e) {
                t(e.target).siblings("label, i").addClass("active")
            }), t(document).on("blur", e, function (e) {
                var n = t(e.target), o = !n.val(), a = !e.target.validity.badInput, r = void 0 === n.attr("placeholder");
                o && a && r && n.siblings("label, i").removeClass("active"), i(n)
            }), t(document).on("change", e, function (e) {
                var o = t(e.target);
                n(o), i(o)
            }), t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("reset", function (n) {
                var i = t(n.target);
                i.is("form") && (i.find(e).removeClass("valid").removeClass("invalid").each(function (e, n) {
                    var i = t(n), o = !i.val(), a = !i.attr("placeholder");
                    o && a && i.siblings("label, i").removeClass("active")
                }), i.find("select.initialized").each(function (e, n) {
                    var i = t(n), o = i.siblings("input.select-dropdown"), a = i.children("[selected]").val();
                    i.val(a), o.val(a)
                }))
            }), t(".hiddendiv").first().length || ($hiddenDiv = t('<div class="hiddendiv common"></div>'), t("body").append($hiddenDiv)), t(".materialize-textarea").each(o), t("body").on("keyup keydown", ".materialize-textarea", o)
        })
    }(jQuery), function (t, e, n, i) {
        "use strict";
        function o(t, e, n) {
            return setTimeout(c(t, n), e)
        }
        function a(t, e, n) {
            return!!Array.isArray(t) && (r(t, n[e], n), !0)
        }
        function r(t, e, n) {
            var o;
            if (t)
                if (t.forEach)
                    t.forEach(e, n);
                else if (t.length !== i)
                    for (o = 0; o < t.length; )
                        e.call(n, t[o], o, t), o++;
                else
                    for (o in t)
                        t.hasOwnProperty(o) && e.call(n, t[o], o, t)
        }
        function s(e, n, i) {
            var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
            return function () {
                var n = new Error("get-stack-trace"), i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", a = t.console && (t.console.warn || t.console.log);
                return a && a.call(t.console, o, i), e.apply(this, arguments)
            }
        }
        function l(t, e, n) {
            var i, o = e.prototype;
            (i = t.prototype = Object.create(o)).constructor = t, i._super = o, n && ut(i, n)
        }
        function c(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }
        function u(t, e) {
            return typeof t == pt ? t.apply(e ? e[0] || i : i, e) : t
        }
        function d(t, e) {
            return t === i ? e : t
        }
        function h(t, e, n) {
            r(g(e), function (e) {
                t.addEventListener(e, n, !1)
            })
        }
        function p(t, e, n) {
            r(g(e), function (e) {
                t.removeEventListener(e, n, !1)
            })
        }
        function f(t, e) {
            for (; t; ) {
                if (t == e)
                    return!0;
                t = t.parentNode
            }
            return!1
        }
        function m(t, e) {
            return t.indexOf(e) > -1
        }
        function g(t) {
            return t.trim().split(/\s+/g)
        }
        function v(t, e, n) {
            if (t.indexOf && !n)
                return t.indexOf(e);
            for (var i = 0; i < t.length; ) {
                if (n && t[i][n] == e || !n && t[i] === e)
                    return i;
                i++
            }
            return-1
        }
        function y(t) {
            return Array.prototype.slice.call(t, 0)
        }
        function b(t, e, n) {
            for (var i = [], o = [], a = 0; a < t.length; ) {
                var r = e ? t[a][e] : t[a];
                v(o, r) < 0 && i.push(t[a]), o[a] = r, a++
            }
            return n && (i = e ? i.sort(function (t, n) {
                return t[e] > n[e]
            }) : i.sort()), i
        }
        function x(t, e) {
            for (var n, o, a = e[0].toUpperCase() + e.slice(1), r = 0; r < dt.length; ) {
                if (n = dt[r], (o = n ? n + a : e)in t)
                    return o;
                r++
            }
            return i
        }
        function w() {
            return bt++
        }
        function k(e) {
            var n = e.ownerDocument || e;
            return n.defaultView || n.parentWindow || t
        }
        function C(t, e) {
            var n = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
                u(t.options.enable, [t]) && n.handler(e)
            }, this.init()
        }
        function S(t) {
            var e = t.options.inputClass;
            return new (e || (kt ? V : Ct ? H : wt ? Y : W))(t, T)
        }
        function T(t, e, n) {
            var i = n.pointers.length, o = n.changedPointers.length, a = e & Tt && i - o == 0, r = e & (It | At) && i - o == 0;
            n.isFirst = !!a, n.isFinal = !!r, a && (t.session = {}), n.eventType = e, M(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }
        function M(t, e) {
            var n = t.session, i = e.pointers, o = i.length;
            n.firstInput || (n.firstInput = P(e)), o > 1 && !n.firstMultiple ? n.firstMultiple = P(e) : 1 === o && (n.firstMultiple = !1);
            var a = n.firstInput, r = n.firstMultiple, s = r ? r.center : a.center, l = e.center = _(i);
            e.timeStamp = gt(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = L(s, l), e.distance = O(s, l), I(n, e), e.offsetDirection = E(e.deltaX, e.deltaY);
            var c = D(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = mt(c.x) > mt(c.y) ? c.x : c.y, e.scale = r ? R(r.pointers, i) : 1, e.rotation = r ? F(r.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, A(n, e);
            var u = t.element;
            f(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
        }
        function I(t, e) {
            var n = e.center, i = t.offsetDelta || {}, o = t.prevDelta || {}, a = t.prevInput || {};
            e.eventType !== Tt && a.eventType !== It || (o = t.prevDelta = {x: a.deltaX || 0, y: a.deltaY || 0}, i = t.offsetDelta = {x: n.x, y: n.y}), e.deltaX = o.x + (n.x - i.x), e.deltaY = o.y + (n.y - i.y)
        }
        function A(t, e) {
            var n, o, a, r, s = t.lastInterval || e, l = e.timeStamp - s.timeStamp;
            if (e.eventType != At && (l > St || s.velocity === i)) {
                var c = e.deltaX - s.deltaX, u = e.deltaY - s.deltaY, d = D(l, c, u);
                o = d.x, a = d.y, n = mt(d.x) > mt(d.y) ? d.x : d.y, r = E(c, u), t.lastInterval = e
            } else
                n = s.velocity, o = s.velocityX, a = s.velocityY, r = s.direction;
            e.velocity = n, e.velocityX = o, e.velocityY = a, e.direction = r
        }
        function P(t) {
            for (var e = [], n = 0; n < t.pointers.length; )
                e[n] = {clientX: ft(t.pointers[n].clientX), clientY: ft(t.pointers[n].clientY)}, n++;
            return{timeStamp: gt(), pointers: e, center: _(e), deltaX: t.deltaX, deltaY: t.deltaY}
        }
        function _(t) {
            var e = t.length;
            if (1 === e)
                return{x: ft(t[0].clientX), y: ft(t[0].clientY)};
            for (var n = 0, i = 0, o = 0; o < e; )
                n += t[o].clientX, i += t[o].clientY, o++;
            return{x: ft(n / e), y: ft(i / e)}
        }
        function D(t, e, n) {
            return{x: e / t || 0, y: n / t || 0}
        }
        function E(t, e) {
            return t === e ? Pt : mt(t) >= mt(e) ? t < 0 ? _t : Dt : e < 0 ? Et : Ot
        }
        function O(t, e, n) {
            n || (n = Wt);
            var i = e[n[0]] - t[n[0]], o = e[n[1]] - t[n[1]];
            return Math.sqrt(i * i + o * o)
        }
        function L(t, e, n) {
            n || (n = Wt);
            var i = e[n[0]] - t[n[0]], o = e[n[1]] - t[n[1]];
            return 180 * Math.atan2(o, i) / Math.PI
        }
        function F(t, e) {
            return L(e[1], e[0], Vt) + L(t[1], t[0], Vt)
        }
        function R(t, e) {
            return O(e[0], e[1], Vt) / O(t[0], t[1], Vt)
        }
        function W() {
            this.evEl = Nt, this.evWin = Ht, this.pressed = !1, C.apply(this, arguments)
        }
        function V() {
            this.evEl = jt, this.evWin = $t, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        function z() {
            this.evTarget = qt, this.evWin = Ut, this.started = !1, C.apply(this, arguments)
        }
        function N(t, e) {
            var n = y(t.touches), i = y(t.changedTouches);
            return e & (It | At) && (n = b(n.concat(i), "identifier", !0)), [n, i]
        }
        function H() {
            this.evTarget = Zt, this.targetIds = {}, C.apply(this, arguments)
        }
        function B(t, e) {
            var n = y(t.touches), i = this.targetIds;
            if (e & (Tt | Mt) && 1 === n.length)
                return i[n[0].identifier] = !0, [n, n];
            var o, a, r = y(t.changedTouches), s = [], l = this.target;
            if (a = n.filter(function (t) {
                return f(t.target, l)
            }), e === Tt)
                for (o = 0; o < a.length; )
                    i[a[o].identifier] = !0, o++;
            for (o = 0; o < r.length; )
                i[r[o].identifier] && s.push(r[o]), e & (It | At) && delete i[r[o].identifier], o++;
            return s.length ? [b(a.concat(s), "identifier", !0), s] : void 0
        }
        function Y() {
            C.apply(this, arguments);
            var t = c(this.handler, this);
            this.touch = new H(this.manager, t), this.mouse = new W(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }
        function j(t, e) {
            t & Tt ? (this.primaryTouch = e.changedPointers[0].identifier, $.call(this, e)) : t & (It | At) && $.call(this, e)
        }
        function $(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var n = {x: e.clientX, y: e.clientY};
                this.lastTouches.push(n);
                var i = this.lastTouches;
                setTimeout(function () {
                    var t = i.indexOf(n);
                    t > -1 && i.splice(t, 1)
                }, Gt)
            }
        }
        function X(t) {
            for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                var o = this.lastTouches[i], a = Math.abs(e - o.x), r = Math.abs(n - o.y);
                if (a <= Kt && r <= Kt)
                    return!0
            }
            return!1
        }
        function q(t, e) {
            this.manager = t, this.set(e)
        }
        function U(t) {
            if (m(t, ie))
                return ie;
            var e = m(t, oe), n = m(t, ae);
            return e && n ? ie : e || n ? e ? oe : ae : m(t, ne) ? ne : ee
        }
        function Q(t) {
            this.options = ut({}, this.defaults, t || {}), this.id = w(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = se, this.simultaneous = {}, this.requireFail = []
        }
        function Z(t) {
            return t & he ? "cancel" : t & ue ? "end" : t & ce ? "move" : t & le ? "start" : ""
        }
        function G(t) {
            return t == Ot ? "down" : t == Et ? "up" : t == _t ? "left" : t == Dt ? "right" : ""
        }
        function K(t, e) {
            var n = e.manager;
            return n ? n.get(t) : t
        }
        function J() {
            Q.apply(this, arguments)
        }
        function tt() {
            J.apply(this, arguments), this.pX = null, this.pY = null
        }
        function et() {
            J.apply(this, arguments)
        }
        function nt() {
            Q.apply(this, arguments), this._timer = null, this._input = null
        }
        function it() {
            J.apply(this, arguments)
        }
        function ot() {
            J.apply(this, arguments)
        }
        function at() {
            Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }
        function rt(t, e) {
            return e = e || {}, e.recognizers = d(e.recognizers, rt.defaults.preset), new st(t, e)
        }
        function st(t, e) {
            this.options = ut({}, rt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = S(this), this.touchAction = new q(this, this.options.touchAction), lt(this, !0), r(this.options.recognizers, function (t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }
        function lt(t, e) {
            var n = t.element;
            if (n.style) {
                var i;
                r(t.options.cssProps, function (o, a) {
                    i = x(n.style, a), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = t.oldCssProps[i] || ""
                }), e || (t.oldCssProps = {})
            }
        }
        function ct(t, n) {
            var i = e.createEvent("Event");
            i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
        }
        var ut, dt = ["", "webkit", "Moz", "MS", "ms", "o"], ht = e.createElement("div"), pt = "function", ft = Math.round, mt = Math.abs, gt = Date.now;
        ut = "function" != typeof Object.assign ? function (t) {
            if (t === i || null === t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                if (o !== i && null !== o)
                    for (var a in o)
                        o.hasOwnProperty(a) && (e[a] = o[a])
            }
            return e
        } : Object.assign;
        var vt = s(function (t, e, n) {
            for (var o = Object.keys(e), a = 0; a < o.length; )
                (!n || n && t[o[a]] === i) && (t[o[a]] = e[o[a]]), a++;
            return t
        }, "extend", "Use `assign`."), yt = s(function (t, e) {
            return vt(t, e, !0)
        }, "merge", "Use `assign`."), bt = 1, xt = /mobile|tablet|ip(ad|hone|od)|android/i, wt = "ontouchstart"in t, kt = x(t, "PointerEvent") !== i, Ct = wt && xt.test(navigator.userAgent), St = 25, Tt = 1, Mt = 2, It = 4, At = 8, Pt = 1, _t = 2, Dt = 4, Et = 8, Ot = 16, Lt = _t | Dt, Ft = Et | Ot, Rt = Lt | Ft, Wt = ["x", "y"], Vt = ["clientX", "clientY"];
        C.prototype = {handler: function () {}, init: function () {
                this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(k(this.element), this.evWin, this.domHandler)
            }, destroy: function () {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(k(this.element), this.evWin, this.domHandler)
            }};
        var zt = {mousedown: Tt, mousemove: Mt, mouseup: It}, Nt = "mousedown", Ht = "mousemove mouseup";
        l(W, C, {handler: function (t) {
                var e = zt[t.type];
                e & Tt && 0 === t.button && (this.pressed = !0), e & Mt && 1 !== t.which && (e = It), this.pressed && (e & It && (this.pressed = !1), this.callback(this.manager, e, {pointers: [t], changedPointers: [t], pointerType: "mouse", srcEvent: t}))
            }});
        var Bt = {pointerdown: Tt, pointermove: Mt, pointerup: It, pointercancel: At, pointerout: At}, Yt = {2: "touch", 3: "pen", 4: "mouse", 5: "kinect"}, jt = "pointerdown", $t = "pointermove pointerup pointercancel";
        t.MSPointerEvent && !t.PointerEvent && (jt = "MSPointerDown", $t = "MSPointerMove MSPointerUp MSPointerCancel"), l(V, C, {handler: function (t) {
                var e = this.store, n = !1, i = t.type.toLowerCase().replace("ms", ""), o = Bt[i], a = Yt[t.pointerType] || t.pointerType, r = "touch" == a, s = v(e, t.pointerId, "pointerId");
                o & Tt && (0 === t.button || r) ? s < 0 && (e.push(t), s = e.length - 1) : o & (It | At) && (n = !0), s < 0 || (e[s] = t, this.callback(this.manager, o, {pointers: e, changedPointers: [t], pointerType: a, srcEvent: t}), n && e.splice(s, 1))
            }});
        var Xt = {touchstart: Tt, touchmove: Mt, touchend: It, touchcancel: At}, qt = "touchstart", Ut = "touchstart touchmove touchend touchcancel";
        l(z, C, {handler: function (t) {
                var e = Xt[t.type];
                if (e === Tt && (this.started = !0), this.started) {
                    var n = N.call(this, t, e);
                    e & (It | At) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {pointers: n[0], changedPointers: n[1], pointerType: "touch", srcEvent: t})
                }
            }});
        var Qt = {touchstart: Tt, touchmove: Mt, touchend: It, touchcancel: At}, Zt = "touchstart touchmove touchend touchcancel";
        l(H, C, {handler: function (t) {
                var e = Qt[t.type], n = B.call(this, t, e);
                n && this.callback(this.manager, e, {pointers: n[0], changedPointers: n[1], pointerType: "touch", srcEvent: t})
            }});
        var Gt = 2500, Kt = 25;
        l(Y, C, {handler: function (t, e, n) {
                var i = "touch" == n.pointerType, o = "mouse" == n.pointerType;
                if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (i)
                        j.call(this, e, n);
                    else if (o && X.call(this, n))
                        return;
                    this.callback(t, e, n)
                }
            }, destroy: function () {
                this.touch.destroy(), this.mouse.destroy()
            }});
        var Jt = x(ht.style, "touchAction"), te = Jt !== i, ee = "auto", ne = "manipulation", ie = "none", oe = "pan-x", ae = "pan-y", re = function () {
            if (!te)
                return!1;
            var e = {}, n = t.CSS && t.CSS.supports;
            return["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
                e[i] = !n || t.CSS.supports("touch-action", i)
            }), e
        }();
        q.prototype = {set: function (t) {
                "compute" == t && (t = this.compute()), te && this.manager.element.style && re[t] && (this.manager.element.style[Jt] = t), this.actions = t.toLowerCase().trim()
            }, update: function () {
                this.set(this.manager.options.touchAction)
            }, compute: function () {
                var t = [];
                return r(this.manager.recognizers, function (e) {
                    u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), U(t.join(" "))
            }, preventDefaults: function (t) {
                var e = t.srcEvent, n = t.offsetDirection;
                if (this.manager.session.prevented)
                    e.preventDefault();
                else {
                    var i = this.actions, o = m(i, ie) && !re[ie], a = m(i, ae) && !re[ae], r = m(i, oe) && !re[oe];
                    if (o) {
                        var s = 1 === t.pointers.length, l = t.distance < 2, c = t.deltaTime < 250;
                        if (s && l && c)
                            return
                    }
                    if (!r || !a)
                        return o || a && n & Lt || r && n & Ft ? this.preventSrc(e) : void 0
                }
            }, preventSrc: function (t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }};
        var se = 1, le = 2, ce = 4, ue = 8, de = ue, he = 16;
        Q.prototype = {defaults: {}, set: function (t) {
                return ut(this.options, t), this.manager && this.manager.touchAction.update(), this
            }, recognizeWith: function (t) {
                if (a(t, "recognizeWith", this))
                    return this;
                var e = this.simultaneous;
                return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            }, dropRecognizeWith: function (t) {
                return a(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], this)
            }, requireFailure: function (t) {
                if (a(t, "requireFailure", this))
                    return this;
                var e = this.requireFail;
                return t = K(t, this), -1 === v(e, t) && (e.push(t), t.requireFailure(this)), this
            }, dropRequireFailure: function (t) {
                if (a(t, "dropRequireFailure", this))
                    return this;
                t = K(t, this);
                var e = v(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            }, hasRequireFailures: function () {
                return this.requireFail.length > 0
            }, canRecognizeWith: function (t) {
                return!!this.simultaneous[t.id]
            }, emit: function (t) {
                function e(e) {
                    n.manager.emit(e, t)
                }
                var n = this, i = this.state;
                i < ue && e(n.options.event + Z(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= ue && e(n.options.event + Z(i))
            }, tryEmit: function (t) {
                if (this.canEmit())
                    return this.emit(t);
                this.state = 32
            }, canEmit: function () {
                for (var t = 0; t < this.requireFail.length; ) {
                    if (!(this.requireFail[t].state & (32 | se)))
                        return!1;
                    t++
                }
                return!0
            }, recognize: function (t) {
                var e = ut({}, t);
                if (!u(this.options.enable, [this, e]))
                    return this.reset(), void(this.state = 32);
                this.state & (de | he | 32) && (this.state = se), this.state = this.process(e), this.state & (le | ce | ue | he) && this.tryEmit(e)
            }, process: function (t) {}, getTouchAction: function () {}, reset: function () {}}, l(J, Q, {defaults: {pointers: 1}, attrTest: function (t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            }, process: function (t) {
                var e = this.state, n = t.eventType, i = e & (le | ce), o = this.attrTest(t);
                return i && (n & At || !o) ? e | he : i || o ? n & It ? e | ue : e & le ? e | ce : le : 32
            }}), l(tt, J, {defaults: {event: "pan", threshold: 10, pointers: 1, direction: Rt}, getTouchAction: function () {
                var t = this.options.direction, e = [];
                return t & Lt && e.push(ae), t & Ft && e.push(oe), e
            }, directionTest: function (t) {
                var e = this.options, n = !0, i = t.distance, o = t.direction, a = t.deltaX, r = t.deltaY;
                return o & e.direction || (e.direction & Lt ? (o = 0 === a ? Pt : a < 0 ? _t : Dt, n = a != this.pX, i = Math.abs(t.deltaX)) : (o = 0 === r ? Pt : r < 0 ? Et : Ot, n = r != this.pY, i = Math.abs(t.deltaY))), t.direction = o, n && i > e.threshold && o & e.direction
            }, attrTest: function (t) {
                return J.prototype.attrTest.call(this, t) && (this.state & le || !(this.state & le) && this.directionTest(t))
            }, emit: function (t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = G(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }}), l(et, J, {defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
                return[ie]
            }, attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & le)
            }, emit: function (t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }}), l(nt, Q, {defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
                return[ee]
            }, process: function (t) {
                var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, a = t.deltaTime > e.time;
                if (this._input = t, !i || !n || t.eventType & (It | At) && !a)
                    this.reset();
                else if (t.eventType & Tt)
                    this.reset(), this._timer = o(function () {
                        this.state = de, this.tryEmit()
                    }, e.time, this);
                else if (t.eventType & It)
                    return de;
                return 32
            }, reset: function () {
                clearTimeout(this._timer)
            }, emit: function (t) {
                this.state === de && (t && t.eventType & It ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = gt(), this.manager.emit(this.options.event, this._input)))
            }}), l(it, J, {defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
                return[ie]
            }, attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & le)
            }}), l(ot, J, {defaults: {event: "swipe", threshold: 10, velocity: .3, direction: Lt | Ft, pointers: 1}, getTouchAction: function () {
                return tt.prototype.getTouchAction.call(this)
            }, attrTest: function (t) {
                var e, n = this.options.direction;
                return n & (Lt | Ft) ? e = t.overallVelocity : n & Lt ? e = t.overallVelocityX : n & Ft && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && mt(e) > this.options.velocity && t.eventType & It
            }, emit: function (t) {
                var e = G(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }}), l(at, Q, {defaults: {event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10}, getTouchAction: function () {
                return[ne]
            }, process: function (t) {
                var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, a = t.deltaTime < e.time;
                if (this.reset(), t.eventType & Tt && 0 === this.count)
                    return this.failTimeout();
                if (i && a && n) {
                    if (t.eventType != It)
                        return this.failTimeout();
                    var r = !this.pTime || t.timeStamp - this.pTime < e.interval, s = !this.pCenter || O(this.pCenter, t.center) < e.posThreshold;
                    if (this.pTime = t.timeStamp, this.pCenter = t.center, s && r ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps)
                        return this.hasRequireFailures() ? (this._timer = o(function () {
                            this.state = de, this.tryEmit()
                        }, e.interval, this), le) : de
                }
                return 32
            }, failTimeout: function () {
                return this._timer = o(function () {
                    this.state = 32
                }, this.options.interval, this), 32
            }, reset: function () {
                clearTimeout(this._timer)
            }, emit: function () {
                this.state == de && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }}), rt.VERSION = "2.0.7", rt.defaults = {domEvents: !1, touchAction: "compute", enable: !0, inputTarget: null, inputClass: null, preset: [[it, {enable: !1}], [et, {enable: !1}, ["rotate"]], [ot, {direction: Lt}], [tt, {direction: Lt}, ["swipe"]], [at], [at, {event: "doubletap", taps: 2}, ["tap"]], [nt]], cssProps: {userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)"}};
        st.prototype = {set: function (t) {
                return ut(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            }, stop: function (t) {
                this.session.stopped = t ? 2 : 1
            }, recognize: function (t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var n, i = this.recognizers, o = e.curRecognizer;
                    (!o || o && o.state & de) && (o = e.curRecognizer = null);
                    for (var a = 0; a < i.length; )
                        n = i[a], 2 === e.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(t), !o && n.state & (le | ce | ue) && (o = e.curRecognizer = n), a++
                }
            }, get: function (t) {
                if (t instanceof Q)
                    return t;
                for (var e = this.recognizers, n = 0; n < e.length; n++)
                    if (e[n].options.event == t)
                        return e[n];
                return null
            }, add: function (t) {
                if (a(t, "add", this))
                    return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            }, remove: function (t) {
                if (a(t, "remove", this))
                    return this;
                if (t = this.get(t)) {
                    var e = this.recognizers, n = v(e, t);
                    -1 !== n && (e.splice(n, 1), this.touchAction.update())
                }
                return this
            }, on: function (t, e) {
                if (t !== i && e !== i) {
                    var n = this.handlers;
                    return r(g(t), function (t) {
                        n[t] = n[t] || [], n[t].push(e)
                    }), this
                }
            }, off: function (t, e) {
                if (t !== i) {
                    var n = this.handlers;
                    return r(g(t), function (t) {
                        e ? n[t] && n[t].splice(v(n[t], e), 1) : delete n[t]
                    }), this
                }
            }, emit: function (t, e) {
                this.options.domEvents && ct(t, e);
                var n = this.handlers[t] && this.handlers[t].slice();
                if (n && n.length) {
                    e.type = t, e.preventDefault = function () {
                        e.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < n.length; )
                        n[i](e), i++
                }
            }, destroy: function () {
                this.element && lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }}, ut(rt, {INPUT_START: Tt, INPUT_MOVE: Mt, INPUT_END: It, INPUT_CANCEL: At, STATE_POSSIBLE: se, STATE_BEGAN: le, STATE_CHANGED: ce, STATE_ENDED: ue, STATE_RECOGNIZED: de, STATE_CANCELLED: he, STATE_FAILED: 32, DIRECTION_NONE: Pt, DIRECTION_LEFT: _t, DIRECTION_RIGHT: Dt, DIRECTION_UP: Et, DIRECTION_DOWN: Ot, DIRECTION_HORIZONTAL: Lt, DIRECTION_VERTICAL: Ft, DIRECTION_ALL: Rt, Manager: st, Input: C, TouchAction: q, TouchInput: H, MouseInput: W, PointerEventInput: V, TouchMouseInput: Y, SingleTouchInput: z, Recognizer: Q, AttrRecognizer: J, Tap: at, Pan: tt, Swipe: ot, Pinch: et, Rotate: it, Press: nt, on: h, off: p, each: r, merge: yt, extend: vt, assign: ut, inherit: l, bindFn: c, prefixed: x}), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = rt, "function" == typeof define && define.amd ? define(function () {
            return rt
        }) : "undefined" != typeof module && module.exports ? module.exports = rt : t.Hammer = rt
    }(window, document), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {def: "easeOutQuad", swing: function (t, e, n, i, o) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, o)
        }, easeInQuad: function (t, e, n, i, o) {
            return i * (e /= o) * e + n
        }, easeOutQuad: function (t, e, n, i, o) {
            return-i * (e /= o) * (e - 2) + n
        }, easeInOutQuad: function (t, e, n, i, o) {
            return(e /= o / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        }, easeInCubic: function (t, e, n, i, o) {
            return i * (e /= o) * e * e + n
        }, easeOutCubic: function (t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e + 1) + n
        }, easeInOutCubic: function (t, e, n, i, o) {
            return(e /= o / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        }, easeInQuart: function (t, e, n, i, o) {
            return i * (e /= o) * e * e * e + n
        }, easeOutQuart: function (t, e, n, i, o) {
            return-i * ((e = e / o - 1) * e * e * e - 1) + n
        }, easeInOutQuart: function (t, e, n, i, o) {
            return(e /= o / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        }, easeInQuint: function (t, e, n, i, o) {
            return i * (e /= o) * e * e * e * e + n
        }, easeOutQuint: function (t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e * e * e + 1) + n
        }, easeInOutQuint: function (t, e, n, i, o) {
            return(e /= o / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        }, easeInSine: function (t, e, n, i, o) {
            return-i * Math.cos(e / o * (Math.PI / 2)) + i + n
        }, easeOutSine: function (t, e, n, i, o) {
            return i * Math.sin(e / o * (Math.PI / 2)) + n
        }, easeInOutSine: function (t, e, n, i, o) {
            return-i / 2 * (Math.cos(Math.PI * e / o) - 1) + n
        }, easeInExpo: function (t, e, n, i, o) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n
        }, easeOutExpo: function (t, e, n, i, o) {
            return e == o ? n + i : i * (1 - Math.pow(2, -10 * e / o)) + n
        }, easeInOutExpo: function (t, e, n, i, o) {
            return 0 == e ? n : e == o ? n + i : (e /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --e)) + n
        }, easeInCirc: function (t, e, n, i, o) {
            return-i * (Math.sqrt(1 - (e /= o) * e) - 1) + n
        }, easeOutCirc: function (t, e, n, i, o) {
            return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
        }, easeInOutCirc: function (t, e, n, i, o) {
            return(e /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        }, easeInElastic: function (t, e, n, i, o) {
            var a = 1.70158, r = 0, s = i;
            if (0 == e)
                return n;
            if (1 == (e /= o))
                return n + i;
            if (r || (r = .3 * o), s < Math.abs(i)) {
                s = i;
                a = r / 4
            } else
                a = r / (2 * Math.PI) * Math.asin(i / s);
            return-s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / r) + n
        }, easeOutElastic: function (t, e, n, i, o) {
            var a = 1.70158, r = 0, s = i;
            if (0 == e)
                return n;
            if (1 == (e /= o))
                return n + i;
            if (r || (r = .3 * o), s < Math.abs(i)) {
                s = i;
                a = r / 4
            } else
                a = r / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * o - a) * (2 * Math.PI) / r) + i + n
        }, easeInOutElastic: function (t, e, n, i, o) {
            var a = 1.70158, r = 0, s = i;
            if (0 == e)
                return n;
            if (2 == (e /= o / 2))
                return n + i;
            if (r || (r = o * (.3 * 1.5)), s < Math.abs(i)) {
                s = i;
                a = r / 4
            } else
                a = r / (2 * Math.PI) * Math.asin(i / s);
            return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / r) * -.5 + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / r) * .5 + i + n
        }, easeInBack: function (t, e, n, i, o, a) {
            return void 0 == a && (a = 1.70158), i * (e /= o) * e * ((a + 1) * e - a) + n
        }, easeOutBack: function (t, e, n, i, o, a) {
            return void 0 == a && (a = 1.70158), i * ((e = e / o - 1) * e * ((a + 1) * e + a) + 1) + n
        }, easeInOutBack: function (t, e, n, i, o, a) {
            return void 0 == a && (a = 1.70158), (e /= o / 2) < 1 ? i / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + n : i / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + n
        }, easeInBounce: function (t, e, n, i, o) {
            return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n
        }, easeOutBounce: function (t, e, n, i, o) {
            return(e /= o) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        }, easeInOutBounce: function (t, e, n, i, o) {
            return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) + .5 * i + n
        }}), function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
    }(function (t, e) {
        function n(n, i) {
            var o = t(n);
            o.data("hammer") || o.data("hammer", new e(o[0], i))
        }
        t.fn.hammer = function (t) {
            return this.each(function () {
                n(this, t)
            })
        }, e.Manager.prototype.emit = function (e) {
            return function (n, i) {
                e.call(this, n, i), t(this.element).trigger({type: n, gesture: i})
            }
        }(e.Manager.prototype.emit)
    }), function (t) {
        "use strict";
        function e(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var n in arguments[e])
                        arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
            return t
        }
        function n() {
            this._done = [], this._fail = []
        }
        function i(t, e, n) {
            t.addEventListener ? t.addEventListener(e, n) : t.attachEvent("on" + e, function () {
                n.call(t)
            })
        }
        n.prototype = {execute: function (t, e) {
                var n = t.length;
                for (e = Array.prototype.slice.call(e); n--; )
                    t[n].apply(null, e)
            }, resolve: function () {
                this.execute(this._done, arguments)
            }, reject: function () {
                this.execute(this._fail, arguments)
            }, done: function (t) {
                this._done.push(t)
            }, fail: function (t) {
                this._fail.push(t)
            }};
        var o = function () {
            var t = 0;
            return function (n, i) {
                var o = this;
                o.url = n, o.options_default = {autoplay: 1, loop: 1, mute: 1, controls: 0, startTime: 0, endTime: 0}, o.options = e({}, o.options_default, i), o.videoID = o.parseURL(n), o.videoID && (o.ID = t++, o.loadAPI(), o.init())
            }
        }();
        o.prototype.parseURL = function (t) {
            var e = function (t) {
                var e = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/, n = t.match(e);
                return!(!n || 11 !== n[1].length) && n[1]
            }(t), n = function (t) {
                var e = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/, n = t.match(e);
                return!(!n || !n[3]) && n[3]
            }(t), i = function (t) {
                for (var e = t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), n = {}, i = 0, o = 0; o < e.length; o++) {
                    var a = e[o].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                    a && a[1] && a[2] && (n["ogv" === a[1] ? "ogg" : a[1]] = a[2], i = 1)
                }
                return!!i && n
            }(t);
            return e ? (this.type = "youtube", e) : n ? (this.type = "vimeo", n) : !!i && (this.type = "local", i)
        }, o.prototype.isValid = function () {
            return!!this.videoID
        }, o.prototype.on = function (t, e) {
            this.userEventsList = this.userEventsList || [], (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e)
        }, o.prototype.off = function (t, e) {
            if (this.userEventsList && this.userEventsList[t])
                if (e)
                    for (var n = 0; n < this.userEventsList[t].length; n++)
                        this.userEventsList[t][n] === e && (this.userEventsList[t][n] = !1);
                else
                    delete this.userEventsList[t]
        }, o.prototype.fire = function (t) {
            var e = [].slice.call(arguments, 1);
            if (this.userEventsList && void 0 !== this.userEventsList[t])
                for (var n in this.userEventsList[t])
                    this.userEventsList[t][n] && this.userEventsList[t][n].apply(this, e)
        }, o.prototype.play = function (t) {
            var e = this;
            e.player && ("youtube" === e.type && e.player.playVideo && (void 0 !== t && e.player.seekTo(t || 0), e.player.playVideo()), "vimeo" === e.type && (void 0 !== t && e.player.setCurrentTime(t), e.player.getPaused().then(function (t) {
                t && e.player.play()
            })), "local" === e.type && (void 0 !== t && (e.player.currentTime = t), e.player.play()))
        }, o.prototype.pause = function () {
            this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause())
        }, o.prototype.getImageURL = function (t) {
            var e = this;
            if (e.videoImage)
                t(e.videoImage);
            else {
                if ("youtube" === e.type) {
                    var n = ["maxresdefault", "sddefault", "hqdefault", "0"], i = 0, o = new Image;
                    o.onload = function () {
                        120 !== (this.naturalWidth || this.width) || i === n.length - 1 ? (e.videoImage = "https://img.youtube.com/vi/" + e.videoID + "/" + n[i] + ".jpg", t(e.videoImage)) : (i++, this.src = "https://img.youtube.com/vi/" + e.videoID + "/" + n[i] + ".jpg")
                    }, o.src = "https://img.youtube.com/vi/" + e.videoID + "/" + n[i] + ".jpg"
                }
                if ("vimeo" === e.type) {
                    var a = new XMLHttpRequest;
                    a.open("GET", "https://vimeo.com/api/v2/video/" + e.videoID + ".json", !0), a.onreadystatechange = function () {
                        if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                            var n = JSON.parse(this.responseText);
                            e.videoImage = n[0].thumbnail_large, t(e.videoImage)
                        }
                    }, a.send(), a = null
                }
            }
        }, o.prototype.getIframe = function (e) {
            var n = this;
            n.$iframe ? e(n.$iframe) : n.onAPIready(function () {
                var o;
                if (n.$iframe || ((o = document.createElement("div")).style.display = "none"), "youtube" === n.type) {
                    n.playerOptions = {}, n.playerOptions.videoId = n.videoID, n.playerOptions.playerVars = {autohide: 1, rel: 0, autoplay: 0}, n.options.controls || (n.playerOptions.playerVars.iv_load_policy = 3, n.playerOptions.playerVars.modestbranding = 1, n.playerOptions.playerVars.controls = 0, n.playerOptions.playerVars.showinfo = 0, n.playerOptions.playerVars.disablekb = 1);
                    var a, r;
                    n.playerOptions.events = {onReady: function (t) {
                            n.options.mute && t.target.mute(), n.options.autoplay && n.play(n.options.startTime), n.fire("ready", t)
                        }, onStateChange: function (t) {
                            n.options.loop && t.data === YT.PlayerState.ENDED && n.play(n.options.startTime), a || t.data !== YT.PlayerState.PLAYING || (a = 1, n.fire("started", t)), t.data === YT.PlayerState.PLAYING && n.fire("play", t), t.data === YT.PlayerState.PAUSED && n.fire("pause", t), t.data === YT.PlayerState.ENDED && n.fire("end", t), n.options.endTime && (t.data === YT.PlayerState.PLAYING ? r = setInterval(function () {
                                n.options.endTime && n.player.getCurrentTime() >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
                            }, 150) : clearInterval(r))
                        }};
                    var s = !n.$iframe;
                    if (s) {
                        var l = document.createElement("div");
                        l.setAttribute("id", n.playerID), o.appendChild(l), document.body.appendChild(o)
                    }
                    n.player = n.player || new t.YT.Player(n.playerID, n.playerOptions), s && (n.$iframe = document.getElementById(n.playerID), n.videoWidth = parseInt(n.$iframe.getAttribute("width"), 10) || 1280, n.videoHeight = parseInt(n.$iframe.getAttribute("height"), 10) || 720)
                }
                if ("vimeo" === n.type) {
                    n.playerOptions = "", n.playerOptions += "player_id=" + n.playerID, n.playerOptions += "&autopause=0", n.options.controls || (n.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), n.playerOptions += "&autoplay=" + (n.options.autoplay ? "1" : "0"), n.playerOptions += "&loop=" + (n.options.loop ? 1 : 0), n.$iframe || (n.$iframe = document.createElement("iframe"), n.$iframe.setAttribute("id", n.playerID), n.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + n.videoID + "?" + n.playerOptions), n.$iframe.setAttribute("frameborder", "0"), o.appendChild(n.$iframe), document.body.appendChild(o)), n.player = n.player || new Vimeo.Player(n.$iframe), n.player.getVideoWidth().then(function (t) {
                        n.videoWidth = t || 1280
                    }), n.player.getVideoHeight().then(function (t) {
                        n.videoHeight = t || 720
                    }), n.player.setVolume(n.options.mute ? 0 : 100);
                    var c;
                    n.player.on("timeupdate", function (t) {
                        c || n.fire("started", t), c = 1, n.options.endTime && n.options.endTime && t.seconds >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
                    }), n.player.on("play", function (t) {
                        n.fire("play", t), n.options.startTime && 0 === t.seconds && n.play(n.options.startTime)
                    }), n.player.on("pause", function (t) {
                        n.fire("pause", t)
                    }), n.player.on("ended", function (t) {
                        n.fire("end", t)
                    }), n.player.on("loaded", function (t) {
                        n.fire("ready", t)
                    })
                }
                if ("local" === n.type) {
                    if (!n.$iframe) {
                        n.$iframe = document.createElement("video"), n.options.mute && (n.$iframe.muted = !0), n.options.loop && (n.$iframe.loop = !0), n.$iframe.setAttribute("id", n.playerID), o.appendChild(n.$iframe), document.body.appendChild(o);
                        for (var u in n.videoID)
                            !function (t, e, n) {
                                var i = document.createElement("source");
                                i.src = e, i.type = n, t.appendChild(i)
                            }(n.$iframe, n.videoID[u], "video/" + u)
                    }
                    n.player = n.player || n.$iframe;
                    var d;
                    i(n.player, "playing", function (t) {
                        d || n.fire("started", t), d = 1
                    }), i(n.player, "timeupdate", function () {
                        n.options.endTime && n.options.endTime && this.currentTime >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
                    }), i(n.player, "play", function (t) {
                        n.fire("play", t)
                    }), i(n.player, "pause", function (t) {
                        n.fire("pause", t)
                    }), i(n.player, "ended", function (t) {
                        n.fire("end", t)
                    }), i(n.player, "loadedmetadata", function () {
                        n.videoWidth = this.videoWidth || 1280, n.videoHeight = this.videoHeight || 720, n.fire("ready"), n.options.autoplay && n.play(n.options.startTime)
                    })
                }
                e(n.$iframe)
            })
        }, o.prototype.init = function () {
            var t = this;
            t.playerID = "VideoWorker-" + t.ID
        };
        var a = 0, r = 0;
        o.prototype.loadAPI = function () {
            var e = this;
            if (!a || !r) {
                var n = "";
                if ("youtube" !== e.type || a || (a = 1, n = "//www.youtube.com/iframe_api"), "vimeo" !== e.type || r || (r = 1, n = "//player.vimeo.com/api/player.js"), n) {
                    "file://" === t.location.origin && (n = "http:" + n);
                    var i = document.createElement("script"), o = document.getElementsByTagName("head")[0];
                    i.src = n, o.appendChild(i), o = null, i = null
                }
            }
        };
        var s = 0, l = 0, c = new n, u = new n;
        o.prototype.onAPIready = function (e) {
            var n = this;
            if ("youtube" === n.type && ("undefined" != typeof YT && 0 !== YT.loaded || s ? "object" == typeof YT && 1 === YT.loaded ? e() : c.done(function () {
                e()
            }) : (s = 1, t.onYouTubeIframeAPIReady = function () {
                t.onYouTubeIframeAPIReady = null, c.resolve("done"), e()
            })), "vimeo" === n.type)
                if ("undefined" != typeof Vimeo || l)
                    "undefined" != typeof Vimeo ? e() : u.done(function () {
                        e()
                    });
                else {
                    l = 1;
                    var i = setInterval(function () {
                        "undefined" != typeof Vimeo && (clearInterval(i), u.resolve("done"), e())
                    }, 20)
                }
            "local" === n.type && e()
        }, t.VideoWorker = o
    }(window), function () {
        "use strict";
        if ("undefined" != typeof jarallax) {
            var t = jarallax.constructor, e = t.prototype.init;
            t.prototype.init = function () {
                var t = this;
                e.apply(t), t.video && t.video.getIframe(function (e) {
                    var n = e.parentNode;
                    t.css(e, {position: t.image.position, top: "0px", left: "0px", right: "0px", bottom: "0px", width: "100%", height: "100%", maxWidth: "none", maxHeight: "none", visibility: "hidden", margin: 0, zIndex: -1}), t.$video = e, t.image.$container.appendChild(e), n.parentNode.removeChild(n)
                })
            };
            var n = t.prototype.coverImage;
            t.prototype.coverImage = function () {
                var t = this;
                n.apply(t), t.video && "IFRAME" === t.image.$item.nodeName && t.css(t.image.$item, {height: t.image.$item.getBoundingClientRect().height + 400 + "px", marginTop: -200 + parseFloat(t.css(t.image.$item, "margin-top")) + "px"})
            };
            var i = t.prototype.initImg;
            t.prototype.initImg = function () {
                var t = this, e = i.apply(t);
                if (t.options.videoSrc || (t.options.videoSrc = t.$item.getAttribute("data-jarallax-video") || !1), t.options.videoSrc) {
                    var n = new VideoWorker(t.options.videoSrc, {startTime: t.options.videoStartTime || 0, endTime: t.options.videoEndTime || 0});
                    if (n.isValid() && (t.image.useImgTag = !0, n.on("ready", function () {
                        var e = t.onScroll;
                        t.onScroll = function () {
                            e.apply(t), t.isVisible() ? n.play() : n.pause()
                        }
                    }), n.on("started", function () {
                        t.image.$default_item = t.image.$item, t.image.$item = t.$video, t.image.width = t.options.imgWidth = t.video.videoWidth || 1280, t.image.height = t.options.imgHeight = t.video.videoHeight || 720, t.coverImage(), t.clipContainer(), t.onScroll(), t.image.$default_item && (t.image.$default_item.style.display = "none")
                    }), t.video = n, "local" !== n.type && n.getImageURL(function (e) {
                        t.image.src = e, t.init()
                    })), "local" !== n.type)
                        return!1;
                    if (!e)
                        return t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0
                }
                return e
            };
            var o = t.prototype.destroy;
            t.prototype.destroy = function () {
                var t = this;
                o.apply(t)
            }
        }
    }(), function (t) {
        "use strict";
        function e(t) {
            var e = ["O", "Moz", "ms", "Ms", "Webkit"], n = e.length;
            if (void 0 !== s.style[t])
                return!0;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); --n > - 1 && void 0 === s.style[e[n] + t]; )
                ;
            return n >= 0
        }
        function n() {
            a = t.innerWidth || document.documentElement.clientWidth, r = t.innerHeight || document.documentElement.clientHeight
        }
        function i(t, e, n) {
            t.addEventListener ? t.addEventListener(e, n) : t.attachEvent("on" + e, function () {
                n.call(t)
            })
        }
        function o(e) {
            t.requestAnimationFrame(function () {
                "scroll" !== e.type && n();
                for (var t = 0, i = g.length; t < i; t++)
                    "scroll" !== e.type && (g[t].coverImage(), g[t].clipContainer()), g[t].onScroll()
            })
        }
        Date.now || (Date.now = function () {
            return(new Date).getTime()
        }), t.requestAnimationFrame || function () {
            for (var e = ["webkit", "moz"], n = 0; n < e.length && !t.requestAnimationFrame; ++n) {
                var i = e[n];
                t.requestAnimationFrame = t[i + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i + "CancelAnimationFrame"] || t[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent) || !t.requestAnimationFrame || !t.cancelAnimationFrame) {
                var o = 0;
                t.requestAnimationFrame = function (t) {
                    var e = Date.now(), n = Math.max(o + 16, e);
                    return setTimeout(function () {
                        t(o = n)
                    }, n - e)
                }, t.cancelAnimationFrame = clearTimeout
            }
        }();
        var a, r, s = document.createElement("div"), l = e("transform"), c = e("perspective"), u = navigator.userAgent, d = u.toLowerCase().indexOf("android") > -1, h = /iPad|iPhone|iPod/.test(u) && !t.MSStream, p = u.toLowerCase().indexOf("firefox") > -1, f = u.indexOf("MSIE ") > -1 || u.indexOf("Trident/") > -1 || u.indexOf("Edge/") > -1, m = document.all && !t.atob;
        n();
        var g = [], v = function () {
            var t = 0;
            return function (e, n) {
                var i, o = this;
                if (o.$item = e, o.defaults = {type: "scroll", speed: .5, imgSrc: null, imgWidth: null, imgHeight: null, elementInViewport: null, zIndex: -100, noAndroid: !1, noIos: !0, onScroll: null, onInit: null, onDestroy: null, onCoverImage: null}, i = JSON.parse(o.$item.getAttribute("data-jarallax") || "{}"), o.options = o.extend({}, o.defaults, i, n), !(!l || d && o.options.noAndroid || h && o.options.noIos)) {
                    o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed)));
                    var a = o.options.elementInViewport;
                    a && "object" == typeof a && void 0 !== a.length && (a = a[0]), !a instanceof Element && (a = null), o.options.elementInViewport = a, o.instanceID = t++, o.image = {src: o.options.imgSrc || null, $container: null, $item: null, width: o.options.imgWidth || null, height: o.options.imgHeight || null, useImgTag: h || d || f, position: !c || p ? "absolute" : "fixed"}, o.initImg() && o.init()
                }
            }
        }();
        v.prototype.css = function (e, n) {
            if ("string" == typeof n)
                return t.getComputedStyle ? t.getComputedStyle(e).getPropertyValue(n) : e.style[n];
            n.transform && (c && (n.transform += " translateZ(0)"), n.WebkitTransform = n.MozTransform = n.msTransform = n.OTransform = n.transform);
            for (var i in n)
                e.style[i] = n[i];
            return e
        }, v.prototype.extend = function (t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var n in arguments[e])
                        arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
            return t
        }, v.prototype.initImg = function () {
            var t = this;
            return null === t.image.src && (t.image.src = t.css(t.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!t.image.src || "none" === t.image.src)
        }, v.prototype.init = function () {
            function t() {
                e.coverImage(), e.clipContainer(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), setTimeout(function () {
                    e.$item && e.css(e.$item, {"background-image": "none", "background-attachment": "scroll", "background-size": "auto"})
                }, 0)
            }
            var e = this, n = {position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none"}, i = {};
            e.$item.setAttribute("data-jarallax-original-styles", e.$item.getAttribute("style")), "static" === e.css(e.$item, "position") && e.css(e.$item, {position: "relative"}), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {zIndex: 0}), e.image.$container = document.createElement("div"), e.css(e.image.$container, n), e.css(e.image.$container, {visibility: "hidden", "z-index": e.options.zIndex}), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? (e.image.$item = document.createElement("img"), e.image.$item.setAttribute("src", e.image.src), i = e.extend({"max-width": "none"}, n, i)) : (e.image.$item = document.createElement("div"), i = e.extend({"background-position": "50% 50%", "background-size": "100% auto", "background-repeat": "no-repeat no-repeat", "background-image": 'url("' + e.image.src + '")'}, n, i));
            for (var o = 0, a = e.$item; null !== a && a !== document && 0 === o; ) {
                var r = e.css(a, "-webkit-transform") || e.css(a, "-moz-transform") || e.css(a, "transform");
                r && "none" !== r && (o = 1, e.css(e.image.$container, {transform: "translateX(0) translateY(0)"})), a = a.parentNode
            }
            (o || "opacity" === e.options.type || "scale" === e.options.type || "scale-opacity" === e.options.type) && (e.image.position = "absolute"), i.position = e.image.position, e.css(e.image.$item, i), e.image.$container.appendChild(e.image.$item), e.image.width && e.image.height ? t() : e.getImageSize(e.image.src, function (n, i) {
                e.image.width = n, e.image.height = i, t()
            }), g.push(e)
        }, v.prototype.destroy = function () {
            for (var t = this, e = 0, n = g.length; e < n; e++)
                if (g[e].instanceID === t.instanceID) {
                    g.splice(e, 1);
                    break
                }
            var i = t.$item.getAttribute("data-jarallax-original-styles");
            t.$item.removeAttribute("data-jarallax-original-styles"), "null" === i ? t.$item.removeAttribute("style") : t.$item.setAttribute("style", i), t.$clipStyles && t.$clipStyles.parentNode.removeChild(t.$clipStyles), t.image.$container.parentNode.removeChild(t.image.$container), t.options.onDestroy && t.options.onDestroy.call(t), delete t.$item.jarallax;
            for (var o in t)
                delete t[o]
        }, v.prototype.getImageSize = function (t, e) {
            if (t && e) {
                var n = new Image;
                n.onload = function () {
                    e(n.width, n.height)
                }, n.src = t
            }
        }, v.prototype.clipContainer = function () {
            if (!m) {
                var t = this, e = t.image.$container.getBoundingClientRect(), n = e.width, i = e.height;
                t.$clipStyles || (t.$clipStyles = document.createElement("style"), t.$clipStyles.setAttribute("type", "text/css"), t.$clipStyles.setAttribute("id", "#jarallax-clip-" + t.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(t.$clipStyles));
                var o = ["#jarallax-container-" + t.instanceID + " {", "   clip: rect(0 " + n + "px " + i + "px 0);", "   clip: rect(0, " + n + "px, " + i + "px, 0);", "}"].join("\n");
                t.$clipStyles.styleSheet ? t.$clipStyles.styleSheet.cssText = o : t.$clipStyles.innerHTML = o
            }
        }, v.prototype.coverImage = function () {
            var t = this;
            if (t.image.width && t.image.height) {
                var e = t.image.$container.getBoundingClientRect(), n = e.width, i = e.height, o = e.left, a = t.image.width, s = t.image.height, l = t.options.speed, c = "scroll" === t.options.type || "scroll-opacity" === t.options.type, u = 0, d = 0, h = i, p = 0, f = 0;
                c && (u = l < 0 ? l * Math.max(i, r) : l * (i + r), l > 1 ? h = Math.abs(u - r) : l < 0 ? h = u / l + Math.abs(u) : h += Math.abs(r - i) * (1 - l), u /= 2), (d = h * a / s) < n && (h = (d = n) * s / a), c ? (p = o + (n - d) / 2, f = (r - h) / 2) : (p = (n - d) / 2, f = (i - h) / 2), "absolute" === t.image.position && (p -= o), t.parallaxScrollDistance = u, t.css(t.image.$item, {width: d + "px", height: h + "px", marginLeft: p + "px", marginTop: f + "px"}), t.options.onCoverImage && t.options.onCoverImage.call(t)
            }
        }, v.prototype.isVisible = function () {
            return this.isElementInViewport || !1
        }, v.prototype.onScroll = function (t) {
            var e = this;
            if (e.image.width && e.image.height) {
                var n = e.$item.getBoundingClientRect(), i = n.top, o = n.height, s = {visibility: "visible", backgroundPosition: "50% 50%"}, l = n;
                if (e.options.elementInViewport && (l = e.options.elementInViewport.getBoundingClientRect()), e.isElementInViewport = l.bottom >= 0 && l.right >= 0 && l.top <= r && l.left <= a, t || e.isElementInViewport) {
                    var c = Math.max(0, i), u = Math.max(0, o + i), d = Math.max(0, -i), h = Math.max(0, i + o - r), p = Math.max(0, o - (i + o - r)), f = Math.max(0, -i + r - o), m = 1 - 2 * (r - i) / (r + o), g = 1;
                    if (o < r ? g = 1 - (d || h) / o : u <= r ? g = u / r : p <= r && (g = p / r), "opacity" !== e.options.type && "scale-opacity" !== e.options.type && "scroll-opacity" !== e.options.type || (s.transform = "", s.opacity = g), "scale" === e.options.type || "scale-opacity" === e.options.type) {
                        var v = 1;
                        e.options.speed < 0 ? v -= e.options.speed * g : v += e.options.speed * (1 - g), s.transform = "scale(" + v + ")"
                    }
                    if ("scroll" === e.options.type || "scroll-opacity" === e.options.type) {
                        var y = e.parallaxScrollDistance * m;
                        "absolute" === e.image.position && (y -= i), s.transform = "translateY(" + y + "px)"
                    }
                    e.css(e.image.$item, s), e.options.onScroll && e.options.onScroll.call(e, {section: n, beforeTop: c, beforeTopEnd: u, afterTop: d, beforeBottom: h, beforeBottomEnd: p, afterBottom: f, visiblePercent: g, fromViewportCenter: m})
                }
            }
        }, i(t, "scroll", o), i(t, "resize", o), i(t, "orientationchange", o), i(t, "load", o);
        var y = function (t) {
            ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
            var e, n = arguments[1], i = Array.prototype.slice.call(arguments, 2), o = t.length, a = 0;
            for (a; a < o; a++)
                if ("object" == typeof n || void 0 === n ? t[a].jarallax || (t[a].jarallax = new v(t[a], n)) : t[a].jarallax && (e = t[a].jarallax[n].apply(t[a].jarallax, i)), void 0 !== e)
                    return e;
            return t
        };
        y.constructor = v;
        var b = t.jarallax;
        if (t.jarallax = y, t.jarallax.noConflict = function () {
            return t.jarallax = b, this
        }, "undefined" != typeof jQuery) {
            var x = function () {
                var e = arguments || [];
                Array.prototype.unshift.call(e, this);
                var n = y.apply(t, e);
                return"object" != typeof n ? n : this
            };
            x.constructor = v;
            var w = jQuery.fn.jarallax;
            jQuery.fn.jarallax = x, jQuery.fn.jarallax.noConflict = function () {
                return jQuery.fn.jarallax = w, this
            }
        }
        i(t, "DOMContentLoaded", function () {
            y(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
        })
    }(window), function (t) {
        t.fn.sticky = function (e) {
            var n = {topSpacing: 0, zIndex: "", stopper: ".sticky-stopper", stickyClass: !1}, i = t.extend({}, n, e), o = "number" == typeof i.zIndex, a = 0 < t(i.stopper).length || "number" == typeof i.stopper;
            return this.each(function () {
                function e() {
                    var e = p.scrollTop(), s = h, f = n.parent().width();
                    if (d.width(f), a && "string" == typeof h && (s = t(h).offset().top - r - l), u < e) {
                        if (i.stickyClass && n.addClass(i.stickyClass), n.after(d).css({position: "fixed", top: l, width: f}), o && n.css({zIndex: c}), a && s < e) {
                            var m = s - e + l;
                            n.css({top: m})
                        }
                    } else
                        i.stickyClass && n.removeClass(i.stickyClass), n.css({position: "static", top: null, left: null, width: "auto"}), d.remove()
                }
                var n = t(this), r = n.outerHeight(), s = n.outerWidth(), l = i.topSpacing, c = i.zIndex, u = n.offset().top - l, d = t("<div></div>").width(s).height(r).addClass("sticky-placeholder"), h = i.stopper, p = t(window);
                p.innerHeight() > r && (p.bind("scroll", e), p.bind("load", e), p.bind("resize", e))
            })
        }
    }(jQuery), function (t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e()
    }(this, function () {
        "use strict";
        return function (t, e, n, i) {
            var o = {features: null, bind: function (t, e, n, i) {
                    var o = (i ? "remove" : "add") + "EventListener";
                    e = e.split(" ");
                    for (var a = 0; a < e.length; a++)
                        e[a] && t[o](e[a], n, !1)
                }, isArray: function (t) {
                    return t instanceof Array
                }, createEl: function (t, e) {
                    var n = document.createElement(e || "div");
                    return t && (n.className = t), n
                }, getScrollY: function () {
                    var t = window.pageYOffset;
                    return void 0 !== t ? t : document.documentElement.scrollTop
                }, unbind: function (t, e, n) {
                    o.bind(t, e, n, !0)
                }, removeClass: function (t, e) {
                    var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                }, addClass: function (t, e) {
                    o.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
                }, hasClass: function (t, e) {
                    return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                }, getChildByClass: function (t, e) {
                    for (var n = t.firstChild; n; ) {
                        if (o.hasClass(n, e))
                            return n;
                        n = n.nextSibling
                    }
                }, arraySearch: function (t, e, n) {
                    for (var i = t.length; i--; )
                        if (t[i][n] === e)
                            return i;
                    return-1
                }, extend: function (t, e, n) {
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            if (n && t.hasOwnProperty(i))
                                continue;
                            t[i] = e[i]
                        }
                }, easing: {sine: {out: function (t) {
                            return Math.sin(t * (Math.PI / 2))
                        }, inOut: function (t) {
                            return-(Math.cos(Math.PI * t) - 1) / 2
                        }}, cubic: {out: function (t) {
                            return--t * t * t + 1
                        }}}, detectFeatures: function () {
                    if (o.features)
                        return o.features;
                    var t = o.createEl().style, e = "", n = {};
                    if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart"in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                        var i = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && 8 > a && (n.isOldIOSPhone = !0)
                        }
                        var r = i.match(/Android\s([0-9\.]*)/), s = r ? r[1] : 0;
                        (s = parseFloat(s)) >= 1 && (4.4 > s && (n.isOldAndroid = !0), n.androidVersion = s), n.isMobileOpera = /opera mini|opera mobi/i.test(i)
                    }
                    for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], h = 0; 4 > h; h++) {
                        e = d[h];
                        for (var p = 0; 3 > p; p++)
                            l = u[p], c = e + (e ? l.charAt(0).toUpperCase() + l.slice(1) : l), !n[l] && c in t && (n[l] = c);
                        e && !n.raf && (e = e.toLowerCase(), n.raf = window[e + "RequestAnimationFrame"], n.raf && (n.caf = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"]))
                    }
                    if (!n.raf) {
                        var f = 0;
                        n.raf = function (t) {
                            var e = (new Date).getTime(), n = Math.max(0, 16 - (e - f)), i = window.setTimeout(function () {
                                t(e + n)
                            }, n);
                            return f = e + n, i
                        }, n.caf = function (t) {
                            clearTimeout(t)
                        }
                    }
                    return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
                }};
            o.detectFeatures(), o.features.oldIE && (o.bind = function (t, e, n, i) {
                e = e.split(" ");
                for (var o, a = (i ? "detach" : "attach") + "Event", r = 0; r < e.length; r++)
                    if (o = e[r])
                        if ("object" == typeof n && n.handleEvent) {
                            if (i) {
                                if (!n["oldIE" + o])
                                    return!1
                            } else
                                n["oldIE" + o] = function () {
                                    n.handleEvent.call(n)
                                };
                            t[a]("on" + o, n["oldIE" + o])
                        } else
                            t[a]("on" + o, n)
            });
            var a = this, r = {allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function (t) {
                    return"A" === t.tagName
                }, getDoubleTapZoom: function (t, e) {
                    return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33
                }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit"};
            o.extend(r, i);
            var s, l, c, u, d, h, p, f, m, g, v, y, b, x, w, k, C, S, T, M, I, A, P, _, D, E, O, L, F, R, W, V, z, N, H, B, Y, j, $, X, q, U, Q, Z, G, K, J, tt, et, nt, it, ot, at, rt, st, lt, ct = {x: 0, y: 0}, ut = {x: 0, y: 0}, dt = {x: 0, y: 0}, ht = {}, pt = 0, ft = {}, mt = {x: 0, y: 0}, gt = 0, vt = !0, yt = [], bt = {}, xt = !1, wt = function (t, e) {
                o.extend(a, e.publicMethods), yt.push(t)
            }, kt = function (t) {
                var e = Ue();
                return t > e - 1 ? t - e : 0 > t ? e + t : t
            }, Ct = {}, St = function (t, e) {
                return Ct[t] || (Ct[t] = []), Ct[t].push(e)
            }, Tt = function (t) {
                var e = Ct[t];
                if (e) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var i = 0; i < e.length; i++)
                        e[i].apply(a, n)
                }
            }, Mt = function () {
                return(new Date).getTime()
            }, It = function (t) {
                rt = t, a.bg.style.opacity = t * r.bgOpacity
            }, At = function (t, e, n, i, o) {
                (!xt || o && o !== a.currItem) && (i /= o ? o.fitRatio : a.currItem.fitRatio), t[A] = y + e + "px, " + n + "px" + b + " scale(" + i + ")"
            }, Pt = function (t) {
                et && (t && (g > a.currItem.fitRatio ? xt || (rn(a.currItem, !1, !0), xt = !0) : xt && (rn(a.currItem), xt = !1)), At(et, dt.x, dt.y, g))
            }, _t = function (t) {
                t.container && At(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
            }, Dt = function (t, e) {
                e[A] = y + t + "px, 0px" + b
            }, Et = function (t, e) {
                if (!r.loop && e) {
                    var n = u + (mt.x * pt - t) / mt.x, i = Math.round(t - pe.x);
                    (0 > n && i > 0 || n >= Ue() - 1 && 0 > i) && (t = pe.x + i * r.mainScrollEndFriction)
                }
                pe.x = t, Dt(t, d)
            }, Ot = function (t, e) {
                var n = fe[t] - ft[t];
                return ut[t] + ct[t] + n - n * (e / v)
            }, Lt = function (t, e) {
                t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
            }, Ft = function (t) {
                t.x = Math.round(t.x), t.y = Math.round(t.y)
            }, Rt = null, Wt = function () {
                Rt && (o.unbind(document, "mousemove", Wt), o.addClass(t, "pswp--has_mouse"), r.mouseUsed = !0, Tt("mouseUsed")), Rt = setTimeout(function () {
                    Rt = null
                }, 100)
            }, Vt = function () {
                o.bind(document, "keydown", a), W.transform && o.bind(a.scrollWrap, "click", a), r.mouseUsed || o.bind(document, "mousemove", Wt), o.bind(window, "resize scroll", a), Tt("bindEvents")
            }, zt = function () {
                o.unbind(window, "resize", a), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", Wt), W.transform && o.unbind(a.scrollWrap, "click", a), j && o.unbind(window, p, a), Tt("unbindEvents")
            }, Nt = function (t, e) {
                var n = en(a.currItem, ht, t);
                return e && (tt = n), n
            }, Ht = function (t) {
                return t || (t = a.currItem), t.initialZoomLevel
            }, Bt = function (t) {
                return t || (t = a.currItem), t.w > 0 ? r.maxSpreadZoom : 1
            }, Yt = function (t, e, n, i) {
                return i === a.currItem.initialZoomLevel ? (n[t] = a.currItem.initialPosition[t], !0) : (n[t] = Ot(t, i), n[t] > e.min[t] ? (n[t] = e.min[t], !0) : n[t] < e.max[t] && (n[t] = e.max[t], !0))
            }, jt = function () {
                if (A) {
                    var e = W.perspective && !_;
                    return y = "translate" + (e ? "3d(" : "("), void(b = W.perspective ? ", 0px)" : ")")
                }
                A = "left", o.addClass(t, "pswp--ie"), Dt = function (t, e) {
                    e.left = t + "px"
                }, _t = function (t) {
                    var e = t.fitRatio > 1 ? 1 : t.fitRatio, n = t.container.style, i = e * t.w, o = e * t.h;
                    n.width = i + "px", n.height = o + "px", n.left = t.initialPosition.x + "px", n.top = t.initialPosition.y + "px"
                }, Pt = function () {
                    if (et) {
                        var t = et, e = a.currItem, n = e.fitRatio > 1 ? 1 : e.fitRatio, i = n * e.w, o = n * e.h;
                        t.width = i + "px", t.height = o + "px", t.left = dt.x + "px", t.top = dt.y + "px"
                    }
                }
            }, $t = function (t) {
                var e = "";
                r.escKey && 27 === t.keyCode ? e = "close" : r.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, a[e]()))
            }, Xt = function (t) {
                t && (q || X || nt || B) && (t.preventDefault(), t.stopPropagation())
            }, qt = function () {
                a.setScrollOffset(0, o.getScrollY())
            }, Ut = {}, Qt = 0, Zt = function (t) {
                Ut[t] && (Ut[t].raf && E(Ut[t].raf), Qt--, delete Ut[t])
            }, Gt = function (t) {
                Ut[t] && Zt(t), Ut[t] || (Qt++, Ut[t] = {})
            }, Kt = function () {
                for (var t in Ut)
                    Ut.hasOwnProperty(t) && Zt(t)
            }, Jt = function (t, e, n, i, o, a, r) {
                var s, l = Mt();
                Gt(t);
                var c = function () {
                    if (Ut[t]) {
                        if ((s = Mt() - l) >= i)
                            return Zt(t), a(n), void(r && r());
                        a((n - e) * o(s / i) + e), Ut[t].raf = D(c)
                    }
                };
                c()
            }, te = {shout: Tt, listen: St, viewportSize: ht, options: r, isMainScrollAnimating: function () {
                    return nt
                }, getZoomLevel: function () {
                    return g
                }, getCurrentIndex: function () {
                    return u
                }, isDragging: function () {
                    return j
                }, isZooming: function () {
                    return G
                }, setScrollOffset: function (t, e) {
                    ft.x = t, R = ft.y = e, Tt("updateScrollOffset", ft)
                }, applyZoomPan: function (t, e, n, i) {
                    dt.x = e, dt.y = n, g = t, Pt(i)
                }, init: function () {
                    if (!s && !l) {
                        var n;
                        a.framework = o, a.template = t, a.bg = o.getChildByClass(t, "pswp__bg"), O = t.className, s = !0, W = o.detectFeatures(), D = W.raf, E = W.caf, A = W.transform, F = W.oldIE, a.scrollWrap = o.getChildByClass(t, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), d = a.container.style, a.itemHolders = k = [{el: a.container.children[0], wrap: 0, index: -1}, {el: a.container.children[1], wrap: 0, index: -1}, {el: a.container.children[2], wrap: 0, index: -1}], k[0].el.style.display = k[2].el.style.display = "none", jt(), m = {resize: a.updateSize, scroll: qt, keydown: $t, click: Xt};
                        var i = W.isOldIOSPhone || W.isOldAndroid || W.isMobileOpera;
                        for (W.animationName && W.transform && !i || (r.showAnimationDuration = r.hideAnimationDuration = 0), n = 0; n < yt.length; n++)
                            a["init" + yt[n]]();
                        e && (a.ui = new e(a, o)).init(), Tt("firstUpdate"), u = u || r.index || 0, (isNaN(u) || 0 > u || u >= Ue()) && (u = 0), a.currItem = qe(u), (W.isOldIOSPhone || W.isOldAndroid) && (vt = !1), t.setAttribute("aria-hidden", "false"), r.modal && (vt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = o.getScrollY() + "px")), void 0 === R && (Tt("initialLayout"), R = L = o.getScrollY());
                        var c = "pswp--open ";
                        for (r.mainClass && (c += r.mainClass + " "), r.showHideOpacity && (c += "pswp--animate_opacity "), c += _?"pswp--touch":"pswp--notouch", c += W.animationName?" pswp--css_animation":"", c += W.svg?" pswp--svg":"", o.addClass(t, c), a.updateSize(), h = - 1, gt = null, n = 0; 3 > n; n++)
                            Dt((n + h) * mt.x, k[n].el.style);
                        F || o.bind(a.scrollWrap, f, a), St("initialZoomInEnd", function () {
                            a.setContent(k[0], u - 1), a.setContent(k[2], u + 1), k[0].el.style.display = k[2].el.style.display = "block", r.focus && t.focus(), Vt()
                        }), a.setContent(k[1], u), a.updateCurrItem(), Tt("afterInit"), vt || (x = setInterval(function () {
                            Qt || j || G || g !== a.currItem.initialZoomLevel || a.updateSize()
                        }, 1e3)), o.addClass(t, "pswp--visible")
                    }
                }, close: function () {
                    s && (s = !1, l = !0, Tt("close"), zt(), Ze(a.currItem, null, !0, a.destroy))
                }, destroy: function () {
                    Tt("destroy"), Ye && clearTimeout(Ye), t.setAttribute("aria-hidden", "true"), t.className = O, x && clearInterval(x), o.unbind(a.scrollWrap, f, a), o.unbind(window, "scroll", a), be(), Kt(), Ct = null
                }, panTo: function (t, e, n) {
                    n || (t > tt.min.x ? t = tt.min.x : t < tt.max.x && (t = tt.max.x), e > tt.min.y ? e = tt.min.y : e < tt.max.y && (e = tt.max.y)), dt.x = t, dt.y = e, Pt()
                }, handleEvent: function (t) {
                    t = t || window.event, m[t.type] && m[t.type](t)
                }, goTo: function (t) {
                    var e = (t = kt(t)) - u;
                    gt = e, u = t, a.currItem = qe(u), pt -= e, Et(mt.x * pt), Kt(), nt = !1, a.updateCurrItem()
                }, next: function () {
                    a.goTo(u + 1)
                }, prev: function () {
                    a.goTo(u - 1)
                }, updateCurrZoomItem: function (t) {
                    if (t && Tt("beforeChange", 0), k[1].el.children.length) {
                        var e = k[1].el.children[0];
                        et = o.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                    } else
                        et = null;
                    tt = a.currItem.bounds, v = g = a.currItem.initialZoomLevel, dt.x = tt.center.x, dt.y = tt.center.y, t && Tt("afterChange")
                }, invalidateCurrItems: function () {
                    w = !0;
                    for (var t = 0; 3 > t; t++)
                        k[t].item && (k[t].item.needsUpdate = !0)
                }, updateCurrItem: function (t) {
                    if (0 !== gt) {
                        var e, n = Math.abs(gt);
                        if (!(t && 2 > n)) {
                            a.currItem = qe(u), xt = !1, Tt("beforeChange", gt), n >= 3 && (h += gt + (gt > 0 ? -3 : 3), n = 3);
                            for (var i = 0; n > i; i++)
                                gt > 0 ? (e = k.shift(), k[2] = e, h++, Dt((h + 2) * mt.x, e.el.style), a.setContent(e, u - n + i + 1 + 1)) : (e = k.pop(), k.unshift(e), h--, Dt(h * mt.x, e.el.style), a.setContent(e, u + n - i - 1 - 1));
                            if (et && 1 === Math.abs(gt)) {
                                var o = qe(C);
                                o.initialZoomLevel !== g && (en(o, ht), rn(o), _t(o))
                            }
                            gt = 0, a.updateCurrZoomItem(), C = u, Tt("afterChange")
                        }
                    }
                }, updateSize: function (e) {
                    if (!vt && r.modal) {
                        var n = o.getScrollY();
                        if (R !== n && (t.style.top = n + "px", R = n), !e && bt.x === window.innerWidth && bt.y === window.innerHeight)
                            return;
                        bt.x = window.innerWidth, bt.y = window.innerHeight, t.style.height = bt.y + "px"
                    }
                    if (ht.x = a.scrollWrap.clientWidth, ht.y = a.scrollWrap.clientHeight, qt(), mt.x = ht.x + Math.round(ht.x * r.spacing), mt.y = ht.y, Et(mt.x * pt), Tt("beforeResize"), void 0 !== h) {
                        for (var i, s, l, c = 0; 3 > c; c++)
                            i = k[c], Dt((c + h) * mt.x, i.el.style), l = u + c - 1, r.loop && Ue() > 2 && (l = kt(l)), s = qe(l), s && (w || s.needsUpdate || !s.bounds) ? (a.cleanSlide(s), a.setContent(i, l), 1 === c && (a.currItem = s, a.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && a.setContent(i, l), s && s.container && (en(s, ht), rn(s), _t(s));
                        w = !1
                    }
                    v = g = a.currItem.initialZoomLevel, (tt = a.currItem.bounds) && (dt.x = tt.center.x, dt.y = tt.center.y, Pt(!0)), Tt("resize")
                }, zoomTo: function (t, e, n, i, a) {
                    e && (v = g, fe.x = Math.abs(e.x) - dt.x, fe.y = Math.abs(e.y) - dt.y, Lt(ut, dt));
                    var r = Nt(t, !1), s = {};
                    Yt("x", r, s, t), Yt("y", r, s, t);
                    var l = g, c = {x: dt.x, y: dt.y};
                    Ft(s);
                    var u = function (e) {
                        1 === e ? (g = t, dt.x = s.x, dt.y = s.y) : (g = (t - l) * e + l, dt.x = (s.x - c.x) * e + c.x, dt.y = (s.y - c.y) * e + c.y), a && a(e), Pt(1 === e)
                    };
                    n ? Jt("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, u) : u(1)
                }}, ee = {}, ne = {}, ie = {}, oe = {}, ae = {}, re = [], se = {}, le = [], ce = {}, ue = 0, de = {x: 0, y: 0}, he = 0, pe = {x: 0, y: 0}, fe = {x: 0, y: 0}, me = {x: 0, y: 0}, ge = function (t, e) {
                return t.x === e.x && t.y === e.y
            }, ve = function (t, e) {
                return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25
            }, ye = function (t, e) {
                return ce.x = Math.abs(t.x - e.x), ce.y = Math.abs(t.y - e.y), Math.sqrt(ce.x * ce.x + ce.y * ce.y)
            }, be = function () {
                U && (E(U), U = null)
            }, xe = function () {
                j && (U = D(xe), Re())
            }, we = function () {
                return!("fit" === r.scaleMode && g === a.currItem.initialZoomLevel)
            }, ke = function (t, e) {
                return!(!t || t === document) && (!(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (e(t) ? t : ke(t.parentNode, e)))
            }, Ce = {}, Se = function (t, e) {
                return Ce.prevent = !ke(t.target, r.isClickableElement), Tt("preventDragEvent", t, e, Ce), Ce.prevent
            }, Te = function (t, e) {
                return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
            }, Me = function (t, e, n) {
                n.x = .5 * (t.x + e.x), n.y = .5 * (t.y + e.y)
            }, Ie = function (t, e, n) {
                if (t - z > 50) {
                    var i = le.length > 2 ? le.shift() : {};
                    i.x = e, i.y = n, le.push(i), z = t
                }
            }, Ae = function () {
                var t = dt.y - a.currItem.initialPosition.y;
                return 1 - Math.abs(t / (ht.y / 2))
            }, Pe = {}, _e = {}, De = [], Ee = function (t) {
                for (; De.length > 0; )
                    De.pop();
                return P ? (lt = 0, re.forEach(function (t) {
                    0 === lt ? De[0] = t : 1 === lt && (De[1] = t), lt++
                })) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (De[0] = Te(t.touches[0], Pe), t.touches.length > 1 && (De[1] = Te(t.touches[1], _e))) : (Pe.x = t.pageX, Pe.y = t.pageY, Pe.id = "", De[0] = Pe), De
            }, Oe = function (t, e) {
                var n, i, o, s, l = dt[t] + e[t], c = e[t] > 0, u = pe.x + e.x, d = pe.x - se.x;
                return n = l > tt.min[t] || l < tt.max[t] ? r.panEndFriction : 1, l = dt[t] + e[t] * n, !r.allowPanToNext && g !== a.currItem.initialZoomLevel || (et ? "h" !== it || "x" !== t || X || (c ? (l > tt.min[t] && (n = r.panEndFriction, tt.min[t] - l, i = tt.min[t] - ut[t]), (0 >= i || 0 > d) && Ue() > 1 ? (s = u, 0 > d && u > se.x && (s = se.x)) : tt.min.x !== tt.max.x && (o = l)) : (l < tt.max[t] && (n = r.panEndFriction, l - tt.max[t], i = ut[t] - tt.max[t]), (0 >= i || d > 0) && Ue() > 1 ? (s = u, d > 0 && u < se.x && (s = se.x)) : tt.min.x !== tt.max.x && (o = l))) : s = u, "x" !== t) ? void(nt || Q || g > a.currItem.fitRatio && (dt[t] += e[t] * n)) : (void 0 !== s && (Et(s, !0), Q = s !== se.x), tt.min.x !== tt.max.x && (void 0 !== o ? dt.x = o : Q || (dt.x += e.x * n)), void 0 !== s)
            }, Le = function (t) {
                if (!("mousedown" === t.type && t.button > 0)) {
                    if (Xe)
                        return void t.preventDefault();
                    if (!Y || "mousedown" !== t.type) {
                        if (Se(t, !0) && t.preventDefault(), Tt("pointerDown"), P) {
                            var e = o.arraySearch(re, t.pointerId, "id");
                            0 > e && (e = re.length), re[e] = {x: t.pageX, y: t.pageY, id: t.pointerId}
                        }
                        var n = Ee(t), i = n.length;
                        Z = null, Kt(), j && 1 !== i || (j = ot = !0, o.bind(window, p, a), H = st = at = B = Q = q = $ = X = !1, it = null, Tt("firstTouchStart", n), Lt(ut, dt), ct.x = ct.y = 0, Lt(oe, n[0]), Lt(ae, oe), se.x = mt.x * pt, le = [{x: oe.x, y: oe.y}], z = V = Mt(), Nt(g, !0), be(), xe()), !G && i > 1 && !nt && !Q && (v = g, X = !1, G = $ = !0, ct.y = ct.x = 0, Lt(ut, dt), Lt(ee, n[0]), Lt(ne, n[1]), Me(ee, ne, me), fe.x = Math.abs(me.x) - dt.x, fe.y = Math.abs(me.y) - dt.y, K = J = ye(ee, ne))
                    }
                }
            }, Fe = function (t) {
                if (t.preventDefault(), P) {
                    var e = o.arraySearch(re, t.pointerId, "id");
                    if (e > -1) {
                        var n = re[e];
                        n.x = t.pageX, n.y = t.pageY
                    }
                }
                if (j) {
                    var i = Ee(t);
                    if (it || q || G)
                        Z = i;
                    else if (pe.x !== mt.x * pt)
                        it = "h";
                    else {
                        var a = Math.abs(i[0].x - oe.x) - Math.abs(i[0].y - oe.y);
                        Math.abs(a) >= 10 && (it = a > 0 ? "h" : "v", Z = i)
                    }
                }
            }, Re = function () {
                if (Z) {
                    var t = Z.length;
                    if (0 !== t)
                        if (Lt(ee, Z[0]), ie.x = ee.x - oe.x, ie.y = ee.y - oe.y, G && t > 1) {
                            if (oe.x = ee.x, oe.y = ee.y, !ie.x && !ie.y && ge(Z[1], ne))
                                return;
                            Lt(ne, Z[1]), X || (X = !0, Tt("zoomGestureStarted"));
                            var e = ye(ee, ne), n = He(e);
                            n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (st = !0);
                            var i = 1, o = Ht(), s = Bt();
                            if (o > n)
                                if (r.pinchToClose && !st && v <= a.currItem.initialZoomLevel) {
                                    var l = 1 - (o - n) / (o / 1.2);
                                    It(l), Tt("onPinchClose", l), at = !0
                                } else
                                    (i = (o - n) / o) > 1 && (i = 1), n = o - i * (o / 3);
                            else
                                n > s && ((i = (n - s) / (6 * o)) > 1 && (i = 1), n = s + i * o);
                            0 > i && (i = 0), K = e, Me(ee, ne, de), ct.x += de.x - me.x, ct.y += de.y - me.y, Lt(me, de), dt.x = Ot("x", n), dt.y = Ot("y", n), H = n > g, g = n, Pt()
                        } else {
                            if (!it)
                                return;
                            if (ot && (ot = !1, Math.abs(ie.x) >= 10 && (ie.x -= Z[0].x - ae.x), Math.abs(ie.y) >= 10 && (ie.y -= Z[0].y - ae.y)), oe.x = ee.x, oe.y = ee.y, 0 === ie.x && 0 === ie.y)
                                return;
                            if ("v" === it && r.closeOnVerticalDrag && !we()) {
                                ct.y += ie.y, dt.y += ie.y;
                                var c = Ae();
                                return B = !0, Tt("onVerticalDrag", c), It(c), void Pt()
                            }
                            Ie(Mt(), ee.x, ee.y), q = !0, tt = a.currItem.bounds, Oe("x", ie) || (Oe("y", ie), Ft(dt), Pt())
                        }
                }
            }, We = function (t) {
                if (W.isOldAndroid) {
                    if (Y && "mouseup" === t.type)
                        return;
                    t.type.indexOf("touch") > -1 && (clearTimeout(Y), Y = setTimeout(function () {
                        Y = 0
                    }, 600))
                }
                Tt("pointerUp"), Se(t, !1) && t.preventDefault();
                var e;
                if (P) {
                    var n = o.arraySearch(re, t.pointerId, "id");
                    if (n > -1)
                        if (e = re.splice(n, 1)[0], navigator.pointerEnabled)
                            e.type = t.pointerType || "mouse";
                        else {
                            var i = {4: "mouse", 2: "touch", 3: "pen"};
                            e.type = i[t.pointerType], e.type || (e.type = t.pointerType || "mouse")
                        }
                }
                var s, l = Ee(t), c = l.length;
                if ("mouseup" === t.type && (c = 0), 2 === c)
                    return Z = null, !0;
                1 === c && Lt(ae, l[0]), 0 !== c || it || nt || (e || ("mouseup" === t.type ? e = {x: t.pageX, y: t.pageY, type: "mouse"} : t.changedTouches && t.changedTouches[0] && (e = {x: t.changedTouches[0].pageX, y: t.changedTouches[0].pageY, type: "touch"})), Tt("touchRelease", t, e));
                var u = -1;
                if (0 === c && (j = !1, o.unbind(window, p, a), be(), G ? u = 0 : -1 !== he && (u = Mt() - he)), he = 1 === c ? Mt() : -1, s = -1 !== u && 150 > u ? "zoom" : "swipe", G && 2 > c && (G = !1, 1 === c && (s = "zoomPointerUp"), Tt("zoomGestureEnded")), Z = null, q || X || nt || B)
                    if (Kt(), N || (N = Ve()), N.calculateSwipeSpeed("x"), B)
                        if (Ae() < r.verticalDragRange)
                            a.close();
                        else {
                            var d = dt.y, h = rt;
                            Jt("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (t) {
                                dt.y = (a.currItem.initialPosition.y - d) * t + d, It((1 - h) * t + h), Pt()
                            }), Tt("onVerticalDrag", 1)
                        }
                    else {
                        if ((Q || nt) && 0 === c) {
                            if (Ne(s, N))
                                return;
                            s = "zoomPointerUp"
                        }
                        if (!nt)
                            return"swipe" !== s ? void Be() : void(!Q && g > a.currItem.fitRatio && ze(N))
                    }
            }, Ve = function () {
                var t, e, n = {lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function (i) {
                        le.length > 1 ? (t = Mt() - z + 50, e = le[le.length - 2][i]) : (t = Mt() - V, e = ae[i]), n.lastFlickOffset[i] = oe[i] - e, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / t : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                    }, calculateOverBoundsAnimOffset: function (t, e) {
                        n.backAnimStarted[t] || (dt[t] > tt.min[t] ? n.backAnimDestination[t] = tt.min[t] : dt[t] < tt.max[t] && (n.backAnimDestination[t] = tt.max[t]), void 0 !== n.backAnimDestination[t] && (n.slowDownRatio[t] = .7, n.slowDownRatioReverse[t] = 1 - n.slowDownRatio[t], n.speedDecelerationRatioAbs[t] < .05 && (n.lastFlickSpeed[t] = 0, n.backAnimStarted[t] = !0, Jt("bounceZoomPan" + t, dt[t], n.backAnimDestination[t], e || 300, o.easing.sine.out, function (e) {
                            dt[t] = e, Pt()
                        }))))
                    }, calculateAnimOffset: function (t) {
                        n.backAnimStarted[t] || (n.speedDecelerationRatio[t] = n.speedDecelerationRatio[t] * (n.slowDownRatio[t] + n.slowDownRatioReverse[t] - n.slowDownRatioReverse[t] * n.timeDiff / 10), n.speedDecelerationRatioAbs[t] = Math.abs(n.lastFlickSpeed[t] * n.speedDecelerationRatio[t]), n.distanceOffset[t] = n.lastFlickSpeed[t] * n.speedDecelerationRatio[t] * n.timeDiff, dt[t] += n.distanceOffset[t])
                    }, panAnimLoop: function () {
                        return Ut.zoomPan && (Ut.zoomPan.raf = D(n.panAnimLoop), n.now = Mt(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Pt(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (dt.x = Math.round(dt.x), dt.y = Math.round(dt.y), Pt(), void Zt("zoomPan")) : void 0
                    }};
                return n
            }, ze = function (t) {
                return t.calculateSwipeSpeed("y"), tt = a.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (Gt("zoomPan"), t.lastNow = Mt(), void t.panAnimLoop())
            }, Ne = function (t, e) {
                var n;
                nt || (ue = u);
                var i;
                if ("swipe" === t) {
                    var s = oe.x - ae.x, l = e.lastFlickDist.x < 10;
                    s > 30 && (l || e.lastFlickOffset.x > 20) ? i = -1 : -30 > s && (l || e.lastFlickOffset.x < -20) && (i = 1)
                }
                var c;
                i && (u += i, 0 > u ? (u = r.loop ? Ue() - 1 : 0, c = !0) : u >= Ue() && (u = r.loop ? 0 : Ue() - 1, c = !0), (!c || r.loop) && (gt += i, pt -= i, n = !0));
                var d, h = mt.x * pt, p = Math.abs(h - pe.x);
                return n || h > pe.x == e.lastFlickSpeed.x > 0 ? (d = Math.abs(e.lastFlickSpeed.x) > 0 ? p / Math.abs(e.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, ue === u && (n = !1), nt = !0, Tt("mainScrollAnimStart"), Jt("mainScroll", pe.x, h, d, o.easing.cubic.out, Et, function () {
                    Kt(), nt = !1, ue = -1, (n || ue !== u) && a.updateCurrItem(), Tt("mainScrollAnimComplete")
                }), n && a.updateCurrItem(!0), n
            }, He = function (t) {
                return 1 / J * t * v
            }, Be = function () {
                var t = g, e = Ht(), n = Bt();
                e > g ? t = e : g > n && (t = n);
                var i, r = rt;
                return at && !H && !st && e > g ? (a.close(), !0) : (at && (i = function (t) {
                    It((1 - r) * t + r)
                }), a.zoomTo(t, 0, 200, o.easing.cubic.out, i), !0)
            };
            wt("Gestures", {publicMethods: {initGestures: function () {
                        var t = function (t, e, n, i, o) {
                            S = t + e, T = t + n, M = t + i, I = o ? t + o : ""
                        };
                        (P = W.pointerEvent) && W.touch && (W.touch = !1), P ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : W.touch ? (t("touch", "start", "move", "end", "cancel"), _ = !0) : t("mouse", "down", "move", "up"), p = T + " " + M + " " + I, f = S, P && !_ && (_ = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = _, m[S] = Le, m[T] = Fe, m[M] = We, I && (m[I] = m[M]), W.touch && (f += " mousedown", p += " mousemove mouseup", m.mousedown = m[S], m.mousemove = m[T], m.mouseup = m[M]), _ || (r.allowPanToNext = !1)
                    }}});
            var Ye, je, $e, Xe, qe, Ue, Qe, Ze = function (e, n, i, s) {
                Ye && clearTimeout(Ye), Xe = !0, $e = !0;
                var l;
                e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = r.getThumbBoundsFn && r.getThumbBoundsFn(u);
                var d = i ? r.hideAnimationDuration : r.showAnimationDuration, h = function () {
                    Zt("initialZoom"), i ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (It(1), n && (n.style.display = "block"), o.addClass(t, "pswp--animated-in"), Tt("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Xe = !1
                };
                if (!d || !l || void 0 === l.x)
                    return Tt("initialZoom" + (i ? "Out" : "In")), g = e.initialZoomLevel, Lt(dt, e.initialPosition), Pt(), t.style.opacity = i ? 0 : 1, It(1), void(d ? setTimeout(function () {
                        h()
                    }, d) : h());
                !function () {
                    var n = c, s = !a.currItem.src || a.currItem.loadError || r.showHideOpacity;
                    e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (g = l.w / e.w, dt.x = l.x, dt.y = l.y - L, a[s ? "template" : "bg"].style.opacity = .001, Pt()), Gt("initialZoom"), i && !n && o.removeClass(t, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout(function () {
                        o.addClass(t, "pswp--animate_opacity")
                    }, 30)), Ye = setTimeout(function () {
                        if (Tt("initialZoom" + (i ? "Out" : "In")), i) {
                            var a = l.w / e.w, r = {x: dt.x, y: dt.y}, c = g, u = rt, p = function (e) {
                                1 === e ? (g = a, dt.x = l.x, dt.y = l.y - R) : (g = (a - c) * e + c, dt.x = (l.x - r.x) * e + r.x, dt.y = (l.y - R - r.y) * e + r.y), Pt(), s ? t.style.opacity = 1 - e : It(u - e * u)
                            };
                            n ? Jt("initialZoom", 0, 1, d, o.easing.cubic.out, p, h) : (p(1), Ye = setTimeout(h, d + 20))
                        } else
                            g = e.initialZoomLevel, Lt(dt, e.initialPosition), Pt(), It(1), s ? t.style.opacity = 1 : It(1), Ye = setTimeout(h, d + 20)
                    }, i ? 25 : 90)
                }()
            }, Ge = {}, Ke = [], Je = {index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function () {
                    return je.length
                }}, tn = function (t, e, n) {
                var i = t.bounds;
                i.center.x = Math.round((Ge.x - e) / 2), i.center.y = Math.round((Ge.y - n) / 2) + t.vGap.top, i.max.x = e > Ge.x ? Math.round(Ge.x - e) : i.center.x, i.max.y = n > Ge.y ? Math.round(Ge.y - n) + t.vGap.top : i.center.y, i.min.x = e > Ge.x ? 0 : i.center.x, i.min.y = n > Ge.y ? t.vGap.top : i.center.y
            }, en = function (t, e, n) {
                if (t.src && !t.loadError) {
                    var i = !n;
                    if (i && (t.vGap || (t.vGap = {top: 0, bottom: 0}), Tt("parseVerticalMargin", t)), Ge.x = e.x, Ge.y = e.y - t.vGap.top - t.vGap.bottom, i) {
                        var o = Ge.x / t.w, a = Ge.y / t.h;
                        t.fitRatio = a > o ? o : a;
                        var s = r.scaleMode;
                        "orig" === s ? n = 1 : "fit" === s && (n = t.fitRatio), n > 1 && (n = 1), t.initialZoomLevel = n, t.bounds || (t.bounds = {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}})
                    }
                    if (!n)
                        return;
                    return tn(t, t.w * n, t.h * n), i && n === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds
                }
                return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}}, t.initialPosition = t.bounds.center, t.bounds
            }, nn = function (t, e, n, i, o, r) {
                e.loadError || i && (e.imageAppended = !0, rn(e, i, e === a.currItem && xt), n.appendChild(i), r && setTimeout(function () {
                    e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
                }, 500))
            }, on = function (t) {
                t.loading = !0, t.loaded = !1;
                var e = t.img = o.createEl("pswp__img", "img"), n = function () {
                    t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
                };
                return e.onload = n, e.onerror = function () {
                    t.loadError = !0, n()
                }, e.src = t.src, e
            }, an = function (t, e) {
                return t.src && t.loadError && t.container ? (e && (t.container.innerHTML = ""), t.container.innerHTML = r.errorMsg.replace("%url%", t.src), !0) : void 0
            }, rn = function (t, e, n) {
                if (t.src) {
                    e || (e = t.container.lastChild);
                    var i = n ? t.w : Math.round(t.w * t.fitRatio), o = n ? t.h : Math.round(t.h * t.fitRatio);
                    t.placeholder && !t.loaded && (t.placeholder.style.width = i + "px", t.placeholder.style.height = o + "px"), e.style.width = i + "px", e.style.height = o + "px"
                }
            }, sn = function () {
                if (Ke.length) {
                    for (var t, e = 0; e < Ke.length; e++)
                        (t = Ke[e]).holder.index === t.index && nn(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
                    Ke = []
                }
            };
            wt("Controller", {publicMethods: {lazyLoadItem: function (t) {
                        t = kt(t);
                        var e = qe(t);
                        e && (!e.loaded && !e.loading || w) && (Tt("gettingData", t, e), e.src && on(e))
                    }, initController: function () {
                        o.extend(r, Je, !0), a.items = je = n, qe = a.getItemAt, Ue = r.getNumItemsFn, Qe = r.loop, Ue() < 3 && (r.loop = !1), St("beforeChange", function (t) {
                            var e, n = r.preload, i = null === t || t >= 0, o = Math.min(n[0], Ue()), s = Math.min(n[1], Ue());
                            for (e = 1; (i?s:o) >= e; e++)
                                a.lazyLoadItem(u + e);
                            for (e = 1; (i?o:s) >= e; e++)
                                a.lazyLoadItem(u - e)
                        }), St("initialLayout", function () {
                            a.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(u)
                        }), St("mainScrollAnimComplete", sn), St("initialZoomInEnd", sn), St("destroy", function () {
                            for (var t, e = 0; e < je.length; e++)
                                (t = je[e]).container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                            Ke = null
                        })
                    }, getItemAt: function (t) {
                        return t >= 0 && void 0 !== je[t] && je[t]
                    }, allowProgressiveImg: function () {
                        return r.forceProgressiveLoading || !_ || r.mouseUsed || screen.width > 1200
                    }, setContent: function (t, e) {
                        r.loop && (e = kt(e));
                        var n = a.getItemAt(t.index);
                        n && (n.container = null);
                        var i, l = a.getItemAt(e);
                        if (l) {
                            Tt("gettingData", e, l), t.index = e, t.item = l;
                            var c = l.container = o.createEl("pswp__zoom-wrap");
                            if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), an(l), en(l, ht), !l.src || l.loadError || l.loaded)
                                l.src && !l.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = l.src, rn(l, i), nn(0, l, c, i));
                            else {
                                if (l.loadComplete = function (n) {
                                    if (s) {
                                        if (t && t.index === e) {
                                            if (an(n, !0))
                                                return n.loadComplete = n.img = null, en(n, ht), _t(n), void(t.index === u && a.updateCurrZoomItem());
                                            n.imageAppended ? !Xe && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : W.transform && (nt || Xe) ? Ke.push({item: n, baseDiv: c, img: n.img, index: e, holder: t, clearPlaceholder: !0}) : nn(0, n, c, n.img, 0, !0)
                                        }
                                        n.loadComplete = null, n.img = null, Tt("imageLoadComplete", e, n)
                                    }
                                }, o.features.transform) {
                                    var d = "pswp__img pswp__img--placeholder";
                                    d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                    var h = o.createEl(d, l.msrc ? "img" : "");
                                    l.msrc && (h.src = l.msrc), rn(l, h), c.appendChild(h), l.placeholder = h
                                }
                                l.loading || on(l), a.allowProgressiveImg() && (!$e && W.transform ? Ke.push({item: l, baseDiv: c, img: l.img, index: e, holder: t}) : nn(0, l, c, l.img, 0, !0))
                            }
                            $e || e !== u ? _t(l) : (et = c.style, Ze(l, i || l.img)), t.el.innerHTML = "", t.el.appendChild(c)
                        } else
                            t.el.innerHTML = ""
                    }, cleanSlide: function (t) {
                        t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
                    }}});
            var ln, cn = {}, un = function (t, e, n) {
                var i = document.createEvent("CustomEvent"), o = {origEvent: t, target: t.target, releasePoint: e, pointerType: n || "touch"};
                i.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(i)
            };
            wt("Tap", {publicMethods: {initTap: function () {
                        St("firstTouchStart", a.onTapStart), St("touchRelease", a.onTapRelease), St("destroy", function () {
                            cn = {}, ln = null
                        })
                    }, onTapStart: function (t) {
                        t.length > 1 && (clearTimeout(ln), ln = null)
                    }, onTapRelease: function (t, e) {
                        if (e && !q && !$ && !Qt) {
                            var n = e;
                            if (ln && (clearTimeout(ln), ln = null, ve(n, cn)))
                                return void Tt("doubleTap", n);
                            if ("mouse" === e.type)
                                return void un(t, e, "mouse");
                            if ("BUTTON" === t.target.tagName.toUpperCase() || o.hasClass(t.target, "pswp__single-tap"))
                                return void un(t, e);
                            Lt(cn, n), ln = setTimeout(function () {
                                un(t, e), ln = null
                            }, 300)
                        }
                    }}});
            var dn;
            wt("DesktopZoom", {publicMethods: {initDesktopZoom: function () {
                        F || (_ ? St("mouseUsed", function () {
                            a.setupDesktopZoom()
                        }) : a.setupDesktopZoom(!0))
                    }, setupDesktopZoom: function (e) {
                        dn = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        St("bindEvents", function () {
                            o.bind(t, n, a.handleMouseWheel)
                        }), St("unbindEvents", function () {
                            dn && o.unbind(t, n, a.handleMouseWheel)
                        }), a.mouseZoomedIn = !1;
                        var i, r = function () {
                            a.mouseZoomedIn && (o.removeClass(t, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > g ? o.addClass(t, "pswp--zoom-allowed") : o.removeClass(t, "pswp--zoom-allowed"), s()
                        }, s = function () {
                            i && (o.removeClass(t, "pswp--dragging"), i = !1)
                        };
                        St("resize", r), St("afterChange", r), St("pointerDown", function () {
                            a.mouseZoomedIn && (i = !0, o.addClass(t, "pswp--dragging"))
                        }), St("pointerUp", s), e || r()
                    }, handleMouseWheel: function (t) {
                        if (g <= a.currItem.fitRatio)
                            return r.modal && (!r.closeOnScroll || Qt || j ? t.preventDefault() : A && Math.abs(t.deltaY) > 2 && (c = !0, a.close())), !0;
                        if (t.stopPropagation(), dn.x = 0, "deltaX"in t)
                            1 === t.deltaMode ? (dn.x = 18 * t.deltaX, dn.y = 18 * t.deltaY) : (dn.x = t.deltaX, dn.y = t.deltaY);
                        else if ("wheelDelta"in t)
                            t.wheelDeltaX && (dn.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? dn.y = -.16 * t.wheelDeltaY : dn.y = -.16 * t.wheelDelta;
                        else {
                            if (!("detail"in t))
                                return;
                            dn.y = t.detail
                        }
                        Nt(g, !0);
                        var e = dt.x - dn.x, n = dt.y - dn.y;
                        (r.modal || e <= tt.min.x && e >= tt.max.x && n <= tt.min.y && n >= tt.max.y) && t.preventDefault(), a.panTo(e, n)
                    }, toggleDesktopZoom: function (e) {
                        e = e || {x: ht.x / 2 + ft.x, y: ht.y / 2 + ft.y};
                        var n = r.getDoubleTapZoom(!0, a.currItem), i = g === n;
                        a.mouseZoomedIn = !i, a.zoomTo(i ? a.currItem.initialZoomLevel : n, e, 333), o[(i ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
                    }}});
            var hn, pn, fn, mn, gn, vn, yn, bn, xn, wn, kn, Cn, Sn = {history: !0, galleryUID: 1}, Tn = function () {
                return kn.hash.substring(1)
            }, Mn = function () {
                hn && clearTimeout(hn), fn && clearTimeout(fn)
            }, In = function () {
                var t = Tn(), e = {};
                if (t.length < 5)
                    return e;
                var n, i = t.split("&");
                for (n = 0; n < i.length; n++)
                    if (i[n]) {
                        var o = i[n].split("=");
                        o.length < 2 || (e[o[0]] = o[1])
                    }
                if (r.galleryPIDs) {
                    var a = e.pid;
                    for (e.pid = 0, n = 0; n < je.length; n++)
                        if (je[n].pid === a) {
                            e.pid = n;
                            break
                        }
                } else
                    e.pid = parseInt(e.pid, 10) - 1;
                return e.pid < 0 && (e.pid = 0), e
            }, An = function () {
                if (fn && clearTimeout(fn), Qt || j)
                    fn = setTimeout(An, 500);
                else {
                    mn ? clearTimeout(pn) : mn = !0;
                    var t = u + 1, e = qe(u);
                    e.hasOwnProperty("pid") && (t = e.pid);
                    var n = yn + "&gid=" + r.galleryUID + "&pid=" + t;
                    bn || -1 === kn.hash.indexOf(n) && (wn = !0);
                    var i = kn.href.split("#")[0] + "#" + n;
                    Cn ? "#" + n !== window.location.hash && history[bn ? "replaceState" : "pushState"]("", document.title, i) : bn ? kn.replace(i) : kn.hash = n, bn = !0, pn = setTimeout(function () {
                        mn = !1
                    }, 60)
                }
            };
            wt("History", {publicMethods: {initHistory: function () {
                        if (o.extend(r, Sn, !0), r.history) {
                            kn = window.location, wn = !1, xn = !1, bn = !1, yn = Tn(), Cn = "pushState"in history, yn.indexOf("gid=") > -1 && (yn = yn.split("&gid=")[0], yn = yn.split("?gid=")[0]), St("afterChange", a.updateURL), St("unbindEvents", function () {
                                o.unbind(window, "hashchange", a.onHashChange)
                            });
                            var t = function () {
                                vn = !0, xn || (wn ? history.back() : yn ? kn.hash = yn : Cn ? history.pushState("", document.title, kn.pathname + kn.search) : kn.hash = ""), Mn()
                            };
                            St("unbindEvents", function () {
                                c && t()
                            }), St("destroy", function () {
                                vn || t()
                            }), St("firstUpdate", function () {
                                u = In().pid
                            });
                            var e = yn.indexOf("pid=");
                            e > -1 && "&" === (yn = yn.substring(0, e)).slice(-1) && (yn = yn.slice(0, -1)), setTimeout(function () {
                                s && o.bind(window, "hashchange", a.onHashChange)
                            }, 40)
                        }
                    }, onHashChange: function () {
                        return Tn() === yn ? (xn = !0, void a.close()) : void(mn || (gn = !0, a.goTo(In().pid), gn = !1))
                    }, updateURL: function () {
                        Mn(), gn || (bn ? hn = setTimeout(An, 800) : An())
                    }}}), o.extend(a, te)
        }
    }), function (t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipeUI_Default = e()
    }(this, function () {
        "use strict";
        return function (t, e) {
            var n, i, o, a, r, s, l, c, u, d, h, p, f, m, g, v, y, b, x, w = this, k = !1, C = !0, S = !0, T = {barsSize: {top: 44, bottom: "auto"}, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function (t, e) {
                    return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1)
                }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"}, {id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"}, {id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"}, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}], getImageURLForShare: function () {
                    return t.currItem.src || ""
                }, getPageURLForShare: function () {
                    return window.location.href
                }, getTextForShare: function () {
                    return t.currItem.title || ""
                }, indexIndicatorSep: " / ", fitControlsWidth: 1200}, M = function (t) {
                if (v)
                    return!0;
                t = t || window.event, g.timeToIdle && g.mouseUsed && !u && R();
                for (var n, i, o = (t.target || t.srcElement).getAttribute("class") || "", a = 0; a < j.length; a++)
                    (n = j[a]).onTap && o.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                if (i) {
                    t.stopPropagation && t.stopPropagation(), v = !0;
                    var r = e.features.isOldAndroid ? 600 : 30;
                    y = setTimeout(function () {
                        v = !1
                    }, r)
                }
            }, I = function () {
                return!t.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
            }, A = function (t, n, i) {
                e[(i ? "add" : "remove") + "Class"](t, "pswp__" + n)
            }, P = function () {
                var t = 1 === g.getNumItemsFn();
                t !== m && (A(i, "ui--one-slide", t), m = t)
            }, _ = function () {
                A(l, "share-modal--hidden", S)
            }, D = function () {
                return S = !S, S ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
                    S && _()
                }, 300)) : (_(), setTimeout(function () {
                    S || e.addClass(l, "pswp__share-modal--fade-in")
                }, 30)), S || O(), !1
            }, E = function (e) {
                var n = (e = e || window.event).target || e.srcElement;
                return t.shout("shareLinkClick", e, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), S || D(), !1))
            }, O = function () {
                for (var t, e, n, i, o, a = "", r = 0; r < g.shareButtons.length; r++)
                    t = g.shareButtons[r], n = g.getImageURLForShare(t), i = g.getPageURLForShare(t), o = g.getTextForShare(t), e = t.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), a += '<a href="' + e + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", g.parseShareButtonOut && (a = g.parseShareButtonOut(t, a));
                l.children[0].innerHTML = a, l.children[0].onclick = E
            }, L = function (t) {
                for (var n = 0; n < g.closeElClasses.length; n++)
                    if (e.hasClass(t, "pswp__" + g.closeElClasses[n]))
                        return!0
            }, F = 0, R = function () {
                clearTimeout(x), F = 0, u && w.setIdle(!1)
            }, W = function (t) {
                var e = (t = t || window.event).relatedTarget || t.toElement;
                e && "HTML" !== e.nodeName || (clearTimeout(x), x = setTimeout(function () {
                    w.setIdle(!0)
                }, g.timeToIdleOutside))
            }, V = function () {
                g.fullscreenEl && !e.features.isOldAndroid && (n || (n = w.getFullscreenAPI()), n ? (e.bind(document, n.eventK, w.updateFullscreen), w.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs"))
            }, z = function () {
                g.preloaderEl && (N(!0), d("beforeChange", function () {
                    clearTimeout(f), f = setTimeout(function () {
                        t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && N(!1) : N(!0)
                    }, g.loadingIndicatorDelay)
                }), d("imageLoadComplete", function (e, n) {
                    t.currItem === n && N(!0)
                }))
            }, N = function (t) {
                p !== t && (A(h, "preloader--active", !t), p = t)
            }, H = function (t) {
                var n = t.vGap;
                if (I()) {
                    var r = g.barsSize;
                    if (g.captionEl && "auto" === r.bottom)
                        if (a || ((a = e.createEl("pswp__caption pswp__caption--fake")).appendChild(e.createEl("pswp__caption__center")), i.insertBefore(a, o), e.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(t, a, !0)) {
                            var s = a.clientHeight;
                            n.bottom = parseInt(s, 10) || 44
                        } else
                            n.bottom = r.top;
                    else
                        n.bottom = "auto" === r.bottom ? 0 : r.bottom;
                    n.top = r.top
                } else
                    n.top = n.bottom = 0
            }, B = function () {
                g.timeToIdle && d("mouseUsed", function () {
                    e.bind(document, "mousemove", R), e.bind(document, "mouseout", W), b = setInterval(function () {
                        2 == ++F && w.setIdle(!0)
                    }, g.timeToIdle / 2)
                })
            }, Y = function () {
                d("onVerticalDrag", function (t) {
                    C && .95 > t ? w.hideControls() : !C && t >= .95 && w.showControls()
                });
                var t;
                d("onPinchClose", function (e) {
                    C && .9 > e ? (w.hideControls(), t = !0) : t && !C && e > .9 && w.showControls()
                }), d("zoomGestureEnded", function () {
                    (t = !1) && !C && w.showControls()
                })
            }, j = [{name: "caption", option: "captionEl", onInit: function (t) {
                        o = t
                    }}, {name: "share-modal", option: "shareEl", onInit: function (t) {
                        l = t
                    }, onTap: function () {
                        D()
                    }}, {name: "button--share", option: "shareEl", onInit: function (t) {
                        s = t
                    }, onTap: function () {
                        D()
                    }}, {name: "button--zoom", option: "zoomEl", onTap: t.toggleDesktopZoom}, {name: "counter", option: "counterEl", onInit: function (t) {
                        r = t
                    }}, {name: "button--close", option: "closeEl", onTap: t.close}, {name: "button--arrow--left", option: "arrowEl", onTap: t.prev}, {name: "button--arrow--right", option: "arrowEl", onTap: t.next}, {name: "button--fs", option: "fullscreenEl", onTap: function () {
                        n.isFullscreen() ? n.exit() : n.enter()
                    }}, {name: "preloader", option: "preloaderEl", onInit: function (t) {
                        h = t
                    }}], $ = function () {
                var t, n, o, a = function (i) {
                    if (i)
                        for (var a = i.length, r = 0; a > r; r++) {
                            t = i[r], n = t.className;
                            for (var s = 0; s < j.length; s++)
                                o = j[s], n.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
                        }
                };
                a(i.children);
                var r = e.getChildByClass(i, "pswp__top-bar");
                r && a(r.children)
            };
            w.init = function () {
                e.extend(t.options, T, !0), g = t.options, i = e.getChildByClass(t.scrollWrap, "pswp__ui"), d = t.listen, Y(), d("beforeChange", w.update), d("doubleTap", function (e) {
                    var n = t.currItem.initialZoomLevel;
                    t.getZoomLevel() !== n ? t.zoomTo(n, e, 333) : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333)
                }), d("preventDragEvent", function (t, e, n) {
                    var i = t.target || t.srcElement;
                    i && i.getAttribute("class") && t.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
                }), d("bindEvents", function () {
                    e.bind(i, "pswpTap click", M), e.bind(t.scrollWrap, "pswpTap", w.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", w.onMouseOver)
                }), d("unbindEvents", function () {
                    S || D(), b && clearInterval(b), e.unbind(document, "mouseout", W), e.unbind(document, "mousemove", R), e.unbind(i, "pswpTap click", M), e.unbind(t.scrollWrap, "pswpTap", w.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", w.onMouseOver), n && (e.unbind(document, n.eventK, w.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
                }), d("destroy", function () {
                    g.captionEl && (a && i.removeChild(a), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(i, "pswp__ui--over-close"), e.addClass(i, "pswp__ui--hidden"), w.setIdle(!1)
                }), g.showAnimationDuration || e.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function () {
                    g.showAnimationDuration && e.removeClass(i, "pswp__ui--hidden")
                }), d("initialZoomOut", function () {
                    e.addClass(i, "pswp__ui--hidden")
                }), d("parseVerticalMargin", H), $(), g.shareEl && s && l && (S = !0), P(), B(), V(), z()
            }, w.setIdle = function (t) {
                u = t, A(i, "ui--idle", t)
            }, w.update = function () {
                C && t.currItem ? (w.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(t.currItem, o), A(o, "caption--empty", !t.currItem.title)), k = !0) : k = !1, S || D(), P()
            }, w.updateFullscreen = function (i) {
                i && setTimeout(function () {
                    t.setScrollOffset(0, e.getScrollY())
                }, 50), e[(n.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
            }, w.updateIndexIndicator = function () {
                g.counterEl && (r.innerHTML = t.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
            }, w.onGlobalTap = function (n) {
                var i = (n = n || window.event).target || n.srcElement;
                if (!v)
                    if (n.detail && "mouse" === n.detail.pointerType) {
                        if (L(i))
                            return void t.close();
                        e.hasClass(i, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? g.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(n.detail.releasePoint))
                    } else if (g.tapToToggleControls && (C ? w.hideControls() : w.showControls()), g.tapToClose && (e.hasClass(i, "pswp__img") || L(i)))
                        return void t.close()
            }, w.onMouseOver = function (t) {
                var e = (t = t || window.event).target || t.srcElement;
                A(i, "ui--over-close", L(e))
            }, w.hideControls = function () {
                e.addClass(i, "pswp__ui--hidden"), C = !1
            }, w.showControls = function () {
                C = !0, k || w.update(), e.removeClass(i, "pswp__ui--hidden")
            }, w.supportsFullscreen = function () {
                var t = document;
                return!!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
            }, w.getFullscreenAPI = function () {
                var e, n = document.documentElement, i = "fullscreenchange";
                return n.requestFullscreen ? e = {enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: i} : n.mozRequestFullScreen ? e = {enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + i} : n.webkitRequestFullscreen ? e = {enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + i} : n.msRequestFullscreen && (e = {enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange"}), e && (e.enter = function () {
                    return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, e.exit = function () {
                    return g.closeOnScroll = c, document[this.exitK]()
                }, e.isFullscreen = function () {
                    return document[this.elementK]
                }), e
            }
        }
    });
    var initPhotoSwipeFromDOM = function (t) {
        for (var e = function (t) {
            for (var e, n, i, o, a = t.childNodes, r = a.length, s = [], l = 0; l < r; l++)
                1 === (e = a[l]).nodeType && (i = (n = e.children[0]).getAttribute("data-size").split("x"), o = {src: n.getAttribute("href"), w: parseInt(i[0], 10), h: parseInt(i[1], 10)}, e.children.length > 1 && (o.title = e.children[1].innerHTML), n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")), o.el = e, s.push(o));
            return s
        }, n = function t(e, n) {
            return e && (n(e) ? e : t(e.parentNode, n))
        }, i = function (t, n, i, o) {
            var a, r, s = document.querySelectorAll(".pswp")[0];
            if (r = e(n), a = {galleryUID: n.getAttribute("data-pswp-uid"), getThumbBoundsFn: function (t) {
                    var e = r[t].el.getElementsByTagName("img")[0], n = window.pageYOffset || document.documentElement.scrollTop, i = e.getBoundingClientRect();
                    return{x: i.left, y: i.top + n, w: i.width}
                }}, o)
                if (a.galleryPIDs) {
                    for (var l = 0; l < r.length; l++)
                        if (r[l].pid == t) {
                            a.index = l;
                            break
                        }
                } else
                    a.index = parseInt(t, 10) - 1;
            else
                a.index = parseInt(t, 10);
            isNaN(a.index) || (i && (a.showAnimationDuration = 0), new PhotoSwipe(s, PhotoSwipeUI_Default, r, a).init())
        }, o = document.querySelectorAll(t), a = 0, r = o.length; a < r; a++)
            o[a].setAttribute("data-pswp-uid", a + 1), o[a].onclick = function (t) {
                (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1;
                var e = t.target || t.srcElement, o = n(e, function (t) {
                    return t.tagName && "FIGURE" === t.tagName.toUpperCase()
                });
                if (o) {
                    for (var a, r = o.parentNode, s = o.parentNode.childNodes, l = s.length, c = 0, u = 0; u < l; u++)
                        if (1 === s[u].nodeType) {
                            if (s[u] === o) {
                                a = c;
                                break
                            }
                            c++
                        }
                    return a >= 0 && i(a, r), !1
                }
            };
        var s = function () {
            var t = window.location.hash.substring(1), e = {};
            if (t.length < 5)
                return e;
            for (var n = t.split("&"), i = 0; i < n.length; i++)
                if (n[i]) {
                    var o = n[i].split("=");
                    o.length < 2 || (e[o[0]] = o[1])
                }
            return e.gid && (e.gid = parseInt(e.gid, 10)), e
        }();
        s.pid && s.gid && i(s.pid, o[s.gid - 1], !0, !0)
    };
    initPhotoSwipeFromDOM(".kb-lightbox"), function (t) {
        t.fn.material_select = function (e) {
            function n(t, e, n) {
                var o = t.indexOf(e), a = -1 === o;
                return a ? t.push(e) : t.splice(o, 1), n.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"), n.find("option").eq(e).prop("selected", a), i(t, n), a
            }
            function i(t, e) {
                for (var n = "", i = 0, o = t.length; i < o; i++) {
                    var a = e.find("option").eq(t[i]).text();
                    n += 0 === i ? a : ", " + a
                }
                "" === n && (n = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(n)
            }
            function o() {
                var t = (new Date).getTime();
                return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var n = (t + 16 * Math.random()) % 16 | 0;
                    return t = Math.floor(t / 16), ("x" == e ? n : 3 & n | 8).toString(16)
                })
            }
            t(this).each(function () {
                var i = t(this);
                if (!i.hasClass("browser-default")) {
                    var a = !!i.attr("multiple"), r = !1, s = !1, l = i.data("select-id");
                    if (l && (i.parent().find("span.caret").remove(), i.parent().find("input").remove(), i.unwrap(), t("ul#select-options-" + l).remove()), "destroy" !== e) {
                        var c = o();
                        i.data("select-id", c);
                        var u = t('<div class="select-wrapper"></div>');
                        u.addClass(i.attr("class"));
                        var d = t('<ul id="select-options-' + c + '" class="dropdown-content select-dropdown ' + (a ? "multiple-select-dropdown" : "") + '"></ul>'), h = i.children("option, optgroup"), p = [], f = !1, m = i.find("option:selected").html() || i.find("option:first").html() || "", g = function () {
                            var e = t(this).closest("ul"), n = t(this).val();
                            e.find("li").find("span.filtrable").each(function () {
                                "string" == typeof this.outerText && (this.outerText.toLowerCase().startsWith(n.toLowerCase()) ? (t(this).show(), t(this).parent().show()) : (t(this).hide(), t(this).parent().hide()))
                            })
                        }, v = !!i.attr("searchable");
                        v && function () {
                            var e = i.attr("searchable"), n = t('<span class="search-wrap"><input type="text" class="search" placeholder="' + e + '"></span>');
                            d.append(n), n.find(".search").keyup(g)
                        }();
                        var y = function (e, n, i) {
                            s = e.attr("searchable");
                            var o = n.is(":disabled") ? "disabled " : "", a = "optgroup-option" === i ? "optgroup-option " : "";
                            "" !== a && (i = "multiple" === e.attr("multiple") ? "multiple" : i, r = !0);
                            var l = n.data("icon"), c = n.attr("class");
                            if (l) {
                                var u = "";
                                return c && (u = ' class="' + c + '"'), "multiple" === i ? d.append(t('<li class="' + o + '"><img alt="" src="' + l + '"' + u + '><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : d.append(t('<li class="' + o + a + '"><img alt="" src="' + l + '"' + u + '><span class="filtrable">' + n.html() + "</span></li>")), !0
                            }
                            "multiple" === i ? d.append(t('<li class="' + o + '"><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : d.append(t('<li class="' + o + a + '"><span class="filtrable">' + n.html() + "</span></li>"))
                        };
                        h.length && h.each(function () {
                            if (t(this).is("option"))
                                a ? y(i, t(this), "multiple") : y(i, t(this));
                            else if (t(this).is("optgroup")) {
                                var e = t(this).children("option");
                                d.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function () {
                                    y(i, t(this), "optgroup-option")
                                })
                            }
                        }), d.find("li:not(.optgroup)").each(function (o) {
                            t(this).click(function (l) {
                                if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                                    var c = !0;
                                    a && r ? (t('input[type="checkbox"]', this).prop("checked", function (t, e) {
                                        return!e
                                    }), c = n(p, t(this).index(), i)) : a && s ? (t('input[type="checkbox"]', this).prop("checked", function (t, e) {
                                        return!e
                                    }), c = n(p, t(this).index() - 1, i), w.trigger("focus")) : a ? (t('input[type="checkbox"]', this).prop("checked", function (t, e) {
                                        return!e
                                    }), c = n(p, t(this).index(), i), w.trigger("focus")) : (d.find("li").removeClass("active"), t(this).toggleClass("active"), w.val(t(this).text())), k(d, t(this)), i.find("option").eq(o).prop("selected", c), i.trigger("change"), void 0 !== e && e()
                                }
                                l.stopPropagation()
                            })
                        }), i.wrap(u);
                        var b = t('<span class="caret">&#9660;</span>');
                        i.is(":disabled") && b.addClass("disabled");
                        var x = m.replace(/"/g, "&quot;"), w = t('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + c + '" value="' + x + '"/>');
                        i.before(w), w.before(b), w.after(d), i.is(":disabled") || w.dropdown({hover: !1, closeOnClick: !1}), i.attr("tabindex") && t(w[0]).attr("tabindex", i.attr("tabindex")), i.addClass("initialized"), w.on({focus: function () {
                                if (t("ul.select-dropdown").not(d[0]).is(":visible") && t("input.select-dropdown").trigger("close"), !d.is(":visible")) {
                                    t(this).trigger("open", ["focus"]);
                                    var e = t(this).val(), n = d.find("li").filter(function () {
                                        return t(this).text().toLowerCase() === e.toLowerCase()
                                    })[0];
                                    k(d, n)
                                }
                            }, click: function (t) {
                                t.stopPropagation()
                            }}), w.on("blur", function () {
                            a || v || t(this).trigger("close"), d.find("li.selected").removeClass("selected")
                        }), !a && v && d.find("li").on("click", function () {
                            w.trigger("close")
                        }), d.hover(function () {
                            f = !0
                        }, function () {
                            f = !1
                        }), t(window).on({click: function () {
                                (a || v) && (f || w.trigger("close"))
                            }}), a && i.find("option:selected:not(:disabled)").each(function () {
                            var e = t(this).index();
                            n(p, e, i), d.find("li").eq(e).find(":checkbox").prop("checked", !0)
                        });
                        var k = function (e, n) {
                            if (n) {
                                e.find("li.selected").removeClass("selected");
                                var i = t(n);
                                i.addClass("selected"), d.scrollTo(i)
                            }
                        }, C = [];
                        w.on("keydown", function (e) {
                            if (9 != e.which)
                                if (40 != e.which || d.is(":visible")) {
                                    if (13 != e.which || d.is(":visible")) {
                                        e.preventDefault();
                                        var n = String.fromCharCode(e.which).toLowerCase(), i = [9, 13, 27, 38, 40];
                                        if (n && -1 === i.indexOf(e.which)) {
                                            C.push(n);
                                            var o = C.join(""), r = d.find("li").filter(function () {
                                                return 0 === t(this).text().toLowerCase().indexOf(o)
                                            })[0];
                                            r && k(d, r)
                                        }
                                        if (13 == e.which) {
                                            var s = d.find("li.selected:not(.disabled)")[0];
                                            s && (t(s).trigger("click"), a || w.trigger("close"))
                                        }
                                        40 == e.which && (r = d.find("li.selected").length ? d.find("li.selected").next("li:not(.disabled)")[0] : d.find("li:not(.disabled)")[0], k(d, r)), 27 == e.which && w.trigger("close"), 38 == e.which && (r = d.find("li.selected").prev("li:not(.disabled)")[0]) && k(d, r), setTimeout(function () {
                                            C = []
                                        }, 1e3)
                                    }
                                } else
                                    w.trigger("open");
                            else
                                w.trigger("close")
                        })
                    } else
                        i.data("select-id", null).removeClass("initialized")
                }
            })
        }
    }(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function (t) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (t.clientX >= t.target.clientWidth || t.clientY >= t.target.clientHeight) && t.preventDefault()
    }), $.fn.kb_autocomplete = function (t) {
        var e = {data: {}};
        return t = $.extend(e, t), this.each(function () {
            var e = $(this), n = t.data;
            if (Object.keys(n).length) {
                var i = $('<ul class="kb-autocomplete-wrap"></ul>');
                i.insertAfter($(this))
            }
            e.on("keyup", function (t) {
                var o = e.val();
                if (i.empty(), o.length)
                    for (var a in n)
                        if (-1 !== n[a].toLowerCase().indexOf(o.toLowerCase())) {
                            var r = $("<li>" + n[a] + "</li>");
                            i.append(r)
                        }
                13 == t.which && (i.children(":first").trigger("click"), i.empty()), 0 == o.length ? $(".kb-autocomplete-clear").css("visibility", "hidden") : $(".kb-autocomplete-clear").css("visibility", "visible")
            }), i.on("click", "li", function () {
                e.val($(this).text()), i.empty()
            }), $(".kb-autocomplete-clear").on("click", function (t) {
                t.preventDefault(), e.val(""), $(this).css("visibility", "hidden"), i.empty(), $(this).parent().find("label").removeClass("active")
            })
        })
    }, function (t) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery)
    }(function (t) {
        function e(a, s, d, h) {
            function p() {
                return e._.node("div", e._.node("div", e._.node("div", e._.node("div", I.component.nodes(k.open), S.box), S.wrap), S.frame), S.holder, 'tabindex="-1"')
            }
            function f() {
                T.data(s, I).addClass(S.input).val(T.data("value") ? I.get("select", C.format) : a.value), C.editable || T.on("focus." + k.id + " click." + k.id, function (t) {
                    t.preventDefault(), I.open()
                }).on("keydown." + k.id, x), o(a, {haspopup: !0, expanded: !1, readonly: !1, owns: a.id + "_root"})
            }
            function m() {
                o(I.$root[0], "hidden", !0)
            }
            function g() {
                I.$holder.on({keydown: x, "focus.toOpen": b, blur: function () {
                        T.removeClass(S.target)
                    }, focusin: function (t) {
                        I.$root.removeClass(S.focused), t.stopPropagation()
                    }, "mousedown click": function (e) {
                        var n = e.target;
                        n != I.$holder[0] && (e.stopPropagation(), "mousedown" != e.type || t(n).is("input, select, textarea, button, option") || (e.preventDefault(), I.$holder[0].focus()))
                    }}).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                    var e = t(this), n = e.data(), i = e.hasClass(S.navDisabled) || e.hasClass(S.disabled), o = r();
                    o = o && (o.type || o.href), (i || o && !t.contains(I.$root[0], o)) && I.$holder[0].focus(), !i && n.nav ? I.set("highlight", I.component.item.highlight, {nav: n.nav}) : !i && "pick"in n ? (I.set("select", n.pick), C.closeOnSelect && I.close(!0)) : n.clear ? (I.clear(), C.closeOnClear && I.close(!0)) : n.close && I.close(!0)
                })
            }
            function v() {
                var e;
                !0 === C.hiddenName ? (e = a.name, a.name = "") : e = (e = ["string" == typeof C.hiddenPrefix ? C.hiddenPrefix : "", "string" == typeof C.hiddenSuffix ? C.hiddenSuffix : "_submit"])[0] + a.name + e[1], I._hidden = t('<input type=hidden name="' + e + '"' + (T.data("value") || a.value ? ' value="' + I.get("select", C.formatSubmit) + '"' : "") + ">")[0], T.on("change." + k.id, function () {
                    I._hidden.value = a.value ? I.get("select", C.formatSubmit) : ""
                })
            }
            function y() {
                w && u ? I.$holder.find("." + S.frame).one("transitionend", function () {
                    I.$holder[0].focus()
                }) : I.$holder[0].focus()
            }
            function b(t) {
                t.stopPropagation(), T.addClass(S.target), I.$root.addClass(S.focused), I.open()
            }
            function x(t) {
                var e = t.keyCode, n = /^(8|46)$/.test(e);
                if (27 == e)
                    return I.close(!0), !1;
                (32 == e || n || !k.open && I.component.key[e]) && (t.preventDefault(), t.stopPropagation(), n ? I.clear().close() : I.open())
            }
            if (!a)
                return e;
            var w = !1, k = {id: a.id || "P" + Math.abs(~~(Math.random() * new Date))}, C = d ? t.extend(!0, {}, d.defaults, h) : h || {}, S = t.extend({}, e.klasses(), C.klass), T = t(a), M = function () {
                return this.start()
            }, I = M.prototype = {constructor: M, $node: T, start: function () {
                    return k && k.start ? I : (k.methods = {}, k.start = !0, k.open = !1, k.type = a.type, a.autofocus = a == r(), a.readOnly = !C.editable, a.id = a.id || k.id, "text" != a.type && (a.type = "text"), I.component = new d(I, C), I.$root = t('<div class="' + S.picker + '" id="' + a.id + '_root" />'), m(), I.$holder = t(p()).appendTo(I.$root), g(), C.formatSubmit && v(), f(), C.containerHidden ? t(C.containerHidden).append(I._hidden) : T.after(I._hidden), C.container ? t(C.container).append(I.$root) : T.after(I.$root), I.on({start: I.component.onStart, render: I.component.onRender, stop: I.component.onStop, open: I.component.onOpen, close: I.component.onClose, set: I.component.onSet}).on({start: C.onStart, render: C.onRender, stop: C.onStop, open: C.onOpen, close: C.onClose, set: C.onSet}), w = n(I.$holder[0]), a.autofocus && I.open(), I.trigger("start").trigger("render"))
                }, render: function (e) {
                    return e ? (I.$holder = t(p()), g(), I.$root.html(I.$holder)) : I.$root.find("." + S.box).html(I.component.nodes(k.open)), I.trigger("render")
                }, stop: function () {
                    return k.start ? (I.close(), I._hidden && I._hidden.parentNode.removeChild(I._hidden), I.$root.remove(), T.removeClass(S.input).removeData(s), setTimeout(function () {
                        T.off("." + k.id)
                    }, 0), a.type = k.type, a.readOnly = !1, I.trigger("stop"), k.methods = {}, k.start = !1, I) : I
                }, open: function (n) {
                    return k.open ? I : (T.addClass(S.active), o(a, "expanded", !0), setTimeout(function () {
                        I.$root.addClass(S.opened), o(I.$root[0], "hidden", !1)
                    }, 0), !1 !== n && (k.open = !0, w && c.css("overflow", "hidden").css("padding-right", "+=" + i()), y(), l.on("click." + k.id + " focusin." + k.id, function (t) {
                        var e = t.target;
                        e != a && e != document && 3 != t.which && I.close(e === I.$holder[0])
                    }).on("keydown." + k.id, function (n) {
                        var i = n.keyCode, o = I.component.key[i], a = n.target;
                        27 == i ? I.close(!0) : a != I.$holder[0] || !o && 13 != i ? t.contains(I.$root[0], a) && 13 == i && (n.preventDefault(), a.click()) : (n.preventDefault(), o ? e._.trigger(I.component.key.go, I, [e._.trigger(o)]) : I.$root.find("." + S.highlighted).hasClass(S.disabled) || (I.set("select", I.component.item.highlight), C.closeOnSelect && I.close(!0)))
                    })), I.trigger("open"))
                }, close: function (t) {
                    return t && (C.editable ? a.focus() : (I.$holder.off("focus.toOpen").focus(), setTimeout(function () {
                        I.$holder.on("focus.toOpen", b)
                    }, 0))), T.removeClass(S.active), o(a, "expanded", !1), setTimeout(function () {
                        I.$root.removeClass(S.opened + " " + S.focused), o(I.$root[0], "hidden", !0)
                    }, 0), k.open ? (k.open = !1, w && c.css("overflow", "").css("padding-right", "-=" + i()), l.off("." + k.id), I.trigger("close")) : I
                }, clear: function (t) {
                    return I.set("clear", null, t)
                }, set: function (e, n, i) {
                    var o, a, r = t.isPlainObject(e), s = r ? e : {};
                    if (i = r && t.isPlainObject(n) ? n : i || {}, e) {
                        r || (s[e] = n);
                        for (o in s)
                            a = s[o], o in I.component.item && (void 0 === a && (a = null), I.component.set(o, a, i)), "select" != o && "clear" != o || T.val("clear" == o ? "" : I.get(o, C.format)).trigger("change");
                        I.render()
                    }
                    return i.muted ? I : I.trigger("set", s)
                }, get: function (t, n) {
                    if (t = t || "value", null != k[t])
                        return k[t];
                    if ("valueSubmit" == t) {
                        if (I._hidden)
                            return I._hidden.value;
                        t = "value"
                    }
                    if ("value" == t)
                        return a.value;
                    if (t in I.component.item) {
                        if ("string" == typeof n) {
                            var i = I.component.get(t);
                            return i ? e._.trigger(I.component.formats.toString, I.component, [n, i]) : ""
                        }
                        return I.component.get(t)
                    }
                }, on: function (e, n, i) {
                    var o, a, r = t.isPlainObject(e), s = r ? e : {};
                    if (e) {
                        r || (s[e] = n);
                        for (o in s)
                            a = s[o], i && (o = "_" + o), k.methods[o] = k.methods[o] || [], k.methods[o].push(a)
                    }
                    return I
                }, off: function () {
                    var t, e, n = arguments;
                    for (t = 0, namesCount = n.length; t < namesCount; t += 1)
                        (e = n[t])in k.methods && delete k.methods[e];
                    return I
                }, trigger: function (t, n) {
                    var i = function (t) {
                        var i = k.methods[t];
                        i && i.map(function (t) {
                            e._.trigger(t, I, [n])
                        })
                    };
                    return i("_" + t), i(t), I
                }};
            return new M
        }
        function n(t) {
            var e;
            return t.currentStyle ? e = t.currentStyle.position : window.getComputedStyle && (e = getComputedStyle(t).position), "fixed" == e
        }
        function i() {
            if (c.height() <= s.height())
                return 0;
            var e = t('<div style="visibility:hidden;width:100px" />').appendTo("body"), n = e[0].offsetWidth;
            e.css("overflow", "scroll");
            var i = t('<div style="width:100%" />').appendTo(e)[0].offsetWidth;
            return e.remove(), n - i
        }
        function o(e, n, i) {
            if (t.isPlainObject(n))
                for (var o in n)
                    a(e, o, n[o]);
            else
                a(e, n, i)
        }
        function a(t, e, n) {
            t.setAttribute(("role" == e ? "" : "aria-") + e, n)
        }
        function r() {
            try {
                return document.activeElement
            } catch (t) {
            }
        }
        var s = t(window), l = t(document), c = t(document.documentElement), u = null != document.documentElement.style.transition;
        return e.klasses = function (t) {
            return t = t || "picker", {picker: t, opened: t + "--opened", focused: t + "--focused", input: t + "__input", active: t + "__input--active", target: t + "__input--target", holder: t + "__holder", frame: t + "__frame", wrap: t + "__wrap", box: t + "__box"}
        }, e._ = {group: function (t) {
                for (var n, i = "", o = e._.trigger(t.min, t); o <= e._.trigger(t.max, t, [o]); o += t.i)
                    n = e._.trigger(t.item, t, [o]), i += e._.node(t.node, n[0], n[1], n[2]);
                return i
            }, node: function (e, n, i, o) {
                return n ? (n = t.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", o = o ? " " + o : "", "<" + e + i + o + ">" + n + "</" + e + ">") : ""
            }, lead: function (t) {
                return(t < 10 ? "0" : "") + t
            }, trigger: function (t, e, n) {
                return"function" == typeof t ? t.apply(e, n || []) : t
            }, digits: function (t) {
                return/\d/.test(t[1]) ? 2 : 1
            }, isDate: function (t) {
                return{}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
            }, isInteger: function (t) {
                return{}.toString.call(t).indexOf("Number") > -1 && t % 1 == 0
            }, ariaAttr: function (e, n) {
                t.isPlainObject(e) || (e = {attribute: n}), n = "";
                for (var i in e) {
                    var o = ("role" == i ? "" : "aria-") + i;
                    n += null == e[i] ? "" : o + '="' + e[i] + '"'
                }
                return n
            }}, e.extend = function (n, i) {
            t.fn[n] = function (o, a) {
                var r = this.data(n);
                return"picker" == o ? r : r && "string" == typeof o ? e._.trigger(r[o], r, [a]) : this.each(function () {
                    t(this).data(n) || new e(this, n, i, o)
                })
            }, t.fn[n].defaults = i.defaults
        }, e
    }), function (t) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
    }(function (t, e) {
        function n(t, e) {
            var n = this, i = t.$node[0], o = i.value, a = t.$node.data("value"), r = a || o, s = a ? e.formatSubmit : e.format, l = function () {
                return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
            };
            n.settings = e, n.$node = t.$node, n.queue = {min: "measure create", max: "measure create", now: "now create", select: "parse create validate", highlight: "parse navigate create validate", view: "parse create validate viewset", disable: "deactivate", enable: "activate"}, n.item = {}, n.item.clear = null, n.item.disable = (e.disable || []).slice(0), n.item.enable = -function (t) {
                return!0 === t[0] ? t.shift() : -1
            }(n.item.disable), n.set("min", e.min).set("max", e.max).set("now"), r ? n.set("select", r, {format: s, defaultValue: !0}) : n.set("select", null).set("highlight", n.item.now), n.key = {40: 7, 38: -7, 39: function () {
                    return l() ? -1 : 1
                }, 37: function () {
                    return l() ? 1 : -1
                }, go: function (t) {
                    var e = n.item.highlight, i = new Date(e.year, e.month, e.date + t);
                    n.set("highlight", i, {interval: t}), this.render()
                }}, t.on("render", function () {
                t.$root.find("." + e.klass.selectMonth).on("change", function () {
                    var n = this.value;
                    n && (t.set("highlight", [t.get("view").year, n, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
                }), t.$root.find("." + e.klass.selectYear).on("change", function () {
                    var n = this.value;
                    n && (t.set("highlight", [n, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function () {
                var i = "";
                n.disabled(n.get("now")) && (i = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + i + ", select").attr("disabled", !1)
            }, 1).on("close", function () {
                t.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var i = t._;
        n.prototype.set = function (t, e, n) {
            var i = this, o = i.item;
            return null === e ? ("clear" == t && (t = "select"), o[t] = e, i) : (o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = i.queue[t].split(" ").map(function (o) {
                return e = i[o](t, e, n)
            }).pop(), "select" == t ? i.set("highlight", o.select, n) : "highlight" == t ? i.set("view", o.highlight, n) : t.match(/^(flip|min|max|disable|enable)$/) && (o.select && i.disabled(o.select) && i.set("select", o.select, n), o.highlight && i.disabled(o.highlight) && i.set("highlight", o.highlight, n)), i)
        }, n.prototype.get = function (t) {
            return this.item[t]
        }, n.prototype.create = function (t, n, o) {
            var a, r = this;
            return n = void 0 === n ? t : n, n == -1 / 0 || n == 1 / 0 ? a = n : e.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj : e.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = i.isDate(n) ? n : r.create().obj) : n = i.isInteger(n) || i.isDate(n) ? r.normalize(new Date(n), o) : r.now(t, n, o), {year: a || n.getFullYear(), month: a || n.getMonth(), date: a || n.getDate(), day: a || n.getDay(), obj: a || n, pick: a || n.getTime()}
        }, n.prototype.createRange = function (t, n) {
            var o = this, a = function (t) {
                return!0 === t || e.isArray(t) || i.isDate(t) ? o.create(t) : t
            };
            return i.isInteger(t) || (t = a(t)), i.isInteger(n) || (n = a(n)), i.isInteger(t) && e.isPlainObject(n) ? t = [n.year, n.month, n.date + t] : i.isInteger(n) && e.isPlainObject(t) && (n = [t.year, t.month, t.date + n]), {from: a(t), to: a(n)}
        }, n.prototype.withinRange = function (t, e) {
            return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
        }, n.prototype.overlapRanges = function (t, e) {
            var n = this;
            return t = n.createRange(t.from, t.to), e = n.createRange(e.from, e.to), n.withinRange(t, e.from) || n.withinRange(t, e.to) || n.withinRange(e, t.from) || n.withinRange(e, t.to)
        }, n.prototype.now = function (t, e, n) {
            return e = new Date, n && n.rel && e.setDate(e.getDate() + n.rel), this.normalize(e, n)
        }, n.prototype.navigate = function (t, n, i) {
            var o, a, r, s, l = e.isArray(n), c = e.isPlainObject(n), u = this.item.view;
            if (l || c) {
                for (c?(a = n.year, r = n.month, s = n.date):(a = + n[0], r = + n[1], s = + n[2]), i && i.nav && u && u.month !== r && (a = u.year, r = u.month), a = (o = new Date(a, r + (i && i.nav?i.nav:0), 1)).getFullYear(), r = o.getMonth(); new Date(a, r, s).getMonth() !== r; )
                    s -= 1;
                n = [a, r, s]
            }
            return n
        }, n.prototype.normalize = function (t) {
            return t.setHours(0, 0, 0, 0), t
        }, n.prototype.measure = function (t, e) {
            var n = this;
            return e ? "string" == typeof e ? e = n.parse(t, e) : i.isInteger(e) && (e = n.now(t, e, {rel: e})) : e = "min" == t ? -1 / 0 : 1 / 0, e
        }, n.prototype.viewset = function (t, e) {
            return this.create([e.year, e.month, 1])
        }, n.prototype.validate = function (t, n, o) {
            var a, r, s, l, c = this, u = n, d = o && o.interval ? o.interval : 1, h = -1 === c.item.enable, p = c.item.min, f = c.item.max, m = h && c.item.disable.filter(function (t) {
                if (e.isArray(t)) {
                    var o = c.create(t).pick;
                    o < n.pick ? a = !0 : o > n.pick && (r = !0)
                }
                return i.isInteger(t)
            }).length;
            if ((!o || !o.nav && !o.defaultValue) && (!h && c.disabled(n) || h && c.disabled(n) && (m || a || r) || !h && (n.pick <= p.pick || n.pick >= f.pick)))
                for (h && !m && (!r && d > 0 || !a && d < 0) && (d *= - 1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u, d = d > 0?1: - 1), n.pick <= p.pick?(s = !0, d = 1, n = c.create([p.year, p.month, p.date + (n.pick === p.pick?0: - 1)])):n.pick >= f.pick && (l = !0, d = - 1, n = c.create([f.year, f.month, f.date + (n.pick === f.pick?0:1)])), !s || !l); )
                    n = c.create([n.year, n.month, n.date + d]);
            return n
        }, n.prototype.disabled = function (t) {
            var n = this, o = n.item.disable.filter(function (o) {
                return i.isInteger(o) ? t.day === (n.settings.firstDay ? o : o - 1) % 7 : e.isArray(o) || i.isDate(o) ? t.pick === n.create(o).pick : e.isPlainObject(o) ? n.withinRange(o, t) : void 0
            });
            return o = o.length && !o.filter(function (t) {
                return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
            }).length, -1 === n.item.enable ? !o : o || t.pick < n.item.min.pick || t.pick > n.item.max.pick
        }, n.prototype.parse = function (t, e, n) {
            var o = this, a = {};
            return e && "string" == typeof e ? (n && n.format || ((n = n || {}).format = o.settings.format), o.formats.toArray(n.format).map(function (t) {
                var n = o.formats[t], r = n ? i.trigger(n, o, [e, a]) : t.replace(/^!/, "").length;
                n && (a[t] = e.substr(0, r)), e = e.substr(r)
            }), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : e
        }, n.prototype.formats = function () {
            function t(t, e, n) {
                var i = t.match(/[^\x00-\x7F]+|\w+/)[0];
                return n.mm || n.m || (n.m = e.indexOf(i) + 1), i.length
            }
            function e(t) {
                return t.match(/\w+/)[0].length
            }
            return{d: function (t, e) {
                    return t ? i.digits(t) : e.date
                }, dd: function (t, e) {
                    return t ? 2 : i.lead(e.date)
                }, ddd: function (t, n) {
                    return t ? e(t) : this.settings.weekdaysShort[n.day]
                }, dddd: function (t, n) {
                    return t ? e(t) : this.settings.weekdaysFull[n.day]
                }, m: function (t, e) {
                    return t ? i.digits(t) : e.month + 1
                }, mm: function (t, e) {
                    return t ? 2 : i.lead(e.month + 1)
                }, mmm: function (e, n) {
                    var i = this.settings.monthsShort;
                    return e ? t(e, i, n) : i[n.month]
                }, mmmm: function (e, n) {
                    var i = this.settings.monthsFull;
                    return e ? t(e, i, n) : i[n.month]
                }, yy: function (t, e) {
                    return t ? 2 : ("" + e.year).slice(2)
                }, yyyy: function (t, e) {
                    return t ? 4 : e.year
                }, toArray: function (t) {
                    return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                }, toString: function (t, e) {
                    var n = this;
                    return n.formats.toArray(t).map(function (t) {
                        return i.trigger(n.formats[t], n, [0, e]) || t.replace(/^!/, "")
                    }).join("")
                }}
        }(), n.prototype.isDateExact = function (t, n) {
            var o = this;
            return i.isInteger(t) && i.isInteger(n) || "boolean" == typeof t && "boolean" == typeof n ? t === n : (i.isDate(t) || e.isArray(t)) && (i.isDate(n) || e.isArray(n)) ? o.create(t).pick === o.create(n).pick : !(!e.isPlainObject(t) || !e.isPlainObject(n)) && (o.isDateExact(t.from, n.from) && o.isDateExact(t.to, n.to))
        }, n.prototype.isDateOverlap = function (t, n) {
            var o = this, a = o.settings.firstDay ? 1 : 0;
            return i.isInteger(t) && (i.isDate(n) || e.isArray(n)) ? (t = t % 7 + a) === o.create(n).day + 1 : i.isInteger(n) && (i.isDate(t) || e.isArray(t)) ? (n = n % 7 + a) === o.create(t).day + 1 : !(!e.isPlainObject(t) || !e.isPlainObject(n)) && o.overlapRanges(t, n)
        }, n.prototype.flipEnable = function (t) {
            var e = this.item;
            e.enable = t || (-1 == e.enable ? 1 : -1)
        }, n.prototype.deactivate = function (t, n) {
            var o = this, a = o.item.disable.slice(0);
            return"flip" == n ? o.flipEnable() : !1 === n ? (o.flipEnable(1), a = []) : !0 === n ? (o.flipEnable(-1), a = []) : n.map(function (t) {
                for (var n, r = 0; r < a.length; r += 1)
                    if (o.isDateExact(t, a[r])) {
                        n = !0;
                        break
                    }
                n || (i.isInteger(t) || i.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && a.push(t)
            }), a
        }, n.prototype.activate = function (t, n) {
            var o = this, a = o.item.disable, r = a.length;
            return"flip" == n ? o.flipEnable() : !0 === n ? (o.flipEnable(1), a = []) : !1 === n ? (o.flipEnable(-1), a = []) : n.map(function (t) {
                var n, s, l, c;
                for (l = 0; l < r; l += 1) {
                    if (s = a[l], o.isDateExact(s, t)) {
                        n = a[l] = null, c = !0;
                        break
                    }
                    if (o.isDateOverlap(s, t)) {
                        e.isPlainObject(t) ? (t.inverted = !0, n = t) : e.isArray(t) ? (n = t)[3] || n.push("inverted") : i.isDate(t) && (n = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                        break
                    }
                }
                if (n)
                    for (l = 0; l < r; l += 1)
                        if (o.isDateExact(a[l], t)) {
                            a[l] = null;
                            break
                        }
                if (c)
                    for (l = 0; l < r; l += 1)
                        if (o.isDateOverlap(a[l], t)) {
                            a[l] = null;
                            break
                        }
                n && a.push(n)
            }), a.filter(function (t) {
                return null != t
            })
        }, n.prototype.nodes = function (t) {
            var e = this, n = e.settings, o = e.item, a = o.now, r = o.select, s = o.highlight, l = o.view, c = o.disable, u = o.min, d = o.max, h = function (t, e) {
                return n.firstDay && (t.push(t.shift()), e.push(e.shift())), i.node("thead", i.node("tr", i.group({min: 0, max: 6, i: 1, node: "th", item: function (i) {
                        return[t[i], n.klass.weekdays, 'scope=col title="' + e[i] + '"']
                    }})))
            }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysShort).slice(0), n.weekdaysFull.slice(0)), p = function (t) {
                return i.node("div", " ", n.klass["nav" + (t ? "Next" : "Prev")] + (t && l.year >= d.year && l.month >= d.month || !t && l.year <= u.year && l.month <= u.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + i.ariaAttr({role: "button", controls: e.$node[0].id + "_table"}) + ' title="' + (t ? n.labelMonthNext : n.labelMonthPrev) + '"')
            }, f = function () {
                var o = n.showMonthsShort ? n.monthsShort : n.monthsFull;
                return n.selectMonths ? i.node("select", i.group({min: 0, max: 11, i: 1, node: "option", item: function (t) {
                        return[o[t], 0, "value=" + t + (l.month == t ? " selected" : "") + (l.year == u.year && t < u.month || l.year == d.year && t > d.month ? " disabled" : "")]
                    }}), n.klass.selectMonth, (t ? "" : "disabled") + " " + i.ariaAttr({controls: e.$node[0].id + "_table"}) + ' title="' + n.labelMonthSelect + '"') : i.node("div", o[l.month], n.klass.month)
            }, m = function () {
                var o = l.year, a = !0 === n.selectYears ? 5 : ~~(n.selectYears / 2);
                if (a) {
                    var r = u.year, s = d.year, c = o - a, h = o + a;
                    if (r > c && (h += r - c, c = r), s < h) {
                        var p = c - r, f = h - s;
                        c -= p > f ? f : p, h = s
                    }
                    return i.node("select", i.group({min: c, max: h, i: 1, node: "option", item: function (t) {
                            return[t, 0, "value=" + t + (o == t ? " selected" : "")]
                        }}), n.klass.selectYear, (t ? "" : "disabled") + " " + i.ariaAttr({controls: e.$node[0].id + "_table"}) + ' title="' + n.labelYearSelect + '"')
                }
                return i.node("div", o, n.klass.year)
            };
            return i.node("div", (n.selectYears ? m() + f() : f() + m()) + p() + p(1), n.klass.header) + i.node("table", h + i.node("tbody", i.group({min: 0, max: 5, i: 1, node: "tr", item: function (t) {
                    var o = n.firstDay && 0 === e.create([l.year, l.month, 1]).day ? -7 : 0;
                    return[i.group({min: 7 * t - l.day + o + 1, max: function () {
                                return this.min + 7 - 1
                            }, i: 1, node: "td", item: function (t) {
                                t = e.create([l.year, l.month, t + (n.firstDay ? 1 : 0)]);
                                var o = r && r.pick == t.pick, h = s && s.pick == t.pick, p = c && e.disabled(t) || t.pick < u.pick || t.pick > d.pick, f = i.trigger(e.formats.toString, e, [n.format, t]);
                                return[i.node("div", t.date, function (e) {
                                        return e.push(l.month == t.month ? n.klass.infocus : n.klass.outfocus), a.pick == t.pick && e.push(n.klass.now), o && e.push(n.klass.selected), h && e.push(n.klass.highlighted), p && e.push(n.klass.disabled), e.join(" ")
                                    }([n.klass.day]), "data-pick=" + t.pick + " " + i.ariaAttr({role: "gridcell", label: f, selected: !(!o || e.$node.val() !== f) || null, activedescendant: !!h || null, disabled: !!p || null})), "", i.ariaAttr({role: "presentation"})]
                            }})]
                }})), n.klass.table, 'id="' + e.$node[0].id + '_table" ' + i.ariaAttr({role: "grid", controls: e.$node[0].id, readonly: !0})) + i.node("div", i.node("button", n.today, n.klass.buttonToday, "type=button data-pick=" + a.pick + (t && !e.disabled(a) ? "" : " disabled") + " " + i.ariaAttr({controls: e.$node[0].id})) + i.node("button", n.clear, n.klass.buttonClear, "type=button data-clear=1" + (t ? "" : " disabled") + " " + i.ariaAttr({controls: e.$node[0].id})) + i.node("button", n.close, n.klass.buttonClose, "type=button data-close=true " + (t ? "" : " disabled") + " " + i.ariaAttr({controls: e.$node[0].id})), n.klass.footer)
        }, n.defaults = function (t) {
            return{labelMonthNext: "Next month", labelMonthPrev: "Previous month", labelMonthSelect: "Select a month", labelYearSelect: "Select a year", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], today: "Today", clear: "Clear", close: "Close", closeOnSelect: !0, closeOnClear: !0, format: "d mmmm, yyyy", klass: {table: t + "table", header: t + "header", navPrev: t + "nav--prev", navNext: t + "nav--next", navDisabled: t + "nav--disabled", month: t + "month", year: t + "year", selectMonth: t + "select--month", selectYear: t + "select--year", weekdays: t + "weekday", day: t + "day", disabled: t + "day--disabled", selected: t + "day--selected", highlighted: t + "day--highlighted", now: t + "day--today", infocus: t + "day--infocus", outfocus: t + "day--outfocus", footer: t + "footer", buttonClear: t + "button--clear", buttonToday: t + "button--today", buttonClose: t + "button--close"}}
        }(t.klasses().picker + "__"), t.extend("pickadate", n)
    }), $.extend($.fn.pickadate.defaults, {selectMonths: !0, selectYears: 15, onRender: function () {
            var t = this.$root, e = this.get("highlight", "yyyy"), n = this.get("highlight", "dd"), i = this.get("highlight", "mmm"), o = this.get("highlight", "dddd");
            t.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + '</div><div class="picker__month-display"><div>' + i + '</div></div><div class="picker__day-display"><div>' + n + '</div></div><div    class="picker__year-display"><div>' + e + "</div></div></div>")
        }}), function () {
        function t(t) {
            return document.createElementNS(l, t)
        }
        function e(t) {
            return(t < 10 ? "0" : "") + t
        }
        function n(t) {
            var e = ++g + "";
            return t ? t + e : e
        }
        function i(i, r) {
            function l(t, e) {
                var n = d.offset(), i = /^touch/.test(t.type), o = n.left + v, a = n.top + v, l = (i ? t.originalEvent.touches[0] : t).pageX - o, u = (i ? t.originalEvent.touches[0] : t).pageY - a, h = Math.sqrt(l * l + u * u), m = !1;
                if (!e || !(h < y - x || h > y + x)) {
                    t.preventDefault();
                    var g = setTimeout(function () {
                        P.popover.addClass("clockpicker-moving")
                    }, 200);
                    c && d.append(P.canvas), P.setHand(l, u, !e, !0), s.off(p).on(p, function (t) {
                        t.preventDefault();
                        var e = /^touch/.test(t.type), n = (e ? t.originalEvent.touches[0] : t).pageX - o, i = (e ? t.originalEvent.touches[0] : t).pageY - a;
                        (m || n !== l || i !== u) && (m = !0, P.setHand(n, i, !1, !0))
                    }), s.off(f).on(f, function (t) {
                        s.off(f), t.preventDefault();
                        var n = /^touch/.test(t.type), i = (n ? t.originalEvent.changedTouches[0] : t).pageX - o, c = (n ? t.originalEvent.changedTouches[0] : t).pageY - a;
                        (e || m) && i === l && c === u && P.setHand(i, c), "hours" === P.currentView ? P.toggleView("minutes", k / 2) : r.autoclose && (P.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
                            P.done()
                        }, k / 2)), d.prepend(W), clearTimeout(g), P.popover.removeClass("clockpicker-moving"), s.off(p)
                    })
                }
            }
            var u = a(C), d = u.find(".clockpicker-plate"), m = u.find(".picker__holder"), g = u.find(".clockpicker-hours"), S = u.find(".clockpicker-minutes"), T = u.find(".clockpicker-am-pm-block"), M = "INPUT" === i.prop("tagName"), I = M ? i : i.find("input"), A = a("label[for=" + I.attr("id") + "]"), P = this;
            if (this.id = n("cp"), this.element = i, this.holder = m, this.options = r, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = M, this.input = I, this.label = A, this.popover = u, this.plate = d, this.hoursView = g, this.minutesView = S, this.amPmBlock = T, this.spanHours = u.find(".clockpicker-span-hours"), this.spanMinutes = u.find(".clockpicker-span-minutes"), this.spanAmPm = u.find(".clockpicker-span-am-pm"), this.footer = u.find(".picker__footer"), this.amOrPm = "PM", r.twelvehour) {
                var _ = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                a(_);
                r.ampmclickable ? (this.spanAmPm.empty(), a('<div id="click-am">AM</div>').on("click", function () {
                    P.spanAmPm.children("#click-am").addClass("text-primary"), P.spanAmPm.children("#click-pm").removeClass("text-primary"), P.amOrPm = "AM"
                }).appendTo(this.spanAmPm), a('<div id="click-pm">PM</div>').on("click", function () {
                    P.spanAmPm.children("#click-pm").addClass("text-primary"), P.spanAmPm.children("#click-am").removeClass("text-primary"), P.amOrPm = "PM"
                }).appendTo(this.spanAmPm)) : (a('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function () {
                    P.amOrPm = "AM", P.amPmBlock.children(".pm-button").removeClass("active"), P.amPmBlock.children(".am-button").addClass("active"), P.spanAmPm.empty().append("AM")
                }).appendTo(this.amPmBlock), a('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function () {
                    P.amOrPm = "PM", P.amPmBlock.children(".am-button").removeClass("active"), P.amPmBlock.children(".pm-button").addClass("active"), P.spanAmPm.empty().append("PM")
                }).appendTo(this.amPmBlock))
            }
            r.darktheme && u.addClass("darktheme"), a('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (r.twelvehour ? "3" : "1") + '">' + r.donetext + "</button>").click(a.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(a.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(a.proxy(this.toggleView, this, "minutes")), I.on("focus.clockpicker click.clockpicker", a.proxy(this.show, this));
            var D, E, O, L, F = a('<div class="clockpicker-tick"></div>');
            if (r.twelvehour)
                for (D = 1; D < 13; D += 1)
                    E = F.clone(), O = D / 6 * Math.PI, L = y, E.css("font-size", "140%"), E.css({left: v + Math.sin(O) * L - x, top: v - Math.cos(O) * L - x}), E.html(0 === D ? "00" : D), g.append(E), E.on(h, l);
            else
                for (D = 0; D < 24; D += 1) {
                    E = F.clone(), O = D / 6 * Math.PI;
                    var R = D > 0 && D < 13;
                    L = R ? b : y, E.css({left: v + Math.sin(O) * L - x, top: v - Math.cos(O) * L - x}), R && E.css("font-size", "120%"), E.html(0 === D ? "00" : D), g.append(E), E.on(h, l)
                }
            for (D = 0; D < 60; D += 5)
                E = F.clone(), O = D / 30 * Math.PI, E.css({left: v + Math.sin(O) * y - x, top: v - Math.cos(O) * y - x}), E.css("font-size", "140%"), E.html(e(D)), S.append(E), E.on(h, l);
            if (d.on(h, function (t) {
                0 === a(t.target).closest(".clockpicker-tick").length && l(t, !0)
            }), c) {
                var W = u.find(".clockpicker-canvas"), V = t("svg");
                V.setAttribute("class", "clockpicker-svg"), V.setAttribute("width", w), V.setAttribute("height", w);
                var z = t("g");
                z.setAttribute("transform", "translate(" + v + "," + v + ")");
                var N = t("circle");
                N.setAttribute("class", "clockpicker-canvas-bearing"), N.setAttribute("cx", 0), N.setAttribute("cy", 0), N.setAttribute("r", 2);
                var H = t("line");
                H.setAttribute("x1", 0), H.setAttribute("y1", 0);
                var B = t("circle");
                B.setAttribute("class", "clockpicker-canvas-bg"), B.setAttribute("r", x);
                var Y = t("circle");
                Y.setAttribute("class", "clockpicker-canvas-fg"), Y.setAttribute("r", 5), z.appendChild(H), z.appendChild(B), z.appendChild(Y), z.appendChild(N), V.appendChild(z), W.append(V), this.hand = H, this.bg = B, this.fg = Y, this.bearing = N, this.g = z, this.canvas = W
            }
            o(this.options.init)
        }
        function o(t) {
            t && "function" == typeof t && t()
        }
        var a = window.jQuery, r = a(window), s = a(document), l = "http://www.w3.org/2000/svg", c = "SVGAngle"in window && function () {
            var t, e = document.createElement("div");
            return e.innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == l, e.innerHTML = "", t
        }(), u = function () {
            var t = document.createElement("div").style;
            return"transition"in t || "WebkitTransition"in t || "MozTransition"in t || "msTransition"in t || "OTransition"in t
        }(), d = "ontouchstart"in window, h = "mousedown" + (d ? " touchstart" : ""), p = "mousemove.clockpicker" + (d ? " touchmove.clockpicker" : ""), f = "mouseup.clockpicker" + (d ? " touchend.clockpicker" : ""), m = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, g = 0, v = 135, y = 110, b = 80, x = 20, w = 2 * v, k = u ? 350 : 1, C = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
        i.DEFAULTS = {default: "", fromnow: 0, donetext: "Done", autoclose: !1, ampmclickable: !1, darktheme: !1, twelvehour: !0, vibrate: !0}, i.prototype.toggle = function () {
            this[this.isShown ? "hide" : "show"]()
        }, i.prototype.locate = function () {
            var t = this.element, e = this.popover;
            t.offset(), t.outerWidth(), t.outerHeight(), this.options.align;
            e.show()
        }, i.prototype.show = function (t) {
            if (!this.isShown) {
                o(this.options.beforeShow), a(":input").each(function () {
                    a(this).attr("tabindex", -1)
                });
                var n = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), a(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), r.on("resize.clockpicker" + this.id, function () {
                    n.isShown && n.locate()
                }), this.isAppended = !0);
                var i = ((this.input.prop("value") || this.options.default || "") + "").split(":");
                if (this.options.twelvehour && void 0 !== i[1] && (i[1] = i[1].replace("AM", "").replace("PM", "")), "now" === i[0]) {
                    var l = new Date(+new Date + this.options.fromnow);
                    i = [l.getHours(), l.getMinutes()]
                }
                this.hours = +i[0] || 0, this.minutes = +i[1] || 0, this.spanHours.html(e(this.hours)), this.spanMinutes.html(e(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, s.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (t) {
                    var e = a(t.target);
                    0 === e.closest(n.popover.find(".picker__wrap")).length && 0 === e.closest(n.input).length && n.hide()
                }), s.on("keyup.clockpicker." + this.id, function (t) {
                    27 === t.keyCode && n.hide()
                }), o(this.options.afterShow)
            }
        }, i.prototype.hide = function () {
            o(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), a(document.body).css("overflow", "visible"), this.isShown = !1, a(":input").each(function (t) {
                a(this).attr("tabindex", t + 1)
            }), s.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), s.off("keyup.clockpicker." + this.id), this.popover.hide(), o(this.options.afterHide)
        }, i.prototype.toggleView = function (t, e) {
            var n = !1;
            "minutes" === t && "visible" === a(this.hoursView).css("visibility") && (o(this.options.beforeHourSelect), n = !0);
            var i = "hours" === t, r = i ? this.hoursView : this.minutesView, s = i ? this.minutesView : this.hoursView;
            this.currentView = t, this.spanHours.toggleClass("text-primary", i), this.spanMinutes.toggleClass("text-primary", !i), s.addClass("clockpicker-dial-out"), r.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
                s.css("visibility", "hidden")
            }, k), n && o(this.options.afterHourSelect)
        }, i.prototype.resetClock = function (t) {
            var e = this.currentView, n = this[e], i = "hours" === e, o = n * (Math.PI / (i ? 6 : 30)), a = i && n > 0 && n < 13 ? b : y, r = Math.sin(o) * a, s = -Math.cos(o) * a, l = this;
            c && t ? (l.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
                l.canvas.removeClass("clockpicker-canvas-out"), l.setHand(r, s)
            }, t)) : this.setHand(r, s)
        }, i.prototype.setHand = function (t, n, i, o) {
            var r, s = Math.atan2(t, -n), l = "hours" === this.currentView, u = Math.PI / (l || i ? 6 : 30), d = Math.sqrt(t * t + n * n), h = this.options, p = l && d < (y + b) / 2, f = p ? b : y;
            if (h.twelvehour && (f = y), s < 0 && (s = 2 * Math.PI + s), r = Math.round(s / u), s = r * u, h.twelvehour ? l ? 0 === r && (r = 12) : (i && (r *= 5), 60 === r && (r = 0)) : l ? (12 === r && (r = 0), r = p ? 0 === r ? 12 : r : 0 === r ? 0 : r + 12) : (i && (r *= 5), 60 === r && (r = 0)), l ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : r % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== r && m && this.options.vibrate && (this.vibrateTimer || (navigator[m](10), this.vibrateTimer = setTimeout(a.proxy(function () {
                this.vibrateTimer = null
            }, this), 100))), this[this.currentView] = r, this[l ? "spanHours" : "spanMinutes"].html(e(r)), c) {
                o || !l && r % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
                var g = Math.sin(s) * (f - x), v = -Math.cos(s) * (f - x), w = Math.sin(s) * f, k = -Math.cos(s) * f;
                this.hand.setAttribute("x2", g), this.hand.setAttribute("y2", v), this.bg.setAttribute("cx", w), this.bg.setAttribute("cy", k), this.fg.setAttribute("cx", w), this.fg.setAttribute("cy", k)
            } else
                this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
                    var t = a(this);
                    t.toggleClass("active", r === +t.html())
                })
        }, i.prototype.done = function () {
            o(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var t = this.input.prop("value"), n = e(this.hours) + ":" + e(this.minutes);
            this.options.twelvehour && (n += this.amOrPm), this.input.prop("value", n), n !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), o(this.options.afterDone)
        }, i.prototype.remove = function () {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (r.off("resize.clockpicker" + this.id), this.popover.remove())
        }, a.fn.pickatime = function (t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var n = a(this), o = n.data("clockpicker");
                if (o)
                    "function" == typeof o[t] && o[t].apply(o, e);
                else {
                    var r = a.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
                    n.data("clockpicker", new i(n, r))
                }
            })
        }
    }(), function t(e, n, i) {
        function o(r, s) {
            if (!n[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l)
                        return l(r, !0);
                    if (a)
                        return a(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[r] = {exports: {}};
                e[r][0].call(u.exports, function (t) {
                    var n = e[r][1][t];
                    return o(n || t)
                }, u, u.exports, t, e, n, i)
            }
            return n[r].exports
        }
        for (var a = "function" == typeof require && require, r = 0; r < i.length; r++)
            o(i[r]);
        return o
    }({1: [function (t, e, n) {
                "use strict";
                var i = t("../main");
                "function" == typeof define && define.amd ? define(i) : (window.PerfectScrollbar = i, void 0 === window.Ps && (window.Ps = i))
            }, {"../main": 7}], 2: [function (t, e, n) {
                "use strict";
                function i(t, e) {
                    var n = t.className.split(" ");
                    n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
                }
                function o(t, e) {
                    var n = t.className.split(" "), i = n.indexOf(e);
                    i >= 0 && n.splice(i, 1), t.className = n.join(" ")
                }
                n.add = function (t, e) {
                    t.classList ? t.classList.add(e) : i(t, e)
                }, n.remove = function (t, e) {
                    t.classList ? t.classList.remove(e) : o(t, e)
                }, n.list = function (t) {
                    return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
                }
            }, {}], 3: [function (t, e, n) {
                "use strict";
                function i(t, e) {
                    return window.getComputedStyle(t)[e]
                }
                function o(t, e, n) {
                    return"number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
                }
                function a(t, e) {
                    for (var n in e) {
                        var i = e[n];
                        "number" == typeof i && (i = i.toString() + "px"), t.style[n] = i
                    }
                    return t
                }
                var r = {};
                r.e = function (t, e) {
                    var n = document.createElement(t);
                    return n.className = e, n
                }, r.appendTo = function (t, e) {
                    return e.appendChild(t), t
                }, r.css = function (t, e, n) {
                    return"object" == typeof e ? a(t, e) : void 0 === n ? i(t, e) : o(t, e, n)
                }, r.matches = function (t, e) {
                    return void 0 !== t.matches ? t.matches(e) : void 0 !== t.matchesSelector ? t.matchesSelector(e) : void 0 !== t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : void 0 !== t.mozMatchesSelector ? t.mozMatchesSelector(e) : void 0 !== t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
                }, r.remove = function (t) {
                    void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
                }, r.queryChildren = function (t, e) {
                    return Array.prototype.filter.call(t.childNodes, function (t) {
                        return r.matches(t, e)
                    })
                }, e.exports = r
            }, {}], 4: [function (t, e, n) {
                "use strict";
                var i = function (t) {
                    this.element = t, this.events = {}
                };
                i.prototype.bind = function (t, e) {
                    void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
                }, i.prototype.unbind = function (t, e) {
                    var n = void 0 !== e;
                    this.events[t] = this.events[t].filter(function (i) {
                        return!(!n || i === e) || (this.element.removeEventListener(t, i, !1), !1)
                    }, this)
                }, i.prototype.unbindAll = function () {
                    for (var t in this.events)
                        this.unbind(t)
                };
                var o = function () {
                    this.eventElements = []
                };
                o.prototype.eventElement = function (t) {
                    var e = this.eventElements.filter(function (e) {
                        return e.element === t
                    })[0];
                    return void 0 === e && (e = new i(t), this.eventElements.push(e)), e
                }, o.prototype.bind = function (t, e, n) {
                    this.eventElement(t).bind(e, n)
                }, o.prototype.unbind = function (t, e, n) {
                    this.eventElement(t).unbind(e, n)
                }, o.prototype.unbindAll = function () {
                    for (var t = 0; t < this.eventElements.length; t++)
                        this.eventElements[t].unbindAll()
                }, o.prototype.once = function (t, e, n) {
                    var i = this.eventElement(t), o = function (t) {
                        i.unbind(e, o), n(t)
                    };
                    i.bind(e, o)
                }, e.exports = o
            }, {}], 5: [function (t, e, n) {
                "use strict";
                e.exports = function () {
                    function t() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                    return function () {
                        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
                    }
                }()
            }, {}], 6: [function (t, e, n) {
                "use strict";
                function i(t) {
                    return function (e, n) {
                        t(e, "ps--in-scrolling"), void 0 !== n ? t(e, "ps--" + n) : (t(e, "ps--x"), t(e, "ps--y"))
                    }
                }
                var o = t("./class"), a = t("./dom"), r = n.toInt = function (t) {
                    return parseInt(t, 10) || 0
                }, s = n.clone = function (t) {
                    if (t) {
                        if (Array.isArray(t))
                            return t.map(s);
                        if ("object" == typeof t) {
                            var e = {};
                            for (var n in t)
                                e[n] = s(t[n]);
                            return e
                        }
                        return t
                    }
                    return null
                };
                n.extend = function (t, e) {
                    var n = s(t);
                    for (var i in e)
                        n[i] = s(e[i]);
                    return n
                }, n.isEditable = function (t) {
                    return a.matches(t, "input,[contenteditable]") || a.matches(t, "select,[contenteditable]") || a.matches(t, "textarea,[contenteditable]") || a.matches(t, "button,[contenteditable]")
                }, n.removePsClasses = function (t) {
                    for (var e = o.list(t), n = 0; n < e.length; n++) {
                        var i = e[n];
                        0 === i.indexOf("ps-") && o.remove(t, i)
                    }
                }, n.outerWidth = function (t) {
                    return r(a.css(t, "width")) + r(a.css(t, "paddingLeft")) + r(a.css(t, "paddingRight")) + r(a.css(t, "borderLeftWidth")) + r(a.css(t, "borderRightWidth"))
                }, n.startScrolling = i(o.add), n.stopScrolling = i(o.remove), n.env = {isWebKit: "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style, supportsTouch: "undefined" != typeof window && ("ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch), supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints}
            }, {"./class": 2, "./dom": 3}], 7: [function (t, e, n) {
                "use strict";
                var i = t("./plugin/destroy"), o = t("./plugin/initialize"), a = t("./plugin/update");
                e.exports = {initialize: o, update: a, destroy: i}
            }, {"./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21}], 8: [function (t, e, n) {
                "use strict";
                e.exports = {handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipePropagation: !0, swipeEasing: !0, useBothWheelAxes: !1, wheelPropagation: !1, wheelSpeed: 1, theme: "default"}
            }, {}], 9: [function (t, e, n) {
                "use strict";
                var i = t("../lib/helper"), o = t("../lib/dom"), a = t("./instances");
                e.exports = function (t) {
                    var e = a.get(t);
                    e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), i.removePsClasses(t), a.remove(t))
                }
            }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18}], 10: [function (t, e, n) {
                "use strict";
                function i(t, e) {
                    function n(t) {
                        return t.getBoundingClientRect()
                    }
                    var i = function (t) {
                        t.stopPropagation()
                    };
                    e.event.bind(e.scrollbarY, "click", i), e.event.bind(e.scrollbarYRail, "click", function (i) {
                        var o = i.pageY - window.pageYOffset - n(e.scrollbarYRail).top > e.scrollbarYTop ? 1 : -1;
                        r(t, "top", t.scrollTop + o * e.containerHeight), a(t), i.stopPropagation()
                    }), e.event.bind(e.scrollbarX, "click", i), e.event.bind(e.scrollbarXRail, "click", function (i) {
                        var o = i.pageX - window.pageXOffset - n(e.scrollbarXRail).left > e.scrollbarXLeft ? 1 : -1;
                        r(t, "left", t.scrollLeft + o * e.containerWidth), a(t), i.stopPropagation()
                    })
                }
                var o = t("../instances"), a = t("../update-geometry"), r = t("../update-scroll");
                e.exports = function (t) {
                    i(t, o.get(t))
                }
            }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}], 11: [function (t, e, n) {
                "use strict";
                function i(t, e) {
                    function n(n) {
                        var o = i + n * e.railXRatio, r = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                        e.scrollbarXLeft = o < 0 ? 0 : o > r ? r : o;
                        var s = a.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                        c(t, "left", s)
                    }
                    var i = null, o = null, s = function (e) {
                        n(e.pageX - o), l(t), e.stopPropagation(), e.preventDefault()
                    }, u = function () {
                        a.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
                    };
                    e.event.bind(e.scrollbarX, "mousedown", function (n) {
                        o = n.pageX, i = a.toInt(r.css(e.scrollbarX, "left")) * e.railXRatio, a.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
                    })
                }
                function o(t, e) {
                    function n(n) {
                        var o = i + n * e.railYRatio, r = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                        e.scrollbarYTop = o < 0 ? 0 : o > r ? r : o;
                        var s = a.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                        c(t, "top", s)
                    }
                    var i = null, o = null, s = function (e) {
                        n(e.pageY - o), l(t), e.stopPropagation(), e.preventDefault()
                    }, u = function () {
                        a.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
                    };
                    e.event.bind(e.scrollbarY, "mousedown", function (n) {
                        o = n.pageY, i = a.toInt(r.css(e.scrollbarY, "top")) * e.railYRatio, a.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
                    })
                }
                var a = t("../../lib/helper"), r = t("../../lib/dom"), s = t("../instances"), l = t("../update-geometry"), c = t("../update-scroll");
                e.exports = function (t) {
                    var e = s.get(t);
                    i(t, e), o(t, e)
                }
            }, {"../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}], 12: [function (t, e, n) {
                "use strict";
                function i(t, e) {
                    function n(n, i) {
                        var o = t.scrollTop;
                        if (0 === n) {
                            if (!e.scrollbarYActive)
                                return!1;
                            if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0)
                                return!e.settings.wheelPropagation
                        }
                        var a = t.scrollLeft;
                        if (0 === i) {
                            if (!e.scrollbarXActive)
                                return!1;
                            if (0 === a && n < 0 || a >= e.contentWidth - e.containerWidth && n > 0)
                                return!e.settings.wheelPropagation
                        }
                        return!0
                    }
                    var i = !1;
                    e.event.bind(t, "mouseenter", function () {
                        i = !0
                    }), e.event.bind(t, "mouseleave", function () {
                        i = !1
                    });
                    var r = !1;
                    e.event.bind(e.ownerDocument, "keydown", function (c) {
                        if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                            var u = a.matches(e.scrollbarX, ":focus") || a.matches(e.scrollbarY, ":focus");
                            if (i || u) {
                                var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                                if (d) {
                                    if ("IFRAME" === d.tagName)
                                        d = d.contentDocument.activeElement;
                                    else
                                        for (; d.shadowRoot; )
                                            d = d.shadowRoot.activeElement;
                                    if (o.isEditable(d))
                                        return
                                }
                                var h = 0, p = 0;
                                switch (c.which) {
                                    case 37:
                                        h = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
                                        break;
                                    case 38:
                                        p = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
                                        break;
                                    case 39:
                                        h = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
                                        break;
                                    case 40:
                                        p = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
                                        break;
                                    case 33:
                                        p = 90;
                                        break;
                                    case 32:
                                        p = c.shiftKey ? 90 : -90;
                                        break;
                                    case 34:
                                        p = -90;
                                        break;
                                    case 35:
                                        p = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                        break;
                                    case 36:
                                        p = c.ctrlKey ? t.scrollTop : e.containerHeight;
                                        break;
                                    default:
                                        return
                                }
                                l(t, "top", t.scrollTop - p), l(t, "left", t.scrollLeft + h), s(t), (r = n(h, p)) && c.preventDefault()
                            }
                        }
                    })
                }
                var o = t("../../lib/helper"), a = t("../../lib/dom"), r = t("../instances"), s = t("../update-geometry"), l = t("../update-scroll");
                e.exports = function (t) {
                    i(t, r.get(t))
                }
            }, {"../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}], 13: [function (t, e, n) {
                "use strict";
                function i(t, e) {
                    function n(n, i) {
                        var o = t.scrollTop;
                        if (0 === n) {
                            if (!e.scrollbarYActive)
                                return!1;
                            if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0)
                                return!e.settings.wheelPropagation
                        }
                        var a = t.scrollLeft;
                        if (0 === i) {
                            if (!e.scrollbarXActive)
                                return!1;
                            if (0 === a && n < 0 || a >= e.contentWidth - e.containerWidth && n > 0)
                                return!e.settings.wheelPropagation
                        }
                        return!0
                    }
                    function i(t) {
                        var e = t.deltaX, n = -1 * t.deltaY;
                        return void 0 !== e && void 0 !== n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
                    }
                    function o(e, n) {
                        var i = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                        if (i) {
                            var o = window.getComputedStyle(i);
                            if (![o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/))
                                return!1;
                            var a = i.scrollHeight - i.clientHeight;
                            if (a > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === a && n < 0))
                                return!0;
                            var r = i.scrollLeft - i.clientWidth;
                            if (r > 0 && !(0 === i.scrollLeft && e < 0 || i.scrollLeft === r && e > 0))
                                return!0
                        }
                        return!1
                    }
                    function s(s) {
                        var c = i(s), u = c[0], d = c[1];
                        o(u, d) || (l = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? r(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : r(t, "top", t.scrollTop + u * e.settings.wheelSpeed), l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? r(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : r(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), l = !0) : (r(t, "top", t.scrollTop - d * e.settings.wheelSpeed), r(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), a(t), (l = l || n(u, d)) && (s.stopPropagation(), s.preventDefault()))
                    }
                    var l = !1;
                    void 0 !== window.onwheel ? e.event.bind(t, "wheel", s) : void 0 !== window.onmousewheel && e.event.bind(t, "mousewheel", s)
                }
                var o = t("../instances"), a = t("../update-geometry"), r = t("../update-scroll");
                e.exports = function (t) {
                    i(t, o.get(t))
                }
            }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}], 14: [function (t, e, n) {
                "use strict";
                function i(t, e) {
                    e.event.bind(t, "scroll", function () {
                        a(t)
                    })
                }
                var o = t("../instances"), a = t("../update-geometry");
                e.exports = function (t) {
                    i(t, o.get(t))
                }
            }, {"../instances": 18, "../update-geometry": 19}], 15: [function (t, e, n) {
                "use strict";
                function i(t, e) {
                    function n() {
                        var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                        return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
                    }
                    function i() {
                        c || (c = setInterval(function () {
                            return a.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void r(t)) : void clearInterval(c)
                        }, 50))
                    }
                    function l() {
                        c && (clearInterval(c), c = null), o.stopScrolling(t)
                    }
                    var c = null, u = {top: 0, left: 0}, d = !1;
                    e.event.bind(e.ownerDocument, "selectionchange", function () {
                        t.contains(n()) ? d = !0 : (d = !1, l())
                    }), e.event.bind(window, "mouseup", function () {
                        d && (d = !1, l())
                    }), e.event.bind(window, "keyup", function () {
                        d && (d = !1, l())
                    }), e.event.bind(window, "mousemove", function (e) {
                        if (d) {
                            var n = {x: e.pageX, y: e.pageY}, a = {left: t.offsetLeft, right: t.offsetLeft + t.offsetWidth, top: t.offsetTop, bottom: t.offsetTop + t.offsetHeight};
                            n.x < a.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > a.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < a.top + 3 ? (u.top = a.top + 3 - n.y < 5 ? -5 : -20, o.startScrolling(t, "y")) : n.y > a.bottom - 3 ? (u.top = n.y - a.bottom + 3 < 5 ? 5 : 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : i()
                        }
                    })
                }
                var o = t("../../lib/helper"), a = t("../instances"), r = t("../update-geometry"), s = t("../update-scroll");
                e.exports = function (t) {
                    i(t, a.get(t))
                }
            }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}], 16: [function (t, e, n) {
                "use strict";
                function i(t, e, n, i) {
                    function o(n, i) {
                        var o = t.scrollTop, a = t.scrollLeft, r = Math.abs(n), s = Math.abs(i);
                        if (s > r) {
                            if (i < 0 && o === e.contentHeight - e.containerHeight || i > 0 && 0 === o)
                                return!e.settings.swipePropagation
                        } else if (r > s && (n < 0 && a === e.contentWidth - e.containerWidth || n > 0 && 0 === a))
                            return!e.settings.swipePropagation;
                        return!0
                    }
                    function l(e, n) {
                        s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), r(t)
                    }
                    function c() {
                        x = !0
                    }
                    function u() {
                        x = !1
                    }
                    function d(t) {
                        return t.targetTouches ? t.targetTouches[0] : t
                    }
                    function h(t) {
                        return!(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
                    }
                    function p(t) {
                        if (h(t)) {
                            w = !0;
                            var e = d(t);
                            g.pageX = e.pageX, g.pageY = e.pageY, v = (new Date).getTime(), null !== b && clearInterval(b), t.stopPropagation()
                        }
                    }
                    function f(t) {
                        if (!w && e.settings.swipePropagation && p(t), !x && w && h(t)) {
                            var n = d(t), i = {pageX: n.pageX, pageY: n.pageY}, a = i.pageX - g.pageX, r = i.pageY - g.pageY;
                            l(a, r), g = i;
                            var s = (new Date).getTime(), c = s - v;
                            c > 0 && (y.x = a / c, y.y = r / c, v = s), o(a, r) && (t.stopPropagation(), t.preventDefault())
                        }
                    }
                    function m() {
                        !x && w && (w = !1, e.settings.swipeEasing && (clearInterval(b), b = setInterval(function () {
                            return a.get(t) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                        }, 10)))
                    }
                    var g = {}, v = 0, y = {}, b = null, x = !1, w = !1;
                    n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", p), e.event.bind(t, "touchmove", f), e.event.bind(t, "touchend", m)) : i && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", p), e.event.bind(t, "pointermove", f), e.event.bind(t, "pointerup", m)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", p), e.event.bind(t, "MSPointerMove", f), e.event.bind(t, "MSPointerUp", m)))
                }
                var o = t("../../lib/helper"), a = t("../instances"), r = t("../update-geometry"), s = t("../update-scroll");
                e.exports = function (t) {
                    (o.env.supportsTouch || o.env.supportsIePointer) && i(t, a.get(t), o.env.supportsTouch, o.env.supportsIePointer)
                }
            }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}], 17: [function (t, e, n) {
                "use strict";
                var i = t("../lib/helper"), o = t("../lib/class"), a = t("./instances"), r = t("./update-geometry"), s = {"click-rail": t("./handler/click-rail"), "drag-scrollbar": t("./handler/drag-scrollbar"), keyboard: t("./handler/keyboard"), wheel: t("./handler/mouse-wheel"), touch: t("./handler/touch"), selection: t("./handler/selection")}, l = t("./handler/native-scroll");
                e.exports = function (t, e) {
                    e = "object" == typeof e ? e : {}, o.add(t, "ps");
                    var n = a.add(t);
                    n.settings = i.extend(n.settings, e), o.add(t, "ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function (e) {
                        s[e](t)
                    }), l(t), r(t)
                }
            }, {"../lib/class": 2, "../lib/helper": 6, "./handler/click-rail": 10, "./handler/drag-scrollbar": 11, "./handler/keyboard": 12, "./handler/mouse-wheel": 13, "./handler/native-scroll": 14, "./handler/selection": 15, "./handler/touch": 16, "./instances": 18, "./update-geometry": 19}], 18: [function (t, e, n) {
                "use strict";
                function i(t) {
                    function e() {
                        l.add(t, "ps--focus")
                    }
                    function n() {
                        l.remove(t, "ps--focus")
                    }
                    var i = this;
                    i.settings = s.clone(c), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === u.css(t, "direction"), i.isNegativeScroll = function () {
                        var e = t.scrollLeft, n = null;
                        return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
                    }(), i.negativeScrollAdjustment = i.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, i.event = new d, i.ownerDocument = t.ownerDocument || document, i.scrollbarXRail = u.appendTo(u.e("div", "ps__scrollbar-x-rail"), t), i.scrollbarX = u.appendTo(u.e("div", "ps__scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", e), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = s.toInt(u.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : s.toInt(u.css(i.scrollbarXRail, "top")), i.railBorderXWidth = s.toInt(u.css(i.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(i.scrollbarXRail, "borderRightWidth")), u.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = s.toInt(u.css(i.scrollbarXRail, "marginLeft")) + s.toInt(u.css(i.scrollbarXRail, "marginRight")), u.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = u.appendTo(u.e("div", "ps__scrollbar-y-rail"), t), i.scrollbarY = u.appendTo(u.e("div", "ps__scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", e), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = s.toInt(u.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : s.toInt(u.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? s.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = s.toInt(u.css(i.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(i.scrollbarYRail, "borderBottomWidth")), u.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = s.toInt(u.css(i.scrollbarYRail, "marginTop")) + s.toInt(u.css(i.scrollbarYRail, "marginBottom")), u.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
                }
                function o(t) {
                    return t.getAttribute("data-ps-id")
                }
                function a(t, e) {
                    t.setAttribute("data-ps-id", e)
                }
                function r(t) {
                    t.removeAttribute("data-ps-id")
                }
                var s = t("../lib/helper"), l = t("../lib/class"), c = t("./default-setting"), u = t("../lib/dom"), d = t("../lib/event-manager"), h = t("../lib/guid"), p = {};
                n.add = function (t) {
                    var e = h();
                    return a(t, e), p[e] = new i(t), p[e]
                }, n.remove = function (t) {
                    delete p[o(t)], r(t)
                }, n.get = function (t) {
                    return p[o(t)]
                }
            }, {"../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8}], 19: [function (t, e, n) {
                "use strict";
                function i(t, e) {
                    return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
                }
                function o(t, e) {
                    var n = {width: e.railXWidth};
                    e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);
                    var i = {top: t.scrollTop, height: e.railYHeight};
                    e.isScrollbarYUsingRight ? e.isRtl ? i.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : i.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : i.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, i), s.css(e.scrollbarX, {left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth}), s.css(e.scrollbarY, {top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth})
                }
                var a = t("../lib/helper"), r = t("../lib/class"), s = t("../lib/dom"), l = t("./instances"), c = t("./update-scroll");
                e.exports = function (t) {
                    var e = l.get(t);
                    e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
                    var n;
                    t.contains(e.scrollbarXRail) || ((n = s.queryChildren(t, ".ps__scrollbar-x-rail")).length > 0 && n.forEach(function (t) {
                        s.remove(t)
                    }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || ((n = s.queryChildren(t, ".ps__scrollbar-y-rail")).length > 0 && n.forEach(function (t) {
                        s.remove(t)
                    }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = i(e, a.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = a.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = i(e, a.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = a.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? r.add(t, "ps--active-x") : (r.remove(t, "ps--active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? r.add(t, "ps--active-y") : (r.remove(t, "ps--active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
                }
            }, {"../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20}], 20: [function (t, e, n) {
                "use strict";
                var i = t("./instances"), o = function (t) {
                    var e = document.createEvent("Event");
                    return e.initEvent(t, !0, !0), e
                };
                e.exports = function (t, e, n) {
                    if (void 0 === t)
                        throw"You must provide an element to the update-scroll function";
                    if (void 0 === e)
                        throw"You must provide an axis to the update-scroll function";
                    if (void 0 === n)
                        throw"You must provide a value to the update-scroll function";
                    "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(o("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(o("ps-x-reach-start")));
                    var a = i.get(t);
                    "top" === e && n >= a.contentHeight - a.containerHeight && (n = a.contentHeight - a.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(o("ps-y-reach-end"))), "left" === e && n >= a.contentWidth - a.containerWidth && (n = a.contentWidth - a.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(o("ps-x-reach-end"))), void 0 === a.lastTop && (a.lastTop = t.scrollTop), void 0 === a.lastLeft && (a.lastLeft = t.scrollLeft), "top" === e && n < a.lastTop && t.dispatchEvent(o("ps-scroll-up")), "top" === e && n > a.lastTop && t.dispatchEvent(o("ps-scroll-down")), "left" === e && n < a.lastLeft && t.dispatchEvent(o("ps-scroll-left")), "left" === e && n > a.lastLeft && t.dispatchEvent(o("ps-scroll-right")), "top" === e && n !== a.lastTop && (t.scrollTop = a.lastTop = n, t.dispatchEvent(o("ps-scroll-y"))), "left" === e && n !== a.lastLeft && (t.scrollLeft = a.lastLeft = n, t.dispatchEvent(o("ps-scroll-x")))
                }
            }, {"./instances": 18}], 21: [function (t, e, n) {
                "use strict";
                var i = t("../lib/helper"), o = t("../lib/dom"), a = t("./instances"), r = t("./update-geometry"), s = t("./update-scroll");
                e.exports = function (t) {
                    var e = a.get(t);
                    e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = i.toInt(o.css(e.scrollbarXRail, "marginLeft")) + i.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = i.toInt(o.css(e.scrollbarYRail, "marginTop")) + i.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), r(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
                }
            }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20}]}, {}, [1]);
    var OFFSET_TOP = 50, TRANSITION_DURATION = 1500;
    $(window).scroll(function () {
        $(".navbar").length && ($(".navbar").offset().top > OFFSET_TOP ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
    });
    var _createClass = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value"in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }();
    !function (t) {
        var e = 240, n = 1440, i = function () {
            function i(o, a) {
                var r = this;
                _classCallCheck(this, i);
                var s = !1, l = {menuWidth: e, edge: "left", closeOnClick: !1};
                a = t.extend(l, a), this.options = a;
                var c = o;
                this.menu_id = t("#" + c.attr("data-activates"));
                var u = t("#" + this.menu_id.attr("id") + "> .sidenav-bg");
                a.menuWidth != e && (this.menu_id.css("width", a.menuWidth), u.css("width", a.menuWidth));
                var d = t('<div class="drag-target"></div>');
                t("body").append(d), "left" == a.edge ? (this.menu_id.css("transform", "translateX(-100%)"), d.css({left: 0})) : (this.menu_id.addClass("right-aligned").css("transform", "translateX(100%)"), d.css({right: 0})), this.menu_id.hasClass("fixed") && (window.innerWidth > n && this.menu_id.css("transform", "translateX(0)"), t(window).resize(function () {
                    window.innerWidth > n ? t("#sidenav-overlay").length ? r.removeMenu(!0) : r.menu_id.css("transform", "translateX(0%)") : !1 === s && ("left" === a.edge ? r.menu_id.css("transform", "translateX(-100%)") : r.menu_id.css("transform", "translateX(100%)"))
                })), !0 === this.options.closeOnClick && this.menu_id.on("click", "a:not(.collapsible-header)", function () {
                    sn.removeMenu()
                }), c.click(function (e) {
                    if (e.preventDefault(), !0 === s)
                        s = !1, r.removeMenu();
                    else {
                        var n = t("body"), i = t('<div id="sidenav-overlay"></div>');
                        n.append(i), "left" === r.options.edge ? r.menu_id.velocity({translateX: [0, -1 * a.menuWidth]}, {duration: 300, queue: !1, easing: "easeOutQuad"}) : r.menu_id.velocity({translateX: [0, a.menuWidth]}, {duration: 300, queue: !1, easing: "easeOutQuad"}), i.click(function () {
                            r.removeMenu()
                        })
                    }
                }), d.click(function (t) {
                    r.removeMenu()
                }), d.hammer({prevent_default: !1}).bind("pan", function (e) {
                    if ("touch" == e.gesture.pointerType) {
                        e.gesture.direction;
                        var n = e.gesture.center.x, i = (e.gesture.center.y, e.gesture.velocityX, t("body")), o = i.innerWidth();
                        if (i.css("overflow", "hidden"), i.width(o), 0 === t("#sidenav-overlay").length) {
                            var l = t('<div id="sidenav-overlay"></div>');
                            l.css("opacity", 0).click(function (t) {
                                r.removeMenu()
                            }), t("body").append(l)
                        }
                        if ("left" === a.edge && (n > a.menuWidth ? n = a.menuWidth : n < 0 && (n = 0)), "left" === a.edge)
                            n < a.menuWidth / 2 ? s = !1 : n >= a.menuWidth / 2 && (s = !0), r.menu_id.css("transform", "translateX(" + (n - a.menuWidth) + "px)");
                        else {
                            n < window.innerWidth - a.menuWidth / 2 ? s = !0 : n >= window.innerWidth - a.menuWidth / 2 && (s = !1);
                            var c = n - a.menuWidth / 2;
                            c < 0 && (c = 0), r.menu_id.css("transform", "translateX(" + c + "px)")
                        }
                        var u;
                        "left" === a.edge ? (u = n / a.menuWidth, t("#sidenav-overlay").velocity({opacity: u}, {duration: 10, queue: !1, easing: "easeOutQuad"})) : (u = Math.abs((n - window.innerWidth) / a.menuWidth), t("#sidenav-overlay").velocity({opacity: u}, {duration: 10, queue: !1, easing: "easeOutQuad"}))
                    }
                }).bind("panend", function (e) {
                    if ("touch" == e.gesture.pointerType) {
                        var n = e.gesture.velocityX, i = e.gesture.center.x, o = i - a.menuWidth, l = i - a.menuWidth / 2;
                        o > 0 && (o = 0), l < 0 && (l = 0), "left" === a.edge ? s && n <= .3 || n < -.5 ? (0 != o && r.menu_id.velocity({translateX: [0, o]}, {duration: 300, queue: !1, easing: "easeOutQuad"}), t("#sidenav-overlay").velocity({opacity: 1}, {duration: 50, queue: !1, easing: "easeOutQuad"}), d.css({width: "10px", right: "", left: 0})) : (!s || n > .3) && (t("body").css({overflow: "", width: ""}), r.menu_id.velocity({translateX: [-1 * a.menuWidth - 10, o]}, {duration: 200, queue: !1, easing: "easeOutQuad"}), t("#sidenav-overlay").velocity({opacity: 0}, {duration: 200, queue: !1, easing: "easeOutQuad", complete: function () {
                                t(this).remove()
                            }}), d.css({width: "10px", right: "", left: 0})) : s && n >= -.3 || n > .5 ? (r.menu_id.velocity({translateX: [0, l]}, {duration: 300, queue: !1, easing: "easeOutQuad"}), t("#sidenav-overlay").velocity({opacity: 1}, {duration: 50, queue: !1, easing: "easeOutQuad"}), d.css({width: "50%", right: "", left: 0})) : (!s || n < -.3) && (t("body").css({overflow: "", width: ""}), r.menu_id.velocity({translateX: [a.menuWidth + 10, l]}, {duration: 200, queue: !1, easing: "easeOutQuad"}), t("#sidenav-overlay").velocity({opacity: 0}, {duration: 200, queue: !1, easing: "easeOutQuad", complete: function () {
                                t(r).remove()
                            }}), d.css({width: "10px", right: 0, left: ""}))
                    }
                })
            }
            return _createClass(i, [{key: "removeMenu", value: function (e) {
                        var n = this;
                        this.options.menuWidth, window.innerWidth;
                        t("body").css({overflow: "", width: ""}), "left" === this.options.edge ? this.menu_id.velocity({translateX: "-100%"}, {duration: 200, queue: !1, easing: "easeOutCubic", complete: function () {
                                !0 === e && (n.menu_id.removeAttr("style"), n.menu_id.css("width", n.options.menuWidth))
                            }}) : this.menu_id.velocity({translateX: "100%"}, {duration: 200, queue: !1, easing: "easeOutCubic", complete: function () {
                                !0 === e && (n.menu_id.removeAttr("style"), n.menu_id.css("width", n.options.menuWidth))
                            }}), t("#sidenav-overlay").velocity({opacity: 0}, {duration: 200, queue: !1, easing: "easeOutQuad", complete: function () {
                                t("#sidenav-overlay").remove()
                            }})
                    }}, {key: "show", value: function () {
                        this.trigger("click")
                    }}, {key: "hide", value: function () {
                        t("#sidenav-overlay").trigger("click")
                    }}]), i
        }();
        t.fn.sideNav = function (e) {
            return this.each(function () {
                new i(t(this), e)
            })
        }
    }(jQuery), $(".smooth-scroll").on("click", "a", function (t) {
        t.preventDefault();
        var e = $(this).attr("href"), n = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0, i = $(this).closest("ul").attr("data-allow-hashes");
        $("body,html").animate({scrollTop: $(e).offset().top - n}, 700), void 0 !== i && !1 !== i && history.replaceState(null, null, e)
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (t) {
        function e(t) {
            var e = t.length, i = n.type(t);
            return"function" !== i && !n.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        if (!t.jQuery) {
            var n = function (t, e) {
                return new n.fn.init(t, e)
            };
            n.isWindow = function (t) {
                return null != t && t == t.window
            }, n.type = function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[r.call(t)] || "object" : typeof t
            }, n.isArray = Array.isArray || function (t) {
                return"array" === n.type(t)
            }, n.isPlainObject = function (t) {
                var e;
                if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t))
                    return!1;
                try {
                    if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf"))
                        return!1
                } catch (t) {
                    return!1
                }
                for (e in t)
                    ;
                return void 0 === e || a.call(t, e)
            }, n.each = function (t, n, i) {
                var o = 0, a = t.length, r = e(t);
                if (i) {
                    if (r)
                        for (; a > o && !1 !== n.apply(t[o], i); o++)
                            ;
                    else
                        for (o in t)
                            if (!1 === n.apply(t[o], i))
                                break
                } else if (r)
                    for (; a > o && !1 !== n.call(t[o], o, t[o]); o++)
                        ;
                else
                    for (o in t)
                        if (!1 === n.call(t[o], o, t[o]))
                            break;
                return t
            }, n.data = function (t, e, o) {
                if (void 0 === o) {
                    var a = (r = t[n.expando]) && i[r];
                    if (void 0 === e)
                        return a;
                    if (a && e in a)
                        return a[e]
                } else if (void 0 !== e) {
                    var r = t[n.expando] || (t[n.expando] = ++n.uuid);
                    return i[r] = i[r] || {}, i[r][e] = o, o
                }
            }, n.removeData = function (t, e) {
                var o = t[n.expando], a = o && i[o];
                a && n.each(e, function (t, e) {
                    delete a[e]
                })
            }, n.extend = function () {
                var t, e, i, o, a, r, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
                    if (null != (a = arguments[l]))
                        for (o in a)
                            t = s[o], i = a[o], s !== i && (u && i && (n.isPlainObject(i) || (e = n.isArray(i))) ? (e ? (e = !1, r = t && n.isArray(t) ? t : []) : r = t && n.isPlainObject(t) ? t : {}, s[o] = n.extend(u, r, i)) : void 0 !== i && (s[o] = i));
                return s
            }, n.queue = function (t, i, o) {
                if (t) {
                    i = (i || "fx") + "queue";
                    var a = n.data(t, i);
                    return o ? (!a || n.isArray(o) ? a = n.data(t, i, function (t, n) {
                        var i = n || [];
                        return null != t && (e(Object(t)) ? function (t, e) {
                            for (var n = +e.length, i = 0, o = t.length; n > i; )
                                t[o++] = e[i++];
                            if (n !== n)
                                for (; void 0 !== e[i]; )
                                    t[o++] = e[i++];
                            t.length = o
                        }(i, "string" == typeof t ? [t] : t) : [].push.call(i, t)), i
                    }(o)) : a.push(o), a) : a || []
                }
            }, n.dequeue = function (t, e) {
                n.each(t.nodeType ? [t] : t, function (t, i) {
                    e = e || "fx";
                    var o = n.queue(i, e), a = o.shift();
                    "inprogress" === a && (a = o.shift()), a && ("fx" === e && o.unshift("inprogress"), a.call(i, function () {
                        n.dequeue(i, e)
                    }))
                })
            }, n.fn = n.prototype = {init: function (t) {
                    if (t.nodeType)
                        return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                }, offset: function () {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                    return{top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)}
                }, position: function () {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position; )
                            t = t.offsetParent;
                        return t || document
                    }
                    var e = this[0], t = t.apply(e), i = this.offset(), o = /^(?:body|html)$/i.test(t.nodeName) ? {top: 0, left: 0} : n(t).offset();
                    return i.top -= parseFloat(e.style.marginTop) || 0, i.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), {top: i.top - o.top, left: i.left - o.left}
                }};
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var o = {}, a = o.hasOwnProperty, r = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)
                o["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, t.Velocity = {Utilities: n}
        }
    }(window), function (t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
    }(function () {
        return function (t, e, n, i) {
            function o(t) {
                for (var e = -1, n = t ? t.length : 0, i = []; ++e < n; ) {
                    var o = t[e];
                    o && i.push(o)
                }
                return i
            }
            function a(t) {
                return m.isWrapped(t) ? t = [].slice.call(t) : m.isNode(t) && (t = [t]), t
            }
            function r(t) {
                var e = h.data(t, "velocity");
                return null === e ? i : e
            }
            function s(t) {
                return function (e) {
                    return Math.round(e * t) * (1 / t)
                }
            }
            function l(t, n, i, o) {
                function a(t, e) {
                    return 1 - 3 * e + 3 * t
                }
                function r(t, e) {
                    return 3 * e - 6 * t
                }
                function s(t) {
                    return 3 * t
                }
                function l(t, e, n) {
                    return((a(e, n) * t + r(e, n)) * t + s(e)) * t
                }
                function c(t, e, n) {
                    return 3 * a(e, n) * t * t + 2 * r(e, n) * t + s(e)
                }
                function u(e, n) {
                    for (var o = 0; m > o; ++o) {
                        var a = c(n, t, i);
                        if (0 === a)
                            return n;
                        n -= (l(n, t, i) - e) / a
                    }
                    return n
                }
                function d() {
                    for (var e = 0; b > e; ++e)
                        C[e] = l(e * x, t, i)
                }
                function h(e, n, o) {
                    var a, r, s = 0;
                    do {
                        r = n + (o - n) / 2, a = l(r, t, i) - e, a > 0 ? o = r : n = r
                    } while (Math.abs(a) > v && ++s < y);
                    return r
                }
                function p(e) {
                    for (var n = 0, o = 1, a = b - 1; o != a && C[o] <= e; ++o)
                        n += x;
                    var r = n + (e - C[--o]) / (C[o + 1] - C[o]) * x, s = c(r, t, i);
                    return s >= g ? u(e, r) : 0 == s ? r : h(e, n, n + x)
                }
                function f() {
                    S = !0, (t != n || i != o) && d()
                }
                var m = 4, g = .001, v = 1e-7, y = 10, b = 11, x = 1 / (b - 1), w = "Float32Array"in e;
                if (4 !== arguments.length)
                    return!1;
                for (var k = 0; 4 > k; ++k)
                    if ("number" != typeof arguments[k] || isNaN(arguments[k]) || !isFinite(arguments[k]))
                        return!1;
                t = Math.min(t, 1), i = Math.min(i, 1), t = Math.max(t, 0), i = Math.max(i, 0);
                var C = w ? new Float32Array(b) : new Array(b), S = !1, T = function (e) {
                    return S || f(), t === n && i === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(p(e), n, o)
                };
                T.getControlPoints = function () {
                    return[{x: t, y: n}, {x: i, y: o}]
                };
                var M = "generateBezier(" + [t, n, i, o] + ")";
                return T.toString = function () {
                    return M
                }, T
            }
            function c(t, e) {
                var n = t;
                return m.isString(t) ? b.Easings[t] || (n = !1) : n = m.isArray(t) && 1 === t.length ? s.apply(null, t) : m.isArray(t) && 2 === t.length ? x.apply(null, t.concat([e])) : !(!m.isArray(t) || 4 !== t.length) && l.apply(null, t), !1 === n && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
            }
            function u(t) {
                if (t) {
                    var e = (new Date).getTime(), n = b.State.calls.length;
                    n > 1e4 && (b.State.calls = o(b.State.calls));
                    for (var a = 0; n > a; a++)
                        if (b.State.calls[a]) {
                            var s = b.State.calls[a], l = s[0], c = s[2], p = s[3], f = !!p, g = null;
                            p || (p = b.State.calls[a][3] = e - 16);
                            for (var v = Math.min((e - p) / c.duration, 1), y = 0, x = l.length; x > y; y++) {
                                var k = l[y], S = k.element;
                                if (r(S)) {
                                    var T = !1;
                                    if (c.display !== i && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            var M = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            h.each(M, function (t, e) {
                                                w.setPropertyValue(S, "display", e)
                                            })
                                        }
                                        w.setPropertyValue(S, "display", c.display)
                                    }
                                    c.visibility !== i && "hidden" !== c.visibility && w.setPropertyValue(S, "visibility", c.visibility);
                                    for (var I in k)
                                        if ("element" !== I) {
                                            var A, P = k[I], _ = m.isString(P.easing) ? b.Easings[P.easing] : P.easing;
                                            if (1 === v)
                                                A = P.endValue;
                                            else {
                                                var D = P.endValue - P.startValue;
                                                if (A = P.startValue + D * _(v, c, D), !f && A === P.currentValue)
                                                    continue
                                            }
                                            if (P.currentValue = A, "tween" === I)
                                                g = A;
                                            else {
                                                if (w.Hooks.registered[I]) {
                                                    var E = w.Hooks.getRoot(I), O = r(S).rootPropertyValueCache[E];
                                                    O && (P.rootPropertyValue = O)
                                                }
                                                var L = w.setPropertyValue(S, I, P.currentValue + (0 === parseFloat(A) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                                w.Hooks.registered[I] && (r(S).rootPropertyValueCache[E] = w.Normalizations.registered[E] ? w.Normalizations.registered[E]("extract", null, L[1]) : L[1]), "transform" === L[0] && (T = !0)
                                            }
                                        }
                                    c.mobileHA && r(S).transformCache.translate3d === i && (r(S).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && w.flushTransformCache(S)
                                }
                            }
                            c.display !== i && "none" !== c.display && (b.State.calls[a][2].display = !1), c.visibility !== i && "hidden" !== c.visibility && (b.State.calls[a][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], v, Math.max(0, p + c.duration - e), p, g), 1 === v && d(a)
                        }
                }
                b.State.isTicking && C(u)
            }
            function d(t, e) {
                if (!b.State.calls[t])
                    return!1;
                for (var n = b.State.calls[t][0], o = b.State.calls[t][1], a = b.State.calls[t][2], s = b.State.calls[t][4], l = !1, c = 0, u = n.length; u > c; c++) {
                    var d = n[c].element;
                    if (e || a.loop || ("none" === a.display && w.setPropertyValue(d, "display", a.display), "hidden" === a.visibility && w.setPropertyValue(d, "visibility", a.visibility)), !0 !== a.loop && (h.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(h.queue(d)[1])) && r(d)) {
                        r(d).isAnimating = !1, r(d).rootPropertyValueCache = {};
                        var p = !1;
                        h.each(w.Lists.transforms3D, function (t, e) {
                            var n = /^scale/.test(e) ? 1 : 0, o = r(d).transformCache[e];
                            r(d).transformCache[e] !== i && new RegExp("^\\(" + n + "[^.]").test(o) && (p = !0, delete r(d).transformCache[e])
                        }), a.mobileHA && (p = !0, delete r(d).transformCache.translate3d), p && w.flushTransformCache(d), w.Values.removeClass(d, "velocity-animating")
                    }
                    if (!e && a.complete && !a.loop && c === u - 1)
                        try {
                            a.complete.call(o, o)
                        } catch (t) {
                            setTimeout(function () {
                                throw t
                            }, 1)
                        }
                    s && !0 !== a.loop && s(o), r(d) && !0 === a.loop && !e && (h.each(r(d).tweensContainer, function (t, e) {
                        /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), b(d, "reverse", {loop: !0, delay: a.delay})), !1 !== a.queue && h.dequeue(d, a.queue)
                }
                b.State.calls[t] = !1;
                for (var f = 0, m = b.State.calls.length; m > f; f++)
                    if (!1 !== b.State.calls[f]) {
                        l = !0;
                        break
                    }
                !1 === l && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var h, p = function () {
                if (n.documentMode)
                    return n.documentMode;
                for (var t = 7; t > 4; t--) {
                    var e = n.createElement("div");
                    if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length)
                        return e = null, t
                }
                return i
            }(), f = function () {
                var t = 0;
                return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
                    var n, i = (new Date).getTime();
                    return n = Math.max(0, 16 - (i - t)), t = i + n, setTimeout(function () {
                        e(i + n)
                    }, n)
                }
            }(), m = {isString: function (t) {
                    return"string" == typeof t
                }, isArray: Array.isArray || function (t) {
                    return"[object Array]" === Object.prototype.toString.call(t)
                }, isFunction: function (t) {
                    return"[object Function]" === Object.prototype.toString.call(t)
                }, isNode: function (t) {
                    return t && t.nodeType
                }, isNodeList: function (t) {
                    return"object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== i && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                }, isWrapped: function (t) {
                    return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                }, isSVG: function (t) {
                    return e.SVGElement && t instanceof e.SVGElement
                }, isEmptyObject: function (t) {
                    for (var e in t)
                        return!1;
                    return!0
                }}, g = !1;
            if (t.fn && t.fn.jquery ? (h = t, g = !0) : h = e.Velocity.Utilities, 8 >= p && !g)
                throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            {
                if (!(7 >= p)) {
                    var v = 400, y = "swing", b = {State: {isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: e.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: n.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: []}, CSS: {}, Utilities: h, Redirects: {}, Easings: {}, Promise: e.Promise, defaults: {queue: "", duration: v, easing: y, begin: i, complete: i, progress: i, display: i, visibility: i, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0}, init: function (t) {
                            h.data(t, "velocity", {isSVG: m.isSVG(t), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {}})
                        }, hook: null, mock: !1, version: {major: 1, minor: 2, patch: 2}, debug: !1};
                    e.pageYOffset !== i ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
                    var x = function () {
                        function t(t) {
                            return-t.tension * t.x - t.friction * t.v
                        }
                        function e(e, n, i) {
                            var o = {x: e.x + i.dx * n, v: e.v + i.dv * n, tension: e.tension, friction: e.friction};
                            return{dx: o.v, dv: t(o)}
                        }
                        function n(n, i) {
                            var o = {dx: n.v, dv: t(n)}, a = e(n, .5 * i, o), r = e(n, .5 * i, a), s = e(n, i, r), l = 1 / 6 * (o.dx + 2 * (a.dx + r.dx) + s.dx), c = 1 / 6 * (o.dv + 2 * (a.dv + r.dv) + s.dv);
                            return n.x = n.x + l * i, n.v = n.v + c * i, n
                        }
                        return function t(e, i, o) {
                            var a, r, s, l = {x: -1, v: 0, tension: null, friction: null}, c = [0], u = 0;
                            for (e = parseFloat(e) || 500, i = parseFloat(i) || 20, o = o || null, l.tension = e, l.friction = i, (a = null !== o)?(u = t(e, i), r = u / o * .016):r = .016; s = n(s || l, r), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4; )
                                ;
                            return a ? function (t) {
                                return c[t * (c.length - 1) | 0]
                            } : u
                        }
                    }();
                    b.Easings = {linear: function (t) {
                            return t
                        }, swing: function (t) {
                            return.5 - Math.cos(t * Math.PI) / 2
                        }, spring: function (t) {
                            return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                        }}, h.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
                        b.Easings[e[0]] = l.apply(null, e[1])
                    });
                    var w = b.CSS = {RegEx: {isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi}, Lists: {colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]}, Hooks: {templates: {textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"]}, registered: {}, register: function () {
                                for (a = 0; a < w.Lists.colors.length; a++) {
                                    var t = "color" === w.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                                    w.Hooks.templates[w.Lists.colors[a]] = ["Red Green Blue Alpha", t]
                                }
                                var e, n, i;
                                if (p)
                                    for (e in w.Hooks.templates) {
                                        i = (n = w.Hooks.templates[e])[0].split(" ");
                                        var o = n[1].match(w.RegEx.valueSplit);
                                        "Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), w.Hooks.templates[e] = [i.join(" "), o.join(" ")])
                                    }
                                for (e in w.Hooks.templates) {
                                    i = (n = w.Hooks.templates[e])[0].split(" ");
                                    for (var a in i) {
                                        var r = e + i[a], s = a;
                                        w.Hooks.registered[r] = [e, s]
                                    }
                                }
                            }, getRoot: function (t) {
                                var e = w.Hooks.registered[t];
                                return e ? e[0] : t
                            }, cleanRootPropertyValue: function (t, e) {
                                return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]), e
                            }, extractValue: function (t, e) {
                                var n = w.Hooks.registered[t];
                                if (n) {
                                    var i = n[0], o = n[1];
                                    return(e = w.Hooks.cleanRootPropertyValue(i, e)).toString().match(w.RegEx.valueSplit)[o]
                                }
                                return e
                            }, injectValue: function (t, e, n) {
                                var i = w.Hooks.registered[t];
                                if (i) {
                                    var o, a = i[0], r = i[1];
                                    return n = w.Hooks.cleanRootPropertyValue(a, n), o = n.toString().match(w.RegEx.valueSplit), o[r] = e, o.join(" ")
                                }
                                return n
                            }}, Normalizations: {registered: {clip: function (t, e, n) {
                                    switch (t) {
                                        case"name":
                                            return"clip";
                                        case"extract":
                                            var i;
                                            return w.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(w.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                                        case"inject":
                                            return"rect(" + n + ")"
                                    }
                                }, blur: function (t, e, n) {
                                    switch (t) {
                                        case"name":
                                            return b.State.isFirefox ? "filter" : "-webkit-filter";
                                        case"extract":
                                            var i = parseFloat(n);
                                            if (!i && 0 !== i) {
                                                var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                                i = o ? o[1] : 0
                                            }
                                            return i;
                                        case"inject":
                                            return parseFloat(n) ? "blur(" + n + ")" : "none"
                                    }
                                }, opacity: function (t, e, n) {
                                    if (8 >= p)
                                        switch (t) {
                                            case"name":
                                                return"filter";
                                            case"extract":
                                                var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                                return n = i ? i[1] / 100 : 1;
                                            case"inject":
                                                return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                        }
                                    else
                                        switch (t) {
                                            case"name":
                                                return"opacity";
                                            case"extract":
                                            case"inject":
                                                return n
                                        }
                                }}, register: function () {
                                9 >= p || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                                for (t = 0; t < w.Lists.transformsBase.length; t++)
                                    !function () {
                                        var e = w.Lists.transformsBase[t];
                                        w.Normalizations.registered[e] = function (t, n, o) {
                                            switch (t) {
                                                case"name":
                                                    return"transform";
                                                case"extract":
                                                    return r(n) === i || r(n).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : r(n).transformCache[e].replace(/[()]/g, "");
                                                case"inject":
                                                    var a = !1;
                                                    switch (e.substr(0, e.length - 1)) {
                                                        case"translate":
                                                            a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                            break;
                                                        case"scal":
                                                        case"scale":
                                                            b.State.isAndroid && r(n).transformCache[e] === i && 1 > o && (o = 1), a = !/(\d)$/i.test(o);
                                                            break;
                                                        case"skew":
                                                            a = !/(deg|\d)$/i.test(o);
                                                            break;
                                                        case"rotate":
                                                            a = !/(deg|\d)$/i.test(o)
                                                    }
                                                    return a || (r(n).transformCache[e] = "(" + o + ")"), r(n).transformCache[e]
                                            }
                                        }
                                    }();
                                for (var t = 0; t < w.Lists.colors.length; t++)
                                    !function () {
                                        var e = w.Lists.colors[t];
                                        w.Normalizations.registered[e] = function (t, n, o) {
                                            switch (t) {
                                                case"name":
                                                    return e;
                                                case"extract":
                                                    var a;
                                                    if (w.RegEx.wrappedValueAlreadyExtracted.test(o))
                                                        a = o;
                                                    else {
                                                        var r, s = {black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)"};
                                                        /^[A-z]+$/i.test(o) ? r = s[o] !== i ? s[o] : s.black : w.RegEx.isHex.test(o) ? r = "rgb(" + w.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (r = s.black), a = (r || o).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                                    }
                                                    return 8 >= p || 3 !== a.split(" ").length || (a += " 1"), a;
                                                case"inject":
                                                    return 8 >= p ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                            }
                                        }
                                    }()
                            }}, Names: {camelCase: function (t) {
                                return t.replace(/-(\w)/g, function (t, e) {
                                    return e.toUpperCase()
                                })
                            }, SVGAttribute: function (t) {
                                var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                return(p || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                            }, prefixCheck: function (t) {
                                if (b.State.prefixMatches[t])
                                    return[b.State.prefixMatches[t], !0];
                                for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = e.length; i > n; n++) {
                                    var o;
                                    if (o = 0 === n ? t : e[n] + t.replace(/^\w/, function (t) {
                                        return t.toUpperCase()
                                    }), m.isString(b.State.prefixElement.style[o]))
                                        return b.State.prefixMatches[t] = o, [o, !0]
                                }
                                return[t, !1]
                            }}, Values: {hexToRgb: function (t) {
                                var e, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                                return t = t.replace(n, function (t, e, n, i) {
                                    return e + e + n + n + i + i
                                }), e = i.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                            }, isCSSNullValue: function (t) {
                                return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                            }, getUnitType: function (t) {
                                return/^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                            }, getDisplayType: function (t) {
                                var e = t && t.tagName.toString().toLowerCase();
                                return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                            }, addClass: function (t, e) {
                                t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                            }, removeClass: function (t, e) {
                                t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                            }}, getPropertyValue: function (t, n, o, a) {
                            function s(t, n) {
                                function o() {
                                    c && w.setPropertyValue(t, "display", "none")
                                }
                                var l = 0;
                                if (8 >= p)
                                    l = h.css(t, n);
                                else {
                                    var c = !1;
                                    if (/^(width|height)$/.test(n) && 0 === w.getPropertyValue(t, "display") && (c = !0, w.setPropertyValue(t, "display", w.Values.getDisplayType(t))), !a) {
                                        if ("height" === n && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                            var u = t.offsetHeight - (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0);
                                            return o(), u
                                        }
                                        if ("width" === n && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                            var d = t.offsetWidth - (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0);
                                            return o(), d
                                        }
                                    }
                                    var f;
                                    f = r(t) === i ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === p && "filter" === n ? f.getPropertyValue(n) : f[n]) || null === l) && (l = t.style[n]), o()
                                }
                                if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                                    var m = s(t, "position");
                                    ("fixed" === m || "absolute" === m && /top|left/i.test(n)) && (l = h(t).position()[n] + "px")
                                }
                                return l
                            }
                            var l;
                            if (w.Hooks.registered[n]) {
                                var c = n, u = w.Hooks.getRoot(c);
                                o === i && (o = w.getPropertyValue(t, w.Names.prefixCheck(u)[0])), w.Normalizations.registered[u] && (o = w.Normalizations.registered[u]("extract", t, o)), l = w.Hooks.extractValue(c, o)
                            } else if (w.Normalizations.registered[n]) {
                                var d, f;
                                "transform" !== (d = w.Normalizations.registered[n]("name", t)) && (f = s(t, w.Names.prefixCheck(d)[0]), w.Values.isCSSNullValue(f) && w.Hooks.templates[n] && (f = w.Hooks.templates[n][1])), l = w.Normalizations.registered[n]("extract", t, f)
                            }
                            if (!/^[\d-]/.test(l))
                                if (r(t) && r(t).isSVG && w.Names.SVGAttribute(n))
                                    if (/^(height|width)$/i.test(n))
                                        try {
                                            l = t.getBBox()[n]
                                        } catch (t) {
                                            l = 0
                                        }
                                    else
                                        l = t.getAttribute(n);
                                else
                                    l = s(t, w.Names.prefixCheck(n)[0]);
                            return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
                        }, setPropertyValue: function (t, n, i, o, a) {
                            var s = n;
                            if ("scroll" === n)
                                a.container ? a.container["scroll" + a.direction] = i : "Left" === a.direction ? e.scrollTo(i, a.alternateValue) : e.scrollTo(a.alternateValue, i);
                            else if (w.Normalizations.registered[n] && "transform" === w.Normalizations.registered[n]("name", t))
                                w.Normalizations.registered[n]("inject", t, i), s = "transform", i = r(t).transformCache[n];
                            else {
                                if (w.Hooks.registered[n]) {
                                    var l = n, c = w.Hooks.getRoot(n);
                                    o = o || w.getPropertyValue(t, c), i = w.Hooks.injectValue(l, i, o), n = c
                                }
                                if (w.Normalizations.registered[n] && (i = w.Normalizations.registered[n]("inject", t, i), n = w.Normalizations.registered[n]("name", t)), s = w.Names.prefixCheck(n)[0], 8 >= p)
                                    try {
                                        t.style[s] = i
                                    } catch (t) {
                                        b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                                    }
                                else
                                    r(t) && r(t).isSVG && w.Names.SVGAttribute(n) ? t.setAttribute(n, i) : t.style[s] = i;
                                b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                            }
                            return[s, i]
                        }, flushTransformCache: function (t) {
                            function e(e) {
                                return parseFloat(w.getPropertyValue(t, e))
                            }
                            var n = "";
                            if ((p || b.State.isAndroid && !b.State.isChrome) && r(t).isSVG) {
                                var i = {translate: [e("translateX"), e("translateY")], skewX: [e("skewX")], skewY: [e("skewY")], scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")], rotate: [e("rotateZ"), 0, 0]};
                                h.each(r(t).transformCache, function (t) {
                                    /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), i[t] && (n += t + "(" + i[t].join(" ") + ") ", delete i[t])
                                })
                            } else {
                                var o, a;
                                h.each(r(t).transformCache, function (e) {
                                    return o = r(t).transformCache[e], "transformPerspective" === e ? (a = o, !0) : (9 === p && "rotateZ" === e && (e = "rotate"), void(n += e + o + " "))
                                }), a && (n = "perspective" + a + " " + n)
                            }
                            w.setPropertyValue(t, "transform", n)
                        }};
                    w.Hooks.register(), w.Normalizations.register(), b.hook = function (t, e, n) {
                        var o = i;
                        return t = a(t), h.each(t, function (t, a) {
                            if (r(a) === i && b.init(a), n === i)
                                o === i && (o = b.CSS.getPropertyValue(a, e));
                            else {
                                var s = b.CSS.setPropertyValue(a, e, n);
                                "transform" === s[0] && b.CSS.flushTransformCache(a), o = s
                            }
                        }), o
                    };
                    var k = function () {
                        function t() {
                            return s ? M.promise || null : l
                        }
                        function o() {
                            function t(t) {
                                function d(t, e) {
                                    var n = i, o = i, r = i;
                                    return m.isArray(t) ? (n = t[0], !m.isArray(t[1]) && /^[\d-]/.test(t[1]) || m.isFunction(t[1]) || w.RegEx.isHex.test(t[1]) ? r = t[1] : (m.isString(t[1]) && !w.RegEx.isHex.test(t[1]) || m.isArray(t[1])) && (o = e ? t[1] : c(t[1], s.duration), t[2] !== i && (r = t[2]))) : n = t, e || (o = o || s.easing), m.isFunction(n) && (n = n.call(a, S, C)), m.isFunction(r) && (r = r.call(a, S, C)), [n || 0, o, r]
                                }
                                function p(t, e) {
                                    var n, i;
                                    return i = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                                        return n = t, ""
                                    }), n || (n = w.Values.getUnitType(t)), [i, n]
                                }
                                if (s.begin && 0 === S)
                                    try {
                                        s.begin.call(f, f)
                                    } catch (t) {
                                        setTimeout(function () {
                                            throw t
                                        }, 1)
                                    }
                                if ("scroll" === I) {
                                    var v, x, k, T = /^x$/i.test(s.axis) ? "Left" : "Top", A = parseFloat(s.offset) || 0;
                                    s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, v = s.container["scroll" + T], k = v + h(a).position()[T.toLowerCase()] + A) : s.container = null : (v = b.State.scrollAnchor[b.State["scrollProperty" + T]], x = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === T ? "Top" : "Left")]], k = h(a).offset()[T.toLowerCase()] + A), l = {scroll: {rootPropertyValue: !1, startValue: v, currentValue: v, endValue: k, unitType: "", easing: s.easing, scrollData: {container: s.container, direction: T, alternateValue: x}}, element: a}, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                                } else if ("reverse" === I) {
                                    if (!r(a).tweensContainer)
                                        return void h.dequeue(a, s.queue);
                                    "none" === r(a).opts.display && (r(a).opts.display = "auto"), "hidden" === r(a).opts.visibility && (r(a).opts.visibility = "visible"), r(a).opts.loop = !1, r(a).opts.begin = null, r(a).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = h.extend({}, r(a).opts, s);
                                    D = h.extend(!0, {}, r(a).tweensContainer);
                                    for (var P in D)
                                        if ("element" !== P) {
                                            var _ = D[P].startValue;
                                            D[P].startValue = D[P].currentValue = D[P].endValue, D[P].endValue = _, m.isEmptyObject(y) || (D[P].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(D[P]), a)
                                        }
                                    l = D
                                } else if ("start" === I) {
                                    var D;
                                    r(a).tweensContainer && !0 === r(a).isAnimating && (D = r(a).tweensContainer), h.each(g, function (t, e) {
                                        if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(t)) {
                                            var n = d(e, !0), o = n[0], a = n[1], r = n[2];
                                            if (w.RegEx.isHex.test(o)) {
                                                for (var s = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(o), c = r ? w.Values.hexToRgb(r) : i, u = 0; u < s.length; u++) {
                                                    var h = [l[u]];
                                                    a && h.push(a), c !== i && h.push(c[u]), g[t + s[u]] = h
                                                }
                                                delete g[t]
                                            }
                                        }
                                    });
                                    for (var L in g) {
                                        var F = d(g[L]), R = F[0], W = F[1], V = F[2];
                                        L = w.Names.camelCase(L);
                                        var z = w.Hooks.getRoot(L), N = !1;
                                        if (r(a).isSVG || "tween" === z || !1 !== w.Names.prefixCheck(z)[1] || w.Normalizations.registered[z] !== i) {
                                            (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(L) && !V && 0 !== R && (V = 0), s._cacheValues && D && D[L] ? (V === i && (V = D[L].endValue + D[L].unitType), N = r(a).rootPropertyValueCache[z]) : w.Hooks.registered[L] ? V === i ? (N = w.getPropertyValue(a, z), V = w.getPropertyValue(a, L, N)) : N = w.Hooks.templates[z][1] : V === i && (V = w.getPropertyValue(a, L));
                                            var H, B, Y, j = !1;
                                            if (H = p(L, V), V = H[0], Y = H[1], H = p(L, R), R = H[0].replace(/^([+-\/*])=/, function (t, e) {
                                                return j = e, ""
                                            }), B = H[1], V = parseFloat(V) || 0, R = parseFloat(R) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(L) ? (R /= 100, B = "em") : /^scale/.test(L) ? (R /= 100, B = "") : /(Red|Green|Blue)$/i.test(L) && (R = R / 100 * 255, B = "")), /[\/*]/.test(j))
                                                B = Y;
                                            else if (Y !== B && 0 !== V)
                                                if (0 === R)
                                                    B = Y;
                                                else {
                                                    o = o || function () {
                                                        var t = {myParent: a.parentNode || n.body, position: w.getPropertyValue(a, "position"), fontSize: w.getPropertyValue(a, "fontSize")}, i = t.position === E.lastPosition && t.myParent === E.lastParent, o = t.fontSize === E.lastFontSize;
                                                        E.lastParent = t.myParent, E.lastPosition = t.position, E.lastFontSize = t.fontSize;
                                                        var s = 100, l = {};
                                                        if (o && i)
                                                            l.emToPx = E.lastEmToPx, l.percentToPxWidth = E.lastPercentToPxWidth, l.percentToPxHeight = E.lastPercentToPxHeight;
                                                        else {
                                                            var c = r(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                                            b.init(c), t.myParent.appendChild(c), h.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                                                b.CSS.setPropertyValue(c, e, "hidden")
                                                            }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                                                b.CSS.setPropertyValue(c, e, s + "%")
                                                            }), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = E.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = E.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = E.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / s, t.myParent.removeChild(c)
                                                        }
                                                        return null === E.remToPx && (E.remToPx = parseFloat(w.getPropertyValue(n.body, "fontSize")) || 16), null === E.vwToPx && (E.vwToPx = parseFloat(e.innerWidth) / 100, E.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = E.remToPx, l.vwToPx = E.vwToPx, l.vhToPx = E.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                                                    }();
                                                    var $ = /margin|padding|left|right|width|text|word|letter/i.test(L) || /X$/.test(L) || "x" === L ? "x" : "y";
                                                    switch (Y) {
                                                        case"%":
                                                            V *= "x" === $ ? o.percentToPxWidth : o.percentToPxHeight;
                                                            break;
                                                        case"px":
                                                            break;
                                                        default:
                                                            V *= o[Y + "ToPx"]
                                                    }
                                                    switch (B) {
                                                        case"%":
                                                            V *= 1 / ("x" === $ ? o.percentToPxWidth : o.percentToPxHeight);
                                                            break;
                                                        case"px":
                                                            break;
                                                        default:
                                                            V *= 1 / o[B + "ToPx"]
                                                    }
                                                }
                                            switch (j) {
                                                case"+":
                                                    R = V + R;
                                                    break;
                                                case"-":
                                                    R = V - R;
                                                    break;
                                                case"*":
                                                    R *= V;
                                                    break;
                                                case"/":
                                                    R = V / R
                                            }
                                            l[L] = {rootPropertyValue: N, startValue: V, currentValue: V, endValue: R, unitType: B, easing: W}, b.debug && console.log("tweensContainer (" + L + "): " + JSON.stringify(l[L]), a)
                                        } else
                                            b.debug && console.log("Skipping [" + z + "] due to a lack of browser support.")
                                    }
                                    l.element = a
                                }
                                l.element && (w.Values.addClass(a, "velocity-animating"), O.push(l), "" === s.queue && (r(a).tweensContainer = l, r(a).opts = s), r(a).isAnimating = !0, S === C - 1 ? (b.State.calls.push([O, f, s, null, M.resolver]), !1 === b.State.isTicking && (b.State.isTicking = !0, u())) : S++)
                            }
                            var o, a = this, s = h.extend({}, b.defaults, y), l = {};
                            switch (r(a) === i && b.init(a), parseFloat(s.delay) && !1 !== s.queue && h.queue(a, s.queue, function (t) {
                                    b.velocityQueueEntryFlag = !0, r(a).delayTimer = {setTimeout: setTimeout(t, parseFloat(s.delay)), next: t}
                                }), s.duration.toString().toLowerCase()){case"fast":
                                    s.duration = 200;
                                    break;
                                case"normal":
                                    s.duration = v;
                                    break;
                                case"slow":
                                    s.duration = 600;
                                    break;
                                default:
                                    s.duration = parseFloat(s.duration) || 1
                            }
                            !1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(a))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, !1 === s.queue ? s.delay ? setTimeout(t, s.delay) : t() : h.queue(a, s.queue, function (e, n) {
                                return!0 === n ? (M.promise && M.resolver(f), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                            }), "" !== s.queue && "fx" !== s.queue || "inprogress" === h.queue(a)[0] || h.dequeue(a)
                        }
                        var s, l, p, f, g, y, x = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
                        if (m.isWrapped(this) ? (s = !1, p = 0, f = this, l = this) : (s = !0, p = 1, f = x ? arguments[0].elements || arguments[0].e : arguments[0]), f = a(f)) {
                            x ? (g = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (g = arguments[p], y = arguments[p + 1]);
                            var C = f.length, S = 0;
                            if (!/^(stop|finish)$/i.test(g) && !h.isPlainObject(y)) {
                                y = {};
                                for (var T = p + 1; T < arguments.length; T++)
                                    m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? y.easing = arguments[T] : m.isFunction(arguments[T]) && (y.complete = arguments[T]) : y.duration = arguments[T]
                            }
                            var M = {promise: null, resolver: null, rejecter: null};
                            s && b.Promise && (M.promise = new b.Promise(function (t, e) {
                                M.resolver = t, M.rejecter = e
                            }));
                            var I;
                            switch (g) {
                                case"scroll":
                                    I = "scroll";
                                    break;
                                case"reverse":
                                    I = "reverse";
                                    break;
                                case"finish":
                                case"stop":
                                    h.each(f, function (t, e) {
                                        r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer)
                                    });
                                    var A = [];
                                    return h.each(b.State.calls, function (t, e) {
                                        e && h.each(e[1], function (n, o) {
                                            var a = y === i ? "" : y;
                                            return!0 !== a && e[2].queue !== a && (y !== i || !1 !== e[2].queue) || void h.each(f, function (n, i) {
                                                i === o && ((!0 === y || m.isString(y)) && (h.each(h.queue(i, m.isString(y) ? y : ""), function (t, e) {
                                                    m.isFunction(e) && e(null, !0)
                                                }), h.queue(i, m.isString(y) ? y : "", [])), "stop" === g ? (r(i) && r(i).tweensContainer && !1 !== a && h.each(r(i).tweensContainer, function (t, e) {
                                                    e.endValue = e.currentValue
                                                }), A.push(t)) : "finish" === g && (e[2].duration = 1))
                                            })
                                        })
                                    }), "stop" === g && (h.each(A, function (t, e) {
                                        d(e, !0)
                                    }), M.promise && M.resolver(f)), t();
                                default:
                                    if (!h.isPlainObject(g) || m.isEmptyObject(g)) {
                                        if (m.isString(g) && b.Redirects[g]) {
                                            var P = (F = h.extend({}, y)).duration, _ = F.delay || 0;
                                            return!0 === F.backwards && (f = h.extend(!0, [], f).reverse()), h.each(f, function (t, e) {
                                                parseFloat(F.stagger) ? F.delay = _ + parseFloat(F.stagger) * t : m.isFunction(F.stagger) && (F.delay = _ + F.stagger.call(e, t, C)), F.drag && (F.duration = parseFloat(P) || (/^(callout|transition)/.test(g) ? 1e3 : v), F.duration = Math.max(F.duration * (F.backwards ? 1 - t / C : (t + 1) / C), .75 * F.duration, 200)), b.Redirects[g].call(e, e, F || {}, t, C, f, M.promise ? M : i)
                                            }), t()
                                        }
                                        var D = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                        return M.promise ? M.rejecter(new Error(D)) : console.log(D), t()
                                    }
                                    I = "start"
                            }
                            var E = {lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null}, O = [];
                            h.each(f, function (t, e) {
                                m.isNode(e) && o.call(e)
                            });
                            var L, F = h.extend({}, b.defaults, y);
                            if (F.loop = parseInt(F.loop), L = 2 * F.loop - 1, F.loop)
                                for (var R = 0; L > R; R++) {
                                    var W = {delay: F.delay, progress: F.progress};
                                    R === L - 1 && (W.display = F.display, W.visibility = F.visibility, W.complete = F.complete), k(f, "reverse", W)
                                }
                            return t()
                        }
                    };
                    (b = h.extend(k, b)).animate = k;
                    var C = e.requestAnimationFrame || f;
                    return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
                        n.hidden ? (C = function (t) {
                            return setTimeout(function () {
                                t(!0)
                            }, 16)
                        }, u()) : C = e.requestAnimationFrame || f
                    }), t.Velocity = b, t !== e && (t.fn.velocity = k, t.fn.velocity.defaults = b.defaults), h.each(["Down", "Up"], function (t, e) {
                        b.Redirects["slide" + e] = function (t, n, o, a, r, s) {
                            var l = h.extend({}, n), c = l.begin, u = l.complete, d = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""}, p = {};
                            l.display === i && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
                                c && c.call(r, r);
                                for (var n in d) {
                                    p[n] = t.style[n];
                                    var i = b.CSS.getPropertyValue(t, n);
                                    d[n] = "Down" === e ? [i, 0] : [0, i]
                                }
                                p.overflow = t.style.overflow, t.style.overflow = "hidden"
                            }, l.complete = function () {
                                for (var e in p)
                                    t.style[e] = p[e];
                                u && u.call(r, r), s && s.resolver(r)
                            }, b(t, d, l)
                        }
                    }), h.each(["In", "Out"], function (t, e) {
                        b.Redirects["fade" + e] = function (t, n, o, a, r, s) {
                            var l = h.extend({}, n), c = {opacity: "In" === e ? 1 : 0}, u = l.complete;
                            l.complete = o !== a - 1 ? l.begin = null : function () {
                                u && u.call(r, r), s && s.resolver(r)
                            }, l.display === i && (l.display = "In" === e ? "auto" : "none"), b(this, c, l)
                        }
                    }), b
                }
                jQuery.fn.velocity = jQuery.fn.animate
            }
        }(window.jQuery || window.Zepto || window, window, document)
    })), function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function () {
            return e.apply(t)
        }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
    }("object" == typeof global ? global : this, function () {
        "use strict";
        function t(t) {
            return null !== t && t === t.window
        }
        function e(e) {
            return t(e) ? e : 9 === e.nodeType && e.defaultView
        }
        function n(t) {
            var e = typeof t;
            return"function" === e || "object" === e && !!t
        }
        function i(t) {
            return n(t) && t.nodeType > 0
        }
        function o(t) {
            var e = h.call(t);
            return"[object String]" === e ? d(t) : n(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) && t.hasOwnProperty("length") ? t : i(t) ? [t] : []
        }
        function a(t) {
            var n, i, o = {top: 0, left: 0}, a = t && t.ownerDocument;
            return n = a.documentElement, void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()), i = e(a), {top: o.top + i.pageYOffset - n.clientTop, left: o.left + i.pageXOffset - n.clientLeft}
        }
        function r(t) {
            var e = "";
            for (var n in t)
                t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
            return e
        }
        function s(t, e, n) {
            if (n) {
                n.classList.remove("waves-rippling");
                var i = n.getAttribute("data-x"), o = n.getAttribute("data-y"), a = n.getAttribute("data-scale"), s = n.getAttribute("data-translate"), l = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                l < 0 && (l = 0), "mousemove" === t.type && (l = 150);
                var c = "mousemove" === t.type ? 2500 : f.duration;
                setTimeout(function () {
                    var t = {top: o + "px", left: i + "px", opacity: "0", "-webkit-transition-duration": c + "ms", "-moz-transition-duration": c + "ms", "-o-transition-duration": c + "ms", "transition-duration": c + "ms", "-webkit-transform": a + " " + s, "-moz-transform": a + " " + s, "-ms-transform": a + " " + s, "-o-transform": a + " " + s, transform: a + " " + s};
                    n.setAttribute("style", r(t)), setTimeout(function () {
                        try {
                            e.removeChild(n)
                        } catch (t) {
                            return!1
                        }
                    }, c)
                }, l)
            }
        }
        function l(t) {
            if (!1 === g.allowEvent(t))
                return null;
            for (var e = null, n = t.target || t.srcElement; null !== n.parentElement; ) {
                if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
                    e = n;
                    break
                }
                n = n.parentElement
            }
            return e
        }
        function c(t) {
            var e = l(t);
            if (null !== e) {
                if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled"))
                    return;
                if (g.registerEvent(t), "touchstart" === t.type && f.delay) {
                    var n = !1, i = setTimeout(function () {
                        i = null, f.show(t, e)
                    }, f.delay), o = function (o) {
                        i && (clearTimeout(i), i = null, f.show(t, e)), n || (n = !0, f.hide(o, e))
                    };
                    e.addEventListener("touchmove", function (t) {
                        i && (clearTimeout(i), i = null), o(t)
                    }, !1), e.addEventListener("touchend", o, !1), e.addEventListener("touchcancel", o, !1)
                } else
                    f.show(t, e), p && (e.addEventListener("touchend", f.hide, !1), e.addEventListener("touchcancel", f.hide, !1)), e.addEventListener("mouseup", f.hide, !1), e.addEventListener("mouseleave", f.hide, !1)
            }
        }
        var u = u || {}, d = document.querySelectorAll.bind(document), h = Object.prototype.toString, p = "ontouchstart"in window, f = {duration: 750, delay: 200, show: function (t, e, n) {
                if (2 === t.button)
                    return!1;
                e = e || this;
                var i = document.createElement("div");
//                i.className = "waves-ripple waves-rippling", e.appendChild(i);
                var o = a(e), s = 0, l = 0;
                "touches"in t && t.touches.length ? (s = t.touches[0].pageY - o.top, l = t.touches[0].pageX - o.left) : (s = t.pageY - o.top, l = t.pageX - o.left), l = l >= 0 ? l : 0, s = s >= 0 ? s : 0;
                var c = "scale(" + e.clientWidth / 100 * 3 + ")", u = "translate(0,0)";
                n && (u = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", l), i.setAttribute("data-y", s), i.setAttribute("data-scale", c), i.setAttribute("data-translate", u);
                var d = {top: s + "px", left: l + "px"};
                i.classList.add("waves-notransition"), i.setAttribute("style", r(d)), i.classList.remove("waves-notransition"), d["-webkit-transform"] = c + " " + u, d["-moz-transform"] = c + " " + u, d["-ms-transform"] = c + " " + u, d["-o-transform"] = c + " " + u, d.transform = c + " " + u, d.opacity = "1";
                var h = "mousemove" === t.type ? 2500 : f.duration;
                d["-webkit-transition-duration"] = h + "ms", d["-moz-transition-duration"] = h + "ms", d["-o-transition-duration"] = h + "ms", d["transition-duration"] = h + "ms", i.setAttribute("style", r(d))
            }, hide: function (t, e) {
                for (var n = (e = e || this).getElementsByClassName("waves-rippling"), i = 0, o = n.length; i < o; i++)
                    s(t, e, n[i])
            }}, m = {input: function (t) {
                var e = t.parentNode, n = document.createElement("div");
                n.className = "waves-input-wrapper", e.replaceChild(n, t), n.appendChild(t)
            }, img: function (t) {
                var e = t.parentNode;
                if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                    var n = document.createElement("i");
                    e.replaceChild(n, t), n.appendChild(t)
                }
            }}, g = {touches: 0, allowEvent: function (t) {
                var e = !0;
                return/^(mousedown|mousemove)$/.test(t.type) && g.touches && (e = !1), e
            }, registerEvent: function (t) {
                var e = t.type;
                "touchstart" === e ? g.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () {
                    g.touches && (g.touches -= 1)
                }, 500)
            }};
        return u.init = function (t) {
            var e = document.body;
            "duration"in(t = t || {}) && (f.duration = t.duration), "delay"in t && (f.delay = t.delay), p && (e.addEventListener("touchstart", c, !1), e.addEventListener("touchcancel", g.registerEvent, !1), e.addEventListener("touchend", g.registerEvent, !1)), e.addEventListener("mousedown", c, !1)
        }, u.attach = function (t, e) {
            t = o(t), "[object Array]" === h.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
            for (var n, i, a = 0, r = t.length; a < r; a++)
                i = (n = t[a]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(i) && (m[i](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e)
        }, u.ripple = function (t, e) {
            var n = (t = o(t)).length;
            if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, n)
                for (var i, r, s, l = {}, c = 0, u = {type: "mousedown", button: 1}; c < n; c++)
                    if (i = t[c], r = e.position || {x: i.clientWidth / 2, y: i.clientHeight / 2}, s = a(i), l.x = s.left + r.x, l.y = s.top + r.y, u.pageX = l.x, u.pageY = l.y, f.show(u, i), e.wait >= 0 && null !== e.wait) {
                        var d = {type: "mouseup", button: 1};
                        setTimeout(function (t, e) {
                            return function () {
                                f.hide(t, e)
                            }
                        }(d, i), e.wait)
                    }
        }, u.calm = function (t) {
            for (var e = {type: "mouseup", button: 1}, n = 0, i = (t = o(t)).length; n < i; n++)
                f.hide(e, t[n])
        }, u.displayEffect = function (t) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), u.init(t)
        }, u
    }), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".view .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".waves-effect", ["waves-effect"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init();
    var WOW = function (t) {
        var e = t || {};
        this._boxClass = e.boxClass || "wow", this._animateClass = e.animateClass || "animated", this._offset = e.offset || 0, this._mobile = void 0 === e.mobile, this._live = void 0 === e.live, this._seoFixEnabled = void 0 === e.seoFixEnabled, this._animationDuration = e.animationDuration || "1s", this._animationDelay = e.animationDelay || "0s", this._initStorageVariables()
    };
    WOW.prototype._initStorageVariables = function () {
        this._animation = [], this._boxes = [], this._cleanupBoxListener = [], this._cleanupBoxVisibleListener = []
    }, WOW.prototype.init = function () {
        !this._mobile && this._isMobile() || (this._eachBoxInit(this._prepareBox.bind(this)), this._startWow())
    }, WOW.prototype._isMobile = function () {
        return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, WOW.prototype._eachBoxInit = function (t) {
        for (var e = document.getElementsByClassName(this._boxClass), n = 0; n < e.length; n++)
            !function (n) {
                t(e[n], n)
            }(n)
    }, WOW.prototype._prepareBox = function (t) {
        var e = this._boxes.push(t) - 1;
        this._animation[e] = {animationName: t.style.animationName || window.getComputedStyle(t, null).animationName}, t.style.animationName = "none", t.style.visibility = "hidden"
    }, WOW.prototype._startWow = function () {
        this._live && this._checkForChanges(), 0 === this._scrollY() && this._seoFixEnabled && this._seoFix(), this._appearInView(), this._scrollHandler()
    }, WOW.prototype._scrollY = function () {
        return this._isInt(window.pageYOffset) ? window.pageYOffset : this._isInt(document.documentElement.scrollTop) ? document.documentElement.scrollTop : this._isInt(document.body.scrollTop) ? document.body.scrollTop : void 0
    }, WOW.prototype._isInt = function (t) {
        return"number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, WOW.prototype._seoFix = function () {
        this._showNotInView()
    }, WOW.prototype._appear = function (t, e) {
        t.style.animationPlayState || t.style.WebkitAnimationPlayState;
        -1 === t.className.indexOf(this._animateClass) && (delete this._boxes[e], this._onStartAnimation(t, e), this._onStopAnimation(t, e), this._animate(t, e, this._getAnimationConfig(t)))
    }, WOW.prototype._onStartAnimation = function (t, e) {
        this._cleanupBoxVisibleListener[e] = this._boxVisible.bind(this, t, e), t.addEventListener("animationstart", this._cleanupBoxVisibleListener[e]), t.addEventListener("webkitAnimationStart", this._cleanupBoxVisibleListener[e])
    }, WOW.prototype._onStopAnimation = function (t, e) {
        this._cleanupBoxListener[e] = this._cleanupBox.bind(this, t, e), t.addEventListener("animationend", this._cleanupBoxListener[e]), t.addEventListener("webkitAnimationEnd", this._cleanupBoxListener[e])
    }, WOW.prototype._getAnimationConfig = function (t) {
        return{delay: this._getDelay(t), duration: this._getDuration(t), iterations: this._getIterations(t)}
    }, WOW.prototype._getDelay = function (t) {
        return t.getAttribute("data-wow-delay") || this._animationDelay
    }, WOW.prototype._getDuration = function (t) {
        return t.getAttribute("data-wow-duration") || this._animationDuration
    }, WOW.prototype._getIterations = function (t) {
        return t.getAttribute("data-wow-iteration") || t.style.animationIterationCount || window.getComputedStyle(t, null).animationIterationCount || 1
    }, WOW.prototype._animate = function (t, e, n) {
        t.style.animationDelay = n.delay, t.style.animationDuration = n.duration, t.style.animationIterationCount = n.iterations, t.style.animationName = this._animation[e].animationName, t.className += " " + this._animateClass
    }, WOW.prototype._boxVisible = function (t, e) {
        t.style.visibility = "visible", t.removeEventListener("animationstart", this._cleanupBoxVisibleListener[e]), t.removeEventListener("webkitAnimationStart", this._cleanupBoxVisibleListener[e]), delete this._cleanupBoxVisibleListener[e]
    }, WOW.prototype._cleanupBox = function (t, e) {
        t.style.animationDelay = "", t.style.animationDuration = "", t.style.animationIterationCount = "", t.style.animationName = "none", this._cleanupClass(t), t.removeEventListener("animationend", this._cleanupBoxListener[e]), t.removeEventListener("webkitAnimationEnd", this._cleanupBoxListener[e]), delete this._cleanupBoxListener[e]
    }, WOW.prototype._cleanupClass = function (t) {
        var e = t.className.split(" "), n = e.indexOf(this._animateClass);
        -1 !== n && (e.splice(n, 1), t.className = e.join(" "))
    }, WOW.prototype._eachBox = function (t) {
        for (var e = 0; e < this._boxes.length; e++)
            this._boxes[e] && function (e) {
                t(this._boxes[e], e)
            }.bind(this)(e)
    }, WOW.prototype._scrollHandler = function () {
        this._hideSeoFixListener = this._hideSeoFix.bind(this), window.addEventListener("scroll", this._hideSeoFixListener), window.addEventListener("scroll", this._appearInView.bind(this)), window.addEventListener("resize", this._appearInView.bind(this))
    }, WOW.prototype._hideSeoFix = function () {
        window.removeEventListener("scroll", this._hideSeoFixListener), delete this._hideSeoFixListener, this._eachBox(function (t, e) {
            this._isInView(t) || (t.style.visibility = "hidden")
        }.bind(this))
    }, WOW.prototype._appearInView = function () {
        this._eachBox(function (t, e) {
            this._animateBox(t, e)
        }.bind(this))
    }, WOW.prototype._animateBox = function (t, e) {
        this._isInView(t) && (delete this._boxes[e], this._appear(t, e))
    }, WOW.prototype._showNotInView = function () {
        this._eachBox(function (t, e) {
            this._makeVisible(t, e)
        }.bind(this))
    }, WOW.prototype._makeVisible = function (t, e) {
        this._isInView(t) || (this._boxes[e].style.visibility = "visible")
    }, WOW.prototype._isInView = function (t) {
        var e = t.getAttribute("data-wow-offset") || this._offset, n = this._getElementOffset(t) + ~~e;
        return n <= window.innerHeight + this._scrollY() && (0 === n ? 10 : n) >= this._scrollY()
    }, WOW.prototype._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), n = document.body, i = this._scrollY(), o = document.documentElement.clientTop || n.clientTop || 0, a = e.top + i - o;
        return Math.round(a)
    }, WOW.prototype._checkForChanges = function () {
        var t = {childList: !0, subtree: !0};
        new (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(this._mutations.bind(this)).observe(document.body, t)
    }, WOW.prototype._mutations = function (t) {
        t.forEach(function (t) {
            for (var e = 0; e < t.addedNodes.length; e++)
                this.doSync(t.addedNodes[e])
        }.bind(this))
    }, WOW.prototype.doSync = function (t) {
        t.className && -1 !== t.className.split(" ").indexOf(this._boxClass) && this._prepareBox(t)
    }, function (t) {
        if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = t();
        else if ("function" == typeof define && define.amd)
            define([], t);
        else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
        }
    }(function () {
        return function t(e, n, i) {
            function o(r, s) {
                if (!n[r]) {
                    if (!e[r]) {
                        var l = "function" == typeof require && require;
                        if (!s && l)
                            return l(r, !0);
                        if (a)
                            return a(r, !0);
                        var c = new Error("Cannot find module '" + r + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var u = n[r] = {exports: {}};
                    e[r][0].call(u.exports, function (t) {
                        var n = e[r][1][t];
                        return o(n || t)
                    }, u, u.exports, t, e, n, i)
                }
                return n[r].exports
            }
            for (var a = "function" == typeof require && require, r = 0; r < i.length; r++)
                o(i[r]);
            return o
        }({1: [function (t, e, n) {}, {}], 2: [function (t, e, n) {
                    function i(t) {
                        if (t) {
                            var e = /^#([a-fA-F0-9]{3})$/, n = /^#([a-fA-F0-9]{6})$/, i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, o = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, a = /(\w+)/, r = [0, 0, 0], s = 1, l = t.match(e);
                            if (l) {
                                l = l[1];
                                for (u = 0; u < r.length; u++)
                                    r[u] = parseInt(l[u] + l[u], 16)
                            } else if (l = t.match(n)) {
                                l = l[1];
                                for (u = 0; u < r.length; u++)
                                    r[u] = parseInt(l.slice(2 * u, 2 * u + 2), 16)
                            } else if (l = t.match(i)) {
                                for (u = 0; u < r.length; u++)
                                    r[u] = parseInt(l[u + 1]);
                                s = parseFloat(l[4])
                            } else if (l = t.match(o)) {
                                for (u = 0; u < r.length; u++)
                                    r[u] = Math.round(2.55 * parseFloat(l[u + 1]));
                                s = parseFloat(l[4])
                            } else if (l = t.match(a)) {
                                if ("transparent" == l[1])
                                    return[0, 0, 0, 0];
                                if (!(r = d[l[1]]))
                                    return
                            }
                            for (var u = 0; u < r.length; u++)
                                r[u] = c(r[u], 0, 255);
                            return s = s || 0 == s ? c(s, 0, 1) : 1, r[3] = s, r
                        }
                    }
                    function o(t) {
                        if (t) {
                            var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/, n = t.match(e);
                            if (n) {
                                var i = parseFloat(n[4]);
                                return[c(parseInt(n[1]), 0, 360), c(parseFloat(n[2]), 0, 100), c(parseFloat(n[3]), 0, 100), c(isNaN(i) ? 1 : i, 0, 1)]
                            }
                        }
                    }
                    function a(t) {
                        if (t) {
                            var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/, n = t.match(e);
                            if (n) {
                                var i = parseFloat(n[4]);
                                return[c(parseInt(n[1]), 0, 360), c(parseFloat(n[2]), 0, 100), c(parseFloat(n[3]), 0, 100), c(isNaN(i) ? 1 : i, 0, 1)]
                            }
                        }
                    }
                    function r(t, e) {
                        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
                    }
                    function s(t, e) {
                        return"rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
                    }
                    function l(t, e) {
                        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
                    }
                    function c(t, e, n) {
                        return Math.min(Math.max(e, t), n)
                    }
                    function u(t) {
                        var e = t.toString(16).toUpperCase();
                        return e.length < 2 ? "0" + e : e
                    }
                    var d = t(6);
                    e.exports = {getRgba: i, getHsla: o, getRgb: function (t) {
                            var e = i(t);
                            return e && e.slice(0, 3)
                        }, getHsl: function (t) {
                            var e = o(t);
                            return e && e.slice(0, 3)
                        }, getHwb: a, getAlpha: function (t) {
                            var e = i(t);
                            return e ? e[3] : (e = o(t)) ? e[3] : (e = a(t)) ? e[3] : void 0
                        }, hexString: function (t) {
                            return"#" + u(t[0]) + u(t[1]) + u(t[2])
                        }, rgbString: function (t, e) {
                            return e < 1 || t[3] && t[3] < 1 ? r(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                        }, rgbaString: r, percentString: function (t, e) {
                            return e < 1 || t[3] && t[3] < 1 ? s(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
                        }, percentaString: s, hslString: function (t, e) {
                            return e < 1 || t[3] && t[3] < 1 ? l(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                        }, hslaString: l, hwbString: function (t, e) {
                            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                        }, keyword: function (t) {
                            return h[t.slice(0, 3)]
                        }};
                    var h = {};
                    for (var p in d)
                        h[d[p]] = p
                }, {6: 6}], 3: [function (t, e, n) {
                    var i = t(5), o = t(2), a = function (t) {
                        if (t instanceof a)
                            return t;
                        if (!(this instanceof a))
                            return new a(t);
                        this.valid = !1, this.values = {rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1};
                        var e;
                        "string" == typeof t ? (e = o.getRgba(t)) ? this.setValues("rgb", e) : (e = o.getHsla(t)) ? this.setValues("hsl", e) : (e = o.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e))
                    };
                    a.prototype = {isValid: function () {
                            return this.valid
                        }, rgb: function () {
                            return this.setSpace("rgb", arguments)
                        }, hsl: function () {
                            return this.setSpace("hsl", arguments)
                        }, hsv: function () {
                            return this.setSpace("hsv", arguments)
                        }, hwb: function () {
                            return this.setSpace("hwb", arguments)
                        }, cmyk: function () {
                            return this.setSpace("cmyk", arguments)
                        }, rgbArray: function () {
                            return this.values.rgb
                        }, hslArray: function () {
                            return this.values.hsl
                        }, hsvArray: function () {
                            return this.values.hsv
                        }, hwbArray: function () {
                            var t = this.values;
                            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                        }, cmykArray: function () {
                            return this.values.cmyk
                        }, rgbaArray: function () {
                            var t = this.values;
                            return t.rgb.concat([t.alpha])
                        }, hslaArray: function () {
                            var t = this.values;
                            return t.hsl.concat([t.alpha])
                        }, alpha: function (t) {
                            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                        }, red: function (t) {
                            return this.setChannel("rgb", 0, t)
                        }, green: function (t) {
                            return this.setChannel("rgb", 1, t)
                        }, blue: function (t) {
                            return this.setChannel("rgb", 2, t)
                        }, hue: function (t) {
                            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                        }, saturation: function (t) {
                            return this.setChannel("hsl", 1, t)
                        }, lightness: function (t) {
                            return this.setChannel("hsl", 2, t)
                        }, saturationv: function (t) {
                            return this.setChannel("hsv", 1, t)
                        }, whiteness: function (t) {
                            return this.setChannel("hwb", 1, t)
                        }, blackness: function (t) {
                            return this.setChannel("hwb", 2, t)
                        }, value: function (t) {
                            return this.setChannel("hsv", 2, t)
                        }, cyan: function (t) {
                            return this.setChannel("cmyk", 0, t)
                        }, magenta: function (t) {
                            return this.setChannel("cmyk", 1, t)
                        }, yellow: function (t) {
                            return this.setChannel("cmyk", 2, t)
                        }, black: function (t) {
                            return this.setChannel("cmyk", 3, t)
                        }, hexString: function () {
                            return o.hexString(this.values.rgb)
                        }, rgbString: function () {
                            return o.rgbString(this.values.rgb, this.values.alpha)
                        }, rgbaString: function () {
                            return o.rgbaString(this.values.rgb, this.values.alpha)
                        }, percentString: function () {
                            return o.percentString(this.values.rgb, this.values.alpha)
                        }, hslString: function () {
                            return o.hslString(this.values.hsl, this.values.alpha)
                        }, hslaString: function () {
                            return o.hslaString(this.values.hsl, this.values.alpha)
                        }, hwbString: function () {
                            return o.hwbString(this.values.hwb, this.values.alpha)
                        }, keyword: function () {
                            return o.keyword(this.values.rgb, this.values.alpha)
                        }, rgbNumber: function () {
                            var t = this.values.rgb;
                            return t[0] << 16 | t[1] << 8 | t[2]
                        }, luminosity: function () {
                            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                                var i = t[n] / 255;
                                e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                            }
                            return.2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                        }, contrast: function (t) {
                            var e = this.luminosity(), n = t.luminosity();
                            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                        }, level: function (t) {
                            var e = this.contrast(t);
                            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                        }, dark: function () {
                            var t = this.values.rgb;
                            return(299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                        }, light: function () {
                            return!this.dark()
                        }, negate: function () {
                            for (var t = [], e = 0; e < 3; e++)
                                t[e] = 255 - this.values.rgb[e];
                            return this.setValues("rgb", t), this
                        }, lighten: function (t) {
                            var e = this.values.hsl;
                            return e[2] += e[2] * t, this.setValues("hsl", e), this
                        }, darken: function (t) {
                            var e = this.values.hsl;
                            return e[2] -= e[2] * t, this.setValues("hsl", e), this
                        }, saturate: function (t) {
                            var e = this.values.hsl;
                            return e[1] += e[1] * t, this.setValues("hsl", e), this
                        }, desaturate: function (t) {
                            var e = this.values.hsl;
                            return e[1] -= e[1] * t, this.setValues("hsl", e), this
                        }, whiten: function (t) {
                            var e = this.values.hwb;
                            return e[1] += e[1] * t, this.setValues("hwb", e), this
                        }, blacken: function (t) {
                            var e = this.values.hwb;
                            return e[2] += e[2] * t, this.setValues("hwb", e), this
                        }, greyscale: function () {
                            var t = this.values.rgb, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                            return this.setValues("rgb", [e, e, e]), this
                        }, clearer: function (t) {
                            var e = this.values.alpha;
                            return this.setValues("alpha", e - e * t), this
                        }, opaquer: function (t) {
                            var e = this.values.alpha;
                            return this.setValues("alpha", e + e * t), this
                        }, rotate: function (t) {
                            var e = this.values.hsl, n = (e[0] + t) % 360;
                            return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
                        }, mix: function (t, e) {
                            var n = this, i = t, o = void 0 === e ? .5 : e, a = 2 * o - 1, r = n.alpha() - i.alpha(), s = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2, l = 1 - s;
                            return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * o + i.alpha() * (1 - o))
                        }, toJSON: function () {
                            return this.rgb()
                        }, clone: function () {
                            var t, e, n = new a, i = this.values, o = n.values;
                            for (var r in i)
                                i.hasOwnProperty(r) && (t = i[r], "[object Array]" === (e = {}.toString.call(t)) ? o[r] = t.slice(0) : "[object Number]" === e ? o[r] = t : console.error("unexpected color value:", t));
                            return n
                        }}, a.prototype.spaces = {rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"]}, a.prototype.maxes = {rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100]}, a.prototype.getValues = function (t) {
                        for (var e = this.values, n = {}, i = 0; i < t.length; i++)
                            n[t.charAt(i)] = e[t][i];
                        return 1 !== e.alpha && (n.a = e.alpha), n
                    }, a.prototype.setValues = function (t, e) {
                        var n, o = this.values, a = this.spaces, r = this.maxes, s = 1;
                        if (this.valid = !0, "alpha" === t)
                            s = e;
                        else if (e.length)
                            o[t] = e.slice(0, t.length), s = e[t.length];
                        else if (void 0 !== e[t.charAt(0)]) {
                            for (n = 0; n < t.length; n++)
                                o[t][n] = e[t.charAt(n)];
                            s = e.a
                        } else if (void 0 !== e[a[t][0]]) {
                            var l = a[t];
                            for (n = 0; n < t.length; n++)
                                o[t][n] = e[l[n]];
                            s = e.alpha
                        }
                        if (o.alpha = Math.max(0, Math.min(1, void 0 === s ? o.alpha : s)), "alpha" === t)
                            return!1;
                        var c;
                        for (n = 0; n < t.length; n++)
                            c = Math.max(0, Math.min(r[t][n], o[t][n])), o[t][n] = Math.round(c);
                        for (var u in a)
                            u !== t && (o[u] = i[t][u](o[t]));
                        return!0
                    }, a.prototype.setSpace = function (t, e) {
                        var n = e[0];
                        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
                    }, a.prototype.setChannel = function (t, e, n) {
                        var i = this.values[t];
                        return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
                    }, "undefined" != typeof window && (window.Color = a), e.exports = a
                }, {2: 2, 5: 5}], 4: [function (t, e, n) {
                    function i(t) {
                        var e, n, i, o = t[0] / 255, a = t[1] / 255, r = t[2] / 255, s = Math.min(o, a, r), l = Math.max(o, a, r), c = l - s;
                        return l == s ? e = 0 : o == l ? e = (a - r) / c : a == l ? e = 2 + (r - o) / c : r == l && (e = 4 + (o - a) / c), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (s + l) / 2, n = l == s ? 0 : i <= .5 ? c / (l + s) : c / (2 - l - s), [e, 100 * n, 100 * i]
                    }
                    function o(t) {
                        var e, n, i, o = t[0], a = t[1], r = t[2], s = Math.min(o, a, r), l = Math.max(o, a, r), c = l - s;
                        return n = 0 == l ? 0 : c / l * 1e3 / 10, l == s ? e = 0 : o == l ? e = (a - r) / c : a == l ? e = 2 + (r - o) / c : r == l && (e = 4 + (o - a) / c), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = l / 255 * 1e3 / 10, [e, n, i]
                    }
                    function a(t) {
                        var e = t[0], n = t[1], o = t[2];
                        return[i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, o))), 100 * (o = 1 - 1 / 255 * Math.max(e, Math.max(n, o)))]
                    }
                    function s(t) {
                        var e, n, i, o, a = t[0] / 255, r = t[1] / 255, s = t[2] / 255;
                        return o = Math.min(1 - a, 1 - r, 1 - s), e = (1 - a - o) / (1 - o) || 0, n = (1 - r - o) / (1 - o) || 0, i = (1 - s - o) / (1 - o) || 0, [100 * e, 100 * n, 100 * i, 100 * o]
                    }
                    function l(t) {
                        return T[JSON.stringify(t)]
                    }
                    function c(t) {
                        var e = t[0] / 255, n = t[1] / 255, i = t[2] / 255;
                        return[100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
                    }
                    function u(t) {
                        var e, n, i, o = c(t), a = o[0], r = o[1], s = o[2];
                        return a /= 95.047, r /= 100, s /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * r - 16, n = 500 * (a - r), i = 200 * (r - s), [e, n, i]
                    }
                    function d(t) {
                        var e, n, i, o, a, r = t[0] / 360, s = t[1] / 100, l = t[2] / 100;
                        if (0 == s)
                            return a = 255 * l, [a, a, a];
                        e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];
                        for (var c = 0; c < 3; c++)
                            (i = r + 1 / 3 * -(c - 1)) < 0 && i++, i > 1 && i--, a = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, o[c] = 255 * a;
                        return o
                    }
                    function h(t) {
                        var e = t[0] / 60, n = t[1] / 100, i = t[2] / 100, o = Math.floor(e) % 6, a = e - Math.floor(e), r = 255 * i * (1 - n), s = 255 * i * (1 - n * a), l = 255 * i * (1 - n * (1 - a)), i = 255 * i;
                        switch (o) {
                            case 0:
                                return[i, l, r];
                            case 1:
                                return[s, i, r];
                            case 2:
                                return[r, i, l];
                            case 3:
                                return[r, s, i];
                            case 4:
                                return[l, r, i];
                            case 5:
                                return[i, r, s]
                        }
                    }
                    function p(t) {
                        var e, n, i, o, a = t[0] / 360, s = t[1] / 100, l = t[2] / 100, c = s + l;
                        switch (c > 1 && (s /= c, l /= c), e = Math.floor(6 * a), n = 1 - l, i = 6 * a - e, 0 != (1 & e) && (i = 1 - i), o = s + i * (n - s), e) {
                            default:
                            case 6:
                            case 0:
                                r = n, g = o, b = s;
                                break;
                            case 1:
                                r = o, g = n, b = s;
                                break;
                            case 2:
                                r = s, g = n, b = o;
                                break;
                            case 3:
                                r = s, g = o, b = n;
                                break;
                            case 4:
                                r = o, g = s, b = n;
                                break;
                            case 5:
                                r = n, g = s, b = o
                        }
                        return[255 * r, 255 * g, 255 * b]
                    }
                    function f(t) {
                        var e, n, i, o = t[0] / 100, a = t[1] / 100, r = t[2] / 100, s = t[3] / 100;
                        return e = 1 - Math.min(1, o * (1 - s) + s), n = 1 - Math.min(1, a * (1 - s) + s), i = 1 - Math.min(1, r * (1 - s) + s), [255 * e, 255 * n, 255 * i]
                    }
                    function m(t) {
                        var e, n, i, o = t[0] / 100, a = t[1] / 100, r = t[2] / 100;
                        return e = 3.2406 * o + -1.5372 * a + -.4986 * r, n = -.9689 * o + 1.8758 * a + .0415 * r, i = .0557 * o + -.204 * a + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i]
                    }
                    function v(t) {
                        var e, n, i, o = t[0], a = t[1], r = t[2];
                        return o /= 95.047, a /= 100, r /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * a - 16, n = 500 * (o - a), i = 200 * (a - r), [e, n, i]
                    }
                    function y(t) {
                        var e, n, i, o, a = t[0], r = t[1], s = t[2];
                        return a <= 8 ? o = (n = 100 * a / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((a + 16) / 116, 3), o = Math.pow(n / 100, 1 / 3)), e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + o, 3), i = i / 108.883 <= .008859 ? i = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3), [e, n, i]
                    }
                    function x(t) {
                        var e, n, i, o = t[0], a = t[1], r = t[2];
                        return e = Math.atan2(r, a), (n = 360 * e / 2 / Math.PI) < 0 && (n += 360), i = Math.sqrt(a * a + r * r), [o, i, n]
                    }
                    function w(t) {
                        return m(y(t))
                    }
                    function k(t) {
                        var e, n, i, o = t[0], a = t[1];
                        return i = t[2] / 360 * 2 * Math.PI, e = a * Math.cos(i), n = a * Math.sin(i), [o, e, n]
                    }
                    function C(t) {
                        return S[t]
                    }
                    e.exports = {rgb2hsl: i, rgb2hsv: o, rgb2hwb: a, rgb2cmyk: s, rgb2keyword: l, rgb2xyz: c, rgb2lab: u, rgb2lch: function (t) {
                            return x(u(t))
                        }, hsl2rgb: d, hsl2hsv: function (t) {
                            var e, n, i = t[0], o = t[1] / 100, a = t[2] / 100;
                            return 0 === a ? [0, 0, 0] : (a *= 2, o *= a <= 1 ? a : 2 - a, n = (a + o) / 2, e = 2 * o / (a + o), [i, 100 * e, 100 * n])
                        }, hsl2hwb: function (t) {
                            return a(d(t))
                        }, hsl2cmyk: function (t) {
                            return s(d(t))
                        }, hsl2keyword: function (t) {
                            return l(d(t))
                        }, hsv2rgb: h, hsv2hsl: function (t) {
                            var e, n, i = t[0], o = t[1] / 100, a = t[2] / 100;
                            return n = (2 - o) * a, e = o * a, e /= n <= 1 ? n : 2 - n, e = e || 0, n /= 2, [i, 100 * e, 100 * n]
                        }, hsv2hwb: function (t) {
                            return a(h(t))
                        }, hsv2cmyk: function (t) {
                            return s(h(t))
                        }, hsv2keyword: function (t) {
                            return l(h(t))
                        }, hwb2rgb: p, hwb2hsl: function (t) {
                            return i(p(t))
                        }, hwb2hsv: function (t) {
                            return o(p(t))
                        }, hwb2cmyk: function (t) {
                            return s(p(t))
                        }, hwb2keyword: function (t) {
                            return l(p(t))
                        }, cmyk2rgb: f, cmyk2hsl: function (t) {
                            return i(f(t))
                        }, cmyk2hsv: function (t) {
                            return o(f(t))
                        }, cmyk2hwb: function (t) {
                            return a(f(t))
                        }, cmyk2keyword: function (t) {
                            return l(f(t))
                        }, keyword2rgb: C, keyword2hsl: function (t) {
                            return i(C(t))
                        }, keyword2hsv: function (t) {
                            return o(C(t))
                        }, keyword2hwb: function (t) {
                            return a(C(t))
                        }, keyword2cmyk: function (t) {
                            return s(C(t))
                        }, keyword2lab: function (t) {
                            return u(C(t))
                        }, keyword2xyz: function (t) {
                            return c(C(t))
                        }, xyz2rgb: m, xyz2lab: v, xyz2lch: function (t) {
                            return x(v(t))
                        }, lab2xyz: y, lab2rgb: w, lab2lch: x, lch2lab: k, lch2xyz: function (t) {
                            return y(k(t))
                        }, lch2rgb: function (t) {
                            return w(k(t))
                        }};
                    var S = {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50]}, T = {};
                    for (var M in S)
                        T[JSON.stringify(S[M])] = M
                }, {}], 5: [function (t, e, n) {
                    var i = t(4), o = function () {
                        return new c
                    };
                    for (var a in i) {
                        o[a + "Raw"] = function (t) {
                            return function (e) {
                                return"number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e)
                            }
                        }(a);
                        var r = /(\w+)2(\w+)/.exec(a), s = r[1], l = r[2];
                        (o[s] = o[s] || {})[l] = o[a] = function (t) {
                            return function (e) {
                                "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                                var n = i[t](e);
                                if ("string" == typeof n || void 0 === n)
                                    return n;
                                for (var o = 0; o < n.length; o++)
                                    n[o] = Math.round(n[o]);
                                return n
                            }
                        }(a)
                    }
                    var c = function () {
                        this.convs = {}
                    };
                    c.prototype.routeSpace = function (t, e) {
                        var n = e[0];
                        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
                    }, c.prototype.setValues = function (t, e) {
                        return this.space = t, this.convs = {}, this.convs[t] = e, this
                    }, c.prototype.getValues = function (t) {
                        var e = this.convs[t];
                        if (!e) {
                            var n = this.space, i = this.convs[n];
                            e = o[n][t](i), this.convs[t] = e
                        }
                        return e
                    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
                        c.prototype[t] = function (e) {
                            return this.routeSpace(t, arguments)
                        }
                    }), e.exports = o
                }, {4: 4}], 6: [function (t, e, n) {
                    e.exports = {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50]}
                }, {}], 7: [function (t, e, n) {
                    var i = t(28)();
                    t(26)(i), t(40)(i), t(22)(i), t(25)(i), t(30)(i), t(21)(i), t(23)(i), t(24)(i), t(29)(i), t(32)(i), t(33)(i), t(31)(i), t(27)(i), t(34)(i), t(35)(i), t(36)(i), t(37)(i), t(38)(i), t(46)(i), t(44)(i), t(45)(i), t(47)(i), t(48)(i), t(49)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i);
                    var o = [];
                    o.push(t(41)(i), t(42)(i), t(43)(i)), i.plugins.register(o), e.exports = i, "undefined" != typeof window && (window.Chart = i)
                }, {10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 36: 36, 37: 37, 38: 38, 40: 40, 41: 41, 42: 42, 43: 43, 44: 44, 45: 45, 46: 46, 47: 47, 48: 48, 49: 49, 8: 8, 9: 9}], 8: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        t.Bar = function (e, n) {
                            return n.type = "bar", new t(e, n)
                        }
                    }
                }, {}], 9: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        t.Bubble = function (e, n) {
                            return n.type = "bubble", new t(e, n)
                        }
                    }
                }, {}], 10: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        t.Doughnut = function (e, n) {
                            return n.type = "doughnut", new t(e, n)
                        }
                    }
                }, {}], 11: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        t.Line = function (e, n) {
                            return n.type = "line", new t(e, n)
                        }
                    }
                }, {}], 12: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        t.PolarArea = function (e, n) {
                            return n.type = "polarArea", new t(e, n)
                        }
                    }
                }, {}], 13: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        t.Radar = function (e, n) {
                            return n.type = "radar", new t(e, n)
                        }
                    }
                }, {}], 14: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = {hover: {mode: "single"}, scales: {xAxes: [{type: "linear", position: "bottom", id: "x-axis-1"}], yAxes: [{type: "linear", position: "left", id: "y-axis-1"}]}, tooltips: {callbacks: {title: function () {
                                        return""
                                    }, label: function (t) {
                                        return"(" + t.xLabel + ", " + t.yLabel + ")"
                                    }}}};
                        t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function (e, n) {
                            return n.type = "scatter", new t(e, n)
                        }
                    }
                }, {}], 15: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers;
                        t.defaults.bar = {hover: {mode: "label"}, scales: {xAxes: [{type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: {offsetGridLines: !0}}], yAxes: [{type: "linear"}]}}, t.controllers.bar = t.DatasetController.extend({dataElementType: t.elements.Rectangle, initialize: function () {
                                var e, n = this;
                                t.DatasetController.prototype.initialize.apply(n, arguments), (e = n.getMeta()).stack = n.getDataset().stack, e.bar = !0
                            }, update: function (t) {
                                var e, n, i = this, o = i.getMeta().data;
                                for (i._ruler = i.getRuler(), e = 0, n = o.length; e < n; ++e)
                                    i.updateElement(o[e], e, t)
                            }, updateElement: function (t, n, i) {
                                var o = this, a = o.chart, r = o.getMeta(), s = o.getDataset(), l = t.custom || {}, c = a.options.elements.rectangle;
                                t._xScale = o.getScaleForId(r.xAxisID), t._yScale = o.getScaleForId(r.yAxisID), t._datasetIndex = o.index, t._index = n, t._model = {datasetLabel: s.label, label: a.data.labels[n], borderSkipped: l.borderSkipped ? l.borderSkipped : c.borderSkipped, backgroundColor: l.backgroundColor ? l.backgroundColor : e.getValueAtIndexOrDefault(s.backgroundColor, n, c.backgroundColor), borderColor: l.borderColor ? l.borderColor : e.getValueAtIndexOrDefault(s.borderColor, n, c.borderColor), borderWidth: l.borderWidth ? l.borderWidth : e.getValueAtIndexOrDefault(s.borderWidth, n, c.borderWidth)}, o.updateElementGeometry(t, n, i), t.pivot()
                            }, updateElementGeometry: function (t, e, n) {
                                var i = this, o = t._model, a = i.getValueScale(), r = a.getBasePixel(), s = a.isHorizontal(), l = i._ruler || i.getRuler(), c = i.calculateBarValuePixels(i.index, e), u = i.calculateBarIndexPixels(i.index, e, l);
                                o.horizontal = s, o.base = n ? r : c.base, o.x = s ? n ? r : c.head : u.center, o.y = s ? u.center : n ? r : c.head, o.height = s ? u.size : void 0, o.width = s ? void 0 : u.size
                            }, getValueScaleId: function () {
                                return this.getMeta().yAxisID
                            }, getIndexScaleId: function () {
                                return this.getMeta().xAxisID
                            }, getValueScale: function () {
                                return this.getScaleForId(this.getValueScaleId())
                            }, getIndexScale: function () {
                                return this.getScaleForId(this.getIndexScaleId())
                            }, getStackCount: function (t) {
                                var e, n, i = this, o = i.chart, a = i.getIndexScale().options.stacked, r = void 0 === t ? o.data.datasets.length : t + 1, s = [];
                                for (e = 0; e < r; ++e)
                                    (n = o.getDatasetMeta(e)).bar && o.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === s.indexOf(n.stack) || void 0 === a && (void 0 === n.stack || -1 === s.indexOf(n.stack))) && s.push(n.stack);
                                return s.length
                            }, getStackIndex: function (t) {
                                return this.getStackCount(t) - 1
                            }, getRuler: function () {
                                var t = this, n = t.getIndexScale(), i = n.options, o = t.getStackCount(), a = (n.isHorizontal() ? n.width : n.height) / n.ticks.length, r = a * i.categoryPercentage, s = r / o, l = s * i.barPercentage;
                                return l = Math.min(e.getValueOrDefault(i.barThickness, l), e.getValueOrDefault(i.maxBarThickness, 1 / 0)), {stackCount: o, tickSize: a, categorySize: r, categorySpacing: a - r, fullBarSize: s, barSize: l, barSpacing: s - l, scale: n}
                            }, calculateBarValuePixels: function (t, e) {
                                var n, i, o, a, r, s, l = this, c = l.chart, u = l.getMeta(), d = l.getValueScale(), h = c.data.datasets, p = Number(h[t].data[e]), f = d.options.stacked, m = u.stack, g = 0;
                                if (f || void 0 === f && void 0 !== m)
                                    for (n = 0; n < t; ++n)
                                        (i = c.getDatasetMeta(n)).bar && i.stack === m && i.controller.getValueScaleId() === d.id && c.isDatasetVisible(n) && (o = Number(h[n].data[e]), (p < 0 && o < 0 || p >= 0 && o > 0) && (g += o));
                                return a = d.getPixelForValue(g), r = d.getPixelForValue(g + p), s = (r - a) / 2, {size: s, base: a, head: r, center: r + s / 2}
                            }, calculateBarIndexPixels: function (t, e, n) {
                                var i = this, o = n.scale, a = i.chart.isCombo, r = i.getStackIndex(t), s = o.getPixelForValue(null, e, t, a), l = n.barSize;
                                return s -= a ? n.tickSize / 2 : 0, s += n.fullBarSize * r, s += n.categorySpacing / 2, s += n.barSpacing / 2, {size: l, base: s, head: s + l, center: s + l / 2}
                            }, draw: function () {
                                var t, n = this, i = n.chart, o = n.getMeta().data, a = n.getDataset(), r = o.length, s = 0;
                                for (e.canvas.clipArea(i.ctx, i.chartArea); s < r; ++s)
                                    null === (t = a.data[s]) || void 0 === t || isNaN(t) || o[s].draw();
                                e.canvas.unclipArea(i.ctx)
                            }, setHoverStyle: function (t) {
                                var n = this.chart.data.datasets[t._datasetIndex], i = t._index, o = t.custom || {}, a = t._model;
                                a.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, e.getHoverColor(a.backgroundColor)), a.borderColor = o.hoverBorderColor ? o.hoverBorderColor : e.getValueAtIndexOrDefault(n.hoverBorderColor, i, e.getHoverColor(a.borderColor)), a.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : e.getValueAtIndexOrDefault(n.hoverBorderWidth, i, a.borderWidth)
                            }, removeHoverStyle: function (t) {
                                var n = this.chart.data.datasets[t._datasetIndex], i = t._index, o = t.custom || {}, a = t._model, r = this.chart.options.elements.rectangle;
                                a.backgroundColor = o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, i, r.backgroundColor), a.borderColor = o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(n.borderColor, i, r.borderColor), a.borderWidth = o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, i, r.borderWidth)
                            }}), t.defaults.horizontalBar = {hover: {mode: "label"}, scales: {xAxes: [{type: "linear", position: "bottom"}], yAxes: [{position: "left", type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: {offsetGridLines: !0}}]}, elements: {rectangle: {borderSkipped: "left"}}, tooltips: {callbacks: {title: function (t, e) {
                                        var n = "";
                                        return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                                    }, label: function (t, e) {
                                        return(e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                                    }}}}, t.controllers.horizontalBar = t.controllers.bar.extend({getValueScaleId: function () {
                                return this.getMeta().xAxisID
                            }, getIndexScaleId: function () {
                                return this.getMeta().yAxisID
                            }})
                    }
                }, {}], 16: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers;
                        t.defaults.bubble = {hover: {mode: "single"}, scales: {xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}], yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]}, tooltips: {callbacks: {title: function () {
                                        return""
                                    }, label: function (t, e) {
                                        var n = e.datasets[t.datasetIndex].label || "", i = e.datasets[t.datasetIndex].data[t.index];
                                        return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                                    }}}}, t.controllers.bubble = t.DatasetController.extend({dataElementType: t.elements.Point, update: function (t) {
                                var n = this, i = n.getMeta().data;
                                e.each(i, function (e, i) {
                                    n.updateElement(e, i, t)
                                })
                            }, updateElement: function (n, i, o) {
                                var a = this, r = a.getMeta(), s = a.getScaleForId(r.xAxisID), l = a.getScaleForId(r.yAxisID), c = n.custom || {}, u = a.getDataset(), d = u.data[i], h = a.chart.options.elements.point, p = a.index;
                                e.extend(n, {_xScale: s, _yScale: l, _datasetIndex: p, _index: i, _model: {x: o ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof d ? d : NaN, i, p, a.chart.isCombo), y: o ? l.getBasePixel() : l.getPixelForValue(d, i, p), radius: o ? 0 : c.radius ? c.radius : a.getRadius(d), hitRadius: c.hitRadius ? c.hitRadius : e.getValueAtIndexOrDefault(u.hitRadius, i, h.hitRadius)}}), t.DatasetController.prototype.removeHoverStyle.call(a, n, h);
                                var f = n._model;
                                f.skip = c.skip ? c.skip : isNaN(f.x) || isNaN(f.y), n.pivot()
                            }, getRadius: function (t) {
                                return t.r || this.chart.options.elements.point.radius
                            }, setHoverStyle: function (n) {
                                var i = this;
                                t.DatasetController.prototype.setHoverStyle.call(i, n);
                                var o = i.chart.data.datasets[n._datasetIndex], a = n._index, r = n.custom || {};
                                n._model.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(o.hoverRadius, a, i.chart.options.elements.point.hoverRadius) + i.getRadius(o.data[a])
                            }, removeHoverStyle: function (e) {
                                var n = this;
                                t.DatasetController.prototype.removeHoverStyle.call(n, e, n.chart.options.elements.point);
                                var i = n.chart.data.datasets[e._datasetIndex].data[e._index], o = e.custom || {};
                                e._model.radius = o.radius ? o.radius : n.getRadius(i)
                            }})
                    }
                }, {}], 17: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers, n = t.defaults;
                        n.doughnut = {animation: {animateRotate: !0, animateScale: !1}, aspectRatio: 1, hover: {mode: "single"}, legendCallback: function (t) {
                                var e = [];
                                e.push('<ul class="' + t.id + '-legend">');
                                var n = t.data, i = n.datasets, o = n.labels;
                                if (i.length)
                                    for (var a = 0; a < i[0].data.length; ++a)
                                        e.push('<li><span style="background-color:' + i[0].backgroundColor[a] + '"></span>'), o[a] && e.push(o[a]), e.push("</li>");
                                return e.push("</ul>"), e.join("")
                            }, legend: {labels: {generateLabels: function (t) {
                                        var n = t.data;
                                        return n.labels.length && n.datasets.length ? n.labels.map(function (i, o) {
                                            var a = t.getDatasetMeta(0), r = n.datasets[0], s = a.data[o], l = s && s.custom || {}, c = e.getValueAtIndexOrDefault, u = t.options.elements.arc;
                                            return{text: i, fillStyle: l.backgroundColor ? l.backgroundColor : c(r.backgroundColor, o, u.backgroundColor), strokeStyle: l.borderColor ? l.borderColor : c(r.borderColor, o, u.borderColor), lineWidth: l.borderWidth ? l.borderWidth : c(r.borderWidth, o, u.borderWidth), hidden: isNaN(r.data[o]) || a.data[o].hidden, index: o}
                                        }) : []
                                    }}, onClick: function (t, e) {
                                    var n, i, o, a = e.index, r = this.chart;
                                    for (n = 0, i = (r.data.datasets || []).length; n < i; ++n)
                                        (o = r.getDatasetMeta(n)).data[a] && (o.data[a].hidden = !o.data[a].hidden);
                                    r.update()
                                }}, cutoutPercentage: 50, rotation: -.5 * Math.PI, circumference: 2 * Math.PI, tooltips: {callbacks: {title: function () {
                                        return""
                                    }, label: function (t, n) {
                                        var i = n.labels[t.index], o = ": " + n.datasets[t.datasetIndex].data[t.index];
                                        return e.isArray(i) ? (i = i.slice())[0] += o : i += o, i
                                    }}}}, n.pie = e.clone(n.doughnut), e.extend(n.pie, {cutoutPercentage: 0}), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({dataElementType: t.elements.Arc, linkScales: e.noop, getRingIndex: function (t) {
                                for (var e = 0, n = 0; n < t; ++n)
                                    this.chart.isDatasetVisible(n) && ++e;
                                return e
                            }, update: function (t) {
                                var n = this, i = n.chart, o = i.chartArea, a = i.options, r = a.elements.arc, s = o.right - o.left - r.borderWidth, l = o.bottom - o.top - r.borderWidth, c = Math.min(s, l), u = {x: 0, y: 0}, d = n.getMeta(), h = a.cutoutPercentage, p = a.circumference;
                                if (p < 2 * Math.PI) {
                                    var f = a.rotation % (2 * Math.PI), m = (f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0)) + p, g = {x: Math.cos(f), y: Math.sin(f)}, v = {x: Math.cos(m), y: Math.sin(m)}, y = f <= 0 && 0 <= m || f <= 2 * Math.PI && 2 * Math.PI <= m, b = f <= .5 * Math.PI && .5 * Math.PI <= m || f <= 2.5 * Math.PI && 2.5 * Math.PI <= m, x = f <= -Math.PI && -Math.PI <= m || f <= Math.PI && Math.PI <= m, w = f <= .5 * -Math.PI && .5 * -Math.PI <= m || f <= 1.5 * Math.PI && 1.5 * Math.PI <= m, k = h / 100, C = {x: x ? -1 : Math.min(g.x * (g.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)), y: w ? -1 : Math.min(g.y * (g.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))}, S = {x: y ? 1 : Math.max(g.x * (g.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)), y: b ? 1 : Math.max(g.y * (g.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))}, T = {width: .5 * (S.x - C.x), height: .5 * (S.y - C.y)};
                                    c = Math.min(s / T.width, l / T.height), u = {x: -.5 * (S.x + C.x), y: -.5 * (S.y + C.y)}
                                }
                                i.borderWidth = n.getMaxBorderWidth(d.data), i.outerRadius = Math.max((c - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, d.total = n.calculateTotal(), n.outerRadius = i.outerRadius - i.radiusLength * n.getRingIndex(n.index), n.innerRadius = Math.max(n.outerRadius - i.radiusLength, 0), e.each(d.data, function (e, i) {
                                    n.updateElement(e, i, t)
                                })
                            }, updateElement: function (t, n, i) {
                                var o = this, a = o.chart, r = a.chartArea, s = a.options, l = s.animation, c = (r.left + r.right) / 2, u = (r.top + r.bottom) / 2, d = s.rotation, h = s.rotation, p = o.getDataset(), f = i && l.animateRotate ? 0 : t.hidden ? 0 : o.calculateCircumference(p.data[n]) * (s.circumference / (2 * Math.PI)), m = i && l.animateScale ? 0 : o.innerRadius, g = i && l.animateScale ? 0 : o.outerRadius, v = e.getValueAtIndexOrDefault;
                                e.extend(t, {_datasetIndex: o.index, _index: n, _model: {x: c + a.offsetX, y: u + a.offsetY, startAngle: d, endAngle: h, circumference: f, outerRadius: g, innerRadius: m, label: v(p.label, n, a.data.labels[n])}});
                                var y = t._model;
                                this.removeHoverStyle(t), i && l.animateRotate || (y.startAngle = 0 === n ? s.rotation : o.getMeta().data[n - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
                            }, removeHoverStyle: function (e) {
                                t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                            }, calculateTotal: function () {
                                var t, n = this.getDataset(), i = this.getMeta(), o = 0;
                                return e.each(i.data, function (e, i) {
                                    t = n.data[i], isNaN(t) || e.hidden || (o += Math.abs(t))
                                }), o
                            }, calculateCircumference: function (t) {
                                var e = this.getMeta().total;
                                return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                            }, getMaxBorderWidth: function (t) {
                                for (var e, n, i = 0, o = this.index, a = t.length, r = 0; r < a; r++)
                                    e = t[r]._model ? t[r]._model.borderWidth : 0, i = (n = t[r]._chart ? t[r]._chart.config.data.datasets[o].hoverBorderWidth : 0) > (i = e > i ? e : i) ? n : i;
                                return i
                            }})
                    }
                }, {}], 18: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t, e) {
                            return n.getValueOrDefault(t.showLine, e.showLines)
                        }
                        var n = t.helpers;
                        t.defaults.line = {showLines: !0, spanGaps: !1, hover: {mode: "label"}, scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}}, t.controllers.line = t.DatasetController.extend({datasetElementType: t.elements.Line, dataElementType: t.elements.Point, update: function (t) {
                                var i, o, a, r = this, s = r.getMeta(), l = s.dataset, c = s.data || [], u = r.chart.options, d = u.elements.line, h = r.getScaleForId(s.yAxisID), p = r.getDataset(), f = e(p, u);
                                for (f && (a = l.custom || {}, void 0 !== p.tension && void 0 === p.lineTension && (p.lineTension = p.tension), l._scale = h, l._datasetIndex = r.index, l._children = c, l._model = {spanGaps:p.spanGaps?p.spanGaps:u.spanGaps, tension:a.tension?a.tension:n.getValueOrDefault(p.lineTension, d.tension), backgroundColor:a.backgroundColor?a.backgroundColor:p.backgroundColor || d.backgroundColor, borderWidth:a.borderWidth?a.borderWidth:p.borderWidth || d.borderWidth, borderColor:a.borderColor?a.borderColor:p.borderColor || d.borderColor, borderCapStyle:a.borderCapStyle?a.borderCapStyle:p.borderCapStyle || d.borderCapStyle, borderDash:a.borderDash?a.borderDash:p.borderDash || d.borderDash, borderDashOffset:a.borderDashOffset?a.borderDashOffset:p.borderDashOffset || d.borderDashOffset, borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:p.borderJoinStyle || d.borderJoinStyle, fill:a.fill?a.fill:void 0 !== p.fill?p.fill:d.fill, steppedLine:a.steppedLine?a.steppedLine:n.getValueOrDefault(p.steppedLine, d.stepped), cubicInterpolationMode:a.cubicInterpolationMode?a.cubicInterpolationMode:n.getValueOrDefault(p.cubicInterpolationMode, d.cubicInterpolationMode)}, l.pivot()), i = 0, o = c.length; i < o; ++i)
                                    r.updateElement(c[i], i, t);
                                for (f && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, o = c.length; i < o; ++i)
                                    c[i].pivot()
                            }, getPointBackgroundColor: function (t, e) {
                                var i = this.chart.options.elements.point.backgroundColor, o = this.getDataset(), a = t.custom || {};
                                return a.backgroundColor ? i = a.backgroundColor : o.pointBackgroundColor ? i = n.getValueAtIndexOrDefault(o.pointBackgroundColor, e, i) : o.backgroundColor && (i = o.backgroundColor), i
                            }, getPointBorderColor: function (t, e) {
                                var i = this.chart.options.elements.point.borderColor, o = this.getDataset(), a = t.custom || {};
                                return a.borderColor ? i = a.borderColor : o.pointBorderColor ? i = n.getValueAtIndexOrDefault(o.pointBorderColor, e, i) : o.borderColor && (i = o.borderColor), i
                            }, getPointBorderWidth: function (t, e) {
                                var i = this.chart.options.elements.point.borderWidth, o = this.getDataset(), a = t.custom || {};
                                return isNaN(a.borderWidth) ? isNaN(o.pointBorderWidth) ? isNaN(o.borderWidth) || (i = o.borderWidth) : i = n.getValueAtIndexOrDefault(o.pointBorderWidth, e, i) : i = a.borderWidth, i
                            }, updateElement: function (t, e, i) {
                                var o, a, r = this, s = r.getMeta(), l = t.custom || {}, c = r.getDataset(), u = r.index, d = c.data[e], h = r.getScaleForId(s.yAxisID), p = r.getScaleForId(s.xAxisID), f = r.chart.options.elements.point, m = 1 === (r.chart.data.labels || []).length || 1 === c.data.length || r.chart.isCombo;
                                void 0 !== c.radius && void 0 === c.pointRadius && (c.pointRadius = c.radius), void 0 !== c.hitRadius && void 0 === c.pointHitRadius && (c.pointHitRadius = c.hitRadius), o = p.getPixelForValue("object" == typeof d ? d : NaN, e, u, m), a = i ? h.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = p, t._yScale = h, t._datasetIndex = u, t._index = e, t._model = {x: o, y: a, skip: l.skip || isNaN(o) || isNaN(a), radius: l.radius || n.getValueAtIndexOrDefault(c.pointRadius, e, f.radius), pointStyle: l.pointStyle || n.getValueAtIndexOrDefault(c.pointStyle, e, f.pointStyle), backgroundColor: r.getPointBackgroundColor(t, e), borderColor: r.getPointBorderColor(t, e), borderWidth: r.getPointBorderWidth(t, e), tension: s.dataset._model ? s.dataset._model.tension : 0, steppedLine: !!s.dataset._model && s.dataset._model.steppedLine, hitRadius: l.hitRadius || n.getValueAtIndexOrDefault(c.pointHitRadius, e, f.hitRadius)}
                            }, calculatePointY: function (t, e, n) {
                                var i, o, a, r = this, s = r.chart, l = r.getMeta(), c = r.getScaleForId(l.yAxisID), u = 0, d = 0;
                                if (c.options.stacked) {
                                    for (i = 0; i < n; i++)
                                        if (o = s.data.datasets[i], "line" === (a = s.getDatasetMeta(i)).type && a.yAxisID === c.id && s.isDatasetVisible(i)) {
                                            var h = Number(c.getRightValue(o.data[e]));
                                            h < 0 ? d += h || 0 : u += h || 0
                                        }
                                    var p = Number(c.getRightValue(t));
                                    return p < 0 ? c.getPixelForValue(d + p) : c.getPixelForValue(u + p)
                                }
                                return c.getPixelForValue(t)
                            }, updateBezierControlPoints: function () {
                                function t(t, e, n) {
                                    return Math.max(Math.min(t, n), e)
                                }
                                var e, i, o, a, r = this, s = r.getMeta(), l = r.chart.chartArea, c = s.data || [];
                                if (s.dataset._model.spanGaps && (c = c.filter(function (t) {
                                    return!t._model.skip
                                })), "monotone" === s.dataset._model.cubicInterpolationMode)
                                    n.splineCurveMonotone(c);
                                else
                                    for (e = 0, i = c.length; e < i; ++e)
                                        o = c[e]._model, a = n.splineCurve(n.previousItem(c, e)._model, o, n.nextItem(c, e)._model, s.dataset._model.tension), o.controlPointPreviousX = a.previous.x, o.controlPointPreviousY = a.previous.y, o.controlPointNextX = a.next.x, o.controlPointNextY = a.next.y;
                                if (r.chart.options.elements.line.capBezierPoints)
                                    for (e = 0, i = c.length; e < i; ++e)
                                        (o = c[e]._model).controlPointPreviousX = t(o.controlPointPreviousX, l.left, l.right), o.controlPointPreviousY = t(o.controlPointPreviousY, l.top, l.bottom), o.controlPointNextX = t(o.controlPointNextX, l.left, l.right), o.controlPointNextY = t(o.controlPointNextY, l.top, l.bottom)
                            }, draw: function () {
                                var n = this, i = n.chart, o = n.getMeta(), a = o.data || [], r = i.chartArea, s = a.length, l = 0;
                                for (t.canvasHelpers.clipArea(i.ctx, r), e(n.getDataset(), i.options) && o.dataset.draw(), t.canvasHelpers.unclipArea(i.ctx); l < s; ++l)
                                    a[l].draw(r)
                            }, setHoverStyle: function (t) {
                                var e = this.chart.data.datasets[t._datasetIndex], i = t._index, o = t.custom || {}, a = t._model;
                                a.radius = o.hoverRadius || n.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = o.hoverBackgroundColor || n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, n.getHoverColor(a.backgroundColor)), a.borderColor = o.hoverBorderColor || n.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, n.getHoverColor(a.borderColor)), a.borderWidth = o.hoverBorderWidth || n.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth)
                            }, removeHoverStyle: function (t) {
                                var e = this, i = e.chart.data.datasets[t._datasetIndex], o = t._index, a = t.custom || {}, r = t._model;
                                void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = a.radius || n.getValueAtIndexOrDefault(i.pointRadius, o, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, o), r.borderColor = e.getPointBorderColor(t, o), r.borderWidth = e.getPointBorderWidth(t, o)
                            }})
                    }
                }, {}], 19: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers;
                        t.defaults.polarArea = {scale: {type: "radialLinear", angleLines: {display: !1}, gridLines: {circular: !0}, pointLabels: {display: !1}, ticks: {beginAtZero: !0}}, animation: {animateRotate: !0, animateScale: !0}, startAngle: -.5 * Math.PI, aspectRatio: 1, legendCallback: function (t) {
                                var e = [];
                                e.push('<ul class="' + t.id + '-legend">');
                                var n = t.data, i = n.datasets, o = n.labels;
                                if (i.length)
                                    for (var a = 0; a < i[0].data.length; ++a)
                                        e.push('<li><span style="background-color:' + i[0].backgroundColor[a] + '"></span>'), o[a] && e.push(o[a]), e.push("</li>");
                                return e.push("</ul>"), e.join("")
                            }, legend: {labels: {generateLabels: function (t) {
                                        var n = t.data;
                                        return n.labels.length && n.datasets.length ? n.labels.map(function (i, o) {
                                            var a = t.getDatasetMeta(0), r = n.datasets[0], s = a.data[o].custom || {}, l = e.getValueAtIndexOrDefault, c = t.options.elements.arc;
                                            return{text: i, fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, o, c.backgroundColor), strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, o, c.borderColor), lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, o, c.borderWidth), hidden: isNaN(r.data[o]) || a.data[o].hidden, index: o}
                                        }) : []
                                    }}, onClick: function (t, e) {
                                    var n, i, o, a = e.index, r = this.chart;
                                    for (n = 0, i = (r.data.datasets || []).length; n < i; ++n)
                                        (o = r.getDatasetMeta(n)).data[a].hidden = !o.data[a].hidden;
                                    r.update()
                                }}, tooltips: {callbacks: {title: function () {
                                        return""
                                    }, label: function (t, e) {
                                        return e.labels[t.index] + ": " + t.yLabel
                                    }}}}, t.controllers.polarArea = t.DatasetController.extend({dataElementType: t.elements.Arc, linkScales: e.noop, update: function (t) {
                                var n = this, i = n.chart, o = i.chartArea, a = n.getMeta(), r = i.options, s = r.elements.arc, l = Math.min(o.right - o.left, o.bottom - o.top);
                                i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), n.outerRadius = i.outerRadius - i.radiusLength * n.index, n.innerRadius = n.outerRadius - i.radiusLength, a.count = n.countVisibleElements(), e.each(a.data, function (e, i) {
                                    n.updateElement(e, i, t)
                                })
                            }, updateElement: function (t, n, i) {
                                for (var o = this, a = o.chart, r = o.getDataset(), s = a.options, l = s.animation, c = a.scale, u = e.getValueAtIndexOrDefault, d = a.data.labels, h = o.calculateCircumference(r.data[n]), p = c.xCenter, f = c.yCenter, m = 0, g = o.getMeta(), v = 0; v < n; ++v)
                                    isNaN(r.data[v]) || g.data[v].hidden || ++m;
                                var y = s.startAngle, b = t.hidden ? 0 : c.getDistanceFromCenterForValue(r.data[n]), x = y + h * m, w = x + (t.hidden ? 0 : h), k = l.animateScale ? 0 : c.getDistanceFromCenterForValue(r.data[n]);
                                e.extend(t, {_datasetIndex: o.index, _index: n, _scale: c, _model: {x: p, y: f, innerRadius: 0, outerRadius: i ? k : b, startAngle: i && l.animateRotate ? y : x, endAngle: i && l.animateRotate ? y : w, label: u(d, n, d[n])}}), o.removeHoverStyle(t), t.pivot()
                            }, removeHoverStyle: function (e) {
                                t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                            }, countVisibleElements: function () {
                                var t = this.getDataset(), n = this.getMeta(), i = 0;
                                return e.each(n.data, function (e, n) {
                                    isNaN(t.data[n]) || e.hidden || i++
                                }), i
                            }, calculateCircumference: function (t) {
                                var e = this.getMeta().count;
                                return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                            }})
                    }
                }, {}], 20: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers;
                        t.defaults.radar = {aspectRatio: 1, scale: {type: "radialLinear"}, elements: {line: {tension: 0}}}, t.controllers.radar = t.DatasetController.extend({datasetElementType: t.elements.Line, dataElementType: t.elements.Point, linkScales: e.noop, update: function (t) {
                                var n = this, i = n.getMeta(), o = i.dataset, a = i.data, r = o.custom || {}, s = n.getDataset(), l = n.chart.options.elements.line, c = n.chart.scale;
                                void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), e.extend(i.dataset, {_datasetIndex: n.index, _scale: c, _children: a, _loop: !0, _model: {tension: r.tension ? r.tension : e.getValueOrDefault(s.lineTension, l.tension), backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor, borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth, borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor, fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill, borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle, borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash, borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset, borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle}}), i.dataset.pivot(), e.each(a, function (e, i) {
                                    n.updateElement(e, i, t)
                                }, n), n.updateBezierControlPoints()
                            }, updateElement: function (t, n, i) {
                                var o = this, a = t.custom || {}, r = o.getDataset(), s = o.chart.scale, l = o.chart.options.elements.point, c = s.getPointPositionForValue(n, r.data[n]);
                                void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), e.extend(t, {_datasetIndex: o.index, _index: n, _scale: s, _model: {x: i ? s.xCenter : c.x, y: i ? s.yCenter : c.y, tension: a.tension ? a.tension : e.getValueOrDefault(r.lineTension, o.chart.options.elements.line.tension), radius: a.radius ? a.radius : e.getValueAtIndexOrDefault(r.pointRadius, n, l.radius), backgroundColor: a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, n, l.backgroundColor), borderColor: a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, n, l.borderColor), borderWidth: a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, n, l.borderWidth), pointStyle: a.pointStyle ? a.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, n, l.pointStyle), hitRadius: a.hitRadius ? a.hitRadius : e.getValueAtIndexOrDefault(r.pointHitRadius, n, l.hitRadius)}}), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y)
                            }, updateBezierControlPoints: function () {
                                var t = this.chart.chartArea, n = this.getMeta();
                                e.each(n.data, function (i, o) {
                                    var a = i._model, r = e.splineCurve(e.previousItem(n.data, o, !0)._model, a, e.nextItem(n.data, o, !0)._model, a.tension);
                                    a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot()
                                })
                            }, setHoverStyle: function (t) {
                                var n = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, o = t._index, a = t._model;
                                a.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(n.pointHoverRadius, o, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, o, e.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(n.pointHoverBorderColor, o, e.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(n.pointHoverBorderWidth, o, a.borderWidth)
                            }, removeHoverStyle: function (t) {
                                var n = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, o = t._index, a = t._model, r = this.chart.options.elements.point;
                                a.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(n.pointRadius, o, r.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(n.pointBackgroundColor, o, r.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(n.pointBorderColor, o, r.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(n.pointBorderWidth, o, r.borderWidth)
                            }})
                    }
                }, {}], 21: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers;
                        t.defaults.global.animation = {duration: 1e3, easing: "easeOutQuart", onProgress: e.noop, onComplete: e.noop}, t.Animation = t.Element.extend({chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null}), t.animationService = {frameDuration: 17, animations: [], dropFrames: 0, request: null, addAnimation: function (t, e, n, i) {
                                var o, a, r = this.animations;
                                for (e.chart = t, i || (t.animating = !0), o = 0, a = r.length; o < a; ++o)
                                    if (r[o].chart === t)
                                        return void(r[o] = e);
                                r.push(e), 1 === r.length && this.requestAnimationFrame()
                            }, cancelAnimation: function (t) {
                                var n = e.findIndex(this.animations, function (e) {
                                    return e.chart === t
                                });
                                -1 !== n && (this.animations.splice(n, 1), t.animating = !1)
                            }, requestAnimationFrame: function () {
                                var t = this;
                                null === t.request && (t.request = e.requestAnimFrame.call(window, function () {
                                    t.request = null, t.startDigest()
                                }))
                            }, startDigest: function () {
                                var t = this, e = Date.now(), n = 0;
                                t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
                                var i = Date.now();
                                t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
                            }, advance: function (t) {
                                for (var n, i, o = this.animations, a = 0; a < o.length; )
                                    i = (n = o[a]).chart, n.currentStep = (n.currentStep || 0) + t, n.currentStep = Math.min(n.currentStep, n.numSteps), e.callback(n.render, [i, n], i), e.callback(n.onAnimationProgress, [n], i), n.currentStep >= n.numSteps ? (e.callback(n.onAnimationComplete, [n], i), i.animating = !1, o.splice(a, 1)) : ++a
                            }}, Object.defineProperty(t.Animation.prototype, "animationObject", {get: function () {
                                return this
                            }}), Object.defineProperty(t.Animation.prototype, "chartInstance", {get: function () {
                                return this.chart
                            }, set: function (t) {
                                this.chart = t
                            }})
                    }
                }, {}], 22: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.canvasHelpers = {};
                        e.drawPoint = function (e, n, i, o, a) {
                            var r, s, l, c, u, d;
                            if ("object" != typeof n || "[object HTMLImageElement]" !== (r = n.toString()) && "[object HTMLCanvasElement]" !== r) {
                                if (!(isNaN(i) || i <= 0)) {
                                    switch (n) {
                                        default:
                                            e.beginPath(), e.arc(o, a, i, 0, 2 * Math.PI), e.closePath(), e.fill();
                                            break;
                                        case"triangle":
                                            e.beginPath(), u = (s = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, e.moveTo(o - s / 2, a + u / 3), e.lineTo(o + s / 2, a + u / 3), e.lineTo(o, a - 2 * u / 3), e.closePath(), e.fill();
                                            break;
                                        case"rect":
                                            d = 1 / Math.SQRT2 * i, e.beginPath(), e.fillRect(o - d, a - d, 2 * d, 2 * d), e.strokeRect(o - d, a - d, 2 * d, 2 * d);
                                            break;
                                        case"rectRounded":
                                            var h = i / Math.SQRT2, p = o - h, f = a - h, m = Math.SQRT2 * i;
                                            t.helpers.drawRoundedRectangle(e, p, f, m, m, i / 2), e.fill();
                                            break;
                                        case"rectRot":
                                            d = 1 / Math.SQRT2 * i, e.beginPath(), e.moveTo(o - d, a), e.lineTo(o, a + d), e.lineTo(o + d, a), e.lineTo(o, a - d), e.closePath(), e.fill();
                                            break;
                                        case"cross":
                                            e.beginPath(), e.moveTo(o, a + i), e.lineTo(o, a - i), e.moveTo(o - i, a), e.lineTo(o + i, a), e.closePath();
                                            break;
                                        case"crossRot":
                                            e.beginPath(), l = Math.cos(Math.PI / 4) * i, c = Math.sin(Math.PI / 4) * i, e.moveTo(o - l, a - c), e.lineTo(o + l, a + c), e.moveTo(o - l, a + c), e.lineTo(o + l, a - c), e.closePath();
                                            break;
                                        case"star":
                                            e.beginPath(), e.moveTo(o, a + i), e.lineTo(o, a - i), e.moveTo(o - i, a), e.lineTo(o + i, a), l = Math.cos(Math.PI / 4) * i, c = Math.sin(Math.PI / 4) * i, e.moveTo(o - l, a - c), e.lineTo(o + l, a + c), e.moveTo(o - l, a + c), e.lineTo(o + l, a - c), e.closePath();
                                            break;
                                        case"line":
                                            e.beginPath(), e.moveTo(o - i, a), e.lineTo(o + i, a), e.closePath();
                                            break;
                                        case"dash":
                                            e.beginPath(), e.moveTo(o, a), e.lineTo(o + i, a), e.closePath()
                                    }
                                    e.stroke()
                                }
                            } else
                                e.drawImage(n, o - n.width / 2, a - n.height / 2, n.width, n.height)
                        }, e.clipArea = function (t, e) {
                            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                        }, e.unclipArea = function (t) {
                            t.restore()
                        }, e.lineTo = function (t, e, n, i) {
                            if (n.steppedLine)
                                return"after" === n.steppedLine ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
                            n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
                        }, t.helpers.canvas = e
                    }
                }, {}], 23: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(e) {
                            var n = (e = e || {}).data = e.data || {};
                            return n.datasets = n.datasets || [], n.labels = n.labels || [], e.options = o.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}), e
                        }
                        function n(t) {
                            var e = t.options;
                            e.scale ? t.scale.options = e.scale : e.scales && e.scales.xAxes.concat(e.scales.yAxes).forEach(function (e) {
                                t.scales[e.id].options = e
                            }), t.tooltip._options = e.tooltips
                        }
                        function i(t) {
                            return"top" === t || "bottom" === t
                        }
                        var o = t.helpers, a = t.plugins, r = t.platform;
                        t.types = {}, t.instances = {}, t.controllers = {}, o.extend(t.prototype, {construct: function (n, i) {
                                var a = this;
                                i = e(i);
                                var s = r.acquireContext(n, i), l = s && s.canvas, c = l && l.height, u = l && l.width;
                                a.id = o.uid(), a.ctx = s, a.canvas = l, a.config = i, a.width = u, a.height = c, a.aspectRatio = c ? u / c : null, a.options = i.options, a._bufferedRender = !1, a.chart = a, a.controller = a, t.instances[a.id] = a, Object.defineProperty(a, "data", {get: function () {
                                        return a.config.data
                                    }, set: function (t) {
                                        a.config.data = t
                                    }}), s && l ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                            }, initialize: function () {
                                var t = this;
                                return a.notify(t, "beforeInit"), o.retinaScale(t), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), a.notify(t, "afterInit"), t
                            }, clear: function () {
                                return o.clear(this), this
                            }, stop: function () {
                                return t.animationService.cancelAnimation(this), this
                            }, resize: function (t) {
                                var e = this, n = e.options, i = e.canvas, r = n.maintainAspectRatio && e.aspectRatio || null, s = Math.floor(o.getMaximumWidth(i)), l = Math.floor(r ? s / r : o.getMaximumHeight(i));
                                if ((e.width !== s || e.height !== l) && (i.width = e.width = s, i.height = e.height = l, i.style.width = s + "px", i.style.height = l + "px", o.retinaScale(e), !t)) {
                                    var c = {width: s, height: l};
                                    a.notify(e, "resize", [c]), e.options.onResize && e.options.onResize(e, c), e.stop(), e.update(e.options.responsiveAnimationDuration)
                                }
                            }, ensureScalesHaveIDs: function () {
                                var t = this.options, e = t.scales || {}, n = t.scale;
                                o.each(e.xAxes, function (t, e) {
                                    t.id = t.id || "x-axis-" + e
                                }), o.each(e.yAxes, function (t, e) {
                                    t.id = t.id || "y-axis-" + e
                                }), n && (n.id = n.id || "scale")
                            }, buildScales: function () {
                                var e = this, n = e.options, a = e.scales = {}, r = [];
                                n.scales && (r = r.concat((n.scales.xAxes || []).map(function (t) {
                                    return{options: t, dtype: "category", dposition: "bottom"}
                                }), (n.scales.yAxes || []).map(function (t) {
                                    return{options: t, dtype: "linear", dposition: "left"}
                                }))), n.scale && r.push({options: n.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea"}), o.each(r, function (n) {
                                    var r = n.options, s = o.getValueOrDefault(r.type, n.dtype), l = t.scaleService.getScaleConstructor(s);
                                    if (l) {
                                        i(r.position) !== i(n.dposition) && (r.position = n.dposition);
                                        var c = new l({id: r.id, options: r, ctx: e.ctx, chart: e});
                                        a[c.id] = c, n.isDefault && (e.scale = c)
                                    }
                                }), t.scaleService.addScalesToLayout(this)
                            }, buildOrUpdateControllers: function () {
                                var e = this, n = [], i = [];
                                if (o.each(e.data.datasets, function (o, a) {
                                    var r = e.getDatasetMeta(a);
                                    if (r.type || (r.type = o.type || e.config.type), n.push(r.type), r.controller)
                                        r.controller.updateIndex(a);
                                    else {
                                        var s = t.controllers[r.type];
                                        if (void 0 === s)
                                            throw new Error('"' + r.type + '" is not a chart type.');
                                        r.controller = new s(e, a), i.push(r.controller)
                                    }
                                }, e), n.length > 1)
                                    for (var a = 1; a < n.length; a++)
                                        if (n[a] !== n[a - 1]) {
                                            e.isCombo = !0;
                                            break
                                        }
                                return i
                            }, resetElements: function () {
                                var t = this;
                                o.each(t.data.datasets, function (e, n) {
                                    t.getDatasetMeta(n).controller.reset()
                                }, t)
                            }, reset: function () {
                                this.resetElements(), this.tooltip.initialize()
                            }, update: function (t, e) {
                                var i = this;
                                if (n(i), !1 !== a.notify(i, "beforeUpdate")) {
                                    i.tooltip._data = i.data;
                                    var r = i.buildOrUpdateControllers();
                                    o.each(i.data.datasets, function (t, e) {
                                        i.getDatasetMeta(e).controller.buildOrUpdateElements()
                                    }, i), i.updateLayout(), o.each(r, function (t) {
                                        t.reset()
                                    }), i.updateDatasets(), a.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = {lazy: e, duration: t} : i.render(t, e)
                                }
                            }, updateLayout: function () {
                                var e = this;
                                !1 !== a.notify(e, "beforeLayout") && (t.layoutService.update(this, this.width, this.height), a.notify(e, "afterScaleUpdate"), a.notify(e, "afterLayout"))
                            }, updateDatasets: function () {
                                var t = this;
                                if (!1 !== a.notify(t, "beforeDatasetsUpdate")) {
                                    for (var e = 0, n = t.data.datasets.length; e < n; ++e)
                                        t.updateDataset(e);
                                    a.notify(t, "afterDatasetsUpdate")
                                }
                            }, updateDataset: function (t) {
                                var e = this, n = e.getDatasetMeta(t), i = {meta: n, index: t};
                                !1 !== a.notify(e, "beforeDatasetUpdate", [i]) && (n.controller.update(), a.notify(e, "afterDatasetUpdate", [i]))
                            }, render: function (e, n) {
                                var i = this;
                                if (!1 !== a.notify(i, "beforeRender")) {
                                    var r = i.options.animation, s = function (t) {
                                        a.notify(i, "afterRender"), o.callback(r && r.onComplete, [t], i)
                                    };
                                    if (r && (void 0 !== e && 0 !== e || void 0 === e && 0 !== r.duration)) {
                                        var l = new t.Animation({numSteps: (e || r.duration) / 16.66, easing: r.easing, render: function (t, e) {
                                                var n = o.easingEffects[e.easing], i = e.currentStep, a = i / e.numSteps;
                                                t.draw(n(a), a, i)
                                            }, onAnimationProgress: r.onProgress, onAnimationComplete: s});
                                        t.animationService.addAnimation(i, l, e, n)
                                    } else
                                        i.draw(), s(new t.Animation({numSteps: 0, chart: i}));
                                    return i
                                }
                            }, draw: function (t) {
                                var e = this;
                                e.clear(), void 0 !== t && null !== t || (t = 1), e.transition(t), !1 !== a.notify(e, "beforeDraw", [t]) && (o.each(e.boxes, function (t) {
                                    t.draw(e.chartArea)
                                }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e.tooltip.draw(), a.notify(e, "afterDraw", [t]))
                            }, transition: function (t) {
                                for (var e = this, n = 0, i = (e.data.datasets || []).length; n < i; ++n)
                                    e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
                                e.tooltip.transition(t)
                            }, drawDatasets: function (t) {
                                var e = this;
                                if (!1 !== a.notify(e, "beforeDatasetsDraw", [t])) {
                                    for (var n = (e.data.datasets || []).length - 1; n >= 0; --n)
                                        e.isDatasetVisible(n) && e.drawDataset(n, t);
                                    a.notify(e, "afterDatasetsDraw", [t])
                                }
                            }, drawDataset: function (t, e) {
                                var n = this, i = n.getDatasetMeta(t), o = {meta: i, index: t, easingValue: e};
                                !1 !== a.notify(n, "beforeDatasetDraw", [o]) && (i.controller.draw(e), a.notify(n, "afterDatasetDraw", [o]))
                            }, getElementAtEvent: function (e) {
                                return t.Interaction.modes.single(this, e)
                            }, getElementsAtEvent: function (e) {
                                return t.Interaction.modes.label(this, e, {intersect: !0})
                            }, getElementsAtXAxis: function (e) {
                                return t.Interaction.modes["x-axis"](this, e, {intersect: !0})
                            }, getElementsAtEventForMode: function (e, n, i) {
                                var o = t.Interaction.modes[n];
                                return"function" == typeof o ? o(this, e, i) : []
                            }, getDatasetAtEvent: function (e) {
                                return t.Interaction.modes.dataset(this, e, {intersect: !0})
                            }, getDatasetMeta: function (t) {
                                var e = this, n = e.data.datasets[t];
                                n._meta || (n._meta = {});
                                var i = n._meta[e.id];
                                return i || (i = n._meta[e.id] = {type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null}), i
                            }, getVisibleDatasetCount: function () {
                                for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
                                    this.isDatasetVisible(e) && t++;
                                return t
                            }, isDatasetVisible: function (t) {
                                var e = this.getDatasetMeta(t);
                                return"boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                            }, generateLegend: function () {
                                return this.options.legendCallback(this)
                            }, destroy: function () {
                                var e, n, i, s = this, l = s.canvas;
                                for (s.stop(), n = 0, i = s.data.datasets.length; n < i; ++n)
                                    (e = s.getDatasetMeta(n)).controller && (e.controller.destroy(), e.controller = null);
                                l && (s.unbindEvents(), o.clear(s), r.releaseContext(s.ctx), s.canvas = null, s.ctx = null), a.notify(s, "destroy"), delete t.instances[s.id]
                            }, toBase64Image: function () {
                                return this.canvas.toDataURL.apply(this.canvas, arguments)
                            }, initToolTip: function () {
                                var e = this;
                                e.tooltip = new t.Tooltip({_chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips}, e), e.tooltip.initialize()
                            }, bindEvents: function () {
                                var t = this, e = t._listeners = {}, n = function () {
                                    t.eventHandler.apply(t, arguments)
                                };
                                o.each(t.options.events, function (i) {
                                    r.addEventListener(t, i, n), e[i] = n
                                }), t.options.responsive && (n = function () {
                                    t.resize()
                                }, r.addEventListener(t, "resize", n), e.resize = n)
                            }, unbindEvents: function () {
                                var t = this, e = t._listeners;
                                e && (delete t._listeners, o.each(e, function (e, n) {
                                    r.removeEventListener(t, n, e)
                                }))
                            }, updateHoverStyle: function (t, e, n) {
                                var i, o, a, r = n ? "setHoverStyle" : "removeHoverStyle";
                                for (o = 0, a = t.length; o < a; ++o)
                                    (i = t[o]) && this.getDatasetMeta(i._datasetIndex).controller[r](i)
                            }, eventHandler: function (t) {
                                var e = this, n = e.tooltip;
                                if (!1 !== a.notify(e, "beforeEvent", [t])) {
                                    e._bufferedRender = !0, e._bufferedRequest = null;
                                    var i = e.handleEvent(t);
                                    i |= n && n.handleEvent(t), a.notify(e, "afterEvent", [t]);
                                    var o = e._bufferedRequest;
                                    return o ? e.render(o.duration, o.lazy) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                                }
                            }, handleEvent: function (t) {
                                var e = this, n = e.options || {}, i = n.hover, a = !1;
                                return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i), i.onHover && i.onHover.call(e, t.native, e.active), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1), e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0), a = !o.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, a
                            }}), t.Controller = t
                    }
                }, {}], 24: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t, e) {
                            t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {configurable: !0, enumerable: !1, value: {listeners: [e]}}), o.forEach(function (e) {
                                var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1), o = t[e];
                                Object.defineProperty(t, e, {configurable: !0, enumerable: !1, value: function () {
                                        var e = Array.prototype.slice.call(arguments), a = o.apply(this, e);
                                        return i.each(t._chartjs.listeners, function (t) {
                                            "function" == typeof t[n] && t[n].apply(t, e)
                                        }), a
                                    }})
                            }))
                        }
                        function n(t, e) {
                            var n = t._chartjs;
                            if (n) {
                                var i = n.listeners, a = i.indexOf(e);
                                -1 !== a && i.splice(a, 1), i.length > 0 || (o.forEach(function (e) {
                                    delete t[e]
                                }), delete t._chartjs)
                            }
                        }
                        var i = t.helpers, o = ["push", "pop", "shift", "splice", "unshift"];
                        t.DatasetController = function (t, e) {
                            this.initialize(t, e)
                        }, i.extend(t.DatasetController.prototype, {datasetElementType: null, dataElementType: null, initialize: function (t, e) {
                                var n = this;
                                n.chart = t, n.index = e, n.linkScales(), n.addElements()
                            }, updateIndex: function (t) {
                                this.index = t
                            }, linkScales: function () {
                                var t = this, e = t.getMeta(), n = t.getDataset();
                                null === e.xAxisID && (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
                            }, getDataset: function () {
                                return this.chart.data.datasets[this.index]
                            }, getMeta: function () {
                                return this.chart.getDatasetMeta(this.index)
                            }, getScaleForId: function (t) {
                                return this.chart.scales[t]
                            }, reset: function () {
                                this.update(!0)
                            }, destroy: function () {
                                this._data && n(this._data, this)
                            }, createMetaDataset: function () {
                                var t = this, e = t.datasetElementType;
                                return e && new e({_chart: t.chart, _datasetIndex: t.index})
                            }, createMetaData: function (t) {
                                var e = this, n = e.dataElementType;
                                return n && new n({_chart: e.chart, _datasetIndex: e.index, _index: t})
                            }, addElements: function () {
                                var t, e, n = this, i = n.getMeta(), o = n.getDataset().data || [], a = i.data;
                                for (t = 0, e = o.length; t < e; ++t)
                                    a[t] = a[t] || n.createMetaData(t);
                                i.dataset = i.dataset || n.createMetaDataset()
                            }, addElementAndReset: function (t) {
                                var e = this.createMetaData(t);
                                this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                            }, buildOrUpdateElements: function () {
                                var t = this, i = t.getDataset(), o = i.data || (i.data = []);
                                t._data !== o && (t._data && n(t._data, t), e(o, t), t._data = o), t.resyncElements()
                            }, update: i.noop, transition: function (t) {
                                for (var e = this.getMeta(), n = e.data || [], i = n.length, o = 0; o < i; ++o)
                                    n[o].transition(t);
                                e.dataset && e.dataset.transition(t)
                            }, draw: function () {
                                var t = this.getMeta(), e = t.data || [], n = e.length, i = 0;
                                for (t.dataset && t.dataset.draw(); i < n; ++i)
                                    e[i].draw()
                            }, removeHoverStyle: function (t, e) {
                                var n = this.chart.data.datasets[t._datasetIndex], o = t._index, a = t.custom || {}, r = i.getValueAtIndexOrDefault, s = t._model;
                                s.backgroundColor = a.backgroundColor ? a.backgroundColor : r(n.backgroundColor, o, e.backgroundColor), s.borderColor = a.borderColor ? a.borderColor : r(n.borderColor, o, e.borderColor), s.borderWidth = a.borderWidth ? a.borderWidth : r(n.borderWidth, o, e.borderWidth)
                            }, setHoverStyle: function (t) {
                                var e = this.chart.data.datasets[t._datasetIndex], n = t._index, o = t.custom || {}, a = i.getValueAtIndexOrDefault, r = i.getHoverColor, s = t._model;
                                s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : a(e.hoverBackgroundColor, n, r(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : a(e.hoverBorderColor, n, r(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : a(e.hoverBorderWidth, n, s.borderWidth)
                            }, resyncElements: function () {
                                var t = this, e = t.getMeta(), n = t.getDataset().data, i = e.data.length, o = n.length;
                                o < i ? e.data.splice(o, i - o) : o > i && t.insertElements(i, o - i)
                            }, insertElements: function (t, e) {
                                for (var n = 0; n < e; ++n)
                                    this.addElementAndReset(t + n)
                            }, onDataPush: function () {
                                this.insertElements(this.getDataset().data.length - 1, arguments.length)
                            }, onDataPop: function () {
                                this.getMeta().data.pop()
                            }, onDataShift: function () {
                                this.getMeta().data.shift()
                            }, onDataSplice: function (t, e) {
                                this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                            }, onDataUnshift: function () {
                                this.insertElements(0, arguments.length)
                            }}), t.DatasetController.extend = i.inherits
                    }
                }, {}], 25: [function (t, e, n) {
                    "use strict";
                    var i = t(3);
                    e.exports = function (t) {
                        function e(t, e, n, o) {
                            var a, r, s, l, c, u, d, h, p, f = Object.keys(n);
                            for (a = 0, r = f.length; a < r; ++a)
                                if (s = f[a], u = n[s], e.hasOwnProperty(s) || (e[s] = u), (l = e[s]) !== u && "_" !== s[0]) {
                                    if (t.hasOwnProperty(s) || (t[s] = l), c = t[s], (d = typeof u) === typeof c)
                                        if ("string" === d) {
                                            if ((h = i(c)).valid && (p = i(u)).valid) {
                                                e[s] = p.mix(h, o).rgbString();
                                                continue
                                            }
                                        } else if ("number" === d && isFinite(c) && isFinite(u)) {
                                            e[s] = c + (u - c) * o;
                                            continue
                                        }
                                    e[s] = u
                                }
                        }
                        var n = t.helpers;
                        t.elements = {}, t.Element = function (t) {
                            n.extend(this, t), this.initialize.apply(this, arguments)
                        }, n.extend(t.Element.prototype, {initialize: function () {
                                this.hidden = !1
                            }, pivot: function () {
                                var t = this;
                                return t._view || (t._view = n.clone(t._model)), t._start = {}, t
                            }, transition: function (t) {
                                var n = this, i = n._model, o = n._start, a = n._view;
                                return i && 1 !== t ? (a || (a = n._view = {}), o || (o = n._start = {}), e(o, a, i, t), n) : (n._view = i, n._start = null, n)
                            }, tooltipPosition: function () {
                                return{x: this._model.x, y: this._model.y}
                            }, hasValue: function () {
                                return n.isNumber(this._model.x) && n.isNumber(this._model.y)
                            }}), t.Element.extend = n.inherits
                    }
                }, {3: 3}], 26: [function (t, e, n) {
                    "use strict";
                    var i = t(3);
                    e.exports = function (t) {
                        function e(t, e, n) {
                            var i;
                            return"string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
                        }
                        function n(t) {
                            return void 0 !== t && null !== t && "none" !== t
                        }
                        function o(t, i, o) {
                            var a = document.defaultView, r = t.parentNode, s = a.getComputedStyle(t)[i], l = a.getComputedStyle(r)[i], c = n(s), u = n(l), d = Number.POSITIVE_INFINITY;
                            return c || u ? Math.min(c ? e(s, t, o) : d, u ? e(l, r, o) : d) : "none"
                        }
                        var a = t.helpers = {};
                        a.each = function (t, e, n, i) {
                            var o, r;
                            if (a.isArray(t))
                                if (r = t.length, i)
                                    for (o = r - 1; o >= 0; o--)
                                        e.call(n, t[o], o);
                                else
                                    for (o = 0; o < r; o++)
                                        e.call(n, t[o], o);
                            else if ("object" == typeof t) {
                                var s = Object.keys(t);
                                for (r = s.length, o = 0; o < r; o++)
                                    e.call(n, t[s[o]], s[o])
                            }
                        }, a.clone = function (t) {
                            var e = {};
                            return a.each(t, function (t, n) {
                                a.isArray(t) ? e[n] = t.slice(0) : e[n] = "object" == typeof t && null !== t ? a.clone(t) : t
                            }), e
                        }, a.extend = function (t) {
                            for (var e = 1, n = arguments.length; e < n; e++)
                                a.each(arguments[e], function (e, n) {
                                    t[n] = e
                                });
                            return t
                        }, a.configMerge = function (e) {
                            var n = a.clone(e);
                            return a.each(Array.prototype.slice.call(arguments, 1), function (e) {
                                a.each(e, function (e, i) {
                                    var o = n.hasOwnProperty(i), r = o ? n[i] : {};
                                    "scales" === i ? n[i] = a.scaleMerge(r, e) : "scale" === i ? n[i] = a.configMerge(r, t.scaleService.getScaleDefaults(e.type), e) : !o || "object" != typeof r || a.isArray(r) || null === r || "object" != typeof e || a.isArray(e) ? n[i] = e : n[i] = a.configMerge(r, e)
                                })
                            }), n
                        }, a.scaleMerge = function (e, n) {
                            var i = a.clone(e);
                            return a.each(n, function (e, n) {
                                "xAxes" === n || "yAxes" === n ? i.hasOwnProperty(n) ? a.each(e, function (e, o) {
                                    var r = a.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear"), s = t.scaleService.getScaleDefaults(r);
                                    o >= i[n].length || !i[n][o].type ? i[n].push(a.configMerge(s, e)) : e.type && e.type !== i[n][o].type ? i[n][o] = a.configMerge(i[n][o], s, e) : i[n][o] = a.configMerge(i[n][o], e)
                                }) : (i[n] = [], a.each(e, function (e) {
                                    var o = a.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear");
                                    i[n].push(a.configMerge(t.scaleService.getScaleDefaults(o), e))
                                })) : i.hasOwnProperty(n) && "object" == typeof i[n] && null !== i[n] && "object" == typeof e ? i[n] = a.configMerge(i[n], e) : i[n] = e
                            }), i
                        }, a.getValueAtIndexOrDefault = function (t, e, n) {
                            return void 0 === t || null === t ? n : a.isArray(t) ? e < t.length ? t[e] : n : t
                        }, a.getValueOrDefault = function (t, e) {
                            return void 0 === t ? e : t
                        }, a.indexOf = Array.prototype.indexOf ? function (t, e) {
                            return t.indexOf(e)
                        } : function (t, e) {
                            for (var n = 0, i = t.length; n < i; ++n)
                                if (t[n] === e)
                                    return n;
                            return-1
                        }, a.where = function (t, e) {
                            if (a.isArray(t) && Array.prototype.filter)
                                return t.filter(e);
                            var n = [];
                            return a.each(t, function (t) {
                                e(t) && n.push(t)
                            }), n
                        }, a.findIndex = Array.prototype.findIndex ? function (t, e, n) {
                            return t.findIndex(e, n)
                        } : function (t, e, n) {
                            n = void 0 === n ? t : n;
                            for (var i = 0, o = t.length; i < o; ++i)
                                if (e.call(n, t[i], i, t))
                                    return i;
                            return-1
                        }, a.findNextWhere = function (t, e, n) {
                            void 0 !== n && null !== n || (n = -1);
                            for (var i = n + 1; i < t.length; i++) {
                                var o = t[i];
                                if (e(o))
                                    return o
                            }
                        }, a.findPreviousWhere = function (t, e, n) {
                            void 0 !== n && null !== n || (n = t.length);
                            for (var i = n - 1; i >= 0; i--) {
                                var o = t[i];
                                if (e(o))
                                    return o
                            }
                        }, a.inherits = function (t) {
                            var e = this, n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                                return e.apply(this, arguments)
                            }, i = function () {
                                this.constructor = n
                            };
                            return i.prototype = e.prototype, n.prototype = new i, n.extend = a.inherits, t && a.extend(n.prototype, t), n.__super__ = e.prototype, n
                        }, a.noop = function () {}, a.uid = function () {
                            var t = 0;
                            return function () {
                                return t++
                            }
                        }(), a.isNumber = function (t) {
                            return!isNaN(parseFloat(t)) && isFinite(t)
                        }, a.almostEquals = function (t, e, n) {
                            return Math.abs(t - e) < n
                        }, a.almostWhole = function (t, e) {
                            var n = Math.round(t);
                            return n - e < t && n + e > t
                        }, a.max = function (t) {
                            return t.reduce(function (t, e) {
                                return isNaN(e) ? t : Math.max(t, e)
                            }, Number.NEGATIVE_INFINITY)
                        }, a.min = function (t) {
                            return t.reduce(function (t, e) {
                                return isNaN(e) ? t : Math.min(t, e)
                            }, Number.POSITIVE_INFINITY)
                        }, a.sign = Math.sign ? function (t) {
                            return Math.sign(t)
                        } : function (t) {
                            return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                        }, a.log10 = Math.log10 ? function (t) {
                            return Math.log10(t)
                        } : function (t) {
                            return Math.log(t) / Math.LN10
                        }, a.toRadians = function (t) {
                            return t * (Math.PI / 180)
                        }, a.toDegrees = function (t) {
                            return t * (180 / Math.PI)
                        }, a.getAngleFromPoint = function (t, e) {
                            var n = e.x - t.x, i = e.y - t.y, o = Math.sqrt(n * n + i * i), a = Math.atan2(i, n);
                            return a < -.5 * Math.PI && (a += 2 * Math.PI), {angle: a, distance: o}
                        }, a.distanceBetweenPoints = function (t, e) {
                            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                        }, a.aliasPixel = function (t) {
                            return t % 2 == 0 ? 0 : .5
                        }, a.splineCurve = function (t, e, n, i) {
                            var o = t.skip ? e : t, a = e, r = n.skip ? e : n, s = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)), l = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)), c = s / (s + l), u = l / (s + l), d = i * (c = isNaN(c) ? 0 : c), h = i * (u = isNaN(u) ? 0 : u);
                            return{previous: {x: a.x - d * (r.x - o.x), y: a.y - d * (r.y - o.y)}, next: {x: a.x + h * (r.x - o.x), y: a.y + h * (r.y - o.y)}}
                        }, a.EPSILON = Number.EPSILON || 1e-14, a.splineCurveMonotone = function (t) {
                            var e, n, i, o, r = (t || []).map(function (t) {
                                return{model: t._model, deltaK: 0, mK: 0}
                            }), s = r.length;
                            for (e = 0; e < s; ++e)
                                if (!(i = r[e]).model.skip) {
                                    if (n = e > 0 ? r[e - 1] : null, (o = e < s - 1 ? r[e + 1] : null) && !o.model.skip) {
                                        var l = o.model.x - i.model.x;
                                        i.deltaK = 0 !== l ? (o.model.y - i.model.y) / l : 0
                                    }
                                    !n || n.model.skip ? i.mK = i.deltaK : !o || o.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                                }
                            var c, u, d, h;
                            for (e = 0; e < s - 1; ++e)
                                i = r[e], o = r[e + 1], i.model.skip || o.model.skip || (a.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = o.mK = 0 : (c = i.mK / i.deltaK, u = o.mK / i.deltaK, (h = Math.pow(c, 2) + Math.pow(u, 2)) <= 9 || (d = 3 / Math.sqrt(h), i.mK = c * d * i.deltaK, o.mK = u * d * i.deltaK)));
                            var p;
                            for (e = 0; e < s; ++e)
                                (i = r[e]).model.skip || (n = e > 0 ? r[e - 1] : null, o = e < s - 1 ? r[e + 1] : null, n && !n.model.skip && (p = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - p, i.model.controlPointPreviousY = i.model.y - p * i.mK), o && !o.model.skip && (p = (o.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + p, i.model.controlPointNextY = i.model.y + p * i.mK))
                        }, a.nextItem = function (t, e, n) {
                            return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                        }, a.previousItem = function (t, e, n) {
                            return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                        }, a.niceNum = function (t, e) {
                            var n = Math.floor(a.log10(t)), i = t / Math.pow(10, n);
                            return(e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                        };
                        var r = a.easingEffects = {linear: function (t) {
                                return t
                            }, easeInQuad: function (t) {
                                return t * t
                            }, easeOutQuad: function (t) {
                                return-1 * t * (t - 2)
                            }, easeInOutQuad: function (t) {
                                return(t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                            }, easeInCubic: function (t) {
                                return t * t * t
                            }, easeOutCubic: function (t) {
                                return 1 * ((t = t / 1 - 1) * t * t + 1)
                            }, easeInOutCubic: function (t) {
                                return(t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                            }, easeInQuart: function (t) {
                                return t * t * t * t
                            }, easeOutQuart: function (t) {
                                return-1 * ((t = t / 1 - 1) * t * t * t - 1)
                            }, easeInOutQuart: function (t) {
                                return(t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                            }, easeInQuint: function (t) {
                                return 1 * (t /= 1) * t * t * t * t
                            }, easeOutQuint: function (t) {
                                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                            }, easeInOutQuint: function (t) {
                                return(t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                            }, easeInSine: function (t) {
                                return-1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                            }, easeOutSine: function (t) {
                                return 1 * Math.sin(t / 1 * (Math.PI / 2))
                            }, easeInOutSine: function (t) {
                                return-.5 * (Math.cos(Math.PI * t / 1) - 1)
                            }, easeInExpo: function (t) {
                                return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                            }, easeOutExpo: function (t) {
                                return 1 === t ? 1 : 1 * (1 - Math.pow(2, -10 * t / 1))
                            }, easeInOutExpo: function (t) {
                                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                            }, easeInCirc: function (t) {
                                return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                            }, easeOutCirc: function (t) {
                                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                            }, easeInOutCirc: function (t) {
                                return(t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                            }, easeInElastic: function (t) {
                                var e = 1.70158, n = 0, i = 1;
                                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n))
                            }, easeOutElastic: function (t) {
                                var e = 1.70158, n = 0, i = 1;
                                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1)
                            }, easeInOutElastic: function (t) {
                                var e = 1.70158, n = 0, i = 1;
                                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .3 * 1.5 * 1), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1)
                            }, easeInBack: function (t) {
                                var e = 1.70158;
                                return 1 * (t /= 1) * t * ((e + 1) * t - e)
                            }, easeOutBack: function (t) {
                                var e = 1.70158;
                                return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                            }, easeInOutBack: function (t) {
                                var e = 1.70158;
                                return(t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                            }, easeInBounce: function (t) {
                                return 1 - r.easeOutBounce(1 - t)
                            }, easeOutBounce: function (t) {
                                return(t /= 1) < 1 / 2.75 ? 7.5625 * t * t * 1 : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                            }, easeInOutBounce: function (t) {
                                return t < .5 ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
                            }};
                        a.requestAnimFrame = "undefined" == typeof window ? function (t) {
                            t()
                        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                            return window.setTimeout(t, 1e3 / 60)
                        }, a.getRelativePosition = function (t, e) {
                            var n, i, o = t.originalEvent || t, r = t.currentTarget || t.srcElement, s = r.getBoundingClientRect(), l = o.touches;
                            l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = o.clientX, i = o.clientY);
                            var c = parseFloat(a.getStyle(r, "padding-left")), u = parseFloat(a.getStyle(r, "padding-top")), d = parseFloat(a.getStyle(r, "padding-right")), h = parseFloat(a.getStyle(r, "padding-bottom")), p = s.right - s.left - c - d, f = s.bottom - s.top - u - h;
                            return n = Math.round((n - s.left - c) / p * r.width / e.currentDevicePixelRatio), i = Math.round((i - s.top - u) / f * r.height / e.currentDevicePixelRatio), {x: n, y: i}
                        }, a.addEvent = function (t, e, n) {
                            t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
                        }, a.removeEvent = function (t, e, n) {
                            t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = a.noop
                        }, a.getConstraintWidth = function (t) {
                            return o(t, "max-width", "clientWidth")
                        }, a.getConstraintHeight = function (t) {
                            return o(t, "max-height", "clientHeight")
                        }, a.getMaximumWidth = function (t) {
                            var e = t.parentNode, n = parseInt(a.getStyle(e, "padding-left"), 10), i = parseInt(a.getStyle(e, "padding-right"), 10), o = e.clientWidth - n - i, r = a.getConstraintWidth(t);
                            return isNaN(r) ? o : Math.min(o, r)
                        }, a.getMaximumHeight = function (t) {
                            var e = t.parentNode, n = parseInt(a.getStyle(e, "padding-top"), 10), i = parseInt(a.getStyle(e, "padding-bottom"), 10), o = e.clientHeight - n - i, r = a.getConstraintHeight(t);
                            return isNaN(r) ? o : Math.min(o, r)
                        }, a.getStyle = function (t, e) {
                            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                        }, a.retinaScale = function (t) {
                            var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                            if (1 !== e) {
                                var n = t.canvas, i = t.height, o = t.width;
                                n.height = i * e, n.width = o * e, t.ctx.scale(e, e), n.style.height = i + "px", n.style.width = o + "px"
                            }
                        }, a.clear = function (t) {
                            t.ctx.clearRect(0, 0, t.width, t.height)
                        }, a.fontString = function (t, e, n) {
                            return e + " " + t + "px " + n
                        }, a.longestText = function (t, e, n, i) {
                            var o = (i = i || {}).data = i.data || {}, r = i.garbageCollect = i.garbageCollect || [];
                            i.font !== e && (o = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
                            var s = 0;
                            a.each(n, function (e) {
                                void 0 !== e && null !== e && !0 !== a.isArray(e) ? s = a.measureText(t, o, r, s, e) : a.isArray(e) && a.each(e, function (e) {
                                    void 0 === e || null === e || a.isArray(e) || (s = a.measureText(t, o, r, s, e))
                                })
                            });
                            var l = r.length / 2;
                            if (l > n.length) {
                                for (var c = 0; c < l; c++)
                                    delete o[r[c]];
                                r.splice(0, l)
                            }
                            return s
                        }, a.measureText = function (t, e, n, i, o) {
                            var a = e[o];
                            return a || (a = e[o] = t.measureText(o).width, n.push(o)), a > i && (i = a), i
                        }, a.numberOfLabelLines = function (t) {
                            var e = 1;
                            return a.each(t, function (t) {
                                a.isArray(t) && t.length > e && (e = t.length)
                            }), e
                        }, a.drawRoundedRectangle = function (t, e, n, i, o, a) {
                            t.beginPath(), t.moveTo(e + a, n), t.lineTo(e + i - a, n), t.quadraticCurveTo(e + i, n, e + i, n + a), t.lineTo(e + i, n + o - a), t.quadraticCurveTo(e + i, n + o, e + i - a, n + o), t.lineTo(e + a, n + o), t.quadraticCurveTo(e, n + o, e, n + o - a), t.lineTo(e, n + a), t.quadraticCurveTo(e, n, e + a, n), t.closePath()
                        }, a.color = i ? function (e) {
                            return e instanceof CanvasGradient && (e = t.defaults.global.defaultColor), i(e)
                        } : function (t) {
                            return console.error("Color.js not found!"), t
                        }, a.isArray = Array.isArray ? function (t) {
                            return Array.isArray(t)
                        } : function (t) {
                            return"[object Array]" === Object.prototype.toString.call(t)
                        }, a.arrayEquals = function (t, e) {
                            var n, i, o, r;
                            if (!t || !e || t.length !== e.length)
                                return!1;
                            for (n = 0, i = t.length; n < i; ++n)
                                if (o = t[n], r = e[n], o instanceof Array && r instanceof Array) {
                                    if (!a.arrayEquals(o, r))
                                        return!1
                                } else if (o !== r)
                                    return!1;
                            return!0
                        }, a.callback = function (t, e, n) {
                            t && "function" == typeof t.call && t.apply(n, e)
                        }, a.getHoverColor = function (t) {
                            return t instanceof CanvasPattern ? t : a.color(t).saturate(.5).darken(.1).rgbString()
                        }, a.callCallback = a.callback
                    }
                }, {3: 3}], 27: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t, e) {
                            return t.native ? {x: t.x, y: t.y} : r.getRelativePosition(t, e)
                        }
                        function n(t, e) {
                            var n, i, o, a, r;
                            for (i = 0, a = t.data.datasets.length; i < a; ++i)
                                if (t.isDatasetVisible(i))
                                    for (o = 0, r = (n = t.getDatasetMeta(i)).data.length; o < r; ++o) {
                                        var s = n.data[o];
                                        s._view.skip || e(s)
                                    }
                        }
                        function i(t, e) {
                            var i = [];
                            return n(t, function (t) {
                                t.inRange(e.x, e.y) && i.push(t)
                            }), i
                        }
                        function o(t, e, i, o) {
                            var a = Number.POSITIVE_INFINITY, s = [];
                            return o || (o = r.distanceBetweenPoints), n(t, function (t) {
                                if (!i || t.inRange(e.x, e.y)) {
                                    var n = t.getCenterPoint(), r = o(e, n);
                                    r < a ? (s = [t], a = r) : r === a && s.push(t)
                                }
                            }), s
                        }
                        function a(t, n, a) {
                            var r = e(n, t), s = a.intersect ? i(t, r) : o(t, r, !1, function (t, e) {
                                return Math.abs(t.x - e.x)
                            }), l = [];
                            return s.length ? (t.data.datasets.forEach(function (e, n) {
                                if (t.isDatasetVisible(n)) {
                                    var i = t.getDatasetMeta(n).data[s[0]._index];
                                    i && !i._view.skip && l.push(i)
                                }
                            }), l) : []
                        }
                        var r = t.helpers;
                        t.Interaction = {modes: {single: function (t, i) {
                                    var o = e(i, t), a = [];
                                    return n(t, function (t) {
                                        if (t.inRange(o.x, o.y))
                                            return a.push(t), a
                                    }), a.slice(0, 1)
                                }, label: a, index: a, dataset: function (t, n, a) {
                                    var r = e(n, t), s = a.intersect ? i(t, r) : o(t, r, !1);
                                    return s.length > 0 && (s = t.getDatasetMeta(s[0]._datasetIndex).data), s
                                }, "x-axis": function (t, e) {
                                    return a(t, e, !0)
                                }, point: function (t, n) {
                                    return i(t, e(n, t))
                                }, nearest: function (t, n, i) {
                                    var a = o(t, e(n, t), i.intersect);
                                    return a.length > 1 && a.sort(function (t, e) {
                                        var n = t.getArea() - e.getArea();
                                        return 0 === n && (n = t._datasetIndex - e._datasetIndex), n
                                    }), a.slice(0, 1)
                                }, x: function (t, i, o) {
                                    var a = e(i, t), r = [], s = !1;
                                    return n(t, function (t) {
                                        t.inXRange(a.x) && r.push(t), t.inRange(a.x, a.y) && (s = !0)
                                    }), o.intersect && !s && (r = []), r
                                }, y: function (t, i, o) {
                                    var a = e(i, t), r = [], s = !1;
                                    return n(t, function (t) {
                                        t.inYRange(a.y) && r.push(t), t.inRange(a.x, a.y) && (s = !0)
                                    }), o.intersect && !s && (r = []), r
                                }}}
                    }
                }, {}], 28: [function (t, e, n) {
                    "use strict";
                    e.exports = function () {
                        var t = function (t, e) {
                            return this.construct(t, e), this
                        };
                        return t.defaults = {global: {responsive: !0, responsiveAnimationDuration: 0, maintainAspectRatio: !0, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: {onHover: null, mode: "nearest", intersect: !0, animationDuration: 400}, onClick: null, defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", showLines: !0, elements: {}, legendCallback: function (t) {
                                    var e = [];
                                    e.push('<ul class="' + t.id + '-legend">');
                                    for (var n = 0; n < t.data.datasets.length; n++)
                                        e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                                    return e.push("</ul>"), e.join("")
                                }}}, t.Chart = t, t
                    }
                }, {}], 29: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t, e) {
                            return i.where(t, function (t) {
                                return t.position === e
                            })
                        }
                        function n(t, e) {
                            t.forEach(function (t, e) {
                                return t._tmpIndex_ = e, t
                            }), t.sort(function (t, n) {
                                var i = e ? n : t, o = e ? t : n;
                                return i.weight === o.weight ? i._tmpIndex_ - o._tmpIndex_ : i.weight - o.weight
                            }), t.forEach(function (t) {
                                delete t._tmpIndex_
                            })
                        }
                        var i = t.helpers;
                        t.layoutService = {defaults: {}, addBox: function (t, e) {
                                t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                            }, removeBox: function (t, e) {
                                var n = t.boxes ? t.boxes.indexOf(e) : -1;
                                -1 !== n && t.boxes.splice(n, 1)
                            }, configure: function (t, e, n) {
                                for (var i, o = ["fullWidth", "position", "weight"], a = o.length, r = 0; r < a; ++r)
                                    i = o[r], n.hasOwnProperty(i) && (e[i] = n[i])
                            }, update: function (t, o, a) {
                                function r(t) {
                                    var e = i.findNextWhere(M, function (e) {
                                        return e.box === t
                                    });
                                    if (e)
                                        if (t.isHorizontal()) {
                                            var n = {left: Math.max(D, I), right: Math.max(E, A), top: 0, bottom: 0};
                                            t.update(t.fullWidth ? b : S, x / 2, n)
                                        } else
                                            t.update(e.minSize.width, T)
                                }
                                function s(t) {
                                    t.isHorizontal() ? (t.left = t.fullWidth ? u : D, t.right = t.fullWidth ? o - d : D + S, t.top = N, t.bottom = N + t.height, N = t.bottom) : (t.left = z, t.right = z + t.width, t.top = O, t.bottom = O + T, z = t.right)
                                }
                                if (t) {
                                    var l = t.options.layout, c = l ? l.padding : null, u = 0, d = 0, h = 0, p = 0;
                                    isNaN(c) ? (u = c.left || 0, d = c.right || 0, h = c.top || 0, p = c.bottom || 0) : (u = c, d = c, h = c, p = c);
                                    var f = e(t.boxes, "left"), m = e(t.boxes, "right"), g = e(t.boxes, "top"), v = e(t.boxes, "bottom"), y = e(t.boxes, "chartArea");
                                    n(f, !0), n(m, !1), n(g, !0), n(v, !1);
                                    var b = o - u - d, x = a - h - p, w = x / 2, k = (o - b / 2) / (f.length + m.length), C = (a - w) / (g.length + v.length), S = b, T = x, M = [];
                                    i.each(f.concat(m, g, v), function (t) {
                                        var e, n = t.isHorizontal();
                                        n ? (e = t.update(t.fullWidth ? b : S, C), T -= e.height) : (e = t.update(k, w), S -= e.width), M.push({horizontal: n, minSize: e, box: t})
                                    });
                                    var I = 0, A = 0, P = 0, _ = 0;
                                    i.each(g.concat(v), function (t) {
                                        if (t.getPadding) {
                                            var e = t.getPadding();
                                            I = Math.max(I, e.left), A = Math.max(A, e.right)
                                        }
                                    }), i.each(f.concat(m), function (t) {
                                        if (t.getPadding) {
                                            var e = t.getPadding();
                                            P = Math.max(P, e.top), _ = Math.max(_, e.bottom)
                                        }
                                    });
                                    var D = u, E = d, O = h, L = p;
                                    i.each(f.concat(m), r), i.each(f, function (t) {
                                        D += t.width
                                    }), i.each(m, function (t) {
                                        E += t.width
                                    }), i.each(g.concat(v), r), i.each(g, function (t) {
                                        O += t.height
                                    }), i.each(v, function (t) {
                                        L += t.height
                                    }), i.each(f.concat(m), function (t) {
                                        var e = i.findNextWhere(M, function (e) {
                                            return e.box === t
                                        }), n = {left: 0, right: 0, top: O, bottom: L};
                                        e && t.update(e.minSize.width, T, n)
                                    }), D = u, E = d, O = h, L = p, i.each(f, function (t) {
                                        D += t.width
                                    }), i.each(m, function (t) {
                                        E += t.width
                                    }), i.each(g, function (t) {
                                        O += t.height
                                    }), i.each(v, function (t) {
                                        L += t.height
                                    });
                                    var F = Math.max(I - D, 0);
                                    D += F, E += Math.max(A - E, 0);
                                    var R = Math.max(P - O, 0);
                                    O += R, L += Math.max(_ - L, 0);
                                    var W = a - O - L, V = o - D - E;
                                    V === S && W === T || (i.each(f, function (t) {
                                        t.height = W
                                    }), i.each(m, function (t) {
                                        t.height = W
                                    }), i.each(g, function (t) {
                                        t.fullWidth || (t.width = V)
                                    }), i.each(v, function (t) {
                                        t.fullWidth || (t.width = V)
                                    }), T = W, S = V);
                                    var z = u + F, N = h + R;
                                    i.each(f.concat(g), s), z += S, N += T, i.each(m, s), i.each(v, s), t.chartArea = {left: D, top: O, right: D + S, bottom: O + T}, i.each(y, function (e) {
                                        e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(S, T)
                                    })
                                }
                            }}
                    }
                }, {}], 30: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers;
                        t.defaults.global.plugins = {}, t.plugins = {_plugins: [], _cacheId: 0, register: function (t) {
                                var e = this._plugins;
                                [].concat(t).forEach(function (t) {
                                    -1 === e.indexOf(t) && e.push(t)
                                }), this._cacheId++
                            }, unregister: function (t) {
                                var e = this._plugins;
                                [].concat(t).forEach(function (t) {
                                    var n = e.indexOf(t);
                                    -1 !== n && e.splice(n, 1)
                                }), this._cacheId++
                            }, clear: function () {
                                this._plugins = [], this._cacheId++
                            }, count: function () {
                                return this._plugins.length
                            }, getAll: function () {
                                return this._plugins
                            }, notify: function (t, e, n) {
                                var i, o, a, r, s, l = this.descriptors(t), c = l.length;
                                for (i = 0; i < c; ++i)
                                    if (o = l[i], a = o.plugin, "function" == typeof (s = a[e]) && ((r = [t].concat(n || [])).push(o.options), !1 === s.apply(a, r)))
                                        return!1;
                                return!0
                            }, descriptors: function (n) {
                                var i = n._plugins || (n._plugins = {});
                                if (i.id === this._cacheId)
                                    return i.descriptors;
                                var o = [], a = [], r = n && n.config || {}, s = t.defaults.global.plugins, l = r.options && r.options.plugins || {};
                                return this._plugins.concat(r.plugins || []).forEach(function (t) {
                                    if (-1 === o.indexOf(t)) {
                                        var n = t.id, i = l[n];
                                        !1 !== i && (!0 === i && (i = e.clone(s[n])), o.push(t), a.push({plugin: t, options: i || {}}))
                                    }
                                }), i.descriptors = a, i.id = this._cacheId, a
                            }}, t.pluginService = t.plugins, t.PluginBase = t.Element.extend({})
                    }
                }, {}], 31: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t, e, n) {
                            return i.isArray(e) ? i.longestText(t, n, e) : t.measureText(e).width
                        }
                        function n(e) {
                            var n = i.getValueOrDefault, o = t.defaults.global, a = n(e.fontSize, o.defaultFontSize), r = n(e.fontStyle, o.defaultFontStyle), s = n(e.fontFamily, o.defaultFontFamily);
                            return{size: a, style: r, family: s, font: i.fontString(a, r, s)}
                        }
                        var i = t.helpers;
                        t.defaults.scale = {display: !0, position: "left", gridLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0}, scaleLabel: {labelString: "", display: !1}, ticks: {beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: t.Ticks.formatters.values}}, t.Scale = t.Element.extend({getPadding: function () {
                                var t = this;
                                return{left: t.paddingLeft || 0, top: t.paddingTop || 0, right: t.paddingRight || 0, bottom: t.paddingBottom || 0}
                            }, beforeUpdate: function () {
                                i.callback(this.options.beforeUpdate, [this])
                            }, update: function (t, e, n) {
                                var o = this;
                                return o.beforeUpdate(), o.maxWidth = t, o.maxHeight = e, o.margins = i.extend({left: 0, right: 0, top: 0, bottom: 0}, n), o.longestTextCache = o.longestTextCache || {}, o.beforeSetDimensions(), o.setDimensions(), o.afterSetDimensions(), o.beforeDataLimits(), o.determineDataLimits(), o.afterDataLimits(), o.beforeBuildTicks(), o.buildTicks(), o.afterBuildTicks(), o.beforeTickToLabelConversion(), o.convertTicksToLabels(), o.afterTickToLabelConversion(), o.beforeCalculateTickRotation(), o.calculateTickRotation(), o.afterCalculateTickRotation(), o.beforeFit(), o.fit(), o.afterFit(), o.afterUpdate(), o.minSize
                            }, afterUpdate: function () {
                                i.callback(this.options.afterUpdate, [this])
                            }, beforeSetDimensions: function () {
                                i.callback(this.options.beforeSetDimensions, [this])
                            }, setDimensions: function () {
                                var t = this;
                                t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                            }, afterSetDimensions: function () {
                                i.callback(this.options.afterSetDimensions, [this])
                            }, beforeDataLimits: function () {
                                i.callback(this.options.beforeDataLimits, [this])
                            }, determineDataLimits: i.noop, afterDataLimits: function () {
                                i.callback(this.options.afterDataLimits, [this])
                            }, beforeBuildTicks: function () {
                                i.callback(this.options.beforeBuildTicks, [this])
                            }, buildTicks: i.noop, afterBuildTicks: function () {
                                i.callback(this.options.afterBuildTicks, [this])
                            }, beforeTickToLabelConversion: function () {
                                i.callback(this.options.beforeTickToLabelConversion, [this])
                            }, convertTicksToLabels: function () {
                                var t = this, e = t.options.ticks;
                                t.ticks = t.ticks.map(e.userCallback || e.callback)
                            }, afterTickToLabelConversion: function () {
                                i.callback(this.options.afterTickToLabelConversion, [this])
                            }, beforeCalculateTickRotation: function () {
                                i.callback(this.options.beforeCalculateTickRotation, [this])
                            }, calculateTickRotation: function () {
                                var t = this, e = t.ctx, o = t.options.ticks, a = n(o);
                                e.font = a.font;
                                var r = o.minRotation || 0;
                                if (t.options.display && t.isHorizontal())
                                    for (var s, l = i.longestText(e, a.font, t.ticks, t.longestTextCache), c = l, u = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > u && r < o.maxRotation; ) {
                                        var d = i.toRadians(r);
                                        if (s = Math.cos(d), Math.sin(d) * l > t.maxHeight) {
                                            r--;
                                            break
                                        }
                                        r++, c = s * l
                                    }
                                t.labelRotation = r
                            }, afterCalculateTickRotation: function () {
                                i.callback(this.options.afterCalculateTickRotation, [this])
                            }, beforeFit: function () {
                                i.callback(this.options.beforeFit, [this])
                            }, fit: function () {
                                var t = this, o = t.minSize = {width: 0, height: 0}, a = t.options, r = a.ticks, s = a.scaleLabel, l = a.gridLines, c = a.display, u = t.isHorizontal(), d = n(r), h = 1.5 * n(s).size, p = a.gridLines.tickMarkLength;
                                if (o.width = u ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : c && l.drawTicks ? p : 0, o.height = u ? c && l.drawTicks ? p : 0 : t.maxHeight, s.display && c && (u ? o.height += h : o.width += h), r.display && c) {
                                    var f = i.longestText(t.ctx, d.font, t.ticks, t.longestTextCache), m = i.numberOfLabelLines(t.ticks), g = .5 * d.size;
                                    if (u) {
                                        t.longestLabelWidth = f;
                                        var v = i.toRadians(t.labelRotation), y = Math.cos(v), b = Math.sin(v) * f + d.size * m + g * m;
                                        o.height = Math.min(t.maxHeight, o.height + b), t.ctx.font = d.font;
                                        var x = t.ticks[0], w = e(t.ctx, x, d.font), k = t.ticks[t.ticks.length - 1], C = e(t.ctx, k, d.font);
                                        0 !== t.labelRotation ? (t.paddingLeft = "bottom" === a.position ? y * w + 3 : y * g + 3, t.paddingRight = "bottom" === a.position ? y * g + 3 : y * C + 3) : (t.paddingLeft = w / 2 + 3, t.paddingRight = C / 2 + 3)
                                    } else
                                        r.mirror ? f = 0 : f += t.options.ticks.padding, o.width = Math.min(t.maxWidth, o.width + f), t.paddingTop = d.size / 2, t.paddingBottom = d.size / 2
                                }
                                t.handleMargins(), t.width = o.width, t.height = o.height
                            }, handleMargins: function () {
                                var t = this;
                                t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                            }, afterFit: function () {
                                i.callback(this.options.afterFit, [this])
                            }, isHorizontal: function () {
                                return"top" === this.options.position || "bottom" === this.options.position
                            }, isFullWidth: function () {
                                return this.options.fullWidth
                            }, getRightValue: function (t) {
                                return null === t || void 0 === t ? NaN : "number" != typeof t || isFinite(t) ? "object" == typeof t ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN
                            }, getLabelForIndex: i.noop, getPixelForValue: i.noop, getValueForPixel: i.noop, getPixelForTick: function (t, e) {
                                var n = this;
                                if (n.isHorizontal()) {
                                    var i = (n.width - (n.paddingLeft + n.paddingRight)) / Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1), o = i * t + n.paddingLeft;
                                    e && (o += i / 2);
                                    var a = n.left + Math.round(o);
                                    return a += n.isFullWidth() ? n.margins.left : 0
                                }
                                var r = n.height - (n.paddingTop + n.paddingBottom);
                                return n.top + t * (r / (n.ticks.length - 1))
                            }, getPixelForDecimal: function (t) {
                                var e = this;
                                if (e.isHorizontal()) {
                                    var n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft, i = e.left + Math.round(n);
                                    return i += e.isFullWidth() ? e.margins.left : 0
                                }
                                return e.top + t * e.height
                            }, getBasePixel: function () {
                                return this.getPixelForValue(this.getBaseValue())
                            }, getBaseValue: function () {
                                var t = this, e = t.min, n = t.max;
                                return t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
                            }, draw: function (e) {
                                var o = this, a = o.options;
                                if (a.display) {
                                    var r, s, l = o.ctx, c = t.defaults.global, u = a.ticks, d = a.gridLines, h = a.scaleLabel, p = 0 !== o.labelRotation, f = u.autoSkip, m = o.isHorizontal();
                                    u.maxTicksLimit && (s = u.maxTicksLimit);
                                    var g = i.getValueOrDefault(u.fontColor, c.defaultFontColor), v = n(u), y = d.drawTicks ? d.tickMarkLength : 0, b = i.getValueOrDefault(h.fontColor, c.defaultFontColor), x = n(h), w = i.toRadians(o.labelRotation), k = Math.cos(w), C = o.longestLabelWidth * k;
                                    l.fillStyle = g;
                                    var S = [];
                                    if (m) {
                                        if (r = !1, (C + u.autoSkipPadding) * o.ticks.length > o.width - (o.paddingLeft + o.paddingRight) && (r = 1 + Math.floor((C + u.autoSkipPadding) * o.ticks.length / (o.width - (o.paddingLeft + o.paddingRight)))), s && o.ticks.length > s)
                                            for (; !r || o.ticks.length / (r || 1) > s; )
                                                r || (r = 1), r += 1;
                                        f || (r = !1)
                                    }
                                    var T = "right" === a.position ? o.left : o.right - y, M = "right" === a.position ? o.left + y : o.right, I = "bottom" === a.position ? o.top : o.bottom - y, A = "bottom" === a.position ? o.top + y : o.bottom;
                                    if (i.each(o.ticks, function (t, n) {
                                        if (void 0 !== t && null !== t) {
                                            var s = o.ticks.length === n + 1;
                                            if ((!(r > 1 && n % r > 0 || n % r == 0 && n + r >= o.ticks.length) || s) && void 0 !== t && null !== t) {
                                                var l, h, f, g;
                                                n === (void 0 !== o.zeroLineIndex ? o.zeroLineIndex : 0) ? (l = d.zeroLineWidth, h = d.zeroLineColor, f = d.zeroLineBorderDash, g = d.zeroLineBorderDashOffset) : (l = i.getValueAtIndexOrDefault(d.lineWidth, n), h = i.getValueAtIndexOrDefault(d.color, n), f = i.getValueOrDefault(d.borderDash, c.borderDash), g = i.getValueOrDefault(d.borderDashOffset, c.borderDashOffset));
                                                var v, b, x, k, C, P, _, D, E, O, L = "middle", F = "middle";
                                                if (m) {
                                                    "bottom" === a.position ? (F = p ? "middle" : "top", L = p ? "right" : "center", O = o.top + y) : (F = p ? "middle" : "bottom", L = p ? "left" : "center", O = o.bottom - y);
                                                    var R = o.getPixelForTick(n) + i.aliasPixel(l);
                                                    E = o.getPixelForTick(n, d.offsetGridLines) + u.labelOffset, v = x = C = _ = R, b = I, k = A, P = e.top, D = e.bottom
                                                } else {
                                                    var W, V = "left" === a.position, z = u.padding;
                                                    u.mirror ? (L = V ? "left" : "right", W = z) : (L = V ? "right" : "left", W = y + z), E = V ? o.right - W : o.left + W;
                                                    var N = o.getPixelForTick(n);
                                                    N += i.aliasPixel(l), O = o.getPixelForTick(n, d.offsetGridLines), v = T, x = M, C = e.left, _ = e.right, b = k = P = D = N
                                                }
                                                S.push({tx1: v, ty1: b, tx2: x, ty2: k, x1: C, y1: P, x2: _, y2: D, labelX: E, labelY: O, glWidth: l, glColor: h, glBorderDash: f, glBorderDashOffset: g, rotation: -1 * w, label: t, textBaseline: F, textAlign: L})
                                            }
                                        }
                                    }), i.each(S, function (t) {
                                        if (d.display && (l.save(), l.lineWidth = t.glWidth, l.strokeStyle = t.glColor, l.setLineDash && (l.setLineDash(t.glBorderDash), l.lineDashOffset = t.glBorderDashOffset), l.beginPath(), d.drawTicks && (l.moveTo(t.tx1, t.ty1), l.lineTo(t.tx2, t.ty2)), d.drawOnChartArea && (l.moveTo(t.x1, t.y1), l.lineTo(t.x2, t.y2)), l.stroke(), l.restore()), u.display) {
                                            l.save(), l.translate(t.labelX, t.labelY), l.rotate(t.rotation), l.font = v.font, l.textBaseline = t.textBaseline, l.textAlign = t.textAlign;
                                            var e = t.label;
                                            if (i.isArray(e))
                                                for (var n = 0, o = 0; n < e.length; ++n)
                                                    l.fillText("" + e[n], 0, o), o += 1.5 * v.size;
                                            else
                                                l.fillText(e, 0, 0);
                                            l.restore()
                                        }
                                    }), h.display) {
                                        var P, _, D = 0;
                                        if (m)
                                            P = o.left + (o.right - o.left) / 2, _ = "bottom" === a.position ? o.bottom - x.size / 2 : o.top + x.size / 2;
                                        else {
                                            var E = "left" === a.position;
                                            P = E ? o.left + x.size / 2 : o.right - x.size / 2, _ = o.top + (o.bottom - o.top) / 2, D = E ? -.5 * Math.PI : .5 * Math.PI
                                        }
                                        l.save(), l.translate(P, _), l.rotate(D), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = b, l.font = x.font, l.fillText(h.labelString, 0, 0), l.restore()
                                    }
                                    if (d.drawBorder) {
                                        l.lineWidth = i.getValueAtIndexOrDefault(d.lineWidth, 0), l.strokeStyle = i.getValueAtIndexOrDefault(d.color, 0);
                                        var O = o.left, L = o.right, F = o.top, R = o.bottom, W = i.aliasPixel(l.lineWidth);
                                        m ? (F = R = "top" === a.position ? o.bottom : o.top, F += W, R += W) : (O = L = "left" === a.position ? o.right : o.left, O += W, L += W), l.beginPath(), l.moveTo(O, F), l.lineTo(L, R), l.stroke()
                                    }
                                }
                            }})
                    }
                }, {}], 32: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers;
                        t.scaleService = {constructors: {}, defaults: {}, registerScaleType: function (t, n, i) {
                                this.constructors[t] = n, this.defaults[t] = e.clone(i)
                            }, getScaleConstructor: function (t) {
                                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                            }, getScaleDefaults: function (n) {
                                return this.defaults.hasOwnProperty(n) ? e.scaleMerge(t.defaults.scale, this.defaults[n]) : {}
                            }, updateScaleDefaults: function (t, n) {
                                var i = this.defaults;
                                i.hasOwnProperty(t) && (i[t] = e.extend(i[t], n))
                            }, addScalesToLayout: function (n) {
                                e.each(n.scales, function (e) {
                                    e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, t.layoutService.addBox(n, e)
                                })
                            }}
                    }
                }, {}], 33: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers;
                        t.Ticks = {generators: {linear: function (t, n) {
                                    var i, o = [];
                                    if (t.stepSize && t.stepSize > 0)
                                        i = t.stepSize;
                                    else {
                                        var a = e.niceNum(n.max - n.min, !1);
                                        i = e.niceNum(a / (t.maxTicks - 1), !0)
                                    }
                                    var r = Math.floor(n.min / i) * i, s = Math.ceil(n.max / i) * i;
                                    t.min && t.max && t.stepSize && e.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, s = t.max);
                                    var l = (s - r) / i;
                                    l = e.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l), o.push(void 0 !== t.min ? t.min : r);
                                    for (var c = 1; c < l; ++c)
                                        o.push(r + c * i);
                                    return o.push(void 0 !== t.max ? t.max : s), o
                                }, logarithmic: function (t, n) {
                                    var i, o, a = [], r = e.getValueOrDefault, s = r(t.min, Math.pow(10, Math.floor(e.log10(n.min)))), l = Math.floor(e.log10(n.max)), c = Math.ceil(n.max / Math.pow(10, l));
                                    0 === s ? (i = Math.floor(e.log10(n.minNotZero)), o = Math.floor(n.minNotZero / Math.pow(10, i)), a.push(s), s = o * Math.pow(10, i)) : (i = Math.floor(e.log10(s)), o = Math.floor(s / Math.pow(10, i)));
                                    do {
                                        a.push(s), 10 === ++o && (o = 1, ++i), s = o * Math.pow(10, i)
                                    } while (i < l || i === l && o < c);
                                    var u = r(t.max, s);
                                    return a.push(u), a
                                }}, formatters: {values: function (t) {
                                    return e.isArray(t) ? t : "" + t
                                }, linear: function (t, n, i) {
                                    var o = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                                    Math.abs(o) > 1 && t !== Math.floor(t) && (o = t - Math.floor(t));
                                    var a = e.log10(Math.abs(o)), r = "";
                                    if (0 !== t) {
                                        var s = -1 * Math.floor(a);
                                        s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
                                    } else
                                        r = "0";
                                    return r
                                }, logarithmic: function (t, n, i) {
                                    var o = t / Math.pow(10, Math.floor(e.log10(t)));
                                    return 0 === t ? "0" : 1 === o || 2 === o || 5 === o || 0 === n || n === i.length - 1 ? t.toExponential() : ""
                                }}}
                    }
                }, {}], 34: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t, e) {
                            var n = l.color(t);
                            return n.alpha(e * n.alpha()).rgbaString()
                        }
                        function n(t, e) {
                            return e && (l.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                        }
                        function i(t) {
                            var e = t._xScale, n = t._yScale || t._scale, i = t._index, o = t._datasetIndex;
                            return{xLabel: e ? e.getLabelForIndex(i, o) : "", yLabel: n ? n.getLabelForIndex(i, o) : "", index: i, datasetIndex: o, x: t._model.x, y: t._model.y}
                        }
                        function o(e) {
                            var n = t.defaults.global, i = l.getValueOrDefault;
                            return{xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, bodyFontColor: e.bodyFontColor, _bodyFontFamily: i(e.bodyFontFamily, n.defaultFontFamily), _bodyFontStyle: i(e.bodyFontStyle, n.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: i(e.bodyFontSize, n.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: i(e.titleFontFamily, n.defaultFontFamily), _titleFontStyle: i(e.titleFontStyle, n.defaultFontStyle), titleFontSize: i(e.titleFontSize, n.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: i(e.footerFontFamily, n.defaultFontFamily), _footerFontStyle: i(e.footerFontStyle, n.defaultFontStyle), footerFontSize: i(e.footerFontSize, n.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors, borderColor: e.borderColor, borderWidth: e.borderWidth}
                        }
                        function a(t, e) {
                            var n = t._chart.ctx, i = 2 * e.yPadding, o = 0, a = e.body, r = a.reduce(function (t, e) {
                                return t + e.before.length + e.lines.length + e.after.length
                            }, 0);
                            r += e.beforeBody.length + e.afterBody.length;
                            var s = e.title.length, c = e.footer.length, u = e.titleFontSize, d = e.bodyFontSize, h = e.footerFontSize;
                            i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += r * d, i += r ? (r - 1) * e.bodySpacing : 0, i += c ? e.footerMarginTop : 0, i += c * h, i += c ? (c - 1) * e.footerSpacing : 0;
                            var p = 0, f = function (t) {
                                o = Math.max(o, n.measureText(t).width + p)
                            };
                            return n.font = l.fontString(u, e._titleFontStyle, e._titleFontFamily), l.each(e.title, f), n.font = l.fontString(d, e._bodyFontStyle, e._bodyFontFamily), l.each(e.beforeBody.concat(e.afterBody), f), p = e.displayColors ? d + 2 : 0, l.each(a, function (t) {
                                l.each(t.before, f), l.each(t.lines, f), l.each(t.after, f)
                            }), p = 0, n.font = l.fontString(h, e._footerFontStyle, e._footerFontFamily), l.each(e.footer, f), o += 2 * e.xPadding, {width: o, height: i}
                        }
                        function r(t, e) {
                            var n = t._model, i = t._chart, o = t._chart.chartArea, a = "center", r = "center";
                            n.y < e.height ? r = "top" : n.y > i.height - e.height && (r = "bottom");
                            var s, l, c, u, d, h = (o.left + o.right) / 2, p = (o.top + o.bottom) / 2;
                            "center" === r ? (s = function (t) {
                                return t <= h
                            }, l = function (t) {
                                return t > h
                            }) : (s = function (t) {
                                return t <= e.width / 2
                            }, l = function (t) {
                                return t >= i.width - e.width / 2
                            }), c = function (t) {
                                return t + e.width > i.width
                            }, u = function (t) {
                                return t - e.width < 0
                            }, d = function (t) {
                                return t <= p ? "top" : "bottom"
                            }, s(n.x) ? (a = "left", c(n.x) && (a = "center", r = d(n.y))) : l(n.x) && (a = "right", u(n.x) && (a = "center", r = d(n.y)));
                            var f = t._options;
                            return{xAlign: f.xAlign ? f.xAlign : a, yAlign: f.yAlign ? f.yAlign : r}
                        }
                        function s(t, e, n) {
                            var i = t.x, o = t.y, a = t.caretSize, r = t.caretPadding, s = t.cornerRadius, l = n.xAlign, c = n.yAlign, u = a + r, d = s + r;
                            return"right" === l ? i -= e.width : "center" === l && (i -= e.width / 2), "top" === c ? o += u : o -= "bottom" === c ? e.height + u : e.height / 2, "center" === c ? "left" === l ? i += u : "right" === l && (i -= u) : "left" === l ? i -= d : "right" === l && (i += d), {x: i, y: o}
                        }
                        var l = t.helpers;
                        t.defaults.global.tooltips = {enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: {beforeTitle: l.noop, title: function (t, e) {
                                    var n = "", i = e.labels, o = i ? i.length : 0;
                                    if (t.length > 0) {
                                        var a = t[0];
                                        a.xLabel ? n = a.xLabel : o > 0 && a.index < o && (n = i[a.index])
                                    }
                                    return n
                                }, afterTitle: l.noop, beforeBody: l.noop, beforeLabel: l.noop, label: function (t, e) {
                                    var n = e.datasets[t.datasetIndex].label || "";
                                    return n && (n += ": "), n += t.yLabel
                                }, labelColor: function (t, e) {
                                    var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                                    return{borderColor: n.borderColor, backgroundColor: n.backgroundColor}
                                }, afterLabel: l.noop, afterBody: l.noop, beforeFooter: l.noop, footer: l.noop, afterFooter: l.noop}}, t.Tooltip = t.Element.extend({initialize: function () {
                                this._model = o(this._options)
                            }, getTitle: function () {
                                var t = this, e = t._options.callbacks, i = e.beforeTitle.apply(t, arguments), o = e.title.apply(t, arguments), a = e.afterTitle.apply(t, arguments), r = [];
                                return r = n(r, i), r = n(r, o), r = n(r, a)
                            }, getBeforeBody: function () {
                                var t = this._options.callbacks.beforeBody.apply(this, arguments);
                                return l.isArray(t) ? t : void 0 !== t ? [t] : []
                            }, getBody: function (t, e) {
                                var i = this, o = i._options.callbacks, a = [];
                                return l.each(t, function (t) {
                                    var r = {before: [], lines: [], after: []};
                                    n(r.before, o.beforeLabel.call(i, t, e)), n(r.lines, o.label.call(i, t, e)), n(r.after, o.afterLabel.call(i, t, e)), a.push(r)
                                }), a
                            }, getAfterBody: function () {
                                var t = this._options.callbacks.afterBody.apply(this, arguments);
                                return l.isArray(t) ? t : void 0 !== t ? [t] : []
                            }, getFooter: function () {
                                var t = this, e = t._options.callbacks, i = e.beforeFooter.apply(t, arguments), o = e.footer.apply(t, arguments), a = e.afterFooter.apply(t, arguments), r = [];
                                return r = n(r, i), r = n(r, o), r = n(r, a)
                            }, update: function (e) {
                                var n, c, u = this, d = u._options, h = u._model, p = u._model = o(d), f = u._active, m = u._data, g = {xAlign: h.xAlign, yAlign: h.yAlign}, v = {x: h.x, y: h.y}, y = {width: h.width, height: h.height}, b = {x: h.caretX, y: h.caretY};
                                if (f.length) {
                                    p.opacity = 1;
                                    var x = [];
                                    b = t.Tooltip.positioners[d.position](f, u._eventPosition);
                                    var w = [];
                                    for (n = 0, c = f.length; n < c; ++n)
                                        w.push(i(f[n]));
                                    d.filter && (w = w.filter(function (t) {
                                        return d.filter(t, m)
                                    })), d.itemSort && (w = w.sort(function (t, e) {
                                        return d.itemSort(t, e, m)
                                    })), l.each(w, function (t) {
                                        x.push(d.callbacks.labelColor.call(u, t, u._chart))
                                    }), p.title = u.getTitle(w, m), p.beforeBody = u.getBeforeBody(w, m), p.body = u.getBody(w, m), p.afterBody = u.getAfterBody(w, m), p.footer = u.getFooter(w, m), p.x = Math.round(b.x), p.y = Math.round(b.y), p.caretPadding = d.caretPadding, p.labelColors = x, p.dataPoints = w, v = s(p, y = a(this, p), g = r(this, y))
                                } else
                                    p.opacity = 0;
                                return p.xAlign = g.xAlign, p.yAlign = g.yAlign, p.x = v.x, p.y = v.y, p.width = y.width, p.height = y.height, p.caretX = b.x, p.caretY = b.y, u._model = p, e && d.custom && d.custom.call(u, p), u
                            }, drawCaret: function (t, e) {
                                var n = this._chart.ctx, i = this._view, o = this.getCaretPosition(t, e, i);
                                n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
                            }, getCaretPosition: function (t, e, n) {
                                var i, o, a, r, s, l, c = n.caretSize, u = n.cornerRadius, d = n.xAlign, h = n.yAlign, p = t.x, f = t.y, m = e.width, g = e.height;
                                if ("center" === h)
                                    s = f + g / 2, "left" === d ? (o = (i = p) - c, a = i, r = s + c, l = s - c) : (o = (i = p + m) + c, a = i, r = s - c, l = s + c);
                                else if ("left" === d ? (i = (o = p + u + c) - c, a = o + c) : "right" === d ? (i = (o = p + m - u - c) - c, a = o + c) : (i = (o = p + m / 2) - c, a = o + c), "top" === h)
                                    s = (r = f) - c, l = r;
                                else {
                                    s = (r = f + g) + c, l = r;
                                    var v = a;
                                    a = i, i = v
                                }
                                return{x1: i, x2: o, x3: a, y1: r, y2: s, y3: l}
                            }, drawTitle: function (t, n, i, o) {
                                var a = n.title;
                                if (a.length) {
                                    i.textAlign = n._titleAlign, i.textBaseline = "top";
                                    var r = n.titleFontSize, s = n.titleSpacing;
                                    i.fillStyle = e(n.titleFontColor, o), i.font = l.fontString(r, n._titleFontStyle, n._titleFontFamily);
                                    var c, u;
                                    for (c = 0, u = a.length; c < u; ++c)
                                        i.fillText(a[c], t.x, t.y), t.y += r + s, c + 1 === a.length && (t.y += n.titleMarginBottom - s)
                                }
                            }, drawBody: function (t, n, i, o) {
                                var a = n.bodyFontSize, r = n.bodySpacing, s = n.body;
                                i.textAlign = n._bodyAlign, i.textBaseline = "top";
                                var c = e(n.bodyFontColor, o);
                                i.fillStyle = c, i.font = l.fontString(a, n._bodyFontStyle, n._bodyFontFamily);
                                var u = 0, d = function (e) {
                                    i.fillText(e, t.x + u, t.y), t.y += a + r
                                };
                                l.each(n.beforeBody, d);
                                var h = n.displayColors;
                                u = h ? a + 2 : 0, l.each(s, function (r, s) {
                                    l.each(r.before, d), l.each(r.lines, function (r) {
                                        h && (i.fillStyle = e(n.legendColorBackground, o), i.fillRect(t.x, t.y, a, a), i.strokeStyle = e(n.labelColors[s].borderColor, o), i.strokeRect(t.x, t.y, a, a), i.fillStyle = e(n.labelColors[s].backgroundColor, o), i.fillRect(t.x + 1, t.y + 1, a - 2, a - 2), i.fillStyle = c), d(r)
                                    }), l.each(r.after, d)
                                }), u = 0, l.each(n.afterBody, d), t.y -= r
                            }, drawFooter: function (t, n, i, o) {
                                var a = n.footer;
                                a.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = e(n.footerFontColor, o), i.font = l.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), l.each(a, function (e) {
                                    i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing
                                }))
                            }, drawBackground: function (t, n, i, o, a) {
                                i.fillStyle = e(n.backgroundColor, a), i.strokeStyle = e(n.borderColor, a), i.lineWidth = n.borderWidth;
                                var r = n.xAlign, s = n.yAlign, l = t.x, c = t.y, u = o.width, d = o.height, h = n.cornerRadius;
                                i.beginPath(), i.moveTo(l + h, c), "top" === s && this.drawCaret(t, o), i.lineTo(l + u - h, c), i.quadraticCurveTo(l + u, c, l + u, c + h), "center" === s && "right" === r && this.drawCaret(t, o), i.lineTo(l + u, c + d - h), i.quadraticCurveTo(l + u, c + d, l + u - h, c + d), "bottom" === s && this.drawCaret(t, o), i.lineTo(l + h, c + d), i.quadraticCurveTo(l, c + d, l, c + d - h), "center" === s && "left" === r && this.drawCaret(t, o), i.lineTo(l, c + h), i.quadraticCurveTo(l, c, l + h, c), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke()
                            }, draw: function () {
                                var t = this._chart.ctx, e = this._view;
                                if (0 !== e.opacity) {
                                    var n = {width: e.width, height: e.height}, i = {x: e.x, y: e.y}, o = Math.abs(e.opacity < .001) ? 0 : e.opacity, a = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                                    this._options.enabled && a && (this.drawBackground(i, e, t, n, o), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, o), this.drawBody(i, e, t, o), this.drawFooter(i, e, t, o))
                                }
                            }, handleEvent: function (t) {
                                var e = this, n = e._options, i = !1;
                                if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), !(i = !l.arrayEquals(e._active, e._lastActive)))
                                    return!1;
                                if (e._lastActive = e._active, n.enabled || n.custom) {
                                    e._eventPosition = {x: t.x, y: t.y};
                                    var o = e._model;
                                    e.update(!0), e.pivot(), i |= o.x !== e._model.x || o.y !== e._model.y
                                }
                                return i
                            }}), t.Tooltip.positioners = {average: function (t) {
                                if (!t.length)
                                    return!1;
                                var e, n, i = 0, o = 0, a = 0;
                                for (e = 0, n = t.length; e < n; ++e) {
                                    var r = t[e];
                                    if (r && r.hasValue()) {
                                        var s = r.tooltipPosition();
                                        i += s.x, o += s.y, ++a
                                    }
                                }
                                return{x: Math.round(i / a), y: Math.round(o / a)}
                            }, nearest: function (t, e) {
                                var n, i, o, a = e.x, r = e.y, s = Number.POSITIVE_INFINITY;
                                for (i = 0, o = t.length; i < o; ++i) {
                                    var c = t[i];
                                    if (c && c.hasValue()) {
                                        var u = c.getCenterPoint(), d = l.distanceBetweenPoints(e, u);
                                        d < s && (s = d, n = c)
                                    }
                                }
                                if (n) {
                                    var h = n.tooltipPosition();
                                    a = h.x, r = h.y
                                }
                                return{x: a, y: r}
                            }}
                    }
                }, {}], 35: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers, n = t.defaults.global;
                        n.elements.arc = {backgroundColor: n.defaultColor, borderColor: "#fff", borderWidth: 2}, t.elements.Arc = t.Element.extend({inLabelRange: function (t) {
                                var e = this._view;
                                return!!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                            }, inRange: function (t, n) {
                                var i = this._view;
                                if (i) {
                                    for (var o = e.getAngleFromPoint(i, {x: t, y: n}), a = o.angle, r = o.distance, s = i.startAngle, l = i.endAngle; l < s; )
                                        l += 2 * Math.PI;
                                    for (; a > l; )
                                        a -= 2 * Math.PI;
                                    for (; a < s; )
                                        a += 2 * Math.PI;
                                    var c = a >= s && a <= l, u = r >= i.innerRadius && r <= i.outerRadius;
                                    return c && u
                                }
                                return!1
                            }, getCenterPoint: function () {
                                var t = this._view, e = (t.startAngle + t.endAngle) / 2, n = (t.innerRadius + t.outerRadius) / 2;
                                return{x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n}
                            }, getArea: function () {
                                var t = this._view;
                                return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                            }, tooltipPosition: function () {
                                var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2, n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                                return{x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n}
                            }, draw: function () {
                                var t = this._chart.ctx, e = this._view, n = e.startAngle, i = e.endAngle;
                                t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                            }})
                    }
                }, {}], 36: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers, n = t.defaults.global;
                        t.defaults.global.elements.line = {tension: .4, backgroundColor: n.defaultColor, borderWidth: 3, borderColor: n.defaultColor, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0}, t.elements.Line = t.Element.extend({draw: function () {
                                var t, i, o, a, r = this, s = r._view, l = r._chart.ctx, c = s.spanGaps, u = r._children.slice(), d = n.elements.line, h = -1;
                                for (r._loop && u.length && u.push(u[0]), l.save(), l.lineCap = s.borderCapStyle || d.borderCapStyle, l.setLineDash && l.setLineDash(s.borderDash || d.borderDash), l.lineDashOffset = s.borderDashOffset || d.borderDashOffset, l.lineJoin = s.borderJoinStyle || d.borderJoinStyle, l.lineWidth = s.borderWidth || d.borderWidth, l.strokeStyle = s.borderColor || n.defaultColor, l.beginPath(), h = - 1, t = 0; t < u.length; ++t)
                                    i = u[t], o = e.previousItem(u, t), a = i._view, 0 === t ? a.skip || (l.moveTo(a.x, a.y), h = t) : (o = -1 === h ? o : u[h], a.skip || (h !== t - 1 && !c || -1 === h ? l.moveTo(a.x, a.y) : e.canvas.lineTo(l, o._view, i._view), h = t));
                                l.stroke(), l.restore()
                            }})
                    }
                }, {}], 37: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t) {
                            var e = this._view;
                            return!!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
                        }
                        var n = t.helpers, i = t.defaults.global, o = i.defaultColor;
                        i.elements.point = {radius: 3, pointStyle: "circle", backgroundColor: o, borderWidth: 1, borderColor: o, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1}, t.elements.Point = t.Element.extend({inRange: function (t, e) {
                                var n = this._view;
                                return!!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                            }, inLabelRange: e, inXRange: e, inYRange: function (t) {
                                var e = this._view;
                                return!!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
                            }, getCenterPoint: function () {
                                var t = this._view;
                                return{x: t.x, y: t.y}
                            }, getArea: function () {
                                return Math.PI * Math.pow(this._view.radius, 2)
                            }, tooltipPosition: function () {
                                var t = this._view;
                                return{x: t.x, y: t.y, padding: t.radius + t.borderWidth}
                            }, draw: function (e) {
                                var a = this._view, r = this._model, s = this._chart.ctx, l = a.pointStyle, c = a.radius, u = a.x, d = a.y, h = t.helpers.color, p = 0;
                                a.skip || (s.strokeStyle = a.borderColor || o, s.lineWidth = n.getValueOrDefault(a.borderWidth, i.elements.point.borderWidth), s.fillStyle = a.backgroundColor || o, void 0 !== e && (r.x < e.left || 1.01 * e.right < r.x || r.y < e.top || 1.01 * e.bottom < r.y) && (r.x < e.left ? p = (u - r.x) / (e.left - r.x) : 1.01 * e.right < r.x ? p = (r.x - u) / (r.x - e.right) : r.y < e.top ? p = (d - r.y) / (e.top - r.y) : 1.01 * e.bottom < r.y && (p = (r.y - d) / (r.y - e.bottom)), p = Math.round(100 * p) / 100, s.strokeStyle = h(s.strokeStyle).alpha(p).rgbString(), s.fillStyle = h(s.fillStyle).alpha(p).rgbString()), t.canvasHelpers.drawPoint(s, l, c, u, d))
                            }})
                    }
                }, {}], 38: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t) {
                            return void 0 !== t._view.width
                        }
                        function n(t) {
                            var n, i, o, a, r = t._view;
                            if (e(t)) {
                                var s = r.width / 2;
                                n = r.x - s, i = r.x + s, o = Math.min(r.y, r.base), a = Math.max(r.y, r.base)
                            } else {
                                var l = r.height / 2;
                                n = Math.min(r.x, r.base), i = Math.max(r.x, r.base), o = r.y - l, a = r.y + l
                            }
                            return{left: n, top: o, right: i, bottom: a}
                        }
                        var i = t.defaults.global;
                        i.elements.rectangle = {backgroundColor: i.defaultColor, borderWidth: 0, borderColor: i.defaultColor, borderSkipped: "bottom"}, t.elements.Rectangle = t.Element.extend({draw: function () {
                                function t(t) {
                                    return v[(y + t) % 4]
                                }
                                var e, n, i, o, a, r, s, l = this._chart.ctx, c = this._view, u = c.borderWidth;
                                if (c.horizontal ? (e = c.base, n = c.x, i = c.y - c.height / 2, o = c.y + c.height / 2, a = n > e ? 1 : -1, r = 1, s = c.borderSkipped || "left") : (e = c.x - c.width / 2, n = c.x + c.width / 2, i = c.y, a = 1, r = (o = c.base) > i ? 1 : -1, s = c.borderSkipped || "bottom"), u) {
                                    var d = Math.min(Math.abs(e - n), Math.abs(i - o)), h = (u = u > d ? d : u) / 2, p = e + ("left" !== s ? h * a : 0), f = n + ("right" !== s ? -h * a : 0), m = i + ("top" !== s ? h * r : 0), g = o + ("bottom" !== s ? -h * r : 0);
                                    p !== f && (i = m, o = g), m !== g && (e = p, n = f)
                                }
                                l.beginPath(), l.fillStyle = c.backgroundColor, l.strokeStyle = c.borderColor, l.lineWidth = u;
                                var v = [[e, o], [e, i], [n, i], [n, o]], y = ["bottom", "left", "top", "right"].indexOf(s, 0);
                                -1 === y && (y = 0);
                                var b = t(0);
                                l.moveTo(b[0], b[1]);
                                for (var x = 1; x < 4; x++)
                                    b = t(x), l.lineTo(b[0], b[1]);
                                l.fill(), u && l.stroke()
                            }, height: function () {
                                var t = this._view;
                                return t.base - t.y
                            }, inRange: function (t, e) {
                                var i = !1;
                                if (this._view) {
                                    var o = n(this);
                                    i = t >= o.left && t <= o.right && e >= o.top && e <= o.bottom
                                }
                                return i
                            }, inLabelRange: function (t, i) {
                                var o = this;
                                if (!o._view)
                                    return!1;
                                var a = n(o);
                                return e(o) ? t >= a.left && t <= a.right : i >= a.top && i <= a.bottom
                            }, inXRange: function (t) {
                                var e = n(this);
                                return t >= e.left && t <= e.right
                            }, inYRange: function (t) {
                                var e = n(this);
                                return t >= e.top && t <= e.bottom
                            }, getCenterPoint: function () {
                                var t, n, i = this._view;
                                return e(this) ? (t = i.x, n = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, n = i.y), {x: t, y: n}
                            }, getArea: function () {
                                var t = this._view;
                                return t.width * Math.abs(t.y - t.base)
                            }, tooltipPosition: function () {
                                var t = this._view;
                                return{x: t.x, y: t.y}
                            }})
                    }
                }, {}], 39: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t, e) {
                            var n = l.getStyle(t, e), i = n && n.match(/^(\d+)(\.\d+)?px$/);
                            return i ? Number(i[1]) : void 0
                        }
                        function n(t, n) {
                            var i = t.style, o = t.getAttribute("height"), a = t.getAttribute("width");
                            if (t._chartjs = {initial: {height: o, width: a, style: {display: i.display, height: i.height, width: i.width}}}, i.display = i.display || "block", null === a || "" === a) {
                                var r = e(t, "width");
                                void 0 !== r && (t.width = r)
                            }
                            if (null === o || "" === o)
                                if ("" === t.style.height)
                                    t.height = t.width / (n.options.aspectRatio || 2);
                                else {
                                    var s = e(t, "height");
                                    void 0 !== r && (t.height = s)
                                }
                            return t
                        }
                        function i(t, e, n, i, o) {
                            return{type: t, chart: e, native: o || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null}
                        }
                        function o(t, e) {
                            var n = c[t.type] || t.type, o = l.getRelativePosition(t, e);
                            return i(n, e, o.x, o.y, t)
                        }
                        function a(t) {
                            var e = document.createElement("iframe");
                            return e.className = "chartjs-hidden-iframe", e.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", e.tabIndex = -1, l.addEvent(e, "load", function () {
                                l.addEvent(e.contentWindow || e, "resize", t), t()
                            }), e
                        }
                        function r(t, e, n) {
                            var o = t._chartjs = {ticking: !1};
                            o.resizer = a(function () {
                                o.ticking || (o.ticking = !0, l.requestAnimFrame.call(window, function () {
                                    if (o.resizer)
                                        return o.ticking = !1, e(i("resize", n))
                                }))
                            }), t.insertBefore(o.resizer, t.firstChild)
                        }
                        function s(t) {
                            if (t && t._chartjs) {
                                var e = t._chartjs.resizer;
                                e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs
                            }
                        }
                        var l = t.helpers, c = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout"};
                        return{acquireContext: function (t, e) {
                                "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                                var i = t && t.getContext && t.getContext("2d");
                                return i && i.canvas === t ? (n(t, e), i) : null
                            }, releaseContext: function (t) {
                                var e = t.canvas;
                                if (e._chartjs) {
                                    var n = e._chartjs.initial;
                                    ["height", "width"].forEach(function (t) {
                                        var i = n[t];
                                        void 0 === i || null === i ? e.removeAttribute(t) : e.setAttribute(t, i)
                                    }), l.each(n.style || {}, function (t, n) {
                                        e.style[n] = t
                                    }), e.width = e.width, delete e._chartjs
                                }
                            }, addEventListener: function (t, e, n) {
                                var i = t.canvas;
                                if ("resize" !== e) {
                                    var a = n._chartjs || (n._chartjs = {}), s = (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function (e) {
                                        n(o(e, t))
                                    };
                                    l.addEvent(i, e, s)
                                } else
                                    r(i.parentNode, n, t)
                            }, removeEventListener: function (t, e, n) {
                                var i = t.canvas;
                                if ("resize" !== e) {
                                    var o = ((n._chartjs || {}).proxies || {})[t.id + "_" + e];
                                    o && l.removeEvent(i, e, o)
                                } else
                                    s(i.parentNode)
                            }}
                    }
                }, {}], 40: [function (t, e, n) {
                    "use strict";
                    var i = t(39);
                    e.exports = function (t) {
                        t.platform = {acquireContext: function () {}, releaseContext: function () {}, addEventListener: function () {}, removeEventListener: function () {}}, t.helpers.extend(t.platform, i(t))
                    }
                }, {39: 39}], 41: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t, e, n) {
                            var i, o = t._model || {}, a = o.fill;
                            if (void 0 === a && (a = !!o.backgroundColor), !1 === a || null === a)
                                return!1;
                            if (!0 === a)
                                return"origin";
                            if (i = parseFloat(a, 10), isFinite(i) && Math.floor(i) === i)
                                return"-" !== a[0] && "+" !== a[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
                            switch (a) {
                                case"bottom":
                                    return"start";
                                case"top":
                                    return"end";
                                case"zero":
                                    return"origin";
                                case"origin":
                                case"start":
                                case"end":
                                    return a;
                                default:
                                    return!1
                            }
                        }
                        function n(t) {
                            var e, n = t.el._model || {}, i = t.el._scale || {}, o = t.fill, a = null;
                            if (isFinite(o))
                                return null;
                            if ("start" === o ? a = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === o ? a = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : i.getBasePosition ? a = i.getBasePosition() : i.getBasePixel && (a = i.getBasePixel()), void 0 !== a && null !== a) {
                                if (void 0 !== a.x && void 0 !== a.y)
                                    return a;
                                if ("number" == typeof a && isFinite(a))
                                    return e = i.isHorizontal(), {x: e ? a : null, y: e ? null : a}
                            }
                            return null
                        }
                        function i(t, e, n) {
                            var i, o = t[e].fill, a = [e];
                            if (!n)
                                return o;
                            for (; !1 !== o && -1 === a.indexOf(o); ) {
                                if (!isFinite(o))
                                    return o;
                                if (!(i = t[o]))
                                    return!1;
                                if (i.visible)
                                    return o;
                                a.push(o), o = i.fill
                            }
                            return!1
                        }
                        function o(t) {
                            var e = t.fill, n = "dataset";
                            return!1 === e ? null : (isFinite(e) || (n = "boundary"), u[n](t))
                        }
                        function a(t) {
                            return t && !t.skip
                        }
                        function r(t, e, n, i, o) {
                            var a;
                            if (i && o) {
                                for (t.moveTo(e[0].x, e[0].y), a = 1; a < i; ++a)
                                    c.canvas.lineTo(t, e[a - 1], e[a]);
                                for (t.lineTo(n[o - 1].x, n[o - 1].y), a = o - 1; a > 0; --a)
                                    c.canvas.lineTo(t, n[a], n[a - 1], !0)
                            }
                        }
                        function s(t, e, n, i, o, s) {
                            var l, c, u, d, h, p, f, m = e.length, g = i.spanGaps, v = [], y = [], b = 0, x = 0;
                            for (t.beginPath(), l = 0, c = m + !!s; l < c; ++l)
                                h = n(d = e[u = l % m]._view, u, i), p = a(d), f = a(h), p && f ? (b = v.push(d), x = y.push(h)) : b && x && (g ? (p && v.push(d), f && y.push(h)) : (r(t, v, y, b, x), b = x = 0, v = [], y = []));
                            r(t, v, y, b, x), t.closePath(), t.fillStyle = o, t.fill()
                        }
                        t.defaults.global.plugins.filler = {propagate: !0};
                        var l = t.defaults, c = t.helpers, u = {dataset: function (t) {
                                var e = t.fill, n = t.chart, i = n.getDatasetMeta(e), o = i && n.isDatasetVisible(e) && i.dataset._children || [];
                                return o.length ? function (t, e) {
                                    return o[e]._view || null
                                } : null
                            }, boundary: function (t) {
                                var e = t.boundary, n = e ? e.x : null, i = e ? e.y : null;
                                return function (t) {
                                    return{x: null === n ? t.x : n, y: null === i ? t.y : i}
                                }
                            }};
                        return{id: "filler", afterDatasetsUpdate: function (a, r) {
                                var s, l, c, u, d = (a.data.datasets || []).length, h = r.propagate, p = [];
                                for (l = 0; l < d; ++l)
                                    u = null, (c = (s = a.getDatasetMeta(l)).dataset) && c._model && c instanceof t.elements.Line && (u = {visible: a.isDatasetVisible(l), fill: e(c, l, d), chart: a, el: c}), s.$filler = u, p.push(u);
                                for (l = 0; l < d; ++l)
                                    (u = p[l]) && (u.fill = i(p, l, h), u.boundary = n(u), u.mapper = o(u))
                            }, beforeDatasetDraw: function (t, e) {
                                var n = e.meta.$filler;
                                if (n) {
                                    var i = n.el, o = i._view, a = i._children || [], r = n.mapper, c = o.backgroundColor || l.global.defaultColor;
                                    r && c && a.length && s(t.ctx, a, r, o, c, i._loop)
                                }
                            }}
                    }
                }, {}], 42: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t, e) {
                            return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                        }
                        function n(e, n) {
                            var i = new t.Legend({ctx: e.ctx, options: n, chart: e});
                            o.configure(e, i, n), o.addBox(e, i), e.legend = i
                        }
                        var i = t.helpers, o = t.layoutService, a = i.noop;
                        return t.defaults.global.legend = {display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function (t, e) {
                                var n = e.datasetIndex, i = this.chart, o = i.getDatasetMeta(n);
                                o.hidden = null === o.hidden ? !i.data.datasets[n].hidden : null, i.update()
                            }, onHover: null, labels: {boxWidth: 40, padding: 10, generateLabels: function (t) {
                                    var e = t.data;
                                    return i.isArray(e.datasets) ? e.datasets.map(function (e, n) {
                                        return{text: e.label, fillStyle: i.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor, hidden: !t.isDatasetVisible(n), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, pointStyle: e.pointStyle, datasetIndex: n}
                                    }, this) : []
                                }}}, t.Legend = t.Element.extend({initialize: function (t) {
                                i.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                            }, beforeUpdate: a, update: function (t, e, n) {
                                var i = this;
                                return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                            }, afterUpdate: a, beforeSetDimensions: a, setDimensions: function () {
                                var t = this;
                                t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {width: 0, height: 0}
                            }, afterSetDimensions: a, beforeBuildLabels: a, buildLabels: function () {
                                var t = this, e = t.options.labels, n = e.generateLabels.call(t, t.chart);
                                e.filter && (n = n.filter(function (n) {
                                    return e.filter(n, t.chart.data)
                                })), t.options.reverse && n.reverse(), t.legendItems = n
                            }, afterBuildLabels: a, beforeFit: a, fit: function () {
                                var n = this, o = n.options, a = o.labels, r = o.display, s = n.ctx, l = t.defaults.global, c = i.getValueOrDefault, u = c(a.fontSize, l.defaultFontSize), d = c(a.fontStyle, l.defaultFontStyle), h = c(a.fontFamily, l.defaultFontFamily), p = i.fontString(u, d, h), f = n.legendHitBoxes = [], m = n.minSize, g = n.isHorizontal();
                                if (g ? (m.width = n.maxWidth, m.height = r ? 10 : 0) : (m.width = r ? 10 : 0, m.height = n.maxHeight), r)
                                    if (s.font = p, g) {
                                        var v = n.lineWidths = [0], y = n.legendItems.length ? u + a.padding : 0;
                                        s.textAlign = "left", s.textBaseline = "top", i.each(n.legendItems, function (t, i) {
                                            var o = e(a, u) + u / 2 + s.measureText(t.text).width;
                                            v[v.length - 1] + o + a.padding >= n.width && (y += u + a.padding, v[v.length] = n.left), f[i] = {left: 0, top: 0, width: o, height: u}, v[v.length - 1] += o + a.padding
                                        }), m.height += y
                                    } else {
                                        var b = a.padding, x = n.columnWidths = [], w = a.padding, k = 0, C = 0, S = u + b;
                                        i.each(n.legendItems, function (t, n) {
                                            var i = e(a, u) + u / 2 + s.measureText(t.text).width;
                                            C + S > m.height && (w += k + a.padding, x.push(k), k = 0, C = 0), k = Math.max(k, i), C += S, f[n] = {left: 0, top: 0, width: i, height: u}
                                        }), w += k, x.push(k), m.width += w
                                    }
                                n.width = m.width, n.height = m.height
                            }, afterFit: a, isHorizontal: function () {
                                return"top" === this.options.position || "bottom" === this.options.position
                            }, draw: function () {
                                var n = this, o = n.options, a = o.labels, r = t.defaults.global, s = r.elements.line, l = n.width, c = n.lineWidths;
                                if (o.display) {
                                    var u, d = n.ctx, h = i.getValueOrDefault, p = h(a.fontColor, r.defaultFontColor), f = h(a.fontSize, r.defaultFontSize), m = h(a.fontStyle, r.defaultFontStyle), g = h(a.fontFamily, r.defaultFontFamily), v = i.fontString(f, m, g);
                                    d.textAlign = "left", d.textBaseline = "top", d.lineWidth = .5, d.strokeStyle = p, d.fillStyle = p, d.font = v;
                                    var y = e(a, f), b = n.legendHitBoxes, x = function (e, n, i) {
                                        if (!(isNaN(y) || y <= 0)) {
                                            d.save(), d.fillStyle = h(i.fillStyle, r.defaultColor), d.lineCap = h(i.lineCap, s.borderCapStyle), d.lineDashOffset = h(i.lineDashOffset, s.borderDashOffset), d.lineJoin = h(i.lineJoin, s.borderJoinStyle), d.lineWidth = h(i.lineWidth, s.borderWidth), d.strokeStyle = h(i.strokeStyle, r.defaultColor);
                                            var a = 0 === h(i.lineWidth, s.borderWidth);
                                            if (d.setLineDash && d.setLineDash(h(i.lineDash, s.borderDash)), o.labels && o.labels.usePointStyle) {
                                                var l = f * Math.SQRT2 / 2, c = l / Math.SQRT2, u = e + c, p = n + c;
                                                t.canvasHelpers.drawPoint(d, i.pointStyle, l, u, p)
                                            } else
                                                a || d.strokeRect(e, n, y, f), d.fillRect(e, n, y, f);
                                            d.restore()
                                        }
                                    }, w = function (t, e, n, i) {
                                        d.fillText(n.text, y + f / 2 + t, e), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(y + f / 2 + t, e + f / 2), d.lineTo(y + f / 2 + t + i, e + f / 2), d.stroke())
                                    }, k = n.isHorizontal();
                                    u = k ? {x: n.left + (l - c[0]) / 2, y: n.top + a.padding, line: 0} : {x: n.left + a.padding, y: n.top + a.padding, line: 0};
                                    var C = f + a.padding;
                                    i.each(n.legendItems, function (t, e) {
                                        var i = d.measureText(t.text).width, o = y + f / 2 + i, r = u.x, s = u.y;
                                        k ? r + o >= l && (s = u.y += C, u.line++, r = u.x = n.left + (l - c[u.line]) / 2) : s + C > n.bottom && (r = u.x = r + n.columnWidths[u.line] + a.padding, s = u.y = n.top + a.padding, u.line++), x(r, s, t), b[e].left = r, b[e].top = s, w(r, s, t, i), k ? u.x += o + a.padding : u.y += C
                                    })
                                }
                            }, handleEvent: function (t) {
                                var e = this, n = e.options, i = "mouseup" === t.type ? "click" : t.type, o = !1;
                                if ("mousemove" === i) {
                                    if (!n.onHover)
                                        return
                                } else {
                                    if ("click" !== i)
                                        return;
                                    if (!n.onClick)
                                        return
                                }
                                var a = t.x, r = t.y;
                                if (a >= e.left && a <= e.right && r >= e.top && r <= e.bottom)
                                    for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                                        var c = s[l];
                                        if (a >= c.left && a <= c.left + c.width && r >= c.top && r <= c.top + c.height) {
                                            if ("click" === i) {
                                                n.onClick.call(e, t.native, e.legendItems[l]), o = !0;
                                                break
                                            }
                                            if ("mousemove" === i) {
                                                n.onHover.call(e, t.native, e.legendItems[l]), o = !0;
                                                break
                                            }
                                        }
                                    }
                                return o
                            }}), {id: "legend", beforeInit: function (t) {
                                var e = t.options.legend;
                                e && n(t, e)
                            }, beforeUpdate: function (e) {
                                var a = e.options.legend, r = e.legend;
                                a ? (a = i.configMerge(t.defaults.global.legend, a), r ? (o.configure(e, r, a), r.options = a) : n(e, a)) : r && (o.removeBox(e, r), delete e.legend)
                            }, afterEvent: function (t, e) {
                                var n = t.legend;
                                n && n.handleEvent(e)
                            }}
                    }
                }, {}], 43: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(e, n) {
                            var o = new t.Title({ctx: e.ctx, options: n, chart: e});
                            i.configure(e, o, n), i.addBox(e, o), e.titleBlock = o
                        }
                        var n = t.helpers, i = t.layoutService, o = n.noop;
                        return t.defaults.global.title = {display: !1, position: "top", fullWidth: !0, weight: 2e3, fontStyle: "bold", padding: 10, text: ""}, t.Title = t.Element.extend({initialize: function (t) {
                                var e = this;
                                n.extend(e, t), e.legendHitBoxes = []
                            }, beforeUpdate: o, update: function (t, e, n) {
                                var i = this;
                                return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                            }, afterUpdate: o, beforeSetDimensions: o, setDimensions: function () {
                                var t = this;
                                t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {width: 0, height: 0}
                            }, afterSetDimensions: o, beforeBuildLabels: o, buildLabels: o, afterBuildLabels: o, beforeFit: o, fit: function () {
                                var e = this, i = n.getValueOrDefault, o = e.options, a = t.defaults.global, r = o.display, s = i(o.fontSize, a.defaultFontSize), l = e.minSize;
                                e.isHorizontal() ? (l.width = e.maxWidth, l.height = r ? s + 2 * o.padding : 0) : (l.width = r ? s + 2 * o.padding : 0, l.height = e.maxHeight), e.width = l.width, e.height = l.height
                            }, afterFit: o, isHorizontal: function () {
                                var t = this.options.position;
                                return"top" === t || "bottom" === t
                            }, draw: function () {
                                var e = this, i = e.ctx, o = n.getValueOrDefault, a = e.options, r = t.defaults.global;
                                if (a.display) {
                                    var s, l, c, u = o(a.fontSize, r.defaultFontSize), d = o(a.fontStyle, r.defaultFontStyle), h = o(a.fontFamily, r.defaultFontFamily), p = n.fontString(u, d, h), f = 0, m = e.top, g = e.left, v = e.bottom, y = e.right;
                                    i.fillStyle = o(a.fontColor, r.defaultFontColor), i.font = p, e.isHorizontal() ? (s = g + (y - g) / 2, l = m + (v - m) / 2, c = y - g) : (s = "left" === a.position ? g + u / 2 : y - u / 2, l = m + (v - m) / 2, c = v - m, f = Math.PI * ("left" === a.position ? -.5 : .5)), i.save(), i.translate(s, l), i.rotate(f), i.textAlign = "center", i.textBaseline = "middle", i.fillText(a.text, 0, 0, c), i.restore()
                                }
                            }}), {id: "title", beforeInit: function (t) {
                                var n = t.options.title;
                                n && e(t, n)
                            }, beforeUpdate: function (o) {
                                var a = o.options.title, r = o.titleBlock;
                                a ? (a = n.configMerge(t.defaults.global.title, a), r ? (i.configure(o, r, a), r.options = a) : e(o, a)) : r && (t.layoutService.removeBox(o, r), delete o.titleBlock)
                            }}
                    }
                }, {}], 44: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers, n = {position: "bottom"}, i = t.Scale.extend({getLabels: function () {
                                var t = this.chart.data;
                                return(this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                            }, determineDataLimits: function () {
                                var t = this, n = t.getLabels();
                                t.minIndex = 0, t.maxIndex = n.length - 1;
                                var i;
                                void 0 !== t.options.ticks.min && (i = e.indexOf(n, t.options.ticks.min), t.minIndex = -1 !== i ? i : t.minIndex), void 0 !== t.options.ticks.max && (i = e.indexOf(n, t.options.ticks.max), t.maxIndex = -1 !== i ? i : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex]
                            }, buildTicks: function () {
                                var t = this, e = t.getLabels();
                                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                            }, getLabelForIndex: function (t, e) {
                                var n = this, i = n.chart.data, o = n.isHorizontal();
                                return i.yLabels && !o ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex]
                            }, getPixelForValue: function (t, e, n, i) {
                                var o, a = this, r = Math.max(a.maxIndex + 1 - a.minIndex - (a.options.gridLines.offsetGridLines ? 0 : 1), 1);
                                if (void 0 !== t && null !== t && (o = a.isHorizontal() ? t.x : t.y), void 0 !== o || void 0 !== t && isNaN(e)) {
                                    var s = a.getLabels();
                                    t = o || t;
                                    var l = s.indexOf(t);
                                    e = -1 !== l ? l : e
                                }
                                if (a.isHorizontal()) {
                                    var c = a.width / r, u = c * (e - a.minIndex);
                                    return(a.options.gridLines.offsetGridLines && i || a.maxIndex === a.minIndex && i) && (u += c / 2), a.left + Math.round(u)
                                }
                                var d = a.height / r, h = d * (e - a.minIndex);
                                return a.options.gridLines.offsetGridLines && i && (h += d / 2), a.top + Math.round(h)
                            }, getPixelForTick: function (t, e) {
                                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                            }, getValueForPixel: function (t) {
                                var e = this, n = Math.max(e.ticks.length - (e.options.gridLines.offsetGridLines ? 0 : 1), 1), i = e.isHorizontal(), o = (i ? e.width : e.height) / n;
                                return t -= i ? e.left : e.top, e.options.gridLines.offsetGridLines && (t -= o / 2), t <= 0 ? 0 : Math.round(t / o)
                            }, getBasePixel: function () {
                                return this.bottom
                            }});
                        t.scaleService.registerScaleType("category", i, n)
                    }
                }, {}], 45: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers, n = {position: "left", ticks: {callback: t.Ticks.formatters.linear}}, i = t.LinearScaleBase.extend({determineDataLimits: function () {
                                function t(t) {
                                    return r ? t.xAxisID === n.id : t.yAxisID === n.id
                                }
                                var n = this, i = n.options, o = n.chart, a = o.data.datasets, r = n.isHorizontal();
                                n.min = null, n.max = null;
                                var s = i.stacked;
                                if (void 0 === s && e.each(a, function (e, n) {
                                    if (!s) {
                                        var i = o.getDatasetMeta(n);
                                        o.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (s = !0)
                                    }
                                }), i.stacked || s) {
                                    var l = {};
                                    e.each(a, function (a, r) {
                                        var s = o.getDatasetMeta(r), c = [s.type, void 0 === i.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                        void 0 === l[c] && (l[c] = {positiveValues: [], negativeValues: []});
                                        var u = l[c].positiveValues, d = l[c].negativeValues;
                                        o.isDatasetVisible(r) && t(s) && e.each(a.data, function (t, e) {
                                            var o = +n.getRightValue(t);
                                            isNaN(o) || s.data[e].hidden || (u[e] = u[e] || 0, d[e] = d[e] || 0, i.relativePoints ? u[e] = 100 : o < 0 ? d[e] += o : u[e] += o)
                                        })
                                    }), e.each(l, function (t) {
                                        var i = t.positiveValues.concat(t.negativeValues), o = e.min(i), a = e.max(i);
                                        n.min = null === n.min ? o : Math.min(n.min, o), n.max = null === n.max ? a : Math.max(n.max, a)
                                    })
                                } else
                                    e.each(a, function (i, a) {
                                        var r = o.getDatasetMeta(a);
                                        o.isDatasetVisible(a) && t(r) && e.each(i.data, function (t, e) {
                                            var i = +n.getRightValue(t);
                                            isNaN(i) || r.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i))
                                        })
                                    });
                                n.min = isFinite(n.min) ? n.min : 0, n.max = isFinite(n.max) ? n.max : 1, this.handleTickRangeOptions()
                            }, getTickLimit: function () {
                                var n, i = this, o = i.options.ticks;
                                if (i.isHorizontal())
                                    n = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(i.width / 50));
                                else {
                                    var a = e.getValueOrDefault(o.fontSize, t.defaults.global.defaultFontSize);
                                    n = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(i.height / (2 * a)))
                                }
                                return n
                            }, handleDirectionalChanges: function () {
                                this.isHorizontal() || this.ticks.reverse()
                            }, getLabelForIndex: function (t, e) {
                                return+this.getRightValue(this.chart.data.datasets[e].data[t])
                            }, getPixelForValue: function (t) {
                                var e, n = this, i = n.start, o = +n.getRightValue(t), a = n.end - i;
                                return n.isHorizontal() ? (e = n.left + n.width / a * (o - i), Math.round(e)) : (e = n.bottom - n.height / a * (o - i), Math.round(e))
                            }, getValueForPixel: function (t) {
                                var e = this, n = e.isHorizontal(), i = n ? e.width : e.height, o = (n ? t - e.left : e.bottom - t) / i;
                                return e.start + (e.end - e.start) * o
                            }, getPixelForTick: function (t) {
                                return this.getPixelForValue(this.ticksAsNumbers[t])
                            }});
                        t.scaleService.registerScaleType("linear", i, n)
                    }
                }, {}], 46: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers, n = e.noop;
                        t.LinearScaleBase = t.Scale.extend({handleTickRangeOptions: function () {
                                var t = this, n = t.options.ticks;
                                if (n.beginAtZero) {
                                    var i = e.sign(t.min), o = e.sign(t.max);
                                    i < 0 && o < 0 ? t.max = 0 : i > 0 && o > 0 && (t.min = 0)
                                }
                                void 0 !== n.min ? t.min = n.min : void 0 !== n.suggestedMin && (null === t.min ? t.min = n.suggestedMin : t.min = Math.min(t.min, n.suggestedMin)), void 0 !== n.max ? t.max = n.max : void 0 !== n.suggestedMax && (null === t.max ? t.max = n.suggestedMax : t.max = Math.max(t.max, n.suggestedMax)), t.min === t.max && (t.max++, n.beginAtZero || t.min--)
                            }, getTickLimit: n, handleDirectionalChanges: n, buildTicks: function () {
                                var n = this, i = n.options.ticks, o = n.getTickLimit(), a = {maxTicks: o = Math.max(2, o), min: i.min, max: i.max, stepSize: e.getValueOrDefault(i.fixedStepSize, i.stepSize)}, r = n.ticks = t.Ticks.generators.linear(a, n);
                                n.handleDirectionalChanges(), n.max = e.max(r), n.min = e.min(r), i.reverse ? (r.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max)
                            }, convertTicksToLabels: function () {
                                var e = this;
                                e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                            }})
                    }
                }, {}], 47: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        var e = t.helpers, n = {position: "left", ticks: {callback: t.Ticks.formatters.logarithmic}}, i = t.Scale.extend({determineDataLimits: function () {
                                function t(t) {
                                    return l ? t.xAxisID === n.id : t.yAxisID === n.id
                                }
                                var n = this, i = n.options, o = i.ticks, a = n.chart, r = a.data.datasets, s = e.getValueOrDefault, l = n.isHorizontal();
                                n.min = null, n.max = null, n.minNotZero = null;
                                var c = i.stacked;
                                if (void 0 === c && e.each(r, function (e, n) {
                                    if (!c) {
                                        var i = a.getDatasetMeta(n);
                                        a.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (c = !0)
                                    }
                                }), i.stacked || c) {
                                    var u = {};
                                    e.each(r, function (o, r) {
                                        var s = a.getDatasetMeta(r), l = [s.type, void 0 === i.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                        a.isDatasetVisible(r) && t(s) && (void 0 === u[l] && (u[l] = []), e.each(o.data, function (t, e) {
                                            var o = u[l], a = +n.getRightValue(t);
                                            isNaN(a) || s.data[e].hidden || (o[e] = o[e] || 0, i.relativePoints ? o[e] = 100 : o[e] += a)
                                        }))
                                    }), e.each(u, function (t) {
                                        var i = e.min(t), o = e.max(t);
                                        n.min = null === n.min ? i : Math.min(n.min, i), n.max = null === n.max ? o : Math.max(n.max, o)
                                    })
                                } else
                                    e.each(r, function (i, o) {
                                        var r = a.getDatasetMeta(o);
                                        a.isDatasetVisible(o) && t(r) && e.each(i.data, function (t, e) {
                                            var i = +n.getRightValue(t);
                                            isNaN(i) || r.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i), 0 !== i && (null === n.minNotZero || i < n.minNotZero) && (n.minNotZero = i))
                                        })
                                    });
                                n.min = s(o.min, n.min), n.max = s(o.max, n.max), n.min === n.max && (0 !== n.min && null !== n.min ? (n.min = Math.pow(10, Math.floor(e.log10(n.min)) - 1), n.max = Math.pow(10, Math.floor(e.log10(n.max)) + 1)) : (n.min = 1, n.max = 10))
                            }, buildTicks: function () {
                                var n = this, i = n.options.ticks, o = {min: i.min, max: i.max}, a = n.ticks = t.Ticks.generators.logarithmic(o, n);
                                n.isHorizontal() || a.reverse(), n.max = e.max(a), n.min = e.min(a), i.reverse ? (a.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max)
                            }, convertTicksToLabels: function () {
                                this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                            }, getLabelForIndex: function (t, e) {
                                return+this.getRightValue(this.chart.data.datasets[e].data[t])
                            }, getPixelForTick: function (t) {
                                return this.getPixelForValue(this.tickValues[t])
                            }, getPixelForValue: function (t) {
                                var n, i, o, a = this, r = a.start, s = +a.getRightValue(t), l = a.options.ticks;
                                return a.isHorizontal() ? (o = e.log10(a.end) - e.log10(r), 0 === s ? i = a.left : (n = a.width, i = a.left + n / o * (e.log10(s) - e.log10(r)))) : (n = a.height, 0 !== r || l.reverse ? 0 === a.end && l.reverse ? (o = e.log10(a.start) - e.log10(a.minNotZero), i = s === a.end ? a.top : s === a.minNotZero ? a.top + .02 * n : a.top + .02 * n + .98 * n / o * (e.log10(s) - e.log10(a.minNotZero))) : 0 === s ? i = l.reverse ? a.top : a.bottom : (o = e.log10(a.end) - e.log10(r), n = a.height, i = a.bottom - n / o * (e.log10(s) - e.log10(r))) : (o = e.log10(a.end) - e.log10(a.minNotZero), i = s === r ? a.bottom : s === a.minNotZero ? a.bottom - .02 * n : a.bottom - .02 * n - .98 * n / o * (e.log10(s) - e.log10(a.minNotZero)))), i
                            }, getValueForPixel: function (t) {
                                var n, i, o = this, a = e.log10(o.end) - e.log10(o.start);
                                return o.isHorizontal() ? (i = o.width, n = o.start * Math.pow(10, (t - o.left) * a / i)) : (i = o.height, n = Math.pow(10, (o.bottom - t) * a / i) / o.start), n
                            }});
                        t.scaleService.registerScaleType("logarithmic", i, n)
                    }
                }, {}], 48: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t) {
                            var e = t.options;
                            return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                        }
                        function n(t) {
                            var e = t.options.pointLabels, n = p.getValueOrDefault(e.fontSize, f.defaultFontSize), i = p.getValueOrDefault(e.fontStyle, f.defaultFontStyle), o = p.getValueOrDefault(e.fontFamily, f.defaultFontFamily);
                            return{size: n, style: i, family: o, font: p.fontString(n, i, o)}
                        }
                        function i(t, e, n) {
                            return p.isArray(n) ? {w: p.longestText(t, t.font, n), h: n.length * e + 1.5 * (n.length - 1) * e} : {w: t.measureText(n).width, h: e}
                        }
                        function o(t, e, n, i, o) {
                            return t === i || t === o ? {start: e - n / 2, end: e + n / 2} : t < i || t > o ? {start: e - n - 5, end: e} : {start: e, end: e + n + 5}
                        }
                        function a(t) {
                            var a, r, s, l = n(t), c = Math.min(t.height / 2, t.width / 2), u = {r: t.width, l: 0, t: t.height, b: 0}, d = {};
                            t.ctx.font = l.font, t._pointLabelSizes = [];
                            var h = e(t);
                            for (a = 0; a < h; a++) {
                                s = t.getPointPosition(a, c), r = i(t.ctx, l.size, t.pointLabels[a] || ""), t._pointLabelSizes[a] = r;
                                var f = t.getIndexAngle(a), m = p.toDegrees(f) % 360, g = o(m, s.x, r.w, 0, 180), v = o(m, s.y, r.h, 90, 270);
                                g.start < u.l && (u.l = g.start, d.l = f), g.end > u.r && (u.r = g.end, d.r = f), v.start < u.t && (u.t = v.start, d.t = f), v.end > u.b && (u.b = v.end, d.b = f)
                            }
                            t.setReductions(c, u, d)
                        }
                        function r(t) {
                            var e = Math.min(t.height / 2, t.width / 2);
                            t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0)
                        }
                        function s(t) {
                            return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                        }
                        function l(t, e, n, i) {
                            if (p.isArray(e))
                                for (var o = n.y, a = 1.5 * i, r = 0; r < e.length; ++r)
                                    t.fillText(e[r], n.x, o), o += a;
                            else
                                t.fillText(e, n.x, n.y)
                        }
                        function c(t, e, n) {
                            90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
                        }
                        function u(t) {
                            var i = t.ctx, o = p.getValueOrDefault, a = t.options, r = a.angleLines, u = a.pointLabels;
                            i.lineWidth = r.lineWidth, i.strokeStyle = r.color;
                            var d = t.getDistanceFromCenterForValue(a.reverse ? t.min : t.max), h = n(t);
                            i.textBaseline = "top";
                            for (var m = e(t) - 1; m >= 0; m--) {
                                if (r.display) {
                                    var g = t.getPointPosition(m, d);
                                    i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(g.x, g.y), i.stroke(), i.closePath()
                                }
                                if (u.display) {
                                    var v = t.getPointPosition(m, d + 5), y = o(u.fontColor, f.defaultFontColor);
                                    i.font = h.font, i.fillStyle = y;
                                    var b = t.getIndexAngle(m), x = p.toDegrees(b);
                                    i.textAlign = s(x), c(x, t._pointLabelSizes[m], v), l(i, t.pointLabels[m] || "", v, h.size)
                                }
                            }
                        }
                        function d(t, n, i, o) {
                            var a = t.ctx;
                            if (a.strokeStyle = p.getValueAtIndexOrDefault(n.color, o - 1), a.lineWidth = p.getValueAtIndexOrDefault(n.lineWidth, o - 1), t.options.gridLines.circular)
                                a.beginPath(), a.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), a.closePath(), a.stroke();
                            else {
                                var r = e(t);
                                if (0 === r)
                                    return;
                                a.beginPath();
                                var s = t.getPointPosition(0, i);
                                a.moveTo(s.x, s.y);
                                for (var l = 1; l < r; l++)
                                    s = t.getPointPosition(l, i), a.lineTo(s.x, s.y);
                                a.closePath(), a.stroke()
                            }
                        }
                        function h(t) {
                            return p.isNumber(t) ? t : 0
                        }
                        var p = t.helpers, f = t.defaults.global, m = {display: !0, animate: !0, position: "chartArea", angleLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1}, gridLines: {circular: !1}, ticks: {showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: t.Ticks.formatters.linear}, pointLabels: {display: !0, fontSize: 10, callback: function (t) {
                                    return t
                                }}}, g = t.LinearScaleBase.extend({setDimensions: function () {
                                var t = this, e = t.options, n = e.ticks;
                                t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                                var i = p.min([t.height, t.width]), o = p.getValueOrDefault(n.fontSize, f.defaultFontSize);
                                t.drawingArea = e.display ? i / 2 - (o / 2 + n.backdropPaddingY) : i / 2
                            }, determineDataLimits: function () {
                                var t = this, e = t.chart, n = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
                                p.each(e.data.datasets, function (o, a) {
                                    if (e.isDatasetVisible(a)) {
                                        var r = e.getDatasetMeta(a);
                                        p.each(o.data, function (e, o) {
                                            var a = +t.getRightValue(e);
                                            isNaN(a) || r.data[o].hidden || (n = Math.min(a, n), i = Math.max(a, i))
                                        })
                                    }
                                }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
                            }, getTickLimit: function () {
                                var t = this.options.ticks, e = p.getValueOrDefault(t.fontSize, f.defaultFontSize);
                                return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)))
                            }, convertTicksToLabels: function () {
                                var e = this;
                                t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                            }, getLabelForIndex: function (t, e) {
                                return+this.getRightValue(this.chart.data.datasets[e].data[t])
                            }, fit: function () {
                                this.options.pointLabels.display ? a(this) : r(this)
                            }, setReductions: function (t, e, n) {
                                var i = this, o = e.l / Math.sin(n.l), a = Math.max(e.r - i.width, 0) / Math.sin(n.r), r = -e.t / Math.cos(n.t), s = -Math.max(e.b - i.height, 0) / Math.cos(n.b);
                                o = h(o), a = h(a), r = h(r), s = h(s), i.drawingArea = Math.min(Math.round(t - (o + a) / 2), Math.round(t - (r + s) / 2)), i.setCenterPoint(o, a, r, s)
                            }, setCenterPoint: function (t, e, n, i) {
                                var o = this, a = o.width - e - o.drawingArea, r = t + o.drawingArea, s = n + o.drawingArea, l = o.height - i - o.drawingArea;
                                o.xCenter = Math.round((r + a) / 2 + o.left), o.yCenter = Math.round((s + l) / 2 + o.top)
                            }, getIndexAngle: function (t) {
                                return t * (2 * Math.PI / e(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                            }, getDistanceFromCenterForValue: function (t) {
                                var e = this;
                                if (null === t)
                                    return 0;
                                var n = e.drawingArea / (e.max - e.min);
                                return e.options.reverse ? (e.max - t) * n : (t - e.min) * n
                            }, getPointPosition: function (t, e) {
                                var n = this, i = n.getIndexAngle(t) - Math.PI / 2;
                                return{x: Math.round(Math.cos(i) * e) + n.xCenter, y: Math.round(Math.sin(i) * e) + n.yCenter}
                            }, getPointPositionForValue: function (t, e) {
                                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                            }, getBasePosition: function () {
                                var t = this, e = t.min, n = t.max;
                                return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
                            }, draw: function () {
                                var t = this, e = t.options, n = e.gridLines, i = e.ticks, o = p.getValueOrDefault;
                                if (e.display) {
                                    var a = t.ctx, r = o(i.fontSize, f.defaultFontSize), s = o(i.fontStyle, f.defaultFontStyle), l = o(i.fontFamily, f.defaultFontFamily), c = p.fontString(r, s, l);
                                    p.each(t.ticks, function (s, l) {
                                        if (l > 0 || e.reverse) {
                                            var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), h = t.yCenter - u;
                                            if (n.display && 0 !== l && d(t, n, u, l), i.display) {
                                                var p = o(i.fontColor, f.defaultFontColor);
                                                if (a.font = c, i.showLabelBackdrop) {
                                                    var m = a.measureText(s).width;
                                                    a.fillStyle = i.backdropColor, a.fillRect(t.xCenter - m / 2 - i.backdropPaddingX, h - r / 2 - i.backdropPaddingY, m + 2 * i.backdropPaddingX, r + 2 * i.backdropPaddingY)
                                                }
                                                a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = p, a.fillText(s, t.xCenter, h)
                                            }
                                        }
                                    }), (e.angleLines.display || e.pointLabels.display) && u(t)
                                }
                            }});
                        t.scaleService.registerScaleType("radialLinear", g, m)
                    }
                }, {}], 49: [function (t, e, n) {
                    "use strict";
                    var i = t(1);
                    i = "function" == typeof i ? i : window.moment, e.exports = function (t) {
                        function e(t, e) {
                            var n = t.options.time;
                            if ("string" == typeof n.parser)
                                return i(e, n.parser);
                            if ("function" == typeof n.parser)
                                return n.parser(e);
                            if ("function" == typeof e.getMonth || "number" == typeof e)
                                return i(e);
                            if (e.isValid && e.isValid())
                                return e;
                            var o = n.format;
                            return"string" != typeof o && o.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser."), o(e)) : i(e, o)
                        }
                        function n(t, e, n, i) {
                            for (var o, a = Object.keys(s), r = a.length, l = a.indexOf(t); l < r; l++) {
                                o = a[l];
                                var c = s[o], u = c.steps && c.steps[c.steps.length - 1] || c.maxStep;
                                if (void 0 === u || Math.ceil((n - e) / (u * c.size)) <= i)
                                    break
                            }
                            return o
                        }
                        function o(t, e, n, i) {
                            var o = s[n], a = o.size, r = Math.ceil((e - t) / a), l = 1, c = e - t;
                            if (o.steps)
                                for (var u = o.steps.length, d = 0; d < u && r > i; d++)
                                    l = o.steps[d], r = Math.ceil(c / (a * l));
                            else
                                for (; r > i && i > 0; )
                                    ++l, r = Math.ceil(c / (a * l));
                            return l
                        }
                        function a(t, e, n) {
                            var o = [];
                            if (t.maxTicks) {
                                var a = t.stepSize;
                                o.push(void 0 !== t.min ? t.min : n.min);
                                for (var r = i(n.min); r.add(a, t.unit).valueOf() < n.max; )
                                    o.push(r.valueOf());
                                var s = t.max || n.max;
                                o[o.length - 1] !== s && o.push(s)
                            }
                            return o
                        }
                        var r = t.helpers, s = {millisecond: {size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]}, second: {size: 1e3, steps: [1, 2, 5, 10, 30]}, minute: {size: 6e4, steps: [1, 2, 5, 10, 30]}, hour: {size: 36e5, steps: [1, 2, 3, 6, 12]}, day: {size: 864e5, steps: [1, 2, 5]}, week: {size: 6048e5, maxStep: 4}, month: {size: 2628e6, maxStep: 3}, quarter: {size: 7884e6, maxStep: 4}, year: {size: 3154e7, maxStep: !1}}, l = {position: "bottom", time: {parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm:ss a", hour: "MMM D, hA", day: "ll", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY"}}, ticks: {autoSkip: !1}};
                        t.Ticks.generators.time = function (t, e) {
                            var n, o, r = t.isoWeekday;
                            return"week" === t.unit && !1 !== r ? (n = i(e.min).startOf("isoWeek").isoWeekday(r).valueOf(), o = i(e.max).startOf("isoWeek").isoWeekday(r), e.max - o > 0 && o.add(1, "week"), o = o.valueOf()) : (n = i(e.min).startOf(t.unit).valueOf(), o = i(e.max).startOf(t.unit), e.max - o > 0 && o.add(1, t.unit), o = o.valueOf()), a(t, e, {min: n, max: o})
                        };
                        var c = t.Scale.extend({initialize: function () {
                                if (!i)
                                    throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                                t.Scale.prototype.initialize.call(this)
                            }, determineDataLimits: function () {
                                var t, n = this, i = n.options.time, o = Number.MAX_SAFE_INTEGER, a = Number.MIN_SAFE_INTEGER, s = n.chart.data, l = {labels: [], datasets: []};
                                r.each(s.labels, function (r, s) {
                                    var c = e(n, r);
                                    c.isValid() && (i.round && c.startOf(i.round), t = c.valueOf(), o = Math.min(t, o), a = Math.max(t, a), l.labels[s] = t)
                                }), r.each(s.datasets, function (s, c) {
                                    var u = [];
                                    "object" == typeof s.data[0] && null !== s.data[0] && n.chart.isDatasetVisible(c) ? r.each(s.data, function (r, s) {
                                        var l = e(n, n.getRightValue(r));
                                        l.isValid() && (i.round && l.startOf(i.round), t = l.valueOf(), o = Math.min(t, o), a = Math.max(t, a), u[s] = t)
                                    }) : u = l.labels.slice(), l.datasets[c] = u
                                }), n.dataMin = o, n.dataMax = a, n._parsedData = l
                            }, buildTicks: function () {
                                var i, a, s = this, l = s.options.time, c = s.dataMin, u = s.dataMax;
                                if (l.min) {
                                    var d = e(s, l.min);
                                    l.round && d.round(l.round), i = d.valueOf()
                                }
                                l.max && (a = e(s, l.max).valueOf());
                                var h = s.getLabelCapacity(i || c), p = l.unit || n(l.minUnit, i || c, a || u, h);
                                s.displayFormat = l.displayFormats[p];
                                var f = l.stepSize || o(i || c, a || u, p, h);
                                s.ticks = t.Ticks.generators.time({maxTicks: h, min: i, max: a, stepSize: f, unit: p, isoWeekday: l.isoWeekday}, {min: c, max: u}), s.max = r.max(s.ticks), s.min = r.min(s.ticks)
                            }, getLabelForIndex: function (t, n) {
                                var i = this, o = i.chart.data.labels && t < i.chart.data.labels.length ? i.chart.data.labels[t] : "", a = i.chart.data.datasets[n].data[t];
                                return null !== a && "object" == typeof a && (o = i.getRightValue(a)), i.options.time.tooltipFormat && (o = e(i, o).format(i.options.time.tooltipFormat)), o
                            }, tickFormatFunction: function (t, e, n) {
                                var i = t.format(this.displayFormat), o = this.options.ticks, a = r.getValueOrDefault(o.callback, o.userCallback);
                                return a ? a(i, e, n) : i
                            }, convertTicksToLabels: function () {
                                var t = this;
                                t.ticksAsTimestamps = t.ticks, t.ticks = t.ticks.map(function (t) {
                                    return i(t)
                                }).map(t.tickFormatFunction, t)
                            }, getPixelForOffset: function (t) {
                                var e = this, n = e.max - e.min, i = n ? (t - e.min) / n : 0;
                                if (e.isHorizontal()) {
                                    var o = e.width * i;
                                    return e.left + Math.round(o)
                                }
                                var a = e.height * i;
                                return e.top + Math.round(a)
                            }, getPixelForValue: function (t, n, i) {
                                var o = this, a = null;
                                if (void 0 !== n && void 0 !== i && (a = o._parsedData.datasets[i][n]), null === a && (t && t.isValid || (t = e(o, o.getRightValue(t))), t && t.isValid && t.isValid() && (a = t.valueOf())), null !== a)
                                    return o.getPixelForOffset(a)
                            }, getPixelForTick: function (t) {
                                return this.getPixelForOffset(this.ticksAsTimestamps[t])
                            }, getValueForPixel: function (t) {
                                var e = this, n = e.isHorizontal() ? e.width : e.height, o = (t - (e.isHorizontal() ? e.left : e.top)) / n;
                                return i(e.min + o * (e.max - e.min))
                            }, getLabelWidth: function (e) {
                                var n = this, i = n.options.ticks, o = n.ctx.measureText(e).width, a = Math.cos(r.toRadians(i.maxRotation)), s = Math.sin(r.toRadians(i.maxRotation));
                                return o * a + r.getValueOrDefault(i.fontSize, t.defaults.global.defaultFontSize) * s
                            }, getLabelCapacity: function (t) {
                                var e = this;
                                e.displayFormat = e.options.time.displayFormats.millisecond;
                                var n = e.tickFormatFunction(i(t), 0, []), o = e.getLabelWidth(n);
                                return(e.isHorizontal() ? e.width : e.height) / o
                            }});
                        t.scaleService.registerScaleType("time", c, l)
                    }
                }, {1: 1}]}, {}, [7])(7)
    }), function (t) {
        t(["jquery"], function (t) {
            return function () {
                function e(e, n) {
                    return e || (e = l()), (u = t("#" + e.containerId)).length ? u : (n && (u = o(e)), u)
                }
                function n(e) {
                    for (var n = u.children(), o = n.length - 1; o >= 0; o--)
                        i(t(n[o]), e)
                }
                function i(e, n, i) {
                    var o = !(!i || !i.force) && i.force;
                    return!(!e || !o && 0 !== t(":focus", e).length) && (e[n.hideMethod]({duration: n.hideDuration, easing: n.hideEasing, complete: function () {
                            c(e)
                        }}), !0)
                }
                function o(e) {
                    return(u = t("<div/>").attr("id", e.containerId).addClass(e.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(t(e.target)), u
                }
                function a() {
                    return{tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, extendedTimeOut: 1e3, iconClasses: {error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning"}, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", target: "body", closeHtml: '<button type="button">&times;</button>', newestOnTop: !0, preventDuplicates: !1, progressBar: !1}
                }
                function r(t) {
                    d && d(t)
                }
                function s(n) {
                    function i() {
                        n.iconClass && k.addClass(b.toastClass).addClass(x)
                    }
                    function o() {
                        b.newestOnTop ? u.prepend(k) : u.append(k)
                    }
                    function a() {
                        n.title && (C.append(n.title).addClass(b.titleClass), k.append(C))
                    }
                    function s() {
                        n.message && (S.append(n.message).addClass(b.messageClass), k.append(S))
                    }
                    function d() {
                        b.closeButton && (M.addClass("toast-close-button").attr("role", "button"), k.prepend(M))
                    }
                    function f() {
                        b.progressBar && (T.addClass("toast-progress"), k.prepend(T))
                    }
                    function m(e) {
                        if (!t(":focus", k).length || e)
                            return clearTimeout(I.intervalId), k[b.hideMethod]({duration: b.hideDuration, easing: b.hideEasing, complete: function () {
                                    c(k), b.onHidden && "hidden" !== A.state && b.onHidden(), A.state = "hidden", A.endTime = new Date, r(A)
                                }})
                    }
                    function g() {
                        (b.timeOut > 0 || b.extendedTimeOut > 0) && (w = setTimeout(m, b.extendedTimeOut), I.maxHideTime = parseFloat(b.extendedTimeOut), I.hideEta = (new Date).getTime() + I.maxHideTime)
                    }
                    function v() {
                        clearTimeout(w), I.hideEta = 0, k.stop(!0, !0)[b.showMethod]({duration: b.showDuration, easing: b.showEasing})
                    }
                    function y() {
                        var t = (I.hideEta - (new Date).getTime()) / I.maxHideTime * 100;
                        T.width(t + "%")
                    }
                    var b = l(), x = n.iconClass || b.iconClass;
                    if (void 0 !== n.optionsOverride && (b = t.extend(b, n.optionsOverride), x = n.optionsOverride.iconClass || x), !function (t, e) {
                        if (t.preventDuplicates) {
                            if (e.message === h)
                                return!0;
                            h = e.message
                        }
                        return!1
                    }(b, n)) {
                        p++, u = e(b, !0);
                        var w = null, k = t("<div/>"), C = t("<div/>"), S = t("<div/>"), T = t("<div/>"), M = t(b.closeHtml), I = {intervalId: null, hideEta: null, maxHideTime: null}, A = {toastId: p, state: "visible", startTime: new Date, options: b, map: n};
                        return i(), a(), s(), d(), f(), o(), k.hide(), k[b.showMethod]({duration: b.showDuration, easing: b.showEasing, complete: b.onShown}), b.timeOut > 0 && (w = setTimeout(m, b.timeOut), I.maxHideTime = parseFloat(b.timeOut), I.hideEta = (new Date).getTime() + I.maxHideTime, b.progressBar && (I.intervalId = setInterval(y, 10))), k.hover(v, g), !b.onclick && b.tapToDismiss && k.click(m), b.closeButton && M && M.click(function (t) {
                            t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && !0 !== t.cancelBubble && (t.cancelBubble = !0), m(!0)
                        }), b.onclick && k.click(function () {
                            b.onclick(), m()
                        }), r(A), b.debug && console && console.log(A), k
                    }
                }
                function l() {
                    return t.extend({}, a(), m.options)
                }
                function c(t) {
                    u || (u = e()), t.is(":visible") || (t.remove(), t = null, 0 === u.children().length && (u.remove(), h = void 0))
                }
                var u, d, h, p = 0, f = {error: "error", info: "info", success: "success", warning: "warning"}, m = {clear: function (t, o) {
                        var a = l();
                        u || e(a), i(t, a, o) || n(a)
                    }, remove: function (n) {
                        var i = l();
                        u || e(i), n && 0 === t(":focus", n).length ? c(n) : u.children().length && u.remove()
                    }, error: function (t, e, n) {
                        return s({type: f.error, iconClass: l().iconClasses.error, message: t, optionsOverride: n, title: e})
                    }, getContainer: e, info: function (t, e, n) {
                        return s({type: f.info, iconClass: l().iconClasses.info, message: t, optionsOverride: n, title: e})
                    }, options: {}, subscribe: function (t) {
                        d = t
                    }, success: function (t, e, n) {
                        return s({type: f.success, iconClass: l().iconClasses.success, message: t, optionsOverride: n, title: e})
                    }, version: "2.1.1", warning: function (t, e, n) {
                        return s({type: f.warning, iconClass: l().iconClasses.warning, message: t, optionsOverride: n, title: e})
                    }};
                return m
            }()
        })
    }("function" == typeof define && define.amd ? define : function (t, e) {
        "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery)
    }), function (t) {
        var e = !1, n = {data: [], placeholder: "", secondaryPlaceholder: ""};
        t(document).ready(function () {
            t(document).on("click", ".chip .close", function (e) {
                var n = t(this);
                n.closest(".chips").data("initialized") || n.closest(".chip").remove()
            })
        }), t.fn.material_chip = function (i) {
            var o = this;
            return this.$el = t(this), this.$document = t(document), this.SELS = {CHIPS: ".chips", CHIP: ".chip", INPUT: "input", DELETE: ".fa", SELECTED_CHIP: ".selected"}, "data" === i ? this.$el.data("chips") : "options" === i ? this.$el.data("options") : (this.$el.data("options", t.extend({}, n, i)), this.init = function () {
                var e = 0;
                o.$el.each(function () {
                    var n = t(this);
                    if (!n.data("initialized")) {
                        var i = n.data("options");
                        (!i.data || !i.data instanceof Array) && (i.data = []), n.data("chips", i.data), n.data("index", e), n.data("initialized", !0), n.hasClass(o.SELS.CHIPS) || n.addClass("chips"), o.chips(n), e++
                    }
                })
            }, this.handleEvents = function () {
                var e = o.SELS;
                o.$document.on("click", e.CHIPS, function (n) {
                    t(n.target).find(e.INPUT).focus()
                }), o.$document.on("click", e.CHIP, function (n) {
                    t(e.CHIP).removeClass("selected"), t(this).toggleClass("selected")
                }), o.$document.on("keydown", function (n) {
                    if (!t(n.target).is("input, textarea")) {
                        var i, a = o.$document.find(e.CHIP + e.SELECTED_CHIP), r = a.closest(e.CHIPS), s = a.siblings(e.CHIP).length;
                        if (a.length) {
                            var l = 8 === n.which || 46 === n.which, c = 37 === n.which, u = 39 === n.which;
                            if (l) {
                                n.preventDefault();
                                var d = r.data("index");
                                i = a.index(), o.deleteChip(d, i, r);
                                var h = null;
                                i + 1 < s ? h = i : i !== s && i + 1 !== s || (h = s - 1), h < 0 && (h = null), null !== h && o.selectChip(d, h, r), s || r.find("input").focus()
                            } else if (c) {
                                if ((i = a.index() - 1) < 0)
                                    return;
                                t(e.CHIP).removeClass("selected"), o.selectChip(r.data("index"), i, r)
                            } else if (u) {
                                if (i = a.index() + 1, t(e.CHIP).removeClass("selected"), i > s)
                                    return void r.find("input").focus();
                                o.selectChip(r.data("index"), i, r)
                            }
                        }
                    }
                }), o.$document.on("focusin", e.CHIPS + " " + e.INPUT, function (n) {
                    t(n.target).closest(e.CHIPS).addClass("focus"), t(e.CHIP).removeClass("selected")
                }), o.$document.on("focusout", e.CHIPS + " " + e.INPUT, function (n) {
                    t(n.target).closest(e.CHIPS).removeClass("focus")
                }), o.$document.on("keydown", e.CHIPS + " " + e.INPUT, function (n) {
                    var i = t(n.target), a = i.closest(e.CHIPS), r = a.data("index"), s = a.children(e.CHIP).length;
                    if (13 === n.which)
                        return n.preventDefault(), o.addChip(r, {tag: i.val()}, a), void i.val("");
                    var l = 8 === n.keyCode || 37 === n.keyCode, c = "" === i.val();
                    return l && c && s ? (o.selectChip(r, s - 1, a), void i.blur()) : void 0
                }), o.$document.on("click", e.CHIPS + " " + e.DELETE, function (n) {
                    var i = t(n.target), a = i.closest(e.CHIPS), r = i.closest(e.CHIP);
                    n.stopPropagation(), o.deleteChip(a.data("index"), r.index(), a), a.find("input").focus()
                })
            }, this.chips = function (t) {
                var e = "";
                t.data("options");
                t.data("chips").forEach(function (t) {
                    e += o.renderChip(t)
                }), e += '<input class="input" placeholder="">', t.html(e), o.setPlaceholder(t)
            }, this.renderChip = function (t) {
                if (t.tag) {
                    var e = '<div class="chip">' + t.tag;
                    return t.image && (e += ' <img src="' + t.image + '"> '), e += '<i class="close fa fa-times"></i>', e += "</div>"
                }
            }, this.setPlaceholder = function (t) {
                var e = t.data("options");
                t.data("chips").length && e.placeholder ? t.find("input").prop("placeholder", e.placeholder) : !t.data("chips").length && e.secondaryPlaceholder && t.find("input").prop("placeholder", e.secondaryPlaceholder)
            }, this.isValid = function (t, e) {
                for (var n = t.data("chips"), i = !1, o = 0; o < n.length; o++)
                    if (n[o].tag === e.tag)
                        return void(i = !0);
                return"" !== e.tag && !i
            }, this.addChip = function (e, n, i) {
                if (o.isValid(i, n)) {
                    i.data("options");
                    var a = o.renderChip(n);
                    i.data("chips").push(n), t(a).insertBefore(i.find("input")), i.trigger("chip.add", n), o.setPlaceholder(i)
                }
            }, this.deleteChip = function (t, e, n) {
                var i = n.data("chips")[e];
                n.find(".chip").eq(e).remove(), n.data("chips").splice(e, 1), n.trigger("chip.delete", i), o.setPlaceholder(n)
            }, this.selectChip = function (t, e, n) {
                var i = n.find(".chip").eq(e);
                i && !1 === i.hasClass("selected") && (i.addClass("selected"), n.trigger("chip.select", n.data("chips")[e]))
            }, this.getChipsElement = function (t, e) {
                return e.eq(t)
            }, this.init(), void(e || (this.handleEvents(), e = !0)))
        }
    }(jQuery);
} catch (err)
{
    //Error log  
}