google.maps.__gjsload__('search_impl', function(_) {
    var mtb = function(a) {
            _.E(this, a, 4)
        },
        otb = function(a) {
            ntb || (ntb = {
                V: "sssM",
                ca: ["ss"]
            });
            var b = ntb;
            return _.Ki.jb(a.Jb(), b)
        },
        ptb = function(a, b) {
            a.L[2] = b
        },
        X$ = function(a) {
            _.E(this, a, 3)
        },
        qtb = function() {
            var a = _.Pj,
                b = _.bj;
            this.j = _.cg;
            this.h = _.Mk(_.yr, a, _.ms + "/maps/api/js/LayersService.GetFeature", b)
        },
        ttb = function(a, b, c) {
            var d = _.SB(new qtb);
            c.rr = (0, _.Ma)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.jCa(c, _.tI(b));
            var e = [];
            e.push(_.F.addListener(c, "click", (0, _.Ma)(rtb, null, a)));
            _.pb(["mouseover", "mouseout", "mousemove"],
                function(f) {
                    e.push(_.F.addListener(c, f, (0, _.Ma)(stb, null, a, f)))
                });
            e.push(_.F.addListener(a, "clickable_changed", function() {
                a.h.clickable = 0 != a.get("clickable")
            }));
            a.j = e
        },
        rtb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Zk(e, 1) ? new _.Ie(_.Hd(e.getLocation(), 0), _.Hd(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.Rd(e, 2); g < h; ++g) {
                    var k = new _.zI(_.Md(e, 2, g));
                    f.fields[k.getKey()] = k.Wa()
                }
            }
            _.F.trigger(a, "click", b, c, d, f)
        },
        stb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.F.trigger(a, b, c, d, e, h, g)
        },
        utb = function() {},
        ntb;
    _.C(mtb, _.D);
    mtb.prototype.wb = function() {
        return _.Id(this, 1)
    };
    _.C(X$, _.D);
    X$.prototype.getStatus = function() {
        return _.Gd(this, 0, -1)
    };
    X$.prototype.getLocation = function() {
        return new _.Vm(this.L[1])
    };
    qtb.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new mtb;
        d.L[0] = a.layerId.split("|")[0];
        d.L[1] = a.featureId;
        ptb(d, _.Sd(_.Vd(this.j)));
        for (var e in a.parameters) {
            var f = new _.zI(_.Qd(d, 3));
            f.L[0] = e;
            f.L[1] = a.parameters[e]
        }
        a = otb(d);
        this.h(a, c, c);
        return a
    };
    qtb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    utb.prototype.Eu = function(a) {
        if (_.ti[15]) {
            var b = a.ve,
                c = a.ve = a.getMap();
            b && a.h && (a.l ? (b = b.__gm.j, b.set(b.get().og(a.h))) : a.h && _.FCa(a.h, b) && (_.pb(a.j || [], _.F.removeListener), a.j = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds");
                b = new _.bm;
                d = d.split("|");
                b.layerId =
                    d[0];
                for (var t = 1; t < d.length; ++t) {
                    var v = d[t].split(":");
                    b.parameters[v[0]] = v[1]
                }
                e && (b.spotlightDescription = new _.eo(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.em(g));
                m && (b.travelMapRequest = new _.tr(m));
                h && (b.mapsApiLayer = new _.el(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.zn(p));
                q && (b.overlayLayer = new _.Bn(q));
                r && (b.caseExperimentIds = r.slice(0));
                b.darkLaunch = !!k;
                a.h = b;
                a.l = a.get("renderOnBaseMap");
                a.l ? (a = c.__gm.j, a.set(a.get().Ce(b))) : ttb(a, c, b);
                _.tg(c, "Lg");
                _.hg(c, 148282)
            }
        }
    };
    _.af("search_impl", new utb);
});