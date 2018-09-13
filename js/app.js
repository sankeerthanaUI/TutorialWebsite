var app = angular.module("myApp", ["ngRoute", "ui.bootstrap"]);
app.controller("LoginCntrl", function ($scope) {

});



// Controller  for Carousel
app.controller("CarouselCtrl", function ($scope) {

    // initializing the time Interval
    $scope.myInterval = 3000;

    // Initializing  slide rray
    $scope.slides = [
        {
            image: 'assets/black-background-design.jpg',
            text: 'Image1'
        },

        {
            image: 'assets/image.jpg',
            text: 'Image2'
        },
        {
            image: 'assets/rabbit.jpg',
            text: 'Image3'
        },
        {
            image: 'assets/family-bear-figures-funny-160460.jpeg',
            text: 'Image4'
        }
                      ];

    // var slides = $scope.slides;
    //console.log(slides);




}); // Controller Ends here



app.config(function ($routeProvider) {
    $routeProvider
        .when("/SignIn", {
            templateUrl: "views/login.html",
            controller: "LoginCntrl"
        })
        .when("/SignUp", {
            templateUrl: "views/signup.html",
            controller: ""
        })
        .when("/Home", {
            templateUrl: "views/main.html",
            controller: "CarouselCtrl"
        });
});
