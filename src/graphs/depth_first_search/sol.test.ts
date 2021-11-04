import * as chai from "chai";
import Node from "./Node";

it(`depth first search test`, function () {
  const graph = new Node("A");
  graph.addChild("B").addChild("C").addChild("D");
  graph.children[0].addChild("E").addChild("F");
  graph.children[2].addChild("G").addChild("H");
  graph.children[0].children[1].addChild("I").addChild("J");
  graph.children[2].children[0].addChild("K");
  chai
    .expect(graph.depthFirstSearch([]))
    .to.deep.equal(["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]);
});
