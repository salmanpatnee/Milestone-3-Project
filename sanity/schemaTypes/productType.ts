import { defineField, defineType } from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'Slug',
            type: 'slug',
        }),
        defineField({
            name: 'subtitle',
            type: 'string',
        }),
        defineField({
            name: 'price',
            type: 'number',
        }),
        defineField({
            name: 'salePrice',
            type: 'number',
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'details',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})