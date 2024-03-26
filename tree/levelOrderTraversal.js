/**
 * @description 层序遍历，遍历时调用cb
 * @param {Array|Object} options.root 根节点，或者是包含根节点的数组
 * @param {Function} cb 层序遍历节点的回调
 * @returns {Array|Object}
 */
export function levelOrderTraversal({ root, cb, rootLevel = 1 } = {}) {
  // 空树,直接返回
  if (!root) return;

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];

  // 队列维护树的每层节点
  const queue = [];
  arrayRoot.forEach((node) => {
    // 将根节点和他所对应的层数入队列
    queue.push({ node, level: rootLevel });
  });

  // 循环队列
  while (queue.length) {
    // 出队
    const { node, level } = queue.shift();
    // 调用回调
    const breakLoop = typeof cb === "function" && cb({ node, level });

    if (breakLoop) break;

    if (Array.isArray(node.children) && node.children.length) {
      node.children.forEach((node) => {
        queue.push({ node, level: level + 1 });
      });
    }
  }

  return root;
}
