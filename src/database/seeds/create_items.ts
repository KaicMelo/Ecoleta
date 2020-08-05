import Knex from 'knex';

export async  function seed(knex:Knex)
{
    await knex("items").insert([
        {title: 'Lampadas',image:'lampada.svg'},
        {title: 'Pilhas e baterias',image:'baterias.svg'},
        {title: 'Papéis e Papelão',image:'papeis-papelao.svg'},
        {title: 'Resíduos Eletrônicos',image:'eletronicos.svg'},
        {title: 'Resíduos Orgnicos',image:'ôrganicos.svg'},
        {title: 'Óleo de Cozinha',image:'oleo.svg'}
    ]);
}