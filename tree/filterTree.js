// 拷贝树
export function filterTree({ root, condition = () => true, rootLevel = 1 }) {
  if (!root) return null;

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];
  const copy = ({ node }) => {
    return {
      ...node,
      children: [],
    };
  };

  const stack = []; // 使用一个栈来辅助迭代
  let filteredTree = null;
  const filteredStack = [];
  arrayRoot.forEach((node) => {
    if (condition({ node, level: rootLevel })) {
      // 将根节点和他所对应的层数入队列
      stack.push({ node, level: rootLevel });

      const filteredNode = copy({ node });
      filteredStack.push({ node: filteredNode, level: rootLevel });

      if (rootIsArray) {
        if (!filteredTree) {
          filteredTree = [];
        }
        filteredTree.push(filteredNode);
      } else {
        filteredTree = filteredNode;
      }
    }
  });

  while (stack.length > 0) {
    let { node, level, parent } = stack.pop();
    let { node: filteredNode } = filteredStack.pop();

    for (let child of node.children) {
      if (condition({ node: child, level: level + 1, parent: node })) {
        const newChild = copy({ node: child });
        filteredNode.children.push(newChild);
        filteredStack.push({
          node: newChild,
          level: level + 1,
          parent: filteredNode,
        });
        stack.push({ node: child, level: level + 1, parent: node });
      }
    }
  }

  return filteredTree;
}
