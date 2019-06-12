/*
* nova-table v0.1.0
* Copyright (c) 2019 erikwett <erik.wetterberg@gmail.com>
* Released under the MIT license.
*/

var properties = {
  showTitles: true,
  title: '',
  subtitle: '',
  footnote: ''
};

var data = {
  targets: []
};

function supernova(env) {
  return {
    qae: {
      properties: properties,
      data: data
    },
    component: {
      created: function created() {
        console.log('created', env);
      },
      mounted: function mounted(element) {
        element.innerHTML = '<div>Hello!</div>'; // eslint-disable-line
      },
      render: function render(_ref) {
        var layout = _ref.layout,
            context = _ref.context;
        console.log('render', layout, context);
      },
      resize: function resize() {},
      willUnmount: function willUnmount() {},
      destroy: function destroy() {}
    }
  };
}

export default supernova;
//# sourceMappingURL=nova-table.esm.js.map
