(function () {
    var testCourse = {id: 'DUM101', 
                  shortName: 'Dummy Course 101', 
                  shortDescription: "This is a dummy course to be used as a placeholder for the sake of testing",
                  type: "Self-directed lab",
                  tags: ["tag1", "tag2", "tag3"]};
    var app = angular.module("sideBySide", ['ui.layout']);
    app.controller('LeftViewController', function () {
        this.course = testCourse;
    });
})();