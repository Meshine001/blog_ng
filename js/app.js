/**
 * Created by Ming on 2017/6/27.
 */
var routerApp = angular.module('routerApp', ['ui.router', 'ArticleListMoudle','ArticleDetailsMoudle']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            views:{
                '':{
                    templateUrl:'views/home.html'
                },
                'articleList@index':{
                    templateUrl:'views/articleList.html'
                },
                'aside@index':{
                    templateUrl:'views/aside.html'
                }
            }
        })
        .state('details',{
            url:'/details/:articleId',
            views:{
                '':{
                    templateUrl:'views/articleDetails.html'
                },
                'aside@details':{
                    templateUrl:'views/aside.html'
                }

            }


        });
});