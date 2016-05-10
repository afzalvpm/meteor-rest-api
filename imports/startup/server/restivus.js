import { Restivus } from 'meteor/nimble:restivus';

import widgets from '/imports/api/widgets/collection.js';

const api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});


api.addRoute('widgets/getRemove/:id', {authRequired: false}, {
    get: function () {
    	if (widgets.findOne(this.urlParams.id)) {
      		return widgets.findOne(this.urlParams.id);
      	}
      	else{
      		        return {
          statusCode: 404,
          body: {status: 'fail', message: 'widget not found'}
        };

      	}
    },
    delete: {
      action: function () {
        if (widgets.remove(this.urlParams.id)) {

          return {status: 'success', data: {message: 'widgets removed'}};
        }
        return {
          statusCode: 404,
          body: {status: 'fail', message: 'widgets not found'}
        };
      }
    }
  });


api.addRoute('widgets/insert/:name&:age', {authRequired: false}, {

    post: function () {
        console.log(this.urlParams)
        var nameAge = this.urlParams['name&:age'].split('&')
        widgets.insert({'name':nameAge[0],'age':nameAge[1]})
        return {status: 'success', data: {message: 'widgets Added'}};

    },
  });

