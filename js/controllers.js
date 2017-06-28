/**
 * Created by Ming on 2017/6/27.
 */

var articleListMoudle = angular.module('ArticleListMoudle',[]);
articleListMoudle.controller('ArticleListCtrl',function ($scope,$http) {
    $http
        .get('data/articleList.json')
        .success(function (data) {
            $scope.articles = data;
        });
});