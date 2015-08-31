angular.module('quick-survey').directive('manageSurvey', function () {
  return {
    restrict: 'A',
    scope: {
      survey: '=',
    },
    controller: function ($scope) {

      $scope.questionTypes = [
        {'type': 'number'},
        {'type': 'text'},
        {'type': 'textarea'},
        {'type': 'radio'},
        {'type': 'date'}
        // ToDo: Add more question types as the question directive supports them.
      ];

      $scope.toggleAddingQuestion = function() {
        $scope.addingQuestion = !$scope.addingQuestion;
      };
    },
    templateUrl: 'client/js/admin/directives/manage-survey.ng.html',
  };
});
