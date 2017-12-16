'use strict';

/**
 * @ngdoc service
 * @name yoemanIdsApp.FormDataService
 * @description
 * # FormDataService
 * Service in the yoemanIdsApp.
 */
angular.module('yoemanIdsApp')
  .service('FormDataService', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.set = function(app_no, fl_date, f_name_inventor, art_unit, exam_name, at_doc_no) {
        this.app_no = app_no;
        if (this.fl_date) {
          this.fl_date = fl_date.split('/').join('');
        }
        this.f_name_inventor = f_name_inventor;
        this.art_unit = art_unit;
        this.exam_name = exam_name;
        this.at_doc_no = at_doc_no;
      },
      this.get = function() {
        return {
          app_no: this.app_no,
          fl_date: this.fl_date,
          f_name_inventor: this.f_name_inventor,
          art_unit: this.art_unit,
          exam_name: this.exam_name,
          at_doc_no: this.at_doc_no
        };
      };
  });
