// 后序遍历函数
export function postOrderTraversal({ root, cb, rootLevel = 1 } = {}) {
  if (!root) return; // 如果根节点为空，直接返回

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];

  const stack = []; // 使用一个栈来辅助迭代
  arrayRoot.forEach((node) => {
    // 将根节点和他所对应的层数入队列
    stack.push({ node, level: rootLevel });
  });

  const visited = new Set(); // 使用一个集合来记录已访问过的节点

  while (stack.length > 0) {
    const { node, level, parent } = stack[stack.length - 1];

    // 如果当前节点的所有子节点都已经访问过，则输出当前节点的值，并将当前节点出栈
    if (
      !node.children ||
      node.children.length === 0 ||
      node.children.every((child) => visited.has(child))
    ) {
      typeof cb === "function" && cb({ node, level, parent });

      stack.pop();
      visited.add(node);
    } else {
      // 否则，将当前节点的未访问过的子节点入栈
      for (const child of node.children) {
        if (!visited.has(child)) {
          stack.push({ node: child, level: level + 1, parent: node });
        }
      }
    }
  }

  return root;
}
