export function flatTree({ tree }) {
  let res = [];
  tree.forEach((el) => {
    res.push(el);
    el.children && res.push(...flatTree({ tree: el.children }));
  });
  return res;
}
