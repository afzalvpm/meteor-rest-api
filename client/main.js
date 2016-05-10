import './main.html';
import widgets from '/imports/api/widgets/collection.js';
apiUrl = "http://localhost:3000/api/widgets/getRemove/";
apiUrlPost = "http://localhost:3000/api/widgets/insert/";

if (Meteor.isClient) {
   Template.info.helpers({
      posts: function() {
        return widgets.find();
      }
      
  })


}







Router.route('/', {
    template: 'info',
});



Template.info.events({
  'click .deleteData': function(event){
    event.preventDefault();
    var id = $(event.target).parent().parent().data('id');
    var name = $('.keyword').val();
    $.ajax({
            url: apiUrl+id,
            type: 'DELETE',
            dataType: 'json',
            success: function(result) {
            	console.log(result)
            }
        });
    
  },
  'click .deleteData': function(event){
    event.preventDefault();
    var id = $(event.target).parent().parent().data('id');
    var keyword = $('.keyword').val();
    $.ajax({
            url: apiUrl+id,
            type: 'DELETE',
            dataType: 'json',
            success: function(result) {
            	console.log(result)
            }
        });
    
  },
  'submit .addNew': function(event){
    event.preventDefault();
    var id = $(event.target).parent().parent().data('id');
    var keyword = $('.keyword').val();
    // widgets.remove({'_id':id});
    var name = $('#name').val()
    var age  = $('#age').val()

	if(name!=''&&age!=''){
		$('#name').val('')
		$('#age').val('')
    	$.ajax({
            url: apiUrlPost+name+'&'+age,
            type: 'POST',
            dataType: 'json',
            success: function(result) {
            	console.log(result)
            }
        });
    }
    
  }
});



