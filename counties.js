module.exports = [
    {
        name: '基隆市',
        hospitals: [
            require('./hospitals/keelung'),
        ]
    },

    {
        name: '台北市',
        hospitals: [
            require('./hospitals/ntuh'),
            require('./hospitals/vghtpe'),
            require('./hospitals/tpoc.tsgh'),
            require('./hospitals/skh'),
            require('./hospitals/wanfang'),
        ]
    },

    {
        name: '桃園市',
        hospitals: [
            require('./hospitals/yeezen'),
            require('./hospitals/landseed'),
            require('./hospitals/cgmh'),
        ]
    },

    {
        name: '台南市',
        hospitals: [
            require('./hospitals/vhyk'),
        ]
    }
]
