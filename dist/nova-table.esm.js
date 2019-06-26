/*
* nova-table v0.1.0
* Copyright (c) 2019 erikwett <erik.wetterberg@gmail.com>
* Released under the MIT license.
*/

var properties = {
  showTitles: true,
  title: '',
  subtitle: '',
  footnote: '',
  qHyperCubeDef: {
    qDimensions: [],
    qMeasures: [],
    qInitialDataFetch: [{
      qWidth: 10,
      qHeight: 50
    }]
  }
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
        this.element = element;
        this.element.innerHTML = 'nova-table';
      },
      render: function render(_ref) {
        var layout = _ref.layout,
            context = _ref.context;
        var hypercube = layout.qHyperCube;
        var html = '<table><thead><tr>';
        html += hypercube.qDimensionInfo.map(function (d) {
          return "<th>".concat(d.qFallbackTitle, "</th>");
        }).join('');
        html += hypercube.qMeasureInfo.map(function (m) {
          return "<th>".concat(m.qFallbackTitle, "</th>");
        }).join('');
        html += '</tr></thead><tbody>';
        html += hypercube.qDataPages[0].qMatrix.map(function (row) {
          return "<tr>".concat(row.map(function (cell) {
            return "<td>".concat(cell.qText, "</td>");
          }).join(''), "</tr>");
        }).join('');
        html += '</tbody></table>';
        this.element.innerHTML = html;
      },
      resize: function resize() {},
      willUnmount: function willUnmount() {},
      destroy: function destroy() {}
    }
  };
}

export default supernova;
//# sourceMappingURL=nova-table.esm.js.map
