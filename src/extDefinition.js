const extDefinition = {
  definition: {
    type: 'items',
    component: 'accordion',
    items: {
      data: {
        uses: 'data',
      },
      settings: {
        uses: 'settings',
      },
    },
  },
  support: {
    export: true,
    exportData: true,
    snapshot: true,
    viewData: false,
  },
};

export default extDefinition;
