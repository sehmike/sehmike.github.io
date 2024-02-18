let i = fi = z = 0
    const qa = e => document.querySelectorAll(e),
      a = qa("article"),
      fs = qa("section p"),
      f = e => e.style.zIndex = z,
      ns = () => {
        fs[fi].style.display = "none", fi = (fi + 1) % fs.length, fs[fi].style.display = "inline"
      },
      next = () => {
        i = (i + 1) % a.length, z += 1
        f(a[i]), ns()
      },
      click = () => {
        next(), clearInterval(s)
      }
    document.body.onclick = click
    const s = setInterval(  next, 1500)