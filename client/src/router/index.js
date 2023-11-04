import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/components/mountain/Index'


import EasternRegionIndex from '@/components/mountain/Index/IndexEasternRegion'
import EasternRegionCreate from '@/components/mountain/Create/CreateEasternRegion'
import EasternRegionEdit from '@/components/mountain/Edit/EditEasternRegion'
import EasternRegionShow from '@/components/mountain/Show/ShowEasternRegion'


import NortheastIndex from '@/components/mountain/Index/IndexNortheast'
import NortheastCreate from '@/components/mountain/Create/CreateNortheast'
import NortheastEdit from '@/components/mountain/Edit/EditNortheast'
import NortheastShow from '@/components/mountain/Show/ShowNortheast'


import SouthIndex from '@/components/mountain/Index/IndexSouth'
import SouthCreate from '@/components/mountain/Create/CreateSouth'
import SouthEdit from '@/components/mountain/Edit/EditSouth'
import SouthShow from '@/components/mountain/Show/ShowSouth'


import TheNorthIndex from '@/components/mountain/Index/IndexTheNorth'
import TheNorthCreate from '@/components/mountain/Create/CreateTheNorth'
import TheNorthEdit from '@/components/mountain/Edit/EditTheNorth'
import TheNorthShow from '@/components/mountain/Show/ShowTheNorth'

import WesternRegionIndex from '@/components/mountain/Index/IndexWesternRegion'
import WesternRegionCreate from '@/components/mountain/Create/CreateWesternRegion'
import WesternRegionEdit from '@/components/mountain/Edit/EditWesternRegion'
import WesternRegionShow from '@/components/mountain/Show/ShowWesternRegion'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/index',
      name: 'index',
      component: Index
    },
    

    {
      path: '/easternRegions',
      name: 'easternRegions',
      component: EasternRegionIndex
    },
    {
      path: '/easternRegion/create',
      name: 'easternRegion-create',
      component: EasternRegionCreate
    },
    {
      path: '/easternRegion/edit/:easternRegionId',
      name: 'easternRegion-edit',
      component: EasternRegionEdit
    },
    {
      path: '/easternRegion/:easternRegionId',
      name: 'easternRegion',
      component: EasternRegionShow
    },


    {
      path: '/northeasts',
      name: 'northeasts',
      component: NortheastIndex
    },
    {
      path: '/northeast/create',
      name: 'northeast-create',
      component: NortheastCreate
    },
    {
      path: '/northeast/edit/:northeastId',
      name: 'northeast-edit',
      component: NortheastEdit
    },
    {
      path: '/northeast/:northeastId',
      name: 'northeast',
      component: NortheastShow
    },


    {
      path: '/souths',
      name: 'souths',
      component: SouthIndex
    },
    {
      path: '/south/create',
      name: 'south-create',
      component: SouthCreate
    },
    {
      path: '/south/edit/:southId',
      name: 'south-edit',
      component: SouthEdit
    },
    {
      path: '/south/:southId',
      name: 'south',
      component: SouthShow
    },
    {
      path: '/theNorths',
      name: 'theNorths',
      component: TheNorthIndex
    },
    {
      path: '/theNorth/create',
      name: 'theNorth-create',
      component: TheNorthCreate
    },
    {
      path: '/theNorth/edit/:theNorthId',
      name: 'theNorth-edit',
      component: TheNorthEdit
    },
    {
      path: '/theNorth/:theNorthId',
      name: 'theNorth',
      component: TheNorthShow
    },

    {
      path: '/westernRegions',
      name: 'westernRegions',
      component: WesternRegionIndex
    },
    {
      path: '/westernRegion/create',
      name: 'westernRegion-create',
      component: WesternRegionCreate
    },
    {
      path: '/westernRegion/edit/:westernRegionId',
      name: 'westernRegion-edit',
      component: WesternRegionEdit
    },
    {
      path: '/westernRegion/:westernRegionId',
      name: 'westernRegion',
      component: WesternRegionShow
    },


    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    //  },
  ]
})
