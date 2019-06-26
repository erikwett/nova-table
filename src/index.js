import properties from './object-properties';
import data from './data';
import './style.css';

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
        let html = '<div class="nova-table"><table><thead><tr>';
        html += hypercube.qDimensionInfo.map(d => `<th>${d.qFallbackTitle}</th>`).join('');
        html += hypercube.qMeasureInfo.map(m => `<th>${m.qFallbackTitle}</th>`).join('');
        html += '</tr></thead><tbody>';
        html += hypercube.qDataPages[0].qMatrix.map(row => `<tr>${row.map(cell => `<td${cell.qNum === 'NaN' ? '' : ' class="numeric"'}>${cell.qText}</td>`).join('')}</tr>`).join('');
        html += '</tbody></table></div>';
        this.element.innerHTML = html;
      },
      resize() {},
      willUnmount() {},
      destroy() {},
    },
  };
}
