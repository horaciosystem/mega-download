import Ember from 'ember';
import {request} from '../utils/http';

export default Ember.Controller.extend({
  progressValue: 0,
  max: 100,
  actions: {
    download: function () {

      request('api/file', {
        success: xhr => {
          var url = URL.createObjectURL(xhr.response);
          this.set('downloadUrl', url);
        },
        progress: e => {
          if(e.lengthComputable){
            var progress = e.loaded / e.total * 100;
            this.set('progressValue', progress);
          } else {
            console.log('não tem tamanho. hã ? ');
          }
        }
      });
    },


  }
});
