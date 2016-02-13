/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home></home>'
        })
        .state('startpos', {
            url: '/startpos',
            template: '<startpos></startpos>'
        })
        .state('manage', {
            url: '/manage',
            template: '<manage></manage>'
        })
        .state('category', {
            url: '/category',
            template: '<category></category>'
        })
        .state('purchase', {
            url: '/purchase',
            template: '<purchase></purchase>'
        })
        .state('article', {
            url: '/article',
            template: '<article></article>'
        })
        .state('about', {
            url: '/about',
            template: '<about></about>'
        });

    $urlRouterProvider.otherwise("/home");
});