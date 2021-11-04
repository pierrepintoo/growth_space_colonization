import Branch from './branch.js'
import Leaf from './leaf.js'
import * as THREE from '../libraries/three/build/three.module.js';

function Tree(boxX, boxY, boxZ, min_dist, max_dist, scene) {
  this.leaves = []
  this.branches = []
  this.nbLeaves = 300


  for(let i = 0; i < this.nbLeaves; i++) {
    this.leaves.push(new Leaf(boxX, boxY, boxZ, scene))
  }
  
  let dir = new THREE.Vector3(0, -1, 0)
  let pos = new THREE.Vector3(0, 0, 0)
  let root = new Branch(null, pos, dir)
  
  this.branches.push(root)
  
  let current = root
  let found = false
  
  // while (!found) {
  //   for (let i = 0; i < this.leaves.length; i++) {
  //     let d = p5.Vector.dist(current.pos, this.leaves[i].pos)
  //     if (d < max_dist) {
  //       found = true
  //     }
  //   }
        
  //   if (!found) {
  //     let branch = current.next()
  //     current = branch
  //     this.branches.push(current)
  //   }
  // }
  
  // this.grow = function(min_dist, max_dist) {
  //   for(let i = 0; i < this.leaves.length; i++) {
  //     let leaf = this.leaves[i]
  //     let closestBranch = null
  //     let record = 10000
      
  //     for(let j = 0; j < this.branches.length; j++) {
  //       let branch = this.branches[j]
  //       let d = p5.Vector.dist(leaf.pos, branch.pos)
        
  //       if (d < min_dist) {
  //         leaf.reached = true
  //         closestBranch = null
  //       } else if (d > max_dist) {
          
  //       } else if (closestBranch == null || d < record) {
  //         closestBranch = branch
  //         record = d
  //       }
  //     }
      
  //     if (closestBranch != null) {
  //       let newDir = p5.Vector.sub(leaf.pos, closestBranch.pos)
  //       newDir.normalize()
  //       closestBranch.dir.add(newDir)
  //       closestBranch.count++
  //     }
  //   }
    
  //   for (let i = this.leaves.length - 1; i >= 0; i--) {
  //     if (this.leaves[i].reached) {
  //       console.log('reached')
  //       this.leaves.splice(i, 1)
  //     }
  //   }
    
  //   for (let i = this.branches.length - 1; i >= 0 ; i--) {
  //     let branch = this.branches[i]
  //     if (branch.count > 0) {
  //       branch.dir.div(branch.count)
  //       let newPos = p5.Vector.add(branch.pos, branch.dir)
        
  //       let newBranch = new Branch(branch, newPos, branch.dir.copy())
        
  //       this.branches.push(newBranch)
  //     }
  //     branch.reset()
  //   }
  // }
  
  this.show = function() {
    for (let i = 0; i < this.leaves.length; i++) {
      this.leaves[i].show()
    }
    // for (let i = 0; i < this.branches.length ; i++) {
    //   this.branches[i].show()
    // }
  }
}

export default Tree