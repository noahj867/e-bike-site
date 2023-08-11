export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    orderings: [
        {
          title: 'Manual Order',
          name: 'manualOrder',
          by: [{ field: 'order', direction: 'asc' }]
        },
      ],
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            options: 'For ordering'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'price_display',
            title: 'Price Display',
            type: 'string',
        },

        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'highlight1',
            title: 'Highlight1',
            type: 'string',
        },
        {
            name: 'highlight2',
            title: 'Highlight2',
            type: 'string',
        },         
        {
            name: 'highlight3',
            title: 'Highlight3',
            type: 'string',
        },        
        {
            name: 'highlight4',
            title: 'Highlight4',
            type: 'string',
        },
        {
            name: 'highlight5',
            title: 'Highlight5',
            type: 'string',
        },

    ]
}