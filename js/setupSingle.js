let dataList = [{
        title: '第二次告白',
        singer: "Lil' Ashes 小塵埃",
        timestamp: '1639919837',
        time: '12月20日'
    },
    {
        title: '團圓說',
        singer: "謝安琪",
        timestamp: '1639919838',
        time: '12月20日'
    },
    {
        title: '碌下碌下',
        singer: "雷同二友",
        timestamp: '1639833437',
        time: '12月17日'
    },
    {
        title: '好好地過（OneDegree新時代保險廣告歌）',
        singer: "RubberBand",
        timestamp: '1639833438',
        time: '12月16日'
    },
    {
        title: 'Be around',
        singer: "kayan9896",
        timestamp: '1639401437',
        time: '12月15日'
    },
    {
        title: '兩個月亮 hirsk remix',
        singer: "黄姸",
        timestamp: '1639401438',
        time: '12月15日'
    }
]

var html = ''

dataList.map((item, index) => {
    html +=
        `
        <li class="clearfix">
        <a href="#" class="fl lasted-song-img">
            <img src="/assets/thumbnail/s${item.timestamp}.jpeg" alt="">
        </a>
        <div class="lasted-song-content fl">
            <a href="#" class="title">${item.title}</a>
            <p class="post-meta">${item.time} by <a href="#"> ${item.singer}</a></p>
        </div>
    </li>
`
})

console.log(html)