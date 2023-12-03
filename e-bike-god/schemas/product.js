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
            name: 'spec1',
            title: 'Spec1',
            type: 'string',
        },
        {
            name: 'spec2',
            title: 'Spec2',
            type: 'string',
        },         
        {
            name: 'spec3',
            title: 'Spec3',
            type: 'string',
        },        
        {
            name: 'spec4',
            title: 'Spec4',
            type: 'string',
        },
        {
            name: 'spec5',
            title: 'Spec5',
            type: 'string',
        },
        {
            name: 'spec6',
            title: 'Spec6',
            type: 'string',
        },
        {
            name: 'spec7',
            title: 'Spec7',
            type: 'string',
        },         
        {
            name: 'spec8',
            title: 'Spec8',
            type: 'string',
        },        
        {
            name: 'spec9',
            title: 'Spec9',
            type: 'string',
        },
        {
            name: 'spec10',
            title: 'Spec10',
            type: 'string',
        },
        {
            name: 'spec11',
            title: 'Spec11',
            type: 'string',
        },
        {
            name: 'specDetails1',
            title: 'SpecDetails1',
            type: 'string',
        },
        {
            name: 'specDetails2',
            title: 'SpecDetails2',
            type: 'string',
        },         
        {
            name: 'specDetails3',
            title: 'SpecDetails3',
            type: 'string',
        },        
        {
            name: 'specDetails4',
            title: 'SpecDetails4',
            type: 'string',
        },
        {
            name: 'specDetails5',
            title: 'SpecDetails5',
            type: 'string',
        },
        {
            name: 'specDetails6',
            title: 'SpecDetails6',
            type: 'string',
        },
        {
            name: 'specDetails7',
            title: 'SpecDetails7',
            type: 'string',
        },         
        {
            name: 'specDetails8',
            title: 'SpecDetails8',
            type: 'string',
        },        
        {
            name: 'specDetails9',
            title: 'SpecDetails9',
            type: 'string',
        },
        {
            name: 'specDetails10',
            title: 'SpecDetails10',
            type: 'string',
        },
        {
            name: 'specDetails11',
            title: 'SpecDetails11',
            type: 'string',
        }

    ]
}