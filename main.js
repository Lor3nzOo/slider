let btns = $(".btns button")
let btnLeft = btns[0]
let btnRight = btns[1]
let rows = $(".row")
let row1 = rows[0]
let row2 = rows[1]
$(row1).scrollLeft(40)
let images1 = row1.querySelectorAll("img")
let images2 = row2.querySelectorAll("img")

$.each(btns, (key, btn) => {
    let img = btn.children[0]
    let imgSrc = img.getAttribute("src")
    $(btn).mouseenter(() => {
        $(img).attr("src", imgSrc.replace("gray", "blue"))
    })
    $(btn).mouseleave(() => {
        $(img).attr("src", imgSrc)
    })
})

$(btnRight).click(() => {
    images1.forEach(img => {
        $(img).animate({ paddingLeft: 50, speed: 'slow'})
        $(img).animate({ paddingLeft: 0, speed: 'slow'})
    })
    row1.append(row1.firstElementChild)
    images2.forEach(img => {
        $(img).animate({ paddingLeft: 50, speed: 'slow'})
        $(img).animate({ paddingLeft: 0, speed: 'slow'})
    })
    row2.append(row2.firstElementChild)
})

$(btnLeft).click(() => {
    images1.forEach(img => {
        $(img).animate({ paddingRight: 50, speed: 'slow'})
        $(img).animate({ paddingRight: 0, speed: 'slow'})
    })
    row1.prepend(row1.lastElementChild)
    images2.forEach(img => {
        $(img).animate({ paddingRight: 50, speed: 'slow'})
        $(img).animate({ paddingRight: 0, speed: 'slow'})
    })
    row2.prepend(row2.lastElementChild)
})
