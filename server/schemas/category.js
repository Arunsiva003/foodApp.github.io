import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Category Name",
      validation : rule => rule.required()
    },
    {
      name:"description",
      type:"string",
      title:"Category Descrription",
      validation : rule => rule.required()
    },
    {
      name:"image",
      type:"image",
      title:"Category Image",
      validation : rule => rule.required()
    },
  ],
})
