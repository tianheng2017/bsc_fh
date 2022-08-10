/**
 * 权限控制
 */

import NProgress from 'nprogress'
import router, { findFirstValidRoute } from './router'
import 'nprogress/nprogress.css'
import { isExternal } from './utils/validate'
import useUserStore from './stores/modules/user'
import { INDEX_ROUTE, INDEX_ROUTE_NAME } from './router/routes'
import { PageEnum } from './enums/pageEnum'
import useTabsStore from './stores/modules/multipleTabs'
import { clearAuthInfo } from './utils/auth'

// NProgress配置
NProgress.configure({ showSpinner: false })

const loginPath = PageEnum.LOGIN
const defaultPath = PageEnum.INDEX
// 免登录白名单
const whiteList: string[] = [PageEnum.LOGIN, PageEnum.ERROR_403]
router.beforeEach(async (to, from, next) => {
    // 开始 Progress Bar
    NProgress.start()
    const userStore = useUserStore()
    const tabsStore = useTabsStore()
    if (userStore.token) {
        // 获取用户信息
        const hasGetUserInfo = Object.keys(userStore.userInfo).length !== 0
        if (hasGetUserInfo) {
            if (to.path === loginPath) {
                next({ path: defaultPath })
            } else {
                next()
            }
        } else {
            try {
                await userStore.getUserInfo()
                const routes = userStore.routes
                // 没有菜单跳转到403页面
                if (!routes.length) {
                    await userStore.logout()
                    next(PageEnum.ERROR_403)
                    return
                }
                // 找到第一个有效路由
                const routeName = findFirstValidRoute(routes)
                tabsStore.setRouteName(routeName!)
                INDEX_ROUTE.redirect = { name: routeName }

                // 动态添加index路由
                router.addRoute(INDEX_ROUTE)
                routes.forEach((route: any) => {
                    // https 则不插入
                    if (isExternal(route.path)) {
                        return
                    }
                    if (!route.children) {
                        router.addRoute(INDEX_ROUTE_NAME, route)
                        return
                    }
                    // 动态添加可访问路由表
                    router.addRoute(route)
                })
                next({ ...to, replace: true })
            } catch (err) {
                clearAuthInfo()
                next({ path: loginPath, query: { redirect: to.fullPath } })
            }
        }
    } else if (whiteList.includes(to.path)) {
        // 在免登录白名单，直接进入
        next()
    } else {
        next({ path: loginPath, query: { redirect: to.fullPath } })
    }
})

router.afterEach(() => {
    // console.log(router.getRoutes())
    NProgress.done()
})
