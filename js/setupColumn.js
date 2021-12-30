let dataList = [{
        title: "日子一去不復返了，Please don't cry baby",
        pubilicTime: '20211226',
        tag: ['mylittleairport'],
        singer: 'My Little Airport',
        desc: '歌曲中有一句是「the days have gone.」，日子一去不復返了，好的，壞的，通通都是過去式，明天又是星期一，如果明天不用一早起床扮工，可以有懶洋洋地睡到天光，再賴床一段時間，在這樣陰冷的天氣裡，還是很舒服的。'
    },
    {
        title: "你知道嗎？我多麼希望你在這裡",
        pubilicTime: '20211219',
        tag: ['mylittleairport'],
        singer: 'My Little Airport',
        desc: '我在聽這首歌的時候，回想了一些求學時期的片段，發現比發夢時候回到當時的時光更模糊更沒有感覺了，同學情誼不外如此，最後只剩下成為了老朋友的同學和曾經喜歡過的女生的光影碎片。'
    },
    {
        title: "你還相信他會回來嗎？",
        pubilicTime: '20211205',
        tag: ['mylittleairport'],
        singer: 'My Little Airport',
        desc: '廣東的地區的天氣，在其他省份看來，還是一個秋天的季節吧，乾燥，若風沒有起，陽光打在身上，懶洋洋過著退休的生活，似乎還是很不錯的，但現實可能是，你快樂過生活，我拼命去生存。'
    },
    {
        title: "十年後，我們還會再見嗎？",
        pubilicTime: '20211128',
        tag: ['mylittleairport'],
        singer: 'My Little Airport',
        desc: '這首歌很像一首小情歌，當然也是這樣理解，把香蕉類別於值得珍惜而可愛的人。這首歌是啟發自關於香蕉的在十年後將會絕種的當時新聞報導。難以置信，香蕉怎麼會絕種呢，這麼好吃的水果。'
    },
    {
        title: "如果你能和我在一起，我就不需要自由",
        pubilicTime: '20211121',
        tag: ['mylittleairport'],
        singer: 'My Little Airport',
        desc: '隨著我們日常使用溝通的媒介在發生變化，我們的表情也會發生變化，你偶爾會在街邊路過的旁人對著手機微微一笑，可能是看到好笑的東西，也可能是幸福的表情，跟喜歡的人在聊天，但一聲不響'
    },
]


var html = ''

dataList.map((item, index) => {
    let tagHtml = ''
    item.tag.map(tagItem => {
        tagHtml += `<a href="#">#${tagItem}</a>`
    })
    html +=
        `
    <li class="clearfix">
        <a href="#" class="fl column-img"><img src="assets/thumbnail/${item.pubilicTime}.png" alt=""></a>
        <div class="column-content fl">
            <a href="#" class="title">${item.title}</a>
            <div class="tag-wrapper">
                ${tagHtml}
                <a href="#">${item.singer}</a>
            </div>
            <p class="desc">
                ${item.desc}
            </p>
            <a href="pages/detail/${index}.html" class="button">更多</a>
        </div>
    </li>
`
})

console.log(html)