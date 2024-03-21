StarterKit.configure({
  heading: {
    levels: [1, 2, 3],
    HTMLAttributes(node) {
      if (node.attrs.level === 1) {
        return {
          class: 'text-4xl font-bold text-gray-800'
        }
      }
      // ...
    }
  },
}),