google.maps.__gjsload__('overlay', function(_) {
    var Qt = function(a) {
            this.h = a
        },
        wla = function() {},
        Rt = function(a) {
            a.Go = a.Go || new wla;
            return a.Go
        },
        xla = function(a) {
            this.Oa = new _.ai(function() {
                var b = a.Go;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Gn && a.onAdd) a.onAdd();
                        b.Gn = !0;
                        a.draw()
                    }
                } else {
                    if (b.Gn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Gn = !1
                }
            }, 0)
        },
        yla = function(a, b) {
            function c() {
                return _.bi(e.Oa)
            }
            var d = Rt(a),
                e = d.sm;
            e || (e = d.sm = new xla(a));
            _.pb(d.ab || [], _.F.removeListener);
            var f = d.Ya = d.Ya || new _.Ur,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.us = d.us || new Qt(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.ab = [_.F.addListener(a, "panes_changed", c), _.F.addListener(g, "zoom_changed", c), _.F.addListener(g, "offset_changed", c), _.F.addListener(b, "projection_changed", c), _.F.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof
            _.pf && (_.tg(b, "Ox"), _.hg(b, 148440))
        },
        Cla = function(a) {
            if (a) {
                var b = a.getMap();
                if (zla(a) !== b && b && b instanceof _.pf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Ala(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.Qa;
                        var e = new St(b, d);
                        d.ub(e);
                        c.overlayLayer = e;
                        Bla(a);
                        Cla(a)
                    })
                }
            }
        },
        Bla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.l.ng(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        zla = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Ala = function(a, b, c) {
            this.map = a;
            this.h = b;
            this.l = c;
            this.j = !1;
            _.tg(this.map, "Ox");
            _.hg(this.map, 148440);
            c.Lf(this)
        },
        Dla = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        St = function(a, b) {
            this.m = a;
            this.l = b;
            this.h = null;
            this.j = []
        };
    _.C(Qt, _.G);
    Qt.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.le(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var Tt = {};
    _.C(xla, _.G);
    Tt.Lf = function(a) {
        if (a) {
            var b = a.getMap();
            (Rt(a).Xr || null) !== b && (b && yla(a, b), Rt(a).Xr = b)
        }
    };
    Tt.ng = function(a) {
        var b = Rt(a),
            c = b.Ya;
        c && c.unbindAll();
        (c = b.us) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.ab && _.pb(b.ab, _.F.removeListener);
        b.ab = null;
        b.sm && (b.sm.Oa.Od(), b.sm = null);
        delete Rt(a).Xr
    };
    var Ut = {};
    Ala.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    St.prototype.dispose = function() {};
    St.prototype.Kc = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.Gp(this.m, this.l, function() {});
        k.Kc(a, b, c, d, e, f, g, h);
        a = _.z(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Dla(b, k), b.draw()
    };
    St.prototype.Lf = function(a) {
        this.j.push(a);
        this.h && Dla(a, this.h);
        this.l.refresh()
    };
    St.prototype.ng = function(a) {
        _.wb(this.j, a)
    };
    Ut.Lf = Cla;
    Ut.ng = Bla;
    _.af("overlay", {
        Sp: function(a) {
            if (a) {
                (0, Tt.ng)(a);
                (0, Ut.ng)(a);
                var b = a.getMap();
                b && (b instanceof _.pf ? (0, Ut.Lf)(a) : (0, Tt.Lf)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.jq(a, {
                onClick: function(b) {
                    return _.Pp(b.event)
                },
                Bd: function(b) {
                    return _.Mp(b)
                },
                Xh: function(b) {
                    return _.Np(b)
                },
                ee: function(b) {
                    return _.Np(b)
                },
                Id: function(b) {
                    return _.Op(b)
                }
            }).Si(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.ff);
            a.addEventListener("contextmenu", _.ff);
            a.addEventListener("dblclick", _.ff);
            a.addEventListener("mousedown",
                _.ff);
            a.addEventListener("mousemove", _.ff);
            a.addEventListener("MSPointerDown", _.ff);
            a.addEventListener("pointerdown", _.ff);
            a.addEventListener("touchstart", _.ff);
            a.addEventListener("wheel", _.ff)
        }
    });
});