/**
 * Перейти на следующий слайд
 * Вызывается в других функциях:
 * t235__init
 */
function t235__next() {
    var cur = parseInt(document.querySelector(".t235").getAttribute("data-slide-count"), 10);
    if (window.document.documentElement.clientWidth > 980) {
      t235_addVideo();
    }
    var notSlide = document.querySelectorAll(".r");
    var notSlideArray = [];
    
    for (var i = 0; i < notSlide.length; i++) {
      if (notSlide[i].getAttribute("data-t263-block-notslide") !== "yes") {
        notSlideArray.push(notSlide[i]);
      }
    }

    if (cur + 1 >= notSlideArray.length) return;
    cur++;
    Array.prototype.forEach.call(notSlideArray,function (el, i) {
        if (cur - 1 == i) {
          if (parseFloat(getComputedStyle(el, null).height.replace("px", "")) + 100 > window.document.documentElement.clientHeight) {el.style.transform = "TranslateY(0px)"};
          el.style.transition = "all 450ms ease";
          el.style.opacity = "0";
          el.style.transform = "TranslateY(-100px)";
          el.addEventListener("transitionend", function() {
            el.style.display = "none";
          });
        }

        if (cur == i) {
          var speed = "slow";
          if (cur == 0) {
            speed = 0;
          } 

          el.style.display = "block";
          el.style.position = "absolute";
          el.style.opacity = "0";
          el.style.textAlign = "center";
          el.style.marginLeft = "auto";
          el.style.marginRight = "auto";
          el.style.left = "0";
          el.style.right = "0";
          el.style.top = "36%";
          el.style.bottom = "0";
          if (parseFloat(getComputedStyle(el, null).height.replace("px", "")) + 100 > window.document.documentElement.clientHeight) {el.style.transform = "TranslateY(0px)"};
          el.style.transition = "all 500ms ease-out";
          el.style.transform = "TranslateY(50px)";
          el.addEventListener("transitionend", function() {
            el.style.display = "block";
            el.style.opacity = "0";
            el.style.transition = "all 500ms ease";
            el.style.transform = "TranslateY(0px)";
            el.style.opacity = "1";
            document.querySelector(".r").classList.add("t235__active");
            el.classList.add("t235__active");

            if (window.lazy === "y" || document.querySelector("#allrecords").getAttribute("data-tilda-lazy") === "yes") {
              t_onFuncLoad("t_lazyload_update", function () {
                t_lazyload_update();
              });
            }
          });

          if (parseFloat(getComputedStyle(el, null).height.replace("px", "")) > window.document.documentElement.clientHeight) {
            function fadeIn(elem, ms) {
              elem.style.opacity = 0;
            
              if (ms) {
                var opacity = 0;
                var timer = setInterval(function() {
                  opacity += 50 / ms;
                  if (opacity >= 1) {
                    clearInterval(timer);
                    opacity = 1;
                  }
                  elem.style.opacity = opacity;
                }, 50);
              } else {
                elem.style.opacity = 1;
              }
            }

            var disappeared = fadeIn(document.querySelector("#t235__scrldonwicon"), 600);
            if (disappeared) {
              function fadeOut(el, ms) {
                if (ms) {
                  el.style.transition = "opacity " + ms + "ms";
                  el.addEventListener(
                    'transitionend',
                    function() {
                      el.style.display = 'none';
                    },
                    false
                  );
                }
                el.style.opacity = '0';
              }
              setTimeout(fadeOut(document.querySelector("#t235__scrldonwicon"), 600) ,1000);
            }
          }
          var bg = el.getAttribute("data-bg-color");
          if (bg !== undefined && bg !== "none") {
            if (document.querySelector("#allrecordstable")) {
              document.querySelector("#allrecordstable").style.backgroundColor = bg;
            }
          } else {
            if (document.querySelector("#allrecordstable")) {
              document.querySelector("#allrecordstable").style.backgroundColor = "";
            }
          }
        }
      });
    document.querySelector(".t235").setAttribute("data-slide-count", cur);
    t235__update();
  }

/**
 * Перейти на предыдущий слайд
 * Вызывается в других функциях:
 * t235__init
 */
  function t235__prev() {
    var cur = parseInt(document.querySelector(".t235").getAttribute("data-slide-count"), 10);
    if (cur - 1 == -1) return;
    cur--;
    var notSlide = document.querySelectorAll(".r");
    var notSlideArray = [];
    for (var i = 0; i < notSlide.length; i++) {
      if (notSlide[i].getAttribute("data-t263-block-notslide") !== "yes") {
        notSlideArray.push(notSlide[i]);
      }
    }
    Array.prototype.forEach.call(notSlideArray, function (el, i) {
        if (cur + 1 == i) {
          el.style.display = "none";
        }

        if (cur == i) {
          el.style.display = "block";
          el.style.opacity = "0";
          el.style.transition = "transform 1s easeOutSine,opacity 50ms";
          el.style.transform = "TranslateY(0px)";
          if (el.style.opacity == "0") {
            el.style.opacity = "1";
          }

          document.querySelector(".r").classList.remove("t235__active");
          el.classList.add("t235__active");
          var bg = el.getAttribute("data-bg-color");
          
          if (bg !== undefined && bg !== "none") {
            document.querySelector("#allrecordstable").style.backgroundColor = bg;
          } else {
            document.querySelector("#allrecordstable").style.backgroundColor = "";
          }
        }
      });
    document.querySelector(".t235").setAttribute("data-slide-count", cur);
    t235__update();
  }

  function t235__galnext() {
    var elactive = document.querySelector(".t235__active");
    var tplid = elactive.getAttribute("data-record-type");
  }

/**
 * Обновить слайд
 */
  function t235__update() {
    var cur = parseInt(document.querySelector(".t235").getAttribute("data-slide-count"), 10);
    var c = cur + 1;
    var TAll = document.querySelectorAll(".r");
    var TArray = [];
    for (var i = 0; i < TAll.length; i++) {
      if (TAll[i].getAttribute("data-t263-block-notslide") !== "yes") {
        TArray.push(TAll[i]);
      }
    }
    var t = TArray.length;
    document.querySelector(".t235__count").innerHTML = c + "/" + t;
    if (window.lazy === "y" || document.querySelector("#allrecords").getAttribute("data-tilda-lazy") === "yes") {
      t_onFuncLoad("t_lazyload_update", function () {
        t_lazyload_update();
      });
    }
  }

/**
 * Инициализация блока
 */
  function t235__init() {
    var records = document.querySelector("#allrecords");
    var wrapper = document.createElement( "table");
    wrapper.id = "allrecordstable";
    wrapper.style.width = "100%";
    wrapper.style.height = "100vh";
    wrapper.style.border = "0px";
    wrapper.style.margin = "0px";
    wrapper.style.padding = "0px";
    wrapper.style.borderSpacing = "0px";
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";
    wrapper.className = 'wrapper';
    records.parentNode.insertBefore(wrapper, records);
    wrapper.appendChild(records);

    records.style.width = window.document.documentElement.clientWidth + "px";
    var notSlide = document.querySelectorAll(".r");
    var notSlideArray = [];
    for (var i = 0; i < notSlide.length; i++) {
      if (notSlide[i].getAttribute("data-t263-block-notslide") !== "yes") {
        notSlideArray.push(notSlide[i]);
      }
    }
    Array.prototype.forEach.call(notSlideArray, function (el, i) {
        el.style.padding = "0px";
        if (parseFloat(getComputedStyle(el, null).height.replace("px", "")) > window.document.documentElement.clientHeight) {
          el.style.paddingTop = "150px";
          el.style.paddingBottom = "150px";
        }
        el.style.display = "none";
        el.style.opacity = "";
        el.style.backgroundColor = "";
      });
    var cur = -1;
    var slider = document.querySelector(".t235");
    slider.style.transition = "all 800ms";
    slider.addEventListener("transitionend", function() {
      slider.style.right = "20px";
    });
    var slideCount = document.querySelector(".t235").getAttribute("data-slide-count");
    if (typeof slideCount !== "undefined") {
      cur = parseInt(slideCount, 10);
    } else {
      document.querySelector(".t235").setAttribute("data-slide-count", cur);
    }
    if (!isNaN(cur)) {
      document.querySelector(".t235")
        .querySelector(".t235__next")
        .addEventListener("click", function () {
          t235__next();
        });
      document.querySelector(".t235")
        .querySelector(".t235__prev")
        .addEventListener("click", function () {
          t235__prev();
        });
      t235__next();
      document.querySelector("#tildacopy").style.display = "none";
      document.querySelector(".t235").style.right = "-=100px";
      setTimeout(function () {
        document.querySelector(".t235").classList.add("t235_anim");
        document.querySelector(".t235").style.right = "+=100px";
      }, 800);
      document.addEventListener("keydown", function (e) {
        switch (e.which) {
          case 38:
            t235__prev();
            break;
          case 40:
            t235__next();
            break;
          case 33:
            t235__prev();
            break;
          case 34:
            t235__next();
            break;
          case 32:
            t235__next();
            break;
          case 190:
            t235__galnext();
            break;
          default:
            return;
        }
        if (e.which != 190) {
          e.preventDefault();
        }
      });
    }
    if (document.querySelector("#allrecordstable")) {
      document.querySelector("#allrecordstable").style.transition = "background-color 500ms linear";
    }
    if (document.querySelector(".t-cover__carrier")) {
      document.querySelector(".t-cover__carrier").style.backgroundAttachment = "scroll";
    }
  }

/**
 * Вставить видео
 */
  function t235_addVideo() {
    setTimeout(function () {
      if (document.querySelector(".t-video-lazyload") > 0) {
        var video = document.querySelector(".t235__active").nextElementSibling.querySelector(".t-video-lazyload");
        Array.prototype.forEach.call(video, function ($this) {
            var videoHeight = $this.getAttribute("data-videolazy-height") ? $this.getAttribute("data-videolazy-height") : "100%";
            if ($this.closest(".t223").length > 0 || $this.closest(".t230").length > 0 || $this.closest(".t368").length > 0) {
              var videoHeight = "100%";
            }
            var videoId = $this.getAttribute("data-videolazy-id").trim();
            var blockId = $this.getAttribute("data-blocklazy-id") || "";
            var videoTwoId = "_" + $this.getAttribute("data-videolazy-two-id") + "_" || "";
            if ($this.getAttribute("data-videolazy-load") == "false") {
              $this.getAttribute("data-videolazy-load", "true");
              if ($this.getAttribute("data-videolazy-type") == "youtube") {
                $this.insertAdjacentHTML("beforebegin",
                  '<iframe id="youtubeiframe' +
                    videoTwoId +
                    blockId +
                    '" width="100%" height="' +
                    videoHeight +
                    '" src="//www.youtube.com/embed/' +
                    videoId +
                    '?rel=0&fmt=18&html5=1&showinfo=0" frameborder="0" allowfullscreen></iframe>'
                );
              }
              if ($this.getAttribute("data-videolazy-type") == "vimeo") {
                $this.insertAdjacentHTML("beforebegin",
                  '<iframe src="//player.vimeo.com/video/' +
                    videoId +
                    '?title=0&byline=0&portrait=0&badge=0&color=ffffff" width="100%" height="' +
                    videoHeight +
                    '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
                );
              }
            }
          });
      }
    }, 0);
  }
  