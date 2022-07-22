/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('devices').del()
  await knex('devices').insert([
    {product_name: "TV", 
    product_description: "Descripton for TV " , 
    product_image_link:"link",
    product_brand:"samsung"
  },
  {product_name: "Forno", 
    product_description: "Descripton for Forno " , 
    product_image_link:"link",
    product_brand:"lg"
  },
  ]);
};
