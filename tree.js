/**
 *
 * @export
 * @class TreeMenu
 * @returns 返回经过处理后的数据列表
 */
export class TreeMenu {
  constructor (a) {
    this.tree = a || []
    this.groups = {}
  }

  init (parentId) {
    this.group()
    return this.getDom(this.groups[parentId])
  }

  group () {
    for (let i = 0; i < this.tree.length; i++) {
      if (this.groups[this.tree[i].parentId]) {
        this.groups[this.tree[i].parentId].push(this.tree[i])
      } else {
        this.groups[this.tree[i].parentId] = []
        this.groups[this.tree[i].parentId].push(this.tree[i])
      }
    }
  }

  getDom (a) {
    if (!a) return ''
    let tree = []
    for (let i = 0; i < a.length; i++) {
      a[i].children = this.getDom(this.groups[a[i].id])
      tree.push(a[i])
    }
    return tree
  }
}
