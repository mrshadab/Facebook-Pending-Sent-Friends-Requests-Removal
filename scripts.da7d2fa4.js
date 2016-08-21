angular.module("angularProjectApp", ["ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "ngTouch", "ui.bootstrap", "LocalStorageModule", "google.places", "uiGmapgoogle-maps", "angular-stripe", "ui.bootstrap.datetimepicker", "angular-ladda", "ui.calendar", "daterangepicker", "mwl.calendar", "ngCsvImport", "naif.base64", "ng.deviceDetector", "tbImageProcessor", "checklist-model", "angulartics", "angulartics.google.analytics", "leaflet-directive", "toastr", "angular-carousel", "youtube-embed", "nvd3", "angularPayments", "ngAudio", "ngDragDrop", "rzModule", "internationalPhoneNumber"]).config(["$routeProvider", "stripeProvider", "toastrConfig", "ipnConfig", "uiGmapGoogleMapApiProvider", function($routeProvider, stripeProvider, toastrConfig, ipnConfig, uiGmapGoogleMapApiProvider) {
    stripeProvider.setPublishableKey("pk_live_O8rxwdlmwOLy6PWig6Llu4qP"), angular.extend(toastrConfig, {
        autoDismiss: !0,
        containerId: "toast-container",
        maxOpened: 0,
        newestOnTop: !0,
        positionClass: "toast-top-full-width",
        timeOut: 3e3,
        preventDuplicates: !1,
        preventOpenDuplicates: !1,
        target: "body"
    }), angular.extend(ipnConfig, {
        skipUtilScriptDownload: !0,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.5.2/js/utils.js"
    }), $routeProvider.when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/affiliates", {
        templateUrl: "views/affiliatessignup.html",
        controller: "MainCtrl",
        resolve: {
            authenticated: ["$location", function($location) {
                return localStorage.setItem("ls.authedPage", !1), !1
            }]
        }
    }).when("/affiliatesPresentation", {
        templateUrl: "views/affiliates.html",
        controller: "MainCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/corporation", {
        templateUrl: "views/corporations.html",
        controller: "MainCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/faqs", {
        templateUrl: "views/faqs.html",
        controller: "FaqCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/hotel", {
        templateUrl: "views/hotels.html",
        controller: "MainCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/privacy", {
        templateUrl: "views/privacy.html",
        controller: "MainCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/contact", {
        templateUrl: "views/contact.html",
        controller: "MainCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/safeHarbor", {
        templateUrl: "views/safeHarbor.html",
        controller: "MainCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/terms", {
        templateUrl: "views/tos.html",
        controller: "MainCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/booking", {
        templateUrl: "views/bookingmap.html",
        controller: "BookingmapCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/trips", {
        templateUrl: "views/trips.html",
        controller: "TripsCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {})
            }]
        }
    }).when("/tpadmin", {
        templateUrl: "views/tpadmin.html",
        controller: "TpadminCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {
                    $location.path("/")
                })
            }]
        }
    }).when("/driverportal", {
        templateUrl: "views/driverportal.html",
        controller: "DriverportalCtrl",
        resolve: {
            authenticated: ["Auth", "$location", function(Auth, $location) {
                Auth.isLoggedIn().then(function() {}, function() {
                    $location.path("/")
                })
            }]
        }
    }).when("/tpregistration", {
        templateUrl: "views/tpregistration.html",
        controller: "TpregistrationCtrl",
        controllerAs: "tpregistration"
    }).when("/corpAdmin", {
        templateUrl: "views/corpadmin.html",
        controller: "CorpadminCtrl",
        controllerAs: "corpAdmin"
    }).when("/modals/addMarkets", {
        templateUrl: "views/modals/addmarkets.html",
        controller: "ModalsAddmarketsCtrl",
        controllerAs: "modals/addMarkets"
    }).when("/modals/addRates", {
        templateUrl: "views/modals/addrates.html",
        controller: "ModalsAddratesCtrl",
        controllerAs: "modals/addRates"
    }).when("/registeredTPs", {
        templateUrl: "views/registeredtp.html",
        controller: "RegisteredtpCtrl"
    }).when("/adminPanel", {
        templateUrl: "views/adminpanel.html",
        controller: "AdminpanelCtrl"
    }).when("/tp-verify", {
        templateUrl: "views/tp-verify.html",
        controller: "TpverifyCtrl"
    }).when("/driverSignup", {
        templateUrl: "views/driversignup.html",
        controller: "DriversignupCtrl"
    }).when("/driver-verify", {
        templateUrl: "views/driver-verify.html",
        controller: "DriververifyCtrl"
    }).when("/driver-status", {
        templateUrl: "views/driver-status.html",
        controller: "DriverstatusCtrl"
    }).when("/registration", {
        templateUrl: "views/registration.html",
        controller: "RegistrationCtrl",
        controllerAs: "registration"
    }).when("/elements", {
        templateUrl: "views/elements.html"
    }).when("/driverRequirements", {
        templateUrl: "views/driverrequirements.html",
        controller: "DriverrequirementsCtrl"
    }).when("/checkrDisclosure", {
        templateUrl: "views/checkrdisclosure.html",
        controller: "MainCtrl"
    }).when("/passwordReset", {
        templateUrl: "views/passwordreset.html",
        controller: "PasswordresetCtrl"
    }).when("/viewAffiliates", {
        templateUrl: "views/seeallaffiliates.html",
        controller: "SeeallaffiliatesCtrl"
    }).when("/approveDriversAndCars", {
        templateUrl: "views/approvecarsanddrivers.html",
        controller: "ApprovecarsanddriversCtrl"
    }).when("/driverportal", {
        templateUrl: "views/driverportal.html",
        controller: "DriverportalCtrl",
        controllerAs: "driverportal"
    }).when("/registeredDrivers", {
        templateUrl: "views/driverforapprovalview.html",
        controller: "DriverforapprovalviewCtrl"
    }).when("/corpSignup", {
        templateUrl: "views/dmcsignup.html",
        controller: "DmcsignupCtrl"
    }).when("/inernalCorpSignup", {
        templateUrl: "views/internaldmcsignup.html",
        controller: "InternalcorpsignupCtrl"
    }).when("/mapPanel", {
        templateUrl: "views/mappanel.html",
        controller: "MappanelCtrl"
    }).when("/profile", {
        templateUrl: "views/profile.html",
        controller: "ProfileCtrl"
    }).when("/tripView", {
        templateUrl: "views/tripSingle.html",
        controller: "TripsingleCtrl"
    }).when("/concierge", {
        templateUrl: "views/concierge.html",
        controller: "ConciergeCtrl"
    }).when("/signupPassenger", {
        templateUrl: "views/signupPassenger.html",
        controller: "SignupCtrl"
    }).when("/loginPassenger", {
        templateUrl: "views/loginPassenger.html",
        controller: "LoginCtrl"
    }).when("/passenger", {
        templateUrl: "views/passenger.html",
        controller: "PassengerCtrl"
    }).when("/driver", {
        templateUrl: "views/driver.html",
        controller: "DriverCtrl"
    }).when("/gbta", {
        templateUrl: "views/corporations.html",
        controller: "MainCtrl"
    }).otherwise({
        redirectTo: "/"
    })
}]).run(["$rootScope", "$location", "Auth", "$templateCache", "errorViewer", function($rootScope, $location, Auth, $templateCache, errorViewer) {
    $rootScope.$broadcast("$routeChangeStart"), $rootScope.endPoint = "https://api.icars.cc/api", $rootScope.userType = "", $rootScope.errorViewer = errorViewer, $rootScope.$on("$routeChangeStart", function(event, next, current) {
        $("html, body").animate({
            scrollTop: 0
        }, "fast"), $("nav").removeClass("ic-nav-active"), "undefined" != typeof current && $templateCache.remove(current.templateUrl), "undefined" != typeof next && $templateCache.remove(next.templateUrl)
    })
}]).factory("authHttpResponseInterceptor", ["$q", "$location", "$rootScope", function($q, $location, $rootScope, localStorageService, Auth) {
    return {
        response: function(response) {
            return 401 === response.status && (localStorage.setItem("ls.Auth", null), localStorage.setItem("ls.profile", null), $rootScope.$broadcast("$routeChangeStart"), $rootScope.$broadcast("clearUser")), response || $q.when(response)
        },
        responseError: function(rejection) {
            return 401 === rejection.status && localStorage.setItem("ls.Auth", null), $q.reject(rejection)
        }
    }
}]).constant("YT_event", {
    STOP: 0,
    PLAY: 1,
    PAUSE: 2,
    STATUS_CHANGE: 3
}), angular.module("angularProjectApp").controller("MainCtrl", ["$scope", "tripRequest", "$location", "anchorSmoothScroll", "toastr", "$document", "profile", "$timeout", "$modal", function($scope, tripRequest, $location, anchorSmoothScroll, toastr, $document, profile, $timeout, $modal) {
    var init = function() {
        profile.renewAccessToken();
        var urlParams = $location.search();
        urlParams.signup && $scope.openModal("Thank you for signing up", "An iCARS representative will be in touch with you shortly."), urlParams.interest && $scope.openModal("Thank you for your interest", "An iCARS representative will be in touch with you shortly.")
    };
    $scope.openModal = function(title, content) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/customModal.html",
            scope: $scope,
            controller: "CustommodalCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                modalContent: function() {
                    return content
                },
                modalTitle: function() {
                    return title
                }
            }
        })
    }, $scope.bookRide = function() {
        tripRequest.bookFromHome($scope.from, $scope.to, $scope.from.formatted_address, $scope.to.formatted_address)
    }, $scope.gotoElement = function(eID) {
        anchorSmoothScroll.scrollTo(eID)
    }, $scope.openAppStore = function() {
        window.open("https://itunes.apple.com/us/app/icars-on-demand/id975389128?ls=1&mt=8s")
    }, $scope.openPlayStore = function() {
        window.open("https://play.google.com/store/apps/details?id=cc.icars.Client")
    }, $scope.openDriverAppStore = function() {
        window.open("https://itunes.apple.com/us/app/icars-driver/id993724990?mt=8")
    }, $scope.openDriverPlayStore = function() {
        window.open("https://play.google.com/store/apps/details?id=cc.icars.icarsdriver&hl=en")
    }, $scope.$watch("carouselIndex", function(newValue, oldValue) {
        playerplaying && playerplaying.stopVideo()
    }), $scope.getEstimate = function() {
        $scope.loading = !0, $scope.from.geometry && $scope.to.geometry && tripRequest.getEstimate($scope.from, $scope.to, 0, 0).then(function(res) {
            $scope.displayTextSedan = res.displayText, tripRequest.getEstimate($scope.from, $scope.to, 0, 1).then(function(res) {
                $scope.loading = !1, $scope.displayTextSUV = res.displayText, $("#intro").css("height", Math.max(winH + 170, 440))
            }, function() {
                $scope.loading = !1
            })
        }, function() {
            $scope.loading = !1
        })
    }, $scope.$on("$viewContentLoaded", function(event) {
        $timeout(function() {
            $("h1.intro-title span").addClass("on")
        }, 300), $timeout(function() {
            $("span.tap").addClass("on")
        }, 1800), $timeout(function() {
            $("span.tap").removeClass("on"), $("span.ride").addClass("on")
        }, 2300), $timeout(function() {
            $("span.ride").removeClass("on"), $("span.arrive").addClass("on")
        }, 2800), $timeout(function() {
            $("span.arrive").removeClass("on")
        }, 3300)
    }), $scope.$on("youtube.player.playing", function($event, player) {
        playerplaying = player
    });
    var playerplaying;
    init()
}]), angular.module("angularProjectApp").controller("AboutCtrl", ["$scope", function($scope) {}]), angular.module("angularProjectApp").service("Auth", ["$rootScope", "localStorageService", "$location", "$http", "$q", function($rootScope, localStorageService, $location, $http, $q) {
    var auth = this;
    return $http.defaults.headers.post = {
        "Content-Type": "application/json"
    }, delete $http.defaults.headers.common["X-Requested-With"], localStorageService.get("Auth") && ($http.defaults.headers.common.Authorization = localStorageService.get("Auth")), auth.checkLoggedIn = function() {
        return localStorageService.get("Auth") ? !0 : !1
    }, auth.isLoggedIn = function() {
        var defer = $q.defer();
        return localStorageService.get("Auth") ? defer.resolve("User is logged In") : defer.reject(401), defer.promise
    }, auth.logIn = function(email, password, type) {
        var defer = $q.defer();
        return email && password ? $http.post($rootScope.endPoint + type + "/login", {
            email: email,
            password: password,
            source: "web",
            version: "1.0",
            p2pVersion: 2
        }).success(function(res) {
            localStorageService.set("Type", type), auth.setData(res, defer)
        }).error(function(status, err) {
            "/DMCAdmins" == type ? $http.post($rootScope.endPoint + "/DMCDepartmentAdmins/login", {
                email: email,
                password: password,
                source: "web",
                version: "1.0",
                p2pVersion: 2
            }).success(function(res) {
                localStorageService.set("Type", "/DMCDepartmentAdmins"), auth.setData(res, defer)
            }).error(function(status) {
                $http.post($rootScope.endPoint + "/DMCDivisionAdmins/login", {
                    email: email,
                    password: password,
                    source: "web",
                    version: "1.0",
                    p2pVersion: 2
                }).success(function(res) {
                    localStorageService.set("Type", "/DMCDivisionAdmins"), auth.setData(res, defer)
                }).error(function(status) {
                    auth.reject("Login failed"), defer.reject(status)
                })
            }) : (auth.reject("Login failed"), defer.reject(status))
        }) : defer.reject("You need to provide an email and password"), defer.promise
    }, auth.reject = function(reason) {}, auth.setData = function(data, promise) {
        localStorageService.set("Auth", data.id), $http.defaults.headers.common.Authorization = data.id, localStorageService.set("User", data.user), data.dmc_billing_types && localStorageService.set("Billing", data.dmc_billing_types), data.dmc_booking_fee && localStorageService.set("Booking", data.dmc_booking_fee), data.tipType && localStorageService.set("TipType", data.tipType), data.tipPercentage ? localStorageService.set("TipPercentage", data.tipPercentage) : localStorageService.set("TipPercentage", 0), data.dmc_referral_booking_fee && localStorageService.set("Referral", data.dmc_referral_booking_fee), data.DMCPaymentMethods && localStorageService.set("businessPayment", data.DMCPaymentMethods), data.driversAwaitingApproval && data.driversAwaitingApproval.length > 0 && localStorageService.set("driversAwaitingApproval", data.driversAwaitingApproval), data.vehiclesAwaitingApproval && data.vehiclesAwaitingApproval.length > 0 && localStorageService.set("vehiclesAwaitingApproval", data.vehiclesAwaitingApproval), data.transportProvider && localStorageService.set("transportProvider", data.transportProvider), data.tp_vehicle && localStorageService.set("tp_vehicle", data.tp_vehicle), data.dmcTree && localStorageService.set("tree", data.dmcTree), data.dmcPointToPoint && localStorageService.set("p2p", data.dmcPointToPoint), $rootScope.$broadcast("loginSuccess"), promise.resolve()
    }, auth.logOut = function() {
        $http.post($rootScope.endPoint + localStorageService.get("Type") + "/logout?access_token=" + localStorageService.get("Auth")).success(function() {
            localStorageService.set("Auth", null), localStorageService.set("User", null), localStorageService.set("Billing", null), localStorageService.set("Booking", null), localStorageService.set("Referral", null), localStorageService.set("Type", null), localStorageService.set("driversAwaitingApproval", null), localStorageService.set("vehiclesAwaitingApproval", null), localStorageService.set("transportProvider", null), localStorageService.set("tp_vehicle", null), localStorageService.set("tree", null), $location.path("/"), window.location.reload()
        }).error(function() {
            localStorageService.set("Auth", null), localStorageService.set("User", null), localStorageService.set("Billing", null), localStorageService.set("Booking", null), localStorageService.set("Referral", null), localStorageService.set("Type", null), localStorageService.set("driversAwaitingApproval", null), localStorageService.set("vehiclesAwaitingApproval", null), localStorageService.set("transportProvider", null), localStorageService.set("tree", null), $location.path("/")
        })
    }, auth.resetPassword = function(token, id, password, type) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/" + type + "/confirmPasswordReset", {
            token: token,
            password: password,
            uid: id
        }).success(function(res) {
            defer.resolve(res)
        }).error(function(status, code) {
            defer.reject(status)
        }), defer.promise
    }, auth.resetRequest = function(email) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/Passengers/requestPasswordReset", {
            email: email
        }).success(function(res) {
            defer.resolve(res)
        }).error(function(status, code) {
            defer.reject(status)
        }), defer.promise
    }, auth
}]), angular.module("angularProjectApp").controller("HeadercontrollerCtrl", ["$rootScope", "$scope", "$location", "$interval", "Auth", "localStorageService", "$analytics", function($rootScope, $scope, $location, $interval, Auth, localStorageService, $analytics) {
    $scope.init = function() {
        $scope.isLoggedIn = !1, $rootScope.$on("$routeChangeStart", function(event, next) {
            Auth.isLoggedIn().then(function() {
                $scope.isLoggedIn = !0
            }, function() {
                $scope.isLoggedIn = !1
            })
        }), $scope.currentPage = $location.url(), $scope.currentPath = $location.path(), $scope.headerView = "/views/header.html", $scope.showHeader = !0
    }, $scope.signUp = function() {
        $rootScope.$broadcast("signUp"), $analytics.eventTrack("header-signup")
    }, $scope.logIn = function() {
        $rootScope.$broadcast("logIn"), $analytics.eventTrack("header-login")
    }, $scope.logOut = function() {
        Auth.logOut().then(function() {
            $scope.isLoggedIn = !0
        }, function() {
            $scope.isLoggedIn = !1
        })
    }, $interval(function() {
        $scope.currentPage = $location.url(), $scope.currentPath = $location.path()
    }, 200), $interval(function() {
        "/booking" == $location.path() || "/tpadmin" == $location.path() && $(".ic-tpdmin-widgettripsHeader").is(":visible") ? $("body").addClass("stop-scrolling") : $("body").removeClass("stop-scrolling"), 1 == Auth.checkLoggedIn() ? ($scope.loggedIn = !0, $scope.role = localStorageService.get("Type")) : $scope.loggedIn = !1
    }, 200), $scope.init()
}]), angular.module("angularProjectApp").controller("LoginCtrl", ["$rootScope", "$scope", "Auth", "$location", "localStorageService", "$analytics", "$timeout", "toastr", function($rootScope, $scope, Auth, $location, localStorageService, $analytics, $timeout, toastr) {
    $scope.init = function() {
        $scope.userType = "/BookingAgents"
    }, $scope.login = function() {
        $scope.email && $scope.password && ($scope.loading = !0, Auth.logIn($scope.email, $scope.password, $scope.userType).then(function() {
            var type = localStorageService.get("Type");
            "/Drivers" == type ? $location.path("/driverportal") : "/TPAdmins" == type ? localStorageService.get("driversAwaitingApproval") || localStorageService.get("vehiclesAwaitingApproval") ? $location.path("/approveDriversAndCars") : $location.path("/tpadmin") : "/Admins" == type ? $location.path("/adminPanel") : "/DMCAdmins" == type || "/DMCDepartmentAdmins" == type || "/DMCDivisionAdmins" == type ? $location.path("/corpAdmin") : $location.path("/booking"), $scope.loading = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.loading = !1
        }))
    }, $scope.forgotPassword = function() {
        $rootScope.$broadcast("forgotPassword")
    }, $scope.init()
}]), angular.module("angularProjectApp").controller("modalAndStateCtrl", ["$rootScope", "$scope", "Auth", "$modal", function($rootScope, $scope, Auth, $modal) {
    $scope.auth = Auth, $scope.modalInstance = "", $rootScope.$on("logIn", function(event, res) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/logIn.html",
            controller: "LoginCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }), $rootScope.$on("signUp", function(event, res) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/signUp.html",
            controller: "SignupCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }), $rootScope.$on("addCard", function(event, res) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addCard.html",
            controller: "AddcardCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }), $rootScope.$on("addRates", function(event, res) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addRates.html",
            controller: "ModalsAddratesCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }), $rootScope.$on("addMarkets", function(event, res) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addMarkets.html",
            controller: "ModalsAddmarketsCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }), $rootScope.$on("openSuccess", function(event, res) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/success.html",
            controller: "SuccessmodalCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }), $rootScope.$on("openError", function(event, res) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/error.html",
            controller: "ErrormodalCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }), $rootScope.$on("forgotPassword", function(event, res) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/forgotpassword.html",
            controller: "ForgotpasswordCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }), $rootScope.$on("addAccount", function(event, res) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addAccount.html",
            controller: "AddaccountCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    })
}]), angular.module("angularProjectApp").controller("SignupCtrl", ["$rootScope", "$scope", "Auth", "$location", "localStorageService", "profile", function($rootScope, $scope, Auth, $location, localStorageService, profile) {
    $scope.init = function() {
        $scope.errorMessage = ""
    }, $scope.signUp = function() {
        $scope.email && $scope.password && $scope.firstName && $scope.lastName && $scope.phone ? ($scope.errorMessage = "", $scope.loading = !0, profile.signUp($scope.email.toLowerCase(), $scope.password, $scope.firstName, $scope.lastName, $scope.phone).then(function() {
            Auth.logIn($scope.email.toLowerCase(), $scope.password, "/Passengers").then(function() {
                $scope.loading = !1, $location.path("/booking")
            }, function(err) {
                $scope.errorMessage = err.message, $scope.loading = !1
            })
        }, function() {
            $scope.loading = !1, $scope.errorMessage = "Sign up failed, please try again"
        })) : $scope.errorMessage = "Please fill in all the fields"
    }, $scope.init()
}]), angular.module("angularProjectApp").controller("BookingmapCtrl", ["$scope", "$rootScope", "tripRequest", "$interval", "$modal", "Auth", "profile", "toastr", "$location", "$timeout", "stripe", "$http", "bookingAgent", "localStorageService", "addressreader", function($scope, $rootScope, tripRequest, $interval, $modal, Auth, profile, toastr, $location, $timeout, stripe, $http, bookingAgent, localStorageService, addressreader) {
    $scope.init = function() {
        localStorageService.get("User").newBookingAgentWebUI && $location.path("/concierge"), $scope.slider = {
            value: 0,
            options: {
                floor: 0,
                ceil: 40,
                showTicks: !0,
                step: 5
            }
        }, $scope.sendReceiptToPassenger = !0, $timeout(function() {
            var map = $scope.mapControl.getGMap();
            google.maps.event.trigger(map, "resize")
        }, 250), $scope.$watch("billingType", function(NewValue, OldValue) {
            angular.element("#bookingInput_firstName").hide(), angular.element("#bookingInput_lastName").hide(), angular.element("#bookingInput_emailName").hide(), angular.element("#bookingInput_phoneNumber").hide(), angular.element("#bookingInput_dmcPayment").hide(), angular.element("#bookingInput_CTA").hide(), angular.element("#bookingInput_creditCardNumber").hide(), angular.element("#bookingInput_creditCardDate").hide(), angular.element("#bookingInput_creditCardCCV").hide(), angular.element("#bookingInput_special").hide(), angular.element("#bookingInput_receipt").hide(), void 0 != NewValue && (angular.element("#bookingInput_firstName").show(), angular.element("#bookingInput_lastName").show(), angular.element("#bookingInput_emailName").show(), angular.element("#bookingInput_phoneNumber").show(), $(".flag-dropdown").show(), angular.element("#bookingInput_dmcPayment").show(), angular.element("#bookingInput_CTA").show(), angular.element("#bookingInput_special").show(), angular.element("#bookingInput_receipt").show(), angular.element("#bookingInput_creditCardNumber").hide(), angular.element("#bookingInput_creditCardDate").hide(), angular.element("#bookingInput_creditCardCCV").hide(), "CC Billing" == NewValue && (angular.element("#bookingInput_creditCardNumber").show(), angular.element("#bookingInput_creditCardDate").show(), angular.element("#bookingInput_creditCardCCV").show()))
        }, !0), $scope.map = {
            center: {
                latitude: 37,
                longitude: -122
            },
            zoom: 8
        }, tripRequest.from && tripRequest.to ? ($scope.fromText = tripRequest.fromText, $scope.toText = tripRequest.toText, $scope.from = tripRequest.from, $scope.to = tripRequest.to) : ($scope.fromText = "", $scope.toText = "", $scope.from = "", $scope.to = ""), $scope.userType = profile.getUserTypeFromLocal(), 1 == Auth.checkLoggedIn() ? "/Passengers" == $scope.userType ? ($scope.paymentMethods = profile.getPaymentFromLocalStorage(), $scope.paymentMethods && ($scope.selectedCard = $scope.paymentMethods[0]), $scope.businessPaymentMethods = profile.getBusinessPaymentFromLocalStorage(), $scope.showSignUp = !1, $scope.showConfirm = !0, $scope.showBooking = !1) : "/BookingAgents" == $scope.userType && ($scope.showSignUp = !1, $scope.showConfirm = !1, $scope.showBooking = !0, $scope.billingMethods = profile.getBillingMethodsFromLocal(), $scope.p2p = profile.getP2pFromLocal(), $scope.fees = profile.getPaymentFeesFromLocal(), $scope.tipType = profile.getTipTypeFromLocal(), $scope.tipPercentage = profile.getTipPercentageFromLocal(), "fixed" == $scope.tipType && ($scope.slider.value = $scope.tipPercentage), $scope.phonePlaceholder = "Phone", $timeout(function() {
            bookingAgent.trips.getSelectedTrip().then(function(res) {
                res.passenger_first_name && ($scope.rebookingTrip = res, $scope.firstName = res.passenger_first_name, $scope.email = res.passenger_email, $scope.lastName = res.passenger_last_name, $scope.phone = res.passenger_phone.number, $scope.dmcPaymentMethod = res.dmc_payment_method, $scope.rebooking = !0, $scope.showSameDriver = !0)
            })
        }, 1e3)) : ($scope.showSignUp = !0, $scope.showConfirm = !1, $scope.showBooking = !1), $scope.isOpen = !1, $scope.futureDate = new Date, $scope.bookingType = "now", $scope.instantP2p = "instant", $scope.mapControl = {}, $scope.errorMessage = "", $scope.errorMessageBooking = "", $scope.firstName = "", $scope.lastName = "", $scope.email = "", $scope.paymentMethod = ""
    }, $scope.selectCard = function(card) {
        $scope.selectedCard = card
    }, $scope.signup = function() {
        $rootScope.$broadcast("signUp")
    }, $scope.login = function() {
        $rootScope.$broadcast("logIn")
    }, $scope.addCard = function() {
        $rootScope.$broadcast("addCard")
    }, $scope.book = function() {
        if ($scope.from.geometry && ($scope.fromStreet = void 0, $scope.convertedFrom = addressreader.convertAddress($scope.from)), $scope.to.geometry && ($scope.toStreet = void 0, $scope.convertedTo = addressreader.convertAddress($scope.to)), "hourly" == $scope.instantP2p)
            if ("/BookingAgents" == $scope.userType)
                if ($scope.selectedBilling.first_name && "" == $scope.firstName) $scope.errorMessageBooking = "Please fill in first name";
                else if ($scope.selectedBilling.last_name && "" == $scope.lastName) $scope.errorMessageBooking = "Please fill in last name";
        else if ($scope.selectedBilling.email && "" == $scope.email) $scope.errorMessageBooking = "Please fill in email";
        else if ($scope.selectedBilling.phone && "" == $scope.phone) $scope.errorMessageBooking = "Please fill in phone";
        else if ($scope.selectedBilling.payment_required && "" == $scope.dmcPaymentMethod) $scope.errorMessageBooking = "Please fill in payment method";
        else {
            var telInput = $("#bookingInput_phoneNumber"),
                country = telInput.intlTelInput("getSelectedCountryData"),
                phoneNumber = {
                    country_code: "+" + country.dialCode,
                    number: $scope.phone,
                    is_mobile: !1,
                    inactive: !1
                };
            $scope.tripParams = {
                sendPassengerReceiptEmail: $scope.sendReceiptToPassenger,
                gratuity: $scope.slider.value,
                passenger_first_name: $scope.firstName,
                passenger_email: $scope.email,
                passenger_last_name: $scope.lastName,
                passenger_phone: phoneNumber,
                dmc_payment_method: $scope.dmcPaymentMethod,
                dmc_payment_label: $scope.selectedBilling.payment_label,
                dmc_payment_required: $scope.selectedBilling.payment_required,
                dmc_booking_fee: $scope.fees.hotel,
                transportClassIndex: 0,
                transportTypeIndex: parseInt($scope.carType),
                submitted_claim: !1,
                was_requeue: !1,
                estimated_cost: $scope.estimate,
                hourly: !0,
                expectedHours: $scope.hours,
                request_date: moment().format(),
                rate_per_mile: 0,
                base_fare: 0,
                rate_per_minute: 0,
                fixed_fee: 0,
                minimum_charge: 0,
                notes: $scope.specialNotes,
                pickup_geo: $scope.convertedFrom.geo,
                pickup_address: $scope.convertedFrom.address
            }, $scope.selectedBilling.payment_required || $scope.selectedBilling.is_cc || ($scope.tripParams.payment = $scope.selectedBilling.DMCPaymentMethod.paymentMethod), "now" == $scope.bookingType ? ($scope.tripParams.trip_date = moment().format(), $scope.tripParams.status = "instant", $scope.tripParams.was_future = !1) : ($scope.tripParams.trip_date = moment($scope.futureDate).format(), $scope.tripParams.status = "future", $scope.tripParams.was_future = !0), $scope.email ? $scope.modalInstance = $modal.open({
                templateUrl: "/views/modals/confirmpassengeremail.html",
                controller: "ConfirmemailCtrl",
                backdrop: !0,
                keyboard: !1,
                animation: !1,
                resolve: {
                    email: function() {
                        return $scope.email
                    }
                }
            }) : toastr.error("invalid email"), $scope.modalInstance.result.then(function() {
                if ($scope.loading = !0, $scope.selectedBilling.is_cc) {
                    var expirationTime = $scope.card.date.split("/");
                    stripe.card.createToken({
                        number: $scope.card.number,
                        cvc: $scope.card.cvv,
                        exp_month: expirationTime[0],
                        exp_year: expirationTime[1]
                    }).then(function(res) {
                        var newPaymentMethod = {
                            inactive: !1,
                            id: "SINGLE_USE",
                            is_apple_pay: !1,
                            redacted_number: res.card.last4,
                            card_brand: res.card.brand,
                            card_id: res.id,
                            card_name: "No Name"
                        };
                        $scope.tripParams.payment = newPaymentMethod, "instant" == $scope.tripParams.status ? $scope.carType ? $scope.hours >= 2 ? $scope.bookPreparedRequest() : (toastr.error("You have to book a car for a minimum of 2 hours"), $scope.loading = !1) : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : "future" == $scope.tripParams.status && moment($scope.tripParams.trip_date) > moment().add(30, "minutes") ? $scope.carType ? $scope.hours >= 2 ? $scope.bookPreparedRequest() : (toastr.error("You have to book a car for a minimum of 2 hours"), $scope.loading = !1) : toastr.error("You need to select either Sedan or SUV") : ($scope.loading = !1, toastr.error("Future trips need to be in at least 30 minutes"))
                    }, function(err) {
                        $scope.errorMessage = "Error creating a token for your card", $scope.loading = !1
                    })
                } else "instant" == $scope.tripParams.status ? $scope.carType ? $scope.hours >= 2 ? $scope.bookPreparedRequest() : (toastr.error("You have to book a car for a minimum of 2 hours"), $scope.loading = !1) : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : "future" == $scope.tripParams.status && moment($scope.tripParams.trip_date) > moment().add(30, "minutes") ? $scope.carType ? $scope.hours >= 2 ? $scope.bookPreparedRequest() : (toastr.error("You have to book a car for a minimum of 2 hours"), $scope.loading = !1) : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : ($scope.loading = !1, toastr.error("Future trips need to be in at least 30 minutes"))
            }, function() {})
        } else "/Passengers" == $scope.userType && ($scope.tripParams = {
            gratuity: $scope.slider.value,
            passenger_first_name: $scope.user.first_name,
            passenger_email: $scope.user.email,
            passenger_last_name: $scope.user.last_name,
            passenger_phone: $scope.user.telephone,
            payment: $scope.selectedCard,
            hourly: !0,
            expectedHours: $scope.hours,
            request_date: moment().format(),
            transportClassIndex: 0,
            transportTypeIndex: parseInt($scope.carType),
            rate_per_mile: 0,
            base_fare: 0,
            rate_per_minute: 0,
            fixed_fee: 0,
            minimum_charge: 0,
            pickup_geo: $scope.convertedFrom.geo,
            pickup_address: $scope.convertedFrom.address
        }, "now" == $scope.bookingType ? ($scope.tripParams.trip_date = moment().format(), $scope.tripParams.status = "instant", $scope.tripParams.was_future = !1) : ($scope.tripParams.trip_date = moment($scope.futureDate).format(), $scope.tripParams.status = "future", $scope.tripParams.was_future = !0), "instant" == $scope.tripParams.status ? ($scope.loading = !0, $scope.hours >= 2 ? $scope.bookPreparedRequest() : (toastr.error("You have to book a car for a minimum of 2 hours"), $scope.loading = !1)) : "future" == $scope.tripParams.status && moment($scope.tripParams.trip_date) > moment().add(30, "minutes") ? $scope.carType ? $scope.hours >= 2 ? $scope.bookPreparedRequest() : (toastr.error("You have to book a car for a minimum of 2 hours"), $scope.loading = !1) : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : ($scope.loading = !1, toastr.error("Future trips need to be in at least 30 minutes")));
        else if ($scope.user = profile.getUser(), $scope.from.geometry && $scope.to.geometry && $scope.bookingType)
            if ("/BookingAgents" == $scope.userType)
                if ($scope.selectedBilling.first_name && "" == $scope.firstName) $scope.errorMessageBooking = "Please fill in first name";
                else if ($scope.selectedBilling.last_name && "" == $scope.lastName) $scope.errorMessageBooking = "Please fill in last name";
        else if ($scope.selectedBilling.email && "" == $scope.email) $scope.errorMessageBooking = "Please fill in email";
        else if ($scope.selectedBilling.phone && "" == $scope.phone) $scope.errorMessageBooking = "Please fill in phone";
        else if ($scope.selectedBilling.payment_required && "" == $scope.dmcPaymentMethod) $scope.errorMessageBooking = "Please fill in payment method";
        else {
            var telInput = $("#bookingInput_phoneNumber"),
                country = telInput.intlTelInput("getSelectedCountryData"),
                phoneNumber = {
                    country_code: "+" + country.dialCode,
                    number: $scope.phone,
                    is_mobile: !1,
                    inactive: !1
                };
            $scope.tripParams = {
                sendPassengerReceiptEmail: $scope.sendReceiptToPassenger,
                gratuity: $scope.slider.value,
                passenger_first_name: $scope.firstName,
                passenger_email: $scope.email,
                passenger_last_name: $scope.lastName,
                passenger_phone: phoneNumber,
                dmc_payment_method: $scope.dmcPaymentMethod,
                dmc_payment_label: $scope.selectedBilling.payment_label,
                dmc_payment_required: $scope.selectedBilling.payment_required,
                dmc_booking_fee: $scope.fees.hotel,
                transportClassIndex: 0,
                transportTypeIndex: parseInt($scope.carType),
                submitted_claim: !1,
                was_requeue: !1,
                estimated_cost: $scope.estimate,
                hourly: 0,
                request_date: moment().format(),
                rate_per_mile: 0,
                base_fare: 0,
                rate_per_minute: 0,
                fixed_fee: 0,
                minimum_charge: 0,
                notes: $scope.specialNotes,
                dropoff_geo: $scope.convertedTo.geo,
                dropoff_address: $scope.convertedTo.address,
                pickup_geo: $scope.convertedFrom.geo,
                pickup_address: $scope.convertedFrom.address
            }, $scope.selectedBilling.payment_required || $scope.selectedBilling.is_cc || ($scope.tripParams.payment = $scope.selectedBilling.DMCPaymentMethod.paymentMethod), "now" == $scope.bookingType ? ($scope.tripParams.trip_date = moment().format(), $scope.tripParams.status = "instant", $scope.tripParams.was_future = !1) : ($scope.tripParams.trip_date = moment($scope.futureDate).format(), $scope.tripParams.status = "future", $scope.tripParams.was_future = !0), $scope.email ? $scope.modalInstance = $modal.open({
                templateUrl: "/views/modals/confirmpassengeremail.html",
                controller: "ConfirmemailCtrl",
                backdrop: !0,
                keyboard: !1,
                animation: !1,
                resolve: {
                    email: function() {
                        return $scope.email
                    }
                }
            }) : toastr.error("invalid email"), $scope.modalInstance.result.then(function() {
                if ($scope.loading = !0, $scope.selectedBilling.is_cc) {
                    var expirationTime = $scope.card.date.split("/");
                    stripe.card.createToken({
                        number: $scope.card.number,
                        cvc: $scope.card.cvv,
                        exp_month: expirationTime[0],
                        exp_year: expirationTime[1]
                    }).then(function(res) {
                        var newPaymentMethod = {
                            inactive: !1,
                            id: "SINGLE_USE",
                            is_apple_pay: !1,
                            redacted_number: res.card.last4,
                            card_brand: res.card.brand,
                            card_id: res.id,
                            card_name: "No Name"
                        };
                        $scope.tripParams.payment = newPaymentMethod, "instant" == $scope.tripParams.status ? $scope.carType ? $scope.bookPreparedRequest() : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : "future" == $scope.tripParams.status && moment($scope.tripParams.trip_date) > moment().add(30, "minutes") ? $scope.carType ? $scope.bookPreparedRequest() : toastr.error("You need to select either Sedan or SUV") : ($scope.loading = !1, toastr.error("Future trips need to be in at least 30 minutes"))
                    }, function(err) {
                        $scope.errorMessage = "Error creating a token for your card", $scope.loading = !1
                    })
                } else "instant" == $scope.tripParams.status ? $scope.carType ? $scope.bookPreparedRequest() : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : "future" == $scope.tripParams.status && moment($scope.tripParams.trip_date) > moment().add(30, "minutes") ? $scope.carType ? $scope.bookPreparedRequest() : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : ($scope.loading = !1, toastr.error("Future trips need to be in at least 30 minutes"))
            }, function() {})
        } else "/Passengers" == $scope.userType && $scope.selectedCard ? ($scope.tripParams = {
            gratuity: $scope.slider.value,
            passenger_first_name: $scope.user.first_name,
            passenger_email: $scope.user.email,
            passenger_last_name: $scope.user.last_name,
            passenger_phone: $scope.user.telephone,
            payment: $scope.selectedCard,
            estimated_cost: $scope.estimate,
            hourly: 0,
            request_date: moment().format(),
            transportClassIndex: 0,
            transportTypeIndex: parseInt($scope.carType),
            rate_per_mile: 0,
            base_fare: 0,
            rate_per_minute: 0,
            fixed_fee: 0,
            minimum_charge: 0,
            dropoff_geo: $scope.convertedTo.geo,
            dropoff_address: $scope.convertedTo.address,
            pickup_geo: $scope.convertedFrom.geo,
            pickup_address: $scope.convertedFrom.address
        }, "now" == $scope.bookingType ? ($scope.tripParams.trip_date = moment().format(), $scope.tripParams.status = "instant", $scope.tripParams.was_future = !1) : ($scope.tripParams.trip_date = moment($scope.futureDate).format(), $scope.tripParams.status = "future", $scope.tripParams.was_future = !0), $scope.loading = !0, "instant" == $scope.tripParams.status ? $scope.bookPreparedRequest() : "future" == $scope.tripParams.status && moment($scope.tripParams.trip_date) > moment().add(30, "minutes") ? $scope.carType ? $scope.bookPreparedRequest() : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : ($scope.loading = !1, toastr.error("Future trips need to be in at least 30 minutes"))) : $rootScope.$broadcast("addCard");
        else if ("/BookingAgents" == $scope.userType && "p2p" == $scope.instantP2p) {
            var telInput = $("#bookingInput_phoneNumber"),
                country = telInput.intlTelInput("getSelectedCountryData"),
                phoneNumber = {
                    country_code: "+" + country.dialCode,
                    number: $scope.phone,
                    is_mobile: !1,
                    inactive: !1
                },
                from = $scope.selectedP2p.pointAGeo,
                to = $scope.selectedP2p.pointBGeo,
                fromMarker = {
                    lat: from[1],
                    lng: from[0]
                },
                toMarker = {
                    lat: to[1],
                    lng: to[0]
                };
            $scope.selectedP2p.id = $scope.selectedP2p.id.replace("reverse", ""), $scope.tripParams = {
                sendPassengerReceiptEmail: $scope.sendReceiptToPassenger,
                gratuity: $scope.slider.value,
                passenger_first_name: $scope.firstName,
                passenger_email: $scope.email,
                passenger_last_name: $scope.lastName,
                passenger_phone: phoneNumber,
                dmc_payment_method: $scope.dmcPaymentMethod,
                dmc_payment_label: $scope.selectedBilling.payment_label,
                dmc_payment_required: $scope.selectedBilling.payment_required,
                dmc_booking_fee: $scope.fees.hotel,
                transportClassIndex: 0,
                transportTypeIndex: parseInt($scope.carType),
                submitted_claim: !1,
                was_requeue: !1,
                estimated_cost: $scope.estimate,
                hourly: 0,
                request_date: moment().format(),
                rate_per_mile: 0,
                base_fare: 0,
                rate_per_minute: 0,
                fixed_fee: 0,
                minimum_charge: 0,
                dropoff_geo: toMarker,
                dropoff_address: $scope.selectedP2p.addressB,
                pickup_geo: fromMarker,
                pickup_address: $scope.selectedP2p.addressA,
                notes: $scope.specialNotes,
                pointToPointCharge: $scope.selectedP2p.rates[0].transportTypes[$scope.carType].pointToPointRates.open,
                pointToPointMarkup: $scope.selectedP2p.markup,
                dmcPointToPointId: $scope.selectedP2p.id
            }, "now" == $scope.bookingType ? ($scope.tripParams.trip_date = moment().format(), $scope.tripParams.status = "instant", $scope.tripParams.was_future = !1) : ($scope.tripParams.trip_date = moment($scope.futureDate).format(), $scope.tripParams.status = "future", $scope.tripParams.was_future = !0), $scope.selectedBilling.payment_required || $scope.selectedBilling.is_cc || ($scope.tripParams.payment = $scope.selectedBilling.DMCPaymentMethod.paymentMethod), $scope.email ? $scope.modalInstance = $modal.open({
                templateUrl: "/views/modals/confirmpassengeremail.html",
                controller: "ConfirmemailCtrl",
                backdrop: !0,
                keyboard: !1,
                animation: !1,
                resolve: {
                    email: function() {
                        return $scope.email
                    }
                }
            }) : toastr.error("invalid email"), $scope.modalInstance.result.then(function() {
                if ($scope.selectedBilling.is_cc) {
                    var expirationTime = $scope.card.date.split("/");
                    stripe.card.createToken({
                        number: $scope.card.number,
                        cvc: $scope.card.cvv,
                        exp_month: expirationTime[0],
                        exp_year: expirationTime[1]
                    }).then(function(res) {
                        var newPaymentMethod = ($scope.email, $scope.phone, {
                            inactive: !1,
                            id: "SINGLE_USE",
                            is_apple_pay: !1,
                            redacted_number: res.card.last4,
                            card_brand: res.card.brand,
                            card_id: res.id,
                            card_name: "No Name"
                        });
                        $scope.tripParams.payment = newPaymentMethod, "instant" == $scope.tripParams.status ? $scope.carType ? $scope.bookPreparedRequest() : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : "future" == $scope.tripParams.status && moment($scope.tripParams.trip_date) > moment().add(30, "minutes") ? $scope.carType ? $scope.bookPreparedRequest() : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : ($scope.loading = !1, toastr.error("Future trips need to be in at least 30 minutes"))
                    }, function(err) {
                        $scope.errorMessage = "Error creating a token for your card", $scope.loading = !1
                    })
                } else "instant" == $scope.tripParams.status ? $scope.bookPreparedRequest() : "future" == $scope.tripParams.status && moment($scope.tripParams.trip_date) > moment().add(30, "minutes") ? $scope.carType ? $scope.bookPreparedRequest() : ($scope.loading = !1, toastr.error("You need to select either Sedan or SUV")) : ($scope.loading = !1, toastr.error("Future trips need to be in at least 30 minutes"))
            }, function() {})
        } else toastr.error("Please select from and to from dropdown")
    }, $scope.openCalendar = function(e) {
        e.preventDefault(), e.stopPropagation(), $scope.isOpen = !0
    }, $scope.getEstimate = function() {
        $scope.from.geometry && tripRequest.getMarkets($scope.from).then(function(res) {
            $scope.market = res, generateDriverArray($scope.market.drivers)
        }, function() {}), $scope.from.geometry && $scope.to.geometry && tripRequest.getEstimate($scope.from, $scope.to).then(function(res) {
            $scope.estimate = res.estimateByTransportTypes
        }, function() {})
    }, $scope.$watch("to", function() {
        $scope.errorMessage = "", $scope.estimate = "", $scope.from && $scope.to && (calcRoute(), $scope.getEstimate())
    }), $scope.$watch("carType", function() {
        "instant" == $scope.instantP2p ? $scope.tip = $scope.estimate[$scope.carType].estimatedCost * ($scope.slider.value / 100) : "hourly" == $scope.instantP2p ? $scope.tip = $scope.market.markets[0].transportClasses[0].transportTypes[$scope.carType].rates.ratePerHour * $scope.hours * ($scope.slider.value / 100) : "p2p" == $scope.instantP2p && ($scope.tip = ($scope.selectedP2p.rates[0].transportTypes[$scope.carType].pointToPointRates.open + $scope.selectedP2p.markup.value) * ($scope.slider.value / 100))
    }), $scope.$watch("slider.value", function() {
        "instant" == $scope.instantP2p ? $scope.tip = $scope.estimate[$scope.carType].estimatedCost * ($scope.slider.value / 100) : "hourly" == $scope.instantP2p ? $scope.tip = $scope.market.markets[0].transportClasses[0].transportTypes[$scope.carType].rates.ratePerHour * $scope.hours * ($scope.slider.value / 100) : "p2p" == $scope.instantP2p && ($scope.tip = ($scope.selectedP2p.rates[0].transportTypes[$scope.carType].pointToPointRates.open + $scope.selectedP2p.markup.value) * ($scope.slider.value / 100))
    }), $scope.$watch("from", function() {
        $scope.from && $scope.getEstimate()
    }), $scope.$watch("to", function() {
        $scope.estimate = "", $scope.from && $scope.to && (calcRoute(), $scope.getEstimate())
    }), $scope.$watch("billingType", function() {
        angular.forEach($scope.billingMethods, function(billingMethod, key) {
            $scope.billingType == billingMethod.payment_type && ($scope.selectedBilling = billingMethod, $scope.phonePlaceholder = "Phone ", $scope.phonePlaceholder += $scope.selectedBilling.phone ? "(required)" : "")
        })
    }), $interval(function() {
        1 == Auth.checkLoggedIn() ? ($scope.userType = profile.getUserTypeFromLocal(), "/Passengers" == $scope.userType && ($scope.showSignUp = !1, $scope.showConfirm = !0, $scope.showBooking = !1, $scope.paymentMethods = profile.getPaymentFromLocalStorage())) : ($scope.showSignUp = !0, $scope.showConfirm = !1, $scope.showBooking = !1)
    }, 1e3), $scope.closeModal = function() {
        $scope.modalInstance.close()
    };
    var calcRoute = function() {
        if ($scope.from.geometry && $scope.to.geometry) {
            var map = (new google.maps.Polyline({
                    strokeColor: "#90268e",
                    strokeOpacity: .6,
                    strokeWeight: 5
                }), $scope.mapControl.getGMap()),
                start = new google.maps.LatLng($scope.from.geometry.location.lat(), $scope.from.geometry.location.lng()),
                end = new google.maps.LatLng($scope.to.geometry.location.lat(), $scope.to.geometry.location.lng()),
                bounds = new google.maps.LatLngBounds;
            bounds.extend(start), bounds.extend(end), map.fitBounds(bounds);
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function(response, status) {
                status == google.maps.DirectionsStatus.OK ? (directionsDisplay.setDirections(response), directionsDisplay.setMap(map)) : alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status)
            })
        }
    };
    $scope.showP2p = function(p2p) {
        if ($scope.selectedP2p == p2p) $scope.selectedP2p = {}, $scope.market = void 0;
        else {
            $scope.selectedP2p = p2p, $scope.market = {}, $scope.market.markets = [], $scope.market.markets[0] = {}, $scope.market.markets[0].transportClasses = {}, $scope.market.markets[0].transportClasses = $scope.selectedP2p.rates;
            var from = p2p.pointAGeo,
                to = p2p.pointBGeo
        }
        if (from && to) {
            var map = $scope.mapControl.getGMap(),
                start = new google.maps.LatLng(from[1], from[0]),
                end = new google.maps.LatLng(to[1], to[0]);
            $scope.fromMarker = {
                lat: from[1],
                lng: from[0]
            }, $scope.toMarker = {
                lat: to[1],
                lng: to[0]
            };
            var bounds = new google.maps.LatLngBounds;
            bounds.extend(start), bounds.extend(end), map.fitBounds(bounds);
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function(response, status) {
                status == google.maps.DirectionsStatus.OK ? (directionsDisplay.setDirections(response), directionsDisplay.setMap(map)) : alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status)
            })
        } else $scope.fromMarker = !1, $scope.toMarker = !1, directionsDisplay.setMap(null)
    };
    var updateMapInterval, directionsService = new google.maps.DirectionsService,
        polylineOptionsActual = new google.maps.Polyline({
            strokeColor: "#90268e",
            strokeOpacity: .6,
            strokeWeight: 5
        }),
        directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: !0,
            polylineOptions: polylineOptionsActual
        }),
        generateDriverArray = function(drivers) {
            $scope.driverMarkers = [], angular.forEach(drivers, function(driver) {
                var marker = {
                    id: driver.id,
                    driverIcon: "https://d8w0otup5lda.cloudfront.net/greenCar.png",
                    coords: {
                        latitude: driver.geo_location[1],
                        longitude: driver.geo_location[0]
                    },
                    onClick: function() {}
                };
                $scope.driverMarkers.push(marker)
            })
        };
    updateMapInterval = $interval(function() {
        if ("/booking" == $location.path()) {
            var navContainer = document.getElementById("navContainer");
            if (navContainer && (navContainer.style.maxHeight = window.innerHeight - 125 + "px"), document.getElementsByClassName("angular-google-map-container")[0]) {
                var mapsContainer = document.getElementsByClassName("angular-google-map-container")[0];
                mapsContainer.style.height = window.innerHeight - 80 + "px"
            }
        } else $interval.cancel(updateMapInterval), updateMapInterval = void 0
    }, 10), $scope.bookPreparedRequest = function() {
        $scope.loading = !0, $scope.tripParams.passenger_phone.number ? 2 == $scope.tripParams.transportTypeIndex ? "future" == $scope.tripParams.status ? void 0 != $scope.tripParams.notes && "" != $scope.tripParams.notes ? tripRequest.book($scope.tripParams).then(function() {
            $scope.loading = !1, toastr.success("Trip booked")
        }, function(err) {
            $scope.loading = !1, $scope.errorViewer.display(err)
        }) : ($scope.loading = !1, toastr.error("You need to add a note in order to book this trip")) : ($scope.loading = !1, toastr.error("You can only book a future ride for custom")) : tripRequest.book($scope.tripParams).then(function() {
            $scope.loading = !1, toastr.success("Trip booked")
        }, function(err) {
            $scope.loading = !1, $scope.errorViewer.display(err)
        }) : ($scope.loading = !1, toastr.error("Phone number is not in the right format"))
    }, $scope.checkForSameDriver = function() {
        angular.forEach($scope.market.drivers, function(driver) {
            driver.id == $scope.rebookingTrip.driver_id ? ($scope.rebookingDriver = driver.id, $scope.carType = driver.transportTypeIndex[0], toastr.success("The trip will be sent to " + driver.first_name + " " + driver.last_name + " first")) : $scope.showSameDriver = !1
        }), $scope.rebookingDriver || toastr.error("This driver is not available at the moment")
    }, $("body").addClass("stop-scrolling"), $scope.init()
}]), angular.module("angularProjectApp").service("tripRequest", ["$location", "$q", "$http", "$rootScope", "localStorageService", function($location, $q, $http, $rootScope, localStorageService) {
    var tripRequest = this,
        init = function() {
            tripRequest.from = "", tripRequest.to = "", tripRequest.formText = "", tripRequest.toText = ""
        };
    return tripRequest.bookFromHome = function(from, to, fromText, toText) {
        from && to && ($location.path("/booking"), tripRequest.from = from, tripRequest.to = to, tripRequest.formText = fromText, tripRequest.toText = toText)
    }, tripRequest.book = function(tripParams) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/TripRequests", tripParams).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tripRequest.getEstimate = function(from, to, tClass, tType) {
        var defer = $q.defer(),
            query = "pickupGeo=[" + from.geometry.location.lng() + "," + from.geometry.location.lat() + "]&dropoffGeo=[" + to.geometry.location.lng() + "," + to.geometry.location.lat() + "]";
        return void 0 != tClass && void 0 != tType && (query = query + "&transportClass=" + tClass + "&transportType=" + tType), $http.get($rootScope.endPoint + "/TripRequests/estimate?" + query).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tripRequest.getMultiEstimate = function(trips) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/TripRequests/estimateForBookingAgent", trips).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tripRequest.getMarkets = function(from) {
        var defer = $q.defer(),
            query = "geoPoint=[" + from.geometry.location.lng() + "," + from.geometry.location.lat() + "]";
        return $http.get($rootScope.endPoint + "/Markets/findMarketsWithGEOPoint?" + query).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tripRequest.editTrip = function(trip) {
        var defer = $q.defer();
        return $http.put($rootScope.endPoint + "/TripRequests/saveAfterEdit", trip).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tripRequest.pullWithToken = function(token) {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/TripRequestWebTokens/validate?token=" + token).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tripRequest.getLogs = function(trip) {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/TripRequests/getLogs?id=" + trip.id).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tripRequest.postArray = function(trips) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/TripRequests/bookFromBookingAgent", trips).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, init(), tripRequest
}]), angular.module("angularProjectApp").service("profile", ["$q", "$http", "$rootScope", "localStorageService", function($q, $http, $rootScope, localStorageService) {
    var profile = this;
    return profile.signUp = function(email, password, firstName, lastName, phone) {
        var defer = $q.defer(),
            phoneNumber = {
                country_code: "+1",
                number: phone,
                is_mobile: !1,
                inactive: !1
            };
        return $http.post($rootScope.endPoint + "/Passengers", {
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName,
            telephone: phoneNumber
        }).success(function(res) {
            localStorageService.set("Auth", res.id), localStorageService.set("User", res.user), $http.defaults.headers.common.Authorization = "Token " + res.id, defer.resolve()
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, profile.refreshUser = function() {
        $http.get($rootScope.endPoint + localStorageService.get("Type") + "/" + localStorageService.get("User").id).success(function(res) {
            localStorageService.set("User", res)
        }).error(function(status, error) {})
    }, profile.getPaymentFromLocalStorage = function() {
        if (localStorageService.get("User")) {
            var paymentMethod = localStorageService.get("User").payment_method;
            return paymentMethod != [] ? paymentMethod : !1
        }
        return !1
    }, profile.getBusinessPaymentFromLocalStorage = function() {
        return localStorageService.get("businessPayment") ? localStorageService.get("businessPayment") : !1
    }, profile.getUser = function() {
        return localStorageService.get("User")
    }, profile.getBillingMethodsFromLocal = function() {
        return "/BookingAgents" == localStorageService.get("Type") ? localStorageService.get("Billing") : !1
    }, profile.getP2pFromLocal = function() {
        var p2ps = localStorageService.get("p2p"),
            p2pList = [];
        return angular.forEach(p2ps, function(p2p) {
            if (p2pList.push(p2p), p2p.canReverse) {
                var reversedP2p = angular.copy(p2p);
                reversedP2p.pointA = p2p.pointB, reversedP2p.pointB = p2p.pointA, reversedP2p.pointAGeo = p2p.pointBGeo, reversedP2p.pointBGeo = p2p.pointAGeo, reversedP2p.addressA = p2p.addressB, reversedP2p.addressB = p2p.addressA, reversedP2p.id = p2p.id + "reverse", p2pList.push(reversedP2p)
            }
        }), p2pList
    }, profile.getUserTypeFromLocal = function() {
        return localStorageService.get("Type")
    }, profile.getTipTypeFromLocal = function() {
        return localStorageService.get("TipType")
    }, profile.getTipPercentageFromLocal = function() {
        return localStorageService.get("TipPercentage")
    }, profile.getPaymentFeesFromLocal = function() {
        if ("/BookingAgents" == localStorageService.get("Type")) {
            var returnObj = {};
            return localStorageService.get("Referral") ? returnObj.referral = localStorageService.get("Referral") : returnObj.referral = 0, localStorageService.get("Booking") ? returnObj.hotel = localStorageService.get("Booking") : returnObj.hotel = 0, returnObj
        }
        return !1
    }, profile.getUser = function() {
        return localStorageService.get("User")
    }, profile.addCard = function(userToken) {
        var defer = $q.defer();
        if (localStorageService.get("User").stripe_id) $http.post($rootScope.endPoint + "/Stripe/customer/" + localStorageService.get("User").stripe_id + "/cards", {
            stripeToken: userToken
        }).success(function(res) {
            var newPaymentMethod = {
                    inactive: !1,
                    id: localStorageService.get("User").stripe_id,
                    is_apple_pay: !1,
                    redacted_number: res.last4,
                    card_brand: res.brand,
                    card_id: res.id,
                    card_name: "No Name"
                },
                oldUser = localStorageService.get("User");
            oldUser.payment_method.push(newPaymentMethod);
            var userToPost = oldUser;
            $http.put($rootScope.endPoint + localStorageService.get("Type") + "/" + localStorageService.get("User").id, userToPost).success(function(res) {
                defer.resolve()
            }).error(function(status, error) {
                defer.reject(status)
            })
        }).error(function(status, error) {
            defer.reject(status)
        });
        else {
            var userEmail = localStorageService.get("User").email,
                userId = localStorageService.get("User").id;
            $http.post($rootScope.endPoint + "/Stripe/customer", {
                stripeToken: userToken,
                customerDescription: userId + "__" + userEmail,
                amount: 100,
                receipt_email: userEmail,
                isAuth: !0
            }).success(function(res) {
                var newPaymentMethod = {
                        inactive: !1,
                        id: res.customer.id,
                        is_apple_pay: !1,
                        redacted_number: res.customer.sources.data[0].last4,
                        card_brand: res.customer.sources.data[0].brand,
                        card_id: res.customer.sources.data[0].id,
                        card_name: "No Name"
                    },
                    oldUser = localStorageService.get("User");
                oldUser.payment_method = [newPaymentMethod], oldUser.stripe_id = res.customer.id;
                var userToPost = oldUser;
                $http.put($rootScope.endPoint + localStorageService.get("Type") + "/" + localStorageService.get("User").id, userToPost).success(function(res) {
                    defer.resolve()
                }).error(function(status, error) {
                    defer.reject(status)
                })
            }).error(function(status, error) {
                defer.reject(status)
            })
        }
        return defer.promise
    }, profile.trips = {
        pullPast: function(skip, id) {
            var defer = $q.defer();
            return $http.get($rootScope.endPoint + "/Passengers/" + id + '/TripRequest?filter={"where":{"status":{"inq":["FINISHED","finished", "canceled"]}},"limit":10,"skip":' + skip + ',"include":["Passenger","Vehicle","Driver","TransportProvider"],"order":"trip_date DESC"}').success(function(res) {
                defer.resolve(res)
            }).error(function(err) {
                defer.reject(err)
            }), defer.promise
        },
        pullCurrent: function(skip, id) {
            var defer = $q.defer();
            return $http.get($rootScope.endPoint + "/Passengers/" + id + '/TripRequest?filter={"where":{"status":{"inq":["instant", "INSTANT", "started", "STARTED"]}},"include":["Passenger","Vehicle","Driver","TransportProvider"],"order":"trip_date ASC"}').success(function(res) {
                defer.resolve(res)
            }).error(function(err) {
                defer.reject(err)
            }), defer.promise
        },
        pullFuture: function(skip, id) {
            var defer = $q.defer();
            return $http.get($rootScope.endPoint + "/Passengers/" + id + '/TripRequest?filter={"where":{"status":{"inq":["future", "FUTURE", "pending", "PENDING", "van"]}},"include":["Passenger","Vehicle","Driver","TransportProvider"],"order":"trip_date ASC"}').success(function(res) {
                defer.resolve(res)
            }).error(function(err) {
                defer.reject(err)
            }), defer.promise
        },
        pullOne: function(id) {
            var defer = $q.defer();
            return $http.get($rootScope.endPoint + "/TripRequests/" + id + '?filter={"include":["Passenger","Vehicle","Driver","TransportProvider"]}').success(function(res) {
                defer.resolve(res)
            }).error(function(err) {
                defer.reject(err)
            }), defer.promise
        }
    }, profile.renewAccessToken = function() {
        localStorageService.get("User") && $http.post($rootScope.endPoint + localStorageService.get("Type") + "/" + localStorageService.get("User").id + "/accessTokens").success(function(res) {
            localStorageService.set("Auth", res.id), localStorageService.set("ttl", res.ttl)
        }).error(function(status, error) {})
    }, profile.saveUser = function(user) {
        var defer = $q.defer();
        return $http.put($rootScope.endPoint + localStorageService.get("Type") + "/" + localStorageService.get("User").id, user).success(function(res) {
            defer.resolve(res)
        }).error(function(err) {
            defer.reject(err)
        }), defer.promise
    }, profile.changePassword = function(password) {
        var defer = $q.defer();
        return $http.put($rootScope.endPoint + localStorageService.get("Type") + "/" + localStorageService.get("User").id, {
            password: password
        }).success(function(res) {
            defer.resolve(res)
        }).error(function(err) {
            defer.reject(err)
        }), defer.promise
    }, profile.getFaq = function() {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + localStorageService.get("Type") + "/support/getFAQs").success(function(res) {
            defer.resolve(res)
        }).error(function(err) {
            defer.reject(err)
        }), defer.promise
    }, profile
}]), angular.module("angularProjectApp").controller("AddcardCtrl", ["$scope", "$modalInstance", "profile", "stripe", "$http", function($scope, $modalInstance, profile, stripe, $http) {
    $scope.init = function() {
        $scope.errorMessage = ""
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }, $scope.addCard = function() {
        if ($scope.cardNumber && $scope.cvv && $scope.expiration) {
            $scope.errorMessage = "", $scope.loading = !0;
            var expirationTime = $scope.expiration.split("/");
            stripe.card.createToken({
                number: $scope.cardNumber,
                cvc: $scope.cvv,
                exp_month: expirationTime[0],
                exp_year: expirationTime[1]
            }).then(function(res) {
                $http.defaults.headers.post = {
                    "Content-Type": "application/json",
                    XCredential: "2FAA6B7C5A894E50AD77FC94B11278BC"
                }, profile.addCard(res.id).then(function(res) {
                    $http.defaults.headers.post = {
                        "Content-Type": "application/json"
                    }, profile.refreshUser(), $scope.loading = !1, $modalInstance.close()
                }, function(err) {
                    $scope.errorMessage = "Error adding your card", $http.defaults.headers.post = {
                        "Content-Type": "application/json"
                    }, $scope.loading = !1
                })
            }, function(err) {
                $scope.errorMessage = "Error creating a token for your card", $scope.loading = !1
            })
        } else $scope.errorMessage = "Please fill in all the fields"
    }
}]), angular.module("angularProjectApp").filter("phonenumber", function() {
    return function(number) {
        if (!number) return "";
        number = String(number);
        var formattedNumber = number,
            c = "1" == number[0] ? "1 " : "";
        number = "1" == number[0] ? number.slice(1) : number;
        var area = number.substring(0, 3),
            front = number.substring(3, 6),
            end = number.substring(6, 10);
        return front && (formattedNumber = c + "(" + area + ") " + front), end && (formattedNumber += "-" + end), formattedNumber
    }
}), angular.module("angularProjectApp").directive("phonenumberDirective", ["$filter", function($filter) {
    function link(scope, element, attributes) {
        scope.inputValue = scope.phonenumberModel, scope.phonenumberClass ? scope.inputClass = scope.phonenumberClass : scope.inputClass = "standardInput", scope.$watch("inputValue", function(value, oldValue) {
            value = String(value);
            var number = value.replace(/[^0-9]+/g, "");
            scope.phonenumberModel = number, scope.inputValue = $filter("phonenumber")(number)
        })
    }
    return {
        link: link,
        restrict: "E",
        scope: {
            phonenumberClass: "=class",
            phonenumberPlaceholder: "=placeholder",
            phonenumberModel: "=model"
        },
        template: '<input ng-model="inputValue" type="tel" class="{{inputClass}}" placeholder="{{phonenumberPlaceholder}}" title="Phonenumber (Format: (999) 9999-9999)">'
    }
}]), angular.module("angularProjectApp").controller("TripsCtrl", ["$scope", "bookingAgent", "$timeout", "localStorageService", "$interval", "profile", "toastr", "$location", "$modal", "$compile", "Dmc", function($scope, bookingAgent, $timeout, localStorageService, $interval, profile, toastr, $location, $modal, $compile, Dmc) {
    $scope.init = function() {
        $scope.map = {
            center: {
                latitude: 37,
                longitude: -122
            },
            zoom: 8
        }, $scope.mapControl = {}, $scope.tripdates = {
            startDate: null,
            endDate: null
        }, $scope.pastTripList = [], $scope.currentTripList = [], $scope.futureTripList = [], "/BookingAgents" == localStorageService.get("Type") ? (fetchBaPastTrips(), fetchBaCurrentTrips(), fetchBaFutureTrips()) : (fetchPassengerTripsPast(), fetchPassengerTripsCurrent(), fetchPassengerTripsFuture()), Dmc.bookingAgent.pull(localStorageService.get("User").dmc_id).then(function(res) {
            $scope.bas = res
        }, function(err) {}), tripsRefresh = $interval(function() {
            "/BookingAgents" == localStorageService.get("Type") ? (fetchBaCurrentTrips(), fetchBaFutureTrips()) : (fetchPassengerTripsCurrent(), fetchPassengerTripsFuture())
        }, 1e4)
    };
    var fetchBaPastTrips = function() {
            bookingAgent.trips.pullPast($scope.skipPast, localStorageService.get("User").dmc_id).then(function(res) {
                angular.forEach(res, function(trip) {
                    $scope.pastTripList.push(trip), $scope.pastLoading = !1
                })
            }, function(err) {})
        },
        fetchBaCurrentTrips = function() {
            bookingAgent.trips.pullCurrent($scope.skipCurrent, localStorageService.get("User").dmc_id).then(function(res) {
                $scope.currentTripList = res
            }, function(err) {})
        },
        fetchBaFutureTrips = function() {
            bookingAgent.trips.pullFuture($scope.skipFuture, localStorageService.get("User").dmc_id).then(function(res) {
                $scope.futureTripList = res
            }, function(err) {})
        },
        fetchPassengerTripsPast = function() {
            profile.trips.pullPast($scope.skipPast, localStorageService.get("User").id).then(function(res) {
                angular.forEach(res, function(trip) {
                    $scope.pastTripList.push(trip), $scope.pastLoading = !1
                })
            }, function(err) {})
        },
        fetchPassengerTripsCurrent = function() {
            profile.trips.pullCurrent($scope.skipCurrent, localStorageService.get("User").id).then(function(res) {
                $scope.currentTripList = res
            }, function(err) {})
        },
        fetchPassengerTripsFuture = function() {
            profile.trips.pullFuture($scope.skipFuture, localStorageService.get("User").id).then(function(res) {
                $scope.futureTripList = res
            }, function(err) {})
        };
    $scope.skipTripPast = function(newSkip) {
        $scope.skipPast = newSkip, $scope.pastLoading = !0, "/BookingAgents" == localStorageService.get("Type") ? fetchBaPastTrips() : fetchPassengerTripsPast()
    }, $scope.searchTrip = function() {
        var params = {};
        $scope.tripdates.startDate && (params = {
            where: {
                and: [{
                    trip_date: {
                        gte: $scope.tripdates.startDate
                    }
                }, {
                    trip_date: {
                        lte: $scope.tripdates.endDate
                    }
                }]
            }
        })
    }, $scope.resetSearch = function() {
        $scope.tripdates.startDate = null, $scope.tripdates.endDate = null, $scope.tripType = null
    }, $scope.viewTrip = function(trip) {
        $scope.selectedTrip = trip, $scope.showTripDetails = !0, $("html, body").animate({
            scrollTop: 0
        }, "fast"), $timeout(function() {
            var map = $scope.mapControl.getGMap();
            google.maps.event.trigger(map, "resize");
            var from = $scope.selectedTrip.pickup_geo,
                to = $scope.selectedTrip.dropoff_geo;
            $scope.fromMarker = from, $scope.toMarker = to;
            var start = new google.maps.LatLng(from.lat, from.lng),
                end = new google.maps.LatLng(to.lat, to.lng),
                bounds = new google.maps.LatLngBounds;
            bounds.extend(start), bounds.extend(end), map.fitBounds(bounds), from && to ? "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0 : ($scope.fromMarker = !1, $scope.toMarker = !1, polylineOptionsActual.setMap(null), "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0)
        }, 250), bookingAgent.trips.pullOne($scope.selectedTrip.id).then(function(res) {
            $scope.selectedTrip = res;
            var map = $scope.mapControl.getGMap();
            $scope.selectedTrip.polyline && (polylineOptionsActual = new google.maps.Polyline({
                path: google.maps.geometry.encoding.decodePath($scope.selectedTrip.polyline),
                strokeColor: "#90268e",
                strokeOpacity: .6,
                strokeWeight: 5
            }), polylineOptionsActual.setMap(map))
        }), bookingAgent.trips.pullLogs($scope.selectedTrip.id).then(function(res) {
            $scope.logs = res;
            var logArea = angular.element(document.getElementById("logArea"));
            logArea.empty(), angular.forEach($scope.logs, function(log, key) {
                key % 2 == 0 ? logArea.append($compile("<div style='padding: 10px;' class='list_odd'>" + log + "</div>")($scope)) : logArea.append($compile("<div style='padding: 10px;' class='list_even'>" + log + "</div>")($scope))
            })
        }), "instant" == $scope.selectedTrip.status && (currentTripRefresh = $interval(function() {
            bookingAgent.trips.pullOne($scope.selectedTrip.id).then(function(res) {
                $scope.selectedTrip = res
            })
        }, 5e3))
    }, $scope.closeTrip = function() {
        $scope.showTripDetails = !1, polylineOptionsActual.setMap(null)
    }, $scope.cancelTrip = function(id) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/confirmCancel.html",
            scope: $scope,
            controller: "CanceltripCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                trip: function() {
                    return $scope.selectedTrip
                }
            }
        }), $scope.modalInstance.result.then(function() {
            bookingAgent.trips.cancelTrip(id).then(function(res) {
                toastr.success("Trip canceled"), $scope.closeTrip()
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function() {})
    }, $scope.rebook = function(trip) {
        bookingAgent.trips.selectedTrip(trip).then(function(res) {
            $location.path("/concierge")
        })
    }, $scope.receiptDownload = function(trip) {
        $scope.receiptLoad = !0, bookingAgent.trips.downloadReceipt(trip).then(function(res) {
            window.open(res.result.Location, "_blank"), $scope.receiptLoad = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.receiptLoad = !1
        })
    }, $scope.confirmationDownload = function(trip) {
        $scope.confirmationLoad = !0, bookingAgent.trips.downloadConfirmation(trip).then(function(res) {
            window.open(res.result.Location, "_blank"), $scope.confirmationLoad = !1
        }, function() {
            $scope.errorViewer.display(err), $scope.confirmationLoad = !1
        })
    }, $scope.skipPast = 0, $scope.skipCurrent = 0, $scope.skipFuture = 0;
    var currentTripRefresh, tripsRefresh, updateMapInterval, polylineOptionsActual = new google.maps.Polyline({
        strokeColor: "#90268e",
        strokeOpacity: .6,
        strokeWeight: 5
    });
    updateMapInterval = $interval(function() {
        if ("/trips" == $location.path()) {
            var gMapContainer = $(".angular-google-map-container");
            gMapContainer && $(".angular-google-map-container").css("height", .5 * window.innerHeight + "px")
        } else $interval.cancel(updateMapInterval), updateMapInterval = void 0
    }, 200), $scope.editTrip = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/editTrip.html",
            scope: $scope,
            controller: "EdittripCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                trip: function() {
                    return $scope.selectedTrip
                }
            }
        }), $scope.modalInstance.result.then(function() {
            bookingAgent.trips.pullOne($scope.selectedTrip.id).then(function(res) {
                $scope.selectedTrip = res
            })
        }, function() {
            bookingAgent.trips.pullOne($scope.selectedTrip.id).then(function(res) {
                $scope.selectedTrip = res
            })
        })
    }, $scope.openModal = function(title, content) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/customModal.html",
            scope: $scope,
            controller: "CustommodalCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                modalContent: function() {
                    return content
                },
                modalTitle: function() {
                    return title
                }
            }
        })
    }, $scope.init()
}]), angular.module("angularProjectApp").controller("driverListCtrl", ["$scope", "tpAdmin", function($scope, tpAdmin) {
    $scope.$watch("driver.boolStatus", function(newValue, oldValue) {
        void 0 != newValue && void 0 != oldValue && newValue != oldValue && (console.log("watch fired, new value: " + newValue), console.log("watch fired, old value: " + oldValue), $scope.changeStatus($scope.driver, newValue))
    }), $scope.changeStatus = function(driver, newValue) {
        var status, reason;
        1 == newValue ? (status = !0, reason = null) : 0 == newValue && (status = !1, reason = "Request form dispatch"), tpAdmin.drivers.changeStatus(driver, status, reason).then(function(res) {
            $scope.driver = res.driver, "AVAILABLE" == $scope.driver.driver_status ? $scope.driver.boolStatus = !0 : "IN TRIP" == $scope.driver.driver_status ? $scope.driver.boolStatus = !1 : "UNAVAILABLE" == $scope.driver.driver_status && ($scope.driver.boolStatus = !1)
        }, function(err) {
            toastr.error(err.error.message)
        })
    }
}]).controller("TpadminCtrl", ["authenticated", "$scope", "localStorageService", "tpAdmin", "$interval", "$modal", "routing", "$timeout", "imageProcessor", "$q", "Admin", "toastr", "$rootScope", "stripe", "$http", "ngAudio", "bookingAgent", function(authenticated, $scope, localStorageService, tpAdmin, $interval, $modal, routing, $timeout, imageProcessor, $q, Admin, toastr, $rootScope, stripe, $http, ngAudio, bookingAgent) {
    var init = function() {
            $scope.locked = !1, $scope.tripBilling = "cc", $scope.tPInfo = tpAdmin.tPInfo.get(), $scope.tPInfo.TransportProviderInsurance && ($scope.tPInfo.insurance = {}, $scope.tPInfo.insurance.coverage = {}, $scope.tPInfo.insurance.coverage.expirationDate = $scope.tPInfo.TransportProviderInsurance.expires, $scope.tPInfo.insurance.coverage.generalLiability = $scope.tPInfo.TransportProviderInsurance.generalLiability), $scope.tPInfo.insurance && $scope.tPInfo.insurance.coverage.expirationDate && ($scope.tPInfo.insurance.coverage.expirationDate = new Date($scope.tPInfo.insurance.coverage.expirationDate)), $scope.tripdates = {
                startDate: moment().subtract(30, "days"),
                endDate: moment()
            }, $scope.tpId = $scope.tPInfo.id, $scope.companyLogo = $scope.tPInfo.imageURL, $scope.selectedMarkets = [], $scope.messageIds = [], $scope.mapDriverStatus = "all", $scope.inviteStep = "0", $scope.sound = ngAudio.load("https://s3-us-west-1.amazonaws.com/icars/tripalarm.mp3"), $scope.statusCal1 = {
                opened: !1
            }, $scope.map = {
                center: {
                    latitude: 37.7090978,
                    longitude: -122.4383229
                },
                zoom: 12,
                pan: !0
            }, $scope.uiConfig = {
                calendar: {
                    height: 650,
                    header: {
                        left: "agendaWeek agendaDay",
                        center: "title",
                        right: "today prev,next"
                    }
                }
            }, $timeout(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, "fast")
            }, 1500), $scope.openTrips = [], $scope.bookingType = "unclaimed", $scope.view = screens.map, $scope.view.start(), $scope.driverFirstName = "", $scope.driverLastName = "", $scope.driverEmail = "", $scope.driverPhone = "", $scope.vehicleColor, $scope.vehicleName, $scope.vehicleCapacity, $scope.vehicleMake, $scope.vehicleModel, $scope.vehiclePlate, $scope.showCars = "all", $scope.rideTab = "open", $scope.mapControl = {}, $scope.tripDate = {
                startDate: null,
                endDate: null
            }, $scope.driverStatusFilter = {
                selected: void 0
            }, $scope.driverSelects = [{
                id: "AVAILABLE",
                value: "Available"
            }, {
                id: "UNAVAILABLE",
                value: "Unavailable"
            }, {
                id: "IN TRIP",
                value: "In trip"
            }, {
                id: void 0,
                value: "All"
            }], pullDrivers()
        },
        pullDrivers = function() {
            tpAdmin.drivers.pull().then(function() {
                tpAdmin.drivers.get().then(function(res) {
                    res && ($scope.drivers = [], $scope.drivers = angular.copy(res), $scope.drivers = res, generateDriverArray($scope.drivers))
                })
            })
        };
    $scope.getDriverIcon = function(driver) {
        return "AVAILABLE" != driver.driver_status || driver.privateOnly ? "IN TRIP" == driver.driver_status ? "https://d8w0otup5lda.cloudfront.net/orangeCar.png" : "UNAVAILABLE" == driver.driver_status ? "https://d8w0otup5lda.cloudfront.net/redCar.png" : "AVAILABLE" == driver.driver_status && driver.privateOnly ? "https://d8w0otup5lda.cloudfront.net/blueCar.png" : void 0 : "https://d8w0otup5lda.cloudfront.net/greenCar.png"
    }, $scope.clickDriverIcon = function(id) {
        id && angular.forEach($scope.drivers, function(driver) {
            driver.id == id && ($scope.modalInstance = $modal.open({
                templateUrl: "/views/modals/driverInfo.html",
                controller: "DriverinfoCtrl",
                backdrop: !0,
                keyboard: !1,
                animation: !1,
                resolve: {
                    driver: function() {
                        return driver
                    }
                }
            }))
        })
    };
    var generateDriverArray = function(drivers) {
            $scope.driverMarkers = [], angular.forEach(drivers, function(driver) {
                var thirtyMin = moment().subtract(30, "minutes").format(),
                    lastUpdate = moment(driver.updatedAt).format();
                if (lastUpdate > thirtyMin) {
                    var marker = {
                        id: driver.id,
                        driverIcon: $scope.getDriverIcon(driver),
                        coords: {
                            latitude: driver.geo.lat,
                            longitude: driver.geo.lng
                        },
                        onClick: function() {
                            $scope.clickDriverIcon(driver.id)
                        },
                        windowOptions: {
                            visible: !1,
                            templUrl: "url: '/views/windows/driverwindow.html'"
                        },
                        show: !1
                    };
                    "all" == $scope.showCars ? $scope.driverMarkers.push(marker) : "AVAILABLE" == driver.driver_status && "private" == $scope.showCars && driver.privateOnly ? $scope.driverMarkers.push(marker) : "unavailable" == $scope.showCars && "UNAVAILABLE" == driver.driver_status ? $scope.driverMarkers.push(marker) : "inTrip" == $scope.showCars && "IN TRIP" == driver.driver_status ? $scope.driverMarkers.push(marker) : "AVAILABLE" != driver.driver_status || "available" != $scope.showCars || driver.privateOnly || $scope.driverMarkers.push(marker), "AVAILABLE" == driver.driver_status ? driver.boolStatus = !0 : "UNAVAILABLE" == driver.driver_status ? driver.boolStatus = !1 : "IN TRIP" == driver.driver_status && (driver.boolStatus = !1)
                }
            })
        },
        screens = {
            map: {
                name: "map",
                start: function() {
                    $scope.map = {
                        center: {
                            latitude: 37.7090978,
                            longitude: -122.4383229
                        },
                        zoom: 12,
                        pan: !0
                    }, $timeout(function() {
                        var map = $scope.mapControl.getGMap();
                        google.maps.event.trigger(map, "resize");
                        var sw = new google.maps.LatLng($scope.tPInfo.geoFence.sw[1], $scope.tPInfo.geoFence.sw[0]),
                            ne = new google.maps.LatLng($scope.tPInfo.geoFence.ne[1], $scope.tPInfo.geoFence.ne[0]),
                            bounds = new google.maps.LatLngBounds;
                        bounds.extend(sw), bounds.extend(ne), map.fitBounds(bounds), map.setZoom(10)
                    }, 1e3), pullDrivers(), tpAdmin.vehicles.pull().then(function() {
                        $scope.vehicles = tpAdmin.vehicles.get()
                    }), updateDriversInterval = $interval(function() {
                        pullDrivers()
                    }, 3e4), updateVehiclesInterval = $interval(function() {
                        tpAdmin.vehicles.pull().then(function() {
                            $scope.vehicles = tpAdmin.vehicles.get()
                        })
                    }, 3e4)
                },
                end: function() {
                    $interval.cancel(updateDriversInterval), updateDriversInterval = void 0, $interval.cancel(updateVehiclesInterval), updateVehiclesInterval = void 0
                }
            },
            client: {
                name: "client",
                start: function() {},
                end: function() {}
            },
            dispatch: {
                name: "dispatch",
                start: function() {
                    tpAdmin.tripRequests.pull().then(function() {
                        $scope.tripRequests = tpAdmin.tripRequests.get()
                    }), tpAdmin.futureTripRequests.pull().then(function() {
                        $scope.futureTrips = tpAdmin.futureTripRequests.get()
                    }), tpAdmin.currentTripRequests.pull().then(function() {
                        $scope.currentTrips = tpAdmin.currentTripRequests.get()
                    }), updateTripRequestsInterval = $interval(function() {
                        tpAdmin.tripRequests.pull().then(function() {
                            $scope.tripRequests = tpAdmin.tripRequests.get(), $scope.tripRequests.length > 0 && $scope.sound.play()
                        })
                    }, 1000), GetFutureTripRequestInterval = $interval(function() {
                        tpAdmin.futureTripRequests.pull().then(function() {
                            $scope.futureTrips = tpAdmin.futureTripRequests.get()
                        })
                    }, 1000), GetCurrentTripRequestInterval = $interval(function() {
                        tpAdmin.currentTripRequests.pull().then(function() {
                            $scope.currentTrips = tpAdmin.currentTripRequests.get()
                        })
                    }, 1000)
                },
                end: function() {
                    $interval.cancel(updateTripRequestsInterval), updateTripRequestsInterval = void 0, $interval.cancel(GetFutureTripRequestInterval), GetFutureTripRequestInterval = void 0, $interval.cancel(GetCurrentTripRequestInterval), GetCurrentTripRequestInterval = void 0
                }
            },
            driver: {
                name: "driver",
                start: function() {
                    updateDriversInterval = $interval(function() {
                        pullDrivers()
                    }, 1e4)
                },
                end: function() {
                    $interval.cancel(updateDriversInterval), updateDriversInterval = void 0
                }
            },
            vehicle: {
                name: "vehicle",
                start: function() {
                    updateVehiclesInterval = $interval(function() {
                        tpAdmin.vehicles.pull().then(function() {
                            $scope.vehicles = tpAdmin.vehicles.get()
                        })
                    }, 1e4)
                },
                end: function() {
                    $interval.cancel(updateVehiclesInterval), updateVehiclesInterval = void 0
                }
            },
            calendar: {
                name: "calendar",
                start: function() {
                    $scope.cal.events = [], angular.forEach($scope.currentTrips, function(trip) {
                        var _trip = {};
                        "canceled" != trip.status && (_trip.title = trip.pickup_address.street_name + ", " + trip.pickup_address.city, _trip.startsAt = moment(trip.trip_date).toDate(), _trip.endsAt = moment(trip.trip_date).add(1, "hours").toDate(), "instant" === trip.status && (_trip.cssClass = "calInstant", trip.trip_starttime && (_trip.startsAt = moment(trip.trip_starttime).toDate())), trip.trip_endtime ? _trip.endsAt = moment(trip.trip_endtime).toDate() : _trip.endsAt = moment(_trip.startsAt).add(1, "hours").toDate()), _trip.base = trip, $scope.cal.events.push(_trip)
                    }), angular.forEach($scope.futureTrips, function(trip) {
                        var _trip = {};
                        "canceled" != trip.status && (_trip.title = trip.pickup_address.street_name + ", " + trip.pickup_address.city, _trip.startsAt = moment(trip.trip_date).toDate(), _trip.cssClass = "calFuture", trip.estimateEndTime ? _trip.endsAt = moment(trip.estimateEndTime).toDate() : _trip.endsAt = moment(_trip.startsAt).add(1, "hours").toDate(), _trip.base = trip, $scope.cal.events.push(_trip))
                    }), angular.forEach($scope.tripRequestsHistory, function(trip) {
                        var _trip = {};
                        "canceled" != trip.status && (_trip.title = trip.pickup_address.street_name + ", " + trip.pickup_address.city, _trip.startsAt = moment(trip.trip_date).toDate(), _trip.endsAt = moment(trip.trip_date).add(1, "hours").toDate(), _trip.cssClass = "calFinished", trip.trip_starttime && (_trip.startsAt = moment(trip.trip_starttime).toDate()), trip.trip_endtime ? _trip.endsAt = moment(trip.trip_endtime).toDate() : _trip.endsAt = moment(_trip.startsAt).add(1, "hours").toDate(), _trip.base = trip, $scope.cal.events.push(_trip))
                    }), angular.forEach($scope.tripRequests, function(trip) {
                        var _trip = {};
                        "canceled" != trip.status && (_trip.title = trip.pickup_address.street_name + ", " + trip.pickup_address.city, _trip.startsAt = moment(trip.trip_date).toDate(), _trip.endsAt = moment(trip.trip_date).add(1, "hours").toDate(), _trip.cssClass = "calAssign", _trip.endsAt = moment(trip.estimateEndTime).toDate()), _trip.base = trip, $scope.cal.events.push(_trip)
                    })
                },
                end: function() {}
            },
            company: {
                name: "company",
                start: function() {},
                end: function() {}
            },
            clients: {
                name: "clients",
                start: function() {
                    tpAdmin.clients.pull().then(function(res) {
                        var clients = res;
                        $scope.clientsRejected = clients.rejectedRates, $scope.clientsAvailble = clients.available, $scope.clientsAwaitingRatesApproval = clients.awaitingRatesApproval, $scope.clientsAwaitingRates = clients.awaitingRates, $scope.clientsCompiled = [], angular.forEach($scope.clientsRejected, function(item) {
                            item.TDstatus = "rejected", item.P2Pstatus = "none", $scope.clientsCompiled.push(item)
                        }), angular.forEach($scope.clientsAvailble, function(item) {
                            item.TDstatus = "approved", item.newPointToPointAvailable ? item.P2Pstatus = "REVIEW" : item.P2Pstatus = "APPROVED", $scope.clientsCompiled.push(item)
                        }), angular.forEach($scope.clientsAwaitingRatesApproval, function(item) {
                            item.TDstatus = "waiting for client", item.P2Pstatus = "none", $scope.clientsCompiled.push(item)
                        }), angular.forEach($scope.clientsAwaitingRates, function(item) {
                            item.TDstatus = "waiting for rates", item.P2Pstatus = "none", $scope.clientsCompiled.push(item)
                        })
                    }, function(err) {})
                },
                end: function() {}
            },
            affiliates: {
                name: "affiliates",
                start: function() {
                    tpAdmin.affiliates.pull().then(function(res) {
                        var affiliates = res;
                        $scope.yourAffiliates = affiliates.yours, $scope.affiliatedTo = affiliates.theirs, $scope.affiliateActionWaiting = [], $scope.affiliateActionRequired = [], $scope.affiliatesCompiled = [], angular.forEach(affiliates.actionRequired, function(affiliate) {
                            "Awaiting TP to approve." == affiliate.action ? $scope.affiliateActionWaiting.push(affiliate) : $scope.affiliateActionRequired.push(affiliate)
                        }), angular.forEach($scope.yourAffiliates, function(item) {
                            item.status = "APPROVED", item.farm = "out", $scope.affiliatesCompiled.push(item)
                        }), angular.forEach($scope.affiliatedTo, function(item) {
                            item.status = "APPROVED", item.farm = "in", $scope.affiliatesCompiled.push(item)
                        }), angular.forEach($scope.affiliateActionWaiting, function(item) {
                            item.status = "WAITING", item.farm = "out", $scope.affiliatesCompiled.push(item)
                        }), angular.forEach($scope.affiliateActionRequired, function(item) {
                            item.status = "APPROVE", item.farm = "in", $scope.affiliatesCompiled.push(item)
                        })
                    }, function(err) {})
                },
                end: function() {}
            },
            messages: {
                name: "messages",
                start: function() {},
                end: function() {}
            },
            reports: {
                name: "reports",
                start: function() {
                    $scope.SearchReport()
                },
                end: function() {}
            },
            billing: {
                name: "billing",
                start: function() {
                    tpAdmin.accounts.pull($scope.tpId).then(function(res) {
                        var result = res;
                        $scope.bankAccounts = result.bankAccount, $scope.verifiedAccount = result.verified, $scope.last3Transfers = result.last3Transfers, $scope.balance = result.balance, $scope.canWithdraw = result.canWithdraw, $scope.bankMessage = result.message, $scope.transferObject = result.transferObject
                    })
                },
                end: function() {}
            },
            booking: {
                name: "booking",
                start: function() {
                    $scope.tripOpenPrice = 1, tpAdmin.clients.pull().then(function(res) {
                        var clients = res;
                        $scope.clientsRejected = clients.rejectedRates, $scope.clientsAvailble = clients.available, $scope.clientsAwaitingRatesApproval = clients.awaitingRatesApproval, $scope.clientsAwaitingRates = clients.awaitingRates, $scope.clientsCompiled = [], angular.forEach($scope.clientsRejected, function(item) {
                            item.TDstatus = "rejected", item.P2Pstatus = "none", $scope.clientsCompiled.push(item)
                        }), angular.forEach($scope.clientsAvailble, function(item) {
                            item.TDstatus = "approved", item.newPointToPointAvailable ? item.P2Pstatus = "REVIEW" : item.P2Pstatus = "APPROVED", $scope.clientsCompiled.push(item)
                        }), angular.forEach($scope.clientsAwaitingRatesApproval, function(item) {
                            item.TDstatus = "waiting for client", item.P2Pstatus = "none", $scope.clientsCompiled.push(item)
                        }), angular.forEach($scope.clientsAwaitingRates, function(item) {
                            item.TDstatus = "waiting for rates", item.P2Pstatus = "none", $scope.clientsCompiled.push(item)
                        })
                    }, function(err) {})
                },
                end: function() {}
            },
            feedback: {
                name: "feedback",
                start: function() {},
                end: function() {}
            },
            insurance: {
                name: "insurance",
                start: function() {},
                end: function() {}
            },
            legal: {
                name: "legal",
                start: function() {},
                end: function() {}
            },
            addRates: {
                name: "addRates",
                start: function() {
                    $scope.selectedClient.markets || tpAdmin.clientsPending.fetchRates($scope.selectedClient.id).then(function(res) {
                        $scope.selectedClient.markets = res
                    })
                },
                end: function() {}
            },
            inviteClient: {
                name: "inviteClient",
                start: function() {},
                end: function() {}
            },
            pointToPoint: {
                name: "pointToPoint",
                start: function() {},
                end: function() {}
            },
            inviteAffiliate: {
                name: "inviteAffiliate",
                start: function() {},
                end: function() {}
            },
            reviewRates: {
                name: "reviewRates",
                start: function() {},
                end: function() {}
            }
        };
    $scope.switchView = function(view) {
        $("html, body").animate({
            scrollTop: 0
        }, "fast"), screens[view] && ($scope.view.end(), $scope.view = screens[view], $scope.view.start(), $scope.tpNavClick(), $scope.mapControl && "map" == view && $timeout(function() {
            var map = $scope.mapControl.getGMap();
            google.maps.event.trigger(map, "resize");
            var sw = new google.maps.LatLng($scope.tPInfo.geoFence.sw[1], $scope.tPInfo.geoFence.sw[0]),
                ne = new google.maps.LatLng($scope.tPInfo.geoFence.ne[1], $scope.tPInfo.geoFence.ne[0]),
                bounds = new google.maps.LatLngBounds;
            bounds.extend(sw), bounds.extend(ne), map.fitBounds(bounds), map.setZoom(10)
        }, 1500))
    }, $scope.createDriver = function() {
        var newDriver = {
            first_name: $scope.driverFirstName,
            last_name: $scope.driverLastName,
            email: $scope.driverEmail,
            telephone: {
                country_code: "",
                number: $scope.driverPhone,
                is_mobile: !1,
                inactive: !1
            },
            driver_status: "UNAVAILABLE",
            password: "password"
        };
        $scope.loadingDriver = !0, $scope.driverErrorMessage = "", $scope.driverSuccessMessage = "", tpAdmin.drivers.create(newDriver).then(function() {
            tpAdmin.drivers.pull().then(function() {
                tpAdmin.drivers.get().then(function(res) {
                    $scope.drivers = res
                })
            }), $scope.driverSuccessMessage = "Driver Created", $scope.loadingDriver = !1
        }, function() {
            $scope.loadingDriver = !1, $scope.driverErrorMessage = "Error creating the driver"
        })
    }, $scope.createVehicle = function() {
        $scope.vehicleCapacity = parseInt($scope.vehicleCapacity);
        var newVehicle = {
            color: $scope.vehicleColor,
            name: $scope.vehicleName,
            capacity: $scope.vehicleCapacity,
            make: $scope.vehicleMake,
            model: $scope.vehicleModel,
            plate_number: $scope.vehiclePlate,
            base_fare: 7,
            uses_general_rate_scale: !1
        };
        $scope.loadingVehicle = !0, $scope.vehicleErrorMessage = "", $scope.vehicleSuccessMessage = "", tpAdmin.vehicles.create(newVehicle).then(function() {
            tpAdmin.vehicles.pull().then(function() {
                $scope.vehicles = tpAdmin.vehicles.get()
            }), $scope.loadingVehicle = !1, toastr.success("Vehicle created")
        }, function() {
            $scope.loadingVehicle = !1, $scope.vehicleErrorMessage = "Error creating the vehicle"
        })
    }, $scope.driverModal = function(driver) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/editDriver.html",
            scope: $scope,
            controller: "DrivereditCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                driver: function() {
                    return driver
                }
            }
        }), $scope.modalInstance.result.then(function() {
            pullDrivers()
        }, function() {
            pullDrivers()
        })
    }, $scope.addVehicleModal = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addVehicle.html",
            scope: $scope,
            controller: "VehicleaddCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }, $scope.addDriverModal = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addDriver.html",
            scope: $scope,
            controller: "DriveraddCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }, $scope.openCalendar = function(driver) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/driverCalendar.html",
            scope: $scope,
            controller: "DrivercalendarCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                driver: function() {
                    return driver
                },
                trip: function() {
                    return ""
                }
            }
        })
    }, $scope.openCal1 = function($event) {
        $scope.statusCal1.opened = !0
    }, $scope.openDatePicker = function(e) {
        e.preventDefault(), e.stopPropagation(), 1 == $scope.isOpen ? $scope.isOpen = !1 : $scope.isOpen = !0
    }, $scope.openGeneralCalendar = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/generalCalendar.html",
            scope: $scope,
            controller: "GeneralcalendarCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                past: function() {
                    return $scope.tripRequestsHistory
                },
                future: function() {
                    return $scope.futureTrips
                },
                open: function() {
                    return $scope.tripRequests
                },
                current: function() {
                    return $scope.currentTrips
                }
            }
        })
    }, $scope.openGeneralInfoDriver = function(driver) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/driverGeneralInfo.html",
            scope: $scope,
            controller: "DrivergeneralinfoCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                driver: function() {
                    return driver
                }
            }
        })
    }, $scope.openGeneralInfoVehicle = function(vehicle) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/vehicleGeneralInfo.html",
            scope: $scope,
            controller: "VehiclegeneralinfoCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                vehicle: function() {
                    return vehicle
                }
            }
        })
    }, $scope.changeRideTab = function(tab) {
        $scope.rideTab = tab
    }, $scope.changeShowCars = function(status) {
        $scope.showCars = status, generateDriverArray($scope.drivers)
    }, $scope.selectTrip = function(trip) {
        if ($scope.selectedTrip == trip) $scope.selectedTrip = {};
        else {
            $scope.selectedTrip = trip;
            var from = trip.pickup_geo,
                to = trip.dropoff_geo
        }
        var tripPosition = $scope.openTrips.indexOf(trip.id);
        if (tripPosition >= 0 ? $scope.openTrips.splice(tripPosition, 1) : $scope.openTrips.push(trip.id), from && to) {
            var map = $scope.mapControl.getGMap(),
                start = new google.maps.LatLng(from.lat, from.lng),
                end = new google.maps.LatLng(to.lat, to.lng);
            $scope.fromMarker = from, $scope.toMarker = to;
            var bounds = new google.maps.LatLngBounds;
            bounds.extend(start), bounds.extend(end), map.fitBounds(bounds);
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function(response, status) {
                status == google.maps.DirectionsStatus.OK ? (directionsDisplay.setDirections(response), directionsDisplay.setMap(map)) : alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status)
            })
        } else $scope.fromMarker = !1, $scope.toMarker = !1, directionsDisplay.setMap(null)
    }, $scope.clickDate = function(calEvent, driver) {
        $modal.open({
            templateUrl: "/views/modals/scheduleDateDrilldown.html",
            controller: "ScheduledatedetailsCtrl",
            resolve: {
                event: function() {
                    return calEvent
                },
                driver: function() {
                    return driver ? driver : {}
                }
            }
        })
    }, $scope.saveTPGeneralInfo = function() {
        $scope.loadingTPinfo = !0, tpAdmin.tPInfo.save($scope.tPInfo).then(function() {
            $scope.loadingTPinfo = !1
        }, function() {
            $scope.loadingTPinfo = !1
        })
    }, $scope.saveTPInsuranceInfo = function() {
        moment($scope.tPInfo.insurance.coverage.expirationDate) > moment() ? $scope.tPInfo.insurance.coverage.generalLiability > 75e4 ? ($scope.loadingTPinfo = !0, tpAdmin.tPInfo.saveInsurance($scope.tPInfo, $scope.insuranceImage).then(function(res) {
            $scope.loadingTPinfo = !1, $scope.tPInfo.TransportProviderInsurance = res, localStorageService.set("transportProvider", $scope.tPInfo), toastr.success("Insurance information uploaded")
        }, function(err) {
            $scope.loadingTPinfo = !1, $scope.errorViewer.display(err)
        })) : toastr.error("General liability must be greater than $750 000") : toastr.error("Expiration date must be later than today")
    }, $scope.resizeInsuranceImage = function(file, base64_object) {
        var deferred = $q.defer();
        if (file.size > 3145728) {
            var ratio = 3145728 / file.size,
                url = URL.createObjectURL(file);
            imageProcessor.createImageAndConfig(url, {}, function(_this) {
                return function(image, config) {
                    var options = {
                        height: image.height * ratio,
                        width: image.width * ratio,
                        quality: 1
                    };
                    imageProcessor.run(url, options, function(processedImage) {}, function(test, processedImage) {
                        var modelVal = {
                            file: file,
                            resized: processedImage
                        };
                        deferred.resolve(modelVal)
                    })
                }
            }(imageProcessor))
        } else {
            var modelVal = {
                originalFile: base64_object
            };
            deferred.resolve(modelVal)
        }
        return deferred.promise
    };
    var updateDriversInterval, updateTripRequestsInterval, updateVehiclesInterval, GetFutureTripRequestInterval, GetCurrentTripRequestInterval;
    init();
    var polylineOptionsActual = new google.maps.Polyline({
            strokeColor: "#90268e",
            strokeOpacity: .6,
            strokeWeight: 5
        }),
        directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: !0,
            polylineOptions: polylineOptionsActual
        }),
        directionsService = new google.maps.DirectionsService;
    $scope.cal = {
        calendarView: "day",
        events: []
    }, $scope.cal.currentDay = new Date;
    new Date;
    $scope.$watch("mapDriverStatus", function(newValue, oldValue) {
        $scope.changeShowCars(newValue), pullDrivers()
    }), $scope.openAddRates = function(client) {
        $scope.selectedClient = client, $scope.switchView("addRates")
    }, $scope.openReviewRates = function(client) {
        $scope.selectedClientRates = client, $scope.switchView("reviewRates")
    }, $scope.approveRates = function() {
        $scope.switchView("clients")
    }, $scope.approveClients = function(client) {
        tpAdmin.clientsPending.acceptInvite(client).then(function(res) {
            toastr.success("Rates added"), $scope.switchView("clients")
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.inviteChangeStep = function(step) {
        $scope.inviteLoading = !0, "1" == step ? tpAdmin.clientsPending.verifyCode($scope.clientCode).then(function(res) {
            $scope.invite = res, Admin.markets.pull().then(function(res) {
                $scope.marketsToSelect = res, $scope.inviteLoading = !1, $scope.inviteStep = 1
            }, function() {
                $scope.inviteLoading = !1
            })
        }, function(err) {
            $scope.errorViewer.display(err), $scope.inviteLoading = !1
        }) : "2" == step ? 0 != $scope.selectedMarkets.length ? ($scope.inviteStep = 2, $scope.inviteLoading = !1) : (toastr.error("You must select at least one market"), $scope.inviteLoading = !1) : "finalize" == step && ($scope.selectedIds = [], angular.forEach($scope.selectedMarkets, function(market) {
            $scope.selectedIds.push(market.id)
        }), $scope.invite.selectedMarkets = $scope.selectedIds, $scope.invite.markets = $scope.selectedMarkets, $scope.invite.inviteCode = $scope.clientCode, tpAdmin.clientsPending.sendInvite($scope.invite).then(function(res) {
            toastr.success("Invite sent to " + $scope.invite.clientName), $scope.inviteLoading = !1, $scope.switchView("clients")
        }, function(err) {
            $scope.errorViewer.display(err), $scope.inviteLoading = !1
        }))
    }, $scope.sortTrip = function(trip) {
        var date = new Date(trip.trip_date);
        return date
    }, $scope.$watch("tPInfo.dontNotifyDriversOfTR", function(newValue, oldValue) {
        newValue != oldValue && tpAdmin.tPInfo.save($scope.tPInfo).then(function() {
            toastr.success("Your changes have been saved")
        }, function() {
            toastr.success("Problem saving your changes")
        })
    }), $scope.$watch("tPInfo.showDriversUnclaimedFutureRequests", function(newValue, oldValue) {
        newValue != oldValue && tpAdmin.tPInfo.save($scope.tPInfo).then(function() {
            toastr.success("Your changes have been saved")
        }, function() {
            toastr.success("Problem saving your changes")
        })
    }), $scope.$watch("tPInfo.driverCanSeeCosts", function(newValue, oldValue) {
        newValue != oldValue && tpAdmin.tPInfo.save($scope.tPInfo).then(function() {
            toastr.success("Your changes have been saved")
        }, function() {
            toastr.success("Problem saving your changes")
        })
    }), $scope.$watch("tPInfo.pickupSedanRates", function(newValue, oldValue) {}), $scope.inviteAffiliate = function() {
        $scope.inviteLoading = !0, tpAdmin.affiliates.sendInvite($scope.affiliateInvite).then(function(res) {
            toastr.success("Invite sent"), $scope.inviteLoading = !1, $scope.switchView("affiliates")
        }, function(err) {
            $scope.inviteLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.addAccount = function() {
        $rootScope.$broadcast("addAccount")
    }, $scope.withdraw = function() {
        $scope.withdrawLoading = !0, tpAdmin.accounts.withdraw().then(function(res) {
            $scope.withdrawLoading = !1, toastr.success("The money is being transferred to your bank"), tpAdmin.accounts.pull($scope.tpId).then(function(res) {
                var result = res;
                $scope.bankAccounts = result.bankAccount, $scope.verifiedAccount = result.verified, $scope.last3Transfers = result.last3Transfers, $scope.balance = result.balance, $scope.canWithdraw = result.canWithdraw, $scope.bankMessage = result.message, $scope.transferObject = result.transferObject
            })
        }, function(err) {
            $scope.withdrawLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.addStripeAccount = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addStripeAccount.html",
            scope: $scope,
            controller: "AddstripeaccountCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                tp: function() {
                    return $scope.tPInfo
                },
                driver: function() {
                    return {}
                },
                bankAccountId: function() {
                    return $scope.bankAccounts.id
                }
            }
        }), $scope.modalInstance.result.then(function() {
            tpAdmin.accounts.pull($scope.tpId).then(function(res) {
                var result = res;
                $scope.bankAccounts = result.bankAccount, $scope.verifiedAccount = result.verified, $scope.last3Transfers = result.last3Transfers, $scope.balance = result.balance, $scope.canWithdraw = result.canWithdraw, $scope.bankMessage = result.message, $scope.transferObject = result.transferObject
            })
        }, function() {
            tpAdmin.accounts.pull($scope.tpId).then(function(res) {
                var result = res;
                $scope.bankAccounts = result.bankAccount, $scope.verifiedAccount = result.verified, $scope.last3Transfers = result.last3Transfers, $scope.balance = result.balance, $scope.canWithdraw = result.canWithdraw, $scope.bankMessage = result.message, $scope.transferObject = result.transferObject
            })
        })
    }, $scope.approveAffiliate = function(affiliateInvite) {
        $scope.acceptAffiliateLoading = !0, tpAdmin.affiliates.acceptInvite(affiliateInvite).then(function(res) {
            toastr.success("Invite Accepted"), $scope.acceptAffiliateLoading = !1, tpAdmin.affiliates.pull().then(function(res) {
                var affiliates = res;
                $scope.yourAffiliates = affiliates.yours, $scope.affiliatedTo = affiliates.theirs, $scope.affiliateActionWaiting = [], $scope.affiliateActionRequired = [], $scope.affiliatesCompiled = [], angular.forEach(affiliates.actionRequired, function(affiliate) {
                    "Awaiting TP to approve." == affiliate.action ? $scope.affiliateActionWaiting.push(affiliate) : $scope.affiliateActionRequired.push(affiliate)
                }), angular.forEach($scope.yourAffiliates, function(item) {
                    item.status = "APPROVED", item.farm = "out", $scope.affiliatesCompiled.push(item)
                }), angular.forEach($scope.affiliatedTo, function(item) {
                    item.status = "APPROVED", item.farm = "in", $scope.affiliatesCompiled.push(item)
                }), angular.forEach($scope.affiliateActionWaiting, function(item) {
                    item.status = "WAITING", item.farm = "out", $scope.affiliatesCompiled.push(item)
                }), angular.forEach($scope.affiliateActionRequired, function(item) {
                    item.status = "APPROVE", item.farm = "in", $scope.affiliatesCompiled.push(item)
                })
            }, function(err) {})
        })
    }, $scope.viewP2ps = function(client) {
        tpAdmin.p2p.pull(client).then(function(res) {
            $scope.selectedP2pClient = res, $scope.switchView("pointToPoint")
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.approveP2p = function(p2p) {
        tpAdmin.p2p.approve(p2p).then(function(res) {
            toastr.success("Point to point approved"), $scope.switchView("clients")
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.resizeImage = function(file, base64_object) {
        var deferred = $q.defer();
        if (file.size > 3145728) {
            var ratio = 3145728 / file.size,
                url = URL.createObjectURL(file);
            imageProcessor.createImageAndConfig(url, {}, function(_this) {
                return function(image, config) {
                    var options = {
                        height: image.height * ratio,
                        width: image.width * ratio,
                        quality: .5
                    };
                    imageProcessor.run(url, options, function(processedImage) {}, function(test, processedImage) {
                        var modelVal = {
                            file: file,
                            resized: processedImage
                        };
                        tpAdmin.tPInfo.saveImage($scope.tPInfo, modelVal).then(function(res) {
                            $scope.tPInfo.imageURL = res.imageURL + "?time=" + Date.now(), toastr.success("Image saved")
                        }, function(err) {
                            $scope.errorViewer.display(err)
                        }), deferred.resolve(modelVal)
                    })
                }
            }(imageProcessor))
        } else {
            var modelVal = {
                originalFile: base64_object
            };
            tpAdmin.tPInfo.saveImage($scope.tPInfo, modelVal).then(function(res) {
                $scope.tPInfo.imageURL = res.imageURL + "?time=" + Date.now(), toastr.success("Image saved")
            }, function(err) {
                $scope.errorViewer.display(err)
            }), deferred.resolve(modelVal)
        }
        return deferred.promise
    }, $scope.sendDriverMessage = function() {
        tpAdmin.drivers.sendMessage($scope.messageIds, $scope.messageText).then(function() {
            toastr.success("Message sent"), $scope.messageText = ""
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.checkAllDriver = function() {
        $scope.messageIds = $scope.drivers.map(function(item) {
            return item.id
        })
    }, $scope.uncheckAllDriver = function() {
        $scope.messageIds = []
    }, $scope.SearchReport = function() {
        tpAdmin.reports.pullRevenue($scope.tripdates).then(function(res) {
            $scope.revenue = res
        }, function(err) {}), tpAdmin.reports.pullTripSummary($scope.tripdates).then(function(res) {
            $scope.tripSummary = res
        }, function(err) {}), tpAdmin.reports.pullTripDetails($scope.tripdates).then(function(res) {
            $scope.tripDetails = res
        }, function(err) {})
    }, $scope.bookTrip = function() {
        angular.forEach($scope.tripFrom.address_components, function(address_component, key) {
            "street_number" == address_component.types[0] && ($scope.fromStreet = "", $scope.fromStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.fromStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.fromCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.fromState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.fromZip = address_component.long_name);
        }), angular.forEach($scope.tripTo.address_components, function(address_component, key) {
            "street_number" == address_component.types[0] && ($scope.toStreet = "", $scope.toStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.toStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.toCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.toState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.toZip = address_component.long_name)
        }), $scope.fromStreet || ($scope.fromStreet = ""), $scope.toStreet || ($scope.toStreet = ""), $scope.fromZip || ($scope.fromStreet = ""), $scope.toZip || ($scope.toStreet = "");
        var phoneNumber = {
            country_code: "+1",
            number: $scope.passengerPhone,
            is_mobile: !1,
            inactive: !1
        };
        $scope.errorMessage = "", $scope.loading = !0;
        var expirationTime = $scope.expiration.split("/");
        stripe.card.createToken({
            number: $scope.cardNumber,
            cvc: $scope.cvv,
            exp_month: expirationTime[0],
            exp_year: expirationTime[1]
        }).then(function(res) {
            $http.defaults.headers.post = {
                "Content-Type": "application/json",
                XCredential: "2FAA6B7C5A894E50AD77FC94B11278BC"
            };
            var userEmail = $scope.passengerEmail,
                userId = $scope.passengerPhone;
            $http.post($rootScope.endPoint + "/Stripe/customer", {
                stripeToken: res.id,
                customerDescription: userId + "__" + userEmail,
                amount: 100,
                receipt_email: userEmail,
                isAuth: !0
            }).success(function(res) {
                var newPaymentMethod = {
                    inactive: !1,
                    id: res.customer.id,
                    is_apple_pay: !1,
                    redacted_number: res.customer.sources.data[0].last4,
                    card_brand: res.customer.sources.data[0].brand,
                    card_id: res.customer.sources.data[0].id,
                    card_name: "No Name"
                };
                $scope.tripParams = {
                    passenger_first_name: $scope.passengerFirstName,
                    passenger_email: $scope.passengerEmail,
                    passenger_last_name: $scope.passengerLastName,
                    passenger_phone: phoneNumber,
                    transportClassIndex: 0,
                    transportTypeIndex: 0,
                    request_date: moment().format(),
                    payment: newPaymentMethod,
                    notes: $scope.specialNotes,
                    dropoff_geo: {
                        lng: $scope.tripTo.geometry.location.lng(),
                        lat: $scope.tripTo.geometry.location.lat()
                    },
                    dropoff_address: {
                        city: $scope.toCity,
                        line_2: "",
                        number: "",
                        predirectional: "",
                        state: $scope.toState,
                        street_name: $scope.toStreet,
                        suffix: "",
                        zipcode: $scope.toZip
                    },
                    pickup_geo: {
                        lng: $scope.tripFrom.geometry.location.lng(),
                        lat: $scope.tripFrom.geometry.location.lat()
                    },
                    pickup_address: {
                        city: $scope.fromCity,
                        line_2: "",
                        number: "",
                        predirectional: "",
                        state: $scope.fromState,
                        street_name: $scope.fromStreet,
                        suffix: "",
                        zipcode: $scope.fromZip
                    }
                }, "now" == $scope.bookingTime ? ($scope.tripParams.trip_date = moment().format(), $scope.tripParams.status = "instant", $scope.tripParams.was_future = !1) : ($scope.tripParams.trip_date = moment($scope.futureDate).format(), $scope.tripParams.status = "future", $scope.tripParams.was_future = !0), $scope.tripOpenPrice ? $scope.tripParams.fixedPrice = 0 : ($scope.tripParams.fixedPrice = 1, $scope.tripParams.fixedPriceAmount = parseInt($scope.tripPrice)), 0 != $scope.messageIds.length ? $scope.tripParams.send_to = $scope.messageIds : $scope.tripParams.send_to = void 0, tpAdmin.tripRequests.bookTrip($scope.tripParams).then(function(res) {
                    toastr.success("Trip booked"), $scope.loading = !1
                }, function(err) {
                    $scope.errorViewer.display(err), $scope.loading = !1
                })
            }).error(function(err) {
                $scope.loading = !1, $scope.errorViewer.display(err)
            })
        }, function(err) {
            $scope.errorMessage = "Error creating a token for your card", $scope.loading = !1
        })
    }, $scope.reportDownload = function(id) {
        $scope.reportLoad = !0, tpAdmin.reports.downloadBillingReport(id).then(function(res) {
            window.open(res.result.Location, "_blank"), $scope.reportLoad = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.reportLoad = !1
        })
    }, $scope.assignRideToDriver = function(ride, force) {
        $modal.open({
            templateUrl: "/views/assignride.html",
            controller: "AssignrideCtrl",
            resolve: {
                rideObj: function() {
                    return ride
                },
                force: function() {
                    return force
                }
            }
        })
    }, $scope.detachDriver = function(trip) {
        $scope.removeDriverLoading = !0, tpAdmin.tripRequests.detachDriver(trip.id).then(function() {
            tpAdmin.futureTripRequests.pull().then(function() {
                $scope.futureTrips = tpAdmin.futureTripRequests.get(), toastr.success("Driver Removed"), $scope.closeTrip(), $scope.removeDriverLoading = !1
            }, function(err) {
                $scope.errorViewer.display(err), $scope.removeDriverLoading = !1
            })
        }, function(err) {
            $scope.errorViewer.display(err), $scope.removeDriverLoading = !1
        })
    }, $scope.viewTrip = function(trip) {
        $scope.selectedTrip = trip, $scope.showTripDetails = !0, $("html, body").animate({
            scrollTop: 0
        }, "fast"), $timeout(function() {
            var map = $scope.mapControl.getGMap();
            google.maps.event.trigger(map, "resize");
            var from = $scope.selectedTrip.pickup_geo,
                to = $scope.selectedTrip.dropoff_geo;
            $scope.fromMarker = from, $scope.toMarker = to;
            var start = new google.maps.LatLng(from.lat, from.lng),
                end = new google.maps.LatLng(to.lat, to.lng),
                bounds = new google.maps.LatLngBounds;
            bounds.extend(start), bounds.extend(end), map.fitBounds(bounds), from && to ? "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0 : ($scope.fromMarker = !1, $scope.toMarker = !1, polylineOptionsActual.setMap(null), "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0)
        }, 250), "instant" == $scope.selectedTrip.status && (currentTripRefresh = $interval(function() {
            bookingAgent.trips.pullOne($scope.selectedTrip.id).then(function(res) {
                $scope.selectedTrip = res
            })
        }, 5e3))
    }, $scope.closeTrip = function() {
        $scope.showTripDetails = !1
    }, $scope.openGeneralInfoVehicle = function(vehicle) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/vehicleGeneralInfo.html",
            scope: $scope,
            controller: "VehiclegeneralinfoCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                vehicle: function() {
                    return vehicle
                }
            }
        })
    }, $scope.vehicleModal = function(vehicle) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/editVehicle.html",
            scope: $scope,
            controller: "VehicleeditCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                vehicle: function() {
                    return vehicle
                }
            }
        })
    }, $scope.lockMenu = function() {
        $scope.locked = !$scope.locked, 0 == $scope.locked ? tpNavClose() : tpNavOpen()
    }, $scope.tpNavClick = function() {
        $(".tpMenu").hasClass("on") ? tpNavClose() : tpNavOpen()
    };
    var tpNavOpen = function() {
            $(".tpMenu").addClass("on"), $("#tpMenu-toggle").addClass("active")
        },
        tpNavClose = function() {
            0 == $scope.locked && ($(".tpMenu").removeClass("on"), $("#tpMenu-toggle").removeClass("active"))
        }
}]), angular.module("angularProjectApp").factory("tpAdmin", ["$rootScope", "localStorageService", "$http", "$q", function($rootScope, localStorageService, $http, $q) {
    var __tpAdmin = {
            drivers: null,
            vehicles: [],
            tripRequests: [],
            tripRequestsHistory: [],
            currentTripRequests: [],
            futureTripRequests: [],
            tPInfo: {},
            clientsPending: [],
            clientsAvailable: [],
            accounts: [],
            reports: []
        },
        __driver = {
            checkName: function(first, last) {
                return first && last ? !0 : !1
            }
        },
        tpAdmin = {
            drivers: {
                get: function() {
                    var defer = $q.defer();
                    return Array.isArray(__tpAdmin.drivers) ? defer.resolve(__tpAdmin.drivers) : tpAdmin.drivers.pull().then(function() {
                        defer.resolve(__tpAdmin.drivers)
                    }, function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                add: function(drivers) {
                    drivers && Array.isArray(__tpAdmin.drivers) ? angular.forEach(drivers, function(driver) {
                        driver && driver.id && __driver.checkName(driver.first_name, driver.last_name) && __tpAdmin.drivers.push(driver)
                    }) : (__tpAdmin.drivers = [], tpAdmin.drivers.add(drivers))
                },
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getAllDrivers").success(function(res) {
                        __tpAdmin.drivers = [], tpAdmin.drivers.add(res.drivers), defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                create: function(newDriver) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/" + localStorageService.get("User").transport_provider_id + "/Driver", newDriver).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                update: function(updateDriver, id) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/TransportProviders/" + localStorageService.get("User").transport_provider_id + "/Driver/" + id, updateDriver).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getTrips: function(driver) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Drivers/getAllTripRequests?driverId=" + driver.id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                changeStatus: function(driver, status, reason) {
                    if (void 0 == reason) var reason = "Request From Dispatch";
                    var postObj = {
                            driverId: driver.id,
                            available: status,
                            reason: reason
                        },
                        defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/TransportProviders/changeDriverStatus", postObj).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getGeneralInfo: function(driver) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getDriverInfo?driverId=" + driver.id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                sendMessage: function(idList, message) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DriverMessages/sendMessage", {
                        driverIds: idList,
                        message: message
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                "delete": function(driver, note) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/removeDriver", {
                        id: driver.id,
                        note: note
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            vehicles: {
                get: function() {
                    return __tpAdmin.vehicles
                },
                add: function(vehicles) {
                    vehicles && angular.forEach(vehicles, function(vehicle) {
                        vehicle && __tpAdmin.vehicles.push(vehicle)
                    })
                },
                "delete": function(vehicle, note) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/removeVehicle", {
                        id: vehicle.id,
                        note: note
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/" + localStorageService.get("User").transport_provider_id + '/Vehicle?filter={"include": ["Driver"]}').success(function(res) {
                        __tpAdmin.vehicles = [], tpAdmin.vehicles.add(res), defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                create: function(newVehicle) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/" + localStorageService.get("User").transport_provider_id + "/Vehicle", newVehicle).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                update: function(updateVehicle, id) {
                    var defer = $q.defer();
                    return updateVehicle.id = id, $http.post($rootScope.endPoint + "/Vehicles/saveVehicle", updateVehicle).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getGeneralInfo: function(vehicle) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getVehicleInfo?vehicleId=" + vehicle.id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getYears: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/VehicleStores/availableYears").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getMakes: function(year) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/VehicleStores/availableMakes?year=" + year + "&usOnly=true").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getModels: function(year, make) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/VehicleStores/availableModels?year=" + year + "&make=" + make + "&usOnly=true").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            tripRequests: {
                get: function() {
                    return __tpAdmin.tripRequests
                },
                add: function(tripRequests) {
                    tripRequests && angular.forEach(tripRequests, function(tripRequest) {
                        tripRequest && __tpAdmin.tripRequests.push(tripRequest)
                    })
                },
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getAvailableTripRequests").success(function(res) {
                        __tpAdmin.tripRequests = [], tpAdmin.tripRequests.add(res), defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                assignRide: function(ride, driver, forceAssign) {
                    var defer = $q.defer(),
                        postObj = {
                            driverId: driver.id,
                            tripRequestId: ride.id,
                            force: forceAssign
                        };
                    return $http.put($rootScope.endPoint + "/TransportProviders/attachDriverToTripRequest", postObj).success(function(res) {
                        defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                detachDriver: function(trId) {
                    var defer = $q.defer(),
                        postObj = {
                            tripRequestId: trId
                        };
                    return $http.put($rootScope.endPoint + "/TransportProviders/removeDriverFromTripRequest", postObj).success(function(res) {
                        defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                bookTrip: function(tripRequest) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TripRequests/createTPAdminTripRequest", {
                        tripRequest: tripRequest
                    }).success(function(res) {
                        defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            tripRequestsHistory: {
                get: function() {
                    return __tpAdmin.tripRequestsHistory
                },
                add: function(tripRequests) {
                    tripRequests && angular.forEach(tripRequests, function(tripRequest) {
                        tripRequest && __tpAdmin.tripRequestsHistory.push(tripRequest)
                    })
                },
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getPastTripRequests").success(function(res) {
                        __tpAdmin.tripRequestsHistory = [], tpAdmin.tripRequestsHistory.add(res), defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            currentTripRequests: {
                get: function() {
                    return __tpAdmin.currentTripRequests
                },
                add: function(tripRequests) {
                    tripRequests && angular.forEach(tripRequests, function(tripRequest) {
                        tripRequest && __tpAdmin.currentTripRequests.push(tripRequest)
                    })
                },
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getCurrentTripRequests").success(function(res) {
                        __tpAdmin.currentTripRequests = [], tpAdmin.currentTripRequests.add(res), defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            futureTripRequests: {
                get: function() {
                    return __tpAdmin.futureTripRequests
                },
                add: function(tripRequests) {
                    tripRequests && angular.forEach(tripRequests, function(tripRequest) {
                        tripRequest && __tpAdmin.futureTripRequests.push(tripRequest)
                    })
                },
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getFutureTripRequests").success(function(res) {
                        __tpAdmin.futureTripRequests = [], tpAdmin.futureTripRequests.add(res), defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            tPInfo: {
                get: function() {
                    return localStorageService.get("transportProvider")
                },
                save: function(tPToSave) {
                    var defer = $q.defer(),
                        postObj = {};
                    return postObj.tp = tPToSave, $http.post($rootScope.endPoint + "/TransportProviders/saveProfile", postObj).success(function(res) {
                        localStorageService.set("transportProvider", tPToSave), defer.resolve()
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                saveImage: function(tp, image) {
                    var defer = $q.defer(),
                        postObj = {};
                    if (image.resized) {
                        var content = image.resized.dataURL.replace("data:image/jpeg;base64,", "");
                        image.file = content, image.contentType = image.resized.type, image.resized = ""
                    } else image.file = image.originalFile.base64, image.contentType = image.originalFile.filetype, image.originalFile = "";
                    return postObj.image = image, postObj.tp = tp, $http.post($rootScope.endPoint + "/TransportProviders/saveProfile", postObj).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                saveInsurance: function(insuranceInfo, image) {
                    var defer = $q.defer(),
                        postObj = {};
                    if (image) {
                        if (image.resized) {
                            var content = image.resized.dataURL.replace("data:image/jpeg;base64,", "");
                            image.file = content, image.contentType = image.resized.type, image.resized = ""
                        } else image.file = image.originalFile.base64, image.contentType = image.originalFile.filetype, image.originalFile = "";
                        postObj.image = image
                    }
                    return postObj.expires = moment(insuranceInfo.insurance.coverage.expirationDate).format(), postObj.amount = insuranceInfo.insurance.coverage.generalLiability, postObj.tpId = insuranceInfo.id, $http.post($rootScope.endPoint + "/TransportProviders/updateInsurance", postObj).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            clientsPending: {
                get: function() {
                    var defer = $q.defer();
                    return Array.isArray(__tpAdmin.clientsPending) ? defer.resolve(__tpAdmin.clientsPending) : tpAdmin.clientsPending.pull().then(function() {
                        defer.resolve(__tpAdmin.clientsPending)
                    }, function() {
                        defer.reject()
                    }), defer.promise
                },
                add: function(clients) {
                    clients && Array.isArray(__tpAdmin.clientsPending) ? angular.forEach(clients, function(client) {
                        client && __tpAdmin.clientsPending.push(client)
                    }) : (__tpAdmin.clientsPending = [], tpAdmin.clientsPending.add(clients))
                },
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getClients").success(function(res) {
                        __tpAdmin.clientsPending = [], tpAdmin.clientsPending.add(res.awaitingRates), defer.resolve(res.awaitingRates)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                fetchRates: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCTPInvite/getMarkets?id=" + id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                acceptInvite: function(postObj) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCTPInvite/approveWithRates", postObj).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                verifyCode: function(code) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCTPInvite/verifyCode?code=" + code).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                sendInvite: function(invite) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/inviteClient", invite).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            clients: {
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getClients").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            affiliates: {
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getAffiliates").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                sendInvite: function(invite) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/affiliate/invite", invite).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                acceptInvite: function(invite) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/affiliate/approve", {
                        id: invite.id
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            accounts: {
                pull: function(tpId) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getBillingData/").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                save: function(tpId, account) {
                    var defer = $q.defer();
                    return account.tpId = tpId, $http.post($rootScope.endPoint + "/TransportProviders/saveBankAccount", account).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                verifyInfo: function(postData) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/BankAccount/attachVerificationData", postData).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                withdraw: function() {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/withdrawPayment").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            p2p: {
                pull: function(client) {
                    var defer = $q.defer(),
                        params = "";
                    return client.dmcDivisionId && (params = params + "&dmcDivisionId=" + client.dmcDivisionId), client.dmcDepartmentId && (params = params + "&dmcDepartmentId=" + client.dmcDepartmentId), $http.get($rootScope.endPoint + "/TransportProviders/getClientPointToPoints?dmcId=" + client.dmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                approve: function(p2p) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/TransportProviders/approvePointToPoint", {
                        id: p2p.id
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(status)
                    }), defer.promise
                }
            },
            reports: {
                pullRevenue: function(dates) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/reports/revenueSummary?fromDate=" + moment(dates.startDate).format() + "&toDate=" + moment(dates.endDate).format()).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullTripSummary: function(dates) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/reports/ridesSummaryReport?fromDate=" + moment(dates.startDate).format() + "&toDate=" + moment(dates.endDate).format()).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullTripDetails: function(dates) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/reports/ridesDetailReport?fromDate=" + moment(dates.startDate).format() + "&toDate=" + moment(dates.endDate).format()).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                downloadBillingReport: function(id) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/downloadBillingReport", {
                        transferId: id
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            }
        };
    return tpAdmin
}]), angular.module("angularProjectApp").service("tpViewService", ["$rootScope", "$http", "$q", function($rootScope, $http, $q) {
    var tpViewService = this;
    return tpViewService.getAllAffiliates = function() {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/Admins/getPendingDrivers").success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpViewService.getAllTpsPending = function(params) {
        var defer = $q.defer();
        if (!params) {
            var params = {};
            params.search = "", params.skip = 0
        }
        params.search || (params.search = ""), params.keys = ["name", "tcp"], params.where = [{
            approved: {
                exists: !1
            }
        }];
        var encodedURL = encodeURI("query=" + params.search + "&keys=" + JSON.stringify(params.keys) + "&skip=" + params.skip + "&where=" + JSON.stringify(params.where));
        return $http.get($rootScope.endPoint + "/TPGeneralInfos/search?" + encodedURL).success(function(res) {
            defer.resolve(res)
        }).error(function(err, status) {
            defer.reject(err)
        }), defer.promise
    }, tpViewService.getAllDriversPending = function(params) {
        var defer = $q.defer();
        if (!params) {
            var params = {};
            params.search = "", params.skip = 0
        }
        params.search || (params.search = ""), params.keys = ["first_name", "last_name", "email"], params.where = [{
            approved: {
                exists: !1
            }
        }];
        var encodedURL = encodeURI("query=" + params.search + "&keys=" + JSON.stringify(params.keys) + "&skip=" + params.skip + "&where=" + JSON.stringify(params.where));
        return $http.get($rootScope.endPoint + "/DriverForApprovals/search?" + encodedURL).success(function(res) {
            defer.resolve(res)
        }).error(function(err, status) {
            defer.reject(err)
        }), defer.promise
    }, tpViewService.approveDenyTP = function(id, approve, markets) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/Admins/processTPGeneralInfo", {
            tpGeneralInfoId: id,
            approve: approve,
            markets: markets
        }).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpViewService.saveTPinfo = function(tp) {
        var defer = $q.defer();
        return $http.put($rootScope.endPoint + "/TPGeneralInfos/" + tp.id, tp).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpViewService.approveDenyDriver = function(id, approve, markets, vehicleCheck) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/Admins/processDriverForApproval", {
            driverForApprovalId: id,
            approve: approve,
            markets: markets,
            vehicleCheck: vehicleCheck
        }).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpViewService.saveDriverinfo = function(driver) {
        var defer = $q.defer();
        return $http.put($rootScope.endPoint + "/DriverForApprovals/" + driver.id, driver).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpViewService
}]), angular.module("angularProjectApp").controller("DrivereditCtrl", ["$scope", "driver", "tpAdmin", "$modalInstance", "toastr", "$modal", function($scope, driver, tpAdmin, $modalInstance, toastr, $modal) {
    $scope.driver = driver, $scope.updateDriver = function(driver) {
        var updateDriver = {
            first_name: $scope.driver.first_name,
            last_name: $scope.driver.last_name,
            email: $scope.driver.email,
            telephone: {
                country_code: "+1",
                number: $scope.driver.telephone.number,
                is_mobile: !1,
                inactive: !1
            }
        };
        $scope.loading = !0, $scope.driverErrorMessage = "", tpAdmin.drivers.update(updateDriver, $scope.driver.id).then(function() {
            tpAdmin.drivers.pull().then(function() {
                tpAdmin.drivers.get().then(function(res) {
                    $scope.drivers = res
                })
            }), $modalInstance.close(), $scope.loading = !1
        }, function() {
            $scope.loading = !1, $scope.driverErrorMessage = "Error updating the driver"
        })
    }, $scope.deleteDriver = function(driver) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/deleteConfirmation.html",
            controller: "DeleteconfirmationCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                textContent: function() {
                    return "Are you sure you want to delete this driver?"
                }
            }
        }), $scope.modalInstance.result.then(function(notes) {
            $scope.loading = !0, tpAdmin.drivers["delete"]($scope.driver, notes).then(function() {
                toastr.success("Driver deleted"), $modalInstance.close()
            }, function(err) {
                $scope.loading = !1, $scope.errorViewer.display(err)
            })
        }, function() {})
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }
}]), angular.module("angularProjectApp").controller("VehicleeditCtrl", ["$scope", "vehicle", "tpAdmin", "$modalInstance", "toastr", "$modal", function($scope, vehicle, tpAdmin, $modalInstance, toastr, $modal) {
    var init = function() {
        $scope.vehicle = vehicle, $scope.vehicleTypes = [{
            id: 0,
            name: "Sedan"
        }, {
            id: 1,
            name: "SUV"
        }], $scope.defaultYear = "Select", $scope.defaultMake = "Select", $scope.defaultModel = "Select", $scope.availableYears = [], $scope.availableMakes = [], $scope.availableModels = [], tpAdmin.vehicles.getYears().then(function(res) {
            $scope.availableYears = res, $scope.availableYears.indexOf($scope.vehicle.year) <= -1 && ($scope.defaultYear = $scope.vehicle.year)
        }), $scope.availableMakes.indexOf($scope.vehicle.make) <= -1 && ($scope.defaultMake = $scope.vehicle.make), $scope.availableModels.indexOf($scope.vehicle.model) <= -1 && ($scope.defaultModel = $scope.vehicle.model)
    };
    $scope.updateVehicle = function() {
        if ($scope.vehicle.transportTypeIndex.indexOf(1) >= 0 && $scope.vehicle.capacity <= 4) toastr.error("Your vehicle capacity is too small to be considered an SUV");
        else if (0 == $scope.vehicle.transportTypeIndex.length) toastr.error("You need to select at least one vehicle class");
        else {
            var updateVehicle = {
                name: $scope.vehicle.name,
                make: $scope.vehicle.make,
                model: $scope.vehicle.model,
                capacity: $scope.vehicle.capacity,
                color: $scope.vehicle.color,
                plate_number: $scope.vehicle.plate_number,
                transportTypeIndex: $scope.vehicle.transportTypeIndex,
                year: $scope.vehicle.year
            };
            $scope.loading = !0, $scope.vehicleErrorMessage = "", tpAdmin.vehicles.update(updateVehicle, $scope.vehicle.id).then(function() {
                tpAdmin.vehicles.pull().then(function() {
                    $scope.vehicles = tpAdmin.vehicles.get()
                }), toastr.success("Vehicle updated"), $modalInstance.close(), $scope.loading = !1
            }, function() {
                $scope.loading = !1, $scope.vehicleErrorMessage = "Error updating the vehicle"
            })
        }
    }, $scope.$watch("vehicle.year", function() {
        $scope.vehicle.year && tpAdmin.vehicles.getMakes($scope.vehicle.year).then(function(res) {
            $scope.availableMakes = res, $scope.availableMakes.indexOf($scope.vehicle.make) <= -1 && ($scope.defaultMake = $scope.vehicle.make)
        })
    }), $scope.$watch("vehicle.make", function() {
        $scope.vehicle.make && tpAdmin.vehicles.getModels($scope.vehicle.year, $scope.vehicle.make).then(function(res) {
            $scope.availableModels = res, $scope.availableModels.indexOf($scope.vehicle.model) <= -1 && ($scope.defaultModel = $scope.vehicle.model)
        })
    }), $scope.deleteVehicle = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/deleteConfirmation.html",
            controller: "DeleteconfirmationCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                textContent: function() {
                    return "Are you sure you want to delete this vehicle?"
                }
            }
        }), $scope.modalInstance.result.then(function(notes) {
            $scope.loading = !0, tpAdmin.vehicles["delete"]($scope.vehicle, notes).then(function() {
                toastr.success("Vehicle deleted"), $modalInstance.close()
            }, function(err) {
                $scope.loading = !1, $scope.errorViewer.display(err)
            })
        }, function() {})
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("AssignrideCtrl", ["$scope", "tpAdmin", "toastr", "rideObj", "$modal", "$modalInstance", "force", function($scope, tpAdmin, toastr, rideObj, $modal, $modalInstance, force) {
    var init = function() {
        tpAdmin.drivers.get().then(function(res) {
            $scope.drivers = res, $scope.trip = rideObj, angular.forEach($scope.drivers, function(driver) {
                var lat1 = driver.geo_location[1],
                    lng1 = driver.geo_location[0],
                    lat2 = $scope.trip.pickup_geo.lat,
                    lng2 = $scope.trip.pickup_geo.lng;
                driver.distance = distance(lat1, lng1, lat2, lng2)
            })
        }, function(err) {}), $scope.selectedDriverInfo = null, $scope.driverStatusFilter = {
            selected: void 0
        }, $scope.driverSelects = [{
            id: "AVAILABLE",
            value: "Available"
        }, {
            id: "UNAVAILABLE",
            value: "Unavailable"
        }, {
            id: void 0,
            value: "All"
        }]
    };
    $scope.closeModal = function() {
        $modalInstance.close()
    }, $scope.driver = {
        assign: function(driver) {
            $scope.assignLoading = !0, tpAdmin.tripRequests.assignRide(rideObj, driver, force).then(function() {
                $scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/confirmAccept.html",
                    scope: $scope,
                    controller: "ConfirmacceptCtrl",
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1,
                    resolve: {
                        notes: function() {
                            return rideObj.notes
                        }
                    }
                }), $scope.modalInstance.result.then(function() {
                    toastr.success("Trip assigned"), $scope.assignLoading = !1, $modalInstance.close()
                }, function() {
                    tpAdmin.tripRequests.detachDriver(rideObj.id).then(function() {
                        toastr.error("Trip not assigned"), $scope.assignLoading = !1
                    }, function(err) {
                        $scope.errorViewer.display(err), $scope.assignLoading = !1
                    })
                })
            }, function(err) {
                $scope.errorViewer.display(err), $scope.assignLoading = !1
            })
        },
        info: function(driver) {
            $scope.selectedDriver = driver
        }
    }, $scope.openCalendar = function(driver) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/driverCalendar.html",
            scope: $scope,
            controller: "DrivercalendarCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                driver: function() {
                    return driver
                },
                trip: function() {
                    return rideObj
                }
            }
        })
    };
    var distance = function(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1 / 180,
            radlat2 = Math.PI * lat2 / 180,
            theta = (Math.PI * lon1 / 180, Math.PI * lon2 / 180, lon1 - lon2),
            radtheta = Math.PI * theta / 180,
            dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        return dist = Math.acos(dist), dist = 180 * dist / Math.PI, dist = 60 * dist * 1.1515, "K" == unit && (dist = 1.609344 * dist), "N" == unit && (dist = .8684 * dist), dist
    };
    init()
}]), angular.module("angularProjectApp").controller("DrivercalendarCtrl", ["$scope", "driver", "tpAdmin", "$modal", "$modalInstance", "trip", function($scope, driver, tpAdmin, $modal, $modalInstance, trip) {
    $scope.cal = {
        calendarView: "day",
        events: []
    }, "" != trip ? $scope.cal.currentDay = trip.trip_date : $scope.cal.currentDay = new Date, $scope.clickDate = function(calEvent) {
        $modal.open({
            templateUrl: "/views/modals/scheduleDateDrilldown.html",
            controller: "ScheduledatedetailsCtrl",
            resolve: {
                event: function() {
                    return calEvent
                },
                driver: function() {
                    return driver
                }
            }
        })
    };
    var init = function() {
        tpAdmin.drivers.getTrips(driver).then(function(trips) {
            if (angular.forEach(trips, function(trip) {
                    var _trip = {};
                    "canceled" != trip.status && (_trip.title = trip.pickup_address.street_name + ", " + trip.pickup_address.city, _trip.startsAt = moment(trip.trip_date).toDate(),
                        _trip.endsAt = moment(trip.trip_date).add(1, "hours").toDate(), "future" === trip.status && (_trip.cssClass = "calFuture", _trip.endsAt = moment(trip.estimateEndTime).toDate()), "instant" === trip.status && (_trip.cssClass = "calInstant", trip.trip_starttime && (_trip.startsAt = moment(trip.trip_starttime).toDate())), "FINISHED" === trip.status && (_trip.cssClass = "calFinished", trip.trip_starttime && (_trip.startsAt = moment(trip.trip_starttime).toDate()), trip.trip_endtime ? _trip.endsAt = moment(trip.trip_endtime).toDate() : _trip.endsAt = moment(_trip.startsAt).add(1, "hours").toDate()), _trip.base = trip, $scope.cal.events.push(_trip))
                }), "" != trip) {
                var assignTrip = {};
                assignTrip.title = trip.pickup_address.street_name + ", " + trip.pickup_address.city, assignTrip.startsAt = moment(trip.trip_date).toDate(), assignTrip.cssClass = "calAssign", assignTrip.base = trip, trip.estimateEndTime ? assignTrip.endsAt = moment(trip.estimateEndTime).toDate() : assignTrip.endsAt = moment(trip.trip_date).add(1, "hours").toDate(), $scope.cal.events.push(assignTrip)
            }
        }), $scope.closeModal = function() {
            $modalInstance.close()
        }, $scope.uiConfig = {
            calendar: {
                height: 650,
                header: {
                    left: "agendaWeek agendaDay",
                    center: "title",
                    right: "today prev,next"
                }
            }
        };
        new Date
    };
    init()
}]), angular.module("angularProjectApp").filter("tripDate", function() {
    return function(items, from, to) {
        if (from && to)
            for (var df = moment(from).format(), dt = moment(to).format(), result = [], i = 0; i < items.length; i++) {
                var tripDate = moment(items[i].trip_date).format();
                tripDate >= df && dt >= tripDate && result.push(items[i])
            } else var result = items;
        return result
    }
}), angular.module("angularProjectApp").controller("ScheduledatedetailsCtrl", ["$scope", "event", "driver", function($scope, event, driver) {
    event.base.Driver = driver, $scope.trip = event.base
}]), angular.module("angularProjectApp").controller("DriverinfoCtrl", ["$scope", "driver", "$modal", "tpAdmin", function($scope, driver, $modal, tpAdmin) {
    $scope.cal = {
        calendarView: "day",
        events: [],
        currentDay: new Date
    }, $scope.clickDate = function(calEvent) {
        $modal.open({
            templateUrl: "/views/modals/scheduleDateDrilldown.html",
            controller: "ScheduledatedetailsCtrl",
            resolve: {
                event: function() {
                    return calEvent
                },
                driver: function() {
                    return driver
                }
            }
        })
    }, $scope.init = function() {
        $scope.driver = driver, tpAdmin.drivers.getTrips($scope.driver).then(function(trips) {
            angular.forEach(trips, function(trip) {
                var _trip = {};
                "canceled" != trip.status && (_trip.title = trip.pickup_address.street_name + ", " + trip.pickup_address.city, _trip.startsAt = moment(trip.trip_date).toDate(), _trip.endsAt = moment(trip.trip_date).add(1, "hours").toDate(), "future" === trip.status && (_trip.cssClass = "calFuture", _trip.endsAt = moment(trip.estimateEndTime).toDate()), "instant" === trip.status && (_trip.cssClass = "calInstant", trip.trip_starttime && (_trip.startsAt = moment(trip.trip_starttime).toDate())), "FINISHED" === trip.status && (_trip.cssClass = "calFinished", trip.trip_starttime && (_trip.startsAt = moment(trip.trip_starttime).toDate()), trip.trip_endtime ? _trip.endsAt = moment(trip.trip_endtime).toDate() : _trip.endsAt = moment(_trip.startsAt).add(1, "hours").toDate()), _trip.base = trip, $scope.cal.events.push(_trip))
            }), $scope.uiConfig = {
                calendar: {
                    height: 650,
                    header: {
                        left: "agendaWeek agendaDay",
                        center: "title",
                        right: "today prev,next"
                    }
                }
            };
            new Date
        })
    }, $scope.changeStatus = function(driver) {
        var status;
        "UNAVAILABLE" == driver.driver_status ? (status = !0, tpAdmin.drivers.changeStatus(driver, status).then(function(res) {
            $scope.driverMessage = "Driver status changed", $scope.driver = res.driver
        })) : "AVAILABLE" == driver.driver_status ? (status = !1, tpAdmin.drivers.changeStatus(driver, status).then(function(res) {
            $scope.driverMessage = "Driver status changed", $scope.driver = res.driver
        })) : $scope.driverMessage = "Sorry you can not change the driver status"
    }, $scope.init()
}]), angular.module("angularProjectApp").controller("DrivergeneralinfoCtrl", ["$scope", "driver", "tpAdmin", "$modalInstance", function($scope, driver, tpAdmin, $modalInstance) {
    $scope.init = function() {
        $scope.driver = driver, tpAdmin.drivers.getGeneralInfo($scope.driver).then(function(res) {
            $scope.driverInfo = res, $scope.todayValues = $scope.driverInfo.results[0].today, $scope.weekValues = $scope.driverInfo.results[1].week, $scope.monthValues = $scope.driverInfo.results[2].month, $scope.yearValues = $scope.driverInfo.results[3].year
        }, function(err) {})
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }, $scope.init()
}]);
var app = angular.module("angularProjectApp");
app.controller("TpregistrationCtrl", ["$scope", "tpRegistration", "$rootScope", "deviceDetector", "localStorageService", "$analytics", function($scope, tpRegistration, $rootScope, deviceDetector, localStorageService, $analytics) {
    $scope.init = function() {
        $scope.formData = localStorageService.get("tpReg"), $scope.views = [{
            name: "basic",
            url: "views/tpregistration/basic.html"
        }, {
            name: "insurance",
            url: "views/tpregistration/insurance.html"
        }, {
            name: "driver",
            url: "views/tpregistration/driver.html"
        }, {
            name: "vehicle",
            url: "views/tpregistration/vehicle.html"
        }, {
            name: "complete",
            url: "views/tpregistration/complete.html"
        }], $scope.activeView = 0, $scope.displayView = "", $scope.visibleView = $scope.views[$scope.activeView].name, $scope.formData ? $scope.formData.operating = void 0 : ($scope.formData = {}, $scope.formData.basic = {}, $scope.formData.basic.contact = {}, $scope.formData.insurance = {}, $scope.formData.insurance.coverage = {}, $scope.formData.insurance.contact = {}, $scope.formData.driver = {}, $scope.formData.driver.employee = {}, $scope.formData.drivercsv = {
            result: []
        }, $scope.formData.vehiclecsv = {
            result: []
        }), $scope.deviceDetector = deviceDetector, $scope.displayView = $scope.views[$scope.activeView].url, $scope.statusCal1 = {
            opened: !1
        }
    }, $scope.goToNextView = function() {
        switch ($scope.views[$scope.activeView].name) {
            case "basic":
                $analytics.eventTrack("tp-reg-next", {
                    category: "registration",
                    label: $scope.views[$scope.activeView].name
                }), $scope.basicMessage = "", $scope.formData.basic.company ? $scope.formData.basic.address ? $scope.formData.basic.city ? $scope.formData.basic.state ? $scope.formData.basic.url ? $scope.formData.basic.phone ? $scope.formData.basic.email ? $scope.formData.basic.zipcode ? $scope.formData.basic.contact.name ? $scope.formData.basic.contact.title ? $scope.formData.basic.contact.phone ? $scope.formData.basic.contact.email ? $scope.formData.operating ? forwardView() : $scope.basicMessage = "Please enter your operating city" : $scope.basicMessage = "Please enter contact email" : $scope.basicMessage = "Please enter contact phone" : $scope.basicMessage = "Please enter contact title" : $scope.basicMessage = "Please enter contact name" : $scope.basicMessage = "Please enter company zipcode" : $scope.basicMessage = "Please enter company email" : $scope.basicMessage = "Please enter company phone" : $scope.basicMessage = "Please enter company website URL" : $scope.basicMessage = "Please enter company state" : $scope.basicMessage = "Please enter company city" : $scope.basicMessage = "Please enter company address" : $scope.basicMessage = "Please enter company name", $("html, body").animate({
                    scrollTop: 0
                }, "fast");
                break;
            case "insurance":
                $analytics.eventTrack("tp-reg-next", {
                    category: "registration",
                    label: $scope.views[$scope.activeView].name
                }), $scope.insuranceMessage = "", $scope.formData.insurance.company ? $scope.formData.insurance.coverage.liabilityGeneral ? $scope.formData.insurance.coverage.expiration ? $scope.formData.insurance.contact.name ? $scope.formData.insurance.contact.title ? $scope.formData.insurance.contact.phone ? $scope.formData.insurance.contact.email ? $scope.formData.insurance.policyNumber ? forwardView() : $scope.insuranceMessage = "Please enter insurance policy number" : $scope.insuranceMessage = "Please enter contact email" : $scope.insuranceMessage = "Please enter contact phone" : $scope.insuranceMessage = "Please enter contact title" : $scope.insuranceMessage = "Please enter contact name" : $scope.insuranceMessage = "Please enter insurance expiration" : $scope.insuranceMessage = "Please enter insurance general liability" : $scope.insuranceMessage = "Please enter company name", $("html, body").animate({
                    scrollTop: 0
                }, "fast");
                break;
            case "driver":
                $analytics.eventTrack("tp-reg-next", {
                    category: "registration",
                    label: $scope.views[$scope.activeView].name
                }), $scope.driverMessage = "", $scope.formData.driver.employee.numberOfVehicles ? $scope.formData.driver.employee.numberOfDrivers ? void 0 != $scope.formData.driver.drugTest ? void 0 != $scope.formData.driver.defensiveDriving ? void 0 != $scope.formData.driver.situationalAwareness ? void 0 != $scope.formData.driver.emergencyResponse ? void 0 != $scope.formData.driver.cPR ? void 0 != $scope.formData.driver.bgCheckState ? void 0 != $scope.formData.driver.bgCheckNational ? void 0 != $scope.formData.driver.bgCheckFingers ? forwardView() : $scope.driverMessage = "Please select fingerprints background check" : $scope.driverMessage = "Please select state background check" : $scope.driverMessage = "Please select national background check" : $scope.driverMessage = "Please select CPR training" : $scope.driverMessage = "Please select emergency response training" : $scope.driverMessage = "Please select situational awareness training" : $scope.driverMessage = "Please select defensive driving training" : $scope.driverMessage = "Please select drug test policy" : $scope.driverMessage = "Please enter number of part time employees" : $scope.driverMessage = "Please enter number of full time employees", $("html, body").animate({
                    scrollTop: 0
                }, "fast");
                break;
            case "vehicle":
                $analytics.eventTrack("tp-reg-next", {
                    category: "registration",
                    label: $scope.views[$scope.activeView].name
                }), $scope.vehicleMessage = "", $scope.formData.drivercsv ? $scope.formData.vehiclecsv ? ($scope.postData = {}, formatPostData(), forwardView()) : $scope.vehicleMessage = "Please upload a list of vehicles" : $scope.vehicleMessage = "Please upload a list of drivers";
                break;
            case "complete":
                $scope.completeMessage = "", $scope.formData.loadingPost = !0, $scope.formData.driverReq ? $scope.formData.tos ? ($analytics.eventTrack("tp-reg-submit", {
                    category: "registration",
                    label: JSON.stringify($scope.postData)
                }), tpRegistration.postNewTp($scope.postData).then(function(res) {
                    $scope.formData.loadingPost = !1, $rootScope.$broadcast("openSuccess"), $analytics.eventTrack("tp-reg-success")
                }, function(err) {
                    $scope.formData.loadingPost = !1, $rootScope.$broadcast("openError"), $analytics.eventTrack("tp-reg-failure", {
                        category: "registration",
                        label: JSON.stringify(err)
                    })
                })) : ($scope.completeMessage = "Please agree to our terms of service", $scope.formData.loadingPost = !1) : ($scope.completeMessage = "Please agree to our driver requirements", $scope.formData.loadingPost = !1), "" != $scope.completeMessage && $("html, body").animate({
                    scrollTop: 0
                }, "fast");
                break;
            default:
                $scope.unknowView = !0
        }
    };
    var formatPostData = function() {
            $scope.postData = {
                name: $scope.formData.basic.company,
                address: {
                    number: "",
                    predirectional: "",
                    street_name: $scope.formData.basic.address,
                    suffix: "",
                    city: $scope.formData.basic.city,
                    state: $scope.formData.basic.state,
                    zipcode: $scope.formData.basic.zipcode,
                    line_2: "",
                    inactive: !1
                },
                adminInfo: {
                    firstName: $scope.formData.basic.contact.name,
                    lastName: "refer first",
                    phone: {
                        country_code: "+1",
                        number: $scope.formData.basic.contact.phone,
                        is_mobile: !1,
                        inactive: !1
                    },
                    email: $scope.formData.basic.contact.email.toLowerCase(),
                    title: $scope.formData.basic.contact.title
                },
                insurance: {
                    name: $scope.formData.insurance.company,
                    policyNumber: $scope.formData.insurance.policyNumber,
                    contactFirstName: $scope.formData.insurance.policyNumber,
                    contactLastName: "",
                    contactPhone: {
                        country_code: "+1",
                        number: $scope.formData.insurance.contact.phone,
                        is_mobile: !1,
                        inactive: !1
                    },
                    contactEmail: $scope.formData.insurance.contact.email.toLowerCase(),
                    contactTitle: $scope.formData.insurance.contact.title,
                    coverage: {
                        generalLiability: parseInt($scope.formData.insurance.coverage.liabilityGeneral),
                        expirationDate: $scope.formData.insurance.coverage.expiration
                    }
                },
                drugTest: $scope.formData.driver.drugTest,
                training: {
                    defensive: $scope.formData.driver.defensiveDriving,
                    situationalAwareness: $scope.formData.driver.situationalAwareness,
                    emergency: $scope.formData.driver.emergencyResponse,
                    cpr: $scope.formData.driver.cPR
                },
                backgroundCheck: {
                    state: {
                        apply: $scope.formData.driver.bgCheckState,
                        frequency: $scope.formData.driver.bgCheckStateFrequency
                    },
                    national: {
                        apply: $scope.formData.driver.bgCheckNational,
                        frequency: $scope.formData.driver.bgCheckNationalFrequency
                    },
                    fingerPrinting: {
                        apply: $scope.formData.driver.bgCheckFingers,
                        frequency: ""
                    }
                },
                vehiclesInfo: {
                    numberOfVehicles: parseInt(),
                    numberOfSedans: parseInt(),
                    numberOfSuv: parseInt(),
                    numberOfVans: parseInt(),
                    numberOfSprinters: parseInt(),
                    maxAgeOfVehicle: parseInt()
                },
                drivers: $scope.formData.drivercsv.result,
                vehicles: $scope.formData.vehiclecsv.result,
                tcp: $scope.formData.tcp,
                cityRegulation: $scope.formData.cityRegulation,
                numberOfVehicles: $scope.formData.driver.employee.numberOfVehicles,
                numberOfEmployees: $scope.formData.driver.employee.numberOfDrivers,
                referrer: $scope.formData.referrer,
                preferredOS: $scope.formData.preferredOS
            }, $scope.formData.operating.address_components && ($scope.formData.operating ? angular.forEach($scope.formData.operating.address_components, function(address_component, key) {
                "locality" == address_component.types[0] && ($scope.postData.operatingCity = address_component.long_name)
            }) : $scope.postData.operatingCity = "No data", $scope.formData.operating.geometry && ($scope.postData.operatingGeoPoints = [$scope.formData.operating.geometry.location.lng(), $scope.formData.operating.geometry.location.lat()]))
        },
        forwardView = function() {
            $scope.activeView = $scope.activeView + 1, $scope.visibleView = $scope.views[$scope.activeView].name, $scope.displayView = $scope.views[$scope.activeView].url, localStorageService.set("tpReg", $scope.formData)
        };
    $scope.goToPreviousView = function() {
        "basic" != $scope.views[$scope.activeView].name && ($scope.activeView = $scope.activeView - 1, $scope.visibleView = $scope.views[$scope.activeView].name, $scope.displayView = $scope.views[$scope.activeView].url)
    }, $scope.init(), $scope.$watch("activeView", function(newVal, oldVal) {
        newVal != oldVal && $scope.$broadcast("activeView", {
            val: newVal
        })
    }), $scope.addSingleDriver = function() {
        var newDriver = {
            FirstName: $scope.formData.driverForm.FirstName,
            LastName: $scope.formData.driverForm.LastName,
            Email: $scope.formData.driverForm.Email,
            Password: $scope.formData.driverForm.Password,
            Phone: $scope.formData.driverForm.Phone
        };
        $scope.formData.drivercsv ? $scope.formData.drivercsv.result.push(newDriver) : ($scope.formData.drivercsv = {}, $scope.formData.drivercsv.result = [], $scope.formData.drivercsv.result.push(newDriver))
    }, $scope.addSingleVehicle = function() {
        var newVehicle = {
            Name: $scope.formData.vehicleForm.Name,
            Model: $scope.formData.vehicleForm.Model,
            Make: $scope.formData.vehicleForm.Make,
            Capacity: $scope.formData.vehicleForm.Capacity,
            BagCapacity: $scope.formData.vehicleForm.BagCapacity,
            Color: $scope.formData.vehicleForm.Color,
            Plate: $scope.formData.vehicleForm.Plate,
            Year: $scope.formData.vehicleForm.Year,
            TCP: $scope.formData.vehicleForm.TCP
        };
        $scope.formData.vehiclecsv ? $scope.formData.vehiclecsv.result.push(newVehicle) : ($scope.formData.vehiclecsv = {}, $scope.formData.vehiclecsv.result = [], $scope.formData.vehiclecsv.result.push(newVehicle))
    }, $scope.openCal1 = function($event) {
        $scope.statusCal1.opened = !0
    }, $scope.driverDownloadClick = function() {
        $scope.driverDownloaded = !0
    }, $scope.vehicleDownloadClick = function() {
        $scope.vehicleDownloaded = !0
    }
}]), app.directive("progressState", function() {
    return {
        restrict: "E",
        scope: {
            myindex: "=",
            mycategory: "@"
        },
        template: "{{mycategory}}",
        link: function(scope, element, attrs) {
            scope.$on("activeView", function(event, args) {
                element.parent().removeClass(), scope.myindex < args.val ? element.parent().addClass("visited") : scope.myindex == args.val ? element.parent().addClass("active") : scope.myindex == args.val + 1 && element.parent().addClass("next")
            })
        }
    }
}), app.directive("progresswrapper", function() {
    return {
        restrict: "E",
        scope: {
            activeview: "="
        }
    }
}), angular.module("angularProjectApp").controller("VehiclegeneralinfoCtrl", ["$scope", "vehicle", "tpAdmin", function($scope, vehicle, tpAdmin) {
    $scope.init = function() {
        $scope.vehicle = vehicle, tpAdmin.vehicles.getGeneralInfo($scope.vehicle).then(function(res) {
            $scope.vehicleInfo = res, $scope.todayValues = $scope.vehicleInfo.results[0].today, $scope.weekValues = $scope.vehicleInfo.results[1].week, $scope.monthValues = $scope.vehicleInfo.results[2].month, $scope.yearValues = $scope.vehicleInfo.results[3].year
        }, function(err) {})
    }, $scope.init()
}]), angular.module("angularProjectApp").controller("CorpadminCtrl", ["$scope", "$log", "$rootScope", "Dmc", "localStorageService", "toastr", "Admin", "$modal", "imageProcessor", "$q", "$timeout", "bookingAgent", function($scope, $log, $rootScope, Dmc, localStorageService, toastr, Admin, $modal, imageProcessor, $q, $timeout, bookingAgent) {
    var init = function() {
        $scope.map = {
            center: {
                latitude: 37,
                longitude: -122
            },
            zoom: 8
        }, $scope.mapControl = {}, $scope.DmcId = localStorageService.get("User").dmc_id, $scope.userType = localStorageService.get("Type"), $scope.tripdates = {
            startDate: moment().subtract(30, "days"),
            endDate: moment()
        }, Dmc.general.pull($scope.DmcId).then(function(res) {
            $scope.generalDMC = res, $scope.viewType = $scope.generalDMC.business_type, "hotel" == $scope.viewType && ($scope.viewType = "Hotel"), $scope.selectedInvite = $scope.generalDMC.inviteCode
        }), Dmc.general.getTree().then(function(res) {
            var newTree = res;
            $scope.departments = newTree.departments, $scope.divisions = newTree.divisions, $scope.companyName = newTree.name
        }, function(err) {}), "/DMCDepartmentAdmins" == $scope.userType && ($scope.departments = localStorageService.get("tree").departments, angular.forEach($scope.departments, function(department) {
            localStorageService.get("User").dmc_department_id == department.id && ($scope.selectedDepartment = department)
        })), "/DMCDepartmentAdmins" == $scope.userType && ($scope.divisions = localStorageService.get("tree").divisions, angular.forEach($scope.divisions, function(division) {
            localStorageService.get("User").dmc_division_id == division.id && ($scope.selectedDivision = division)
        })), Admin.markets.pull().then(function(res) {
            $scope.markets = res
        }, function(err) {}), $scope.options1 = {
            chart: {
                type: "discreteBarChart",
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function(d) {
                    return d.label
                },
                y: function(d) {
                    return d.value
                },
                showValues: !0,
                valueFormat: function(d) {
                    return d3.format(",.4f")(d)
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: "X Axis"
                },
                yAxis: {
                    axisLabel: "Y Axis",
                    axisLabelDistance: 30
                }
            }
        }, $scope.data1 = [{
            key: "Cumulative Return",
            values: [{
                label: "A",
                value: -29.765957771107
            }, {
                label: "B",
                value: 0
            }, {
                label: "C",
                value: 32.807804682612
            }, {
                label: "D",
                value: 196.45946739256
            }, {
                label: "E",
                value: .19434030906893
            }, {
                label: "F",
                value: -98.079782601442
            }, {
                label: "G",
                value: -13.925743130903
            }, {
                label: "H",
                value: -5.1387322875705
            }]
        }], $scope.options2 = {
            chart: {
                type: "pieChart",
                height: 500,
                x: function(d) {
                    return d.key
                },
                y: function(d) {
                    return d.y
                },
                showLabels: !0,
                transitionDuration: 500,
                labelThreshold: .01,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        }, $scope.data2 = [{
            key: "One",
            y: 5
        }, {
            key: "Two",
            y: 2
        }, {
            key: "Three",
            y: 9
        }, {
            key: "Four",
            y: 7
        }, {
            key: "Five",
            y: 4
        }, {
            key: "Six",
            y: 3
        }, {
            key: "Seven",
            y: .5
        }], $scope.options3 = {
            chart: {
                type: "stackedAreaChart",
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 40
                },
                x: function(d) {
                    return d[0]
                },
                y: function(d) {
                    return d[1]
                },
                useVoronoi: !1,
                clipEdge: !0,
                transitionDuration: 500,
                useInteractiveGuideline: !0,
                xAxis: {
                    showMaxMin: !1,
                    tickFormat: function(d) {
                        return d3.time.format("%x")(new Date(d))
                    }
                },
                yAxis: {
                    tickFormat: function(d) {
                        return d3.format(",.2f")(d)
                    }
                }
            }
        }, $scope.data3 = [{
            key: "North America",
            values: [
                [10254096e5, 23.041422681023],
                [1028088e6, 19.854291255832],
                [10307664e5, 21.02286281168],
                [10333584e5, 22.093608385173],
                [10360404e5, 25.108079299458],
                [10386324e5, 26.982389242348],
                [10413108e5, 19.828984957662],
                [10439892e5, 19.914055036294],
                [10464084e5, 19.436150539916],
                [10490868e5, 21.558650338602],
                [10516752e5, 24.395594061773],
                [10543536e5, 24.747089309384],
                [10569456e5, 23.491755498807],
                [1059624e6, 23.376634878164],
                [10623024e5, 24.581223154533],
                [10648944e5, 24.922476843538],
                [10675764e5, 27.357712939042],
                [10701684e5, 26.503020572593],
                [10728468e5, 26.658901244878],
                [10755252e5, 27.065704156445],
                [10780308e5, 28.735320452588],
                [10807092e5, 31.572277846319],
                [10832976e5, 30.932161503638],
                [1085976e6, 31.627029785554],
                [1088568e6, 28.728743674232],
                [10912464e5, 26.858365172675],
                [10939248e5, 27.279922830032],
                [10965168e5, 34.408301211324],
                [10991952e5, 34.794362930439],
                [11017908e5, 35.609978198951],
                [11044692e5, 33.574394968037],
                [11071476e5, 31.979405070598],
                [11095668e5, 31.19009040297],
                [11122452e5, 31.083933968994],
                [11148336e5, 29.668971113185],
                [1117512e6, 31.490638014379],
                [1120104e6, 31.818617451128],
                [11227824e5, 32.960314008183],
                [11254608e5, 31.313383196209],
                [11280528e5, 33.125486081852],
                [11307348e5, 32.791805509149],
                [11333268e5, 33.506038030366],
                [11360052e5, 26.96501697216],
                [11386836e5, 27.38478809681],
                [11411028e5, 27.371377218209],
                [11437812e5, 26.309915460827],
                [11463696e5, 26.425199957518],
                [1149048e6, 26.823411519396],
                [115164e7, 23.850443591587],
                [11543184e5, 23.158355444054],
                [11569968e5, 22.998689393695],
                [11595888e5, 27.9771285113],
                [11622708e5, 29.073672469719],
                [11648628e5, 28.587640408904],
                [11675412e5, 22.788453687637],
                [11702196e5, 22.429199073597],
                [11726388e5, 22.324103271052],
                [11753136e5, 17.558388444187],
                [11779056e5, 16.769518096208],
                [1180584e6, 16.214738201301],
                [1183176e6, 18.729632971229],
                [11858544e5, 18.814523318847],
                [11885328e5, 19.789986451358],
                [11911248e5, 17.070049054933],
                [11938032e5, 16.121349575716],
                [11963988e5, 15.141659430091],
                [11990772e5, 17.175388025297],
                [12017556e5, 17.286592443522],
                [12042612e5, 16.323141626568],
                [1206936e6, 19.231263773952],
                [1209528e6, 18.446256391095],
                [12122064e5, 17.822632399764],
                [12147984e5, 15.53936647598],
                [12174768e5, 15.255131790217],
                [12201552e5, 15.660963922592],
                [12227472e5, 13.254482273698],
                [12254256e5, 11.920796202299],
                [12280212e5, 12.122809090924],
                [12306996e5, 15.691026271393],
                [1233378e6, 14.720881635107],
                [12357972e5, 15.387939360044],
                [1238472e6, 13.765436672228],
                [1241064e6, 14.631445864799],
                [12437424e5, 14.292446536221],
                [12463344e5, 16.170071367017],
                [12490128e5, 15.948135554337],
                [12516912e5, 16.612872685134],
                [12542832e5, 18.778338719091],
                [12569616e5, 16.756026065421],
                [12595572e5, 19.385804443146],
                [12622356e5, 22.950590240168],
                [1264914e6, 23.61159018141],
                [12673332e5, 25.708586989581],
                [1270008e6, 26.883915999885],
                [12726e8, 25.893486687065],
                [12752784e5, 24.678914263176],
                [12778704e5, 25.937275793024],
                [12805488e5, 29.461381693838],
                [12832272e5, 27.357322961861],
                [12858192e5, 29.057235285673],
                [12884976e5, 28.549434189386],
                [12910932e5, 28.506352379724],
                [12937716e5, 29.449241421598],
                [129645e7, 25.796838168807],
                [12988692e5, 28.740145449188],
                [1301544e6, 22.091744141872],
                [1304136e6, 25.07966254541],
                [13068144e5, 23.674906973064],
                [13094064e5, 23.418002742929],
                [13120848e5, 23.24364413887],
                [13147632e5, 31.591854066817],
                [13173552e5, 31.497112374114],
                [13200336e5, 26.67238082043],
                [13226292e5, 27.297080015495],
                [13253076e5, 20.174315530051],
                [1327986e6, 19.631084213898],
                [13304916e5, 20.366462219461],
                [13331664e5, 19.284784434185],
                [13357584e5, 19.157810257624]
            ]
        }, {
            key: "Africa",
            values: [
                [10254096e5, 7.9356392949025],
                [1028088e6, 7.4514668527298],
                [10307664e5, 7.9085410566608],
                [10333584e5, 5.8996782364764],
                [10360404e5, 6.0591869346923],
                [10386324e5, 5.9667815800451],
                [10413108e5, 8.65528925664],
                [10439892e5, 8.7690763386254],
                [10464084e5, 8.6386160387453],
                [10490868e5, 5.9895557449743],
                [10516752e5, 6.3840324338159],
                [10543536e5, 6.5196511461441],
                [10569456e5, 7.0738618553114],
                [1059624e6, 6.5745957367133],
                [10623024e5, 6.4658359184444],
                [10648944e5, 2.7622758754954],
                [10675764e5, 2.9794782986241],
                [10701684e5, 2.8735432712019],
                [10728468e5, 1.6344817513645],
                [10755252e5, 1.5869248754883],
                [10780308e5, 1.7172279157246],
                [10807092e5, 1.9649927409867],
                [10832976e5, 2.0261695079196],
                [1085976e6, 2.0541261923929],
                [1088568e6, 3.9466318927569],
                [10912464e5, 3.7826770946089],
                [10939248e5, 3.9543021004028],
                [10965168e5, 3.8309891064711],
                [10991952e5, 3.6340958946166],
                [11017908e5, 3.5289755762525],
                [11044692e5, 5.702378559857],
                [11071476e5, 5.6539569019223],
                [11095668e5, 5.5449506370392],
                [11122452e5, 4.7579993280677],
                [11148336e5, 4.4816139372906],
                [1117512e6, 4.5965558568606],
                [1120104e6, 4.3747066116976],
                [11227824e5, 4.4588822917087],
                [11254608e5, 4.4460351848286],
                [11280528e5, 3.7989113035136],
                [11307348e5, 3.7743883140088],
                [11333268e5, 3.7727852823828],
                [11360052e5, 7.2968111448895],
                [11386836e5, 7.2800122043237],
                [11411028e5, 7.1187787503354],
                [11437812e5, 8.351887016482],
                [11463696e5, 8.4156698763993],
                [1149048e6, 8.1673298604231],
                [115164e7, 5.5132447126042],
                [11543184e5, 6.1152537710599],
                [11569968e5, 6.076765091942],
                [11595888e5, 4.6304473798646],
                [11622708e5, 4.6301068469402],
                [11648628e5, 4.3466656309389],
                [11675412e5, 6.830104897003],
                [11702196e5, 7.241633040029],
                [11726388e5, 7.1432372054153],
                [11753136e5, 10.608942063374],
                [11779056e5, 10.914964549494],
                [1180584e6, 10.933223880565],
                [1183176e6, 8.3457524851265],
                [11858544e5, 8.1078413081882],
                [11885328e5, 8.2697185922474],
                [11911248e5, 8.4742436475968],
                [11938032e5, 8.4994601179319],
                [11963988e5, 8.7387319683243],
                [11990772e5, 6.8829183612895],
                [12017556e5, 6.984133637885],
                [12042612e5, 7.0860136043287],
                [1206936e6, 4.3961787956053],
                [1209528e6, 3.8699674365231],
                [12122064e5, 3.6928925238305],
                [12147984e5, 6.7571718894253],
                [12174768e5, 6.4367313362344],
                [12201552e5, 6.4048441521454],
                [12227472e5, 5.4643833239669],
                [12254256e5, 5.3150786833374],
                [12280212e5, 5.3011272612576],
                [12306996e5, 4.1203601430809],
                [1233378e6, 4.0881783200525],
                [12357972e5, 4.1928665957189],
                [1238472e6, 7.0249415663205],
                [1241064e6, 7.006530880769],
                [12437424e5, 6.994835633224],
                [12463344e5, 6.1220222336254],
                [12490128e5, 6.1177436137653],
                [12516912e5, 6.1413396231981],
                [12542832e5, 4.8046006145874],
                [12569616e5, 4.6647600660544],
                [12595572e5, 4.544865006255],
                [12622356e5, 6.0488249316539],
                [1264914e6, 6.3188669540206],
                [12673332e5, 6.5873958262306],
                [1270008e6, 6.2281189839578],
                [12726e8, 5.8948915746059],
                [12752784e5, 5.5967320482214],
                [12778704e5, .99784432084837],
                [12805488e5, 1.0950794175359],
                [12832272e5, .94479734407491],
                [12858192e5, 1.222093988688],
                [12884976e5, 1.335093106856],
                [12910932e5, 1.3302565104985],
                [12937716e5, 1.340824670897],
                [129645e7, 0],
                [12988692e5, 0],
                [1301544e6, 0],
                [1304136e6, 0],
                [13068144e5, 0],
                [13094064e5, 0],
                [13120848e5, 0],
                [13147632e5, 0],
                [13173552e5, 4.4583692315],
                [13200336e5, 3.6493043348059],
                [13226292e5, 3.8610064091761],
                [13253076e5, 5.5144800685202],
                [1327986e6, 5.1750695220791],
                [13304916e5, 5.6710066952691],
                [13331664e5, 5.5611890039181],
                [13357584e5, 5.5979368839939]
            ]
        }, {
            key: "South America",
            values: [
                [10254096e5, 7.9149900245423],
                [1028088e6, 7.0899888751059],
                [10307664e5, 7.5996132380614],
                [10333584e5, 8.2741174301034],
                [10360404e5, 9.3564460833513],
                [10386324e5, 9.7066786059904],
                [10413108e5, 10.213363052343],
                [10439892e5, 10.285809585273],
                [10464084e5, 10.222053149228],
                [10490868e5, 8.6188592137975],
                [10516752e5, 9.3335447543566],
                [10543536e5, 8.9312402186628],
                [10569456e5, 8.1895089343658],
                [1059624e6, 8.260622135079],
                [10623024e5, 7.7700786851364],
                [10648944e5, 7.9907428771318],
                [10675764e5, 8.7769091865606],
                [10701684e5, 8.4855077060661],
                [10728468e5, 9.6277203033655],
                [10755252e5, 9.9685913452624],
                [10780308e5, 10.615085181759],
                [10807092e5, 9.2902488079646],
                [10832976e5, 8.8610439830061],
                [1085976e6, 9.1075344931229],
                [1088568e6, 9.9156737639203],
                [10912464e5, 9.7826003238782],
                [10939248e5, 10.55403610555],
                [10965168e5, 10.926900264097],
                [10991952e5, 10.903144818736],
                [11017908e5, 10.862890389067],
                [11044692e5, 10.64604998964],
                [11071476e5, 10.042790814087],
                [11095668e5, 9.7173391591038],
                [11122452e5, 9.6122415755443],
                [11148336e5, 9.4337921146562],
                [1117512e6, 9.814827171183],
                [1120104e6, 12.059260396788],
                [11227824e5, 12.139649903873],
                [11254608e5, 12.281290663822],
                [11280528e5, 8.8037085409056],
                [11307348e5, 8.6300618239176],
                [11333268e5, 9.1225708491432],
                [11360052e5, 12.988124170836],
                [11386836e5, 13.356778764353],
                [11411028e5, 13.611196863271],
                [11437812e5, 6.8959030061189],
                [11463696e5, 6.9939633271353],
                [1149048e6, 6.7241510257676],
                [115164e7, 5.5611293669517],
                [11543184e5, 5.6086488714041],
                [11569968e5, 5.4962849907033],
                [11595888e5, 6.9193153169278],
                [11622708e5, 7.0016334389778],
                [11648628e5, 6.7865422443273],
                [11675412e5, 9.0006454225383],
                [11702196e5, 9.2233916171431],
                [11726388e5, 8.8929316009479],
                [11753136e5, 10.345937520404],
                [11779056e5, 10.075914677026],
                [1180584e6, 10.089006188111],
                [1183176e6, 10.598330295008],
                [11858544e5, 9.9689546533009],
                [11885328e5, 9.7740580198146],
                [11911248e5, 10.558483060626],
                [11938032e5, 9.9314651823603],
                [11963988e5, 9.3997715873769],
                [11990772e5, 8.4086493387262],
                [12017556e5, 8.9698309085926],
                [12042612e5, 8.2778357995396],
                [1206936e6, 8.8585045600123],
                [1209528e6, 8.7013756413322],
                [12122064e5, 7.7933605469443],
                [12147984e5, 7.0236183483064],
                [12174768e5, 6.9873088186829],
                [12201552e5, 6.8031713070097],
                [12227472e5, 6.6869531315723],
                [12254256e5, 6.138256993963],
                [12280212e5, 5.6434994016354],
                [12306996e5, 5.495220262512],
                [1233378e6, 4.6885326869846],
                [12357972e5, 4.4524349883438],
                [1238472e6, 5.6766520778185],
                [1241064e6, 5.7675774480752],
                [12437424e5, 5.7882863168337],
                [12463344e5, 7.2666010034924],
                [12490128e5, 7.5191821322261],
                [12516912e5, 7.849651451445],
                [12542832e5, 10.383992037985],
                [12569616e5, 9.0653691861818],
                [12595572e5, 9.6705248324159],
                [12622356e5, 10.856380561349],
                [1264914e6, 11.27452370892],
                [12673332e5, 11.754156529088],
                [1270008e6, 8.2870811422455],
                [12726e8, 8.0210264360699],
                [12752784e5, 7.5375074474865],
                [12778704e5, 8.3419527338039],
                [12805488e5, 9.4197471818443],
                [12832272e5, 8.7321733185797],
                [12858192e5, 9.6627062648126],
                [12884976e5, 10.187962234548],
                [12910932e5, 9.8144201733476],
                [12937716e5, 10.275723361712],
                [129645e7, 16.796066079353],
                [12988692e5, 17.543254984075],
                [1301544e6, 16.673660675083],
                [1304136e6, 17.963944353609],
                [13068144e5, 16.63774086721],
                [13094064e5, 15.84857094609],
                [13120848e5, 14.767303362181],
                [13147632e5, 24.778452182433],
                [13173552e5, 18.370353229999],
                [13200336e5, 15.253137429099],
                [13226292e5, 14.989600840649],
                [13253076e5, 16.052539160125],
                [1327986e6, 16.424390322793],
                [13304916e5, 17.884020741104],
                [13331664e5, 18.372698836036],
                [13357584e5, 18.315881576096]
            ]
        }, {
            key: "Asia",
            values: [
                [10254096e5, 13.153938631352],
                [1028088e6, 12.456410521864],
                [10307664e5, 12.537048663919],
                [10333584e5, 13.947386398309],
                [10360404e5, 14.421680682568],
                [10386324e5, 14.143238262286],
                [10413108e5, 12.229635347478],
                [10439892e5, 12.508479916948],
                [10464084e5, 12.155368409526],
                [10490868e5, 13.335455563994],
                [10516752e5, 12.888210138167],
                [10543536e5, 12.842092790511],
                [10569456e5, 12.513816474199],
                [1059624e6, 12.21453674494],
                [10623024e5, 11.750848343935],
                [10648944e5, 10.526579636787],
                [10675764e5, 10.873596086087],
                [10701684e5, 11.019967131519],
                [10728468e5, 11.235789380602],
                [10755252e5, 11.859910850657],
                [10780308e5, 12.531031616536],
                [10807092e5, 11.360451067019],
                [10832976e5, 11.456244780202],
                [1085976e6, 11.436991407309],
                [1088568e6, 11.638595744327],
                [10912464e5, 11.190418301469],
                [10939248e5, 11.835608007589],
                [10965168e5, 11.540980244475],
                [10991952e5, 10.958762325687],
                [11017908e5, 10.885791159509],
                [11044692e5, 13.605810720109],
                [11071476e5, 13.128978067437],
                [11095668e5, 13.119012086882],
                [11122452e5, 13.003706129783],
                [11148336e5, 13.326996807689],
                [1117512e6, 13.547947991743],
                [1120104e6, 12.807959646616],
                [11227824e5, 12.931763821068],
                [11254608e5, 12.795359993008],
                [11280528e5, 9.6998935538319],
                [11307348e5, 9.3473740089131],
                [11333268e5, 9.36902067716],
                [11360052e5, 14.258619539875],
                [11386836e5, 14.21241095603],
                [11411028e5, 13.973193618249],
                [11437812e5, 15.218233920664],
                [11463696e5, 14.382109727451],
                [1149048e6, 13.894310878491],
                [115164e7, 15.593086090031],
                [11543184e5, 16.244839695189],
                [11569968e5, 16.017088850647],
                [11595888e5, 14.183951830057],
                [11622708e5, 14.148523245696],
                [11648628e5, 13.424326059971],
                [11675412e5, 12.974450435754],
                [11702196e5, 13.232470418021],
                [11726388e5, 13.318762655574],
                [11753136e5, 15.961407746104],
                [11779056e5, 16.287714639805],
                [1180584e6, 16.24659058389],
                [1183176e6, 17.564505594808],
                [11858544e5, 17.872725373164],
                [11885328e5, 18.018998508756],
                [11911248e5, 15.584518016602],
                [11938032e5, 15.480850647182],
                [11963988e5, 15.699120036985],
                [11990772e5, 19.184281817226],
                [12017556e5, 19.691226605205],
                [12042612e5, 18.982314051293],
                [1206936e6, 18.707820309008],
                [1209528e6, 17.459630929759],
                [12122064e5, 16.500616076782],
                [12147984e5, 18.086324003978],
                [12174768e5, 18.929464156259],
                [12201552e5, 18.233728682084],
                [12227472e5, 16.315776297325],
                [12254256e5, 14.632892190251],
                [12280212e5, 14.667835024479],
                [12306996e5, 13.946993947309],
                [1233378e6, 14.394304684398],
                [12357972e5, 13.724462792967],
                [1238472e6, 10.930879035807],
                [1241064e6, 9.8339915513708],
                [12437424e5, 10.053858541872],
                [12463344e5, 11.786998438286],
                [12490128e5, 11.780994901769],
                [12516912e5, 11.305889670277],
                [12542832e5, 10.918452290083],
                [12569616e5, 9.6811395055706],
                [12595572e5, 10.971529744038],
                [12622356e5, 13.330210480209],
                [1264914e6, 14.592637568961],
                [12673332e5, 14.605329141157],
                [1270008e6, 13.936853794037],
                [12726e8, 12.189480759072],
                [12752784e5, 11.676151385046],
                [12778704e5, 13.058852800018],
                [12805488e5, 13.62891543203],
                [12832272e5, 13.811107569918],
                [12858192e5, 13.786494560786],
                [12884976e5, 14.045162857531],
                [12910932e5, 13.697412447286],
                [12937716e5, 13.677681376221],
                [129645e7, 19.96151186453],
                [12988692e5, 21.049198298156],
                [1301544e6, 22.687631094009],
                [1304136e6, 25.469010617433],
                [13068144e5, 24.88379943712],
                [13094064e5, 24.203843814249],
                [13120848e5, 22.138760964036],
                [13147632e5, 16.034636966228],
                [13173552e5, 15.394958944555],
                [13200336e5, 12.62564246197],
                [13226292e5, 12.973735699739],
                [13253076e5, 15.78601833615],
                [1327986e6, 15.227368020134],
                [13304916e5, 15.899752650733],
                [13331664e5, 15.661317319168],
                [13357584e5, 15.359891177281]
            ]
        }, {
            key: "Europe",
            values: [
                [10254096e5, 9.3433263069351],
                [1028088e6, 8.4583069475546],
                [10307664e5, 8.0342398154196],
                [10333584e5, 8.1538966876572],
                [10360404e5, 10.743604786849],
                [10386324e5, 12.349366155851],
                [10413108e5, 10.742682503899],
                [10439892e5, 11.360983869935],
                [10464084e5, 11.441336039535],
                [10490868e5, 10.897508791837],
                [10516752e5, 11.469101547709],
                [10543536e5, 12.086311476742],
                [10569456e5, 8.0697180773504],
                [1059624e6, 8.2004392233445],
                [10623024e5, 8.4566434900643],
                [10648944e5, 7.9565760979059],
                [10675764e5, 9.3764619255827],
                [10701684e5, 9.0747664160538],
                [10728468e5, 10.508939004673],
                [10755252e5, 10.69936754483],
                [10780308e5, 10.681562399145],
                [10807092e5, 13.184786109406],
                [10832976e5, 12.668213052351],
                [1085976e6, 13.430509403986],
                [1088568e6, 12.393086349213],
                [10912464e5, 11.942374044842],
                [10939248e5, 12.062227685742],
                [10965168e5, 11.969974363623],
                [10991952e5, 12.14374574055],
                [11017908e5, 12.69422821995],
                [11044692e5, 9.1235211044692],
                [11071476e5, 8.758211757584],
                [11095668e5, 8.8072309258443],
                [11122452e5, 11.687595946835],
                [11148336e5, 11.079723082664],
                [1117512e6, 12.049712896076],
                [1120104e6, 10.725319428684],
                [11227824e5, 10.844849996286],
                [11254608e5, 10.833535488461],
                [11280528e5, 17.180932407865],
                [11307348e5, 15.894764896516],
                [11333268e5, 16.412751299498],
                [11360052e5, 12.573569093402],
                [11386836e5, 13.242301508051],
                [11411028e5, 12.863536342041],
                [11437812e5, 21.034044171629],
                [11463696e5, 21.419084618802],
                [1149048e6, 21.142678863692],
                [115164e7, 26.56848967753],
                [11543184e5, 24.839144939906],
                [11569968e5, 25.456187462166],
                [11595888e5, 26.350164502825],
                [11622708e5, 26.478333205189],
                [11648628e5, 26.425979547846],
                [11675412e5, 28.191461582256],
                [11702196e5, 28.930307448808],
                [11726388e5, 29.521413891117],
                [11753136e5, 28.188285966466],
                [11779056e5, 27.704619625831],
                [1180584e6, 27.49086242483],
                [1183176e6, 28.770679721286],
                [11858544e5, 29.06048067145],
                [11885328e5, 28.240998844973],
                [11911248e5, 33.004893194128],
                [11938032e5, 34.075180359928],
                [11963988e5, 32.548560664834],
                [11990772e5, 30.629727432729],
                [12017556e5, 28.642858788159],
                [12042612e5, 27.973575227843],
                [1206936e6, 27.393351882726],
                [1209528e6, 28.476095288522],
                [12122064e5, 29.29667866426],
                [12147984e5, 29.222333802896],
                [12174768e5, 28.092966093842],
                [12201552e5, 28.107159262922],
                [12227472e5, 25.482974832099],
                [12254256e5, 21.208115993834],
                [12280212e5, 20.295043095268],
                [12306996e5, 15.925754618402],
                [1233378e6, 17.162864628346],
                [12357972e5, 17.084345773174],
                [1238472e6, 22.24600710228],
                [1241064e6, 24.530543998508],
                [12437424e5, 25.084184918241],
                [12463344e5, 16.606166527359],
                [12490128e5, 17.239620011628],
                [12516912e5, 17.336739127379],
                [12542832e5, 25.478492475754],
                [12569616e5, 23.017152085244],
                [12595572e5, 25.617745423684],
                [12622356e5, 24.061133998641],
                [1264914e6, 23.223933318646],
                [12673332e5, 24.425887263936],
                [1270008e6, 35.501471156693],
                [12726e8, 33.775013878675],
                [12752784e5, 30.417993630285],
                [12778704e5, 30.023598978467],
                [12805488e5, 33.327519522436],
                [12832272e5, 31.963388450372],
                [12858192e5, 30.49896723209],
                [12884976e5, 32.403696817913],
                [12910932e5, 31.47736071922],
                [12937716e5, 31.53259666241],
                [129645e7, 41.760282761548],
                [12988692e5, 45.605771243237],
                [1301544e6, 39.986557966215],
                [1304136e6, 43.84633051005],
                [13068144e5, 39.857316881858],
                [13094064e5, 37.675127768207],
                [13120848e5, 35.775077970313],
                [13147632e5, 48.631009702578],
                [13173552e5, 42.830831754505],
                [13200336e5, 35.611502589362],
                [13226292e5, 35.320136981738],
                [13253076e5, 31.564136901516],
                [1327986e6, 32.074407502433],
                [13304916e5, 35.053013769977],
                [13331664e5, 33.873085184128],
                [13357584e5, 32.321039427046]
            ]
        }, {
            key: "Australia",
            values: [
                [10254096e5, 5.1162447683392],
                [1028088e6, 4.2022848306513],
                [10307664e5, 4.3543715758736],
                [10333584e5, 5.4641223667245],
                [10360404e5, 6.0041275884577],
                [10386324e5, 6.6050520064486],
                [10413108e5, 5.0154059912793],
                [10439892e5, 5.1835708554647],
                [10464084e5, 5.1142682006164],
                [10490868e5, 5.0271381717695],
                [10516752e5, 5.3437782653456],
                [10543536e5, 5.2105844515767],
                [10569456e5, 6.552565997799],
                [1059624e6, 6.9873363581831],
                [10623024e5, 7.010986789097],
                [10648944e5, 4.4254242025515],
                [10675764e5, 4.9613848042174],
                [10701684e5, 4.8854920484764],
                [10728468e5, 4.0441111794228],
                [10755252e5, 4.0219596813179],
                [10780308e5, 4.3065749225355],
                [10807092e5, 3.9148434915404],
                [10832976e5, 3.8659430654512],
                [1085976e6, 3.9572824600686],
                [1088568e6, 4.7372190641522],
                [10912464e5, 4.6871476374455],
                [10939248e5, 5.0398702564196],
                [10965168e5, 5.5221787544964],
                [10991952e5, 5.424646299798],
                [11017908e5, 5.9240223067349],
                [11044692e5, 5.9936860983601],
                [11071476e5, 5.8499523215019],
                [11095668e5, 6.4149040329325],
                [11122452e5, 6.4547895561969],
                [11148336e5, 5.9385382611161],
                [1117512e6, 6.0486751030592],
                [1120104e6, 5.23108613838],
                [11227824e5, 5.5857797121029],
                [11254608e5, 5.3454665096987],
                [11280528e5, 5.0439154120119],
                [11307348e5, 5.054634702913],
                [11333268e5, 5.3819451380848],
                [11360052e5, 5.2638869269803],
                [11386836e5, 5.5806167415681],
                [11411028e5, 5.4539047069985],
                [11437812e5, 7.6728842432362],
                [11463696e5, 7.719946716654],
                [1149048e6, 8.0144619912942],
                [115164e7, 7.942223133434],
                [11543184e5, 8.3998279827444],
                [11569968e5, 8.532324572605],
                [11595888e5, 4.7324285199763],
                [11622708e5, 4.7402397487697],
                [11648628e5, 4.9042069355168],
                [11675412e5, 5.9583963430882],
                [11702196e5, 6.3693899239171],
                [11726388e5, 6.261153903813],
                [11753136e5, 5.3443942184584],
                [11779056e5, 5.4932111235361],
                [1180584e6, 5.5747393101109],
                [1183176e6, 5.3833633060013],
                [11858544e5, 5.5125898831832],
                [11885328e5, 5.8116112661327],
                [11911248e5, 4.3962296939996],
                [11938032e5, 4.6967663605521],
                [11963988e5, 4.7963004350914],
                [11990772e5, 4.1817985183351],
                [12017556e5, 4.3797643870182],
                [12042612e5, 4.6966642197965],
                [1206936e6, 4.3609995132565],
                [1209528e6, 4.4736290996496],
                [12122064e5, 4.3749762738128],
                [12147984e5, 3.3274661194507],
                [12174768e5, 3.0316184691337],
                [12201552e5, 2.5718140204728],
                [12227472e5, 2.7034994044603],
                [12254256e5, 2.2033786591364],
                [12280212e5, 1.9850621240805],
                [12306996e5, 0],
                [1233378e6, 0],
                [12357972e5, 0],
                [1238472e6, 0],
                [1241064e6, 0],
                [12437424e5, 0],
                [12463344e5, 0],
                [12490128e5, 0],
                [12516912e5, 0],
                [12542832e5, .44495950017788],
                [12569616e5, .33945469262483],
                [12595572e5, .38348269455195],
                [12622356e5, 0],
                [1264914e6, 0],
                [12673332e5, 0],
                [1270008e6, 0],
                [12726e8, 0],
                [12752784e5, 0],
                [12778704e5, 0],
                [12805488e5, 0],
                [12832272e5, 0],
                [12858192e5, 0],
                [12884976e5, 0],
                [12910932e5, 0],
                [12937716e5, 0],
                [129645e7, .52216435716176],
                [12988692e5, .59275786698454],
                [1301544e6, 0],
                [1304136e6, 0],
                [13068144e5, 0],
                [13094064e5, 0],
                [13120848e5, 0],
                [13147632e5, 0],
                [13173552e5, 0],
                [13200336e5, 0],
                [13226292e5, 0],
                [13253076e5, 0],
                [1327986e6, 0],
                [13304916e5, 0],
                [13331664e5, 0],
                [13357584e5, 0]
            ]
        }, {
            key: "Antarctica",
            values: [
                [10254096e5, 1.3503144674343],
                [1028088e6, 1.2232741112434],
                [10307664e5, 1.3930470790784],
                [10333584e5, 1.2631275030593],
                [10360404e5, 1.5842699103708],
                [10386324e5, 1.9546996043116],
                [10413108e5, .8504048300986],
                [10439892e5, .85340686311353],
                [10464084e5, .843061357391],
                [10490868e5, 2.119846992476],
                [10516752e5, 2.5285382124858],
                [10543536e5, 2.5056570712835],
                [10569456e5, 2.5212789901005],
                [1059624e6, 2.6192011642534],
                [10623024e5, 2.5382187823805],
                [10648944e5, 2.3393223047168],
                [10675764e5, 2.491219888698],
                [10701684e5, 2.497555874906],
                [10728468e5, 1.734018115546],
                [10755252e5, 1.9307268299646],
                [10780308e5, 2.2261679836799],
                [10807092e5, 1.7608893704206],
                [10832976e5, 1.6242690616808],
                [1085976e6, 1.7161663801295],
                [1088568e6, 1.7183554537038],
                [10912464e5, 1.7179780759145],
                [10939248e5, 1.7314274801784],
                [10965168e5, 1.2596883356752],
                [10991952e5, 1.381177053009],
                [11017908e5, 1.4408819615814],
                [11044692e5, 3.4743581836444],
                [11071476e5, 3.3603749903192],
                [11095668e5, 3.5350883257893],
                [11122452e5, 3.0949644237828],
                [11148336e5, 3.0796455899995],
                [1117512e6, 3.3441247640644],
                [1120104e6, 4.0947643978168],
                [11227824e5, 4.4072631274052],
                [11254608e5, 4.4870979780825],
                [11280528e5, 4.8404549457934],
                [11307348e5, 4.8293016233697],
                [11333268e5, 5.2238093263952],
                [11360052e5, 3.382306337815],
                [11386836e5, 3.7056975170243],
                [11411028e5, 3.7561118692318],
                [11437812e5, 2.861913700854],
                [11463696e5, 2.9933744103381],
                [1149048e6, 2.7127537218463],
                [115164e7, 3.1195497076283],
                [11543184e5, 3.4066964004508],
                [11569968e5, 3.3754571113569],
                [11595888e5, 2.2965579982924],
                [11622708e5, 2.4486818633018],
                [11648628e5, 2.4002308848517],
                [11675412e5, 1.9649579750349],
                [11702196e5, 1.9385263638056],
                [11726388e5, 1.9128975336387],
                [11753136e5, 2.3412869836298],
                [11779056e5, 2.4337870351445],
                [1180584e6, 2.62179703171],
                [1183176e6, 3.2642864957929],
                [11858544e5, 3.3200396223709],
                [11885328e5, 3.3934212707572],
                [11911248e5, 4.2822327088179],
                [11938032e5, 4.1474964228541],
                [11963988e5, 4.1477082879801],
                [11990772e5, 5.2947122916128],
                [12017556e5, 5.2919843508028],
                [12042612e5, 5.198978305031],
                [1206936e6, 3.5603057673513],
                [1209528e6, 3.3009087690692],
                [12122064e5, 3.1784852603792],
                [12147984e5, 4.5889503538868],
                [12174768e5, 4.401779617494],
                [12201552e5, 4.2208301828278],
                [12227472e5, 3.89396671475],
                [12254256e5, 3.0423832241354],
                [12280212e5, 3.135520611578],
                [12306996e5, 1.9631418164089],
                [1233378e6, 1.8963543874958],
                [12357972e5, 1.8266636017025],
                [1238472e6, .93136635895188],
                [1241064e6, .92737801918888],
                [12437424e5, .97591889805002],
                [12463344e5, 2.6841193805515],
                [12490128e5, 2.5664341140531],
                [12516912e5, 2.3887523699873],
                [12542832e5, 1.1737801663681],
                [12569616e5, 1.0953582317281],
                [12595572e5, 1.2495674976653],
                [12622356e5, .36607452464754],
                [1264914e6, .3548719047291],
                [12673332e5, .36769242398939],
                [1270008e6, 0],
                [12726e8, 0],
                [12752784e5, 0],
                [12778704e5, 0],
                [12805488e5, 0],
                [12832272e5, 0],
                [12858192e5, .85450741275337],
                [12884976e5, .91360317921637],
                [12910932e5, .89647678692269],
                [12937716e5, .87800687192639],
                [129645e7, 0],
                [12988692e5, 0],
                [1301544e6, .43668720882994],
                [1304136e6, .4756523602692],
                [13068144e5, .46947368328469],
                [13094064e5, .45138896152316],
                [13120848e5, .43828726648117],
                [13147632e5, 2.0820861395316],
                [13173552e5, .9364411075395],
                [13200336e5, .60583907839773],
                [13226292e5, .61096950747437],
                [13253076e5, 0],
                [1327986e6, 0],
                [13304916e5, 0],
                [13331664e5, 0],
                [13357584e5, 0]
            ]
        }], $scope.openAddView(void 0, "views/dmc/stats.html")
    };
    $log.log("In Controller"), $scope.displayView = "", $scope.openAddView = function($event, addView) {
        "views/dmc/employees.html" == addView && ($scope.page = "Employees", Dmc.employee.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            $scope.employeeList = res
        }, function(err) {})), "views/dmc/operators.html" == addView && ($scope.page = "Providers", $scope.TpList = void 0, Dmc.transportProvider.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            $scope.TpList = res, $scope.tpsAvailable = $scope.TpList.available, $scope.tpsAwaitingRatesApproval = $scope.TpList.awaitingRatesApproval, $scope.tpsAwaitingRates = $scope.TpList.awaitingRates, $scope.tpsNotSignedUp = $scope.TpList.notSignedUp, $scope.tpsCompiled = [], angular.forEach($scope.tpsAvailable, function(item) {
                item.status = "available", $scope.tpsCompiled.push(item)
            }), angular.forEach($scope.tpsAwaitingRatesApproval, function(item) {
                item.status = "waiting for approval", $scope.tpsCompiled.push(item)
            }), angular.forEach($scope.tpsAwaitingRates, function(item) {
                item.status = "waiting for rates", $scope.tpsCompiled.push(item)
            }), angular.forEach($scope.tpsNotSignedUp, function(item) {
                item.status = "not signed up", $scope.tpsCompiled.push(item)
            })
        }, function(err) {})), "views/dmc/addoperators.html" == addView && ($scope.page = "Add Provider"), "views/dmc/addrates.html" == addView && ($scope.page = "Billing"), "views/dmc/adddepartment.html" == addView && "Hotel" == $scope.viewType ? $scope.page = "Add hotel" : "views/dmc/adddepartment.html" == addView && "Corporation" == $scope.viewType ? $scope.page = "Add department" : "views/dmc/adddivision.html" == addView && "Hotel" == $scope.viewType ? $scope.page = "Add Region" : "views/dmc/adddivision.html" == addView && "Corporation" == $scope.viewType && ($scope.page = "Add division"), "views/dmc/reviewRates.html" == addView && ($scope.page = "View Rates"), "views/dmc/stats.html" == addView && ($scope.page = "Stats"), "views/dmc/ba.html" == addView && ($scope.page = "Booking agents", Dmc.bookingAgent.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            $scope.baList = res
        }, function(err) {})), "views/dmc/admin.html" == addView && ($scope.page = "Admins", Dmc.admin.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            $scope.adminList = res
        }, function(err) {})), "views/dmc/trips.html" == addView && ($scope.page = "Trips", Dmc.trips.pullCurrent($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            $scope.currentTripList = res
        }, function(err) {}), Dmc.trips.pullPast($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            $scope.pastTripList = res
        }, function(err) {}), Dmc.trips.pullFuture($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            $scope.futureTripList = res
        }, function(err) {})), "views/dmc/profile.html" == addView && ($scope.page = "Company profile"), "views/dmc/viewEmployee.html" == addView && ($scope.page = "Employee view"), "views/dmc/p2p.html" == addView && (Dmc.p2p.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            $scope.p2pList = res
        }, function(err) {}), $scope.page = "Point to point"), "views/dmc/payment.html" == addView && ($scope.page = "Billing", Dmc.paymentMethod.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            $scope.paymentMethods = res
        }, function(err) {})), $scope.displayView = addView, $event && $event.stopPropagation()
    }, $scope.addEmployeeModal = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addEmployee.html",
            scope: $scope,
            controller: "AddemployeeCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                selectedDivision: function() {
                    return $scope.selectedDivision
                },
                selectedDepartment: function() {
                    return $scope.selectedDepartment
                },
                DmcId: function() {
                    return $scope.DmcId
                }
            }
        }), $scope.modalInstance.result.then(function() {
            Dmc.employee.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.employeeList = res
            }, function(err) {})
        }, function() {
            Dmc.employee.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.employeeList = res
            }, function(err) {})
        })
    }, $scope.addBaModal = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addBa.html",
            scope: $scope,
            controller: "AddbaCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                selectedDivision: function() {
                    return $scope.selectedDivision
                },
                selectedDepartment: function() {
                    return $scope.selectedDepartment
                },
                DmcId: function() {
                    return $scope.DmcId
                }
            }
        }), $scope.modalInstance.result.then(function() {
            Dmc.bookingAgent.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.baList = res
            }, function(err) {})
        }, function() {
            Dmc.bookingAgent.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.baList = res
            }, function(err) {})
        })
    }, $scope.addAdminModal = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addAdmin.html",
            scope: $scope,
            controller: "AddadminCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                selectedDivision: function() {
                    return $scope.selectedDivision
                },
                selectedDepartment: function() {
                    return $scope.selectedDepartment
                },
                DmcId: function() {
                    return $scope.DmcId
                }
            }
        }), $scope.modalInstance.result.then(function() {
            Dmc.admins.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.adminList = res
            }, function(err) {})
        }, function() {
            Dmc.admins.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.adminList = res
            }, function(err) {})
        })
    }, $scope.addRates = function() {
        $rootScope.$broadcast("addRates")
    }, $scope.addMarkets = function() {
        $rootScope.$broadcast("addMarkets")
    }, $scope.saveDept = function() {
        var postDept = {
            name: this.newDeptName
        };
        $scope.selectedDivision && (postDept.dmc_division_id = $scope.selectedDivision.id);
        var newAdmin = this.admin;
        newAdmin ? newAdmin.first_name && newAdmin.last_name && newAdmin.telephone.number && newAdmin.email ? Dmc.department.create(postDept).then(function(res) {
            toastr.success("Department created");
            var newDeptId = res.result.id;
            Dmc.general.getTree().then(function(res) {
                var newTree = res;
                $scope.departments = newTree.departments, $scope.divisions = newTree.divisions
            }, function(err) {}), newAdmin.telephone.country_code = "+1", newAdmin.telephone.inactive = !1, newAdmin.telephone.is_mobile = !1, Dmc.department.addAdmin(newAdmin, newDeptId).then(function(res) {
                toastr.success("Department admin created")
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function(err) {
            $scope.errorViewer.display(err)
        }) : this.error = "If you want to add an admin please fill in all the fields" : Dmc.department.create(postDept).then(function(res) {
            toastr.success("Department created"), Dmc.general.getTree().then(function(res) {
                var newTree = res;
                $scope.departments = newTree.departments, $scope.divisions = newTree.divisions
            }, function(err) {})
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.saveDivision = function() {
        var postDivision = {
                name: this.newDivisionName
            },
            newAdmin = this.admin;
        newAdmin ? newAdmin.first_name && newAdmin.last_name && newAdmin.telephone.number && newAdmin.email ? Dmc.division.create(postDivision).then(function(res) {
            Dmc.general.getTree().then(function(res) {
                var newTree = res;
                $scope.departments = newTree.departments, $scope.divisions = newTree.divisions
            }, function(err) {});
            var newDivisionId = res.id;
            newAdmin.telephone.country_code = "+1", newAdmin.telephone.inactive = !1, newAdmin.telephone.is_mobile = !1, Dmc.division.addAdmin(newAdmin, newDivisionId).then(function(res) {
                toastr.success("Division created")
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function(err) {}) : this.error = "If you want to add an admin please fill in all the fields" : Dmc.division.create(postDivision).then(function(res) {
            toastr.success("Division created"), Dmc.general.getTree().then(function(res) {
                var newTree = res;
                $scope.departments = newTree.departments, $scope.divisions = newTree.divisions
            }, function(err) {})
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.selectDepartment = function(id, topLevel) {
        1 == topLevel && ($scope.selectedDivision = void 0), $scope.selectedDepartment = id, $scope.selectedInvite = $scope.selectedDepartment.inviteCode, $scope.openAddView(void 0, "views/dmc/stats.html")
    }, $scope.selectDivision = function(id) {
        $scope.selectedDivision = id, $scope.selectedDepartment = void 0, $scope.selectedInvite = $scope.selectedDivision.inviteCode, $scope.openAddView(void 0, "views/dmc/stats.html")
    }, $scope.selectDMC = function() {
        $scope.selectedDivision = void 0, $scope.selectedDepartment = void 0, $scope.selectedInvite = $scope.generalDMC.inviteCode, "/DMCDepartmentAdmins" == $scope.userType && ($scope.departments = localStorageService.get("tree").departments, angular.forEach($scope.departments, function(department) {
            localStorageService.get("User").dmc_department_id == department.id && ($scope.selectedDepartment = department)
        })), "/DMCDepartmentAdmins" == $scope.userType && ($scope.divisions = localStorageService.get("tree").divisions, angular.forEach($scope.divisions, function(division) {
            localStorageService.get("User").dmc_division_id == division.id && ($scope.selectedDivision = division)
        })), $scope.openAddView(void 0, "views/dmc/stats.html")
    }, $scope.inviteTp = function() {
        $scope.loadingOperator = !0;
        var invite = this.tp;
        $scope.selectedDivision && (invite.dmcDivisionId = $scope.selectedDivision.id, $scope.selectedDepartment || (invite.belongsTo = "dmcdivision")), $scope.selectedDepartment && (invite.dmcDepartmentId = $scope.selectedDepartment.id, invite.belongsTo = "dmcdepartment"), $scope.selectedDepartment || $scope.selectedDivision || (invite.belongsTo = "dmc"), invite.dmcId = $scope.DmcId, Dmc.transportProvider.invite(invite).then(function(res) {
            $scope.loadingOperator = !1, toastr.success("Your invitation has been sent"), this.tp = {}, $scope.loadingOperator = !1
        }, function(err) {
            $scope.loadingOperator = !1, $scope.errorViewer.display(err)
        })
    }, $scope.viewRates = function(TP) {
        $scope.selectedTP = TP, "waiting for rates" == $scope.selectedTP.status ? toastr.warning("You are waiting for your transport provider to add rates. Feel free to contact them.") : $scope.openAddView(void 0, "views/dmc/reviewRates.html")
    }, $scope.approveRates = function(rate) {
        $scope.ratesLoading = !0, Dmc.transportProvider.approveDenyRates(rate.id, !0).then(function(res) {
            toastr.success("Rate approved"), $(".panel-collapse.in").collapse("hide"), rate.dmcApproved = !0, $scope.ratesLoading = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.ratesLoading = !1
        })
    }, $scope.rejectRates = function(rate) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addNote.html",
            scope: $scope,
            controller: "AddnoteCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        }), $scope.modalInstance.result.then(function(note) {
            "" != note ? ($scope.ratesLoading = !0, Dmc.transportProvider.approveDenyRates(rate.id, !1, note).then(function(res) {
                $scope.ratesLoading = !1, toastr.success("Rates rejected")
            }, function(err) {
                $scope.ratesLoading = !1, $scope.errorViewer.display(err)
            })) : toastr.error("You need to add a note")
        }, function() {
            toastr.error("You need to add a note")
        })
    }, $scope.addPaymentMethod = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addPaymentMethod.html",
            scope: $scope,
            controller: "AddpaymentmethodCtrl",
            resolve: {
                dmcId: function() {
                    return $scope.DmcId
                },
                department: function() {
                    return $scope.selectedDepartment
                },
                division: function() {
                    return $scope.selectedDivision
                },
                stripeId: function() {
                    return $scope.paymentMethods.stripeId
                }
            },
            backdrop: !0,
            keyboard: !1,
            animation: !1
        }), $scope.modalInstance.result.then(function() {
            Dmc.paymentMethod.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.paymentMethods = res
            }, function(err) {})
        })
    }, $scope.requestNetTerms = function() {
        $scope.netTermsLoading = !0, Dmc.paymentMethod.requestNetTerms($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
            Dmc.paymentMethod.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.paymentMethods = res, toastr.success("We received your request"), Dmc.paymentMethod.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                    $scope.paymentMethods = res
                }, function(err) {}), $scope.netTermsLoading = !1
            }, function(err) {
                $scope.netTermsLoading = !1
            })
        }, function(err) {
            $scope.errorViewer.display(err), $scope.netTermsLoading = !1
        })
    }, $scope.selectEmployee = function(employee) {
        $scope.selectedEmployee = employee, $scope.openAddView(void 0, "views/dmc/viewEmployee.html"), Dmc.employee.pullTrips(employee).then(function(res) {
            $scope.employeeTripRequests = res
        })
    }, $scope.selectBa = function(ba) {
        $scope.selectedBa = ba, $scope.openAddView(void 0, "views/dmc/viewBa.html"), Dmc.bookingAgent.pullTrips(ba).then(function(res) {
            $scope.baTripRequests = res
        })
    }, $scope.selectAdmin = function(admin) {
        $scope.selectedAdmin = admin, $scope.openAddView(void 0, "views/dmc/viewAdmin.html")
    }, $scope.removeBa = function(ba) {
        $scope.removeLoading = !0, Dmc.bookingAgent.remove(ba).then(function(res) {
            toastr.success("Booking agent removed from your corporation"), Dmc.bookingAgent.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.removeLoading = !1, $scope.baList = res, $scope.openAddView(void 0, "views/dmc/ba.html")
            }, function(err) {
                $scope.removeLoading = !1
            })
        }, function(err) {
            $scope.removeLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.editBa = function(ba) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/editBa.html",
            scope: $scope,
            controller: "EditbaCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                selectedAgent: function() {
                    return ba
                }
            }
        }), $scope.modalInstance.result.then(function() {
            Dmc.bookingAgent.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.baList = res
            }, function(err) {})
        }, function() {
            Dmc.bookingAgent.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.baList = res
            }, function(err) {})
        })
    }, $scope.removeAdmin = function(admin) {
        $scope.removeLoading = !0, Dmc.admin.remove(admin).then(function(res) {
            toastr.success("Admin removed from your corporation"), Dmc.admin.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.removeLoading = !1, $scope.adminList = res, $scope.openAddView(void 0, "views/dmc/admin.html")
            }, function(err) {
                $scope.removeLoading = !1
            })
        }, function(err) {
            $scope.removeLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.editAdmin = function(admin) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/editAdmin.html",
            scope: $scope,
            controller: "EditadminCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                selectedAgent: function() {
                    return admin
                }
            }
        }), $scope.modalInstance.result.then(function() {
            Dmc.admin.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.adminList = res
            }, function(err) {})
        }, function() {
            Dmc.admin.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.adminList = res
            }, function(err) {})
        })
    }, $scope.saveProfile = function() {
        var profile = {};
        profile.dmc = $scope.generalDMC, $scope.profileLoading = !0, Dmc.general.save(profile).then(function(res) {
            $scope.profileLoading = !1, toastr.success("Information saved")
        }, function(err) {
            $scope.profileLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.removeEmployee = function(employee) {
        $scope.removeLoading = !0, Dmc.employee.remove(employee).then(function(res) {
            toastr.success("Employee removed from your corporation"), Dmc.employee.pull($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment).then(function(res) {
                $scope.removeLoading = !1, $scope.employeeList = res, $scope.openAddView(void 0, "views/dmc/employees.html")
            }, function(err) {
                $scope.removeLoading = !1
            })
        }, function(err) {
            $scope.removeLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.resizeImage = function(file, base64_object) {
        var deferred = $q.defer();
        if (file.size > 3145728) {
            var ratio = 3145728 / file.size,
                url = URL.createObjectURL(file);
            imageProcessor.createImageAndConfig(url, {}, function(_this) {
                return function(image, config) {
                    var options = {
                        height: image.height * ratio,
                        width: image.width * ratio,
                        quality: .5
                    };
                    imageProcessor.run(url, options, function(processedImage) {}, function(test, processedImage) {
                        var modelVal = {
                            file: file,
                            resized: processedImage
                        };
                        Dmc.general.saveImage($scope.generalDMC, modelVal).then(function(res) {
                            $scope.profileLoading = !1, $scope.generalDMC.imageURL = res.imageURL + "?time=" + Date.now(), toastr.success("Image saved")
                        }, function(err) {
                            $scope.profileLoading = !1, $scope.errorViewer.display(err)
                        }), deferred.resolve(modelVal)
                    })
                }
            }(imageProcessor))
        } else {
            var modelVal = {
                originalFile: base64_object
            };
            Dmc.general.saveImage($scope.generalDMC, modelVal).then(function(res) {
                $scope.profileLoading = !1, toastr.success("Image saved"), $scope.generalDMC.imageUrl = res.imageUrl + "?time=" + Date.now()
            }, function(err) {
                $scope.profileLoading = !1, $scope.errorViewer.display(err)
            }), deferred.resolve(modelVal)
        }
        return deferred.promise
    }, $scope.nextp2p = function() {
        $scope.p2pLoading = !0;
        var fromGeo = [this.p2p.from.geometry.location.lng(), this.p2p.from.geometry.location.lat()],
            toGeo = [this.p2p.to.geometry.location.lng(), this.p2p.to.geometry.location.lat()];
        $scope.from = this.p2p.from, $scope.to = this.p2p.to, Dmc.p2p.getMarkets(fromGeo, toGeo).then(function(res) {
            $scope.p2pLoading = !1, $scope.p2pMarkets = res, $scope.openAddView(void 0, "views/dmc/p2pConfirm.html")
        }, function(err) {
            $scope.errorViewer.display(err), $scope.p2pLoading = !1
        })
    }, $scope.addp2p = function() {
        $scope.p2pLoading = !0, angular.forEach($scope.from.address_components, function(address_component, key) {
            "street_number" == address_component.types[0] && ($scope.fromStreet = "", $scope.fromStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.fromStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.fromCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.fromState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.fromZip = address_component.long_name)
        }), angular.forEach($scope.to.address_components, function(address_component, key) {
            "street_number" == address_component.types[0] && ($scope.toStreet = "", $scope.toStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.toStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.toCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.toState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.toZip = address_component.long_name)
        }), $scope.fromStreet || ($scope.fromStreet = $scope.from.name), $scope.toStreet || ($scope.toStreet = $scope.to.name);
        var p2pObj = {
            pointBGeo: [$scope.to.geometry.location.lng(), $scope.to.geometry.location.lat()],
            addressB: {
                city: $scope.toCity,
                line_2: "",
                number: "",
                predirectional: "",
                state: $scope.toState,
                street_name: $scope.toStreet,
                suffix: "",
                zipcode: $scope.toZip
            },
            pointAGeo: [$scope.from.geometry.location.lng(), $scope.from.geometry.location.lat()],
            addressA: {
                city: $scope.fromCity,
                line_2: "",
                number: "",
                predirectional: "",
                state: $scope.fromState,
                street_name: $scope.fromStreet,
                suffix: "",
                zipcode: $scope.fromZip
            },
            canReverse: this.p2p.isReverse,
            openAvailable: this.p2p.availableOpen,
            rates: $scope.p2pMarkets.market.transportClasses,
            dmc_id: $scope.DmcId,
            markup: this.p2p.markup,
            name: this.p2p.name
        };
        void 0 == p2pObj.canReverse && (p2pObj.canReverse = !1), $scope.selectedDivision && (p2pObj.dmc_division_id = $scope.selectedDivision.id), $scope.selectedDepartment && (p2pObj.dmc_department_id = $scope.selectedDepartment.id), Dmc.p2p.create(p2pObj).then(function(res) {
            toastr.success("Point to point created"), $scope.p2pLoading = !1, Dmc.p2p.pull($scope.DmcId).then(function(res) {
                $scope.p2pList = res
            }, function(err) {})
        }, function(err) {
            $scope.errorViewer.display(err), $scope.p2pLoading = !1
        })
    }, $scope.viewService = function(p2p) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/viewService.html",
            scope: $scope,
            controller: "ViewserviceCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                p2p: function() {
                    return p2p
                }
            }
        })
    }, $scope.viewRatesp2p = function(p2p) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/viewRates.html",
            scope: $scope,
            controller: "ViewratesCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                p2p: function() {
                    return p2p
                }
            }
        })
    }, $scope.invoiceDownload = function() {
        $scope.invoiceLoad = !0, Dmc.trips.downloadInvoice($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment, this.tripdates, this.bookingAgentCommissionPercentage).then(function(res) {
            $scope.invoiceLoad = !1, window.open(res.result.Location, "_blank")
        }, function(err) {
            $scope.invoiceLoad = !1, $scope.errorViewer.display(err)
        })
    }, $scope.viewTrip = function(trip) {
        $scope.selectedTrip = trip, $scope.showTripDetails = !0, $("html, body").animate({
            scrollTop: 0
        }, "fast"), $timeout(function() {
            var map = $scope.mapControl.getGMap();
            google.maps.event.trigger(map, "resize");
            var from = $scope.selectedTrip.pickup_geo,
                to = $scope.selectedTrip.dropoff_geo;
            if (from && to) {
                var map = $scope.mapControl.getGMap(),
                    start = new google.maps.LatLng(from.lat, from.lng),
                    end = new google.maps.LatLng(to.lat, to.lng);
                $scope.fromMarker = from, $scope.toMarker = to;
                var bounds = new google.maps.LatLngBounds;
                bounds.extend(start), bounds.extend(end), map.fitBounds(bounds);
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.TravelMode.DRIVING
                };
                directionsService.route(request, function(response, status) {
                    status == google.maps.DirectionsStatus.OK && (directionsDisplay.setDirections(response), directionsDisplay.setMap(map))
                }), "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0
            } else $scope.fromMarker = !1, $scope.toMarker = !1, directionsDisplay.setMap(null), "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0
        }, 250), bookingAgent.trips.pullOne($scope.selectedTrip.id).then(function(res) {
            $scope.selectedTrip = res
        }), "instant" == $scope.selectedTrip.status && (currentTripRefresh = $interval(function() {
            bookingAgent.trips.pullOne($scope.selectedTrip.id).then(function(res) {
                $scope.selectedTrip = res
            })
        }, 5e3))
    }, $scope.closeTrip = function() {
        $scope.showTripDetails = !1
    }, $scope.receiptDownload = function(trip) {
        $scope.receiptLoad = !0, bookingAgent.trips.downloadReceipt(trip).then(function(res) {
            window.open(res.result.Location, "_blank"), $scope.receiptLoad = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.receiptLoad = !1
        })
    };
    var directionsService = new google.maps.DirectionsService,
        polylineOptionsActual = new google.maps.Polyline({
            strokeColor: "#90268e",
            strokeOpacity: .6,
            strokeWeight: 5
        }),
        directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: !0,
            polylineOptions: polylineOptionsActual
        });
    $scope.skipTripPast = function(newSkip) {
        $scope.skipPast = newSkip, $scope.pastLoading = !0, Dmc.trips.pullPast($scope.DmcId, $scope.selectedDivision, $scope.selectedDepartment, $scope.skipPast).then(function(res) {
            angular.forEach(res, function(trip) {
                $scope.pastTripList.push(trip)
            }), $scope.pastLoading = !1
        }, function(err) {})
    }, $scope.skipPast = 0, init()
}]), angular.module("angularProjectApp").controller("ModalsAddmarketsCtrl", function() {
    this.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
}), angular.module("angularProjectApp").controller("ModalsAddratesCtrl", function() {
    this.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
}), angular.module("angularProjectApp").service("tpRegistration", ["$rootScope", "$q", "$http", function($rootScope, $q, $http) {
    var tpRegistration = this;
    return tpRegistration.postNewTp = function(postData) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/TPGeneralInfos", postData).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.getTPs = function() {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/TPGeneralInfos").success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.getDriverss = function() {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/DriverForApprovals").success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.validateTp = function(tpId) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/TPGeneralInfos/verifyEmail", {
            id: tpId
        }).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.getDriverStatus = function(driverId, accessKey) {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/DriverForApprovals/checkStatus?id=" + driverId + "&accessKey=" + accessKey).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.validateDriver = function(driverId) {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/DriverForApprovals/verifyEmailAddress?id=" + driverId).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.agreeCheckr = function(driverId, eSigning, version) {
        var defer = $q.defer(),
            postData = {
                id: driverId,
                eSign: eSigning,
                checkrAuthorizationVersion: version
            };
        return $http.post($rootScope.endPoint + "/DriverForApprovals/authorizeBackgroundCheck", postData).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.deleteTpInfo = function(tpId) {
        var defer = $q.defer();
        return $http["delete"]($rootScope.endPoint + "/TPGeneralInfos/" + tpId).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.approveDriver = function(oldDriver, driver) {
        var defer = $q.defer(),
            newDriver = {
                first_name: driver.FirstName,
                last_name: driver.LastName,
                email: driver.Email,
                telephone: {
                    country_code: "+1",
                    number: driver.Phone,
                    is_mobile: !1,
                    inactive: !1
                },
                inactive: !1,
                password: driver.Password,
                driver_status: "UNAVAILABLE"
            },
            postData = {
                driver: oldDriver,
                driverUpdate: newDriver,
                approve: !0
            };
        return $http.post($rootScope.endPoint + "/TPAdmins/reviewDriver", postData).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.approveVehicle = function(oldVehicle, vehicle) {
        var defer = $q.defer(),
            newVehicle = {
                color: vehicle.Color,
                name: vehicle.Name,
                capacity: vehicle.Capacity,
                make: vehicle.Make,
                model: vehicle.Model,
                plate_number: vehicle.Plate
            },
            postData = {
                vehicle: oldVehicle,
                vehicleUpdate: newVehicle,
                approve: !0
            };
        return $http.post($rootScope.endPoint + "/TPAdmins/reviewVehicle", postData).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.denyVehicle = function(oldVehicle) {
        var defer = $q.defer(),
            postData = {
                vehicle: oldVehicle,
                vehicleUpdate: {},
                approve: !1
            };
        return $http.post($rootScope.endPoint + "/TPAdmins/reviewVehicle", postData).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.denyDriver = function(oldDriver) {
        var defer = $q.defer(),
            postData = {
                driver: oldDriver,
                driverUpdate: {},
                approve: !1
            };
        return $http.post($rootScope.endPoint + "/TPAdmins/reviewDriver", postData).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration.singleDriverSignup = function(data, license, registration, profile, insurance) {
        if (license.resized) {
            var licenseImage = license.resized.dataURL.replace("data:image/jpeg;base64,", "");
            license.file = licenseImage, license.contentType = license.resized.type, license.resized = ""
        } else license.file = license.originalFile.base64, license.contentType = license.originalFile.filetype, license.originalFile = "";
        if (registration.resized) {
            var registrationImage = registration.resized.dataURL.replace("data:image/jpeg;base64,", "");
            registration.file = registrationImage, registration.contentType = registration.resized.type, registration.resized = ""
        } else registration.file = registration.originalFile.base64, registration.contentType = registration.originalFile.filetype, registration.originalFile = "";
        if (profile.resized) {
            var profileImage = profile.resized.dataURL.replace("data:image/jpeg;base64,", "");
            profile.file = profileImage, profile.contentType = profile.resized.type, profile.resized = ""
        } else profile.file = profile.originalFile.base64, profile.contentType = profile.originalFile.filetype, profile.originalFile = "";
        if (insurance.resized) {
            var insuranceImage = insurance.resized.dataURL.replace("data:image/jpeg;base64,", "");
            insurance.file = insuranceImage, insurance.contentType = insurance.resized.type, insurance.resized = ""
        } else insurance.file = insurance.originalFile.base64, insurance.contentType = insurance.originalFile.filetype, insurance.originalFile = "";
        var postData = {
                driverForApproval: data,
                licenseImage: license,
                registrationImage: registration,
                profileImage: profile,
                insuranceImage: insurance
            },
            defer = $q.defer();
        return $http.post($rootScope.endPoint + "/DriverForApprovals/save", postData).success(function(res) {
            defer.resolve(res)
        }).error(function(status, error) {
            defer.reject(status)
        }), defer.promise
    }, tpRegistration
}]), angular.module("angularProjectApp").controller("SuccessmodalCtrl", ["$scope", "$modalInstance", "$location", function($scope, $modalInstance, $location) {
    $scope.closeModal = function() {
        $modalInstance.close(), $location.path("/")
    }
}]), angular.module("angularProjectApp").controller("RegisteredtpCtrl", ["$scope", "tpRegistration", "localStorageService", "$location", "tpViewService", "Admin", function($scope, tpRegistration, localStorageService, $location, tpViewService, Admin) {
    var init = function() {
        "/Admins" != localStorageService.get("Type") && $location.path("/"), $scope.urlParams = $location.search(), $scope.tpId = $scope.urlParams.id, $scope.statusCal1 = {
            opened: !1
        }, tpRegistration.getTPs().then(function(res) {
            angular.forEach(res, function(TP) {
                TP.id == $scope.tpId && ($scope.selectedTP = TP)
            })
        }, function(err) {}), Admin.markets.pull().then(function(res) {
            $scope.markets = res
        }, function(err) {}), $scope.selectedMarkets = []
    };
    $scope.deleteTP = function() {
        $scope.loadingDelete = !0, tpRegistration.deleteTpInfo($scope.tpId).then(function(res) {
            $scope.loadingDelete = !1, $location.path("/viewAffiliates")
        }, function(err) {
            $scope.loadingDelete = !1
        })
    }, $scope.verifyTP = function() {
        $scope.errorMessage = "", $scope.selectedTP.basicInfoCheck && $scope.selectedTP.insuranceCheck && $scope.selectedTP.driverCheck && $scope.selectedTP.vehicleCheck ? $scope.selectedMarkets.length > 0 ? ($scope.loading = !0, tpViewService.approveDenyTP($scope.tpId, !0, $scope.selectedMarkets).then(function(res) {
            $location.path("/viewAffiliates"), $scope.loading = !1
        }, function(err) {
            $scope.loading = !1
        })) : $scope.errorMessage = "Please select at least one market" : $scope.errorMessage = "Please check all the sections before approving a transport provider", "" != $scope.errorMessage && $("html, body").animate({
            scrollTop: 0
        }, "fast")
    }, $scope.saveTP = function() {
        $scope.loadingSave = !0, tpViewService.saveTPinfo($scope.selectedTP).then(function(res) {
            $scope.loadingSave = !1
        }, function(err) {
            $scope.loadingSave = !1
        })
    }, $scope.denyTP = function() {
        tpViewService.approveDenyTP($scope.tpId, !0).then(function(res) {}, function(err) {})
    }, $scope.openCal1 = function($event) {
        $scope.statusCal1.opened = !0
    }, init()
}]), angular.module("angularProjectApp").controller("AdminpanelCtrl", ["$scope", "Admin", "leafletData", "$modal", "localStorageService", "$location", "toastr", "tpViewService", "tpRegistration", "$timeout", "$interval", "Dmc", "tpAdmin", "bookingAgent", function($scope, Admin, leafletData, $modal, localStorageService, $location, toastr, tpViewService, tpRegistration, $timeout, $interval, Dmc, tpAdmin, bookingAgent) {
    var init = function() {
        "/Admins" != localStorageService.get("Type") && $location.path("/"), $scope.closeOut = !1, $scope.isOpen = !1, $scope.isOpen2 = !1, $scope.fromDate = new Date, $scope.toDate = new Date, $scope.reportDates = {
            startDate: moment().subtract(30, "days"),
            endDate: moment()
        }, $scope.cancelationReportDates = {
            startDate: moment().subtract(30, "days"),
            endDate: moment()
        }, $scope.payDates = {
            startDate: moment().subtract(15, "days"),
            endDate: moment()
        }, $scope.availabilities = [{
            value: 1,
            label: "Open on demand"
        }, {
            value: 2,
            label: "Open future"
        }, {
            value: 4,
            label: "Closed on demand"
        }, {
            value: 8,
            label: "Closed future"
        }, {
            value: 16,
            label: "Invite on demand"
        }, {
            value: 32,
            label: "Invite future"
        }], $scope.skipTp = 0, $scope.skipPendingTp = 0, $scope.skipPendingDriver = 0, $scope.skipVehicle = 0, $scope.transportClasses = [{
            name: "",
            transportTypes: []
        }], $scope.market = {}, $scope.market.name = "", $scope.market.description = "", $scope.map = {
            center: {
                latitude: 37.7090978,
                longitude: -122.4383229
            },
            zoom: 12,
            pan: !0
        }, $scope.mapControl = {}, $scope.mapDriverStatus = "all", $scope.tripdates = {
            startDate: moment().subtract(1, "days"),
            endDate: moment().add(1, "days")
        }, $scope.view = screens.tr, $scope.displayView = $scope.view.templateUrl, screens.tr.start()
    };
    angular.extend($scope, {
        center: {
            lat: 37.7090978,
            lng: -122.4383229,
            zoom: 8
        }
    }), leafletData.getMap("marketMap").then(function(map) {
        var drawnItems = (new L.featureGroup).addTo(map);
        map.addControl(new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        })), map.on("draw:created", function(event) {
            var layer = event.layer;
            drawnItems.addLayer(layer), $scope.marketFeature = layer.toGeoJSON()
        })
    }), leafletData.getMap("specialMap1").then(function(map) {
        var drawnItems = (new L.featureGroup).addTo(map);
        map.addControl(new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        })), map.on("draw:created", function(event) {
            var layer = event.layer;
            drawnItems.addLayer(layer), console.log(layer.toGeoJSON()), $scope.specialMarket1 = layer.toGeoJSON()
        })
    }), leafletData.getMap("specialMap2").then(function(map) {
        var drawnItems = (new L.featureGroup).addTo(map);
        map.addControl(new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        })), map.on("draw:created", function(event) {
            var layer = event.layer;
            drawnItems.addLayer(layer), $scope.specialMarket2 = layer.toGeoJSON()
        })
    });
    var screens = {
        dmc: {
            name: "dmc",
            templateUrl: "views/adminPanel/dmc.html",
            start: function() {
                Admin.dmcs.pull().then(function(res) {
                    $scope.dmcList = res
                }, function(err) {})
            },
            end: function() {}
        },
        tp: {
            name: "tp",
            templateUrl: "views/adminPanel/tp.html",
            start: function() {
                Admin.tps.pull().then(function(res) {
                    $scope.tpList = res
                }, function(err) {})
            },
            end: function() {}
        },
        driver: {
            name: "driver",
            templateUrl: "views/adminPanel/driver.html",
            start: function() {
                Admin.drivers.pullSearch().then(function(res) {
                    $scope.driverList = res
                }, function(err) {})
            },
            end: function() {}
        },
        market: {
            name: "market",
            templateUrl: "views/adminPanel/market.html",
            start: function() {
                Admin.markets.pull().then(function(res) {
                    $scope.availableMarkets = res, $scope.geojsons = [], $scope.centerMarkets = [], $scope.marketAvailability = [], angular.forEach($scope.availableMarkets, function(market, key) {
                        $scope.geojsons[key] = {}, $scope.geojsons[key].data = market.geojson, $scope.geojsons[key].style = {
                            fillColor: "green",
                            weight: 2,
                            opacity: 1,
                            color: "white",
                            dashArray: "3",
                            fillOpacity: .7
                        }, $scope.centerMarkets[key] = {}, $scope.centerMarkets[key].lat = $scope.geojsons[key].data.features[0].geometry.coordinates[0][0][1], $scope.centerMarkets[key].lng = $scope.geojsons[key].data.features[0].geometry.coordinates[0][0][0], $scope.centerMarkets[key].zoom = 8, $scope.marketAvailability[key] = {
                            bitMaskFromDB: market.availability
                        }
                    })
                }, function(err) {})
            },
            end: function() {}
        },
        inviteCode: {
            name: "inviteCode",
            templateUrl: "views/adminPanel/inviteCode.html",
            start: function() {
                Admin.markets.pull().then(function(res) {
                    $scope.availableMarkets = res
                }, function(err) {})
            },
            end: function() {}
        },
        marketAdd: {
            name: "marketAdd",
            templateUrl: "views/adminPanel/marketAdd.html",
            start: function() {},
            end: function() {}
        },
        paySlips: {
            name: "paySlips",
            templateUrl: "views/adminPanel/paySlips.html",
            start: function() {},
            end: function() {}
        },
        viewUserLogs: {
            name: "viewUserLogs",
            templateUrl: "views/adminPanel/viewUserLogs.html",
            start: function() {},
            end: function() {}
        },
        specialPrice: {
            name: "specialPrice",
            templateUrl: "views/adminPanel/specialPrice.html",
            start: function() {},
            end: function() {}
        },
        system: {
            name: "system",
            templateUrl: "views/adminPanel/system.html",
            start: function() {
                Admin.general.pullSystem().then(function(res) {
                    $scope.systemVars = res
                }, function(err) {})
            },
            end: function() {}
        },
        tr: {
            name: "tr",
            templateUrl: "views/adminPanel/tr.html",
            start: function() {
                $scope.searchTrs()
            },
            end: function() {}
        },
        trDmc: {
            name: "trDmc",
            templateUrl: "views/dmc/trips.html",
            start: function() {
                Dmc.trips.pullCurrent($scope.DmcId).then(function(res) {
                    $scope.currentTripList = res
                }, function(err) {}), Dmc.trips.pullPast($scope.DmcId).then(function(res) {
                    $scope.pastTripList = res
                }, function(err) {}), Dmc.trips.pullFuture($scope.DmcId).then(function(res) {
                    $scope.futureTripList = res
                }, function(err) {})
            },
            end: function() {}
        },
        trTp: {
            name: "trTp",
            templateUrl: "views/dmc/trips.html",
            start: function() {
                tpAdmin.tripRequestsHistory.pull().then(function() {
                    $scope.pastTripList = tpAdmin.tripRequestsHistory.get()
                }), tpAdmin.futureTripRequests.pull().then(function() {
                    $scope.futureTripList = tpAdmin.futureTripRequests.get()
                }), tpAdmin.currentTripRequests.pull().then(function() {
                    $scope.currentTripList = tpAdmin.currentTripRequests.get()
                })
            },
            end: function() {}
        },
        tpEdit: {
            name: "tpEdit",
            templateUrl: "views/adminPanel/tpEdit.html",
            start: function(tp) {
                $scope.selectedTp = tp
            },
            end: function() {}
        },
        tpVehicle: {
            name: "tpVehicle",
            templateUrl: "views/adminPanel/tpVehicle.html",
            start: function(tp) {
                $scope.selectedTp = tp
            },
            end: function() {}
        },
        tpMarket: {
            name: "tpMarket",
            templateUrl: "views/adminPanel/tpMarket.html",
            start: function(tp) {
                $scope.selectedTp = tp
            },
            end: function() {}
        },
        tpDriver: {
            name: "tpDriver",
            templateUrl: "views/adminPanel/tpDriver.html",
            start: function(tp) {
                $scope.selectedTp = tp
            },
            end: function() {}
        },
        vehicles: {
            name: "vehicles",
            templateUrl: "views/adminPanel/vehicles.html",
            start: function() {
                Admin.vehiclesPending.pull().then(function(res) {
                    $scope.vehiclesPending = res
                }, function(err) {})
            },
            end: function() {}
        },
        vehiclesApproved: {
            name: "vehiclesApproved",
            templateUrl: "views/adminPanel/vehiclesApproved.html",
            start: function() {
                Admin.vehicles.pull().then(function(res) {
                    $scope.vehicles = res
                }, function(err) {})
            },
            end: function() {}
        },
        netTerms: {
            name: "netTerms",
            templateUrl: "views/adminPanel/netTerms.html",
            start: function() {
                Admin.netTermsPending.pull().then(function(res) {
                    $scope.netTermsPending = res
                }, function(err) {})
            },
            end: function() {}
        },
        affiliatesPending: {
            name: "affiliatesPending",
            templateUrl: "views/adminPanel/seeallaffiliates.html",
            start: function() {
                tpViewService.getAllTpsPending().then(function(res) {
                    $scope.affiliatesTP = res
                }, function(err) {
                    $scope.error = err
                })
            },
            end: function() {}
        },
        driversPending: {
            name: "driversPending",
            templateUrl: "views/adminPanel/seealldrivers.html",
            start: function() {
                tpViewService.getAllDriversPending().then(function(res) {
                    $scope.affiliatesDriver = res
                }, function(err) {
                    $scope.error = err
                })
            },
            end: function() {}
        },
        tpBilling: {
            name: "tpBilling",
            templateUrl: "views/adminPanel/tpBilling.html",
            start: function() {
                Admin.tps.getBilling($scope.selectedTp.id).then(function(res) {
                    $scope.tpBillingInfo = res
                }, function(err) {
                    $scope.errorViewer.display(err)
                })
            },
            end: function() {}
        },
        adminResetPassword: {
            name: "adminResetPassword",
            templateUrl: "views/adminPanel/resetpassword.html",
            start: function() {},
            end: function() {}
        },
        adminSuspendAccount: {
            name: "adminSuspendAccount",
            templateUrl: "views/adminPanel/suspendAccount.html",
            start: function() {
                Admin.general.getSuspendedUsers().then(function(res) {
                    $scope.suspendedUsers = res
                }, function(err) {
                    $scope.error = err
                })
            },
            end: function() {}
        },
        driversForApproval: {
            name: "driversForApproval",
            templateUrl: "views/driverforapprovalview.html",
            start: function() {
                Admin.markets.pull().then(function(res) {
                    $scope.markets = res
                }, function(err) {}), $scope.selectedMarkets = [], $scope.urlParams = $location.search(), $scope.driverId = $scope.urlParams.id, $scope.statusCal1 = {
                    opened: !1
                }, $scope.statusCal2 = {
                    opened: !1
                }, $scope.selectedMarkets = [], "" != $scope.errorMessage && $("html, body").animate({
                    scrollTop: 0
                }, "fast")
            },
            end: function() {}
        },
        billingReport: {
            name: "billingReport",
            templateUrl: "views/adminPanel/billingReport.html",
            start: function() {
                Admin.tripRequests.getBillingReport().then(function(res) {
                    $scope.billingReport = res
                }, function(err) {
                    $scope.error = err
                })
            },
            end: function() {}
        },
        dmcBillingReport: {
            name: "dmcBillingReport",
            templateUrl: "views/adminPanel/dmcBillingReport.html",
            start: function() {
                Admin.tripRequests.getDmcBillingReport().then(function(res) {
                    $scope.dmcBillingReport = res
                }, function(err) {
                    $scope.error = err
                })
            },
            end: function() {}
        },
        generalReport: {
            name: "generalReport",
            templateUrl: "views/adminPanel/generalReport.html",
            start: function() {
                $scope.getGeneralReport()
            },
            end: function() {}
        },
        cancelationReport: {
            name: "cancelationReport",
            templateUrl: "views/adminPanel/cancelationReport.html",
            start: function() {
                $scope.getCancelationReport()
            },
            end: function() {}
        },
        map: {
            name: "map",
            templateUrl: "views/adminPanel/map.html",
            start: function() {
                pullDrivers(), updateDriversInterval = $interval(function() {
                    pullDrivers()
                }, 1e4)
            },
            end: function() {
                $interval.cancel(updateDriversInterval), updateDriversInterval = void 0
            }
        },
        editTrip: {
            name: "editTrip",
            templateUrl: "views/adminPanel/editTrip.html",
            start: function() {},
            end: function() {}
        }
    };
    $scope.switchView = function(view, data) {
        screens[view] && ($scope.view = screens[view], "map" != view ? $scope.displayView = $scope.view.templateUrl : ($scope.displayView = void 0, $timeout(function() {
            var map = $scope.mapControl.getGMap();
            google.maps.event.trigger(map, "resize")
        }, 250)), $scope.view.start(data))
    }, $scope.saveMarket = function() {
        angular.forEach($scope.transportClasses, function(TC) {
            angular.forEach(TC.transportTypes, function(TT) {
                "VAN" == TT.name ? TT.icon = "https://s3-us-west-1.amazonaws.com/transport-icons/van.png" : "SUV" == TT.name ? TT.icon = "https://s3-us-west-1.amazonaws.com/transport-icons/suv.png" : TT.icon = "https://s3-us-west-1.amazonaws.com/transport-icons/car.png"
            })
        });
        var postData = {
            inactive: !1,
            airport: !1,
            name: $scope.market.name,
            description: $scope.market.description,
            geojson: {
                type: "FeatureCollection",
                features: []
            },
            transportClasses: $scope.transportClasses,
            inactive: !1,
            airport: !1,
            rate_per_minute: .65,
            rate_per_mile: 3.75,
            minimum_charge: 15,
            base_fare: 8,
            rate_per_hour: 105,
            minimum_hour: 2.5,
            rate: 15.99
        };
        postData.geojson.features.push($scope.marketFeature), Admin.markets.create(postData).then(function(res) {
            $scope.transportClasses = [{
                name: "",
                transportTypes: []
            }], $scope.market = {}, $scope.market.name = "", $scope.market.description = ""
        }, function(err) {})
    }, $scope.saveExistingMarket = function(market) {
        Admin.markets.update(market).then(function(res) {
            toastr.success("Market saved")
        }, function(err) {})
    }, $scope.addTransportClass = function() {
        $scope.transportClasses.push({
            name: "",
            transportTypes: []
        })
    }, $scope.addTransportType = function(transportClasse) {
        transportClasse.transportTypes.push({
            name: ""
        })
    }, $scope.approveVehicle = function(vehicle) {
        Admin.vehiclesPending.approve(vehicle).then(function(res) {
            toastr.success("Vehicle approved"), Admin.vehiclesPending.pull().then(function(res) {
                $scope.vehiclesPending = res
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function(err) {})
    }, $scope.approveNetTerms = function(id) {
        Admin.netTermsPending.approve(id).then(function(res) {
            toastr.success("Net Terms approved"), Admin.netTermsPending.pull().then(function(res) {
                $scope.netTermsPending = res
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function(err) {})
    }, $scope.resetPassword = function() {
        var resetObject = this.pwReset;
        $scope.pwResetLoading = !0, Admin.general.resetPw(this.pwReset).then(function(res) {
            toastr.success("Password reset and email sent"), $scope.pwResetLoading = !1
        }, function(err) {
            "DMCAdmin" == resetObject.role ? (resetObject.role = "DMCDivisionAdmin", Admin.general.resetPw(resetObject).then(function(res) {
                toastr.success("Password reset and email sent"), $scope.pwResetLoading = !1
            }, function(err) {
                resetObject.role = "DMCDepartmemtAdmin", Admin.general.resetPw(resetObject).then(function(res) {
                    toastr.success("Password reset and email sent"), $scope.pwResetLoading = !1
                }, function(err) {
                    $scope.errorViewer.display(err), $scope.pwResetLoading = !1
                })
            })) : ($scope.errorViewer.display(err), $scope.pwResetLoading = !1)
        })
    }, $scope.suspendAccount = function() {
        var accountToSuspend = this.account;
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/deleteConfirmation.html",
            controller: "DeleteconfirmationCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                textContent: function() {
                    return "Are you sure you want to suspend this account?"
                }
            }
        }), $scope.modalInstance.result.then(function(notes) {
            accountToSuspend.note = notes, Admin.general.suspendAccount(accountToSuspend).then(function(res) {
                toastr.success("Account suspended"), Admin.general.getSuspendedUsers().then(function(res) {
                    $scope.suspendedUsers = res
                }, function(err) {
                    $scope.error = err
                })
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function() {})
    }, $scope.reActivate = function(url) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/deleteConfirmation.html",
            controller: "DeleteconfirmationCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                textContent: function() {
                    return "Reactivate this account?"
                }
            }
        }), $scope.modalInstance.result.then(function(notes) {
            Admin.general.reActivateUser(url, notes).then(function(res) {
                toastr.success("Account Activated"), Admin.general.getSuspendedUsers().then(function(res) {
                    $scope.suspendedUsers = res
                }, function(err) {
                    $scope.error = err
                })
            }, function(err) {
                $scope.error = err
            })
        }, function() {})
    }, $scope.searchTrs = function() {
        $scope.trLoading = !0;
        var params = {};
        this.tripdates.startDate ? params = {
            filter: {
                where: {
                    and: [{
                        trip_date: {
                            gte: this.tripdates.startDate
                        }
                    }, {
                        trip_date: {
                            lte: this.tripdates.endDate
                        }
                    }]
                },
                include: ["Vehicle", "Driver", "TransportProvider", "DMC"],
                order: "trip_date ASC"
            }
        } : this.tripType && (params = {
            filter: {
                where: {
                    and: [{
                        status: {
                            inq: [this.tripType, this.tripType.toUpperCase()]
                        }
                    }]
                },
                include: ["Vehicle", "Driver", "TransportProvider", "DMC"]
            }
        }), Admin.tripRequests.getTrs(JSON.stringify(params.filter)).then(function(res) {
            $scope.trips = res, angular.forEach($scope.trips, function(trip) {
                trip.pre_future_driver && Admin.drivers.pullOne(trip.pre_future_driver).then(function(res) {
                    trip.preFutureDriver = res
                }), trip.booking_agent_id && Admin.bookingAgent.pullOne(trip.booking_agent_id).then(function(res) {
                    trip.ba = res
                }), trip.payToDriver = trip.finalCostToDriver, trip.costOfMarkup ? trip.payToHotel = trip.costOfMarkup : trip.payToHotel = 0
            }), $scope.trLoading = !1
        }, function(err) {
            $scope.trLoading = !1
        })
    }, $scope.selectDriverForReview = function(driver) {
        $scope.selectedDriver = driver, $scope.switchView("driversForApproval")
    }, $scope.resetSearch = function() {
        this.tripdates.startDate = null, this.tripdates.endDate = null, this.tripType = null
    }, $scope.saveDriver = function() {
        $scope.loadingSave = !0, tpViewService.saveDriverinfo($scope.selectedDriver).then(function(res) {
            $scope.loadingSave = !1
        }, function(err) {
            $scope.loadingSave = !1
        })
    }, $scope.denyDriver = function() {
        tpViewService.approveDenyDriver($scope.selectedDriver.id, !1).then(function(res) {}, function(err) {})
    }, $scope.openCal1 = function($event) {
        $scope.statusCal1.opened = !0
    }, $scope.openCal2 = function($event) {
        $scope.statusCal2.opened = !0
    }, $scope.deleteDriver = function() {
        $scope.loadingDelete = !0, tpRegistration.deleteDriverForApproval($scope.selectedDriver.id).then(function(res) {
            $scope.loadingDelete = !1, $scope.switchView("driversForApproval")
        }, function(err) {
            $scope.loadingDelete = !1
        })
    }, $scope.verifyDriver = function() {
        $scope.errorMessage = "", $scope.selectedMarkets.length > 0 ? ($scope.loading = !0, tpViewService.approveDenyDriver($scope.selectedDriver.id, !0, $scope.selectedMarkets, $scope.selectedDriver.vehicleCheck).then(function(res) {
            $scope.switchView("driversForApproval"), toastr.success("Driver approved"), $scope.loading = !1
        }, function(err) {
            $scope.loading = !1, $scope.errorViewer.display(err)
        })) : $scope.errorMessage = "Please select at least one market"
    };
    var generateDriverArray = function(drivers) {
        $scope.driverMarkers = [], angular.forEach(drivers, function(driver) {
            var thirtyMin = moment().subtract(30, "minutes").format(),
                lastUpdate = moment(driver.updatedAt).format();
            if (lastUpdate > thirtyMin) {
                var marker = {
                    id: driver.id,
                    driverIcon: $scope.getDriverIcon(driver),
                    coords: {
                        latitude: driver.geo_location[1],
                        longitude: driver.geo_location[0]
                    },
                    onClick: function() {
                        $scope.clickDriverIcon(driver.id)
                    },
                    windowOptions: {
                        visible: !1,
                        templUrl: "url: '/views/windows/driverwindow.html'"
                    },
                    show: !1
                };
                "all" == $scope.showCars ? $scope.driverMarkers.push(marker) : "UNAVAILABLE" == driver.driver_status && "private" == $scope.showCars && "Request From Dispatch" == driver.reason ? $scope.driverMarkers.push(marker) : "unavailable" == $scope.showCars && "UNAVAILABLE" == driver.driver_status && "Request From Dispatch" != driver.reason ? $scope.driverMarkers.push(marker) : "inTrip" == $scope.showCars && "IN TRIP" == driver.driver_status ? $scope.driverMarkers.push(marker) : "AVAILABLE" == driver.driver_status && "available" == $scope.showCars && $scope.driverMarkers.push(marker)
            }
        })
    };
    $scope.changeShowCars = function(status) {
        $scope.showCars = status, generateDriverArray($scope.drivers)
    };
    var pullDrivers = function() {
        var map = $scope.mapControl.getGMap(),
            bounds = map.getBounds(),
            params = {};
        params.ne = bounds.getNorthEast(), params.sw = bounds.getSouthWest(), Admin.drivers.pull(params).then(function(res) {
            $scope.drivers = [], $scope.driverStatus && "" != $scope.driverStatus ? "available" == $scope.driverStatus ? angular.forEach(res.drivers, function(driver) {
                "AVAILABLE" == driver.driver_status && $scope.drivers.push(driver)
            }) : "unavailable" == $scope.driverStatus && angular.forEach(res.drivers, function(driver) {
                "UNAVAILABLE" == driver.driver_status && $scope.drivers.push(driver)
            }) : ($scope.drivers = angular.copy(res.drivers), $scope.drivers = res.drivers), generateDriverArray($scope.drivers)
        })
    };
    $scope.getDriverIcon = function(driver) {
        return "AVAILABLE" == driver.driver_status ? "https://d8w0otup5lda.cloudfront.net/greenCar.png" : "IN TRIP" == driver.driver_status ? "https://d8w0otup5lda.cloudfront.net/orangeCar.png" : "UNAVAILABLE" == driver.driver_status ? "Request From Dispatch" == driver.reason ? "https://d8w0otup5lda.cloudfront.net/blueCar.png" : "https://d8w0otup5lda.cloudfront.net/redCar.png" : void 0
    }, $scope.$watch("mapDriverStatus", function(newValue, oldValue) {
        $scope.changeShowCars(newValue), pullDrivers()
    }), $scope.clickDriverIcon = function(id) {
        id && ($scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/godViewDriver.html",
            controller: "GodviewCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                driverId: function() {
                    return id
                }
            }
        }))
    }, $scope.openCalendar = function(e) {
        $scope.isOpen2 ? $scope.isOpen = !1 : $scope.isOpen = !0, e.preventDefault(), e.stopPropagation()
    }, $scope.openCalendar2 = function(e) {
        $scope.isOpen2 ? $scope.isOpen2 = !1 : $scope.isOpen2 = !0, e.preventDefault(), e.stopPropagation()
    }, $scope.saveSpecialMarket = function() {
        var postData = {
            name: this.specialMarket.name,
            description: this.specialMarket.description,
            geojsonA: {
                type: "FeatureCollection",
                features: []
            },
            geojsonB: {
                type: "FeatureCollection",
                features: []
            },
            cost: parseInt(this.specialMarket.cost),
            validFrom: this.fromDate,
            validTo: this.toDate
        };
        this.specialMarket.bothWays ? postData.validBothWays = !0 : postData.validBothWays = !1, postData.geojsonA.features.push($scope.specialMarket1), postData.geojsonB.features.push($scope.specialMarket2), console.log(postData), Admin.markets.createSpecial(postData).then(function(res) {
            toastr.success("Special market created")
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.removeDriver = function(trip) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/removeDriver.html",
            controller: "RemoveconfirmationCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                textContent: function() {
                    return "Are you sure you want to suspend this account?"
                }
            }
        }), $scope.modalInstance.result.then(function(result) {
            "update" == result.type ? Admin.tripRequests.updateDriver(trip, result.driverId).then(function(res) {
                toastr.success("Driver updated"), trip = res
            }, function(err) {
                $scope.errorViewer.display(err)
            }) : "remove" == result.type && Admin.tripRequests.removeDriver(trip).then(function(res) {
                toastr.success("Driver removed")
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function() {})
    }, $scope.viewSendTo = function(id) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/sendTo.html",
            controller: "SendtoCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                tripId: function() {
                    return id
                }
            }
        })
    }, $scope.viewTripModal = function(trip) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/viewTrip.html",
            controller: "AdminviewtripCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                trip: function() {
                    return trip
                }
            }
        })
    }, $scope.viewLogs = function(trip) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/viewTripLogs.html",
            controller: "ViewtriplogsCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                trip: function() {
                    return trip
                }
            }
        })
    }, $scope.viewBa = function(dmc) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/adminViewBa.html",
            controller: "AdminviewbaCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                dmc: function() {
                    return dmc
                }
            }
        })
    }, $scope.viewHistory = function(dmc) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/adminViewDmcHistory.html",
            controller: "AdminviewdmchistoryCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                dmc: function() {
                    return dmc
                }
            }
        })
    }, $scope.viewAdmins = function(dmc) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/adminViewAdmins.html",
            controller: "AdminviewadminsCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                dmc: function() {
                    return dmc
                }
            }
        })
    }, $scope.viewTpAdmins = function(tp) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/adminViewTpAdmins.html",
            controller: "AdminviewtpadminsCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                tp: function() {
                    return tp
                }
            }
        })
    }, $scope.editTpInsurance = function(tp) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/insuranceUpload.html",
            controller: "InsuranceinfoCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                tp: function() {
                    return tp
                }
            }
        })
    }, $scope.viewTpDrivers = function(tp) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/adminViewTpDrivers.html",
            controller: "AdminviewtpdriversCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                tp: function() {
                    return tp
                }
            }
        })
    }, $scope.viewTpVehicles = function(tp) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/adminViewTpVehicles.html",
            controller: "AdminviewtpvehiclesCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                tp: function() {
                    return tp
                }
            }
        })
    }, $scope.viewTrips = function(dmc) {
        $scope.DmcId = dmc.id, $scope.switchView("trDmc")
    }, $scope.viewTpTrips = function(tp) {
        $scope.tpId = tp.id, $scope.switchView("trTp")
    }, $scope.viewTrip = function(trip) {
        $scope.selectedTrip = trip, $scope.showTripDetails = !0, $("html, body").animate({
            scrollTop: 0
        }, "fast"), $timeout(function() {
            var map = $scope.mapControl.getGMap();
            google.maps.event.trigger(map, "resize");
            var from = $scope.selectedTrip.pickup_geo,
                to = $scope.selectedTrip.dropoff_geo;
            if (from && to) {
                var map = $scope.mapControl.getGMap(),
                    start = new google.maps.LatLng(from.lat, from.lng),
                    end = new google.maps.LatLng(to.lat, to.lng);
                $scope.fromMarker = from, $scope.toMarker = to;
                var bounds = new google.maps.LatLngBounds;
                bounds.extend(start), bounds.extend(end), map.fitBounds(bounds);
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.TravelMode.DRIVING
                };
                directionsService.route(request, function(response, status) {
                    status == google.maps.DirectionsStatus.OK && (directionsDisplay.setDirections(response), directionsDisplay.setMap(map))
                }), "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0
            } else $scope.fromMarker = !1, $scope.toMarker = !1, directionsDisplay.setMap(null), "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0
        }, 250), bookingAgent.trips.pullOne($scope.selectedTrip.id).then(function(res) {
            $scope.selectedTrip = res
        }), "instant" == $scope.selectedTrip.status && (currentTripRefresh = $interval(function() {
            bookingAgent.trips.pullOne($scope.selectedTrip.id).then(function(res) {
                $scope.selectedTrip = res
            })
        }, 5e3))
    }, $scope.closeTrip = function() {
        $scope.showTripDetails = !1
    }, $scope.receiptDownload = function(trip) {
        $scope.receiptLoad = !0, bookingAgent.trips.downloadReceipt(trip).then(function(res) {
            window.open(res.result.Location, "_blank"), $scope.receiptLoad = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.receiptLoad = !1
        })
    }, $scope.trDownload = function() {
        $scope.trLoading = !0, Admin.tripRequests.downloadList(this.tripdates).then(function(res) {
            window.open(res.result.Location, "_blank"), $scope.trLoading = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.trLoading = !1
        })
    }, $scope.getGeneralReport = function() {
        Admin.reports.getGeneralReport(this.reportDates).then(function(res) {
            $scope.generalReport = res
        }, function(err) {
            $scope.error = err
        }), $scope.dataGeneral = [{
            key: "Dollar",
            values: []
        }], fetchGeneralData(0)
    }, $scope.getCancelationReport = function() {
        Admin.reports.getCancelationReport(this.cancelationReportDates).then(function(res) {
            $scope.cancelationReport = res
        }, function(err) {
            $scope.error = err
        }), $scope.dataCancel = [{
            key: "Successful",
            values: []
        }, {
            key: "BA cancel",
            values: []
        }, {
            key: "Client cancel",
            values: []
        }, {
            key: "Driver cancel",
            values: []
        }, {
            key: "No driver available",
            values: []
        }, {
            key: "admin cancel",
            values: []
        }], fetchCancellationData(1)
    }, $scope.downloadCancelationReport = function() {
        Admin.reports.downloadCancelationReport(this.cancelationReportDates, this.cancelationEmail).then(function(res) {
            toastr.success("We are sending you an email with the detailed report")
        }, function(err) {
            $scope.error = err
        })
    };
    var fetchCancellationData = function(i) {
            if (8 >= i) {
                var dates = {
                    startDate: moment().subtract(i, "weeks"),
                    endDate: moment().subtract(i - 1, "weeks")
                };
                Admin.reports.getCancelationReport(dates).then(function(res) {
                    var results = res;
                    results.data.successfulPercentage || (results.data.successfulPercentage = 0), results.data.bookingAgentCancelledPercentage || (results.data.bookingAgentCancelledPercentage = 0), results.data.clientCancelledPercentage || (results.data.clientCancelledPercentage = 0), results.data.driverCancelledPercentage || (results.data.driverCancelledPercentage = 0), results.data.noDriverAvailablePercentage || (results.data.noDriverAvailablePercentage = 0), results.data.adminCancelledPercentage || (results.data.adminCancelledPercentage = 0), $scope.dataCancel[0].values.push([parseInt(moment(results.dates.startDate).format("x")), parseFloat(results.data.successfulPercentage)]), $scope.dataCancel[1].values.push([parseInt(moment(results.dates.startDate).format("x")), results.data.bookingAgentCancelledPercentage]), $scope.dataCancel[2].values.push([parseInt(moment(results.dates.startDate).format("x")), results.data.clientCancelledPercentage]), $scope.dataCancel[3].values.push([parseInt(moment(results.dates.startDate).format("x")), results.data.driverCancelledPercentage]), $scope.dataCancel[4].values.push([parseInt(moment(results.dates.startDate).format("x")), results.data.noDriverAvailablePercentage]), $scope.dataCancel[5].values.push([parseInt(moment(results.dates.startDate).format("x")), results.data.adminCancelledPercentage]), fetchCancellationData(i + 1)
                }, function(err) {
                    $scope.error = err
                })
            } else $scope.cancelOptions = {
                chart: {
                    type: "stackedAreaChart",
                    height: 450,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 60,
                        left: 40
                    },
                    x: function(d) {
                        return d[0]
                    },
                    y: function(d) {
                        return d[1]
                    },
                    useVoronoi: !1,
                    clipEdge: !0,
                    transitionDuration: 500,
                    useInteractiveGuideline: !0,
                    xAxis: {
                        axisLabel: "Week",
                        showMaxMin: !1,
                        tickFormat: function(d) {
                            return d3.time.format("%x")(new Date(d))
                        }
                    },
                    yAxis: {
                        axisLabel: "Percentage"
                    }
                }
            }
        },
        fetchGeneralData = function(i) {
            if (16 >= i) {
                var dates = {
                    startDate: moment().subtract(i, "weeks"),
                    endDate: moment().subtract(i - 1, "weeks")
                };
                Admin.reports.getGeneralReport(dates).then(function(res) {
                    var results = res;
                    results.totalMoney || (results.totalMoney = 0), $scope.dataGeneral[0].values.push([parseInt(moment(dates.startDate).format("x")), parseFloat(results.totalMoney)]), fetchGeneralData(i + 1)
                }, function(err) {
                    $scope.error = err
                })
            } else $scope.generalOptions = {
                chart: {
                    type: "historicalBarChart",
                    height: 450,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 60,
                        left: 40
                    },
                    x: function(d) {
                        return d[0]
                    },
                    y: function(d) {
                        return d[1]
                    },
                    useVoronoi: !1,
                    clipEdge: !0,
                    transitionDuration: 500,
                    useInteractiveGuideline: !0,
                    xAxis: {
                        axisLabel: "Week",
                        showMaxMin: !1,
                        tickFormat: function(d) {
                            return d3.time.format("%x")(new Date(d))
                        }
                    },
                    yAxis: {
                        axisLabel: "$ amount"
                    }
                }
            }
        };
    $scope.editTrip = function(trip) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/editTrip.html",
            scope: $scope,
            controller: "EdittripCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                trip: function() {
                    return trip
                }
            }
        })
    }, $scope.searchTps = function() {
        $scope.skipTp = 0;
        var params = {
            search: this.tpFilter,
            skip: $scope.skipTp
        };
        Admin.tps.pull(params).then(function(res) {
            $scope.tpList = res
        }, function(err) {})
    }, $scope.searchPendingTps = function() {
        $scope.skipPendingTp = 0;
        var params = {
            search: this.pendingTpFilter,
            skip: $scope.skipPendingTp
        };
        tpViewService.getAllTpsPending(params).then(function(res) {
            $scope.affiliatesTP = res
        }, function(err) {})
    }, $scope.searchPendingDrivers = function() {
        $scope.skipPendingDriver = 0;
        var params = {
            search: this.pendingDriverFilter,
            skip: $scope.skipPendingDriver
        };
        tpViewService.getAllDriversPending(params).then(function(res) {
            $scope.affiliatesDriver = res
        }, function(err) {
            $scope.error = err
        })
    }, $scope.searchDrivers = function() {
        $scope.skipDriver = 0;
        var params = {
            search: this.driverSearch,
            skip: $scope.skipDriver
        };
        Admin.drivers.pullSearch(params).then(function(res) {
            $scope.driverList = res
        }, function(err) {})
    }, $scope.searchVehicles = function() {
        $scope.skipVehicle = 0;
        var params = {
            search: this.vehicleSearch,
            skip: $scope.skipVehicle
        };
        Admin.vehicles.pull(params).then(function(res) {
            $scope.vehicles = res
        }, function(err) {})
    }, $scope.skipTpList = function(newSkip) {
        $scope.skipTp = newSkip, $scope.tpLoading = !0;
        var params = {
            search: this.tpFilter,
            skip: $scope.skipTp
        };
        Admin.tps.pull(params).then(function(res) {
            angular.forEach(res, function(tp) {
                $scope.tpList.push(tp)
            }), $scope.tpLoading = !1
        }, function(err) {})
    }, $scope.skipPendingTpList = function(newSkip) {
        $scope.skipPendingTp = newSkip, $scope.tpLoading = !0;
        var params = {
            search: this.pendingTpFilter,
            skip: $scope.skipPendingTp
        };
        tpViewService.getAllTpsPending(params).then(function(res) {
            angular.forEach(res, function(tp) {
                $scope.affiliatesTP.push(tp)
            }), $scope.tpLoading = !1
        }, function(err) {})
    }, $scope.skipPendingDriverList = function(newSkip) {
        $scope.skipPendingDriver = newSkip, $scope.tpLoading = !0;
        var params = {
            search: this.pendingDriverFilter,
            skip: $scope.skipPendingDriver
        };
        tpViewService.getAllDriversPending(params).then(function(res) {
            angular.forEach(res, function(tp) {
                $scope.affiliatesDriver.push(tp)
            }), $scope.tpLoading = !1
        }, function(err) {})
    }, $scope.skipDriverList = function(newSkip) {
        $scope.skipDriver = newSkip;
        var params = {
            search: this.driverSearch,
            skip: $scope.skipDriver
        };
        Admin.drivers.pullSearch(params).then(function(res) {
            angular.forEach(res, function(tp) {
                $scope.driverList.push(tp)
            })
        }, function(err) {})
    }, $scope.skipVehicleList = function(newSkip) {
        $scope.skipVehicle = newSkip;
        var params = {
            search: this.vehicleSearch,
            skip: $scope.skipVehicle
        };
        Admin.vehicles.pull(params).then(function(res) {
            angular.forEach(res, function(tp) {
                $scope.vehicles.push(tp)
            })
        }, function(err) {})
    }, $scope.saveConfigParam = function(index) {
        "number" == $scope.systemVars.config[index].type && ($scope.systemVars.config[index].value = parseInt($scope.systemVars.config[index].value)), "boolean" == $scope.systemVars.config[index].type && void 0 == $scope.systemVars.config[index].value && ($scope.systemVars.config[index].value = !0), Admin.general.saveSystemParam($scope.systemVars.config[index]).then(function(res) {
            toastr.success("Parameter saved")
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.downloadReceipt = function(trip) {
        $scope.receiptLoad = !0, bookingAgent.trips.downloadReceipt(trip).then(function(res) {
            window.open(res.result.Location, "_blank"), $scope.receiptLoad = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.receiptLoad = !1
        })
    }, $scope.downloadConfirmation = function(trip) {
        $scope.receiptLoad = !0, bookingAgent.trips.downloadConfirmation(trip).then(function(res) {
            window.open(res.result.Location, "_blank"), $scope.receiptLoad = !1
        }, function() {
            $scope.errorViewer.display(err), $scope.receiptLoad = !1
        })
    }, $scope.viewBilling = function(tp) {
        $scope.selectedTp = tp, $scope.switchView("tpBilling")
    }, $scope.approvew9 = function() {
        $scope.w9Load = !0, console.log($scope.selectedTp), Admin.tps.approveW9($scope.selectedTp.id, !0).then(function(res) {
            toastr.success("W9 approved"), $scope.tpBillingInfo.w9Approved = !0, $scope.w9Load = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.w9Load = !1
        })
    }, $scope.revokew9 = function() {
        $scope.w9Load = !0, Admin.tps.approveW9($scope.selectedTp.id, !1).then(function(res) {
            toastr.success("W9 revoked"), $scope.tpBillingInfo.w9Approved = !1, $scope.w9Load = !1
        }, function(err) {
            $scope.errorViewer.display(err), $scope.w9Load = !1
        })
    }, $scope.goToAddMarket = function() {
        $scope.switchView("marketAdd")
    }, $scope.addCredit = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addCredit.html",
            controller: "AddcreditCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        }), $scope.modalInstance.result.then(function(result) {
            Admin.tps.addCredit($scope.selectedTp.id, result.notes, result.amount).then(function(res) {
                toastr.success("Adjustement successfull"), Admin.tps.getBilling($scope.selectedTp.id).then(function(res) {
                    $scope.tpBillingInfo = res
                }, function(err) {
                    $scope.errorViewer.display(err)
                })
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function() {})
    }, $scope.editMarket = function(json) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/editMarket.html",
            controller: "EditmarketCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                geojson: function() {
                    return json
                }
            }
        }), $scope.modalInstance.result.then(function(result) {
            console.log(json), json.data.features[0] = result, console.log(json)
        }, function() {})
    }, $scope.viewTpsForMarket = function(market) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/viewTpForMarket.html",
            controller: "ViewtpformarketCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                marketId: function() {
                    return market.id
                }
            }
        })
    }, $scope.generateSlips = function() {
        Admin.reports.downloadPaySlips(this.closeOut).then(function(res) {
            window.open(res.Location, "_blank"), $scope.receiptLoad = !1
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.openModal = function(title, content) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/customModal.html",
            scope: $scope,
            controller: "CustommodalCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                modalContent: function() {
                    return content
                },
                modalTitle: function() {
                    return title
                }
            }
        })
    }, $scope.searchInvite = function() {
        Admin.inviteCodes.pull(this.searchMarket).then(function(res) {
            $scope.inviteCodes = res
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.addInvite = function() {
        var marketId = this.searchMarket;
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addInvite.html",
            scope: $scope,
            controller: "AddinviteCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                marketId: function() {
                    return marketId
                }
            }
        }), $scope.modalInstance.result.then(function(result) {
            Admin.inviteCodes.pull(this.searchMarket).then(function(res) {
                $scope.inviteCodes = res
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function() {})
    };
    var updateDriversInterval, directionsService = new google.maps.DirectionsService,
        polylineOptionsActual = new google.maps.Polyline({
            strokeColor: "#90268e",
            strokeOpacity: .6,
            strokeWeight: 5
        }),
        directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: !0,
            polylineOptions: polylineOptionsActual
        });
    init()
}]), app.directive("bitMask", function() {
    return {
        scope: {
            bitMask: "=",
            value: "@"
        },
        link: function(scope, elem, attrs) {
            var handler = function(setup) {
                    if (setup) {
                        var checked = scope.bitMask & scope.value;
                        elem.prop("checked", checked)
                    } else {
                        var checked = elem.prop("checked");
                        !scope.bitMask & scope.value ? scope.bitMask |= scope.value : scope.bitMask ^= scope.value
                    }
                },
                setupHandler = handler.bind(null, !0),
                changeHandler = handler.bind(null, !1);
            elem.on("change", function() {
                scope.$apply(changeHandler)
            }), scope.$watch("bitMask", setupHandler, !0)
        }
    }
}), angular.module("angularProjectApp").factory("Admin", ["$http", "$q", "localStorageService", "$rootScope", function($http, $q, localStorageService, $rootScope) {
    var __admin = {
            dmcs: [],
            tps: [],
            markets: [],
            trs: []
        },
        Admin = {
            dmcs: {
                get: function() {
                    var defer = $q.defer();
                    return Array.isArray(__admin.dmcs) ? defer.resolve(__admin.dmcs) : Admin.dmcs.pull().then(function() {
                        defer.resolve(__admin.dmcs)
                    }, function() {
                        defer.reject()
                    }), defer.promise
                },
                add: function(dmcs) {
                    dmcs && Array.isArray(__admin.dmcs) ? angular.forEach(dmcs, function(dmc) {
                        dmc && dmc.id && __admin.dmcs.push(dmc)
                    }) : (__admin.dmcs = [], Admin.dmcs.add(dmcs))
                },
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + '/DMCs?filter={"include":["DMCBillingType", "BookingAgent", "DMCAdmin"]}').success(function(res) {
                        __admin.dmcs = [], Admin.dmcs.add(res), defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                create: function(newDmc, billingTypes) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs", newDmc).success(function(res) {
                        angular.forEach(billingTypes, function(billigType) {
                            $http.post($rootScope.endPoint + "/DMCs/" + res.id + "/DMCBillingType", billigType).success(function(billngRes) {}).error(function(billingErr, status) {})
                        }), defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                update: function(updateDmc, billingTypes) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/DMCs/" + updateDmc.id, updateDmc).success(function(res) {
                        angular.forEach(billingTypes, function(billigType) {
                            $http.put($rootScope.endPoint + "/DMCs/" + res.id + "/DMCBillingType", billigType).success(function(billngRes) {}).error(function(billingErr, status) {})
                        }), defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                addDmcAdmin: function(newAdmin, DmcId) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs/" + DmcId + "/DMCAdmin", newAdmin).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                addDmcAgent: function(newAgent, DmcId) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs/" + DmcId + "/BookingAgent", newAgent).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getBas: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/" + id + "/BookingAgent").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getAdmins: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/" + id + "/DMCAdmin").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getDailyReports: function(id, from, to) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/getYesterdaysReport?dmcId=" + id + "&fromDate=" + from + "&toDate=" + to).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            tps: {
                get: function() {
                    var defer = $q.defer();
                    return Array.isArray(__admin.tps) ? defer.resolve(__admin.tps) : Admin.tps.pull().then(function() {
                        defer.resolve(__admin.tps)
                    }, function() {
                        defer.reject()
                    }), defer.promise
                },
                add: function(tps) {
                    tps && Array.isArray(__admin.tps) ? angular.forEach(tps, function(tp) {
                        tp && tp.id && __admin.tps.push(tp)
                    }) : (__admin.tps = [], Admin.tps.add(tps))
                },
                pull: function(params) {
                    var defer = $q.defer();
                    if (!params) {
                        var params = {};
                        params.search = "", params.skip = 0
                    }
                    params.search || (params.search = ""), params.include = ["Vehicle", "Driver", "TransportProviderInsurance"], params.keys = ["company_name", "tcp", "description"];
                    var encodedURL = encodeURI("query=" + params.search + "&keys=" + JSON.stringify(params.keys) + "&skip=" + params.skip + "&include=" + JSON.stringify(params.include));
                    return $http.get($rootScope.endPoint + "/TransportProviders/search?" + encodedURL).success(function(res) {
                        __admin.tps = [], Admin.tps.add(res), defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                create: function(newTp) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders", newTp).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                update: function(updateTp) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/TransportProviders/" + updateTp.id, updateTp).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                addDmcAdmin: function(newAdmin, TpId) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TransportProviders/" + TpId + "/TPAdmin", newAdmin).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                attachToMarket: function(marketId, tpId) {
                    var defer = $q.defer(),
                        postData = {
                            transportProviderId: tpId,
                            marketId: marketId
                        };
                    return $http.put($rootScope.endPoint + "/TransportProviders/attachToMarket", postData).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                detachFromMarket: function(marketId, tpId) {
                    var defer = $q.defer(),
                        postData = {
                            transportProviderId: tpId,
                            marketId: marketId
                        };
                    return $http.put($rootScope.endPoint + "/TransportProviders/removeFromMarket", postData).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getVehicles: function(tpId) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/" + tpId + "/Vehicle").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getDrivers: function(tpId) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/" + tpId + "/Driver").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getAdmins: function(tpId) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/" + tpId + "/TPAdmin").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getBilling: function(tpId) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TransportProviders/getBillingData?tpId=" + tpId).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                addCredit: function(tpId, note, adjustment) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/TransportProviders/addCreditNote", {
                        tpId: tpId,
                        credit: adjustment,
                        note: note
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                approveW9: function(tpId, approve) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/TransportProviders/w9Status", {
                        tpId: tpId,
                        status: approve
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            markets: {
                get: function() {
                    var defer = $q.defer();
                    return Array.isArray(__admin.markets) ? defer.resolve(__admin.markets) : Admin.markets.pull().then(function() {
                        defer.resolve(__admin.markets)
                    }, function() {
                        defer.reject()
                    }), defer.promise
                },
                add: function(markets) {
                    markets && Array.isArray(__admin.markets) ? angular.forEach(markets, function(market) {
                        market && market.id && __admin.markets.push(market)
                    }) : (__admin.markets = [], Admin.markets.add(markets))
                },
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Markets").success(function(res) {
                        __admin.markets = [], Admin.markets.add(res), defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                create: function(newMarket) {
                    var defer = $q.defer();
                    return newMarket.availability = 12, $http.post($rootScope.endPoint + "/Markets", newMarket).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                createSpecial: function(newMarket) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/SpecialTripRates", newMarket).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                update: function(updateMarket) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/Markets/" + updateMarket.id, updateMarket).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getMarketWithTps: function(marketId) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Markets/" + marketId + "/TransportProvider").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            vehiclesPending: {
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Admins/getPendingVehiclesForApproval").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                approve: function(vehicle) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/Admins/approveVehicle", {
                        vehicleId: vehicle.id,
                        approve: !0
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            vehicles: {
                pull: function(params) {
                    var defer = $q.defer();
                    if (!params) {
                        var params = {};
                        params.search = "", params.skip = 0
                    }
                    params.search || (params.search = ""), params.keys = ["name", "plate_number", "make", "model", "year"], params.where = [{
                        approved: !0
                    }];
                    var encodedURL = encodeURI("query=" + params.search + "&keys=" + JSON.stringify(params.keys) + "&skip=" + params.skip + "&where=" + JSON.stringify(params.where));
                    return $http.get($rootScope.endPoint + "/Vehicles/search?" + encodedURL).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            netTermsPending: {
                pull: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Admins/getPendingNetTermsApplications").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                approve: function(id) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/Admins/approveNetTermsApplication", {
                        netTermsId: id,
                        approve: !0
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            general: {
                resetPw: function(reset) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/Admins/resetAndSendEmailForUser", reset).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullSystem: function(reset) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/SystemConfigs/getCurrentConfig").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                saveSystemParam: function(param) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/SystemConfigs/setValueForKey", {
                        key: param.key,
                        value: param.value
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                suspendAccount: function(account) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/Admins/disableAccount", account).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getSuspendedUsers: function(account) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Admins/getDisabledUsers").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                reActivateUser: function(url, note) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + url, {
                        note: note
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            tripRequests: {
                getTrs: function(params) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TripRequests?filter=" + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                removeDriver: function(trip) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/TripRequests/updateDriver", {
                        id: trip.id,
                        removeExistingDriver: !0
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                updateDriver: function(trip, newDriver) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/TripRequests/updateDriver", {
                        id: trip.id,
                        newDriverId: newDriver
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                downloadList: function(dates) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TripRequests/downloadCSV?fromDate=" + moment(dates.startDate).format() + "&toDate=" + moment(dates.endDate).format()).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getBillingReport: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Admins/tpBillingReport").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                sendTo: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TripRequests/" + id + "/notifiedDrivers").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getDmcBillingReport: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Admins/trReport").success(function(res) {
                        var object = res;
                        angular.forEach(object.data, function(line) {
                            var json_data = line.total.DMCS,
                                result = [];
                            for (var i in json_data) result.push([i, json_data[i]]);
                            line.total.DMCS = result
                        }), defer.resolve(object)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            drivers: {
                pull: function(mapBounds) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Admins/godView?sw=[" + mapBounds.sw.lng() + "," + mapBounds.sw.lat() + "]&ne=[" + mapBounds.ne.lng() + "," + mapBounds.ne.lat() + "]").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullOne: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Drivers/" + id + '?filter={"include":["Vehicle"]}').success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullAll: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Drivers").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullSearch: function(params) {
                    var defer = $q.defer();
                    if (!params) {
                        var params = {};
                        params.search = "", params.skip = 0
                    }
                    params.search || (params.search = ""), params.keys = ["first_name", "last_name", "email"];
                    var encodedURL = encodeURI("query=" + params.search + "&keys=" + JSON.stringify(params.keys) + "&skip=" + params.skip);
                    return $http.get($rootScope.endPoint + "/Drivers/search?" + encodedURL).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            inviteCodes: {
                pull: function(marketId) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/UserMarketInvites/searchWithMarketId?marketId=" + marketId + "&skip=0").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                add: function(invite) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/UserMarketInvites/createInvite", invite).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            reports: {
                getGeneralReport: function(dates) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Admins/report?fromDate=" + moment(dates.startDate).format() + "&toDate=" + moment(dates.endDate).format()).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                getCancelationReport: function(dates) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TripRequests/reports/cancellations?fromDate=" + moment(dates.startDate).format() + "&toDate=" + moment(dates.endDate).format()).success(function(res) {
                        res.dates = dates, defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                downloadCancelationReport: function(dates, email) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TripRequests/reports/download?fromDate=" + moment(dates.startDate).format() + "&toDate=" + moment(dates.endDate).format() + "&emails=" + email).success(function(res) {
                        res.dates = dates, defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullOne: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Drivers/" + id + '?filter={"include":["Vehicle"]}').success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullAll: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Drivers").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                },
                downloadPaySlips: function(closeOut) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/Utils/finalizeAllPayments?closeOut=" + closeOut).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            bookingAgent: {
                pullOne: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/BookingAgents/" + id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err, status) {
                        defer.reject(err)
                    }), defer.promise
                }
            }
        };
    return Admin
}]), angular.module("angularProjectApp").factory("routing", ["Auth", function(Auth) {
    return {
        auth: function(page) {
            return auth.isLoggedIn()
        }
    }
}]), angular.module("angularProjectApp").controller("ErrormodalCtrl", ["$scope", "$modalInstance", function($scope, $modalInstance) {
    $scope.closeModal = function() {
        $modalInstance.close()
    }
}]), angular.module("angularProjectApp").controller("TpverifyCtrl", ["$scope", "$location", "tpRegistration", function($scope, $location, tpRegistration) {
    var init = function() {
        $scope.tp = $location.search(), $scope.tpId = $scope.tp.id, tpRegistration.validateTp($scope.tpId).then(function(res) {
            $scope.validation = !0
        }, function() {
            $scope.validation = !1
        })
    };
    init()
}]), angular.module("angularProjectApp").controller("DriversignupCtrl", ["$scope", "$location", "tpRegistration", "$rootScope", "anchorSmoothScroll", "imageProcessor", "$q", "$analytics", "toastr", function($scope, $location, tpRegistration, $rootScope, anchorSmoothScroll, imageProcessor, $q, $analytics, toastr) {
    var init = function() {
        $scope.formData = {}, $scope.statusCal1 = {
            opened: !1
        }, $scope.statusCal2 = {
            opened: !1
        }
    };
    $scope.gotoElement = function(eID) {
        $location.hash("bottom"), anchorSmoothScroll.scrollTo(eID)
    }, $scope.signUp = function() {
        $scope.loading = !0, $scope.errorMessage = "", $scope.formData.first_name ? $scope.formData.last_name ? $scope.formData.driverLicenseState ? $scope.formData.driverLicenseNumber ? $scope.formData.email ? $scope.formData.password ? $scope.formData.dob ? $scope.licenseImage ? $scope.registrationImage ? $scope.profileImage ? $scope.insuranceImage ? $scope.formData.tpInfo.company_name ? $scope.formData.tpInfo.address.street_name ? $scope.formData.tpInfo.address.city ? $scope.formData.tpInfo.address.state ? $scope.formData.tpInfo.address.zipcode ? $scope.formData.tpInfo.ein ? $scope.formData.tpInfo.telephone.number ? $scope.formData.insuranceInfo.expirationDate ? $scope.formData.insuranceInfo.policyNumber ? $scope.formData.insuranceInfo.generalLiability ? $scope.formData.vehicle.ownedOrLeased ? $scope.formData.vehicle.color ? $scope.formData.vehicle.capacity ? $scope.formData.vehicle.make ? $scope.formData.vehicle.model ? $scope.formData.vehicle.plate_number ? $scope.formData.fcraAgree ? $scope.formData.tos ? $scope.formData.tpInfo.tcp ? $scope.operating ? ($scope.formData.tpInfo.telephone.country_code = "+1", $scope.formData.tpInfo.telephone.is_mobile = !1, $scope.formData.tpInfo.telephone.inactive = !1, $scope.loadingPost = !0, angular.forEach($scope.operating.address_components, function(address_component, key) {
                "locality" == address_component.types[0] && ($scope.formData.operatingCity = address_component.long_name)
            }), $scope.formData.operatingGeoPoints = [$scope.operating.geometry.location.lng(), $scope.operating.geometry.location.lat()], $scope.formData.email = $scope.formData.email.toLowerCase(), tpRegistration.singleDriverSignup($scope.formData, $scope.licenseImage, $scope.registrationImage, $scope.profileImage, $scope.insuranceImage).then(function(res) {
                $rootScope.$broadcast("openSuccess"), $analytics.eventTrack("individual-reg-success"), $scope.loadingPost = !1
            }, function(err) {
                $scope.errorMessage = "There was a problem with your registration. Please contact us at affiliates@icars.cc and we will assist you.", $scope.loadingPost = !1, $analytics.eventTrack("individual-reg-failure", {
                    category: "registration",
                    label: JSON.stringify(err)
                })
            })) : $scope.errorMessage = "Please enter your operating city" : $scope.errorMessage = "Please enter your TCP #" : $scope.errorMessage = "Please agree to our terms of service" : $scope.errorMessage = "Please agree to the FCRA terms" : $scope.errorMessage = "Please enter your vehicle plate number" : $scope.errorMessage = "Please enter your vehicle model" : $scope.errorMessage = "Please enter your vehicle make" : $scope.errorMessage = "Please enter your vehicle capacity" : $scope.errorMessage = "Please enter your vehicle color" : $scope.errorMessage = "Please select if you own or lease your vehicle" : $scope.errorMessage = "Please enter your general liability amount" : $scope.errorMessage = "Please enter your insurance policy number" : $scope.errorMessage = "Please enter your insurance expiration date" : $scope.errorMessage = "Please enter your company phone number" : $scope.errorMessage = "Please enter your EIN/tax payer id" : $scope.errorMessage = "Please enter your company zipcode" : $scope.errorMessage = "Please enter your company state" : $scope.errorMessage = "Please enter your company city" : $scope.errorMessage = "Please enter your company address" : $scope.errorMessage = "Please enter your company name" : $scope.errorMessage = "Please upload your insurance copy" : $scope.errorMessage = "Please upload your profile image" : $scope.errorMessage = "Please upload your car registartion image" : $scope.errorMessage = "Please upload your license image" : $scope.errorMessage = "Please enter your birth date" : $scope.errorMessage = "Please enter your password" : $scope.errorMessage = "Please enter your email" : $scope.errorMessage = "Please enter your driver license number" : $scope.errorMessage = "Please enter your driver license state" : $scope.errorMessage = "Please enter your last name" : $scope.errorMessage = "Please enter your first name",
            "" != $scope.errorMessage && $("html, body").animate({
                scrollTop: 0
            }, "fast")
    }, $scope.openCal1 = function($event) {
        $scope.statusCal1.opened = !0
    }, $scope.openCal2 = function($event) {
        $scope.statusCal2.opened = !0
    }, $scope.resizeImage = function(file, base64_object) {
        if (file.type.indexOf("image") > -1) {
            var deferred = $q.defer();
            if (file.size > 3145728) {
                var ratio = 3145728 / file.size;
                ratio /= 5;
                var url = URL.createObjectURL(file);
                imageProcessor.createImageAndConfig(url, {}, function(_this) {
                    return function(image, config) {
                        var options = {
                            height: image.height * ratio,
                            width: image.width * ratio,
                            quality: .2
                        };
                        imageProcessor.run(url, options, function(processedImage) {}, function(test, processedImage) {
                            var modelVal = {
                                file: file,
                                resized: processedImage
                            };
                            deferred.resolve(modelVal)
                        })
                    }
                }(imageProcessor))
            } else {
                var modelVal = {
                    originalFile: base64_object
                };
                deferred.resolve(modelVal)
            }
        } else toastr.error("You must upload a jpg or a png"), deferred.reject();
        return deferred.promise
    }, init()
}]), angular.module("angularProjectApp").controller("DriververifyCtrl", ["$scope", "$location", "tpRegistration", function($scope, $location, tpRegistration) {
    var init = function() {
        $scope.urlParams = $location.search(), $scope.id = $scope.urlParams.id, tpRegistration.validateDriver($scope.id).then(function(res) {
            $scope.validation = !0, $scope.checkr = res
        }, function(err) {
            $scope.validation = !1, $scope.error = err
        }), $scope.screenToShow = "welcome"
    };
    $scope.agreeCheckr = function() {
        $scope.eSign.name && $scope.eSign.date ? ($scope.loadingPost = !0, tpRegistration.agreeCheckr($scope.id, $scope.eSign, $scope.checkr.checkrAuthorization.version).then(function(res) {
            $scope.loadingPost = !1
        }, function(err) {
            $scope.loadingPost = !1, $scope.validation = !1, $scope.error = err
        })) : $scope.errorMessage = "Please enter your name and a date"
    }, $scope.goToDisclosure = function() {
        $scope.screenToShow = "disclosure"
    }, $scope.goToAuthorization = function() {
        $scope.eSign.disclosureAgreement && ($scope.screenToShow = "authorization")
    }, init()
}]), angular.module("angularProjectApp").controller("DriverstatusCtrl", ["$scope", "$location", "tpRegistration", function($scope, $location, tpRegistration) {
    var init = function() {
        $scope.urlParams = $location.search(), $scope.id = $scope.urlParams.id, $scope.accessKey = $scope.urlParams.accessKey, tpRegistration.getDriverStatus($scope.id, $scope.accessKey).then(function(res) {
            $scope.driverStatus = res
        }, function() {
            $scope.validation = !1
        })
    };
    init()
}]), angular.module("angularProjectApp").controller("RegistrationCtrl", function() {}), angular.module("angularProjectApp").directive("goClick", ["$location", function($location) {
    return function(scope, element, attrs) {
        var path;
        attrs.$observe("goClick", function(val) {
            path = val
        }), element.bind("click", function() {
            scope.$apply(function() {
                $location.path(path)
            })
        })
    }
}]), angular.module("angularProjectApp").directive("affiliateApprovalDataCard", function() {
    return {
        restrict: "E",
        scope: {
            affiliate: "="
        },
        controller: ["$scope", "$element", "$modal", "$location", "tpViewService", function($scope, $element, $modal, $location, tpViewService) {
            $scope.validate = function(affiliate) {
                tpViewService.approveDenyTP(affiliate.id, !0).then(function(res) {}, function(err) {})
            }, $scope.deny = function(affiliate) {
                tpViewService.approveDenyTP(affiliate.id, !1).then(function(res) {}, function(err) {})
            }, $scope.goToView = function(affiliate) {
                $location.path("/registeredTPs").search({
                    id: affiliate.id
                })
            }
        }],
        templateUrl: "/views/element/affiliateapprovaldatacard.html"
    }
}), angular.module("angularProjectApp").directive("accountDataCard", function() {
    return {
        restrict: "E",
        scope: {
            card: "=",
            payment: "="
        },
        controller: ["$scope", "$element", "$modal", function($scope, $element, $modal) {
            $scope.openEdit = function() {
                $scope.payment && ($scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/editPaymentMethod.html",
                    scope: $scope,
                    controller: "EditpaymentmethodCtrl",
                    resolve: {
                        card: function() {
                            return $scope.payment
                        }
                    },
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1
                }))
            }, $scope.openDelete = function() {
                $scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/deletePaymentMethod.html",
                    scope: $scope,
                    controller: "DeletepaymentmethodCtrl",
                    resolve: {
                        card: function() {
                            return $scope.card
                        }
                    },
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1
                })
            }
        }],
        templateUrl: "/views/element/accountdatacard.html"
    }
}), angular.module("angularProjectApp").directive("driverDataCard", function() {
    return {
        restrict: "E",
        scope: {
            driver: "="
        },
        controller: ["$scope", "$element", "$modal", "tpAdmin", "toastr", function($scope, $element, $modal, tpAdmin, toastr) {
            var init = function() {
                "AVAILABLE" == $scope.driver.driver_status && $scope.driver.privateOnly ? $scope.selectDriverStatus = "PRIVATE" : $scope.selectDriverStatus = $scope.driver.driver_status, "AVAILABLE" == $scope.driver.driver_status ? $scope.driver.privateOnly ? $scope.dotColor = "BLUE" : $scope.dotColor = "GREEN" : "IN TRIP" == $scope.driver.driver_status ? $scope.dotColor = "ORANGE" : "UNAVAILABLE" == $scope.driver.driver_status && ($scope.dotColor = "RED")
            };
            $scope.openGeneralInfoDriver = function(driver) {
                $scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/driverGeneralInfo.html",
                    scope: $scope,
                    controller: "DrivergeneralinfoCtrl",
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1,
                    resolve: {
                        driver: function() {
                            return driver
                        }
                    }
                })
            }, $scope.openCalendar = function(driver) {
                $scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/driverCalendar.html",
                    scope: $scope,
                    controller: "DrivercalendarCtrl",
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1,
                    resolve: {
                        driver: function() {
                            return driver
                        },
                        trip: function() {
                            return ""
                        }
                    }
                })
            }, $scope.driverModal = function(driver) {
                $scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/editDriver.html",
                    scope: $scope,
                    controller: "DrivereditCtrl",
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1,
                    resolve: {
                        driver: function() {
                            return driver
                        }
                    }
                })
            }, $scope.changeStatus = function(driver, newValue) {
                var status, reason;
                "PRIVATE" == newValue ? (status = !0, reason = "private") : "AVAILABLE" == newValue ? (status = !0, reason = null) : "UNAVAILABLE" == newValue && (status = !1, reason = "Request form dispatch"), tpAdmin.drivers.changeStatus(driver, status, reason).then(function(res) {
                    $scope.driver = res.driver, "AVAILABLE" == $scope.driver.driver_status ? $scope.driver.privateOnly ? $scope.dotColor = "BLUE" : $scope.dotColor = "GREEN" : "IN TRIP" == $scope.driver.driver_status ? $scope.dotColor = "ORANGE" : "UNAVAILABLE" == $scope.driver.driver_status && ($scope.dotColor = "RED")
                }, function(err) {
                    toastr.error(err.error.message), "AVAILABLE" == $scope.driver.driver_status && $scope.driver.privateOnly ? $scope.selectDriverStatus = "PRIVATE" : $scope.selectDriverStatus = $scope.driver.driver_status
                })
            }, $scope.$watch("selectDriverStatus", function(newValue, oldValue) {
                newValue != oldValue && $scope.changeStatus($scope.driver, newValue)
            }), init()
        }],
        templateUrl: "/views/element/driverdatacard.html"
    }
}), angular.module("angularProjectApp").directive("vehicleDataCard", function() {
    return {
        restrict: "E",
        scope: {
            vehicle: "="
        },
        controller: ["$scope", "$element", "$modal", function($scope, $element, $modal) {
            $scope.openGeneralInfoVehicle = function(vehicle) {
                $scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/vehicleGeneralInfo.html",
                    scope: $scope,
                    controller: "VehiclegeneralinfoCtrl",
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1,
                    resolve: {
                        vehicle: function() {
                            return vehicle
                        }
                    }
                })
            }, $scope.vehicleModal = function(vehicle) {
                $scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/editVehicle.html",
                    scope: $scope,
                    controller: "VehicleeditCtrl",
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1,
                    resolve: {
                        vehicle: function() {
                            return vehicle
                        }
                    }
                })
            }
        }],
        templateUrl: "/views/element/vehicledatacard.html"
    }
}), angular.module("angularProjectApp").directive("tripRequestDataCard", ["errorViewer", function(errorViewer) {
    return {
        restrict: "E",
        scope: {
            triptype: "@",
            trip: "=",
            openAccordion: "@"
        },
        controller: ["$scope", "$element", "$modal", "tpAdmin", function($scope, $element, $modal, tpAdmin) {
            $scope.assignRideToDriver = function(ride, force) {
                $modal.open({
                    templateUrl: "/views/assignride.html",
                    controller: "AssignrideCtrl",
                    resolve: {
                        rideObj: function() {
                            return ride
                        },
                        force: function() {
                            return force
                        }
                    },
                    size: "xl"
                })
            }, $scope.detachDriver = function(trip) {
                tpAdmin.tripRequests.detachDriver(trip.id).then(function() {}, function(err) {
                    errorViewer.display(err)
                })
            }
        }],
        templateUrl: "/views/element/triprequestdatacard.html"
    }
}]), angular.module("angularProjectApp").controller("DriverrequirementsCtrl", ["$scope", function($scope) {}]), angular.module("angularProjectApp").service("anchorSmoothScroll", function() {
    this.scrollTo = function(eID) {
        function currentYPosition() {
            return self.pageYOffset ? self.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0
        }

        function elmYPosition(eID) {
            for (var elm = document.getElementById(eID), y = elm.offsetTop, node = elm; node.offsetParent && node.offsetParent != document.body;) node = node.offsetParent, y += node.offsetTop;
            return y
        }
        var startY = currentYPosition(),
            stopY = elmYPosition(eID),
            distance = stopY > startY ? stopY - startY : startY - stopY;
        if (100 > distance) return void scrollTo(0, stopY);
        var speed = Math.round(distance / 100);
        speed >= 20 && (speed = 20);
        var step = Math.round(distance / 25),
            leapY = stopY > startY ? startY + step : startY - step,
            timer = 0;
        if (stopY > startY)
            for (var i = startY; stopY > i; i += step) setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed), leapY += step, leapY > stopY && (leapY = stopY), timer++;
        else
            for (var i = startY; i > stopY; i -= step) setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed), leapY -= step, stopY > leapY && (leapY = stopY), timer++
    }
}), angular.module("angularProjectApp").directive("scrolldetection", ["$window", "$location", "$interval", function($window, $location, $interval) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            "/" == $location.path() ? (this.pageYOffset >= 100 ? scope.boolChangeClass = !0 : scope.boolChangeClass = !1, scope.$apply()) : scope.boolChangeClass = !0
        }), $interval(function() {
            $window.pageYOffset >= 100 ? scope.boolChangeClass = !0 : scope.boolChangeClass = !1, scope.$$phase || scope.$apply()
        }, 200)
    }
}]), angular.module("angularProjectApp").controller("PasswordresetCtrl", ["$scope", "Auth", "$location", function($scope, Auth, $location) {
    var init = function() {
        $scope.urlParams = $location.search(), $scope.id = $scope.urlParams.uid, $scope.token = $scope.urlParams.token, $scope.type = $scope.urlParams.t
    };
    $scope.resetPassword = function() {
        $scope.loadingPost = !0, $scope.errorMessage = "", $scope.password && $scope.password2 ? $scope.password == $scope.password2 ? Auth.resetPassword($scope.token, $scope.id, $scope.password, $scope.type).then(function(res) {
            $scope.resetPasswordSuccess = !0, $scope.loadingPost = !1
        }, function(err) {
            $scope.errorMessage = "Error resetting your password", $scope.loadingPost = !1
        }) : ($scope.errorMessage = "Passwords do not match", $scope.loadingPost = !1) : ($scope.errorMessage = "Please fill in the fields", $scope.loadingPost = !1)
    }, init()
}]), angular.module("angularProjectApp").controller("DriveraddCtrl", ["$scope", "tpAdmin", "$modalInstance", "toastr", function($scope, tpAdmin, $modalInstance, toastr) {
    $scope.createDriver = function() {
        var newDriver = {
            first_name: $scope.driverFirstName,
            last_name: $scope.driverLastName,
            email: $scope.driverEmail,
            telephone: {
                country_code: "",
                number: $scope.driverPhone,
                is_mobile: !1,
                inactive: !1
            },
            driver_status: "UNAVAILABLE",
            password: "password"
        };
        $scope.loadingDriver = !0, $scope.driverErrorMessage = "", $scope.driverSuccessMessage = "", tpAdmin.drivers.create(newDriver).then(function() {
            tpAdmin.drivers.pull().then(function() {
                tpAdmin.drivers.get().then(function(res) {
                    $scope.drivers = res
                })
            }), toastr.success("Driver created"), $modalInstance.close(), $scope.loadingDriver = !1
        }, function(err) {
            $scope.loadingDriver = !1, toastr.error(err.error.message)
        })
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }
}]), angular.module("angularProjectApp").controller("VehicleaddCtrl", ["$scope", "tpAdmin", "$modalInstance", "toastr", function($scope, tpAdmin, $modalInstance, toastr) {
    $scope.closeModal = function() {
        $modalInstance.close()
    };
    var init = function() {
        tpAdmin.vehicles.getYears().then(function(res) {
            $scope.availableYears = res
        })
    };
    $scope.createVehicle = function() {
        $scope.vehicleCapacity = parseInt($scope.vehicleCapacity);
        var newVehicle = {
            color: $scope.vehicleColor,
            name: $scope.vehicleName,
            capacity: $scope.vehicleCapacity,
            make: $scope.vehicleMake,
            model: $scope.vehicleModel,
            plate_number: $scope.vehiclePlate,
            base_fare: 7,
            year: $scope.vehicleYear,
            uses_general_rate_scale: !1
        };
        $scope.loadingVehicle = !0, $scope.vehicleErrorMessage = "", $scope.vehicleSuccessMessage = "", tpAdmin.vehicles.create(newVehicle).then(function() {
            $scope.loadingVehicle = !1, toastr.success("Vehicle created"), $scope.closeModal()
        }, function(err) {
            $scope.loadingVehicle = !1, $scope.errorViewer.display(err)
        })
    }, $scope.$watch("vehicleYear", function() {
        $scope.vehicleYear && tpAdmin.vehicles.getMakes($scope.vehicleYear).then(function(res) {
            $scope.availableMakes = res, $scope.vehicleMake = "", $scope.vehicleModel = ""
        })
    }), $scope.$watch("vehicleMake", function() {
        $scope.vehicleMake && tpAdmin.vehicles.getModels($scope.vehicleYear, $scope.vehicleMake).then(function(res) {
            $scope.availableModels = res, $scope.vehicleModel = ""
        })
    }), init()
}]), angular.module("angularProjectApp").controller("ForgotpasswordCtrl", ["$scope", "$modalInstance", "Auth", function($scope, $modalInstance, Auth) {
    $scope.requestReset = function() {
        $scope.errorMessage = "", $scope.email ? ($scope.loading = !0, Auth.resetRequest($scope.email).then(function(res) {
            $scope.success = !0, $scope.loading = !1
        }, function(err) {
            $scope.errorMessage = "Problem requesting a password reset", $scope.loading = !1
        })) : $scope.errorMessage = "Please enter an email address"
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }
}]), angular.module("angularProjectApp").controller("SeeallaffiliatesCtrl", ["$scope", "tpViewService", "$interval", "$location", "localStorageService", function($scope, tpViewService, $interval, $location, localStorageService) {
    var init = function() {
        "/Admins" != localStorageService.get("Type") && $location.path("/"), $scope.view = "TP", tpViewService.getAllAffiliates().then(function(res) {
            $scope.allAffiliates = res, $scope.affiliatesTP = $scope.allAffiliates.tp, $scope.affiliatesDriver = $scope.allAffiliates.driver
        }, function(err) {
            $scope.error = err
        })
    };
    $scope.switchView = function(view) {
        $scope.view = view
    }, init()
}]), angular.module("angularProjectApp").controller("ApprovecarsanddriversCtrl", ["$scope", "localStorageService", function($scope, localStorageService) {
    var init = function() {
        $scope.view = "getSarted", $scope.drivers = localStorageService.get("driversAwaitingApproval"), $scope.vehicles = localStorageService.get("vehiclesAwaitingApproval")
    };
    $scope.goTodrivers = function() {
        $scope.view = "drivers", $("html, body").animate({
            scrollTop: 0
        }, "fast")
    }, $scope.goTovehicles = function() {
        $scope.view = "vehicles", $("html, body").animate({
            scrollTop: 0
        }, "fast")
    }, $scope.finish = function() {
        $scope.view = "allSet", $("html, body").animate({
            scrollTop: 0
        }, "fast")
    }, init()
}]), angular.module("angularProjectApp").directive("driverForApproval", function() {
    return {
        restrict: "E",
        scope: {
            driver: "="
        },
        controller: ["$scope", "$element", "$modal", "tpRegistration", function($scope, $element, $modal, tpRegistration) {
            var init = function() {
                $scope.oldDriver = angular.copy($scope.driver), $scope.driverToSave = $scope.driver, $scope.driverToSave.color = "white"
            };
            $scope.approve = function() {
                $scope.driverToSave.color = "green", tpRegistration.approveDriver($scope.oldDriver, $scope.driverToSave).then(function(res) {}, function(err) {})
            }, $scope.deny = function() {
                $scope.driverToSave.color = "red", tpRegistration.denyDriver($scope.oldDriver).then(function(res) {}, function(err) {})
            }, $scope.driverModal = function() {
                $scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/editDriverForApproval.html",
                    scope: $scope,
                    controller: "EditdriverforapprovalCtrl",
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1,
                    resolve: {
                        driver: function() {
                            return $scope.driverToSave
                        }
                    }
                }), $scope.modalInstance.result.then(function(driver) {
                    $scope.driverToSave = driver
                }, function() {
                    $log.info("Modal dismissed at: " + new Date)
                })
            }, init()
        }],
        templateUrl: "/views/element/driverForApproval.html"
    }
}), angular.module("angularProjectApp").controller("EditdriverforapprovalCtrl", ["$scope", "driver", "$modalInstance", function($scope, driver, $modalInstance) {
    var init = function() {
        $scope.driver = driver
    };
    $scope.updateDriver = function() {
        $modalInstance.close($scope.driver)
    }, init()
}]), angular.module("angularProjectApp").directive("vehicleForApproval", function() {
    return {
        restrict: "E",
        scope: {
            vehicle: "="
        },
        controller: ["$scope", "$element", "$modal", "tpRegistration", function($scope, $element, $modal, tpRegistration) {
            var init = function() {
                $scope.oldVehicle = angular.copy($scope.vehicle), $scope.vehicleToSave = $scope.vehicle, $scope.vehicleToSave.color = "white"
            };
            $scope.approve = function() {
                $scope.vehicleToSave.color = "green", tpRegistration.approveVehicle($scope.oldVehicle, $scope.vehicleToSave).then(function(res) {}, function(err) {})
            }, $scope.deny = function() {
                $scope.vehicleToSave.color = "red", tpRegistration.denyVehicle($scope.oldVehicle).then(function(res) {}, function(err) {})
            }, $scope.vehicleModal = function() {
                $scope.modalInstance = $modal.open({
                    templateUrl: "/views/modals/editVehicleForApproval.html",
                    scope: $scope,
                    controller: "EditvehicleforapprovalCtrl",
                    backdrop: !0,
                    keyboard: !1,
                    animation: !1,
                    resolve: {
                        vehicle: function() {
                            return $scope.vehicleToSave
                        }
                    }
                }), $scope.modalInstance.result.then(function(vehicle) {
                    $scope.vehicleToSave = vehicle
                }, function() {})
            }, init()
        }],
        templateUrl: "/views/element/vehicleForApproval.html"
    }
}), angular.module("angularProjectApp").directive("driverApprovalDataCard", function() {
    return {
        restrict: "E",
        scope: {
            driver: "="
        },
        controller: ["$scope", "$element", "$modal", "$location", "tpViewService", function($scope, $element, $modal, $location, tpViewService) {
            $scope.validate = function(singleDriver) {
                tpViewService.approveDenyDriver(singleDriver.id, !0).then(function(res) {}, function(err) {})
            }, $scope.deny = function(singleDriver) {
                tpViewService.approveDenyDriver(singleDriver.id, !1).then(function(res) {}, function(err) {})
            }, $scope.goToView = function(singleDriver) {
                $location.path("/registeredDrivers").search({
                    id: singleDriver.id
                })
            }
        }],
        templateUrl: "/views/element/singledriverapprovaldatacard.html"
    }
}), angular.module("angularProjectApp").controller("EditvehicleforapprovalCtrl", ["$scope", "vehicle", "$modalInstance", function($scope, vehicle, $modalInstance) {
    var init = function() {
        $scope.vehicle = vehicle
    };
    $scope.updateVehicle = function() {
        $modalInstance.close($scope.vehicle)
    }, init()
}]), angular.module("angularProjectApp").controller("DriverportalCtrl", ["$scope", "localStorageService", "driver", "$rootScope", "$interval", "$modal", "toastr", function($scope, localStorageService, driver, $rootScope, $interval, $modal, toastr) {
    var init = function() {
            $scope.view = screens.profile, $scope.view.start(), $scope.driverInfo = localStorageService.get("User"), $scope.vehicles = localStorageService.get("tp_vehicle")
        },
        screens = {
            profile: {
                name: "profile",
                start: function() {},
                end: function() {}
            },
            billing: {
                name: "billing",
                start: function() {
                    driver.getBankAccount().then(function(res) {
                        var result = res;
                        $scope.bankAccounts = result.bankAccount, $scope.verifiedAccount = result.verified, $scope.last3Transfers = result.last3Transfers, $scope.balance = result.balance, $scope.canWithdraw = result.canWithdraw, $scope.bankMessage = result.message, $scope.transferObject = result.transferObject
                    })
                },
                end: function() {}
            },
            vehicle: {
                name: "vehicle",
                start: function() {},
                end: function() {}
            },
            messages: {
                name: "messages",
                start: function() {
                    driver.getMessages($scope.driverInfo).then(function(res) {
                        $scope.messages = res
                    })
                },
                end: function() {}
            },
            tips: {
                name: "tips",
                start: function() {
                    driver.getTips().then(function(res) {
                        $scope.tips = res
                    }), driver.getBankAccount().then(function(res) {
                        var result = res;
                        $scope.bankAccounts = result.bankAccount, $scope.verifiedAccount = result.verified, $scope.last3Transfers = result.last3Transfers, $scope.balance = result.balance, $scope.canWithdraw = result.canWithdraw, $scope.bankMessage = result.message, $scope.transferObject = result.transferObject
                    })
                },
                end: function() {}
            }
        };
    $scope.switchView = function(view) {
        screens[view] && ($scope.view.end(), $scope.view = screens[view], $scope.view.start())
    }, $scope.addAccount = function() {
        $rootScope.$broadcast("addAccount")
    }, $scope.withdraw = function() {
        $scope.withdrawLoading = !0, driver.withdraw().then(function(res) {
            $scope.withdrawLoading = !1, toastr.success("The money is being transferred to your bank"), driver.getBankAccount().then(function(res) {
                var result = res;
                $scope.bankAccounts = result.bankAccount, $scope.verifiedAccount = result.verified, $scope.last3Transfers = result.last3Transfers, $scope.balance = result.balance, $scope.canWithdraw = result.canWithdraw, $scope.bankMessage = result.message, $scope.transferObject = result.transferObject
            })
        }, function(err) {
            $scope.withdrawLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.withdrawTip = function() {
        $scope.withdrawLoading = !0, driver.withdrawTip().then(function(res) {
            $scope.withdrawLoading = !1, toastr.success("The money is being transferred to your bank"), driver.getTips().then(function(res) {
                $scope.tips = res
            })
        }, function(err) {
            $scope.withdrawLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.addStripeAccount = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addStripeAccount.html",
            scope: $scope,
            controller: "AddstripeaccountCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                tp: function() {
                    return {}
                },
                driver: function() {
                    return $scope.driverInfo
                },
                bankAccountId: function() {
                    return $scope.bankAccounts.id
                }
            }
        }), $scope.modalInstance.result.then(function() {
            driver.getBankAccount().then(function(res) {
                var result = res;
                $scope.bankAccounts = result.bankAccount, $scope.verifiedAccount = result.verified, $scope.last3Transfers = result.last3Transfers, $scope.balance = result.balance, $scope.canWithdraw = result.canWithdraw, $scope.bankMessage = result.message, $scope.transferObject = result.transferObject
            }), driver.getTips().then(function(res) {
                $scope.tips = res
            })
        })
    }, $scope.saveDriver = function() {
        $scope.saveLoading = !0, $scope.errorProfile = "", driver.save($scope.driverInfo).then(function(res) {
            $scope.saveLoading = !1
        }, function() {
            $scope.saveLoading = !1, $scope.errorProfile = "Error saving your profile"
        })
    }, $scope.addVehicleModal = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addVehicle.html",
            scope: $scope,
            controller: "VehicleaddCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        })
    }, init()
}]), angular.module("angularProjectApp").controller("DriverforapprovalviewCtrl", ["$scope", "tpRegistration", "localStorageService", "$location", "tpViewService", "Admin", function($scope, tpRegistration, localStorageService, $location, tpViewService, Admin) {
    var init = function() {
        "/Admins" != localStorageService.get("Type") && $location.path("/"), Admin.markets.pull().then(function(res) {
            $scope.markets = res
        }, function(err) {}), $scope.selectedMarkets = [], $scope.urlParams = $location.search(), $scope.driverId = $scope.urlParams.id, $scope.statusCal1 = {
            opened: !1
        }, $scope.statusCal2 = {
            opened: !1
        }, tpRegistration.getDriverss().then(function(res) {
            angular.forEach(res, function(TP) {
                TP.id == $scope.driverId && ($scope.selectedDriver = TP)
            })
        }, function(err) {}), Admin.markets.pull().then(function(res) {
            $scope.markets = res
        }, function(err) {}), $scope.selectedMarkets = []
    };
    $scope.deleteDriver = function() {
        $scope.loadingDelete = !0, tpRegistration.deleteDriverForApproval($scope.driverId).then(function(res) {
            $scope.loadingDelete = !1, $location.path("/viewAffiliates")
        }, function(err) {
            $scope.loadingDelete = !1
        })
    }, $scope.verifyDriver = function() {
        $scope.errorMessage = "", $scope.selectedMarkets.length > 0 ? ($scope.loading = !0, tpViewService.approveDenyDriver($scope.driverId, !0, $scope.selectedMarkets, $scope.selectedDriver.vehicleCheck).then(function(res) {
            $location.path("/viewAffiliates"), $scope.loading = !1
        }, function(err) {
            $scope.loading = !1
        })) : $scope.errorMessage = "Please select at least one market", "" != $scope.errorMessage && $("html, body").animate({
            scrollTop: 0
        }, "fast")
    }, $scope.saveDriver = function() {
        $scope.loadingSave = !0, tpViewService.saveDriverinfo($scope.selectedDriver).then(function(res) {
            $scope.loadingSave = !1
        }, function(err) {
            $scope.loadingSave = !1
        })
    }, $scope.denyDriver = function() {
        tpViewService.approveDenyDriver($scope.driverId, !1).then(function(res) {}, function(err) {})
    }, $scope.openCal1 = function($event) {
        $scope.statusCal1.opened = !0
    }, $scope.openCal2 = function($event) {
        $scope.statusCal2.opened = !0
    }, init()
}]), angular.module("angularProjectApp").service("driver", ["localStorageService", "$q", "$http", "$rootScope", function(localStorageService, $q, $http, $rootScope) {
    var driver = this;
    return driver.getPaymentFromLocalStorage = function() {
        if (localStorageService.get("User")) {
            var paymentMethod = localStorageService.get("User").payment_method;
            return paymentMethod != [] ? paymentMethod : !1
        }
        return !1
    }, driver.getBankAccount = function() {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/Drivers/getBillingData/").success(function(res) {
            defer.resolve(res)
        }).error(function(err, status) {
            defer.reject(err)
        }), defer.promise
    }, driver.saveBankAccount = function(driverId, account) {
        var defer = $q.defer();
        return account.driverId = driverId, $http.post($rootScope.endPoint + "/Drivers/saveBankAccount", account).success(function(res) {
            defer.resolve(res)
        }).error(function(err, status) {
            defer.reject(err)
        }), defer.promise
    }, driver.verifyInfo = function(postData) {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/BankAccount/attachVerificationData", postData).success(function(res) {
            defer.resolve(res)
        }).error(function(err, status) {
            defer.reject(err)
        }), defer.promise
    }, driver.withdraw = function() {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/Drivers/withdrawPayment").success(function(res) {
            defer.resolve(res)
        }).error(function(err, status) {
            defer.reject(err)
        }), defer.promise
    }, driver.withdrawTip = function() {
        var defer = $q.defer();
        return $http.post($rootScope.endPoint + "/Drivers/withdrawTip").success(function(res) {
            defer.resolve(res)
        }).error(function(err, status) {
            defer.reject(err)
        }), defer.promise
    }, driver.getUser = function() {
        return localStorageService.get("User")
    }, driver.getPaymentFromLocalStorage = function() {
        if (localStorageService.get("User")) {
            var paymentMethod = localStorageService.get("User").payment_method;
            return paymentMethod != [] ? paymentMethod : !1
        }
        return !1
    }, driver.getTips = function() {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/Drivers/getTipData").success(function(res) {
            defer.resolve(res)
        }).error(function(status, code) {
            defer.reject(status)
        }), defer.promise
    }, driver.getMessages = function(driver) {
        var defer = $q.defer();
        return $http.get($rootScope.endPoint + "/Drivers/getNotifications?driverId=" + driver.id + "&notificationType=messages").success(function(res) {
            defer.resolve(res)
        }).error(function(status, code) {
            defer.reject(status)
        }), defer.promise
    }, driver.save = function(driver) {
        var defer = $q.defer();
        return $http.put($rootScope.endPoint + "/Drivers/" + driver.id, driver).success(function(res) {
            localStorageService.set("User", res), defer.resolve(res)
        }).error(function(status, code) {
            defer.reject(status)
        }), defer.promise
    }, driver.changePassword = function(driver, password1, password2) {
        var defer = $q.defer();
        return $http.put($rootScope.endPoint + "/Drivers/" + driver.id, driver).success(function(res) {
            localStorageService.set("User", res), defer.resolve(res)
        }).error(function(status, code) {
            defer.reject(status)
        }), defer.promise
    }, driver
}]), angular.module("angularProjectApp").factory("Dmc", ["$http", "$q", "localStorageService", "$rootScope", function($http, $q, localStorageService, $rootScope) {
    var __dmc = {
            department: {},
            division: {},
            employee: [],
            general: {},
            paymentMethod: [],
            trips: []
        },
        dmc = {
            department: {
                get: function() {
                    var defer = $q.defer();
                    return defer.promise
                },
                add: function(Dept) {},
                create: function(newDept) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCDepartments/save", newDept).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                update: function(updateDmc) {
                    var defer = $q.defer();
                    return defer.promise
                },
                addAdmin: function(admin, departmentId) {
                    var defer = $q.defer();
                    return admin.password = "password", $http.put($rootScope.endPoint + "/DMCDepartments/" + departmentId + "/saveAdmin", admin).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            division: {
                get: function() {
                    var defer = $q.defer();
                    return defer.promise
                },
                add: function(dmcs) {},
                create: function(newDiv) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCDivisions/save", newDiv).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                update: function(updateDmc, billingTypes) {
                    var defer = $q.defer();
                    return defer.promise
                },
                addAdmin: function(admin, divisionId) {
                    var defer = $q.defer();
                    return admin.password = "password", $http.put($rootScope.endPoint + "/DMCDivisions/" + divisionId + "/saveAdmin", admin).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            employee: {
                pull: function(DmcId, division, department) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), $http.get($rootScope.endPoint + "/DMCs/getEmployees?dmcId=" + DmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                create: function(employee) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs/employee/save", employee).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                remove: function(employee) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/DMCs/employee/remove", {
                        employeeId: employee.id
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullTrips: function(employee) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/employee/getTripRequests?employeeId=" + employee.id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            general: {
                pull: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/" + id).success(function(res) {
                        __dmc.general = res, defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                getTree: function() {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/fetchDMCTree/").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                save: function(dmc) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs/saveProfile", dmc).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                saveImage: function(dmc, image) {
                    var defer = $q.defer(),
                        postObj = {};
                    if (image.resized) {
                        var content = image.resized.dataURL.replace("data:image/jpeg;base64,", "");
                        image.file = content, image.contentType = image.resized.type, image.resized = ""
                    } else image.file = image.originalFile.base64, image.contentType = image.originalFile.filetype, image.originalFile = "";
                    return postObj.image = image, postObj.dmc = dmc, $http.post($rootScope.endPoint + "/DMCs/saveProfile", postObj).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                signUp: function(newDmc) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs/signUp", newDmc).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            transportProvider: {
                pull: function(dmcId, division, department) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), $http.get($rootScope.endPoint + "/DMCs/getTransportProvider?dmcId=" + dmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                invite: function(invitation) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs/inviteTransportProvider", invitation).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                approveDenyRates: function(id, approve, message) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs/approveTpRate", {
                        id: id,
                        approve: approve,
                        message: message
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            paymentMethod: {
                addCard: function(userToken, required, name, label, DmcId, department, division, stipeId) {
                    var defer = $q.defer(),
                        newPaymentMethod = {};
                    if (stipeId) $http.post($rootScope.endPoint + "/Stripe/customer/" + stipeId + "/cards", {
                        stripeToken: userToken
                    }).success(function(res) {
                        newPaymentMethod = {
                            inactive: !1,
                            id: stipeId,
                            is_apple_pay: !1,
                            redacted_number: res.last4,
                            card_brand: res.brand,
                            card_id: res.id,
                            card_name: "No Name"
                        }, void 0 == required && (required = {});
                        var postObj = {
                            stipeId: stipeId,
                            dmcId: DmcId,
                            paymentMethod: newPaymentMethod,
                            DMCBillingType: {
                                first_name: required.firstName,
                                last_name: required.lastName,
                                email: !0,
                                phone: required.phone,
                                payment_type: name,
                                payment_label: label,
                                payment_required: !1,
                                is_cc: !1
                            }
                        };
                        division && (postObj.dmcDivisionId = division.id, department || (postObj.belongsTo = "dmcdivision")),
                            department && (postObj.dmcDepartmentId = department.id, postObj.belongsTo = "dmcdepartment"), department || division || (postObj.belongsTo = "dmc"), $http.post($rootScope.endPoint + "/DMCs/savePaymentMethod", paymentMethod).success(function(res) {
                                defer.resolve(res)
                            }).error(function(err) {
                                defer.reject(err)
                            })
                    });
                    else {
                        var userEmail = localStorageService.get("User").email,
                            methodId = DmcId;
                        division && (methodId = methodId + "_" + division.id), department && (methodId = methodId + "_" + department.id), $http.post($rootScope.endPoint + "/Stripe/customer", {
                            stripeToken: userToken,
                            customerDescription: methodId,
                            amount: 100,
                            receipt_email: userEmail,
                            isAuth: !0
                        }).success(function(res) {
                            newPaymentMethod = {
                                inactive: !1,
                                id: res.customer.id,
                                is_apple_pay: !1,
                                redacted_number: res.customer.sources.data[0].last4,
                                card_brand: res.customer.sources.data[0].brand,
                                card_id: res.customer.sources.data[0].id,
                                card_name: "No Name"
                            }, void 0 == required && (required = {});
                            var postObj = {
                                stripeId: res.customer.id,
                                dmcId: DmcId,
                                paymentMethod: newPaymentMethod,
                                DMCBillingType: {
                                    first_name: required.firstName,
                                    last_name: required.lastName,
                                    email: !0,
                                    phone: required.phone,
                                    payment_type: name,
                                    payment_label: label,
                                    payment_required: !1,
                                    is_cc: !1
                                }
                            };
                            division && (postObj.dmcDivisionId = division.id, department || (postObj.belongsTo = "dmcdivision")), department && (postObj.dmcDepartmentId = department.id, postObj.belongsTo = "dmcdepartment"), department || division || (postObj.belongsTo = "dmc"), $http.post($rootScope.endPoint + "/DMCs/savePaymentMethod", postObj).success(function(res) {
                                defer.resolve(res)
                            }).error(function(err) {
                                defer.reject(err)
                            })
                        })
                    }
                    return defer.promise
                },
                "delete": function(card) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs/removePaymentMethod", {
                        id: card.id
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                pull: function(DmcId, division, department) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), $http.get($rootScope.endPoint + "/DMCs/getPaymentMethods?dmcId=" + DmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                requestNetTerms: function(DmcId, division, department) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), $http.get($rootScope.endPoint + "/DMCs/requestNetTerms?dmcId=" + DmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                save: function(paymentMethod) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/DMCs/savePaymentMethod", paymentMethod).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            bookingAgent: {
                pull: function(dmcId, division, department) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), $http.get($rootScope.endPoint + "/DMCs/getBookingAgents?dmcId=" + dmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                create: function(ba) {
                    var defer = $q.defer();
                    return ba.password = "password", $http.post($rootScope.endPoint + "/DMCs/saveBookingAgent", ba).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullTrips: function(ba) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/bookingAgent/getTripRequests?bookingAgentId=" + ba.id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                remove: function(ba) {
                    var defer = $q.defer();
                    return $http["delete"]($rootScope.endPoint + "/DMCs/removeBookingAgent?id=" + ba.id + "&reason=terminated").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                edit: function(ba) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/BookingAgents/" + ba.id, ba).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            admin: {
                pull: function(dmcId, division, department) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), $http.get($rootScope.endPoint + "/DMCs/getAdmins?dmcId=" + dmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                create: function(admin) {
                    var defer = $q.defer();
                    return admin.password = "password", $http.put($rootScope.endPoint + "/DMCs/saveAdmin", admin).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                remove: function(admin) {
                    var defer = $q.defer();
                    return $http["delete"]($rootScope.endPoint + "/DMCs/removeAdmin?id=" + admin.id + "&reason=terminated").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                edit: function(admin) {
                    var defer = $q.defer();
                    return $http.put($rootScope.endPoint + "/saveAdmin/" + admin.id, admin).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            p2p: {
                pull: function(dmcId, division, department) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), $http.get($rootScope.endPoint + "/DMCs/getPointToPoints?dmcId=" + dmcId + params).success(function(res) {
                        var returned = res,
                            pointToPoints = [];
                        angular.forEach(returned, function(p2p) {
                            2 == p2p.version && pointToPoints.push(p2p)
                        }), defer.resolve(pointToPoints)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                create: function(p2p) {
                    var defer = $q.defer();
                    return p2p.version = 2, $http.post($rootScope.endPoint + "/DMCs/savePointToPoint", p2p).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                getMarkets: function(from, to) {
                    var defer = $q.defer(),
                        fromGeo = JSON.stringify(from),
                        toGeo = JSON.stringify(to);
                    return $http.get($rootScope.endPoint + "/DMCPointToPoints/getMarket?fromGeo=" + fromGeo + "&toGeo=" + toGeo).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            },
            trips: {
                pullCurrent: function(dmcId, division, department, skip) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), void 0 == skip && (skip = 0), params = params + "&skip=" + skip, $http.get($rootScope.endPoint + "/DMCs/getCurrentTripRequests?dmcId=" + dmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullPast: function(dmcId, division, department, skip) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), void 0 == skip && (skip = 0), params = params + "&skip=" + skip, $http.get($rootScope.endPoint + "/DMCs/getPastTripRequests?dmcId=" + dmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullFuture: function(dmcId, division, department, skip) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), void 0 == skip && (skip = 0), params = params + "&skip=" + skip, $http.get($rootScope.endPoint + "/DMCs/getFutureTripRequests?dmcId=" + dmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                downloadInvoice: function(dmcId, division, department, range, comission) {
                    var defer = $q.defer(),
                        params = "";
                    return division && (params = params + "&dmcDivisionId=" + division.id), department && (params = params + "&dmcDepartmentId=" + department.id), params = params + "&startDate=" + moment(range.startDate).format() + "&endDate=" + moment(range.endDate).format(), comission ? params = params + "&bookingAgentCommissionPercentage=" + comission : params += "&bookingAgentCommissionPercentage=0", $http.get($rootScope.endPoint + "/TripRequests/generateDmcInvoice?dmcId=" + dmcId + params).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                }
            }
        };
    return dmc
}]), angular.module("angularProjectApp").directive("youTubePlayer", ["$window", "YT_event", function($window, YT_event) {
    return {
        restrict: "E",
        scope: {
            ytid: "@"
        },
        controller: ["$scope", "YT_event", function($scope, YT_event) {
            $scope.yt = {
                width: 600,
                height: 480,
                videoid: $scope.ytid,
                playerStatus: "NOT PLAYING"
            }, $scope.YT_event = YT_event, $scope.sendControlEvent = function(ctrlEvent) {
                this.$broadcast(ctrlEvent)
            }, $scope.$on(YT_event.STATUS_CHANGE, function(event, data) {
                $scope.yt.playerStatus = data
            })
        }],
        templateUrl: "/views/element/youtubeplayer.html",
        link: function(scope, element, attrs, $rootScope) {
            var tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            var player;
            $window.onYouTubeIframeAPIReady = function() {
                player = new YT.Player(element.children()[0], {
                    playerVars: {
                        autoplay: 0,
                        html5: 1,
                        theme: "light",
                        modesbranding: 0,
                        color: "white",
                        iv_load_policy: 3,
                        showinfo: 0,
                        controls: 0
                    },
                    videoId: scope.ytid,
                    events: {
                        onStateChange: function(event) {
                            var message = {
                                event: YT_event.STATUS_CHANGE,
                                data: ""
                            };
                            switch (event.data) {
                                case YT.PlayerState.PLAYING:
                                    message.data = "PLAYING";
                                    break;
                                case YT.PlayerState.ENDED:
                                    message.data = "ENDED";
                                    break;
                                case YT.PlayerState.UNSTARTED:
                                    message.data = "NOT PLAYING";
                                    break;
                                case YT.PlayerState.PAUSED:
                                    message.data = "PAUSED"
                            }
                            scope.$apply(function() {
                                scope.$emit(message.event, message.data)
                            })
                        }
                    }
                })
            }, scope.$watch("height + width", function(newValue, oldValue) {
                newValue != oldValue && player.setSize(scope.width, scope.height)
            }), scope.$watch("videoid", function(newValue, oldValue) {
                newValue != oldValue && player.cueVideoById(scope.videoid)
            }), scope.$on(YT_event.STOP, function() {
                player.seekTo(0), player.stopVideo()
            }), scope.$on(YT_event.PLAY, function() {
                player.playVideo()
            }), scope.$on(YT_event.PAUSE, function() {
                player.pauseVideo()
            })
        }
    }
}]), angular.module("angularProjectApp").controller("AddratesCtrl", ["$scope", function($scope) {}]), angular.module("angularProjectApp").controller("DmcsignupCtrl", ["$scope", "Dmc", "toastr", "Auth", "$timeout", "$location", function($scope, Dmc, toastr, Auth, $timeout, $location) {
    var init = function() {};
    init(), $scope.signUp = function() {
        angular.forEach($scope.autoFillAddress.address_components, function(address_component, key) {
            "street_number" == address_component.types[0] && ($scope.street = "", $scope.street += address_component.long_name), "route" == address_component.types[0] && ($scope.street += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.city = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.state = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.zip = address_component.long_name)
        }), $scope.formData.address = {
            city: $scope.city,
            line_2: "",
            number: "",
            predirectional: "",
            state: $scope.state,
            street_name: $scope.street,
            suffix: "",
            zipcode: $scope.zip
        }, $scope.formData.addressGeo = [$scope.autoFillAddress.geometry.location.lng(), $scope.autoFillAddress.geometry.location.lat()], $scope.loading = !0, $scope.formData.email = $scope.formData.email.toLowerCase(), Dmc.general.signUp($scope.formData).then(function(res) {
            $scope.loading = !1, toastr.success("Your account has been created"), login()
        }, function(err) {
            $scope.loading = !1, $scope.errorViewer.display(err)
        })
    };
    var login = function() {
        Auth.logIn($scope.formData.email, $scope.formData.password, "/DMCAdmins").then(function() {
            $location.path("/corpAdmin"), $timeout(function() {
                window.location.reload()
            }, 250)
        }, function(err) {})
    }
}]), angular.module("angularProjectApp").controller("AddemployeeCtrl", ["$scope", "toastr", "Dmc", "selectedDivision", "selectedDepartment", "DmcId", "$modalInstance", function($scope, toastr, Dmc, selectedDivision, selectedDepartment, DmcId, $modalInstance) {
    var init = function() {
        $scope.selectedDivision = selectedDivision, $scope.selectedDepartment = selectedDepartment, $scope.DmcId = DmcId
    };
    $scope.addEmployee = function() {
        $scope.employeeLoading = !0;
        var employee = $scope.employee;
        employee.telephone.country_code = "+1", employee.telephone.is_mobile = !1, employee.telephone.inactive = !1, employee.dmc_id = $scope.DmcId, $scope.selectedDivision && (employee.dmc_division_id = $scope.selectedDivision.id), $scope.selectedDepartment && (employee.dmc_department_id = $scope.selectedDepartment.id), Dmc.employee.create(employee).then(function(res) {
            $scope.employeeLoading = !1, toastr.success("Account created"), $scope.employee = {}
        }, function(err) {
            $scope.employeeLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("AddnoteCtrl", ["$scope", "$modalInstance", function($scope, $modalInstance) {
    var init = function() {
        $scope.note = ""
    };
    $scope.reject = function() {
        $modalInstance.close($scope.note)
    }, init()
}]), angular.module("angularProjectApp").controller("AddpaymentmethodCtrl", ["$scope", "Dmc", "$modalInstance", "stripe", "$http", "dmcId", "department", "division", function($scope, Dmc, $modalInstance, stripe, $http, dmcId, department, division) {
    $scope.checker = !0, $scope.typeCheck = function() {
        var chk = $scope.payment.type;
        "credit" === chk ? $scope.checker = !0 : $scope.checker = !1
    }, $scope.saveBilling = function() {
        "credit" == $scope.payment.type ? $scope.cardNumber && $scope.cvv && $scope.expiration && $scope.payment.billinglabel && $scope.payment.name && $scope.addCard() : "net" == $scope.payment.type && $scope.payment.billinglabel && $scope.payment.name && $scope.addNet()
    }, $scope.addCard = function() {
        $scope.errorMessage = "", $scope.loading = !0;
        var expirationTime = $scope.expiration.split("/");
        stripe.card.createToken({
            number: $scope.cardNumber,
            cvc: $scope.cvv,
            exp_month: expirationTime[0],
            exp_year: expirationTime[1]
        }).then(function(res) {
            $http.defaults.headers.post = {
                "Content-Type": "application/json",
                XCredential: "2FAA6B7C5A894E50AD77FC94B11278BC"
            }, Dmc.paymentMethod.addCard(res.id, $scope.required, $scope.payment.name, $scope.payment.billinglabel, dmcId, department, division).then(function(res) {
                $http.defaults.headers.post = {
                    "Content-Type": "application/json"
                }, $scope.loading = !1, $modalInstance.close()
            }, function(err) {
                $scope.errorMessage = "Error adding your card", $http.defaults.headers.post = {
                    "Content-Type": "application/json"
                }, $scope.loading = !1
            })
        }, function(err) {
            $scope.errorMessage = "Error creating a token for your card", $scope.loading = !1
        })
    }
}]), angular.module("angularProjectApp").controller("AddbaCtrl", ["$scope", "toastr", "Dmc", "selectedDivision", "selectedDepartment", "DmcId", "$modalInstance", function($scope, toastr, Dmc, selectedDivision, selectedDepartment, DmcId, $modalInstance) {
    var init = function() {
        $scope.selectedDivision = selectedDivision, $scope.selectedDepartment = selectedDepartment, $scope.DmcId = DmcId
    };
    $scope.addBa = function() {
        $scope.baLoading = !0;
        var ba = $scope.ba;
        ba.telephone.country_code = "+1", ba.telephone.is_mobile = !1, ba.telephone.inactive = !1, ba.dmc_id = $scope.DmcId, ba.email = ba.email.toLowerCase(), $scope.selectedDivision && (ba.dmc_division_id = $scope.selectedDivision.id), $scope.selectedDepartment && (ba.dmc_department_id = $scope.selectedDepartment.id), Dmc.bookingAgent.create(ba).then(function(res) {
            $scope.baLoading = !1, $scope.ba = void 0, toastr.success("Booking agent Account created")
        }, function(err) {
            $scope.baLoading = !1, $scope.errorViewer.display(err)
        }), 1 == $scope.saveEmployee && Dmc.employee.create(ba).then(function(res) {
            toastr.success("Employee Account created"), $scope.employee = {}
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("EditpaymentmethodCtrl", ["$scope", "$modalInstance", "Dmc", "toastr", "card", function($scope, $modalInstance, Dmc, toastr, card) {
    $scope.payment = card, $scope.closeModal = function() {
        $modalInstance.close()
    }, $scope.save = function() {
        Dmc.paymentMethod.save($scope.payment).then(function() {
            toastr.success("Payment method saved")
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope["delete"] = function() {
        Dmc.paymentMethod["delete"]($scope.payment).then(function() {
            toastr.success("Payment method deleted")
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }
}]), angular.module("angularProjectApp").controller("DeletepaymentmethodCtrl", ["$scope", "Dmc", "$modalInstance", "toastr", function($scope, Dmc, $modalInstance, toastr) {
    $scope.close = function() {
        $modalInstance.close()
    }, $scope.confirm = function() {
        $scope.loading = !0, Dmc.paymentMethod["delete"]($scope.card).then(function(res) {
            $scope.close(), toastr.success("Payment method deleted")
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }
}]), angular.module("angularProjectApp").controller("FooterCtrl", ["$scope", "$location", function($scope, $location) {
    var init = function() {
        $scope.currentPath = $location.path(), $scope.footerView = "/views/footer.html"
    };
    $scope.openAppStore = function() {
        window.open("https://itunes.apple.com/us/app/icars-on-demand/id975389128?ls=1&mt=8s")
    }, $scope.openPlayStore = function() {
        window.open("https://play.google.com/store/apps/details?id=cc.icars.Client")
    }, $scope.openFacebook = function() {
        window.open("https://www.facebook.com/ICarsOnDemand")
    }, $scope.openInstagram = function() {
        window.open("https://instagram.com/icarsondemand/")
    }, $scope.openTwitter = function() {
        window.open("https://twitter.com/icarsondemand")
    }, $scope.openYoutube = function() {
        window.open("https://www.youtube.com/channel/UCLy0IHz_1HxnEh5OCsjNiSg")
    }, $scope.openLinkedIn = function() {
        window.open("https://www.linkedin.com/company/icars-on-demand")
    }, init()
}]), angular.module("angularProjectApp").controller("AddaccountCtrl", ["$scope", "tpAdmin", "localStorageService", "toastr", "$modalInstance", "driver", function($scope, tpAdmin, localStorageService, toastr, $modalInstance, driver) {
    var init = function() {
        $scope.country = "US", $scope.currency = "USD"
    };
    $scope.closeModal = function() {
        $modalInstance.close()
    }, $scope.saveAccount = function() {
        if ($scope.loading = !0, "/TPAdmins" == localStorageService.get("Type")) {
            var tpId = tpAdmin.tPInfo.get().id;
            tpAdmin.accounts.save(tpId, $scope.account).then(function(res) {
                $modalInstance.close(), toastr.success("Bank account added"), $scope.loading = !1
            }, function(err) {
                $scope.errorViewer.display(err), $scope.loading = !1
            })
        } else {
            var driverId = localStorageService.get("User").id;
            driver.saveBankAccount(driverId, $scope.account).then(function(res) {
                $modalInstance.close(), toastr.success("Bank account added"), $scope.loading = !1
            }, function(err) {
                $scope.errorViewer.display(err), $scope.loading = !1
            })
        }
    }, init()
}]), angular.module("angularProjectApp").factory("bookingAgent", ["$http", "$q", "localStorageService", "$rootScope", function($http, $q, localStorageService, $rootScope) {
    var __ba = {
            trips: [],
            selectedTrip: {}
        },
        ba = {
            trips: {
                pullPast: function(skip, id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/" + id + '/TripRequest?filter={"where":{"status":{"inq":["FINISHED","finished", "canceled"]}},"limit":10,"skip":' + skip + ',"include":["Passenger","Vehicle","Driver","TransportProvider"],"order":"trip_date DESC"}').success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullCurrent: function(skip, id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/" + id + '/TripRequest?filter={"where":{"status":{"inq":["instant", "INSTANT", "started", "STARTED"]}},"include":["Passenger","Vehicle","Driver","TransportProvider"],"order":"trip_date ASC"}').success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullFuture: function(skip, id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/DMCs/" + id + '/TripRequest?filter={"where":{"status":{"inq":["future", "FUTURE", "pending", "PENDING", "van"]}},"include":["Passenger","Vehicle","Driver","TransportProvider","PreFutureDriver"],"order":"trip_date ASC"}').success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullOne: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TripRequests/" + id + "/info").success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                pullLogs: function(id) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TripRequests/getLogs?id=" + id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                cancelTrip: function(id) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TripRequests/cancel", {
                        id: id,
                        reason: "BA cancel"
                    }).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                downloadReceipt: function(trip) {
                    var defer = $q.defer();
                    return $http.get($rootScope.endPoint + "/TripRequests/downloadReceipt?id=" + trip.id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                downloadConfirmation: function(trip) {
                    var defer = $q.defer();
                    return $http.post($rootScope.endPoint + "/TripRequests/downloadConfirmationEmail?id=" + trip.id).success(function(res) {
                        defer.resolve(res)
                    }).error(function(err) {
                        defer.reject(err)
                    }), defer.promise
                },
                selectedTrip: function(trip) {
                    var defer = $q.defer();
                    return __ba.selectedTrip = trip, defer.resolve("success"), defer.promise
                },
                getSelectedTrip: function() {
                    var defer = $q.defer();
                    return __ba.selectedTrip != {} ? (defer.resolve(__ba.selectedTrip), __ba.selectedTrip = {}) : defer.reject("No trip"), defer.promise
                }
            }
        };
    return ba
}]), angular.module("angularProjectApp").controller("GodviewCtrl", ["$scope", "Admin", "driverId", function($scope, Admin, driverId) {
    var init = function() {
        Admin.drivers.pullOne(driverId).then(function(res) {
            $scope.driver = res
        })
    };
    init()
}]), angular.module("angularProjectApp").controller("ConfirmemailCtrl", ["$scope", "$modalInstance", "email", function($scope, $modalInstance, email) {
    $scope.email = email, $scope.close = function() {
        $modalInstance.close()
    }, $scope.dismiss = function() {
        $modalInstance.dismiss()
    }
}]), angular.module("angularProjectApp").controller("ViewserviceCtrl", ["$scope", "$modalInstance", "p2p", function($scope, $modalInstance, p2p) {
    $scope.closeModal = function() {
        $modalInstance.close()
    }, $scope.p2p = p2p
}]), angular.module("angularProjectApp").controller("ViewratesCtrl", ["$scope", "$modalInstance", "p2p", function($scope, $modalInstance, p2p) {
    $scope.closeModal = function() {
        $modalInstance.close()
    }, $scope.p2p = p2p
}]), angular.module("angularProjectApp").controller("EditbaCtrl", ["$scope", "toastr", "selectedAgent", "$modalInstance", "Dmc", function($scope, toastr, selectedAgent, $modalInstance, Dmc) {
    var init = function() {
        $scope.ba = selectedAgent
    };
    $scope.editBa = function() {
        $scope.baLoading = !0, Dmc.bookingAgent.edit($scope.ba).then(function(res) {
            $scope.baLoading = !1, toastr.success("Changes saved")
        }, function(err) {
            $scope.baLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("MappanelCtrl", ["$scope", "Admin", "leafletData", "$modal", "localStorageService", "$location", "toastr", "tpViewService", "tpRegistration", "$timeout", "$interval", "tpAdmin", "ngAudio", function($scope, Admin, leafletData, $modal, localStorageService, $location, toastr, tpViewService, tpRegistration, $timeout, $interval, tpAdmin, ngAudio) {
    var init = function() {
            "/Admins" != localStorageService.get("Type") && "/TPAdmins" != localStorageService.get("Type") && $location.path("/"), $scope.view = screens.map, $scope.displayView = $scope.view.templateUrl, $scope.map = {
                center: {
                    latitude: 37.7090978,
                    longitude: -122.4383229
                },
                zoom: 12,
                pan: !0
            }, $scope.mapControl = {}, $timeout(function() {
                screens.map.start()
            }, 1250), $scope.mapDriverStatus = "all", $scope.sound = ngAudio.load("ressources/trip.mp3")
        },
        screens = {
            map: {
                name: "map",
                templateUrl: "views/adminPanel/map.html",
                start: function() {
                    pullDrivers(), pullTrips(), updateDriversInterval = $interval(function() {
                        pullDrivers()
                    }, 1e4), checkTripsInterval = $interval(function() {
                        pullTrips()
                    }, 6e4)
                },
                end: function() {
                    $interval.cancel(updateDriversInterval), updateDriversInterval = void 0, $interval.cancel(checkTripsInterval), checkTripsInterval = void 0
                }
            }
        };
    $scope.switchView = function(view, data) {
        screens[view] && ($scope.view = screens[view], "map" != view ? $scope.displayView = $scope.view.templateUrl : ($scope.displayView = void 0, $timeout(function() {
            var map = $scope.mapControl.getGMap();
            google.maps.event.trigger(map, "resize")
        }, 250)), $scope.view.start(data))
    };
    var generateDriverArray = function(drivers) {
        $scope.driverMarkers = [], angular.forEach(drivers, function(driver) {
            var thirtyMin = moment().subtract(30, "minutes").format(),
                lastUpdate = moment(driver.updatedAt).format();
            if (lastUpdate > thirtyMin) {
                var marker = {
                    id: driver.id,
                    driverIcon: $scope.getDriverIcon(driver),
                    coords: {
                        latitude: driver.geo_location[1],
                        longitude: driver.geo_location[0]
                    },
                    onClick: function() {
                        $scope.clickDriverIcon(driver.id)
                    },
                    windowOptions: {
                        visible: !1,
                        templUrl: "url: '/views/windows/driverwindow.html'"
                    },
                    show: !1
                };
                "all" == $scope.showCars ? $scope.driverMarkers.push(marker) : "UNAVAILABLE" == driver.driver_status && "private" == $scope.showCars && "Request From Dispatch" == driver.reason ? $scope.driverMarkers.push(marker) : "unavailable" == $scope.showCars && "UNAVAILABLE" == driver.driver_status && "Request From Dispatch" != driver.reason ? $scope.driverMarkers.push(marker) : "inTrip" == $scope.showCars && "IN TRIP" == driver.driver_status ? $scope.driverMarkers.push(marker) : "AVAILABLE" == driver.driver_status && "available" == $scope.showCars && $scope.driverMarkers.push(marker)
            }
        })
    };
    $scope.changeShowCars = function(status) {
        $scope.showCars = status, generateDriverArray($scope.drivers)
    };
    var pullDrivers = function() {
            var map = $scope.mapControl.getGMap(),
                bounds = map.getBounds(),
                params = {};
            params.ne = bounds.getNorthEast(), params.sw = bounds.getSouthWest(), "/Admins" == localStorageService.get("Type") ? Admin.drivers.pull(params).then(function(res) {
                $scope.drivers = [], $scope.drivers = angular.copy(res.drivers), $scope.drivers = res.drivers, generateDriverArray($scope.drivers)
            }) : "/TPAdmins" == localStorageService.get("Type") && tpAdmin.drivers.pull().then(function() {
                tpAdmin.drivers.get().then(function(res) {
                    res && ($scope.drivers = [], $scope.drivers = angular.copy(res), $scope.drivers = res, generateDriverArray($scope.drivers))
                })
            })
        },
        pullTrips = function() {
            "/Admins" == localStorageService.get("Type") && tpAdmin.tripRequests.pull().then(function() {
                $scope.currentTrips = tpAdmin.tripRequests.get(), 0 != $scope.currentTrips.length && $scope.sound.play()
            })
        };
    $scope.getDriverIcon = function(driver) {
        return "AVAILABLE" == driver.driver_status ? "https://d8w0otup5lda.cloudfront.net/greenCar.png" : "IN TRIP" == driver.driver_status ? "https://d8w0otup5lda.cloudfront.net/orangeCar.png" : "UNAVAILABLE" == driver.driver_status ? "Request From Dispatch" == driver.reason ? "https://d8w0otup5lda.cloudfront.net/blueCar.png" : "https://d8w0otup5lda.cloudfront.net/redCar.png" : void 0
    }, $scope.$watch("mapDriverStatus", function(newValue, oldValue) {
        $scope.changeShowCars(newValue), pullDrivers()
    }), $scope.clickDriverIcon = function(id) {
        id && ($scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/godViewDriver.html",
            controller: "GodviewCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                driverId: function() {
                    return id
                }
            }
        }))
    };
    var updateDriversInterval, checkTripsInterval;
    init()
}]), angular.module("angularProjectApp").controller("SendtoCtrl", ["$scope", "tripId", "$modalInstance", "Admin", function($scope, tripId, $modalInstance, Admin) {
    var init = function() {
        Admin.tripRequests.sendTo(tripId).then(function(res) {
            $scope.sendTo = res
        })
    };
    $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("AdminviewbaCtrl", ["$scope", "dmc", "$modalInstance", "Admin", "$modal", function($scope, dmc, $modalInstance, Admin, $modal) {
    var init = function() {
        Admin.dmcs.getBas(dmc.id).then(function(res) {
            $scope.bas = res
        })
    };
    $scope.closeModal = function() {
        $modalInstance.close()
    }, $scope.addBaModal = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addBa.html",
            scope: $scope,
            controller: "AddbaCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                selectedDivision: function() {
                    return $scope.selectedDivision
                },
                selectedDepartment: function() {
                    return $scope.selectedDepartment
                },
                DmcId: function() {
                    return dmc.id
                }
            }
        }), $scope.modalInstance.result.then(function() {
            Admin.dmcs.getBas(dmc.id).then(function(res) {
                $scope.bas = res
            })
        }, function() {
            Admin.dmcs.getBas(dmc.id).then(function(res) {
                $scope.bas = res
            })
        })
    }, init()
}]), angular.module("angularProjectApp").controller("AdminviewadminsCtrl", ["$scope", "dmc", "$modalInstance", "Admin", function($scope, dmc, $modalInstance, Admin) {
    var init = function() {
        Admin.dmcs.getAdmins(dmc.id).then(function(res) {
            $scope.admins = res
        })
    };
    $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("AdminviewtpadminsCtrl", ["$scope", "tp", "$modalInstance", "Admin", function($scope, tp, $modalInstance, Admin) {
    var init = function() {
        Admin.tps.getAdmins(tp.id).then(function(res) {
            $scope.tpAdmins = res
        })
    };
    $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("AdminviewtpdriversCtrl", ["$scope", "tp", "$modalInstance", "Admin", function($scope, tp, $modalInstance, Admin) {
    var init = function() {
        Admin.tps.getDrivers(tp.id).then(function(res) {
            $scope.tpDrivers = res
        })
    };
    $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("AdminviewtpvehiclesCtrl", ["$scope", "tp", "$modalInstance", "Admin", function($scope, tp, $modalInstance, Admin) {
    var init = function() {
        Admin.tps.getVehicles(tp.id).then(function(res) {
            $scope.tpVehicles = res
        })
    };
    $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("AdminviewtripCtrl", ["$scope", "trip", "bookingAgent", "$timeout", "$interval", function($scope, trip, bookingAgent, $timeout, $interval) {
    var currentTripRefresh, init = function() {
            $scope.selectedTrip = trip, $scope.map = {
                center: {
                    latitude: 37,
                    longitude: -122
                },
                zoom: 8
            }, $scope.mapControl = {}, $timeout(function() {
                var map = $scope.mapControl.getGMap();
                google.maps.event.trigger(map, "resize");
                var from = trip.pickup_geo,
                    to = trip.dropoff_geo;
                if (from && to) {
                    var map = $scope.mapControl.getGMap(),
                        start = new google.maps.LatLng(from.lat, from.lng),
                        end = new google.maps.LatLng(to.lat, to.lng);
                    $scope.fromMarker = from, $scope.toMarker = to;
                    var bounds = new google.maps.LatLngBounds;
                    bounds.extend(start), bounds.extend(end), map.fitBounds(bounds);
                    var request = {
                        origin: start,
                        destination: end,
                        travelMode: google.maps.TravelMode.DRIVING
                    };
                    directionsService.route(request, function(response, status) {
                        status == google.maps.DirectionsStatus.OK && (directionsDisplay.setDirections(response), directionsDisplay.setMap(map))
                    }), "FINISHED" == trip.status || "canceled" == trip.status ? $scope.showDriver = !1 : $scope.showDriver = !0
                } else $scope.fromMarker = !1, $scope.toMarker = !1, directionsDisplay.setMap(null), "FINISHED" == trip.status || "canceled" == trip.status ? $scope.showDriver = !1 : $scope.showDriver = !0
            }, 250), "instant" == trip.status && (currentTripRefresh = $interval(function() {
                bookingAgent.trips.pullOne(trip.id).then(function(res) {
                    trip = res, $scope.selectedTrip = trip
                })
            }, 5e3))
        },
        directionsService = new google.maps.DirectionsService,
        polylineOptionsActual = new google.maps.Polyline({
            strokeColor: "#90268e",
            strokeOpacity: .6,
            strokeWeight: 5
        }),
        directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: !0,
            polylineOptions: polylineOptionsActual
        });
    init()
}]), angular.module("angularProjectApp").controller("ProfileCtrl", ["$scope", "localStorageService", "profile", "toastr", function($scope, localStorageService, profile, toastr) {
    var init = function() {
        $scope.user = localStorageService.get("User"), $scope.type = localStorageService.get("Type")
    };
    $scope.saveProfile = function() {
        $scope.loading = !0, profile.saveUser($scope.user).then(function(res) {
            $scope.loading = !1, localStorageService.set("User", res), toastr.success("information saved")
        }, function(err) {
            $scope.loading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.changePassword = function() {
        $scope.loadingPassword = !0, void 0 != $scope.password && "" != $scope.password ? $scope.password == $scope.password2 ? profile.changePassword($scope.password).then(function(res) {
            $scope.loadingPassword = !1, toastr.success("Password changed")
        }, function(err) {
            $scope.loadingPassword = !1, $scope.errorViewer.display(err)
        }) : ($scope.loadingPassword = !1, toastr.error("Password don't match")) : ($scope.loadingPassword = !1, toastr.error("You need to enter a new password"))
    }, init()
}]), angular.module("angularProjectApp").controller("AddadminCtrl", ["$scope", "toastr", "Dmc", "selectedDivision", "selectedDepartment", "DmcId", "$modalInstance", function($scope, toastr, Dmc, selectedDivision, selectedDepartment, DmcId, $modalInstance) {
    var init = function() {
        $scope.selectedDivision = selectedDivision, $scope.selectedDepartment = selectedDepartment, $scope.DmcId = DmcId
    };
    $scope.addAdmin = function() {
        $scope.adminLoading = !0;
        var admin = $scope.admin;
        admin.telephone.country_code = "+1", admin.telephone.is_mobile = !1, admin.telephone.inactive = !1, admin.dmc_id = $scope.DmcId, admin.email = admin.email.toLowerCase(), $scope.selectedDivision && (admin.dmc_division_id = $scope.selectedDivision.id), $scope.selectedDepartment && (admin.dmc_department_id = $scope.selectedDepartment.id), Dmc.admin.create(admin).then(function(res) {
            $scope.adminLoading = !1, $scope.admin = void 0, toastr.success("Account created")
        }, function(err) {
            $scope.adminLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("EditadminCtrl", ["$scope", "toastr", "selectedAgent", "$modalInstance", "Dmc", function($scope, toastr, selectedAgent, $modalInstance, Dmc) {
    var init = function() {
        $scope.admin = selectedAgent
    };
    $scope.editAdmin = function() {
        $scope.adminLoading = !0, Dmc.bookingAgent.edit($scope.admin).then(function(res) {
            $scope.adminLoading = !1, toastr.success("Changes saved")
        }, function(err) {
            $scope.adminLoading = !1, $scope.errorViewer.display(err)
        })
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("AddstripeaccountCtrl", ["$scope", "tp", "driver", "bankAccountId", "tpAdmin", "toastr", "$modalInstance", "$http", function($scope, tp, driver, bankAccountId, tpAdmin, toastr, $modalInstance, $http) {
    var init = function() {
        $scope.statusCal1 = {
            opened: !1
        }, $.getJSON("https://api.ipify.org?format=jsonp&callback=?", function(json) {
            $scope.ip = json.ip
        }), $scope.address = {}
    };
    $scope.saveInfo = function() {
        if ("individual" == $scope.accountType)
            if ($scope.first_name)
                if ($scope.first_name)
                    if ($scope.dob)
                        if ($scope.last4)
                            if ($scope.address.line1)
                                if ($scope.address.city)
                                    if ($scope.address.state)
                                        if ($scope.address.zip)
                                            if ($scope.tos) var postData = {
                                                data: {
                                                    country: "US",
                                                    managed: !0,
                                                    legal_entity: {
                                                        dob: {
                                                            day: moment($scope.dob).format("DD"),
                                                            month: moment($scope.dob).format("MM"),
                                                            year: moment($scope.dob).format("YYYY")
                                                        },
                                                        first_name: $scope.first_name,
                                                        last_name: $scope.last_name,
                                                        type: "individual",
                                                        address: {
                                                            city: $scope.address.city,
                                                            line1: $scope.address.line1,
                                                            postal_code: $scope.address.zip,
                                                            state: $scope.address.state
                                                        },
                                                        ssn_last_4: $scope.last4
                                                    },
                                                    tos_acceptance: {
                                                        date: (new Date).getTime(),
                                                        ip: $scope.ip
                                                    }
                                                },
                                                id: bankAccountId
                                            };
                                            else toastr.error("Please accept the terms of service");
        else toastr.error("Please enter your zipcode");
        else toastr.error("Please enter your state");
        else toastr.error("Please enter your city");
        else toastr.error("Please enter your address");
        else toastr.error("Please enter the last 4 digits of your social security number");
        else toastr.error("Please select your date of birth");
        else toastr.error("Please enter your last name");
        else toastr.error("Please enter your first name");
        else if ($scope.companyName)
            if ($scope.companyTaxId)
                if ($scope.address.line1)
                    if ($scope.address.city)
                        if ($scope.address.state)
                            if ($scope.address.zip)
                                if ($scope.tos) var postData = {
                                    data: {
                                        legal_entity: {
                                            type: "company",
                                            first_name: $scope.first_name,
                                            last_name: $scope.last_name,
                                            dob: {
                                                day: moment($scope.dob).format("DD"),
                                                month: moment($scope.dob).format("MM"),
                                                year: moment($scope.dob).format("YYYY")
                                            },
                                            address: {
                                                city: $scope.address.city,
                                                line1: $scope.address.line1,
                                                postal_code: $scope.address.zip,
                                                state: $scope.address.state
                                            },
                                            business_name: $scope.companyName,
                                            business_tax_id: $scope.companyTaxId
                                        },
                                        tos_acceptance: {
                                            date: (new Date).getTime(),
                                            ip: $scope.ip
                                        }
                                    },
                                    id: bankAccountId
                                };
                                else toastr.error("Please accept the terms of service");
        else toastr.error("Please enter your zipcode");
        else toastr.error("Please enter your state");
        else toastr.error("Please enter your city");
        else toastr.error("Please enter your address");
        else toastr.error("Please enter your company tax id #");
        else toastr.error("Please enter your company name");
        postData && ($scope.loading = !0, tpAdmin.accounts.verifyInfo(postData).then(function(res) {
            toastr.success("Information added"), $scope.loading = !1, $modalInstance.close()
        }, function(err) {
            $scope.loading = !1, $scope.errorViewer.display(err)
        }))
    }, $scope.openCal1 = function($event) {
        $scope.statusCal1.opened = !0
    }, init()
}]), angular.module("angularProjectApp").controller("EdittripCtrl", ["$scope", "trip", "toastr", "$modalInstance", "tripRequest", function($scope, trip, toastr, $modalInstance, tripRequest) {
    var init = function() {
        $scope.trip = trip, $scope.isOpen = !1
    };
    $scope.saveInfo = function() {
        tripRequest.editTrip($scope.trip).then(function(res) {
            toastr.success("Trip request changes saved")
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.openCalendar = function(e) {
        e.preventDefault(), e.stopPropagation(), $scope.isOpen = !0
    }, init()
}]), angular.module("angularProjectApp").controller("TripsingleCtrl", ["$scope", "tripRequest", "$location", "$timeout", "$interval", function($scope, tripRequest, $location, $timeout, $interval) {
    var init = function() {
        $scope.urlParams = $location.search(), $scope.token = $scope.urlParams.t, $scope.map = {
            center: {
                latitude: 37,
                longitude: -122
            },
            zoom: 8
        }, $scope.mapControl = {}, $scope.showLoading = !0, $scope.firstLoad = !0, $scope.refreshTrip($scope.token), $interval(function() {
            $scope.refreshTrip($scope.token)
        }, 5e3);
        var $win = $(window),
            winH = $win.height();
        $(".angular-google-map-container").css("height", winH / 2)
    };
    $scope.refreshTrip = function() {
        tripRequest.pullWithToken($scope.token).then(function(res) {
            $scope.showLoading = !1, $scope.selectedTrip = res;
            var map = $scope.mapControl.getGMap();
            google.maps.event.trigger(map, "resize");
            var from = $scope.selectedTrip.pickup_geo,
                to = $scope.selectedTrip.dropoff_geo;
            $scope.fromMarker = from, $scope.toMarker = to;
            var start = new google.maps.LatLng(from.lat, from.lng),
                end = new google.maps.LatLng(to.lat, to.lng),
                bounds = new google.maps.LatLngBounds;
            $scope.firstLoad && $timeout(function() {
                bounds.extend(start), bounds.extend(end), map.fitBounds(bounds), $scope.firstLoad = !1
            }, 5e3), from && to ? "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0 : ($scope.fromMarker = !1, $scope.toMarker = !1, "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0)
        }, function(err) {
            $scope.showLoading = !1, $scope.showNoTrip = !0
        })
    }, $scope.displayTrip = function() {
        tripRequest.pullWithToken($scope.token).then(function(res) {
            $scope.showError = !1, $scope.selectedTrip = res, $timeout(function() {
                var map = $scope.mapControl.getGMap();
                google.maps.event.trigger(map, "resize");
                var from = $scope.selectedTrip.pickup_geo,
                    to = $scope.selectedTrip.dropoff_geo;
                $scope.fromMarker = from, $scope.toMarker = to;
                var start = new google.maps.LatLng(from.lat, from.lng),
                    end = new google.maps.LatLng(to.lat, to.lng),
                    bounds = new google.maps.LatLngBounds;
                bounds.extend(start), bounds.extend(end), map.fitBounds(bounds), from && to ? ("FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0, polylineOptionsActual = new google.maps.Polyline({
                    path: google.maps.geometry.encoding.decodePath($scope.selectedTrip.polyline),
                    strokeColor: "#90268e",
                    strokeOpacity: .6,
                    strokeWeight: 5
                }), polylineOptionsActual.setMap(map)) : ($scope.fromMarker = !1, $scope.toMarker = !1, polylineOptionsActual.setMap(null), "FINISHED" == $scope.selectedTrip.status || "canceled" == $scope.selectedTrip.status ? $scope.showDriver = !1 : $scope.showDriver = !0)
            }, 1e3)
        }, function() {
            $scope.showError = !0
        })
    };
    var polylineOptionsActual = new google.maps.Polyline({
        strokeColor: "#90268e",
        strokeOpacity: .6,
        strokeWeight: 5
    });
    init()
}]), angular.module("angularProjectApp").controller("ConciergeCtrl", ["$scope", "profile", "toastr", "$timeout", "tripRequest", "localStorageService", "$location", "stripe", "bookingAgent", "$modal", function($scope, profile, toastr, $timeout, tripRequest, localStorageService, $location, stripe, bookingAgent, $modal) {
    var init = function() {
        "/BookingAgents" != localStorageService.get("Type") && $location.path("/"), (void 0 == localStorageService.get("User").newBookingAgentWebUI || 0 == localStorageService.get("User").newBookingAgentWebUI) && $location.path("/booking"), $scope.slider = {
            value: 0,
            options: {
                floor: 0,
                ceil: 40,
                showTicks: !0,
                step: 5
            }
        }, $scope.carType = 0, bookingAgent.trips.getSelectedTrip().then(function(res) {
            res.passenger_first_name && ($scope.rebookingTrip = res, $scope.passengerFirstName = res.passenger_first_name, $scope.passengerEmail = res.passenger_email, $scope.passengerLastName = res.passenger_last_name, $scope.passengerPhone = res.passenger_phone.number, $scope.dmcPaymentMethod = res.dmc_payment_method, $scope.rebooking = !0)
        }), "fixed" == $scope.tipType && ($scope.slider.value = $scope.tipPercentage), $scope.screen = "secletionOne", $scope.phonePlaceholder = "Phone", $scope.lunchOption = "", $scope.meetingOption = "", $scope.isOpen = !1, $scope.isOpen2 = !1, $scope.bookingTime = "", $scope.meetingLegs = [], $scope.meetingLegs[0] = {}, $scope.dyn = 1, $scope.max = 4, $scope.billingMethods = profile.getBillingMethodsFromLocal(), $scope.tipType = profile.getTipTypeFromLocal(), $scope.tipPercentage = profile.getTipPercentageFromLocal(), $scope.dateOptions = {
            showWeeks: !1
        }, $scope.$watch("billingType", function(NewValue, OldValue) {
            void 0 != NewValue && "CC Billing" == NewValue ? (angular.element("#bookingInput_creditCardNumber").show(), angular.element("#bookingInput_creditCardDate").show(), angular.element("#bookingInput_creditCardCCV").show()) : (angular.element("#bookingInput_creditCardNumber").hide(), angular.element("#bookingInput_creditCardDate").hide(), angular.element("#bookingInput_creditCardCCV").hide())
        }, !0), $scope.p2p = profile.getP2pFromLocal()
    };
    $scope.goToScreen = function(screen, save, progress) {
        var validation = $scope.validateNext(screen);
        "" == validation ? ($scope.screen = screen, save && ($scope.selectedOption = screen), $scope.dyn = progress, "finalize" == screen && $scope.prepareRecap()) : toastr.error(validation), $("html, body").animate({
            scrollTop: 0
        }, "fast")
    }, $scope.selectP2p = function(trip) {
        $scope.selectedP2p = trip
    }, $scope.openCalendar = function(e) {
        e.preventDefault(), e.stopPropagation(), $scope.isOpen = !0
    }, $scope.openCalendar2 = function(e) {
        e.preventDefault(), e.stopPropagation(), $scope.isOpen2 = !0
    }, $scope.selectLunchOption = function(option) {
        $scope.lunchOption = option
    }, $scope.selectMeetingOption = function(option) {
        $scope.meetingOption = option, ("dropoff" == option || "wait" == option) && ($scope.meetingLegs = [{}])
    }, $scope.addLeg = function() {
        $scope.meetingLegs.push({
            bookingTime: "future"
        })
    }, $scope.book = function() {
        $scope.customRequestPass = !0, angular.forEach($scope.trip, function(trip) {
            2 == trip.transportTypeIndex && ("future" == trip.status ? void 0 != $scope.specialNotes && "" != $scope.specialNotes || ($scope.customRequestPass = !1) : $scope.customRequestPass = !1)
        }), $scope.trip.length > 0 ? $scope.customRequestPass ? ($scope.loading = !0, "CC Billing" == $scope.billingType ? tokenizeCards(0) : (angular.forEach($scope.trip, function(trip) {
            trip.gratuity = $scope.slider.value, trip.sendPassengerReceiptEmail = $scope.sendReceiptToPassenger, trip.dmc_payment_method = $scope.dmcPaymentMethod, trip.dmc_payment_label = $scope.selectedBilling.payment_label, trip.dmc_payment_required = $scope.selectedBilling.payment_required, trip.notes = $scope.specialNotes
        }), $scope.bookPreparedTrip($scope.trip))) : toastr.error("Custom request need to be future and include a note") : toastr.error("Error booking your trip")
    };
    var tokenizeCards = function(i) {
        if (i < $scope.trip.length) {
            var expirationTime = $scope.card.date.split("/");
            stripe.card.createToken({
                number: $scope.card.number,
                cvc: $scope.card.cvv,
                exp_month: expirationTime[0],
                exp_year: expirationTime[1]
            }).then(function(res) {
                $scope.email, $scope.phone;
                $scope.newPaymentMethod = {
                    inactive: !1,
                    id: "SINGLE_USE",
                    is_apple_pay: !1,
                    redacted_number: res.card.last4,
                    card_brand: res.card.brand,
                    card_id: res.id,
                    card_name: "No Name"
                }, $scope.trip[i].payment = $scope.newPaymentMethod, $scope.trip[i].sendPassengerReceiptEmail = $scope.sendReceiptToPassenger, $scope.trip[i].gratuity = $scope.slider.value, $scope.trip[i].notes = $scope.specialNotes, tokenizeCards(i + 1)
            }, function(err) {
                $scope.errorViewer.display(err), $scope.loading = !1
            })
        } else console.log("bookNow"), $scope.bookPreparedTrip($scope.trip)
    };
    $scope.openModal = function(title, content) {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/customModal.html",
            scope: $scope,
            controller: "CustommodalCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1,
            resolve: {
                modalContent: function() {
                    return content
                },
                modalTitle: function() {
                    return title
                }
            }
        })
    }, $scope.bookPreparedTrip = function(trip) {
        tripRequest.postArray(trip).then(function(res) {
            console.log(res), $scope.loading = !1, toastr.success("Trip booked"), $scope.booked = !0
        }, function(err) {
            "Pickup location is not in a serviceable market" == err.error.message ? ($scope.openModal("We're sorry", "We do not yet have service near that pickup location"), $scope.loading = !1, $scope.booked = !1) : ($scope.loading = !1, $scope.errorViewer.display(err), $scope.booked = !1)
        })
    }, $scope.prepareRecap = function() {
        if ($scope.trip = [], "airport" == $scope.selectedOption) {
            var telInput = $("#bookingInput_phoneNumber"),
                country = telInput.intlTelInput("getSelectedCountryData"),
                phoneNumber = {
                    country_code: "+" + country.dialCode,
                    number: $scope.passengerPhone,
                    is_mobile: !1,
                    inactive: !1
                },
                from = $scope.selectedP2p.pointAGeo,
                to = $scope.selectedP2p.pointBGeo,
                fromMarker = {
                    lat: from[1],
                    lng: from[0]
                },
                toMarker = {
                    lat: to[1],
                    lng: to[0]
                };
            $scope.selectedP2p.id = $scope.selectedP2p.id.replace("reverse", ""), $scope.trip[0] = {
                passenger_first_name: $scope.passengerFirstName,
                passenger_email: $scope.passengerEmail,
                passenger_last_name: $scope.passengerLastName,
                passenger_phone: phoneNumber,
                transportClassIndex: 0,
                transportTypeIndex: parseInt($scope.carType),
                estimated_cost: $scope.estimate,
                hourly: 0,
                request_date: moment().format(),
                pointToPointCharge: $scope.selectedP2p.rates[0].transportTypes[$scope.carType].pointToPointRates.open,
                pointToPointMarkup: $scope.selectedP2p.markup,
                dmcPointToPointId: $scope.selectedP2p.id,
                dropoff_geo: toMarker,
                dropoff_address: $scope.selectedP2p.addressB,
                pickup_geo: fromMarker,
                pickup_address: $scope.selectedP2p.addressA
            }, moment($scope.futureDate) < moment().add(30, "minutes") ? ($scope.trip[0].trip_date = moment().format(), $scope.trip[0].status = "instant", $scope.trip[0].was_future = !1) : ($scope.trip[0].trip_date = moment($scope.futureDate).format(), $scope.trip[0].status = "future", $scope.trip[0].was_future = !0)
        } else if ("meeting" == $scope.selectedOption) {
            if ("pickup" == $scope.meetingOption || "dropoff" == $scope.meetingOption)
                for (var i = 0; i < $scope.meetingLegs.length; i++) {
                    $scope.fromStreet = void 0, angular.forEach($scope.meetingLegs[i].from.address_components, function(address_component, key) {
                        "street_number" == address_component.types[0] && ($scope.fromStreet = "", $scope.fromStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.fromStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.fromCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.fromState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.fromZip = address_component.long_name)
                    }), $scope.toStreet = void 0, angular.forEach($scope.meetingLegs[i].to.address_components, function(address_component, key) {
                        "street_number" == address_component.types[0] && ($scope.toStreet = "", $scope.toStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.toStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.toCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.toState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.toZip = address_component.long_name)
                    }), $scope.fromStreet ? $scope.fromStreet = $scope.fromStreet.replace("undefined", "") : $scope.meetingLegs[i].from.name ? $scope.fromStreet = $scope.meetingLegs[i].from.name : $scope.fromStreet = "", $scope.toStreet ? $scope.toStreet = $scope.toStreet.replace("undefined", "") : $scope.meetingLegs[i].to.name ? $scope.toStreet = $scope.meetingLegs[i].to.name : $scope.toStreet = "", $scope.fromZip || ($scope.fromZip = ""), $scope.toZip || ($scope.toZip = "");
                    var telInput = $("#bookingInput_phoneNumber"),
                        country = telInput.intlTelInput("getSelectedCountryData"),
                        phoneNumber = {
                            country_code: "+" + country.dialCode,
                            number: $scope.passengerPhone,
                            is_mobile: !1,
                            inactive: !1
                        };
                    $scope.trip[i] = {
                        passenger_first_name: $scope.passengerFirstName,
                        passenger_email: $scope.passengerEmail,
                        passenger_last_name: $scope.passengerLastName,
                        passenger_phone: phoneNumber,
                        transportClassIndex: 0,
                        transportTypeIndex: parseInt($scope.carType),
                        request_date: moment().format(),
                        notes: $scope.specialNotes,
                        dropoff_geo: {
                            lng: $scope.meetingLegs[i].to.geometry.location.lng(),
                            lat: $scope.meetingLegs[i].to.geometry.location.lat()
                        },
                        dropoff_address: {
                            city: $scope.toCity,
                            line_2: "",
                            number: "",
                            predirectional: "",
                            state: $scope.toState,
                            street_name: $scope.toStreet,
                            suffix: "",
                            zipcode: $scope.toZip
                        },
                        pickup_geo: {
                            lng: $scope.meetingLegs[i].from.geometry.location.lng(),
                            lat: $scope.meetingLegs[i].from.geometry.location.lat()
                        },
                        pickup_address: {
                            city: $scope.fromCity,
                            line_2: "",
                            number: "",
                            predirectional: "",
                            state: $scope.fromState,
                            street_name: $scope.fromStreet,
                            suffix: "",
                            zipcode: $scope.fromZip
                        }
                    }, moment($scope.meetingLegs[i].futureDate) < moment().add(30, "minutes") ? ($scope.trip[i].trip_date = moment().format(), $scope.trip[i].status = "instant", $scope.trip[i].was_future = !1) : ($scope.trip[i].trip_date = moment($scope.meetingLegs[i].futureDate).format(), $scope.trip[i].status = "future", $scope.trip[i].was_future = !0)
                } else if ("wait" == $scope.meetingOption) {
                    $scope.fromStreet = void 0, angular.forEach($scope.meetingLegs[0].from.address_components, function(address_component, key) {
                        "street_number" == address_component.types[0] && ($scope.fromStreet = "", $scope.fromStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.fromStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.fromCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.fromState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.fromZip = address_component.long_name)
                    }), $scope.fromStreet ? $scope.fromStreet = $scope.fromStreet.replace("undefined", "") : $scope.from.name ? $scope.fromStreet = $scope.from.name : $scope.fromStreet = "", $scope.fromZip || ($scope.fromZip = "");
                    var telInput = $("#bookingInput_phoneNumber"),
                        country = telInput.intlTelInput("getSelectedCountryData"),
                        phoneNumber = {
                            country_code: "+" + country.dialCode,
                            number: $scope.passengerPhone,
                            is_mobile: !1,
                            inactive: !1
                        };
                    $scope.trip[0] = {
                        passenger_first_name: $scope.passengerFirstName,
                        passenger_email: $scope.passengerEmail,
                        passenger_last_name: $scope.passengerLastName,
                        passenger_phone: phoneNumber,
                        transportClassIndex: 0,
                        hourly: !0,
                        expectedHours: $scope.hours,
                        transportTypeIndex: parseInt($scope.carType),
                        request_date: moment().format(),
                        notes: $scope.specialNotes,
                        pickup_geo: {
                            lng: $scope.meetingLegs[0].from.geometry.location.lng(),
                            lat: $scope.meetingLegs[0].from.geometry.location.lat()
                        },
                        pickup_address: {
                            city: $scope.fromCity,
                            line_2: "",
                            number: "",
                            predirectional: "",
                            state: $scope.fromState,
                            street_name: $scope.fromStreet,
                            suffix: "",
                            zipcode: $scope.fromZip
                        }
                    }, moment($scope.futureDate) < moment().add(30, "minutes") ? ($scope.trip[0].trip_date = moment().format(), $scope.trip[0].status = "instant", $scope.trip[0].was_future = !1) : ($scope.trip[0].trip_date = moment($scope.futureDate).format(), $scope.trip[0].status = "future", $scope.trip[0].was_future = !0)
                }
        } else if ("lunch" == $scope.selectedOption) {
            if ("pickup" == $scope.lunchOption || "dropoff" == $scope.lunchOption) {
                $scope.fromStreet = void 0, angular.forEach($scope.from.address_components, function(address_component, key) {
                    "street_number" == address_component.types[0] && ($scope.fromStreet = "", $scope.fromStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.fromStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.fromCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.fromState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.fromZip = address_component.long_name)
                }), $scope.toStreet = void 0, angular.forEach($scope.to.address_components, function(address_component, key) {
                    "street_number" == address_component.types[0] && ($scope.toStreet = "", $scope.toStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.toStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.toCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.toState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.toZip = address_component.long_name)
                }), $scope.fromStreet ? $scope.fromStreet = $scope.fromStreet.replace("undefined", "") : $scope.from.name ? $scope.fromStreet = $scope.from.name : $scope.fromStreet = "", $scope.toStreet ? $scope.toStreet = $scope.toStreet.replace("undefined", "") : $scope.to.name ? $scope.toStreet = $scope.to.name : $scope.toStreet = "", $scope.fromZip || ($scope.fromZip = ""), $scope.toZip || ($scope.toZip = "");
                var telInput = $("#bookingInput_phoneNumber"),
                    country = telInput.intlTelInput("getSelectedCountryData"),
                    phoneNumber = {
                        country_code: "+" + country.dialCode,
                        number: $scope.passengerPhone,
                        is_mobile: !1,
                        inactive: !1
                    };
                $scope.trip[0] = {
                    passenger_first_name: $scope.passengerFirstName,
                    passenger_email: $scope.passengerEmail,
                    passenger_last_name: $scope.passengerLastName,
                    passenger_phone: phoneNumber,
                    transportClassIndex: 0,
                    transportTypeIndex: parseInt($scope.carType),
                    request_date: moment().format(),
                    notes: $scope.specialNotes,
                    dropoff_geo: {
                        lng: $scope.to.geometry.location.lng(),
                        lat: $scope.to.geometry.location.lat()
                    },
                    dropoff_address: {
                        city: $scope.toCity,
                        line_2: "",
                        number: "",
                        predirectional: "",
                        state: $scope.toState,
                        street_name: $scope.toStreet,
                        suffix: "",
                        zipcode: $scope.toZip
                    },
                    pickup_geo: {
                        lng: $scope.from.geometry.location.lng(),
                        lat: $scope.from.geometry.location.lat()
                    },
                    pickup_address: {
                        city: $scope.fromCity,
                        line_2: "",
                        number: "",
                        predirectional: "",
                        state: $scope.fromState,
                        street_name: $scope.fromStreet,
                        suffix: "",
                        zipcode: $scope.fromZip
                    }
                }, moment($scope.futureDate) < moment().add(30, "minutes") ? ($scope.trip[0].trip_date = moment().format(), $scope.trip[0].status = "instant", $scope.trip[0].was_future = !1) : ($scope.trip[0].trip_date = moment($scope.futureDate).format(), $scope.trip[0].status = "future", $scope.trip[0].was_future = !0), "pickup" == $scope.lunchOption && ($scope.trip[1] = {
                    passenger_first_name: $scope.passengerFirstName,
                    passenger_email: $scope.passengerEmail,
                    passenger_last_name: $scope.passengerLastName,
                    passenger_phone: phoneNumber,
                    transportClassIndex: 0,
                    transportTypeIndex: parseInt($scope.carType),
                    request_date: moment().format(),
                    notes: $scope.specialNotes,
                    pickup_geo: {
                        lng: $scope.to.geometry.location.lng(),
                        lat: $scope.to.geometry.location.lat()
                    },
                    pickup_address: {
                        city: $scope.toCity,
                        line_2: "",
                        number: "",
                        predirectional: "",
                        state: $scope.toState,
                        street_name: $scope.toStreet,
                        suffix: "",
                        zipcode: $scope.toZip
                    },
                    dropoff_geo: {
                        lng: $scope.from.geometry.location.lng(),
                        lat: $scope.from.geometry.location.lat()
                    },
                    dropoff_address: {
                        city: $scope.fromCity,
                        line_2: "",
                        number: "",
                        predirectional: "",
                        state: $scope.fromState,
                        street_name: $scope.fromStreet,
                        suffix: "",
                        zipcode: $scope.fromZip
                    }
                }, $scope.trip[1].trip_date = moment($scope.returnDate).format(), $scope.trip[1].status = "future", $scope.trip[1].was_future = !0)
            } else if ("wait" == $scope.lunchOption) {
                $scope.fromStreet = void 0, angular.forEach($scope.from.address_components, function(address_component, key) {
                    "street_number" == address_component.types[0] && ($scope.fromStreet = "", $scope.fromStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.fromStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.fromCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.fromState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.fromZip = address_component.long_name)
                }), $scope.fromStreet ? $scope.fromStreet = $scope.fromStreet.replace("undefined", "") : $scope.from.name ? $scope.fromStreet = $scope.from.name : $scope.fromStreet = "", $scope.fromZip || ($scope.fromZip = "");
                var telInput = $("#bookingInput_phoneNumber"),
                    country = telInput.intlTelInput("getSelectedCountryData"),
                    phoneNumber = {
                        country_code: "+" + country.dialCode,
                        number: $scope.passengerPhone,
                        is_mobile: !1,
                        inactive: !1
                    };
                $scope.trip[0] = {
                    passenger_first_name: $scope.passengerFirstName,
                    passenger_email: $scope.passengerEmail,
                    passenger_last_name: $scope.passengerLastName,
                    passenger_phone: phoneNumber,
                    transportClassIndex: 0,
                    hourly: !0,
                    expectedHours: $scope.hours,
                    transportTypeIndex: parseInt($scope.carType),
                    request_date: moment().format(),
                    notes: $scope.specialNotes,
                    pickup_geo: {
                        lng: $scope.from.geometry.location.lng(),
                        lat: $scope.from.geometry.location.lat()
                    },
                    pickup_address: {
                        city: $scope.fromCity,
                        line_2: "",
                        number: "",
                        predirectional: "",
                        state: $scope.fromState,
                        street_name: $scope.fromStreet,
                        suffix: "",
                        zipcode: $scope.fromZip
                    }
                }, moment($scope.futureDate) < moment().add(30, "minutes") ? ($scope.trip[0].trip_date = moment().format(), $scope.trip[0].status = "instant", $scope.trip[0].was_future = !1) : ($scope.trip[0].trip_date = moment($scope.futureDate).format(), $scope.trip[0].status = "future", $scope.trip[0].was_future = !0)
            }
        } else if ("asDirected" == $scope.selectedOption) {
            $scope.fromStreet = void 0, angular.forEach($scope.from.address_components, function(address_component, key) {
                "street_number" == address_component.types[0] && ($scope.fromStreet = "", $scope.fromStreet += address_component.long_name), "route" == address_component.types[0] && ($scope.fromStreet += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.fromCity = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.fromState = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.fromZip = address_component.long_name)
            }), $scope.fromStreet ? $scope.fromStreet = $scope.fromStreet.replace("undefined", "") : $scope.from.name ? $scope.fromStreet = $scope.from.name : $scope.fromStreet = "", $scope.fromZip || ($scope.fromZip = "");
            var telInput = $("#bookingInput_phoneNumber"),
                country = telInput.intlTelInput("getSelectedCountryData"),
                phoneNumber = {
                    country_code: "+" + country.dialCode,
                    number: $scope.passengerPhone,
                    is_mobile: !1,
                    inactive: !1
                };
            $scope.trip[0] = {
                passenger_first_name: $scope.passengerFirstName,
                passenger_email: $scope.passengerEmail,
                passenger_last_name: $scope.passengerLastName,
                passenger_phone: phoneNumber,
                transportClassIndex: 0,
                hourly: !0,
                expectedHours: $scope.hours,
                transportTypeIndex: parseInt($scope.carType),
                request_date: moment().format(),
                notes: $scope.specialNotes,
                pickup_geo: {
                    lng: $scope.from.geometry.location.lng(),
                    lat: $scope.from.geometry.location.lat()
                },
                pickup_address: {
                    city: $scope.fromCity,
                    line_2: "",
                    number: "",
                    predirectional: "",
                    state: $scope.fromState,
                    street_name: $scope.fromStreet,
                    suffix: "",
                    zipcode: $scope.fromZip
                }
            }, moment($scope.futureDate) < moment().add(30, "minutes") ? ($scope.trip[0].trip_date = moment().format(), $scope.trip[0].status = "instant", $scope.trip[0].was_future = !1) : ($scope.trip[0].trip_date = moment($scope.futureDate).format(), $scope.trip[0].status = "future", $scope.trip[0].was_future = !0)
        }
        tripRequest.getMultiEstimate($scope.trip).then(function(res) {
            $scope.estimatedPrice = res
        }, function(err) {})
    }, $scope.validateNext = function(screen) {
        var message = "";
        return "finalize" == screen && ($scope.passengerFirstName ? $scope.passengerLastName ? $scope.passengerPhone ? $scope.dmcPaymentMethod ? $scope.billingType ? "CC Billing" == $scope.billingType && ($scope.card ? $scope.card.number || $scope.card.date || $scope.card.ccv || (message = "Please enter the card information") : message = "Please enter the card information") : message = "Please select a billing method" : message = "Please enter a room number" : message = "Please enter a valid phone number" : message = "Please enter a last name" : message = "Please enter a first name"), "passengerInfo" == screen && (void 0 != $scope.carType || (message = "Please select a car type")), message
    }, $scope.resetTime = function() {
        $scope.futureDate = moment().format(), "meeting" == $scope.selectedOption && ($scope.meetingLegs[0].futureDate = moment().format())
    }, $scope.removeLeg = function(index) {
        $scope.meetingLegs.splice(index, 1)
    }, $scope.$watch("billingType", function() {
        angular.forEach($scope.billingMethods, function(billingMethod, key) {
            $scope.billingType == billingMethod.payment_type && ($scope.selectedBilling = billingMethod)
        })
    }), $scope.rebook = function() {
        window.location.reload()
    }, init()
}]), angular.module("angularProjectApp").controller("ViewtriplogsCtrl", ["$scope", "trip", "tripRequest", function($scope, trip, tripRequest) {
    var init = function() {
        tripRequest.getLogs(trip).then(function(res) {
            $scope.logs = res
        })
    };
    init()
}]), angular.module("angularProjectApp").controller("AdminviewdmchistoryCtrl", ["$scope", "dmc", "$modalInstance", "Admin", "$modal", function($scope, dmc, $modalInstance, Admin, $modal) {
    var init = function() {
        $scope.futureDate = moment().subtract(1, "days").format(), Admin.dmcs.getDailyReports(dmc.id, moment($scope.futureDate).second(0).minute(0).hour(0).format(), moment($scope.futureDate).add(1, "days").second(0).minute(0).hour(0).format()).then(function(res) {
            $scope.daily = res
        }), $scope.dateOptions = {
            showWeeks: !1
        }
    };
    $scope.closeModal = function() {
        $modalInstance.close()
    }, $scope.refreshReport = function() {
        $scope.loading = !0, Admin.dmcs.getDailyReports(dmc.id, moment($scope.futureDate).second(0).minute(0).hour(0).format(), moment($scope.futureDate).add(1, "days").second(0).minute(0).hour(0).format()).then(function(res) {
            $scope.loading = !1, $scope.daily = res
        })
    }, init()
}]), angular.module("angularProjectApp").controller("CanceltripCtrl", ["$scope", "$modalInstance", function($scope, $modalInstance) {
    $scope.close = function() {
        $modalInstance.close()
    }, $scope.dismiss = function() {
        $modalInstance.dismiss()
    }
}]), angular.module("angularProjectApp").controller("FaqCtrl", ["$scope", "profile", function($scope, profile) {
    var init = function() {
        profile.getFaq().then(function(res) {
            $scope.faqs = res
        })
    };
    init()
}]), angular.module("angularProjectApp").controller("CustommodalCtrl", ["$scope", "$modalInstance", "modalTitle", "modalContent", function($scope, $modalInstance, modalTitle, modalContent) {
    $scope.title = modalTitle, $scope.content = modalContent, $scope.close = function() {
        $modalInstance.close()
    }, $scope.dismiss = function() {
        $modalInstance.dismiss()
    }
}]), angular.module("angularProjectApp").service("addressreader", function() {
    var addressreader = this;
    return addressreader.convertAddress = function(addressObject) {
        var convertAddress = {};
        return convertAddress.address = {
            city: "",
            line_2: "",
            number: "",
            predirectional: "",
            state: "",
            street_name: "",
            suffix: "",
            zipcode: ""
        }, convertAddress.geo = {}, angular.forEach(addressObject.address_components, function(address_component, key) {
            "street_number" == address_component.types[0] && (convertAddress.address.street_name = "", convertAddress.address.street_name += address_component.long_name), "route" == address_component.types[0] && (convertAddress.address.street_name += " " + address_component.long_name), "locality" == address_component.types[0] && (convertAddress.address.city = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && (convertAddress.address.state = address_component.long_name), "postal_code" == address_component.types[0] && (convertAddress.address.zipcode = address_component.long_name)
        }), convertAddress.address.street_name ? convertAddress.address.street_name = convertAddress.address.street_name.replace("undefined", "") : addressObject.name ? convertAddress.address.street_name = addressObject.name : convertAddress.address.street_name = "", convertAddress.geo.lat = addressObject.geometry.location.lat(), convertAddress.geo.lng = addressObject.geometry.location.lng(), convertAddress
    }, addressreader
}), angular.module("angularProjectApp").controller("DeleteconfirmationCtrl", ["$scope", "textContent", "toastr", "$modalInstance", function($scope, textContent, toastr, $modalInstance) {
    $scope.content = textContent, $scope.close = function() {
        $scope.notes ? $modalInstance.close($scope.notes) : toastr.error("You need to add a note")
    }, $scope.dismiss = function() {
        $modalInstance.dismiss()
    }
}]), angular.module("angularProjectApp").controller("InsuranceinfoCtrl", ["$scope", "tp", "imageProcessor", "$modalInstance", "tpAdmin", "$q", "toastr", function($scope, tp, imageProcessor, $modalInstance, tpAdmin, $q, toastr) {
    $scope.tPInfo = tp, $scope.tPInfo.TransportProviderInsurance && ($scope.tPInfo.insurance = {}, $scope.tPInfo.insurance.coverage = {}, $scope.tPInfo.insurance.coverage.expirationDate = $scope.tPInfo.TransportProviderInsurance.expires, $scope.tPInfo.insurance.coverage.generalLiability = $scope.tPInfo.TransportProviderInsurance.generalLiability),
        $scope.tPInfo.insurance.coverage.expirationDate && ($scope.tPInfo.insurance.coverage.expirationDate = new Date($scope.tPInfo.insurance.coverage.expirationDate)), $scope.statusCal1 = {
            opened: !1
        }, $scope.close = function() {
            $modalInstance.close()
        }, $scope.dismiss = function() {
            $modalInstance.dismiss()
        }, $scope.openCal1 = function($event) {
            $scope.statusCal1.opened = !0
        }, $scope.saveTPInsuranceInfo = function() {
            moment($scope.tPInfo.insurance.coverage.expirationDate) > moment() ? $scope.tPInfo.insurance.coverage.generalLiability >= 75e4 ? ($scope.loadingTPinfo = !0, tpAdmin.tPInfo.saveInsurance($scope.tPInfo, $scope.insuranceImage).then(function() {
                $scope.loadingTPinfo = !1, toastr.success("Insurance information uploaded")
            }, function(err) {
                $scope.loadingTPinfo = !1, $scope.errorViewer.display(err)
            })) : toastr.error("General liability must be greater than $750 000") : toastr.error("Expiration date must be later than today")
        }, $scope.resizeInsuranceImage = function(file, base64_object) {
            var deferred = $q.defer();
            if (file.size > 3145728) {
                var ratio = 3145728 / file.size,
                    url = URL.createObjectURL(file);
                imageProcessor.createImageAndConfig(url, {}, function(_this) {
                    return function(image, config) {
                        var options = {
                            height: image.height * ratio,
                            width: image.width * ratio,
                            quality: 1
                        };
                        imageProcessor.run(url, options, function(processedImage) {}, function(test, processedImage) {
                            var modelVal = {
                                file: file,
                                resized: processedImage
                            };
                            deferred.resolve(modelVal)
                        })
                    }
                }(imageProcessor))
            } else {
                var modelVal = {
                    originalFile: base64_object
                };
                deferred.resolve(modelVal)
            }
            return deferred.promise
        }
}]), angular.module("angularProjectApp").controller("RemoveconfirmationCtrl", ["$scope", "toastr", "$modalInstance", function($scope, toastr, $modalInstance) {
    $scope.close = function(type) {
        $scope["return"] = {}, "update" == type ? $scope.newDriverId ? ($scope["return"].type = "update", $scope["return"].driverId = $scope.newDriverId, $modalInstance.close($scope["return"])) : toastr.error("You need to provide a driver id") : "remove" == type && ($scope["return"].type = "remove", $modalInstance.close($scope["return"]))
    }, $scope.dismiss = function() {
        $modalInstance.dismiss()
    }
}]), angular.module("angularProjectApp").service("errorViewer", ["toastr", function(toastr) {
    var errorViewer = this;
    return errorViewer.display = function(error) {
        console.log(error), error.error && error.error.message ? toastr.error(error.error.message) : toastr.error("Sorry, an unknown error occured")
    }, errorViewer
}]), angular.module("angularProjectApp").controller("ConfirmacceptCtrl", ["$scope", "$modalInstance", "notes", function($scope, $modalInstance, notes) {
    $scope.notes = notes, $scope.close = function() {
        $modalInstance.close()
    }, $scope.dismiss = function() {
        $modalInstance.dismiss()
    }
}]), angular.module("angularProjectApp").controller("AddcreditCtrl", ["$scope", "toastr", "$modalInstance", function($scope, toastr, $modalInstance) {
    $scope.close = function() {
        $scope.notes ? ($scope["return"] = {
            notes: $scope.notes,
            amount: $scope.amount
        }, $modalInstance.close($scope["return"])) : toastr.error("You need to add a note")
    }, $scope.dismiss = function() {
        $modalInstance.dismiss()
    }
}]), angular.module("angularProjectApp").controller("PassengerCtrl", ["$scope", "$timeout", "tripRequest", function($scope, $timeout, tripRequest) {
    var init = function() {
            $scope.mapControl = {}, $scope.fromImage = {
                url: "https://d8w0otup5lda.cloudfront.net/icn_pin_big_green@2x.png",
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(12, 30),
                scaledSize: new google.maps.Size(23, 30)
            }, $scope.toImage = {
                url: "https://d8w0otup5lda.cloudfront.net/icn_pin_big_red@2x.png",
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(12, 30),
                scaledSize: new google.maps.Size(23, 30)
            }, $scope.fixedBtnScroll(), $scope.styles = [{
                featureType: "all",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#ffffff"
                }]
            }, {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{
                    saturation: 36
                }, {
                    color: "#333333"
                }, {
                    lightness: 40
                }]
            }, {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "all",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#dedede"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#dbd1ff"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#9e2020"
                }, {
                    lightness: "90"
                }, {
                    weight: .2
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 18
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#f2f2f2"
                }, {
                    lightness: 19
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#e9e9e9"
                }, {
                    lightness: 17
                }]
            }], $scope.map = {
                center: {
                    latitude: 37.623356,
                    longitude: -122.274649
                },
                zoom: 10
            }, $timeout(function() {
                var map = $scope.mapControl.getGMap();
                google.maps.event.trigger(map, "resize"), map.setOptions({
                    styles: $scope.styles,
                    disableDefaultUI: !0
                })
            }, 250)
        },
        calcRoute = function() {
            if ($scope.from.geometry && $scope.to.geometry) {
                var map = (new google.maps.Polyline({
                        strokeColor: "#90268e",
                        strokeOpacity: .6,
                        strokeWeight: 5
                    }), $scope.mapControl.getGMap()),
                    start = new google.maps.LatLng($scope.from.geometry.location.lat(), $scope.from.geometry.location.lng()),
                    end = new google.maps.LatLng($scope.to.geometry.location.lat(), $scope.to.geometry.location.lng()),
                    bounds = new google.maps.LatLngBounds;
                bounds.extend(start), bounds.extend(end), map.fitBounds(bounds);
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.TravelMode.DRIVING
                };
                directionsService.route(request, function(response, status) {
                    status == google.maps.DirectionsStatus.OK ? (directionsDisplay.setDirections(response), directionsDisplay.setMap(map)) : alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status)
                })
            }
        };
    $scope.getEstimate = function() {
        $scope.from.geometry && $scope.to.geometry && ($scope.estimateLoading = !0, tripRequest.getEstimate($scope.from, $scope.to).then(function(res) {
            $(".estimatePreview").hide(), $scope.estimateLoading = !1, $scope.estimate = res
        }, function() {
            $scope.estimateLoading = !1
        }))
    }, $scope.$watch("to", function() {
        $scope.estimate = "", $scope.from && $scope.to && calcRoute()
    }), $scope.$watch("estimate", function(res) {
        $scope.estimate || $(".estimatePreview").show()
    });
    var directionsService = new google.maps.DirectionsService,
        polylineOptionsActual = new google.maps.Polyline({
            strokeColor: "#90268e",
            strokeOpacity: .6,
            strokeWeight: 5
        }),
        directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: !0,
            polylineOptions: polylineOptionsActual
        });
    $scope.fixedBtnScroll = function() {
        $(window).scroll(function() {
            if ($("#passengerSales").length) {
                var y = $(window).scrollTop(),
                    belowForm = $(".headerSales").offset().top - 90;
                y > belowForm ? ($("#passengerSales").css("left", "0"), $("#passengerSales").addClass("salesScrollUp"), $(".salesScrollUp").fadeIn()) : belowForm > y && ($("#passengerSales").removeClass("salesScrollUp"), $("#passengerSales").removeAttr("style"))
            }
        }), $(".salesScrollUp").click(function() {
            if ($("#passengerSales").length) {
                var formTop = $(".headerSales").offset().top - 80;
                return $("html, body").animate({
                    scrollTop: formTop
                }, 1e3), !1
            }
        })
    }, init()
}]), angular.module("angularProjectApp").controller("DriverCtrl", ["$scope", function($scope) {}]), angular.module("angularProjectApp").controller("EditmarketCtrl", ["$scope", "leafletData", "$modalInstance", function($scope, leafletData, $modalInstance) {
    angular.extend($scope, {
        center: {
            lat: 37.7090978,
            lng: -122.4383229,
            zoom: 8
        }
    }), leafletData.getMap("marketMap").then(function(map) {
        var drawnItems = (new L.featureGroup).addTo(map);
        map.addControl(new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        })), map.on("draw:created", function(event) {
            var layer = event.layer;
            drawnItems.addLayer(layer), $scope.marketFeature = layer.toGeoJSON()
        })
    }), $scope.edit = function() {
        $modalInstance.close($scope.marketFeature)
    }, $scope.dismiss = function() {
        $modalInstance.dismiss()
    }
}]), angular.module("angularProjectApp").controller("ViewtpformarketCtrl", ["$scope", "marketId", "Admin", "$modal", function($scope, marketId, Admin, $modal) {
    var init = function() {
        Admin.markets.getMarketWithTps(marketId).then(function(res) {
            $scope.tps = res
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    };
    $scope.remove = function(tp) {
        Admin.tps.detachFromMarket(marketId, tp.id).then(function(res) {
            Admin.markets.getMarketWithTps(marketId).then(function(res) {
                $scope.tps = res
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.addTp = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: "/views/modals/addTpToMarket.html",
            controller: "AddtptomarketCtrl",
            backdrop: !0,
            keyboard: !1,
            animation: !1
        }), $scope.modalInstance.result.then(function(result) {
            Admin.tps.attachToMarket(marketId, result).then(function(res) {
                Admin.markets.getMarketWithTps(marketId).then(function(res) {
                    $scope.tps = res
                }, function(err) {
                    $scope.errorViewer.display(err)
                })
            }, function(err) {
                $scope.errorViewer.display(err)
            })
        }, function() {})
    }, init()
}]), angular.module("angularProjectApp").controller("AddtptomarketCtrl", ["$scope", "$modalInstance", "Admin", function($scope, $modalInstance, Admin) {
    $scope.searchTps = function() {
        $scope.skipTp = 0;
        var params = {
            search: $scope.tpFilter,
            skip: $scope.skipTp
        };
        Admin.tps.pull(params).then(function(res) {
            $scope.tps = res
        }, function(err) {})
    }, $scope.addTp = function(tp) {
        $modalInstance.close(tp.id)
    }
}]), angular.module("angularProjectApp").controller("AddinviteCtrl", ["$scope", "toastr", "marketId", "$modalInstance", "Admin", function($scope, toastr, marketId, $modalInstance, Admin) {
    var init = function() {
        $scope.marketId = marketId, Admin.markets.pull().then(function(res) {
            $scope.availableMarkets = res
        }, function(err) {})
    };
    $scope.addInvite = function() {
        $scope.invite.marketId = $scope.marketId, Admin.inviteCodes.add($scope.invite).then(function(res) {
            toastr.success("Invite added"), $modalInstance.close()
        }, function(err) {
            $scope.errorViewer.display(err)
        })
    }, $scope.closeModal = function() {
        $modalInstance.close()
    }, init()
}]), angular.module("angularProjectApp").controller("GbtaCtrl", ["$scope", function($scope) {}]), angular.module("angularProjectApp").controller("InternalcorpsignupCtrl", ["$scope", "Dmc", "toastr", "Auth", "$timeout", "$location", function($scope, Dmc, toastr, Auth, $timeout, $location) {
    var init = function() {};
    init(), $scope.signUp = function() {
        angular.forEach($scope.autoFillAddress.address_components, function(address_component, key) {
            "street_number" == address_component.types[0] && ($scope.street = "", $scope.street += address_component.long_name), "route" == address_component.types[0] && ($scope.street += " " + address_component.long_name), "locality" == address_component.types[0] && ($scope.city = address_component.long_name), "administrative_area_level_1" == address_component.types[0] && ($scope.state = address_component.long_name), "postal_code" == address_component.types[0] && ($scope.zip = address_component.long_name)
        }), $scope.formData.address = {
            city: $scope.city,
            line_2: "",
            number: "",
            predirectional: "",
            state: $scope.state,
            street_name: $scope.street,
            suffix: "",
            zipcode: $scope.zip
        }, $scope.formData.addressGeo = [$scope.autoFillAddress.geometry.location.lng(), $scope.autoFillAddress.geometry.location.lat()], $scope.loading = !0, $scope.formData.email = $scope.formData.email.toLowerCase(), Dmc.general.signUp($scope.formData).then(function(res) {
            $scope.loading = !1, toastr.success("Your account has been created"), login()
        }, function(err) {
            $scope.loading = !1, $scope.errorViewer.display(err)
        })
    };
    var login = function() {
        Auth.logIn($scope.formData.email, $scope.formData.password, "/DMCAdmins").then(function() {
            $location.path("/corpAdmin"), $timeout(function() {
                window.location.reload()
            }, 250)
        }, function(err) {})
    }
}]);
