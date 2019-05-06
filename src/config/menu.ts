interface MenuDataObject {
    title: String,
    icon: String,
    path: String,
    children: Array<MenuDataObject>
}

interface MenuDataArray {
    [index: number]: MenuDataObject
}

export const MenuData: MenuDataArray =  [
    {
        title: 'dashboard',
        icon: 'dashboard',
        path: '/',
        children: []
    },
    {
        title: 'data',
        icon: 'database',
        path: '/data',
        children: [
            {
                title: 'github',
                icon: 'github',
                path: '/data/github',
                children: []
            }
        ]
    },
    {
        title: 'chart',
        icon: 'code',
        path: '/chart',
        children: [
            {
                title: 'echarts',
                icon: 'line-chart',
                path: '/chart/echarts',
                children: []
            },
            {
                title: 'highCharts',
                icon: 'bar-chart',
                path: '/chart/highCharts',
                children: []
            }
        ]
    }
]
