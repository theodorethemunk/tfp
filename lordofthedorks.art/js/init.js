var NeohFilterArray = [];
! function($) {
    "use strict";
    var a = {
        init: function() {
            a.animatedText(), a.imgToSVG(), a.BgImg(), a.activeNavigation(), a.headerTrigger(), a.menuFixer(), a.timeLine(), a.movingBlog(), a.navFixer(), a.anchor(), a.movingTextForNav(), a.filterItems(), a.applyFilter(), a.magnific(), a.progressTotop(), a.productModal(), a.contactForm(), a.moreCategories(), a.totop(), a.vegasSlider(), a.heroJarallaxSlider(), a.subscribe(), a.qnt(), a.countdown()
        },
        countdown: function() {
            $(".neoh_fn_countdown").each(function() {
                var a = $(this),
                    b = a.data("type");
                if ("due_date" === b) var g = new Date(a.data("date")).getTime();
                else if ("ever" === b) var c = 86400 * parseInt(a.data("days")),
                    d = 3600 * parseInt(a.data("hours")),
                    e = 60 * parseInt(a.data("minutes")),
                    f = parseInt(a.data("seconds")),
                    h = c + d + e + f;
                var i = a.parent();
                a.hasClass("boxed") && (a.after('<div class="neoh_fn_boxed_countdown"><ul><li class="days"><div class="item"><h3></h3><span>Days</span></div></li><li class="hours"><div class="item"><h3></h3><span>Hours</span></div></li><li class="minutes"><div class="item"><h3></h3><span>Minutes</span></div></li><li class="seconds"><div class="item"><h3></h3><span>Seconds</span></div></li></ul></div>'), a.remove()), "due_date" === b ? setInterval(function() {
                    var j = new Date().getTime(),
                        c = g - j,
                        b = Math.floor(c / 864e5),
                        d = Math.floor(c % 864e5 / 36e5),
                        e = Math.floor(c % 36e5 / 6e4),
                        f = Math.floor(c % 6e4 / 1e3);
                    if (a.hasClass("boxed")) b = ("0" + b).slice(-2), d = ("0" + d).slice(-2), e = ("0" + e).slice(-2), f = ("0" + f).slice(-2), i.find(".days h3").text(b), i.find(".hours h3").text(d), i.find(".minutes h3").text(e), i.find(".seconds h3").text(f);
                    else {
                        var h = "";
                        b > 0 && (h += b + "d: "), h += d + "h: " + e + "m: " + f + "s", a.text(h)
                    }
                }, 1e3) : "ever" === b && setInterval(function() {
                    if (c = Math.floor(h / 86400), d = Math.floor(h % 86400 / 3600), e = Math.floor(h % 3600 / 60), f = Math.floor(h % 60), a.hasClass("boxed")) c = ("0" + c).slice(-2), d = ("0" + d).slice(-2), e = ("0" + e).slice(-2), f = ("0" + f).slice(-2), i.find(".days h3").text(c), i.find(".hours h3").text(d), i.find(".minutes h3").text(e), i.find(".seconds h3").text(f);
                    else {
                        var b = "";
                        c > 0 && (b += c + "d: "), b += d + "h: " + e + "m: " + f + "s", a.text(b)
                    }
                    h--
                }, 1e3)
            })
        },
        qnt: function() {
            $(".qnt .decrease").off().on("click", function() {
                var b = $(this).closest(".qnt").find(".summ"),
                    a = parseInt(b.text());
                return a >= 2 && a--, b.text(a), !1
            }), $(".qnt .increase").off().on("click", function() {
                var a = $(this).closest(".qnt").find(".summ"),
                    b = parseInt(a.text());
                return b++, a.text(b), !1
            })
        },
        activeNavigation: function() {
            $(".nav_overlay,.neoh_fn_nav").addClass("active")
        },
        subscribe: function() {
            $(".subscribe_form a").on("click", function() {
                var c = $(this).closest(".subscribe_form"),
                    d = c.find("input").val(),
                    b = c.find(".returnmessage"),
                    f = b.data("success"),
                    e = b.data("message");
                return b.empty(), "" === d ? c.find(".empty_notice").slideDown(500).delay(2e3).slideUp(500) : a.validateEmail(d) ? $.post("modal/subscribe.php", {
                    ajax_email: d,
                    ajax_message: e
                }, function(a) {
                    b.append(a), b.append("<span class='contact_success'>" + f + "</span>"), b.slideDown(500).delay(4e3).slideUp(500), c.find("input").val("")
                }) : b.append("<span>" + b.data("invalid-email") + "</span>").slideDown(500).delay(4e3).slideUp(500), !1
            })
        },
        validateEmail: function(a) {
            return /\S+@\S+\.\S+/.test(a)
        },
        vegasSlider: function() {
            $(".neoh_fn_hero .vegas-slide").each(function() {
                var a = $(this),
                    b = [];
                a.find("input").each(function() {
                    b.push({
                        src: $(this).val()
                    })
                }), a.vegas({
                    timer: !1,
                    animation: ["kenburnsUp", "kenburnsLeft", "kenburnsRight"],
                    delay: 7e3,
                    slides: b
                })
            })
        },
        heroJarallaxSlider: function() {
            $(".neoh_fn_hero .swiper-container").each(function() {
                var b = $(this),
                    c = "Y",
                    a = "horizontal";
                "horizontal" === a && (c = "X"), new Swiper(b, {
                    loop: !0,
                    speed: 1500,
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !1
                    },
                    slidesPerView: 1,
                    direction: a,
                    loopAdditionalSlides: 10,
                    watchSlidesProgress: !0,
                    on: {
                        init: function() {
                            this.autoplay.stop()
                        },
                        imagesReady: function() {
                            this.autoplay.start()
                        },
                        progress: function() {
                            for (var a = 0; a < this.slides.length; a++) {
                                var b = this.slides[a].progress * (.5 * this.width);
                                $(this.slides[a]).find(".main_image").css({
                                    transform: "translate" + c + "(" + b + "px)"
                                })
                            }
                        },
                        touchStart: function() {
                            for (var b = this, a = 0; a < b.slides.length; a++) b.slides[a].style.transition = ""
                        },
                        setTransition: function(c) {
                            for (var b = this, a = 0; a < b.slides.length; a++) b.slides[a].style.transition = c + "ms", b.slides[a].querySelector(".main_image").style.transition = c + "ms"
                        }
                    }
                })
            })
        },
        totop: function() {
            $(".neoh_fn_totop").off().on("click", function(b) {
                b.preventDefault();
                var a = ($(window).scrollTop() - $(window).height()) / 2;
                return a < 500 && (a = 500), a > 1500 && (a = 1500), $("html, body").animate({
                    scrollTop: 0
                }, a), !1
            })
        },
        moreCategories: function() {
            $(".neoh_fn_categories").each(function() {
                var a = $(this);
                if (!a.hasClass("ready")) {
                    a.addClass("ready");
                    var e = a.data("more"),
                        b = a.data("count"),
                        c = a.find("li"),
                        f = a.find("ul"),
                        d = c.outerHeight(!0, !0),
                        g = a.find("ul").outerHeight(!0, !0);
                    d * b < g && (a.append('<a href="#" class="more">' + e + " (" + (c.length - b) + ")</a>"), f.animate({
                        height: d * b + "px"
                    }))
                }
            }), a.showMore()
        },
        showMore: function() {
            $(".neoh_fn_categories .more").off().on("click", function() {
                var a = $(this),
                    b = a.closest(".neoh_fn_categories"),
                    g = b.data("more"),
                    h = b.data("less"),
                    d = b.data("count"),
                    c = b.find("li"),
                    e = b.find("ul"),
                    f = c.outerHeight(!0, !0);
                return a.hasClass("clicked") ? (a.removeClass("clicked"), e.animate({
                    height: f * d + "px"
                }), a.text(g + " (" + (c.length - d) + ")")) : (a.addClass("clicked"), e.animate({
                    height: f * c.length + "px"
                }), a.text(h)), !1
            })
        },
        contactForm: function() {
            $(".contact_form #send_message").on("click", function() {
                var a = $(".contact_form #name").val(),
                    b = $(".contact_form #email").val(),
                    d = $(".contact_form #subject").val(),
                    c = $(".contact_form #message").val(),
                    e = $(".contact_form .returnmessage").data("success");
                return $(".contact_form .returnmessage").empty(), "" === a || "" === b || "" === c ? $(".contact_form div.empty_notice").slideDown(500).delay(2e3).slideUp(500) : $.post("modal/contact.php", {
                    ajax_name: a,
                    ajax_email: b,
                    ajax_subject: d,
                    ajax_message: c
                }, function(a) {
                    $(".contact_form .returnmessage").append(a), $(".contact_form .returnmessage span.contact_error").length ? $(".contact_form .returnmessage").slideDown(500).delay(2e3).slideUp(500) : ($(".contact_form .returnmessage").append("<span class='contact_success'>" + e + "</span>"), $(".contact_form .returnmessage").slideDown(500).delay(4e3).slideUp(500)), "" === a && $("#contact_form")[0].reset()
                }), !1
            })
        },
        productModal: function() {
            var a = $(".neoh_fn_modal.product_modal");
            $(".neoh_fn_drops .item a").off().on("click", function() {
                var b = $(this).closest(".item"),
                    e = b.data("modal-image"),
                    f = b.data("modal-title"),
                    g = b.data("modal-description"),
                    c = b.data("modal-opensea-url"),
                    d = b.data("modal-discord-url"),
                    h = b.data("included");
                return "on" === h ? a.find(".neoh_fn_product_modal").html(b.find(".hidden_info").html()) : (c || (c = ""), d || (d = ""), a.find(".buttons a").removeClass("disable"), "" === c ? a.find(".opensea").addClass("disable") : a.find(".opensea").attr("href", c), "" === d ? a.find(".discord").addClass("disable") : a.find(".discord").attr("href", d), a.find(".img_item").html('<img src="' + e + '" />'), a.find(".neoh_fn_title .fn_title").text(f), a.find(".desc p").text(g)), a.addClass("opened"), !1
            }), a.find(".modal_closer a").off().on("click", function() {
                return a.removeClass("opened"), !1
            })
        },
        progressTotop: function() {
            var b = window.pageYOffset,
                c = parseInt(b / (document.body.clientHeight - window.innerHeight) * 300),
                a = $(".neoh_fn_totop");
            b > 0 ? a.addClass("active") : a.removeClass("active"), a.find(".stroke-solid").css("stroke-dashoffset", 300 - c)
        },
        magnific: function() {
            $(".popup-youtube, .popup-vimeo").each(function() {
                $(this).magnificPopup({
                    disableOn: 700,
                    type: "iframe",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: !1,
                    fixedContentPos: !0,
                    callbacks: {
                        open: function() {
                            $.magnificPopup.instance.close = function() {
                                $.magnificPopup.proto.close.call(this)
                            }
                        }
                    }
                })
            })
        },
        isotopeCollection: function() {
            $(".grid").isotope({
                itemSelector: "li",
                layoutMode: "fitRows"
            })
        },
        applyFilter: function() {
            a.isotopeCollection(), $(".neoh_fn_filters .checkbox").off().on("click", function() {
                var b = $(this),
                    f = b.closest(".neoh_fn_collection"),
                    c = f.find(".neoh_fn_result_box"),
                    d = b.data("id"),
                    h = b.data("category"),
                    i = b.find(".text").text(),
                    e = c.find(".filter_count span");
                if (b.hasClass("selected")) {
                    b.removeClass("selected"), f.find('.result_item[data-id="' + d + '"]').remove(), 0 === c.find(".result_item").length && c.find(".clear_all").remove(), b.find('input[type="checkbox"]').prop("checked", ""), e.text(parseInt(e.text()) - 1);
                    var g = NeohFilterArray.indexOf(d); - 1 !== g && NeohFilterArray.splice(g, 1)
                } else b.addClass("selected"), 0 === c.find(".result_item").length && c.append('<a href="#" class="clear_all">Clear All</a>'), c.find(".clear_all").before('<div class="result_item" data-id="' + d + '"><a href="#" title="Remove Filter">' + h + ": <span>" + i + '</span><img src="svg/cancel.svg" alt="" class="fn__svg"></a></div>'), b.find('input[type="checkbox"]').prop("checked", "checked"), e.text(parseInt(e.text()) + 1), NeohFilterArray.push(d), a.imgToSVG(), a.removeFilter();
                return a.recallGridAfterFiltering(), !1
            }), a.removeFilter()
        },
        recallGridAfterFiltering: function(c) {
            var a = $(".grid").isotope({
                itemSelector: "li",
                layoutMode: "fitRows"
            });
            if ("clear" === c) return a.isotope({
                filter: "*"
            }), NeohFilterArray = [], !1;
            var b = "";
            0 === NeohFilterArray.length ? b = "*" : $.each(NeohFilterArray, function(c, a) {
                b += ".id" + a
            }), a.isotope({
                filter: b
            })
        },
        removeFilter: function() {
            $(".neoh_fn_result_box .result_item a").off().on("click", function() {
                var c = $(this),
                    d = c.closest(".neoh_fn_collection"),
                    e = c.closest(".result_item"),
                    b = d.find(".neoh_fn_result_box"),
                    f = e.data("id"),
                    g = b.find(".filter_count span");
                e.remove(), d.find('.neoh_fn_filters .checkbox[data-id="' + f + '"]').removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), g.text(parseInt(g.text()) - 1), 0 === b.find(".result_item").length && b.find(".clear_all").remove();
                var h = NeohFilterArray.indexOf(f);
                return -1 !== h && NeohFilterArray.splice(h, 1), a.recallGridAfterFiltering(), !1
            }), $(".neoh_fn_result_box .clear_all").off().on("click", function() {
                var b = $(this),
                    c = b.closest(".neoh_fn_collection"),
                    e = c.find(".neoh_fn_filters"),
                    d = c.find(".neoh_fn_result_box"),
                    f = d.find(".filter_count span");
                return f.text(0), d.find(".result_item").remove(), b.remove(), e.find(".checkbox").removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), a.recallGridAfterFiltering("clear"), !1
            })
        },
        filterItems: function() {
            $(".filter_item__header a").off().on("click", function() {
                return $(this).closest(".filter_item").toggleClass("closed"), !1
            })
        },
        movingTextForNav: function() {
            var a = $(".nav_overlay");
            if (a.length) {
                $(".neoh_fn_moving_text").length || $("body").append('<div class="neoh_fn_moving_text">Close</div>');
                var b = $(".neoh_fn_moving_text");
                a.on("mouseenter", function(a) {
                    b.addClass("active"), b.css({
                        left: a.clientX + 15 + "px",
                        top: a.clientY + 15 + "px"
                    })
                }).on("mouseleave", function() {
                    b.removeClass("active")
                }).on("mousemove", function(a) {
                    b.css({
                        left: a.clientX + 15 + "px",
                        top: a.clientY + 15 + "px"
                    })
                })
            }
        },
        anchor: function() {
            $(".neoh_fn_down").on("click", function() {
                var a = $(this).attr("href");
                if ((this.pathname === window.location.pathname || -1 !== a.indexOf("#")) && $(a).length) return $([document.documentElement, document.body]).animate({
                    scrollTop: $(a).offset().top
                }, 600), !1
            })
        },
        navFixer: function() {
            var a = $(".neoh_fn_nav .nav_footer").outerHeight();
            $(".neoh_fn_nav .nav_content").css({
                height: $(window).height() - a + "px"
            })
        },
        movingBlog: function() {
            if ($(".neoh_fn_moving_blog").length) {
                $(".neoh_fn_moving_box").length || $("body").append('<div class="neoh_fn_moving_box">');
                var b = $(".neoh_fn_moving_box"),
                    a = $(".neoh_fn_moving_blog .item");
                a.on("mouseenter", function(d) {
                    var c = $(this);
                    if (!c.hasClass("active")) {
                        a.removeClass("active"), c.addClass("active"), b.addClass("active");
                        var e = c.find(".moving_img").attr("src");
                        b.css({
                            backgroundImage: "url(" + e + ")"
                        }), b.css({
                            left: d.clientX + 15 + "px",
                            top: d.clientY + 15 + "px"
                        })
                    }
                }).on("mouseleave", function() {
                    a.removeClass("active"), b.removeClass("active")
                }).on("mousemove", function(a) {
                    b.css({
                        left: a.clientX + 15 + "px",
                        top: a.clientY + 15 + "px"
                    })
                })
            }
        },
        timeLine: function() {
            var d = $(".neoh_fn_timeline .timeline_item"),
                e = $(".neoh_fn_timeline .progress_line"),
                b = $(".neoh_fn_timeline .progress_line li"),
                c = $(".neoh_fn_timeline .progress_line .active"),
                f = $(".neoh_fn_timeline .progress_line .active_line"),
                g = $(".neoh_fn_timeline .progress_line a");
            a.timelineClasses(d, b, "initial"), $.each(b, function(a, b) {
                $(b).find("a").css({
                    left: 110 + 230 * a + "px"
                })
            }), f.css({
                width: 110 + 230 * c.index() + c.find("a").width() / 2 + "px"
            }), e.css({
                width: 220 + 230 * (b.length - 1) + b.last().find("a").width() / 2 + "px"
            }), g.off().on("click", function() {
                var c = $(this),
                    e = c.parent();
                if (!e.hasClass("active")) {
                    var h = c.closest(".neoh_fn_timeline"),
                        g = e.data("index");
                    a.timelineClasses(d, b, g), b.removeClass("active"), e.addClass("active"), f.css({
                        width: 110 + (g - 1) * 230 + c.width() / 2 + "px"
                    }), d.removeClass("active"), h.find('.timeline_item[data-index="' + g + '"]').addClass("active")
                }
                return !1
            });
            var j = 0,
                k = !0,
                l = !0,
                h = $(".neoh_fn_timeline .nav_prev"),
                i = $(".neoh_fn_timeline .nav_next");
            i.off().on("click", function() {
                var m = $(this);
                if (window.matchMedia("(max-width: 768px)").matches) {
                    var g = m.closest(".neoh_fn_timeline"),
                        f = g.find(".progress_line_wrapper"),
                        c = (parseInt(f.find(".active").data("index")) + 1) % f.find("li").length;
                    return 0 === c && (c = f.find("li").length), a.timelineClasses(d, b, c), console.log(c), b.removeClass("active"), d.removeClass("active"), g.find('[data-index="' + c + '"]').addClass("active"), !1
                }
                return (j += -460) < e.parent().width() - e.width() ? (j = e.parent().width() - e.width(), k = !1) : k = !0, j < 0 && (l = !0), l ? l && h.removeClass("inactive") : h.addClass("inactive"), k ? k && i.removeClass("inactive") : i.addClass("inactive"), e.css({
                    transform: "translateX(" + j + "px)"
                }), !1
            }), h.off().on("click", function() {
                var m = $(this);
                if (window.matchMedia("(max-width: 768px)").matches) {
                    var g = m.closest(".neoh_fn_timeline"),
                        f = g.find(".progress_line_wrapper"),
                        c = (parseInt(f.find(".active").data("index")) - 1) % f.find("li").length;
                    return 0 === c && (c = f.find("li").length), a.timelineClasses(d, b, c), console.log(c), b.removeClass("active"), d.removeClass("active"), g.find('[data-index="' + c + '"]').addClass("active"), !1
                }
                return k = !0, i.removeClass("inactive"), (j += 460) > 0 ? (j = 0, l = !1) : l && (l = !0), l ? h.removeClass("inactive") : h.addClass("inactive"), e.css({
                    transform: "translateX(" + j + "px)"
                }), !1
            })
        },
        timelineClasses: function(b, c, a) {
            var d, e = !1;
            $.each(b, function(c, b) {
                if ($(b).removeClass("previous next"), "initial" === a) {
                    if ($(b).hasClass("active")) {
                        e = !0;
                        return
                    }
                } else if ($(b).data("index") === a) {
                    e = !0;
                    return
                }
                e ? $(b).addClass("next") : $(b).addClass("previous")
            }), e = !1, d = "initial" === a ? $(".neoh_fn_timeline .progress_line .active").data("index") : a, $.each(c, function(c, b) {
                if ($(b).removeClass("previous next").find(".circle").css({
                        filter: "none"
                    }), "initial" === a) {
                    if ($(b).hasClass("active")) {
                        e = !0;
                        return
                    }
                } else if ($(b).data("index") === a) {
                    e = !0;
                    return
                }
                e ? $(b).addClass("next") : $(b).addClass("previous").find(".circle").css({
                    filter: "brightness(" + 100 * (c + 1) / d + "%)"
                })
            })
        },
        menuFixer: function() {
            var a = $(".neoh_fn_header");
            $(window).scrollTop() > 150 ? a.addClass("fixer") : a.removeClass("fixer")
        },
        animatedText: function() {
            $(".fn_animated_text").each(function() {
                var a = $(this),
                    d = a.text().split(""),
                    c = a.data("wait");
                c || (c = 0);
                var b = a.data("speed");
                b || (b = 4), b /= 100, a.html("<em>321...</em>").addClass("ready"), a.waypoint({
                    handler: function() {
                        a.hasClass("stop") || (a.addClass("stop"), setTimeout(function() {
                            a.text(""), $.each(d, function(d, e) {
                                var c = document.createElement("span");
                                c.textContent = e, c.style.animationDelay = d * b + "s", a.append(c)
                            })
                        }, c))
                    },
                    offset: "90%"
                })
            })
        },
        headerTrigger: function() {
            var a = $(".neoh_fn_header .trigger"),
                b = $(".nav_overlay"),
                c = $(".neoh_fn_nav"),
                d = c.find(".trigger"),
                e = $(".neoh_fn_nav .nav_menu a"),
                g = $(".neoh_fn_nav .nav_buttons"),
                h = $(".neoh_fn_nav .nav_footer"),
                f = $(".neoh_fn_nav .nav_menu > ul > li");
            $.each(f, function(a, b) {
                $(b).css({
                    transform: "translateX(" + (a + 1) * 30 + "px)",
                    opacity: 0
                })
            }), a.on("click", function() {
                return a.hasClass("is-active") || (a.addClass("is-active"), c.find(".trigger").addClass("is-active"), b.addClass("go"), c.addClass("go"), setTimeout(function() {
                    $.each(f, function(a, b) {
                        setTimeout(function() {
                            $(b).css({
                                transform: "translateX(0px)",
                                opacity: 1
                            })
                        }, 200 * a)
                    })
                }, 2e3), setTimeout(function() {
                    g.addClass("ready"), h.addClass("ready")
                }, 2200 + 200 * f.length)), !1
            }), d.on("click", function() {
                return d.hasClass("is-active") && ($.each(f, function(a, b) {
                    $(b).css({
                        transform: "translateX(" + (a + 1) * 30 + "px)",
                        opacity: 0
                    })
                }), d.removeClass("is-active"), a.removeClass("is-active"), b.removeClass("go"), c.removeClass("go"), g.removeClass("ready"), h.removeClass("ready")), !1
            }), b.on("click", function() {
                return a.hasClass("is-active") && ($.each(f, function(a, b) {
                    $(b).css({
                        transform: "translateX(" + (a + 1) * 30 + "px)",
                        opacity: 0
                    })
                }), a.removeClass("is-active"), d.removeClass("is-active"), b.removeClass("go"), c.removeClass("go"), g.removeClass("ready"), h.removeClass("ready")), !1
            }), e.off().on("click", function() {
                var i = $(this),
                    j = i.siblings(".sub-menu"),
                    e = i.parent();
                return j.length ? (e.hasClass("opened") ? (e.removeClass("opened"), j.slideUp()) : (e.addClass("opened"), j.slideDown(), e.siblings(".opened").removeClass("opened").find(".sub-menu").slideUp()), !1) : (i.closest(".menu-item").addClass("active"), d.hasClass("is-active") && ($.each(f, function(b, a) {
                    $(a).hasClass("active") || $(a).css({
                        transform: "translateX(" + (b + 1) * 30 + "px)",
                        opacity: 0
                    })
                }), g.removeClass("ready"), h.removeClass("ready"), setTimeout(function() {
                    d.removeClass("is-active"), a.removeClass("is-active"), b.removeClass("go"), c.removeClass("go")
                }, 500), setTimeout(function() {
                    window.open(i.attr("href"), "_self")
                }, 1500)), !1)
            })
        },
        imgToSVG: function() {
            $("img.fn__svg").each(function() {
                var a = $(this),
                    c = a.attr("class"),
                    b = a.attr("src");
                $.get(b, function(d) {
                    var b = $(d).find("svg");
                    void 0 !== c && (b = b.attr("class", c + " replaced-svg")), a.replaceWith(b)
                }, "xml")
            })
        },
        BgImg: function() {
            $("*[data-bg-img]").each(function() {
                var a = $(this),
                    b = a.attr("data-bg-img"),
                    c = a.data("bg-img");
                void 0 !== b && a.css({
                    backgroundImage: "url(" + c + ")"
                })
            })
        }
    };
    $(document).ready(function() {
        a.init(), setTimeout(function() {
            a.isotopeCollection()
        }, 150)
    }), $(window).on("resize", function() {
        a.navFixer(), a.progressTotop()
    }), $(window).on("load", function() {
        a.isotopeCollection(), setTimeout(function() {}, 10)
    }), $(window).on("scroll", function() {
        a.menuFixer(), a.progressTotop()
    })
}(jQuery)