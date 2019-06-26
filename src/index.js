import properties from './object-properties';
import data from './data';

export default function supernova(env) {
  return {
    qae: {
      properties,
      data,
    },
    component: {
      created() {
        console.log('created', env);
      },
      mounted(element) {
        this.element = element;
        this.element.innerHTML = 'nova-table';
      },
      render({
        layout,
        context,
      }) {
        const hypercube = layout.qHyperCube;
        let html = '<table><thead><tr>';
        html += hypercube.qDimensionInfo.map(d => `<th>${d.qFallbackTitle}</th>`).join('');
        html += hypercube.qMeasureInfo.map(m => `<th>${m.qFallbackTitle}</th>`).join('');
        html += '</tr></thead><tbody>';
        html += hypercube.qDataPages[0].qMatrix.map(row => `<tr>${row.map(cell => `<td>${cell.qText}</td>`).join('')}</tr>`).join('');
        html += '</tbody></table>';
        this.element.innerHTML = html;
      },
      resize() {},
      willUnmount() {},
      destroy() {},
    },
  };
}
