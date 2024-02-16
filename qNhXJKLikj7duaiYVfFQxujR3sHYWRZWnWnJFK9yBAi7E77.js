const init = () => {
  const navbar = document.querySelector(".navbar-main");
  const list_items = [...document.querySelectorAll(".item__navbar")];
  const video_items = [...document.querySelectorAll(".video__item")];

  let currentScroll = 0;
  let touchesLastPos = 0;
  let velocity = 100;
  let active = false;

  // Navbar list
  const clamp = (value, max, min) => {
    return Math.max(min, Math.min(value, max));
  };

  const stringToNumber = (string) => {
    const index = string.indexOf("px");
    return +string.slice(0, index);
  };

  const getStyle = (item, prop) => {
    return stringToNumber(window.getComputedStyle(item)[prop]);
  };

  const getBounding = (item, prop) => {
    const bound = item.getBoundingClientRect()[prop];
    return bound;
  };

  const getHeight = (item) => {
    return (
      getBounding(item, "height") +
      getStyle(item, "marginTop") +
      getStyle(item, "marginBottom")
    );
  };

  let height = document.querySelector(".list-items__navbar").offsetHeight;

  const navTranslate = () => {
    const list_items_length = list_items.length - 1;

    window.addEventListener("touchmove", moveNavigation);

    window.addEventListener("wheel", moveNavigation);
  };

  const moveNavigation = (e) => {
    const delta = isEvent(e);

    // If is in the mobile
    if (e && !e.deltaY) {
      touchesLastPos = e.touches[0].clientY;
      velocity = 30;
    }

    const normalized = Math.sign(delta);

    reverseElms(normalized);

    currentScroll += normalized * velocity;
    currentScroll = clamp(currentScroll, height, 0);

    TweenMax.staggerTo(
      list_items,
      2,
      {
        y: -currentScroll,
        ease: Elastic.easeOut.config(1, 0.7),
        delay: 0,
        onUpdate() {
          list_items.forEach((item, index) => {
            const middleElement =
              getBounding(item, "top") + getBounding(item, "height") / 2;
            const percent = Math.max(
              0,
              1 - Math.abs((middleElement / innerHeight) * 2 - 1)
            );

            TweenMax.set(item, {
              alpha: percent,
              scale: percent
            });
          });
        }
      },
      0.02
    );

    TweenMax.to(video_items, 0.5, { opacity: 0, display: "none" });
  };

  const isEvent = (e) =>
    e ? (e.deltaY ? e.deltaY : touchesLastPos - e.touches[0].clientY) : 0;

  const reverseElms = (normalized) => {
    if (normalized < 0) {
      if (!active) {
        list_items.reverse();
        TweenMax.pauseAll();
        active = true;
      }
    } else if (normalized > 0) {
      if (active) {
        list_items.reverse();
        TweenMax.pauseAll();
        active = false;
      }
    }
  };

  const onResize = () => {
    height = document.querySelector(".list-items__navbar").offsetHeight;
  };

  // Video list
  const getVideoItems = () => {
    list_items.forEach((item, index) => {
      const video_item = video_items[index];
      const video = video_item.children[0];

      item.addEventListener("mouseenter", () => {
        video.play();
        video_item.style.display = "block";

        TweenMax.to(video_item, 0.5, {
          opacity: 1
        });
      });

      item.addEventListener("mouseleave", () => {
        TweenMax.to(video_item, 0.5, {
          opacity: 0,
          onComplete: () => {
            video_item.style.display = "none";
            video.pause();
          }
        });
      });
    });
  };

  getVideoItems();
  moveNavigation();
  navTranslate();
  window.addEventListener("resize", onResize);
};

window.addEventListener("load", init);