import widgets from '/imports/api/widgets/collection.js';

if (widgets.find().count() === 0) {
  widgets.insert({ name: 'Afxal',age:24});
  widgets.insert({ name: 'Vinay',age:26});
  widgets.insert({ name: 'Vinod',age:27});
  widgets.insert({ name: 'Amogh',age:27});
  widgets.insert({ name: 'Jomin',age:26});
}
