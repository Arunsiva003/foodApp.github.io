import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    
    {
      name:"description",
      type:"string",
      title:"Dish Name",
      validation : rule => rule.required()
    },
    {
      name:"image",
      type:"image",
      title:"Dish Image"
    },
    {
        name:"price",
        type:"number",
        title:"Dish Price in USD"
    },
  ],
})
