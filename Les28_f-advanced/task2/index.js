// algo
// create f - export
// => input obj, [], output - obj
// find isFavorite elem
// add field isFavorite (boolean) in obj
// check always nodes

const favorites = ['id-2', 'id-3'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-3',
          name: 'Meat',
          nodes: [],
        },
      ],
    },
    {
      id: 'id-4',
      name: 'Cars',
      nodes: [],
    },
  ],
};

export const markFavorites = (objTree, arrFavorite) => {
  const isFavorite = arrFavorite.includes(objTree.id);
  return {
    ...objTree,
    isFavorite,
    nodes: objTree.nodes.map(childNode => markFavorites(childNode, arrFavorite)),
  }; // в nodes ищем isFavorite на всех уровнях вложенности
};

const res = markFavorites(tree, favorites);
console.log(res);
