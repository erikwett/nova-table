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
        this.element.innerHTML = JSON.stringify(layout);
        console.log('render', this, layout, context);
      },
      resize() {},
      willUnmount() {},
      destroy() {},
    },
  };
}
