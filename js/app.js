/*global angular*/

var app = angular.module("nailsAndSmiles", ["ngRoute"])
                .config(["$routeProvider", function ($routeProvider) {
                  $routeProvider
                    .when("/landing",
                    {
                        templateUrl: "templates/landing.html"
                    })
                    .when("/services",
                    {
                        templateUrl: "templates/services.html"
                    })
                    .when("/gallery",
                    {
                        templateUrl: "templates/gallery.html"
                    })
                    .when("/hours",
                    {
                        templateUrl: "templates/hours.html"
                    })
                    .when("/discounts",
                    {
                       templateUrl: "templates/discounts.html"
                    })
                    .when("/blog",
                    {
                       templateUrl: "templates/blog.html"
                    })
                    .otherwise({redirectTo: "/landing"});
}]);