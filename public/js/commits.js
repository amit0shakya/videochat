// https://cdn.webrtc-experiment.com/commits-dev.js
//console.info('You can use ?simple=true to remove redundant HTML.');

! function() {
    function d() {
        function a(a) {
            for (var b = document.getElementsByClassName(a), c = 0; c < b.length; c++) b[c].style.display = "none"
        }
        a("fork-left"), a("fork-right"), a("own-widgets"), a("github-stargazers");
        document.getElementById("feedback");
        b && (navigator.mediaDevices = {
            getUserMedia: function(a) {
                return {
                    then: function(b) {
                        return {
                            catch: function(c) {
                                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia, navigate.getUserMedia(a, b, c)
                            }
                        }
                    }
                }
            }
        }, navigator.mediaDevices.getUserMedia || (navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia, window.captureUserMedia = function(a, b, c) {
            navigate.getUserMedia(a, b, c)
        }))
    }

    function g(a) {
        return String(a).replace(/(\d)(?=(\d{3})+$)/g, "$1,")
    }

    function h(a, b) {
        var c = document.createElement("script");
        c.src = a + "?callback=callback00", c.async = !0, b && (c.onload = b), document.body.appendChild(c)
    }

    function m(a, b) {
        window.gType = a, i = document.createElement("span"), i.className = "github-btn", l = document.createElement("a"), l.target = "_blank", l.className = "gh-btn", i.appendChild(l);
        var c = document.createElement("span");
        c.className = "gh-ico", l.appendChild(c), k = document.createElement("span"), k.className = "gh-text", l.appendChild(k), j = document.createElement("a"), j.target = "_blank", j.className = "gh-count", j.innerHTML = "+1K", i.appendChild(j), f && f.appendChild(i), l.href = "https://github.com/" + e + "/", "watch" == gType ? (i.className += " github-watchers", k.innerHTML = "Star ", j.href = "https://github.com/" + e + "/stargazers") : "fork" == gType ? (i.className += " github-forks", k.innerHTML = " Fork ", j.href = "https://github.com/" + e + "/network") : "follow" == gType && (i.className += " github-me", k.innerHTML = "Follow @muaz-khan", l.href = "https://github.com/muaz-khan", j.href = "https://github.com/muaz-khan/followers"), "follow" == gType ? h("https://api.github.com/users/muaz-khan", b) : h("https://api.github.com/repos/" + e, b)
    }

    function o(a) {
        if (!n) return void(a && a());
        var b = document.createElement("script");
        b.src = "https://api.github.com/repos/" + e + "/issues?sha=master&callback=issuesCallback", b.async = !0, a && (b.onload = a), document.body.appendChild(b)
    }

    function q(a) {
        var b = document.createElement("script");
        b.src = "https://api.github.com/repos/" + e + "/commits?sha=master&callback=commitsCallback", b.async = !0, !a && n && (a = o), a && (b.onload = a), document.body.appendChild(b)
    }

    function t(a, b) {
        var c = 6e4,
            d = 60 * c,
            e = 24 * d,
            f = 30 * e,
            g = 365 * e,
            h = a - b;
        return h < c ? Math.round(h / 1e3) + " seconds ago" : h < d ? Math.round(h / c) + " minutes ago" : h < e ? Math.round(h / d) + " hours ago" : h < f ? Math.round(h / e) + " days ago" : h < g ? Math.round(h / f) + " months ago" : Math.round(h / g) + " years ago"
    }

    function u(a) {
        return a = a.replace(/```javascript([^```]+)```|```html([^```]+)```/g, "<pre>$1</pre>"), a = a.replace(/```JavaScript([^```]+)```|```html([^```]+)```/g, "<pre>$1</pre>"), a = a.replace(/```js([^```]+)```|```html([^```]+)```/g, "<pre>$1</pre>"), a = a.replace(/```([^```]+)```/g, "<pre>$1</pre>"), a = a.replace(/``([^``]+)``/g, "<pre>$1</pre>"), a = a.replace(/`([^`]+)`/g, "<code>$1</code>"), a = a.replace(/\*\*([^\*\*]+)\*\*/g, "<strong>$1</strong>"), a = a.replace(/#([0-9]+)/g, '<a href="https://github.com/' + e + '/issues/$1" target="_blank">#$1</a>'), a = a.replace(/```([^```]+)```/g, "<pre>$1</pre>"), a = a.replace(/`([^`]+)`/g, "<code>$1</code>")
    }

    function v() {
        var a = document.createElement("script");
        a.src = "https://cdn.webrtc-experiment.com/common.js", a.async = !0, document.body.appendChild(a)
    }
    var a = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB10|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent || ""),
        b = !!/BB10|BlackBerry/i.test(navigator.userAgent || ""),
        c = {};
    if (function() {
            function e(a) {
                return decodeURIComponent(a.replace(/\+/g, " "))
            }
            for (var f, d = /([^&=]+)=?([^&]*)/g, g = window.location.search; f = d.exec(g.substring(1));) c[e(f[1])] = e(f[2]);
            if (c.simple || a) {
                a = b = !0;
                var h = document.getElementById("feedback");
                h && h.parentNode && (h.parentNode.style.display = "none");
                var i = document.querySelector("article");
                i && (i.style.margin = "10px", i.style["max-width"] = "100%", i.style.width = "93%", i.style.padding = "3px");
                for (var j = document.querySelectorAll("blockquote"), k = 0; k < j.length; k++) j[k].style.display = "none";
                var l = document.querySelector("h1");
                l && (l.style.fontSize = "17px");
                var m = document.querySelector("header p");
                m && (m.style.display = "none");
                for (var n = document.querySelectorAll("h2"), k = 0; k < n.length; k++) n[k].style.fontSize = "14px";
                for (var o = document.querySelectorAll("button"), k = 0; k < o.length; k++) o[k].style.fontSize = "12px";
                for (var p = document.querySelectorAll("input"), k = 0; k < p.length; k++) p[k].style.fontSize = "12px";
                for (var q = document.querySelectorAll("select"), k = 0; k < q.length; k++) q[k].style.fontSize = "12px";
                for (var r = document.querySelectorAll(".experiment"), k = 0; k < r.length; k++) r[k].style.margin = "0"
            }
        }(), !a || (d(), window.addEventListener("load", d, !1), !c.simple)) {
        var e = window.useThisGithubPath || "muaz-khan/WebRTC-Experiment",
            f = document.querySelector(".github-stargazers");
        window.callback00 = function(a) {
            "watch" == gType ? (j.innerHTML = g(a.data.watchers), console.log(a.data.watchers)) : "fork" == gType ? (j.innerHTML = g(a.data.forks), console.log(a.data.forks)) : "follow" == gType && (j.innerHTML = g(a.data.followers), console.log(a.data.followers)), j.style.display = "block"
        };
        var i, j, k, l;
        m("watch", function() {
            var a;
            p ? a = q : n && (a = o), m("fork", function() {
                a ? a(function() {
                    m("follow", function() {
                        a != o && n && o()
                    })
                }) : m("follow", function() {
                    a != o && n && o()
                })
            })
        });
        var n = document.getElementById("github-issues");
        n && (n.innerHTML = '<div style="padding:1em .8em;">Getting latest issues...</div>'), window.issuesCallback = function(a) {
            n.innerHTML = "", a = a.data;
            var b = a.length;
            b > 2 && (b = 2);
            for (var c = 0; c < b; c++) {
                var d = a[c],
                    e = document.createElement("div");
                e.className = "commit";
                var f = d.title;
                f.length > 50 ? (f = f.substr(0, 49) + "...", f = '<h2 title="' + d.title + '"><a href="' + d.html_url + '">' + f + "</a></h2><br />") : f = '<h2><a href="' + d.html_url + '">' + d.title + "</a></h2><br />";
                var g = d.body;
                g = g.replace(/</g, "&lt;").replace(/>/g, "&gt;"), g = g.replace(s, r), g = g.replace(/\n/g, " "), g = f + g, g = u(g), g = g.replace(/  /g, ""), g.length > 250 && (g = g.substr(0, 249) + "...");
                var h = document.createElement("div");
                h.className = "commit-desc", h.innerHTML = g, e.appendChild(h);
                var i = document.createElement("div");
                i.className = "commit-meta";
                var j = document.createElement("a");
                j.target = "_blank", j.href = d.html_url, j.className = "commit-url", j.innerHTML = d.comments + " Comments (Submitted " + t(new Date, new Date(d.created_at)) + ")", i.appendChild(j);
                var k = document.createElement("div");
                k.className = "authorship";
                var l = new Image(24, 24);
                l.className = "gravatar", d.user && d.user.avatar_url && (l.src = d.user.avatar_url), k.appendChild(l);
                var m = document.createElement("span");
                m.className = "author-name", m.innerHTML = '<a href="' + d.user.html_url + '" rel="author" target="_blank">' + d.user.login + "</a>", k.appendChild(m), i.appendChild(k), e.appendChild(i), n && n.appendChild(e)
            }
        };
        var p = document.getElementById("github-commits");
        p && (p.innerHTML = '<div style="padding:1em .8em;">Getting latest commits...</div>'), window.commitsCallback = function(a) {
            p.innerHTML = "", a = a.data;
            var b = a.length;
            b > 15 && (b = 15);
            for (var c = 0; c < b; c++) {
                var d = a[c],
                    e = document.createElement("div");
                e.className = "commit";
                var f = d.commit.message;
                f = f.replace(/</g, "&lt;").replace(/>/g, "&gt;"), f = f.replace(s, r).replace(/\n/g, "<br />"), f = f.replace(/\n/g, "<br />"), f = u(f);
                var g = document.createElement("div");
                g.className = "commit-desc", g.innerHTML = f, e.appendChild(g);
                var h = document.createElement("div");
                h.className = "commit-meta";
                var i = document.createElement("a");
                i.target = "_blank", i.href = d.html_url, i.className = "commit-url", i.innerHTML = t(new Date, new Date(d.commit.committer.date)), h.appendChild(i);
                var j = document.createElement("div");
                j.className = "authorship", d.author || (d.author = "muaz-khan");
                var k = new Image(24, 24);
                k.className = "gravatar", k.src = d.author.avatar_url, d.author && d.author.avatar_url || (k.src = "https://goo.gl/KaFpuL"), j.appendChild(k);
                var l = document.createElement("span");
                l.className = "author-name", l.innerHTML = '<a href="' + (d.author.html_url || "https://github.com/muaz-khan") + '" rel="author" target="_blank">' + (d.author.login || "Muaz Khan") + "</a>", j.appendChild(l), h.appendChild(j), e.appendChild(h), p && p.appendChild(e)
            }
        };
        var r = function(a, b, c, d, e, f, g, h, i) {
                var j = 18;
                "(" == a.charAt(0) && ")" == a.charAt(a.length - 1) && (a = a.slice(1, -1)), b || (a = "http://" + a);
                var k = c.replace(/www\./gi, ""),
                    l = k + (e || "") + (f || "") + (g || "") + (h || "") + (i || "");
                return l.length > j && k.length < j && (l = l.slice(0, k.length + (j - k.length)) + "..."), '<a href="' + a + '" target="_blank">' + l.replace("webrtc-experiment.com/", "/").replace("rtcmulticonnection.org/", "/").replace("recordrtc.org/", "/") + "</a>"
            },
            s = /\(?\b(?:(http|https|ftp):\/\/)?((?:www.)?[a-zA-Z0-9\-\.]+[\.][a-zA-Z]{2,4})(?::(\d*))?(?=[\s\/,\.\)])([\/]{1}[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]\(\)]*))?([\#][^\s\n]*)?\)?/gi;
        v()
    }
}();