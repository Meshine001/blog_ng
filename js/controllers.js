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

var articleDetailsMoudle = angular.module('ArticleDetailsMoudle',[]);
articleDetailsMoudle.controller('ArticleDetailsCtrl',function ($scope,$http,$stateParams) {
   console.log($stateParams);

   var articleDetailsUrl = 'data/article-'+$stateParams.articleId+'.json';
    $http
        .get(articleDetailsUrl)
        .success(function (data) {
            $scope.article = data;
        });

    var commentUrl = 'data/comment-'+$stateParams.articleId+'.json';
    $http
        .get(commentUrl)
        .success(function (data) {
            $scope.comment = data;
        });
});